// ============================================================
//  deutschoderwas club — Shadowing-Sätze in Julias Stimme
//
//  GET /api/shadowing-ton?paket=a1-vorstellen&n=1
//  -> { ok:true, url:"https://…/storage/v1/object/public/tts/shadowing/…mp3" }
//
//  Erzeugt die Sätze aus bau/shadowing-plan.json EINMAL mit
//  Julias ElevenLabs-Stimme (ELEVEN_VOICE_JULIA) und legt sie im
//  Bucket "tts" ab. Danach kommt jeder Satz kostenlos aus dem Cache.
//
//  Sicher gegen Missbrauch, ohne Login: Es geht NUR um die Sätze,
//  die hier unten fest stehen. Wer die Adresse aufruft, kann also
//  höchstens diese Sätze einmal erzeugen lassen — keinen eigenen
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

/* Julia (28.10.2026): „nicht so schnell, denk immer an Pause –
   wie ein ECHTER MENSCH“. Deshalb auf allen Niveaus ruhiger als
   normal, und Atempausen an jedem Komma und zwischen den Sätzen. */
const TEMPO  = { A1: 0.84, A2: 0.88, B1: 0.92, B2: 0.94, C1: 0.95 };
const PAUSE  = { A1: [0.45, 0.8], A2: [0.4, 0.75], B1: [0.35, 0.65], B2: [0.3, 0.6], C1: [0.3, 0.55] };

/* Pausen als ElevenLabs-<break>: kurz nach Komma, Doppelpunkt und
   Gedankenstrich, länger zwischen zwei Sätzen. Gezeigt wird den
   Lernenden der Text ohne diese Marken. */
