// Täglicher Sammel-Cron (1 Eintrag wegen Vercel-Cron-Limit): löst Erinnerungen + Geburtstags-Mails aus.
// Wird von vercel.json crons täglich aufgerufen. Ruft die bestehenden Endpoints serverseitig auf.
export default async function handler(req, res) {
  const base = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const eps = ['send-reminders', 'send-birthdays', 'send-miss-you', 'send-masterclass', 'send-register-reminder', 'monatsstunden'];
  const ran = {};
  for (const e of eps) {
    try { const r = await fetch(base + '/api/' + e); ran[e] = r.status; }
    catch (err) { ran[e] = String((err && err.message) || err); }
  }

  // Julias 5-Minuten-Podcast: vier neue Folgen (A2, B1, B2, C1).
  // Nur anstoßen, nicht abwarten — der Generator braucht länger, als
  // dieser Sammel-Cron laufen darf, und arbeitet danach allein weiter.
  try {
    await fetch(base + '/api/generate-podcast', {
      method: 'POST',
      headers: { 'x-intern': process.env.CRON_SECRET || '' },
      signal: AbortSignal.timeout(1500)
    });
    ran['generate-podcast'] = 'angestossen';
  } catch (err) {
    ran['generate-podcast'] = 'angestossen';   // Zeitüberschreitung ist hier der Normalfall
  }

  return res.status(200).json({ ok: true, ran });
}
