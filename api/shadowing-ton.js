// ============================================================
//  deutschoderwas club — Shadowing-Sätze in Julias Stimme
//
//  GET /api/shadowing-ton?paket=a1-vorstellen&n=1
//  -> { ok:true, url:"https://…/storage/v1/object/public/tts/shadowing/…mp3" }
//
//  Erzeugt die 80 Sätze aus bau/shadowing-plan.json EINMAL mit
//  Julias ElevenLabs-Stimme (ELEVEN_VOICE_JULIA) und legt sie im
//  Bucket "tts" ab. Danach kommt jeder Satz kostenlos aus dem Cache.
//
//  Sicher gegen Missbrauch, ohne Login: Es geht NUR um die Sätze,
//  die hier unten fest stehen. Wer die Adresse aufruft, kann also
//  höchstens diese 80 Sätze einmal erzeugen lassen — keinen eigenen
//  Text, keine zweite Rechnung.
//
//  Fehlt Julias Stimme, antwortet der Dienst mit 503. Bewusst KEIN
//  Ersatz durch eine fremde Stimme: Julia will hier sich selbst hören.
//
//  Der Schlüssel bleibt in Vercel und wird hier nur gelesen.
//  Die Sätze unten sind eine Kopie aus bau/shadowing-plan.json —
//  ändert sich dort ein Satz, muss er auch hier geändert werden.
// ============================================================
import crypto from 'crypto';

const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const STIMME  = process.env.ELEVEN_VOICE_JULIA || '';
const MODELL  = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2';
const BUCKET  = 'tts';

/* Anfänger hören langsamer und gleichmäßiger, ab B1 natürlich. */
const TEMPO  = { A1: 0.9, A2: 0.95, B1: 1.0, B2: 1.0, C1: 1.0 };
const STABIL = { A1: 0.62, A2: 0.62, B1: 0.5, B2: 0.5, C1: 0.5 };

const PLAN = {
 "a1-vorstellen": {
  "level": "A1",
  "saetze": [
   "Hallo, ich heiße Anna. Und du?",
   "Ich komme aus Polen und wohne jetzt in Köln.",
   "Ich arbeite im Krankenhaus.",
   "Ich lerne seit drei Monaten Deutsch.",
   "Freut mich, dich kennenzulernen!",
   "Wie lange wohnst du schon hier?",
   "Entschuldigung, wie bitte? Kannst du das noch mal sagen?",
   "Bis morgen, schönen Abend noch!"
  ]
 },
 "a1-cafe-einkaufen": {
  "level": "A1",
  "saetze": [
   "Einen Cappuccino, bitte.",
   "Ich hätte gern zwei Brötchen.",
   "Was kostet das?",
   "Kann ich mit Karte zahlen?",
   "Haben Sie das auch in Größe M?",
   "Nein danke, das ist alles.",
   "Stimmt so, danke!",
   "Entschuldigung, wo finde ich die Milch?"
  ]
 },
 "a2-termine-telefon": {
  "level": "A2",
  "saetze": [
   "Guten Tag, hier spricht Maria Lopez.",
   "Ich möchte gern einen Termin vereinbaren.",
   "Geht es auch am Donnerstagnachmittag?",
   "Um halb vier passt es mir gut.",
   "Leider muss ich den Termin absagen.",
   "Können Sie mich bitte zurückrufen?",
   "Meine Nummer ist null eins sieben sechs, zwei drei vier, fünf sechs.",
   "Vielen Dank, dann bis Donnerstag. Auf Wiederhören!"
  ]
 },
 "a2-unterwegs": {
  "level": "A2",
  "saetze": [
   "Entschuldigung, fährt dieser Bus zum Bahnhof?",
   "Wo muss ich umsteigen?",
   "Der Zug hat zwanzig Minuten Verspätung.",
   "Einmal nach Hamburg, bitte. Hin und zurück.",
   "Ist dieser Platz noch frei?",
   "Ich glaube, ich habe mich verlaufen.",
   "Gehen Sie geradeaus und dann die zweite Straße links.",
   "Wie lange braucht man zu Fuß?"
  ]
 },
 "b1-alltag-gefuehle": {
  "level": "B1",
  "saetze": [
   "Ehrlich gesagt hab ich heute keine Lust auf Kino.",
   "Das finde ich eine super Idee!",
   "Ich bin mir nicht ganz sicher, ob das klappt.",
   "Ach, das ist doch nicht so schlimm.",
   "Ich hab mich total gefreut, dass du gekommen bist.",
   "Mich nervt es, wenn Leute ständig zu spät kommen.",
   "Kannst du mir mal kurz helfen? Das wäre echt nett.",
   "Wenn ich mehr Zeit hätte, würde ich öfter Sport machen."
  ]
 },
 "b1-arbeit": {
  "level": "B1",
  "saetze": [
   "Ich bin heute leider krank und kann nicht kommen.",
   "Könnten wir das kurz besprechen?",
   "Bis wann brauchen Sie das?",
   "Ich schicke Ihnen die Unterlagen gleich per Mail.",
   "Das habe ich noch nicht ganz verstanden. Können Sie das bitte noch mal erklären?",
   "Ich kümmere mich darum.",
   "Tut mir leid, das schaffe ich heute nicht mehr.",
   "Wollen wir zusammen Mittagspause machen?"
  ]
 },
 "b2-diskutieren": {
  "level": "B2",
  "saetze": [
   "Da muss ich dir leider widersprechen.",
   "Das sehe ich ein bisschen anders.",
   "Im Großen und Ganzen hast du recht, aber ein Punkt fehlt mir noch.",
   "Ich verstehe deinen Standpunkt, trotzdem bin ich skeptisch.",
   "Lass mich bitte kurz ausreden.",
   "Was genau meinst du damit?",
   "Auf der einen Seite ist es günstiger, auf der anderen Seite dauert es länger.",
   "Darauf können wir uns einigen."
  ]
 },
 "b2-umgangssprache": {
  "level": "B2",
  "saetze": [
   "Na, wie war's?",
   "Keine Ahnung, mal gucken.",
   "Das ist mir echt zu blöd.",
   "Komm, lass mal gut sein.",
   "Hast du 'ne Idee, wo wir hingehen könnten?",
   "Ich bin total fertig, ich geh gleich ins Bett.",
   "Das klingt doch gar nicht so schlecht.",
   "Weißte was? Wir machen das einfach morgen."
  ]
 },
 "c1-diplomatisch": {
  "level": "C1",
  "saetze": [
   "Ich würde gern noch einen Aspekt ergänzen.",
   "Das ist ein berechtigter Einwand, den wir ernst nehmen sollten.",
   "Wenn ich Sie richtig verstanden habe, geht es Ihnen vor allem um die Kosten.",
   "Vor diesem Hintergrund halte ich es für sinnvoll, abzuwarten.",
   "Mir ist durchaus bewusst, dass das nicht jedem gefällt.",
   "Lassen Sie uns das beim nächsten Treffen noch einmal aufgreifen.",
   "Unterm Strich überwiegen für mich die Vorteile.",
   "Ich gebe zu bedenken, dass die Zeit knapp ist."
  ]
 },
 "c1-vortragen": {
  "level": "C1",
  "saetze": [
   "Zunächst möchte ich kurz erklären, worum es geht.",
   "Viele Menschen unterschätzen, wie viel Zeit man für eine gute Vorbereitung braucht.",
   "Das hat zur Folge, dass immer mehr junge Leute in die Städte ziehen.",
   "Besonders auffällig ist, dass die Zahlen seit drei Jahren steigen.",
   "Daraus ergibt sich die Frage, wie wir in Zukunft damit umgehen wollen.",
   "Einerseits bringt die Digitalisierung viele Chancen mit sich, andererseits verändert sie unseren Alltag grundlegend.",
   "Abschließend lässt sich festhalten, dass es keine einfache Lösung gibt.",
   "Vielen Dank für Ihre Aufmerksamkeit – ich freue mich auf Ihre Fragen."
  ]
 }
};

