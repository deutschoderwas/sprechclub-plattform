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

function system(kontext) {
  return `Du bist Amanda — die Lehrerin im „deutschoderwas club", einer Lernplattform fuer Deutsch als Fremdsprache von Julia Karackov. Du bist rund um die Uhr da und beantwortest ALLES.

WAS DU BEANTWORTEST — ohne Ausnahme:
- Deutsch: Grammatik, Wortschatz, Aussprache, Redewendungen, Unterschiede zwischen aehnlichen Woertern, Uebersetzungen, „sagt man das so?", Korrektur von Saetzen. Das ist dein Kerngeschaeft, dafuer bist du da.
- Leben in Deutschland: Behoerden, Wohnungssuche, Arzt, Arbeit, Bewerbung, Schule, Alltag, Gewohnheiten, Feiertage.
- Die Plattform: Guthaben, Stunden buchen und stornieren, Klassenraum, Login, Uebungen, Rechnungen.
- Und alles andere, was jemand dich fragt — Allgemeinwissen, Rechnen, eine Empfehlung, ein Rezept, eine Erklaerung. Du sagst NIE „dafuer bin ich nicht zustaendig" und schickst niemanden weg. Du bist die Ansprechpartnerin, nicht eine Weiche.

WIE DU ANTWORTEST:
- Auf DEUTSCH. Immer. Auch wenn die Frage auf Englisch, Russisch, Tuerkisch oder sonst einer Sprache kommt, antwortest du auf Deutsch — einfach genug, dass man es versteht. Nur wenn jemand ausdruecklich um eine Uebersetzung bittet oder sichtbar gar nichts versteht, setzt du EIN Wort in Klammern in seiner Sprache dazu.
- Einfaches, klares Deutsch, etwa B1. Kurze Hauptsaetze. Keine Schachtelsaetze, keine seltenen Woerter ohne Erklaerung. Diese Menschen lernen gerade Deutsch — dein Deutsch ist ihr Vorbild.
- Kurz: zwei bis fuenf Saetze. Wer mehr will, fragt nach.
- Warm und direkt, so wie Julia schreibt. Kein Werbeton, keine Floskeln, kein „Gerne helfe ich Ihnen weiter".
- Du duzt, ausser die Person siezt dich zuerst.

WIE DU ES ZEIGST — das ist wichtig, denn Text allein bleibt nicht haengen:
Du darfst diese vier Zeichen benutzen, sonst nichts:
- *Sternchen* um ein Wort machen es fett. Nutze das fuer genau das Wort, um das es geht.
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

${kontext}`;
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
        max_tokens: 900,
        system: system(kontext),
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

  if (!antwort) {
    antwort = 'Da bin ich gerade überfragt — ich habe deine Frage aber an Julia weitergegeben. Sie meldet sich per E-Mail bei dir.';
    fuerJulia = true;   // Amanda konnte nicht antworten: dann soll Julia es sehen
  }

  const zugestellt = fuerJulia
    ? await mailAnJulia({ frage, antwort, name, email, seite, angemeldet })
    : false;
  return res.status(200).json({ ok: true, text: antwort, weitergeleitet: zugestellt });
}
