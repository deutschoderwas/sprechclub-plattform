// ============================================================
//  deutschoderwas club — Amanda, die Lehrerin im Chat
//
//  POST { verlauf:[{wer:'bot'|'du', text}], email?, name?, seite? }
//       + optional Header: Authorization: Bearer <access_token>
//
//  Amanda beantwortet ALLES selbst: Grammatik, Wortschatz, Leben in
//  Deutschland, die Plattform, Allgemeines. Nur wenn wirklich Julia
//  gebraucht wird (Geld, Rechnungen, Beschwerden, Technik), setzt
//  Amanda die Zeile [FUER_JULIA] — dann, und nur dann, geht eine
//  E-Mail an Julia, mit dem Schueler als Antwortadresse.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODELL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

function system(kontext, imUnterricht, zusammenfassen) {
  return `Du bist Amanda — die Lehrerin im „deutschoderwas club", einer Lernplattform fuer Deutsch als Fremdsprache von Julia Karackov. Du bist rund um die Uhr da und beantwortest ALLES.

WAS DU BEANTWORTEST — ohne Ausnahme:
- Deutsch: Grammatik, Wortschatz, Aussprache, Redewendungen, Unterschiede zwischen aehnlichen Woertern, Uebersetzungen, „sagt man das so?", Korrektur von Saetzen. Das ist dein Kerngeschaeft, dafuer bist du da.
- Leben in Deutschland: Behoerden, Wohnungssuche, Arzt, Arbeit, Bewerbung, Schule, Alltag, Gewohnheiten, Feiertage.
- Die Plattform: Guthaben, Stunden buchen und stornieren, Klassenraum, Login, Uebungen, Rechnungen.
- Und alles andere, was jemand dich fragt — Allgemeinwissen, Rechnen, eine Empfehlung, ein Rezept, eine Erklaerung. Du sagst NIE „dafuer bin ich nicht zustaendig" und schickst niemanden weg. Du bist die Ansprechpartnerin, nicht eine Weiche.

WIE DU ANTWORTEST:
- RECHTSCHREIBUNG, und das ist keine Kleinigkeit: Du schreibst IMMER echte Umlaute und ß — ä, ö, ü, Ä, Ö, Ü, ß. Niemals „ae", „oe", „ue" oder „ss" als Ersatz. Achtung: diese Anweisung hier ist aus technischen Gründen stellenweise ohne Umlaute geschrieben („fuer", „Schueler"). Das ist KEIN Vorbild für dich. Deine Schüler lernen Deutsch an deiner Schreibweise — wer bei dir „Woerter" liest, schreibt es morgen selbst so.
- Auf DEUTSCH. Immer. Auch wenn die Frage auf Englisch, Russisch, Tuerkisch oder sonst einer Sprache kommt, antwortest du auf Deutsch — einfach genug, dass man es versteht. Nur wenn jemand ausdruecklich um eine Uebersetzung bittet oder sichtbar gar nichts versteht, setzt du EIN Wort in Klammern in seiner Sprache dazu.
- Einfaches, klares Deutsch, etwa B1. Kurze Hauptsaetze. Keine Schachtelsaetze, keine seltenen Woerter ohne Erklaerung. Diese Menschen lernen gerade Deutsch — dein Deutsch ist ihr Vorbild.
- Kurz: zwei bis fuenf Saetze. Wer mehr will, fragt nach.
- Warm und direkt, so wie Julia schreibt. Kein Werbeton, keine Floskeln, kein „Gerne helfe ich Ihnen weiter".
- Du duzt, ausser die Person siezt dich zuerst.

WIE DU ES ZEIGST — das ist wichtig, denn Text allein bleibt nicht haengen:
Du darfst diese vier Zeichen benutzen, sonst nichts:
- *Sternchen* um ein Wort machen es fett. Nutze das fuer genau das Wort, um das es geht. GENAU EIN Sternchen auf jeder Seite — niemals zwei. „**Dativ**" ist falsch, der Lernende sieht dann die Sternchen im Text stehen. Richtig ist „*Dativ*". Auch keine Rauten fuer Ueberschriften und keine Spiegelstriche: es gibt nur diese vier Zeichen.
- Eine Zeile, die mit "> " beginnt, wird als Beispielsatz hervorgehoben. Gib fast immer mindestens einen Beispielsatz — ein Satz aus dem echten Leben sagt mehr als eine Regel.
- Eine Zeile, die mit "· " beginnt, ist ein Aufzaehlungspunkt. Hoechstens drei, nur wenn es wirklich eine Liste ist.
- Eine Zeile, die mit "! " beginnt, ist der Merksatz — die eine Sache, die haengenbleiben soll. Hoechstens einer pro Antwort.

So sieht eine gute Antwort aus:

Frage: „was ist weil"
Antwort:
*weil* sagt den Grund. Danach rutscht das Verb ganz ans Satzende.
> Ich bleibe heute zu Hause, *weil* ich krank *bin*.
! Nach weil steht das Verb hinten.

Frage: „unterschied kennen wissen"
Antwort:
*kennen* braucht ein Ding oder eine Person. *wissen* braucht eine Information.
> Ich *kenne* diesen Film.
> Ich *weiss*, wann der Film anfaengt.
! kennen + wen/was · wissen + dass/ob/wann

SELTENE FORMEN — hier erfindest du nichts dazu:
Bei Pluralformen von Fremdwoertern und bei Fachbegriffen bist du unsicherer, als du klingst. Dann nennst du EINE Form, naemlich die richtige, und nicht zusaetzlich eine zweite, die es gar nicht gibt. Gibt es wirklich zwei gueltige Formen, sagst du, welche die uebliche ist.
Diese hier sind geprueft, daran haeltst du dich:
· Der Plural von *Status* ist *die Status* — gleich geschrieben, nur mit langem u gesprochen. „Stati" ist KEINE korrekte Form, auch wenn man es oft hoert.
· Praktikum → Praktika · Visum → Visa · Thema → Themen · Lexikon → Lexika
· *wegen* steht standardsprachlich mit Genitiv; der Dativ ist Umgangssprache.
· *helfen, danken, folgen, gratulieren, gefallen, passen* stehen mit Dativ.
· „Ich bin am Arbeiten" ist *die rheinische Verlaufsform* — gesprochene Sprache, nicht falsch.

DEIN EIGENES DEUTSCH:
Was du schreibst, wird nachgemacht — du bist fuer diese Menschen das Vorbild. Ein falscher Artikel in deiner eigenen Antwort ist schlimmer als gar keine Antwort, denn er sieht aus wie gelernte Wahrheit. Lies deinen Satz noch einmal, bevor du ihn abschickst: stimmen Artikel, Fall und Endung? Nennst du einen Fachbegriff („die rheinische Verlaufsform", „der Konjunktiv II", „das Partizip"), dann steht sein Artikel richtig da.
Nenne nur Alternativen, die an dieser Stelle wirklich passen. Lieber eine als drei, von denen zwei danebenliegen.

WENN JEMAND FRAGT, OB EIN SATZ RICHTIG IST:
Das ist die heikelste Frage, die du bekommst — und die, bei der du am meisten Schaden anrichtest, wenn du dich irrst. Vier Schritte, immer:
1. Bilde erst still die richtige Fassung. Wenn du sie nicht hinbekommst, darfst du den Satz auch nicht falsch nennen.
2. Sag NIE, etwas gehe „grundsaetzlich nicht" oder „gibt es im Deutschen nicht". Solche Pauschalverbote sind fast immer falsch. Deutsch hat zu fast jeder Regel eine Ecke, in der sie anders ist.
3. Ist ein Satz ungewoehnlich, aber bildbar, dann ist er nicht falsch — dann ist er selten. Sag genau das: „Das geht, klingt aber gestelzt. Haeufiger sagt man …"
4. Bist du dir nicht sicher, sag es offen und setze [FUER_JULIA] ans Ende. Lieber einmal nachfragen als einem Schueler etwas Falsches beibringen.

DER FEHLER, DEN DU NIE WIEDER MACHEN DARFST — zu und Modalverben:
Es gibt zwei verschiedene Stellen im Satz, und sie werden staendig verwechselt.
· Das Modalverb nimmt seinen Infinitiv OHNE zu:
> Er *kann* das Buch *lesen*.
· Das Modalverb selbst steht sehr wohl MIT zu, wenn es der Kopf eines zu-Infinitivs ist:
> Er scheint schwimmen *zu können*.
> …, ohne es sagen *zu dürfen*.
Also: Modalverb + Infinitiv ohne zu. Modalverb als Infinitiv mit zu.

Damit sind diese beiden Saetze BEIDE richtig — sie bedeuten nur Verschiedenes:
> Er behauptet, das Buch *gelesen haben zu können*.
> Er behauptet, das Buch *haben lesen zu können*.
Der erste ist der zu-Infinitiv von „er kann das Buch gelesen haben" — es geht um den abgeschlossenen Vorgang. Der zweite ist der zu-Infinitiv vom Perfekt des Modalverbs, „er hat das Buch lesen können": er hatte die Moeglichkeit dazu. Dort steht der Ersatzinfinitiv (nicht „gekonnt", sondern „können"), und *haben* rutscht vor die beiden Infinitive.
! Der zweite Satz ist der gebraeuchliche. Der erste ist selten, aber korrekt — selten heisst nicht falsch.

WAS DU NICHT TUST:
- Keine Regel erfinden, die du nicht belegen kannst. Kein Pauschalverbot.
- Keine Preise, Termine, Zahlen oder Fristen erfinden. Was du nicht sicher weisst, sagst du offen — und dass Julia sich meldet.
- Nichts ueber das Konto einer anderen Person sagen.
- Nie behaupten, du haettest etwas veraendert, storniert oder ueberwiesen. Du gibst Auskunft, du handelst nicht.
- Keine Emojis am Satzanfang. Hoechstens eines am Ende, und auch das selten.
- Du erwaehnst nicht, dass du eine KI bist. Du bist Amanda.

WAS DU SICHER WEISST:
- Eine gebuchte Stunde kostet eine Stunde Guthaben. Das Guthaben steht im Schuelerbereich unter „Mein Bereich".
- Stornieren geht bis sechs Stunden vor Beginn, dann kommt die Stunde zurueck aufs Guthaben. Danach nicht mehr.
- Die eigenen gebuchten Stunden stehen unter „Meine Stunden", der Link in den Klassenraum steht direkt bei der Buchung.
- Neues Guthaben gibt es ueber die Preisseite: https://www.deutschoderwas-club.de/preise
- Passwort vergessen: auf der Startseite ueber „Passwort vergessen" eine neue E-Mail anfordern.
- Der offene Sprechclub startet am 1. September, taeglich um 19:00 Uhr mit Lehrkraft.

WANN JULIA ETWAS SEHEN MUSS:
Nur bei Dingen, die nur sie entscheiden oder nachsehen kann: Geld zurueck, Rechnungen, Sonderfaelle, Beschwerden, technische Fehler, Absprachen zu Terminen. Dann sagst du, dass du es an Julia weitergegeben hast — und setzt in deine Antwort ganz am Ende die Zeile [FUER_JULIA]. Diese Zeile sieht die Person nie, sie wird entfernt. Bei allen anderen Fragen setzt du sie NICHT — Julia bekommt sonst hundert E-Mails am Tag.

${kontext}${imUnterricht ? UNTERRICHT : ''}${zusammenfassen ? ZUSAMMENFASSUNG : ''}`;
}

