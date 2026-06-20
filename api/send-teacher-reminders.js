// Lehrer-Erinnerungen per E-Mail (Brevo).
// Wird stündlich getriggert (Supabase pg_cron -> pg_net POST auf diese Route).
//  (1) Kurze Erinnerung ~1 Std. vor jeder Stunde, die einem Lehrer zugeordnet ist.
//  (2) Vorabend-Tagesplan: jeden Abend um 20:00 (Berlin) der Plan fuer den naechsten Tag.
// Adressat ist teachers.email (NICHT die Schueler). email_log (kind:'teacher_reminder' /
// 'teacher_dayplan') sorgt fuer genau EINE Mail pro Stunde bzw. pro Lehrer-Tag.
import { createClient } from '@supabase/supabase-js';

const TZ = 'Europe/Berlin';
const TIME_FMT    = new Intl.DateTimeFormat('de-DE', { timeZone: TZ, hour: '2-digit', minute: '2-digit' });
const WHEN_FMT    = new Intl.DateTimeFormat('de-DE', { timeZone: TZ, weekday: 'long', hour: '2-digit', minute: '2-digit' });
const DAYLABEL_FMT = new Intl.DateTimeFormat('de-DE', { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long' });

function berlinHour(d) {
  return parseInt(new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', hour12: false }).format(d), 10);
}
function berlinDateKey(d) {
  // en-CA -> "YYYY-MM-DD" in Berliner Zeit (DST-sicher)
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
}

async function sendBrevo(t, subject, html) {
  return fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to: [{ email: t.email, name: t.name || undefined }],
      subject,
      htmlContent: html,
    }),
  });
}

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const now = new Date();

  const { data: teachers } = await sb.from('teachers').select('id,name,email,profile_id');
  const tmap = Object.fromEntries((teachers || []).map(t => [t.id, t]));
  const { data: clubs } = await sb.from('clubs').select('slug,name,emoji,color');
  const clubmap = Object.fromEntries((clubs || []).map(c => [c.slug, c]));

  let soonSent = 0, planSent = 0, errors = 0;

  // ---------- (1) Kurze Erinnerung ~1 Std. vorher ----------
  {
    const until = new Date(now.getTime() + 90 * 60 * 1000);
    const { data: cls } = await sb.from('classes')
      .select('id,title,level,topic,starts_at,zoom_link,club,capacity,teacher_id')
      .gt('starts_at', now.toISOString()).lt('starts_at', until.toISOString())
      .eq('is_cancelled', false).not('teacher_id', 'is', null);

    for (const c of (cls || [])) {
      const t = tmap[c.teacher_id];
      if (!t?.email) continue;
      const ref = `${c.id}`;
      const { error: logErr } = await sb.from('email_log').insert({ kind: 'teacher_reminder', ref, user_id: t.profile_id || null });
      if (logErr) continue; // schon erinnert

      const { data: bk } = await sb.from('bookings').select('user_id').eq('class_id', c.id).eq('status', 'booked');
      const ids = (bk || []).map(b => b.user_id);
      let students = [];
      if (ids.length) {
        const { data: ps } = await sb.from('profiles').select('name,email').in('id', ids);
        students = (ps || []).map(p => p.name || p.email).filter(Boolean);
      }
      const club = clubmap[c.club] || null;
      const when = WHEN_FMT.format(new Date(c.starts_at));
      const html = teacherSoonEmail({
        teacherName: (t.name || '').split(' ')[0] || 'du',
        cls: c, when, site,
        clubName: club?.name || '', clubEmoji: club?.emoji || '', clubColor: club?.color || '#2DD4BF',
        students, count: students.length,
      });
      const r = await sendBrevo(t, `⏰ Gleich unterrichtest du: ${c.title} – ${TIME_FMT.format(new Date(c.starts_at))} Uhr`, html);
      if (r.ok) soonSent++; else { errors++; await sb.from('email_log').delete().eq('kind', 'teacher_reminder').eq('ref', ref); }
    }
  }

  // ---------- (2) Vorabend-Tagesplan (nur 20:00 Berlin) ----------
  if (berlinHour(now) === 20) {
    const tomorrowKey = berlinDateKey(new Date(now.getTime() + 24 * 3600 * 1000));
    const windowEnd = new Date(now.getTime() + 50 * 3600 * 1000);
    const { data: cls } = await sb.from('classes')
      .select('id,title,level,topic,starts_at,club,capacity,teacher_id')
      .gt('starts_at', now.toISOString()).lt('starts_at', windowEnd.toISOString())
      .eq('is_cancelled', false).not('teacher_id', 'is', null).order('starts_at');

    const tomorrow = (cls || []).filter(c => berlinDateKey(new Date(c.starts_at)) === tomorrowKey);
    const ids = tomorrow.map(c => c.id);
    let counts = {};
    if (ids.length) {
      const { data: bk } = await sb.from('bookings').select('class_id').in('class_id', ids).eq('status', 'booked');
      (bk || []).forEach(b => { counts[b.class_id] = (counts[b.class_id] || 0) + 1; });
    }
    const byTeacher = {};
    tomorrow.forEach(c => { (byTeacher[c.teacher_id] = byTeacher[c.teacher_id] || []).push(c); });
    const dateLabel = DAYLABEL_FMT.format(new Date(now.getTime() + 24 * 3600 * 1000));

    for (const [tid, list] of Object.entries(byTeacher)) {
      const t = tmap[tid];
      if (!t?.email) continue;
      const ref = `${tid}:${tomorrowKey}`;
      const { error: logErr } = await sb.from('email_log').insert({ kind: 'teacher_dayplan', ref, user_id: t.profile_id || null });
      if (logErr) continue; // Tagesplan schon verschickt

      const items = list.map(c => ({
        time: TIME_FMT.format(new Date(c.starts_at)),
        cls: c, club: clubmap[c.club] || null, count: counts[c.id] || 0,
      }));
      const html = teacherDayPlanEmail({ teacherName: (t.name || '').split(' ')[0] || 'du', dateLabel, items, site });
      const r = await sendBrevo(t, `🗓️ Dein Plan für morgen (${list.length} Stunde${list.length > 1 ? 'n' : ''})`, html);
      if (r.ok) planSent++; else { errors++; await sb.from('email_log').delete().eq('kind', 'teacher_dayplan').eq('ref', ref); }
    }
  }

  return res.status(200).json({ ok: true, soonSent, planSent, errors });
}

