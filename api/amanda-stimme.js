// ============================================================
//  deutschoderwas club — Amanda spricht
//
//  Holt eine Eintrittskarte fuer ein Live-Gespraech mit Amanda
//  (ElevenLabs Agents) und gibt sie dem Browser. Der Schluessel
//  bleibt hier auf dem Server; der Browser bekommt nur ein
//  kurzlebiges Ticket.
//
//  POST { thema? }  + Header: Authorization: Bearer <access_token>
//
//  Antwort:
//    { ok:true, art:'webrtc'|'websocket', ticket:"…",
//      gespraech:<id>, variablen:{…}, rest_sekunden:<n> }
//
//  ---------------------------------------------------------------
//  WARUM ES EINE MINUTENGRENZE GIBT
//
//  Ein Gespraech kostet acht bis zehn Cent in der Minute. Ohne
//  Grenze koennte eine einzige Person an einem Wochenende mehr
//  verbrauchen als die ganze Community im Monat zahlt. Deshalb
//  zaehlt amanda_gespraeche jede Sekunde mit, und wer sein
//  Monatsbudget aufgebraucht hat, bekommt eine freundliche
//  Absage statt einer Rechnung.
//
//  Die Grenze steht in AMANDA_MINUTEN (Vorgabe 60 im Monat) und
//  laesst sich pro Stufe anheben: AMANDA_MINUTEN_PREMIUM.
//
//  ---------------------------------------------------------------
//  WAS IN VERCEL GESETZT SEIN MUSS
//
//    ELEVENLABS_API_KEY    — der Schluessel (ist schon da)
//    ELEVEN_AGENT_ID       — die Kennung des Agenten
//    ELEVEN_VOICE_JULIA    — Julias Stimme (ist schon da)
//
//  Fehlt eine davon, antwortet der Dienst ehrlich mit 503 und
//  sagt, welche. Es geht nichts kaputt: die Sprechansicht zeigt
//  dann den Textchat, der wie bisher laeuft.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { hatVollzugang, ZUGANG_SPALTEN } from './_zugang.js';

const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY     = process.env.ELEVENLABS_API_KEY;
/* Die Kennung des Agenten steht entweder in Vercel oder in der
   Tabelle einstellungen — je nachdem, ob Julia sie von Hand
   eingetragen hat oder api/amanda-agent-anlegen.js sie gesetzt
   hat. Beides ist recht; Vercel gewinnt. */
const AGENT_ENV = process.env.ELEVEN_AGENT_ID || '';

/* ------------------------------------------------------------------
   Julia, 4.11.2026: "Was haben wir fuer Alternativen zu ElevenLabs
   weil es sehr teuer bei vielen Mitgliedern wird" - "Gemini Live ist
   gut" - "lass uns das machen."

   Gemini Live kostet rund 2 Cent in der Minute statt 8 bis 10. Der
   Browser spricht direkt mit Google, aber NIE mit unserem Schluessel:
   der Server holt eine Eintrittskarte, die eine Minute lang gilt und
   genau einmal benutzt werden darf. Modell und Anweisung sind in der
   Karte festgeschrieben, damit niemand sie unterwegs austauscht.

   WAS IN VERCEL GESETZT SEIN MUSS: GEMINI_API_KEY.
   Fehlt er, antwortet der Dienst mit 503 und sagt das - es geht
   nichts kaputt, der bisherige Weg bleibt unberuehrt.
   ------------------------------------------------------------------ */
const GEMINI_KEY   = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_LIVE_MODEL || 'gemini-3.8-live';

const GRENZE  = Number(process.env.AMANDA_MINUTEN || 60);
const GRENZE_PREMIUM = Number(process.env.AMANDA_MINUTEN_PREMIUM || 180);

const SPRACHEN = {
  en: 'Englisch', es: 'Spanisch', ru: 'Russisch', uk: 'Ukrainisch', tr: 'Tuerkisch',
  it: 'Italienisch', fa: 'Persisch', ar: 'Arabisch', pl: 'Polnisch', ro: 'Rumaenisch',
  fr: 'Franzoesisch', pt: 'Portugiesisch', hi: 'Hindi', zh: 'Chinesisch',
};

