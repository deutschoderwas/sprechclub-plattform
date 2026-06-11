// Wochenplan-Mail an alle Schüler (Brevo).
// Läuft per Vercel-Cron jeden Sonntag 16:00 deutscher Zeit (14:00 UTC, siehe vercel.json).
// Schickt den Stundenplan der KOMMENDEN Woche (Mo–So) an alle Schüler ohne Abmeldung.
import { createClient } from '@supabase/supabase-js';

const DAY = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', day:'numeric', month:'numeric' });
const TIME = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', hour:'2-digit', minute:'2-digit' });
const SHORT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', day:'2-digit', month:'2-digit' });

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://sprechclub-plattform.vercel.app';

  // Nächster Montag 00:00 Berlin (läuft sonntags → morgen)
  const now = new Date();
  const berlinNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
  const daysToMon = ((8 - berlinNow.getDay()) % 7) || 7;
  const mon = new Date(berlinNow); mon.setDate(mon.getDate() + daysToMon); mon.setHours(0,0,0,0);
  const sun = new Date(mon); sun.setDate(sun.getDate() + 7);
  // Berlin-Zeiten in UTC-ISO (Sommerzeit +02:00)
  const monIso = new Date(mon.getTime() - 2*3600*1000).toISOString();
  const sunIso = new Date(sun.getTime() - 2*3600*1000).toISOString();

  const weekRef = `weekly:${SHORT.format(mon)}`;
  const { error: logErr } = await sb.from('email_log').insert({ kind: 'weekly', ref: weekRef });
  if (logErr) return res.status(200).json({ ok: true, already_sent: weekRef });

  const { data: cls } = await sb.from('classes')
    .select('title,level,topic,starts_at')
    .gte('starts_at', monIso).lt('starts_at', sunIso)
    .eq('is_cancelled', false).order('starts_at');
  if (!cls?.length) {
    await sb.from('email_log').delete().eq('kind','weekly').eq('ref', weekRef);
    return res.status(200).json({ ok: true, sent: 0, info: 'keine Stunden eingetragen' });
  }

  // Nach Tag gruppieren
  const days = {};
  cls.forEach(c => { const d = DAY.format(new Date(c.starts_at)); (days[d] = days[d] || []).push(c); });
  const rows = Object.entries(days).map(([d, arr]) => `
    <p style="margin:14px 0 4px;font-weight:bold">${d}</p>
    ${arr.map(c => `<p style="margin:2px 0;padding-left:10px">🕐 ${TIME.format(new Date(c.starts_at))} · <b>${c.title}</b> <span style="color:#6B7280">(${c.level})</span>${c.topic ? '<br><span style="padding-left:24px;color:#6B7280">→ ' + c.topic + '</span>' : ''}</p>`).join('')}
  `).join('');

  const range = `${SHORT.format(mon)} – ${SHORT.format(new Date(sun.getTime() - 86400000))}`;
  const html = `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1A1A1A">
    <h2 style="color:#DD0000">Dein Sprechclub — die neue Woche 🗓️</h2>
    <p>Hallo! Hier sind die Stunden vom <b>${range}</b> — such dir aus, was zu dir passt:</p>
    <div style="border:2px solid #F0E5D8;border-radius:12px;padding:6px 16px 16px;margin:14px 0">${rows}</div>
    <a href="${site}/index.html#stundenplan" style="background:#DD0000;color:#fff;padding:12px 22px;border-radius:30px;text-decoration:none;font-weight:bold;display:inline-block">Jetzt Stunde buchen</a>
    <p style="margin-top:16px">Bis bald im Sprechclub!<br>Julia</p>
    <p style="font-size:12px;color:#6B7280;margin-top:18px">Du möchtest keine Wochenplan-Mails mehr? Antworte einfach kurz auf diese Mail.</p>
  </div>`;

  const { data: profs } = await sb.from('profiles')
    .select('name,email,is_admin,is_teacher,email_optout')
    .eq('email_optout', false).not('email', 'is', null);
  const recipients = (profs || []).filter(p => !p.is_admin && !p.is_teacher && p.email && p.email.includes('@'));

  let sent = 0, errors = 0;
  // Brevo: bis zu 50 Empfänger pro Aufruf über messageVersions (jeder bekommt eine eigene Mail)
  for (let i = 0; i < recipients.length; i += 50) {
    const chunk = recipients.slice(i, i + 50);
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        subject: `Dein Sprechclub-Wochenplan ${range}`,
        htmlContent: html,
        messageVersions: chunk.map(p => ({ to: [{ email: p.email, name: p.name || undefined }] })),
      }),
    });
    if (r.ok) sent += chunk.length; else errors += chunk.length;
  }
  return res.status(200).json({ ok: true, sent, errors, woche: range });
}
