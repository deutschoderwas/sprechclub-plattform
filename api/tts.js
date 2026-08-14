// ============================================================
//  deutschoderwas club — die Stimme der Plattform
//
//  POST { text, rolle, langsam }
//  -> { ok:true, url:"https://…/storage/v1/object/public/tts/…mp3" }
//
//  ---------------------------------------------------------------
//  WARUM DIESE DATEI SO AUSSIEHT
//
//  Früher hing die Stimme fest an ElevenLabs. Wenn dort die Preise
//  steigen oder das Konto klemmt, steht die halbe Plattform still.
//  Jetzt entscheidet EINE Umgebungsvariable, wer spricht:
//
//      TTS_ANBIETER = eleven | openai | google | aus
//
//  Umstellen heißt: eine Zeile in Vercel ändern. Kein Code, kein
//  Deployment nötig, keine Abhängigkeit von einem einzigen Anbieter.
//
//  ---------------------------------------------------------------
//  WAS GLEICH GEBLIEBEN IST
//
//  Der Cache. Jeder Satz wird nur EINMAL erzeugt und danach im
//  Supabase-Bucket "tts" abgelegt. Alle weiteren Male kommt er
//  kostenlos und sofort von dort. Bei festem Lernstoff — Vokabeln,
//  Dialoge, Hörübungen — zahlst du also einmal pro Satz und nie wieder.
//
//  WICHTIG: Der Cache-Schlüssel für ElevenLabs ist unverändert.
//  Alles, was bisher erzeugt wurde, bleibt gültig und kostet nichts
//  neu. Die anderen Anbieter bekommen ihren eigenen Bereich im Cache,
//  weil eine andere Stimme nun einmal eine andere Datei ist.
//
//  Fehlt der Schlüssel oder steht TTS_ANBIETER auf "aus", antwortet
//  der Dienst mit 503 — die Seite fällt dann sauber auf die
//  Vorlese-Stimme des Geräts zurück, so wie bisher.
// ============================================================
import crypto from 'crypto';

const ANBIETER = (process.env.TTS_ANBIETER || 'eleven').toLowerCase().trim();

const SUPA = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'tts';

// Männliche Rollen/Namen -> männliche Stimme. Alles andere -> weibliche.
const MAENNLICH = /\b(du|mann|herr|vater|papa|opa|sohn|bruder|markus|thomas|stefan|daniel|omar|yusuf|ali|max|paul|peter|klaus|christian|michael|andreas|arzt|kellner|verkaeufer|chef|polier|patient|kunde|nachbar|vermieter)\b/i;

function istMaennlich(rolle) {
  const r = String(rolle || '').toLowerCase().trim();
  return r ? MAENNLICH.test(r) : false;
}

function publicUrl(path) {
  return `${SUPA}/storage/v1/object/public/${BUCKET}/${path}`;
}

// Nur von der eigenen Seite aufrufbar (schützt das Guthaben).
function erlaubteHerkunft(req) {
  const o = String(req.headers.origin || req.headers.referer || '');
  if (!o) return true; // manche Browser senden nichts mit — nicht blocken
  return /deutschoderwas-club\.de|deutschoderwas\.de|localhost|127\.0\.0\.1|vercel\.app/i.test(o);
}

/* ============================================================
   Die Anbieter

   Jeder liefert dieselben drei Dinge:
     schluessel()  — der API-Schlüssel oder null
     stimme(m)     — die Stimmen-Kennung für männlich/weiblich
     cachePfad(…)  — wo die Datei im Cache liegt
     hole(…)       — erzeugt das MP3 und gibt einen Buffer zurück
   ============================================================ */

