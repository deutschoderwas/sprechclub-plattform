// Buchungsbestätigung per E-Mail (Brevo).
// Wird von index.html direkt nach erfolgreicher Buchung aufgerufen.
// POST { class_id } + Authorization: Bearer <Supabase-Access-Token des Schülers>
import { createClient } from '@supabase/supabase-js';

const FMT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', day:'numeric', month:'long', hour:'2-digit', minute:'2-digit' });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id } = req.body || {};
  if (!token || !class_id) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Wer ruft an?
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  // Buchung verifizieren
  const { data: bk } = await sb.from('bookings').select('class_id')
    .eq('user_id', user.id).eq('class_id', class_id).eq('status', 'booked').maybeSingle();
  if (!bk) return res.status(404).json({ error: 'booking_not_found' });

  // Doppel-Mail verhindern
  const { error: logErr } = await sb.from('email_log')
    .insert({ kind: 'booking', ref: `${class_id}:${user.id}`, user_id: user.id });
  if (logErr) return res.status(200).json({ ok: true, already_sent: true });

  const [{ data: cls }, { data: prof }] = await Promise.all([
    sb.from('classes').select('title,level,topic,starts_at,zoom_link,material_pre').eq('id', class_id).single(),
    sb.from('profiles').select('name,email').eq('id', user.id).single(),
  ]);
  if (!cls || !prof?.email) return res.status(404).json({ error: 'data_missing' });

  const site = process.env.SITE_URL || 'https://sprechclub-plattform.vercel.app';
  const when = FMT.format(new Date(cls.starts_at));
  const vorname = (prof.name || '').split(' ')[0] || 'Hallo';

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1A1A1A">
    <h2 style="color:#DD0000">Buchung bestätigt ✅</h2>
    <p>Hallo ${vorname},</p>
    <p>deine Stunde ist reserviert:</p>
    <div style="border:2px solid #F0E5D8;border-radius:12px;padding:16px;margin:14px 0">
      <p style="margin:0 0 6px"><b>${cls.title}</b> (${cls.level})${cls.topic ? ' — ' + cls.topic : ''}</p>
      <p style="margin:0 0 12px">🗓️ ${when} Uhr</p>
      ${cls.zoom_link ? `<a href="${cls.zoom_link}" style="background:#DD0000;color:#fff;padding:10px 18px;border-radius:30px;text-decoration:none;font-weight:bold">Zum Unterricht (Meet)</a>` : ''}
      ${cls.material_pre ? `<p style="margin:14px 0 0">📚 <a href="${cls.material_pre}">Material zur Vorbereitung</a></p>` : ''}
    </div>
    <p style="font-size:13px;color:#6B7280">Stornieren kannst du bis 2 Stunden vorher in deinem <a href="${site}/konto.html">Schülerbereich</a> — dann bekommst du dein Guthaben zurück.</p>
    <p>Bis bald im Sprechclub!<br>Julia</p>
  </div>`;

  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to: [{ email: prof.email, name: prof.name || undefined }],
      subject: `Buchung bestätigt: ${cls.title} am ${when}`,
      htmlContent: html,
    }),
  });
  if (!r.ok) {
    await sb.from('email_log').delete().eq('kind', 'booking').eq('ref', `${class_id}:${user.id}`);
    return res.status(200).json({ ok: false, brevo: r.status });
  }
  return res.status(200).json({ ok: true });
}
