// ============================================================
//  deutschoderwas club — Amandas Agenten anlegen
//
//  Einmal aufrufen, fertig. Der Server legt bei ElevenLabs den
//  Sprech-Agenten an, gibt ihm Julias Stimme und Amandas
//  Haltung, und merkt sich die Kennung in der Datenbank.
//
//  POST  + Header: Authorization: Bearer <access_token>
//        { neu:true }  legt auch dann neu an, wenn schon einer da ist
//
//  ---------------------------------------------------------------
//  WARUM DAS HIER LAEUFT UND NICHT IRGENDWO SONST
//
//  Der ElevenLabs-Schluessel steht als Umgebungsvariable in Vercel.
//  Er soll dort bleiben — niemand muss ihn kopieren, herumschicken
//  oder jemandem vorlesen. Deshalb macht die Arbeit der Server, der
//  ihn ohnehin schon hat.
//
//  Nur Julia darf das aufrufen (is_admin). Ein zweiter Aufruf legt
//  keinen zweiten Agenten an, sondern meldet den vorhandenen — es
//  sei denn, man will es ausdruecklich.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY     = process.env.ELEVENLABS_API_KEY;
const STIMME  = process.env.ELEVEN_VOICE_JULIA || process.env.ELEVEN_VOICE_F || '';
const MODELL  = process.env.ELEVEN_AGENT_LLM || 'claude-sonnet-4-5';
const TTSMOD  = process.env.ELEVEN_AGENT_TTS || 'eleven_flash_v2_5';

const SCHLUESSEL = 'amanda_agent_id';

/* ------------------------------------------------------------
   Amandas Haltung. Dieselbe wie im Textchat (api/amanda-chat.js),
   nur fuers Sprechen umgeschrieben: keine Listen, keine Absaetze,
   sondern Saetze, die man laut sagen kann.

   {{name}}, {{niveau}}, {{muttersprache}} und {{thema}} fuellt der
   Server bei jedem Gespraech aus api/amanda-stimme.js nach.
   ------------------------------------------------------------ */
const ANWEISUNG = `Du bist Amanda, die Gesprächspartnerin im „deutschoderwas club". Du sprichst mit {{name}}, einer erwachsenen Person, die Deutsch lernt. Ihr Niveau ist {{niveau}}. Ihre Muttersprache ist {{muttersprache}}.

So sprichst du:
- Wie ein Mensch am Telefon, nicht wie ein Lehrbuch. Kurz. Ein bis drei Sätze, höchstens.
- Du stellst fast immer eine Rückfrage, damit das Gespräch weitergeht.
- Du passt deine Sprache dem Niveau an: A1 und A2 sehr einfache Hauptsätze und langsames Tempo, B1 und B2 normale Alltagssprache, C1 darf anspruchsvoll sein.
- Du bist warm und interessiert. Du lobst echt, nicht floskelhaft.
- Du sprichst NUR Deutsch. Nur wenn die Person gar nicht weiterweiß und ausdrücklich fragt, darfst du ein einzelnes Wort auf {{muttersprache}} dazusetzen.
- Du erwähnst nie, dass du eine KI bist. Du redest einfach.
- Du liest keine Listen vor und keine Aufzählungen. Du sprichst in Sätzen.
- Wenn die Person lange schweigt, wartest du. Nach etwa acht Sekunden hilfst du mit einer leichteren Frage nach.

Korrektur:
- Du korrigierst NUR echte Fehler in Grammatik, Wortstellung, Artikel, Fällen oder Verbformen.
- Umgangssprache, kurze Antworten und Verständnisfehler der Spracherkennung sind KEINE Fehler. Wenn ein Wort seltsam klingt, fragst du freundlich nach, statt zu korrigieren.
- Du korrigierst höchstens einen Fehler pro Antwort, und nur, wenn er wirklich stört.
- Die Korrektur bremst das Gespräch nicht: erst die normale Antwort, dann in einem Halbsatz die richtige Form, dann weiter.
- Beispiel: „Ah, beim Arzt warst du! — man sagt übrigens „ich bin zum Arzt gegangen", mit „bin". Und was hat er gesagt?"

Worüber ihr sprecht:
- Alles, was die Person beschäftigt: Alltag, Arbeit, Familie, Behörden, Wohnungssuche, Prüfungen.
- Wenn ein Thema mitgegeben wurde, fängst du damit an: {{thema}}
- Wenn der Person nichts einfällt, machst du einen Vorschlag und fängst selbst an.

Was du nie tust:
- Du gibst keine medizinische, rechtliche oder finanzielle Beratung. Du erklärst höchstens die Wörter, die man dafür braucht, und sagst, wohin man sich wenden kann.
- Du versprichst nichts im Namen von Julia oder vom Club: keine Termine, keine Preise, keine Rückerstattungen. Dafür verweist du auf den Community-Chat.
- Du gibst keine Daten anderer Mitglieder weiter.`;