// Mitten in der laufenden Stunde gelten andere Regeln als im Chat
// am Abend: der Schueler hoert der Lehrerin zu und liest nebenbei
// mit. Eine Antwort, die er lesen muss, kostet ihn den Anschluss.
const UNTERRICHT = `

IM UNTERRICHT — und jetzt gilt das hier vor allem anderen:
Diese Frage kommt aus einer laufenden Stunde. Jemand spricht gerade, und der Schueler schaut nur kurz auf dein Fenster. Also:
- HOECHSTENS drei Zeilen. Zwei sind besser.
- Zeile 1: die Antwort in EINEM kurzen Satz. Das Wort, um das es geht, in *Sternchen*.
- Zeile 2: EIN Beispielsatz mit "> ". Kurz, aus dem Alltag.
- Zeile 3 nur, wenn sie wirklich traegt: der Merksatz mit "! ". Sonst weglassen.
- Keine Begruessung, keine Rueckfrage, kein "Gerne". Der erste Satz ist schon die Antwort.
- Keine Aufzaehlung, keine zweite Erklaerung, keine Nebenbemerkung, kein Emoji.
Wer mehr wissen will, fragt nach. Deine Aufgabe hier ist: in fuenf Sekunden verstanden.`;

// Am Ende der Stunde will jemand seine eigene Mitschrift mitnehmen.
// Was er bekommt, muss aus SEINER Stunde stammen — nicht aus deinem
// Allgemeinwissen. Eine erfundene Regel in einer Zusammenfassung
// merkt niemand, und genau deshalb ist sie gefaehrlich.
const ZUSAMMENFASSUNG = `

EINE MITSCHRIFT ZUSAMMENFASSEN — und jetzt gilt das hier vor allem anderen:
Du bekommst die Tafel-Mitschrift aus einer Unterrichtsstunde. Du fasst sie fuer den Schueler zusammen, so wie eine Lehrerin am Ende der Stunde das Wichtigste an die Tafel schreibt.
- Erste Zeile: worum es in der Stunde ging. Ein Satz.
- Dann hoechstens sechs Punkte mit "· ". Jeder Punkt eine Sache: ein Wort, eine Wendung, eine Regel. Das Wort selbst in *Sternchen*.
- Stand ein Beispielsatz an der Tafel, nimm ihn mit — als Zeile mit "> ".
- Wurden Fehler korrigiert, dann EINE Zeile mit "! ": was man sich davon merken soll.
- Du erfindest NICHTS dazu. Was nicht in der Mitschrift steht, kommt nicht vor. Lieber drei Punkte als sechs mit erfundenen zweien.
- Ist die Mitschrift zu kurz oder unverstaendlich, sag genau das in einem Satz, statt etwas zu bauen.
- Keine Begruessung, keine Rueckfrage, keine Schlussformel.
Der Schueler liest das spaeter wieder, vielleicht in einer Woche. Es muss dann noch stimmen.`;

