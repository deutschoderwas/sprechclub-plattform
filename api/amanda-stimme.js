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

const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY     = process.env.ELEVENLABS_API_KEY;
/* Die Kennung des Agenten steht entweder in Vercel oder in der
   Tabelle einstellungen — je nachdem, ob Julia sie von Hand
   eingetragen hat oder api/amanda-agent-anlegen.js sie gesetzt
   hat. Beides ist recht; Vercel gewinnt. */
const AGENT_ENV = process.env.ELEVEN_AGENT_ID || '';

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

/* Darf diese Person ueberhaupt sprechen? Dieselbe Regel wie ueberall:
   aktives Abo oder laufender Pass. */
function darfSprechen(p) {
  if (!p) return false;
  if (p.is_admin || p.is_teacher) return true;
  if (p.status && /aktiv|active|trial/i.test(p.status)) return true;
  if (p.pass_until && new Date(p.pass_until) > new Date()) return true;
  return false;
}

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

  let AGENT = AGENT_ENV;
  if (!AGENT) {
    const { data: e } = await admin
      .from('einstellungen').select('wert').eq('schluessel', 'amanda_agent_id').single();
    AGENT = e?.wert || '';
  }
  if (!AGENT && String(req.body?.aktion || '') !== 'ende') {
    return res.status(503).json({ error: 'nicht_eingerichtet', fehlt: ['ELEVEN_AGENT_ID'] });
  }

  // ---- Auflegen: die Sekunden nachtragen -----------------------------
  // Der Browser meldet sich am Ende noch einmal. Kommt die Meldung nie
  // an (Netz weg, Tab zu), rechnet amanda_monat_sekunden die laufende
  // Zeit trotzdem mit — niemand entkommt der Grenze durch Wegklicken.
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
    return res.status(200).json({ ok: true });
  }

  const { data: prof } = await admin
    .from('profiles')
    .select('name, level, stufe, native_language, status, tier, pass_until, is_admin, is_teacher')
    .eq('id', uid)
    .single();

  if (!darfSprechen(prof)) return res.status(402).json({ error: 'kein_zugang' });

  // ---- Minutengrenze ------------------------------------------------
  const grenze = /premium/i.test(prof?.tier || '') ? GRENZE_PREMIUM : GRENZE;
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
  let karte;
  try {
    karte = await ticketHolen(AGENT);
  } catch (e) {
    return res.status(502).json({ error: 'eleven_fehler', detail: String(e.message || e).slice(0, 220) });
  }

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

  const l1 = String(prof?.native_language || '').slice(0, 5).toLowerCase();

  return res.status(200).json({
    ok: true,
    art: karte.art,
    ticket: karte.ticket,
    gespraech: zeile,
    rest_sekunden: Math.max(0, rest),
    grenze_minuten: grenze,
    variablen: {
      name:        String(prof?.name || '').split(' ')[0] || '',
      niveau:      prof?.stufe || prof?.level || 'B1',
      muttersprache: SPRACHEN[l1] || '',
      thema:       String(req.body?.thema || '').slice(0, 80),
    },
  });
}