function erlaubteHerkunft(req) {
  const o = String(req.headers.origin || req.headers.referer || '');
  if (!o) return true;
  return /deutschoderwas-club\.de|deutschoderwas\.de|localhost|127\.0\.0\.1|vercel\.app/i.test(o);
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  if (!erlaubteHerkunft(req)) return res.status(403).json({ error: 'forbidden' });

  const paket = String(req.query.paket || '');
  const n = parseInt(req.query.n, 10);
  const p = PLAN[paket];
  if (!p || !(n >= 1 && n <= p.saetze.length)) return res.status(404).json({ error: 'unbekannt' });

  const key = process.env.ELEVENLABS_API_KEY;
  if (!key || !STIMME) return res.status(503).json({ error: 'julias_stimme_fehlt' });
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_env_missing' });

  const text = p.saetze[n - 1];
  const tempo = TEMPO[p.level] || 1.0;
  const hash = crypto.createHash('sha256')
    .update(`${STIMME}|${MODELL}|${tempo}|${text}`).digest('hex').slice(0, 12);
  const pfad = `shadowing/${paket}-${n}-${hash}.mp3`;
  const url = `${SUPA}/storage/v1/object/public/${BUCKET}/${pfad}`;

  try {
    const head = await fetch(url, { method: 'HEAD' });
    if (head.ok) return res.status(200).json({ ok: true, url, text, cached: true });
  } catch (e) { /* weiter */ }

  const r = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${STIMME}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: { 'xi-api-key': key, 'content-type': 'application/json', accept: 'audio/mpeg' },
      body: JSON.stringify({
        text,
        model_id: MODELL,
        /* Dieselben Einstellungen wie beim Podcast (so nah an Julia
           wie möglich): style 0, similarity 0.92, speaker boost an. */
        voice_settings: {
          stability: STABIL[p.level] || 0.5,
          similarity_boost: 0.92,
          style: 0,
          use_speaker_boost: true,
          speed: tempo,
        },
      }),
    }
  );
  if (!r.ok) {
    return res.status(502).json({ error: 'eleven_' + r.status, detail: (await r.text()).slice(0, 200) });
  }
  const audio = Buffer.from(await r.arrayBuffer());
  if (!audio.length) return res.status(502).json({ error: 'leere_datei' });

  const up = await fetch(`${SUPA}/storage/v1/object/${BUCKET}/${pfad}`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${SERVICE}`, apikey: SERVICE,
      'content-type': 'audio/mpeg', 'x-upsert': 'true',
      'cache-control': 'public, max-age=31536000, immutable',
    },
    body: audio,
  });
  if (!up.ok && up.status !== 409) {
    return res.status(500).json({ error: 'upload', detail: (await up.text()).slice(0, 200) });
  }
  return res.status(200).json({ ok: true, url, text, cached: false });
}