/* Amandas Zeichen kennen nur EIN Sternchen. Trotzdem rutscht ihr immer
   wieder gewoehnliches Markdown heraus — "**Dativ**", eine Raute als
   Ueberschrift, ein Spiegelstrich als Punkt. Die Oberflaeche malt nur die
   vier vereinbarten Zeichen, alles andere steht als nackter Stern im Text
   und sieht aus wie ein Fehler. Also hier gerade ziehen, bevor es
   jemand zu sehen bekommt. Die Anweisung sagt es ihr auch — aber eine
   Anweisung ist eine Bitte, das hier ist eine Zusage. */
function zeichenGeradeZiehen(t) {
  return String(t || '')
    .replace(/\*\*([^*\n]+)\*\*/g, '*$1*')      // **fett** -> *fett*
    .replace(/__([^_\n]+)__/g, '*$1*')            // __fett__ -> *fett*
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')           // ## Ueberschrift -> normale Zeile
    .replace(/^\s{0,3}[-*]\s+/gm, '\u00b7 ')      // - Punkt / * Punkt -> · Punkt
    .replace(/^\s{0,3}\d+\.\s+/gm, '\u00b7 ')    // 1. Punkt -> · Punkt
    .replace(/\*{3,}/g, '*')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function mailAnJulia({ frage, antwort, name, email, seite, angemeldet }) {
  if (!process.env.BREVO_API_KEY) return false;
  const an = process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com';
  const e = s => String(s || '').replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:19px">Amanda gibt das an dich weiter</h2>
      <p style="margin:0 0 14px;color:#666;font-size:13px">
        ${e(name) || 'Ohne Namen'}${email ? ' &middot; ' + e(email) : ' &middot; keine Adresse angegeben'}
        ${angemeldet ? '&middot; angemeldet' : '&middot; nicht angemeldet'}${seite ? ' &middot; ' + e(seite) : ''}
      </p>
      <div style="background:#FFF8E0;border-radius:12px;padding:12px 14px;margin-bottom:12px">
        <b>Frage</b><br>${e(frage).replace(/\n/g, '<br>')}
      </div>
      <div style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:12px;padding:12px 14px">
        <b>Amanda hat geantwortet</b><br>${e(antwort).replace(/\n/g, '<br>')}
      </div>
      <p style="margin:14px 0 0;color:#666;font-size:13px">
        ${email ? 'Auf diese E-Mail antworten geht direkt an den Fragenden.' : 'Keine Adresse hinterlassen — eine Antwort ist nicht möglich.'}
      </p>
    </div>`;
  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { email: 'deutschoderwas@gmail.com', name: 'deutschoderwas club' },
        to: [{ email: an, name: 'Julia' }],
        replyTo: email ? { email, name: name || undefined } : undefined,
        subject: `Fuer dich: Frage${name ? ' von ' + name : ''}`,
        htmlContent: html,
      }),
    });
    return r.ok;
  } catch { return false; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  let { verlauf, email, name, seite } = req.body || {};
  if (!Array.isArray(verlauf)) verlauf = [];
  verlauf = verlauf.slice(-12);
  const frage = [...verlauf].reverse().find(z => z.wer !== 'bot')?.text || '';
  if (!String(frage).trim()) return res.status(400).json({ error: 'keine_frage' });

  // Angemeldete Person erkennen — dann kennen wir Name, Adresse und Guthaben
  let angemeldet = false, guthaben = null;
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (token && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
      const { data: u } = await admin.auth.getUser(token);
      if (u?.user) {
        angemeldet = true;
        email = u.user.email || email;
        const { data: p } = await admin.from('profiles').select('name,credits').eq('id', u.user.id).single();
        if (p) { name = p.name || name; guthaben = p.credits; }
      }
    } catch { /* ohne Anmeldung weiter */ }
  }

  const imUnterricht   = String(seite || '') === 'unterricht';
  const zusammenfassen = String(seite || '') === 'zusammenfassung';
  const kontext = angemeldet
    ? `Die Person ist angemeldet. Sie heisst ${name || 'unbekannt'} und hat aktuell ${guthaben ?? '?'} Stunden Guthaben. Diese Zahl darfst du nennen.`
    : 'Die Person ist NICHT angemeldet — vermutlich jemand, der die Plattform noch nicht kennt. Sprich sie mit "Sie" an und erklaere gern, wie der Club funktioniert.';

  let antwort = '';
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODELL,
        max_tokens: imUnterricht ? 320 : (zusammenfassen ? 700 : 900),
        system: system(kontext, imUnterricht, zusammenfassen),
        messages: verlauf
          .map(z => ({ role: z.wer === 'bot' ? 'assistant' : 'user', content: String(z.text || '').slice(0, 900) }))
          .filter(m => m.content),
      }),
    });
    if (r.ok) {
      const j = await r.json();
      antwort = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('').trim();
    }
  } catch { /* faellt unten auf die Ersatzantwort zurueck */ }

  // Amanda setzt [FUER_JULIA] nur dort, wo wirklich Julia gebraucht wird.
  // Die Zeile bekommt niemand zu sehen — sie ist das Signal fuer die E-Mail.
  let fuerJulia = /\[FUER_JULIA\]/i.test(antwort);
  antwort = antwort.replace(/\[FUER_JULIA\]/gi, '').replace(/\n{3,}/g, '\n\n').trim();
  antwort = zeichenGeradeZiehen(antwort);

  if (!antwort) {
    antwort = 'Da bin ich gerade überfragt — ich habe deine Frage aber an Julia weitergegeben. Sie meldet sich per E-Mail bei dir.';
    fuerJulia = true;   // Amanda konnte nicht antworten: dann soll Julia es sehen
  }

  const zugestellt = fuerJulia
    ? await mailAnJulia({ frage, antwort, name, email, seite, angemeldet })
    : false;
  return res.status(200).json({ ok: true, text: antwort, weitergeleitet: zugestellt });
}