/* Nur von der eigenen Seite — sonst zahlt Julia fuer fremde Gespraeche. */
function erlaubteHerkunft(req) {
  const o = String(req.headers.origin || req.headers.referer || '');
  if (!o) return true;
  return /deutschoderwas-club\.de|deutschoderwas\.de|localhost|127\.0\.0\.1|vercel\.app/i.test(o);
}

/* Die Zugangsregel steht seit dem 12.10.2026 in api/_zugang.js und
   gilt fuer beide Amanda-Wege. Vorher stand hier eine eigene, zu
   weite Fassung: Sie liess jeden mit status 'aktiv' sprechen — auch
   Altschueler ohne Guthaben, die auf der Plattform sonst nichts
   mehr duerfen. Amanda kostet pro Minute. */

/* ElevenLabs kennt zwei Wege ins Gespraech. WebRTC ist der bessere
   (weniger Verzoegerung, haelt schlechtes Netz besser aus), aber
   nicht jedes Konto hat ihn. Also: erst fragen, dann zurueckfallen. */
async function ticketHolen(AGENT) {
  const kopf = { 'xi-api-key': KEY, accept: 'application/json' };

  const webrtc = await fetch(
    `https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${encodeURIComponent(AGENT)}`,
    { headers: kopf }
  ).catch(() => null);

  if (webrtc && webrtc.ok) {
    const j = await webrtc.json().catch(() => null);
    if (j && j.token) return { art: 'webrtc', ticket: j.token };
  }

  const ws = await fetch(
    `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${encodeURIComponent(AGENT)}`,
    { headers: kopf }
  );
  if (!ws.ok) {
    const t = await ws.text();
    throw new Error('eleven ' + ws.status + ' ' + t.slice(0, 200));
  }
  const j = await ws.json();
  if (!j.signed_url) throw new Error('eleven: keine signed_url');
  return { art: 'websocket', ticket: j.signed_url };
}

/* Amandas Haltung, in der Karte festgeschrieben. Kurz halten: im
   Gespraech zaehlt, dass sie antwortet und zurueckfragt, nicht dass
   sie einen Aufsatz haelt. Der ausfuehrliche Verstand steht weiter in
   api/amanda-chat.js, fuer den geschriebenen Weg. */
function geminiAnweisung(v) {
  return [
    'Du bist Amanda, Deutschlehrerin im deutschoderwas club.',
    'Du sprichst mit ' + (v.name || 'einer erwachsenen Person') + ', die Deutsch lernt'
      + (v.niveau ? ' (Niveau ' + v.niveau + ')' : '') + '.',
    v.muttersprache ? 'Ihre Muttersprache ist ' + v.muttersprache + '.' : '',
    v.thema ? 'Sie moechte gerade ueber "' + v.thema + '" sprechen.' : '',
    'Sprich Deutsch, langsam und deutlich, in kurzen Saetzen.',
    'Bleib kurz: ein bis drei Saetze, dann eine Rueckfrage, damit das Gespraech weitergeht.',
    'Stellt sie eine echte Frage zu Grammatik oder Wortschatz, antworte als Lehrerin:',
    'erst die Antwort in einem Satz, dann die Regel einfach, dann zwei Beispiele.',
    'Korrigiere nur, wenn wirklich etwas falsch war, und freundlich im Vorbeigehen.',
    'Du erfindest nichts. Bist du unsicher, sag es offen.',
  ].filter(Boolean).join(' ');
}

/* Die Eintrittskarte fuer Gemini Live. Sie gilt eine Minute fuer den
   Verbindungsaufbau und laesst sich genau einmal einloesen. */
