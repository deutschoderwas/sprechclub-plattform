// Lehrer-Wochenplan per E-Mail (Brevo).
// Laeuft per Supabase pg_cron jeden Sonntag 18:00 UTC (Job: send-weekly-plan-sunday).
// Schickt jedem aktiven Lehrer (teachers.email) seinen Unterrichtsplan der KOMMENDEN Woche (Mo-So).
// Frueher: Wochenplan an alle Schueler -> entfernt (Schueler bekommen Vorabend- + 1h-Erinnerung).
// Dedupe via email_log kind='teacher_weekly' ref='<teacherId>:<montag>'.
// ENV: BREVO_API_KEY, BREVO_SENDER_EMAIL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
import { createClient } from '@supabase/supabase-js';

const TZ = 'Europe/Berlin';

function berlinOffsetMs(date) {
  const dtf = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const p = dtf.formatToParts(date).reduce((a, x) => (a[x.type] = x.value, a), {});
  const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
  return asUTC - date.getTime();
}

function weekRange(now) {
  const off = berlinOffsetMs(now);
  const bn = new Date(now.getTime() + off);
  const dow = bn.getUTCDay(); // 0 So .. 6 Sa
  let add = ((1 - dow) + 7) % 7; if (add === 0) add = 7; // naechster Montag (immer in der Zukunft)
  const bStart = new Date(Date.UTC(bn.getUTCFullYear(), bn.getUTCMonth(), bn.getUTCDate() + add, 0, 0, 0));
  const startUTC = new Date(bStart.getTime() - berlinOffsetMs(bStart));
  const endUTC = new Date(startUTC.getTime() + 7 * 24 * 3600 * 1000);
  return { startUTC, endUTC };
}

function fmtDay(iso) {
  return new Intl.DateTimeFormat('de-DE', { timeZone: TZ, weekday: 'long', day: '2-digit', month: '2-digit' }).format(new Date(iso));
}
function fmtTime(iso) {
  return new Intl.DateTimeFormat('de-DE', { timeZone: TZ, hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
}
function fmtRange(s, e) {
  const d = (x) => new Intl.DateTimeFormat('de-DE', { timeZone: TZ, day: '2-digit', month: '2-digit' }).format(x);
  return d(s) + '-' + d(new Date(e.getTime() - 1));
}

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY || !process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, skipped: 'env' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const now = new Date();
  const { startUTC, endUTC } = weekRange(now);
  const mondayKey = startUTC.toISOString().slice(0, 10);

  const { data: teachers } = await sb.from('teachers').select('id,name,email,active').eq('active', true);
  const list = (teachers || []).filter((t) => t.email && t.email.includes('@'));
  if (!list.length) return res.status(200).json({ ok: true, teachers: 0 });

  const { data: classes } = await sb.from('classes')
    .select('id,title,topic,level,starts_at,club,teacher_id,is_cancelled')
    .gte('starts_at', startUTC.toISOString())
    .lt('starts_at', endUTC.toISOString())
    .order('starts_at', { ascending: true });
  const active = (classes || []).filter((c) => !c.is_cancelled && c.teacher_id);

  const ids = active.map((c) => c.id);
  const counts = {};
  if (ids.length) {
    const { data: bks } = await sb.from('bookings').select('class_id,status').in('class_id', ids);
    (bks || []).forEach((b) => { if (b.status === 'booked' || b.status === 'attended') counts[b.class_id] = (counts[b.class_id] || 0) + 1; });
  }

  const results = [];
  for (const t of list) {
    const mine = active.filter((c) => c.teacher_id === t.id);
    if (!mine.length) continue; // keine Stunden -> keine Mail

    const ref = t.id + ':' + mondayKey;
    const { data: prev } = await sb.from('email_log').select('id').eq('kind', 'teacher_weekly').eq('ref', ref).limit(1);
    if (prev && prev.length) { results.push({ to: t.email, already: true }); continue; }

    const ok = await sendPlan(t, mine, counts, startUTC, endUTC);
    if (ok) { try { await sb.from('email_log').insert({ kind: 'teacher_weekly', ref }); } catch (e) {} }
    results.push({ to: t.email, sent: ok, stunden: mine.length });
  }
  return res.status(200).json({ ok: true, week: mondayKey, results });
}

async function sendPlan(teacher, mine, counts, startUTC, endUTC) {
  try {
    const vorname = (teacher.name || '').split(' ')[0] || '';
    const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
    const range = fmtRange(startUTC, endUTC);
    const rows = mine.map((c) => {
      const titel = c.title || c.topic || 'Stunde';
      const lvl = c.level ? ` &middot; ${c.level}` : '';
      const n = counts[c.id] || 0;
      return `<tr>
        <td style="padding:10px 12px;border-bottom:1px solid #F0E5D8;font-size:14px;white-space:nowrap"><b>${fmtDay(c.starts_at)}</b><br><span style="color:#0F766E;font-weight:700">${fmtTime(c.starts_at)} Uhr</span></td>
        <td style="padding:10px 12px;border-bottom:1px solid #F0E5D8;font-size:14px">${titel}${lvl}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #F0E5D8;font-size:14px;text-align:center;white-space:nowrap">${n} &#128101;</td>
      </tr>`;
    }).join('');

    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span> <span style="font-size:13px;color:#6B7280">club</span></span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Dein Wochenplan</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:24px;line-height:1.2;margin:8px 0 6px;color:#1A1A1A">Deine Stunden vom ${range} &#128197;</h1>
        <p style="font-size:15px;line-height:1.6;margin:0 0 14px">${hallo} hier ist dein Unterrichtsplan f&uuml;r die kommende Woche. Insgesamt <b>${mine.length} ${mine.length === 1 ? 'Stunde' : 'Stunden'}</b>:</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #F0E5D8;border-radius:14px;overflow:hidden;border-collapse:separate;border-spacing:0">
          <tr style="background:#F2FBFA">
            <td style="padding:10px 12px;font-size:12px;font-weight:700;color:#0F766E;text-transform:uppercase">Wann</td>
            <td style="padding:10px 12px;font-size:12px;font-weight:700;color:#0F766E;text-transform:uppercase">Unterricht</td>
            <td style="padding:10px 12px;font-size:12px;font-weight:700;color:#0F766E;text-transform:uppercase;text-align:center">Gebucht</td>
          </tr>
          ${rows}
        </table>
        <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:14px 0 0">Die Zahlen zeigen die aktuell gebuchten Pl&auml;tze &ndash; sie k&ouml;nnen sich bis zur Stunde noch &auml;ndern.</p>
      </td></tr>
      <tr><td style="padding:16px 32px 22px">
        <p style="font-size:15px;line-height:1.6;margin:0">Eine sch&ouml;ne Woche &amp; viel Freude beim Unterrichten! &#128156;<br><strong>deutschoderwas club</strong></p>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:16px 32px;text-align:center">
        <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">Interne Lehrer-Info &middot; deutschoderwas club</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: teacher.email, name: teacher.name || undefined }],
        subject: `Dein Wochenplan ${range}`,
        htmlContent: html,
      }),
    });
    if (!r.ok) { console.error('teacher-weekly brevo', r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error('teacher-weekly send', e); return false; }
}