function mitPausen(text, level) {
  const [kurz, lang] = PAUSE[level] || [0.35, 0.65];
  return text
    .replace(/([,:;–])\s+/g, `$1 <break time="${kurz}s" /> `)
    .replace(/([.?!])\s+(?=\S)/g, `$1 <break time="${lang}s" /> `);
}
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
   "Ehrlich gesagt habe ich heute keine Lust auf Kino.",
   "Das finde ich eine super Idee!",
   "Ich bin mir nicht ganz sicher, ob das klappt.",
   "Ach, das ist doch nicht so schlimm.",
   "Ich habe mich total gefreut, dass du gekommen bist.",
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
   "Hast du eine Idee, wo wir hingehen könnten?",
   "Ich bin total fertig, ich gehe gleich ins Bett.",
   "Das klingt doch gar nicht so schlecht.",
   "Weißt du was? Wir machen das einfach morgen."
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
 },
 "a1-uhrzeit": {
  "level": "A1",
  "saetze": [
   "Wie spät ist es? Es ist halb drei.",
   "Der Kurs beginnt um neun Uhr.",
   "Ich habe am Montag Zeit.",
   "Heute ist der dritte Mai.",
   "Wir treffen uns um Viertel nach acht.",
   "Am Wochenende arbeite ich nicht.",
   "Wann hast du Geburtstag?",
   "Mein Bus kommt in fünf Minuten."
  ]
 },
 "a1-familie-freizeit": {
  "level": "A1",
  "saetze": [
   "Ich habe zwei Kinder, einen Sohn und eine Tochter.",
   "Meine Schwester wohnt in Berlin.",
   "Am Wochenende spiele ich gern Fußball.",
   "Was machst du in deiner Freizeit?",
   "Ich lese gern und gehe oft spazieren.",
   "Mein Vater kocht sehr gut.",
   "Hast du Geschwister?",
   "Wir fahren im Sommer ans Meer."
  ]
 },
 "a2-arzt-apotheke": {
  "level": "A2",
  "saetze": [
   "Ich habe seit drei Tagen Halsschmerzen.",
   "Mir ist schwindelig und ich habe Fieber.",
   "Wie oft muss ich die Tabletten nehmen?",
   "Dreimal am Tag nach dem Essen.",
   "Brauche ich dafür ein Rezept?",
   "Ich bin gegen Penizillin allergisch.",
   "Können Sie mich bitte krankschreiben?",
   "Gute Besserung!"
  ]
 },
 "a2-wohnung-nachbarn": {
  "level": "A2",
  "saetze": [
   "Die Heizung in meiner Wohnung funktioniert nicht.",
   "Wann kann der Hausmeister kommen?",
   "Könnten Sie die Musik bitte etwas leiser machen?",
   "Ich habe ein Paket für Sie angenommen.",
   "Wo stehen die Mülltonnen?",
   "Die Wohnung hat drei Zimmer und einen Balkon.",
   "Wie hoch sind die Nebenkosten?",
   "Herzlich willkommen im Haus!"
  ]
 },
 "b1-smalltalk": {
  "level": "B1",
  "saetze": [
   "Na, wie war dein Wochenende?",
   "Schönes Wetter heute, oder?",
   "Arbeitest du schon lange hier?",
   "Das kann ich gut verstehen.",
   "Ach, wirklich? Das wusste ich gar nicht.",
   "Wir sollten mal zusammen einen Kaffee trinken.",
   "Ich muss leider los, aber es war schön, dich zu sehen.",
   "Grüß deine Familie von mir!"
  ]
 },
 "b1-reklamation": {
  "level": "B1",
  "saetze": [
   "Ich habe letzte Woche einen Staubsauger bei Ihnen gekauft.",
   "Leider funktioniert er schon nicht mehr.",
   "Kann ich das Gerät umtauschen?",
   "Ich hätte gern mein Geld zurück.",
   "Den Kassenbon habe ich dabei.",
   "Wie lange dauert die Reparatur?",
   "Das ist schon das zweite Mal, dass das passiert.",
   "Vielen Dank, dass Sie sich so schnell darum kümmern."
  ]
 },
 "b2-meeting": {
  "level": "B2",
  "saetze": [
   "Ich möchte kurz zusammenfassen, wo wir gerade stehen.",
   "Der wichtigste Punkt ist meiner Meinung nach der Zeitplan.",
   "Wir haben drei Möglichkeiten, und ich empfehle die zweite.",
   "Das würde uns viel Zeit und Geld sparen.",
   "Darf ich an dieser Stelle kurz einhaken?",
   "Lass uns das bis Freitag klären.",
   "Wer übernimmt welche Aufgabe?",
   "Gut, dann halten wir das so fest."
  ]
 },
 "b2-mitfuehlen": {
  "level": "B2",
  "saetze": [
   "Oh nein, das tut mir wirklich leid.",
   "Das klingt ja furchtbar anstrengend.",
   "Wie geht es dir jetzt damit?",
   "Wenn du reden willst, bin ich für dich da.",
   "Echt? Das freut mich so für dich!",
   "Herzlichen Glückwunsch, das hast du dir verdient!",
   "Mach dir keinen Kopf, das wird schon wieder.",
   "Ich kann total nachvollziehen, dass du sauer bist."
  ]
 },
 "c1-verhandeln": {
  "level": "C1",
  "saetze": [
   "Ich schätze Ihr Angebot, allerdings liegt es über unserem Budget.",
   "Wären Sie bereit, uns beim Preis entgegenzukommen?",
   "Bei einer längeren Laufzeit könnten wir über einen Rabatt sprechen.",
   "Das ist für uns leider nicht verhandelbar.",
   "Lassen Sie uns nach einer Lösung suchen, die für beide Seiten passt.",
   "Unter diesen Bedingungen könnten wir zustimmen.",
   "Ich müsste das zunächst intern abstimmen.",
   "Dann halten wir fest: Lieferung im März, Zahlung in zwei Raten."
  ]
 },
 "c1-kritik": {
  "level": "C1",
  "saetze": [
   "Darf ich dir ein offenes Feedback geben?",
   "Mir ist aufgefallen, dass die Absprachen zuletzt nicht eingehalten wurden.",
   "Ich sage das nicht, um dich zu kritisieren, sondern weil mir das Projekt wichtig ist.",
   "Was bräuchtest du, damit das in Zukunft besser klappt?",
   "Danke für die ehrliche Rückmeldung, das nehme ich mir zu Herzen.",
   "Da hast du einen wunden Punkt getroffen.",
   "Ich sehe das teilweise anders, aber ich verstehe, worauf du hinauswillst.",
   "Lass uns in zwei Wochen noch einmal schauen, wie es läuft."
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
    .update(`v2|${STIMME}|${MODELL}|${tempo}|${text}`).digest('hex').slice(0, 12);
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
        text: mitPausen(text, p.level),
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
