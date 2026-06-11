// Stunden-Erinnerung per E-Mail (Brevo).
// Läuft per Vercel-Cron täglich 08:00 deutscher Zeit (06:00 UTC, siehe vercel.json)
// und erinnert an alle gebuchten Stunden der nächsten ~26 Stunden.
import { createClient } from '@supabase/supabase-js';

const FMT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', hour:'2-digit', minute:'2-digit' });

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://sprechclub-plattform.vercel.app';

  const now = new Date();
  const until = new Date(now.getTime() + 26 * 3600 * 1000);

  const { data: cls } = await sb.from('classes')
    .select('id,title,level,topic,starts_at,zoom_link,material_pre')
    .gt('starts_at', now.toISOString()).lt('starts_at', until.toISOString())
    .eq('is_cancelled', false);
  if (!cls?.length) return res.status(200).json({ ok: true, sent: 0 });

  const { data: bks } = await sb.from('bookings')
    .select('class_id,user_id').in('class_id', cls.map(c => c.id)).eq('status', 'booked');
  if (!bks?.length) return res.status(200).json({ ok: true, sent: 0 });

  const { data: profs } = await sb.from('profiles')
    .select('id,name,email,email_optout').in('id', [...new Set(bks.map(b => b.user_id))]);
  const pmap = Object.fromEntries((profs || []).map(p => [p.id, p]));
  const cmap = Object.fromEntries(cls.map(c => [c.id, c]));

  let sent = 0, errors = 0;
  for (const b of bks) {
    const p = pmap[b.user_id], c = cmap[b.class_id];
    if (!p?.email || p.email_optout || !c) continue;

    const ref = `${b.class_id}:${b.user_id}`;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'reminder', ref, user_id: b.user_id });
    if (logErr) continue; // schon erinnert

    const when = FMT.format(new Date(c.starts_at));
    const vorname = (p.name || '').split(' ')[0] || 'Hallo';
    const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1A1A1A">
      <h2 style="color:#DD0000">Erinnerung: Deine Stunde ⏰</h2>
      <p>Hallo ${vorname}, gleich ist es so weit:</p>
      <div style="border:2px solid #F0E5D8;border-radius:12px;padding:16px;margin:14px 0">
        <p style="margin:0 0 6px"><b>${c.title}</b>${c.topic ? ' — ' + c.topic : ''}</p>
        <p style="margin:0 0 12px">🗓️ ${when} Uhr</p>
        ${c.zoom_link ? `<a href="${c.zoom_link}" style="background:#DD0000;color:#fff;padding:10px 18px;border-radius:30px;text-decoration:none;font-weight:bold">Zum Unterricht (Meet)</a>` : ''}
        ${c.material_pre ? `<p style="margin:14px 0 0">📚 <a href="${c.material_pre}">Noch kurz vorbereiten?</a></p>` : ''}
      </div>
      <p style="font-size:13px;color:#6B7280">Klappt es doch nicht? Bis 2 Stunden vorher im <a href="${site}/konto.html">Schülerbereich</a> stornieren.</p>
      <p>Bis gleich!<br>Julia</p>
    </div>`;

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `Erinnerung: ${c.title} — ${when} Uhr`,
        htmlContent: html,
      }),
    });
    if (r.ok) sent++; else { errors++; await sb.from('email_log').delete().eq('kind','reminder').eq('ref', ref); }
  }
  return res.status(200).json({ ok: true, sent, errors });
}