async function geminiKarte(variablen) {
  const jetzt = Date.now();
  const r = await fetch('https://generativelanguage.googleapis.com/v1beta/auth_tokens', {
    method: 'POST',
    headers: { 'x-goog-api-key': GEMINI_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      uses: 1,
      expireTime:           new Date(jetzt + 30 * 60 * 1000).toISOString(),
      newSessionExpireTime: new Date(jetzt + 60 * 1000).toISOString(),
      liveConnectConstraints: {
        model: 'models/' + GEMINI_MODEL,
        config: {
          responseModalities: ['AUDIO'],
          sessionResumption: {},
          systemInstruction: { parts: [{ text: geminiAnweisung(variablen) }] },
          /* Mitschrift: beide Seiten als Text zurueck, damit das
             Gespraech danach im Schuelerbereich nachlesbar ist - so
             wie bisher auch. */
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
      },
    }),
  });
  if (!r.ok) {
    const t = await r.text();
    throw new Error('gemini ' + r.status + ' ' + t.slice(0, 200));
  }
  const j = await r.json();
  if (!j.name) throw new Error('gemini: keine Karte zurueck');
  return j.name;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!erlaubteHerkunft(req)) return res.status(403).json({ error: 'forbidden' });

  if (!KEY) return res.status(503).json({ error: 'nicht_eingerichtet', fehlt: ['ELEVENLABS_API_KEY'] });
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_env_missing' });

  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const admin = createClient(SUPA, SERVICE);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });
  const uid = ures.user.id;

  /* Welcher Weg? 'gemini' nur, wenn der Browser ihn verlangt UND der
     Schluessel da ist - sonst bleibt alles beim Alten. */
  const willGemini = String(req.body?.anbieter || '') === 'gemini';
  if (willGemini && !GEMINI_KEY && String(req.body?.aktion || '') !== 'ende') {
    return res.status(503).json({ error: 'nicht_eingerichtet', fehlt: ['GEMINI_API_KEY'] });
  }

  let AGENT = AGENT_ENV;
  if (!willGemini && !AGENT) {
    const { data: e } = await admin
      .from('einstellungen').select('wert').eq('schluessel', 'amanda_agent_id').single();
    AGENT = e?.wert || '';
  }
  if (!willGemini && !AGENT && String(req.body?.aktion || '') !== 'ende') {
    return res.status(503).json({ error: 'nicht_eingerichtet', fehlt: ['ELEVEN_AGENT_ID'] });
  }

  // ---- Auflegen: die Sekunden nachtragen -----------------------------
  // Der Browser meldet sich am Ende noch einmal. Kommt die Meldung nie
  // an (Netz weg, Tab zu), rechnet amanda_monat_sekunden die laufende
  // Zeit trotzdem mit — niemand entkommt der Grenze durch Wegklicken.
  // Seit dem 12.10.2026 aber hoechstens 15 Minuten statt einer vollen
  // Stunde, und beim naechsten Start wird die alte Zeile geschlossen.
  if (String(req.body?.aktion || '') === 'ende') {
    const id = Number(req.body?.gespraech || 0);
    const sek = Math.max(0, Math.min(3600, Number(req.body?.sekunden || 0)));
    if (!id) return res.status(400).json({ error: 'gespraech_fehlt' });
    try {
      await admin
        .from('amanda_gespraeche')
        .update({
          beendet: new Date().toISOString(),
          sekunden: sek,
          gespraech_id: String(req.body?.gespraech_id || '').slice(0, 80) || null,
          abgebrochen: !!req.body?.abgebrochen,
        })
        .eq('id', id)
        .eq('user_id', uid);
    } catch (e) { /* verloren ist verloren — die Grenze rechnet weiter */ }
    /* Julia, 3.11.2026: Seit dem 2.11. endet JEDES Gespraech nach
       zwei bis vier Sekunden mit null Sekunden Sprechzeit. Woran es
       liegt, sagt uns bisher niemand — der Browser bekommt von
       ElevenLabs einen Grund, und der ging bisher verloren. Jetzt
       steht er im Protokoll, damit beim naechsten Mal nicht wieder
       geraten werden muss. */
    if (sek < 5) {
      const grund = String(req.body?.grund || '').slice(0, 300);
      console.log('[amanda] Gespraech ' + id + ' nach ' + sek + 's zu Ende'
        + (grund ? ' — Grund: ' + grund : ' — ohne Grund vom SDK')
        + ' (eleven: ' + (String(req.body?.gespraech_id || '') || 'keine Kennung') + ')');
    }
    return res.status(200).json({ ok: true });
  }

  const { data: prof } = await admin
    .from('profiles')
    .select('name, level, stufe, native_language, amanda_minuten, ' + ZUGANG_SPALTEN)
    .eq('id', uid)
    .single();

  if (!(await hatVollzugang(admin, uid, prof))) return res.status(402).json({ error: 'kein_zugang' });

  // ---- Minutengrenze ------------------------------------------------
  /* profiles.amanda_minuten gewinnt vor allem anderen. Grund: die
     globale Zahl liess Julia nur die Wahl zwischen "fuer alle mehr" und
     "fuer niemanden mehr". Am 14.10.2026 stand eine Altschuelerin mit
     genau 60,0 von 60 Minuten vier Tage lang vor einer geschlossenen
     Tuer, und das sah fuer sie aus, als waere Amanda kaputt. Jetzt kann
     Julia ihr in der Schuelerkarte mehr geben, ohne die Rechnung fuer
     alle anderen zu erhoehen.
     0 ist erlaubt und heisst: fuer diese Person kein Amanda. Nur ein
     leeres Feld bedeutet "normale Regel". */
  const eigene = Number(prof?.amanda_minuten);
  const grenze = Number.isFinite(eigene) && prof?.amanda_minuten !== null
    ? Math.max(0, eigene)
    : (/premium/i.test(prof?.tier || '') ? GRENZE_PREMIUM : GRENZE);
  let verbraucht = 0;
  try {
    const { data } = await admin.rpc('amanda_monat_sekunden', { p_user: uid });
    verbraucht = Number(data || 0);
  } catch (e) { /* im Zweifel durchlassen — lieber ein Gespraech zu viel als eine kaputte Seite */ }

  const rest = grenze * 60 - verbraucht;
  if (!prof?.is_admin && !prof?.is_teacher && rest <= 30) {
    return res.status(429).json({
      error: 'monat_aufgebraucht',
      grenze_minuten: grenze,
      verbraucht_minuten: Math.round(verbraucht / 60),
    });
  }

  // ---- Eintrittskarte holen ----------------------------------------
  const l1v = String(prof?.native_language || '').slice(0, 5).toLowerCase();
  const variablen = {
    name:          String(prof?.name || '').split(' ')[0] || '',
    niveau:        prof?.stufe || prof?.level || 'B1',
    muttersprache: SPRACHEN[l1v] || '',
    thema:         String(req.body?.thema || '').slice(0, 80),
  };

  let karte;
  try {
    karte = willGemini
      ? { art: 'gemini', ticket: await geminiKarte(variablen), modell: GEMINI_MODEL }
      : await ticketHolen(AGENT);
  } catch (e) {
    const detail = String(e.message || e).slice(0, 220);
    console.log('[amanda] Karte fehlgeschlagen (' + (willGemini ? 'gemini' : 'eleven') + '): ' + detail);
    return res.status(502).json({
      error: willGemini ? 'gemini_fehler' : 'eleven_fehler',
      detail,
    });
  }

  /* Liegengebliebene Gespraeche schliessen, bevor ein neues anfaengt.
     Meldet der Browser das Ende nie (Netz weg, Tab zu, Absturz), bleibt
     die Zeile offen und zaehlt weiter mit. Wer jetzt ein neues Gespraech
     beginnt, spricht sicher nicht mehr im alten — also wird es beendet.
     Ohne diese Zeilen sammelten sich die offenen Gespraeche an: am
     11.10.2026 hatte eine Schuelerin drei davon und war damit fuer den
     Rest des Monats gesperrt, nach 14 Sekunden echtem Gespraech. */
  try {
    await admin
      .from('amanda_gespraeche')
      .update({ beendet: new Date().toISOString(), abgebrochen: true })
      .eq('user_id', uid)
      .is('beendet', null);
  } catch (e) { /* nicht schlimm — amanda_monat_sekunden deckelt jetzt bei 15 Minuten */ }

  // ---- Gespraech eroeffnen (die Sekunden traegt der Browser nach) ----
  let zeile = null;
  try {
    const { data } = await admin
      .from('amanda_gespraeche')
      .insert({
        user_id: uid,
        niveau: prof?.stufe || prof?.level || null,
        quelle: String(req.body?.quelle || 'sprechen').slice(0, 40),
      })
      .select('id')
      .single();
    zeile = data?.id || null;
  } catch (e) { /* die Zaehlung darf das Gespraech nicht verhindern */ }

  return res.status(200).json({
    ok: true,
    art: karte.art,
    ticket: karte.ticket,
    modell: karte.modell || '',
    gespraech: zeile,
    rest_sekunden: Math.max(0, rest),
    grenze_minuten: grenze,
    variablen,
  });
}