// ---- deutschoderwas-Markendesign (Schwarz/Rot/Gold-Streifen, Creme, Club-Akzent) ----
const _FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const _esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

function _shell(inner, preview) {
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${_esc(preview)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>
        ${inner}
        <tr><td style="padding:20px 30px 26px">
          <div style="border-top:1px solid #F0E5D8;padding-top:14px;font-family:${_FF};font-size:12px;color:#9CA3AF;text-align:center">
            <a href="${_esc('https://deutschoderwas-club.de/admin.html')}" style="color:#9CA3AF;text-decoration:none">Zum Lehrerbereich</a> · deutschoderwas club 🇩🇪
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function teacherSoonEmail({ teacherName, cls, when, site, clubName, clubEmoji, clubColor, students, count }) {
  const accent = clubColor || '#2DD4BF';
  const topic = cls.topic ? ` · ${_esc(cls.topic)}` : '';
  const clubChip = clubName ? `<span style="display:inline-block;background:${accent};color:#ffffff;font-family:${_FF};font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:4px 11px;border-radius:30px">${_esc(clubEmoji)} ${_esc(clubName)}</span>` : '';
  const meetBtn = cls.zoom_link ? `
        <tr><td style="padding:14px 30px 6px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:6px 0 2px">
          <a href="${_esc(cls.zoom_link)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${_FF};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🎥 Zum Unterricht (Google&nbsp;Meet)</a>
        </td></tr></table></td></tr>` : '';
  const studentLines = count
    ? `<div style="font-size:14px;color:#1A1A1A;margin-top:10px"><b>${count}</b> gebucht: <span style="color:#6B7280">${_esc(students.slice(0, 8).join(', '))}${count > 8 ? ' …' : ''}</span></div>`
    : `<div style="font-size:14px;color:#6B7280;margin-top:10px">Noch keine Buchung für diese Stunde.</div>`;
  const inner = `
        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${_FF};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">⏰</div>
          <h1 style="margin:6px 0 0;font-family:${_FF};font-size:25px;font-weight:800;color:#1A1A1A">Gleich unterrichtest du!</h1>
        </td></tr>
        <tr><td style="padding:10px 30px 0;font-family:${_FF};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 4px">Hallo ${_esc(teacherName)},</p>
          <p style="margin:0">deine Stunde beginnt in etwa einer Stunde. Hier die Details: 💛</p>
        </td></tr>
        <tr><td style="padding:18px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid ${accent};border-radius:16px">
            <tr><td style="padding:18px 20px;font-family:${_FF}">
              ${clubChip ? `<div style="margin-bottom:9px">${clubChip}</div>` : ''}
              <div style="font-size:18px;font-weight:800;color:#1A1A1A;margin:0 0 2px">${_esc(cls.title)}</div>
              <div style="font-size:14px;color:#6B7280;margin-bottom:10px">${_esc(cls.level)}${topic}</div>
              <div style="font-size:15px;font-weight:700;color:#1A1A1A">🗓️ ${_esc(when)} Uhr</div>
              ${studentLines}
            </td></tr>
          </table>
        </td></tr>
        ${meetBtn}
        <tr><td style="padding:16px 30px 4px;font-family:${_FF};font-size:15px;line-height:1.6;color:#1A1A1A">
          Viel Freude beim Unterrichten!<br><b>deutschoderwas club</b>
        </td></tr>`;
  return _shell(inner, `Deine Stunde ${cls.title} beginnt bald – ${when} Uhr.`);
}

function teacherDayPlanEmail({ teacherName, dateLabel, items, site }) {
  const rows = items.map(it => {
    const accent = it.club?.color || '#2DD4BF';
    const chip = it.club?.name ? `<span style="display:inline-block;background:${accent};color:#fff;font-family:${_FF};font-size:10px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;padding:3px 9px;border-radius:30px">${_esc(it.club.emoji || '')} ${_esc(it.club.name)}</span>` : '';
    return `
      <tr><td style="padding:8px 0">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid ${accent};border-radius:14px">
          <tr><td style="padding:13px 16px;font-family:${_FF}">
            <div style="font-size:16px;font-weight:800;color:#1A1A1A">🕒 ${_esc(it.time)} Uhr <span style="font-weight:600;color:#6B7280;font-size:14px">· ${_esc(it.cls.level)}</span></div>
            <div style="margin:5px 0 3px">${chip}</div>
            <div style="font-size:15px;font-weight:700;color:#1A1A1A">${_esc(it.cls.title)}${it.cls.topic ? ` <span style="color:#6B7280;font-weight:500">· ${_esc(it.cls.topic)}</span>` : ''}</div>
            <div style="font-size:13px;color:#6B7280;margin-top:4px">👥 ${it.count}/${it.cls.capacity || 0} gebucht</div>
          </td></tr>
        </table>
      </td></tr>`;
  }).join('');
  const inner = `
        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${_FF};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">🗓️</div>
          <h1 style="margin:6px 0 0;font-family:${_FF};font-size:24px;font-weight:800;color:#1A1A1A">Dein Plan für morgen</h1>
          <div style="font-family:${_FF};font-size:14px;color:#6B7280;margin-top:4px;text-transform:capitalize">${_esc(dateLabel)}</div>
        </td></tr>
        <tr><td style="padding:10px 30px 0;font-family:${_FF};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0">Hallo ${_esc(teacherName)}, das steht morgen bei dir an:</p>
        </td></tr>
        <tr><td style="padding:8px 30px 4px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>
        <tr><td style="padding:14px 30px 4px;font-family:${_FF};font-size:13px;line-height:1.6;color:#6B7280">
          Wer genau gebucht hat, siehst du jederzeit im
          <a href="${_esc('https://deutschoderwas-club.de/admin.html')}" style="color:#DD0000;font-weight:700;text-decoration:none">Lehrerbereich</a>.
          Etwa 1 Std. vor jeder Stunde bekommst du nochmal eine kurze Erinnerung.
        </td></tr>
        <tr><td style="padding:14px 30px 4px;font-family:${_FF};font-size:15px;line-height:1.6;color:#1A1A1A">
          Einen guten Unterrichtstag!<br><b>deutschoderwas club</b>
        </td></tr>`;
  return _shell(inner, `Dein Plan für morgen: ${items.length} Stunde(n).`);
}