const ANBIETERLISTE = {

  /* ---------- ElevenLabs (bisher) ---------- */
  eleven: {
    name: 'ElevenLabs',
    schluessel: () => process.env.ELEVENLABS_API_KEY || null,
    stimme(m) {
      return m
        ? (process.env.ELEVEN_VOICE_M || 'CvLyegHbActy7exgIBri')
        : (process.env.ELEVEN_VOICE_F || '1iF3vHdwHKuVKSPDK23Z');
    },
    // Unverändert gegenüber früher — damit der vorhandene Cache gültig bleibt.
    cachePfad(voice, speed, text) {
      const modell = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2';
      const hash = crypto.createHash('sha256')
        .update(`${voice}|${modell}|${speed}|${text}`).digest('hex').slice(0, 40);
      return `v1/${voice}/${hash}.mp3`;
    },
    async hole(key, voice, speed, text) {
      const modell = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2';
      const notfall = 'EXAVITQu4vr4xnSDxMaL'; // immer verfügbare Standardstimme
      const ruf = (id) => fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${id}?output_format=mp3_44100_128`,
        {
          method: 'POST',
          headers: { 'xi-api-key': key, 'content-type': 'application/json', accept: 'audio/mpeg' },
          body: JSON.stringify({
            text,
            model_id: modell,
            voice_settings: {
              stability: 0.45, similarity_boost: 0.8, style: 0.0,
              use_speaker_boost: true, speed,
            },
          }),
        }
      );
      let r = await ruf(voice);
      if (!r.ok && voice !== notfall) r = await ruf(notfall);
      if (!r.ok) throw new Error('eleven ' + r.status + ' ' + (await r.text()).slice(0, 160));
      return Buffer.from(await r.arrayBuffer());
    },
  },

  /* ---------- OpenAI ---------- */
  openai: {
    name: 'OpenAI',
    schluessel: () => process.env.OPENAI_API_KEY || null,
    stimme(m) {
      return m
        ? (process.env.OPENAI_VOICE_M || 'onyx')
        : (process.env.OPENAI_VOICE_F || 'nova');
    },
    cachePfad(voice, speed, text) {
      const modell = process.env.OPENAI_TTS_MODEL || 'gpt-4o-mini-tts';
      const hash = crypto.createHash('sha256')
        .update(`openai|${voice}|${modell}|${speed}|${text}`).digest('hex').slice(0, 40);
      return `oa1/${voice}/${hash}.mp3`;
    },
    async hole(key, voice, speed, text) {
      const modell = process.env.OPENAI_TTS_MODEL || 'gpt-4o-mini-tts';
      const r = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
        body: JSON.stringify({
          model: modell,
          voice,
          input: text,
          speed,
          response_format: 'mp3',
          // Der Hinweis steuert den Tonfall — bei Lernenden ist Deutlichkeit wichtiger als Tempo.
          instructions: 'Sprich klares, natürliches Hochdeutsch. Ruhig und freundlich, deutlich artikuliert, wie eine geduldige Lehrerin.',
        }),
      });
      if (!r.ok) throw new Error('openai ' + r.status + ' ' + (await r.text()).slice(0, 160));
      return Buffer.from(await r.arrayBuffer());
    },
  },

  /* ---------- Google Cloud ---------- */
  google: {
    name: 'Google',
    schluessel: () => process.env.GOOGLE_TTS_API_KEY || null,
    stimme(m) {
      return m
        ? (process.env.GOOGLE_VOICE_M || 'de-DE-Neural2-D')
        : (process.env.GOOGLE_VOICE_F || 'de-DE-Neural2-F');
    },
    cachePfad(voice, speed, text) {
      const hash = crypto.createHash('sha256')
        .update(`google|${voice}|${speed}|${text}`).digest('hex').slice(0, 40);
      return `gg1/${voice}/${hash}.mp3`;
    },
    async hole(key, voice, speed, text) {
      const r = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(key)}`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            input: { text },
            voice: { languageCode: 'de-DE', name: voice },
            audioConfig: { audioEncoding: 'MP3', speakingRate: speed },
          }),
        }
      );
      if (!r.ok) throw new Error('google ' + r.status + ' ' + (await r.text()).slice(0, 160));
      const j = await r.json();
      if (!j.audioContent) throw new Error('google: kein audioContent');
      return Buffer.from(j.audioContent, 'base64');
    },
  },
};

/* ============================================================ */

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!erlaubteHerkunft(req)) return res.status(403).json({ error: 'forbidden' });

  // Bewusst abgeschaltet -> die Seite nimmt die Gerätestimme.
  if (ANBIETER === 'aus') return res.status(503).json({ error: 'tts_aus' });

  const anb = ANBIETERLISTE[ANBIETER];
  if (!anb) {
    return res.status(500).json({
      error: 'tts_anbieter_unbekannt',
      detail: `TTS_ANBIETER="${ANBIETER}" — erlaubt: ${Object.keys(ANBIETERLISTE).join(', ')}, aus`,
    });
  }

  const key = anb.schluessel();
  if (!key) return res.status(503).json({ error: 'tts_key_missing', anbieter: anb.name });
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_env_missing' });

  let { text, rolle, langsam } = req.body || {};
  text = String(text || '').replace(/\s+/g, ' ').trim();
  if (!text) return res.status(400).json({ error: 'text_required' });
  if (text.length > 800) text = text.slice(0, 800);

  const voice = anb.stimme(istMaennlich(rolle));
  const speed = langsam ? 0.78 : 1.0;
  const path = anb.cachePfad(voice, speed, text);
  const url = publicUrl(path);

  // 1) Schon im Cache? Dann sofort zurück — kostet nichts.
  try {
    const head = await fetch(url, { method: 'HEAD' });
    if (head.ok) return res.status(200).json({ ok: true, url, cached: true });
  } catch (e) { /* weiter zur Erzeugung */ }

  // 2) Beim Anbieter erzeugen
  let audio;
  try {
    audio = await anb.hole(key, voice, speed, text);
    if (!audio || !audio.length) throw new Error('leere Audiodatei');
  } catch (e) {
    return res.status(502).json({
      error: 'tts_failed', anbieter: anb.name, detail: String(e.message || e).slice(0, 220),
    });
  }

  // 3) In den Cache legen (Service-Role, umgeht RLS)
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
      // Trotzdem ausliefern — nur eben nicht gecacht.
      return res.status(200).json({ ok: true, url, cached: false, warn: t.slice(0, 160) });
    }
  } catch (e) { /* Cache fehlgeschlagen — beim nächsten Mal neuer Versuch */ }

  return res.status(200).json({ ok: true, url, cached: false, anbieter: anb.name });
}
