// ============================================================
//  deutschoderwas club — Amandas Ohr
//
//  POST { audio: "<base64>", typ: "audio/webm" }
//       + Header: Authorization: Bearer <access_token>  (optional)
//
//  Antwort: { ok:true, text:"..." }
//
//  Der Schueler nimmt im Browser eine Sprachnachricht auf. Hier wird
//  daraus Text — auf Deutsch. Den Text schickt der Chat danach ganz
//  normal an Amanda, so als haette er ihn getippt.
//
//  Braucht OPENAI_API_KEY. Ohne Schluessel kommt eine freundliche
//  Absage zurueck, nichts bricht.
// ============================================================

export const config = { api: { bodyParser: { sizeLimit: '12mb' } } };

const MAX = 10 * 1024 * 1024;                       // 10 MB roh
const MODELL = process.env.OPENAI_STT_MODEL || 'whisper-1';

const ENDUNG = {
  'audio/webm': 'webm',
  'audio/ogg': 'ogg',
  'audio/mp4': 'mp4',
  'audio/mpeg': 'mp3',
  'audio/mpga': 'mp3',
  'audio/wav': 'wav',
  'audio/x-m4a': 'm4a',
  'audio/m4a': 'm4a',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({ ok: false, error: 'kein_schluessel' });
  }

  const { audio, typ } = req.body || {};
  if (!audio) return res.status(400).json({ error: 'keine_aufnahme' });

  let roh;
  try { roh = Buffer.from(String(audio), 'base64'); }
  catch { return res.status(400).json({ error: 'kaputt' }); }
  if (!roh.length) return res.status(400).json({ error: 'leer' });
  if (roh.length > MAX) return res.status(413).json({ error: 'zu_lang' });

  const mime = ENDUNG[typ] ? typ : 'audio/webm';
  const name = 'aufnahme.' + (ENDUNG[mime] || 'webm');

  try {
    const form = new FormData();
    form.append('file', new Blob([roh], { type: mime }), name);
    form.append('model', MODELL);
    form.append('language', 'de');
    form.append('prompt', 'Deutschunterricht, Sprechclub, Grammatik, Wortschatz.');

    const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + process.env.OPENAI_API_KEY },
      body: form,
    });
    if (!r.ok) return res.status(200).json({ ok: false, error: 'nicht_verstanden' });

    const j = await r.json();
    const text = String(j.text || '').trim();
    if (!text) return res.status(200).json({ ok: false, error: 'nichts_gehoert' });

    return res.status(200).json({ ok: true, text });
  } catch {
    return res.status(200).json({ ok: false, error: 'nicht_verstanden' });
  }
}