const ERSTER_SATZ =
  'Hallo {{name}}! Schön, dass du da bist. Erzähl mir einfach, wie dein Tag war — ganz ohne schöne Sätze.';

function bauplan() {
  return {
    name: 'Amanda — deutschoderwas club',
    tags: ['deutschoderwas', 'amanda'],
    conversation_config: {
      agent: {
        prompt: { prompt: ANWEISUNG, llm: MODELL },
        first_message: ERSTER_SATZ,
        language: 'de',
      },
      tts: {
        voice_id: STIMME,
        model_id: TTSMOD,
        // Etwas ruhiger als die Vorgabe: Lernende brauchen Deutlichkeit
        // mehr als Tempo.
        stability: 0.45,
        similarity_boost: 0.8,
        speed: 0.95,
      },
      asr: { language: 'de' },
      turn: {
        // Lernende brauchen laenger, bis der Satz kommt. Wer nach
        // 1,5 Sekunden unterbrochen wird, traut sich nicht mehr.
        turn_timeout: 12,
        mode: 'turn',
      },
    },
    platform_settings: {
      auth: { enable_auth: true },
      // Die Mitschrift in der Sprechansicht braucht diese Ereignisse.
      // Ohne sie bleibt sie leer.
      widget: {
        // nur Vorgabewerte, das Widget selbst benutzen wir nicht
      },
    },
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const fehlt = [];
  if (!KEY) fehlt.push('ELEVENLABS_API_KEY');
  if (!STIMME) fehlt.push('ELEVEN_VOICE_JULIA');
  if (fehlt.length) return res.status(503).json({ error: 'nicht_eingerichtet', fehlt });
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_env_missing' });

  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const admin = createClient(SUPA, SERVICE);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });

  const { data: prof } = await admin
    .from('profiles').select('is_admin').eq('id', ures.user.id).single();
  if (!prof?.is_admin) return res.status(403).json({ error: 'nur_admin' });

  // Schon einer da? Dann nicht noch einmal — ausser man will es.
  const { data: vorhanden } = await admin
    .from('einstellungen').select('wert').eq('schluessel', SCHLUESSEL).single();

  if (vorhanden?.wert && !req.body?.neu) {
    return res.status(200).json({
      ok: true, schon_da: true, agent_id: vorhanden.wert,
      hinweis: 'Es gibt bereits einen Agenten. Mit { "neu": true } legst du einen zweiten an.',
    });
  }

  // ---- Anlegen ------------------------------------------------------
  let agentId;
  try {
    const r = await fetch('https://api.elevenlabs.io/v1/convai/agents/create', {
      method: 'POST',
      headers: { 'xi-api-key': KEY, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(bauplan()),
    });
    const t = await r.text();
    if (!r.ok) {
      return res.status(502).json({
        error: 'eleven_fehler', status: r.status, detail: t.slice(0, 600),
      });
    }
    const j = JSON.parse(t);
    agentId = j.agent_id || j.agentId;
    if (!agentId) return res.status(502).json({ error: 'keine_agent_id', detail: t.slice(0, 300) });
  } catch (e) {
    return res.status(502).json({ error: 'anlegen_fehlgeschlagen', detail: String(e.message || e).slice(0, 300) });
  }

  // ---- Merken -------------------------------------------------------
  try {
    await admin.from('einstellungen').upsert({
      schluessel: SCHLUESSEL,
      wert: agentId,
      notiz: 'Amandas Sprech-Agent bei ElevenLabs. Angelegt von api/amanda-agent-anlegen.js.',
      geaendert: new Date().toISOString(),
    });
  } catch (e) {
    return res.status(200).json({
      ok: true, agent_id: agentId,
      warnung: 'Agent angelegt, aber nicht gespeichert. Trag ELEVEN_AGENT_ID in Vercel ein: ' + agentId,
    });
  }

  return res.status(200).json({
    ok: true, agent_id: agentId, stimme: STIMME, modell: MODELL,
    hinweis: 'Amanda kann jetzt sprechen. Nichts weiter zu tun.',
  });
}
