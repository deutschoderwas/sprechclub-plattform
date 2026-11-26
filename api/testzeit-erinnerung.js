// api/testzeit-erinnerung.js - Erinnerung 24 h vor der ersten Abbuchung (Testzeit Sprechclub).
// Die eigentliche Arbeit steht in _testzeit-mail.js (erinnerungenSenden) und laeuft
// stuendlich mit api/send-reminders. Diese Adresse ist nur zum Anstossen von Hand.
import { erinnerungenSenden } from './_testzeit-mail.js';
export const config = { maxDuration: 60 };
export default async function handler(req, res) {
  try { return res.status(200).json({ ok: true, ...(await erinnerungenSenden()) }); }
  catch (e) { console.error('testzeit-erinnerung', e); return res.status(500).json({ error: String(e.message || e) }); }
}
