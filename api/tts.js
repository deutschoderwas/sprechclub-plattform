// ============================================================
//  deutschoderwas club — echte Stimme (ElevenLabs) mit Cache
//  POST { text, rolle, langsam }
//  -> { ok:true, url:"https://…/storage/v1/object/public/tts/…mp3" }
//
//  Jeder Satz wird nur EINMAL bei ElevenLabs erzeugt und danach im
//  Supabase-Bucket "tts" zwischengespeichert. Alle weiteren Male kommt
//  er kostenlos und sofort aus dem öffentlichen Cache.
//
//  Fehlt der ElevenLabs-Schlüssel, antwortet der Dienst mit 503 —
//  der Client fällt dann sauber auf die Vorlese-Stimme des Geräts zurück.
// ============================================================
import crypto from 'crypto';

const MODEL = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2';

// Stimmen — per Umgebungsvariable überschreibbar, sonst deutsche Standard-Stimmen.
//   Louisa v2  = warme weibliche deutsche Stimme
//   Christian  = ruhige männliche deutsche Stimme
const VOICE_F = process.env.ELEVEN_VOICE_F || '1iF3vHdwHKuVKSPDK23Z';
const VOICE_M = process.env.ELEVEN_VOICE_M || 'CvLyegHbActy7exgIBri';
// Immer verfügbare Notfall-Stimme (Standard-Bibliothek), falls eine ID nicht geht.
const VOICE_FALLBACK = 'EXAVITQu4vr4xnSDxMaL';

// Männliche Rollen/Namen -> männliche Stimme. Alles andere -> weibliche Stimme.
const MAENNLICH = /\b(du|mann|herr|vater|papa|opa|sohn|bruder|markus|thomas|stefan|daniel|omar|yusuf|ali|max|paul|peter|klaus|christian|michael|andreas|arzt|kellner|verkaeufer|chef|polier|patient|kunde|nachbar|vermieter)\b/i;

function voiceFor(rolle) {
  const r = String(rolle || '').toLowerCase().trim();
  if (!r) return VOICE_F;
  return MAENNLICH.test(r) ? VOICE_M : VOICE_F;
}

const SUPA = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'tts';

function publicUrl(path) {
  return `${SUPA}/storage/v1/object/public/${BUCKET}/${path}`;
}

// Nur von der eigenen Seite aufrufbar (schützt das ElevenLabs-Guthaben).
function erlaubteHerkunft(req) {
  const o = String(req.headers.origin || req.headers.referer || '');
  if (!o) return true; // manche Browser senden nichts mit — nicht blocken
  return /deutschoderwas-club\.de|deutschoderwas\.de|localhost|127\.0\.0\.1|vercel\.app/i.test(o);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!erlaubteHerkunft(req)) return res.status(403).json({ error: 'forbidden' });

  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) return res.status(503).json({ error: 'tts_key_missing' });
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_env_missing' });

  let { text, rolle, langsam } = req.body || {};
  text = String(text || '').replace(/\s+/g, ' ').trim();
  if (!text) return res.status(400).json({ error: 'text_required' });
  if (text.length > 800) text = text.slice(0, 800);

  const voice = voiceFor(rolle);
  const speed = langsam ? 0.78 : 1.0;

  // Cache-Schlüssel: gleiche Stimme + Tempo + Text = dieselbe Datei
  const hash = crypto.createHash('sha256')
    .update(`${voice}|${MODEL}|${speed}|${text}`).digest('hex').slice(0, 40);
  const path = `v1/${voice}/${hash}.mp3`;
  const url = publicUrl(path);

  // 1) Schon im Cache? Dann sofort zurück (kostenlos, kein ElevenLabs-Aufruf).
  try {
    const head = await fetch(url, { method: 'HEAD' });
    if (head.ok) return res.status(200).json({ ok: true, url, cached: true });
  } catch (e) { /* weiter zur Erzeugung */ }

  // 2) Bei ElevenLabs erzeugen
  let audio;
  async function erzeuge(voiceId) {
    const r = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: { 'xi-api-key': key, 'content-type': 'application/json', accept: 'audio/mpeg' },
        body: JSON.stringify({
          text,
          model_id: MODEL,
          voice_settings: { stability: 0.45, similarity_boost: 0.8, style: 0.0, use_speaker_boost: true, speed },
        }),
      }
    );
    return r;
  }

  try {
    let r = await erzeuge(voice);
    if (!r.ok && voice !== VOICE_FALLBACK) {
      // Stimme evtl. nicht im Konto -> Notfall-Stimme
      r = await erzeuge(VOICE_FALLBACK);
    }
    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({ error: 'eleven_error', detail: t.slice(0, 300) });
    }
    const buf = Buffer.from(await r.arrayBuffer());
    if (!buf.length) return res.status(502).json({ error: 'empty_audio' });
    audio = buf;
  } catch (e) {
    return res.status(502).json({ error: 'tts_failed', detail: String(e).slice(0, 200) });
  }

  // 3) In den Cache-Bucket legen (Service-Role, umgeht RLS)
  try {
    const up = await fetch(`${SUPA}/storage/v1/object/${BUCKET}/${path}`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${SERVICE}`,
        apikey: SERVICE,
        'content-type': 'audio/mpeg',
        'x-upsert': 'true',
        'cache-control': 'public, max-age=31536000, immutable',
      },
      body: audio,
    });
    if (!up.ok && up.status !== 409) {
      const t = await up.text();
      // Trotzdem ausliefern — nur nicht gecacht
      return res.status(200).json({ ok: true, url, cached: false, warn: t.slice(0, 160) });
    }
  } catch (e) { /* Cache fehlgeschlagen — Audio existiert trotzdem beim nächsten Versuch nicht; egal */ }

  return res.status(200).json({ ok: true, url, cached: false });
}
