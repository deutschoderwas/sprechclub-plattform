// Täglicher Sammel-Cron (1 Eintrag wegen Vercel-Cron-Limit): löst Erinnerungen + Geburtstags-Mails aus.
// Wird von vercel.json crons täglich aufgerufen. Ruft die bestehenden Endpoints serverseitig auf.
export default async function handler(req, res) {
  const base = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const eps = ['send-reminders', 'send-birthdays'];
  const ran = {};
  for (const e of eps) {
    try { const r = await fetch(base + '/api/' + e); ran[e] = r.status; }
    catch (err) { ran[e] = String((err && err.message) || err); }
  }
  return res.status(200).json({ ok: true, ran });
}
