/* themen-zuordnung.js – ordnet die Themen der bisherigen Club-Stunden dem
 * gemeinsamen Themenkatalog (themen-katalog.js) zu.
 *
 * Wozu: Seit dem 29.06.2026 hat jede Stunde in der Tabelle "classes" ein
 * Thema als Text (Spalte topic, sonst title). Damit die App für jeden Schüler
 * aus seinen bisherigen Stunden passende Übungen empfehlen kann, braucht jedes
 * dieser Themen eine feste Zuordnung.
 *
 * Schlüssel = der Thementext genau so, wie er in der Datenbank steht.
 * Werte:
 *   f  Fokus (sprechen | grammatik | rollenspiel | wortschatz | quiz)
 *   b  Lebensbereich-id   g  Grammatik-id (oder Liste)   s  Sprach-Thema-id
 *   offen: true  → Thema der Stunde ist nicht bekannt (die Gruppe hat frei gewählt)
 *   zaehlt: false → keine echte Unterrichtsstunde (Test, Ausfall)
 * An den Daten in der Datenbank ändert diese Datei nichts.
 *
 * Neue Stunden ab der Fokus-App speichern ihr Thema direkt mit der
 * Katalog-Kennung. Diese Liste ist für die alten Stunden und für Stunden,
 * die weiterhin mit einem Thementext angelegt werden.
 */
(function (root) {
  'use strict';

  var Z = {
    'Aberglaube & Rituale': { f: 'sprechen', b: 'gesellschaft' },
    'Adjektivdeklination': { f: 'grammatik', g: 'adjdekl' },
    'Aufschieberitis': { f: 'sprechen', b: 'persoenlichkeit' },
    'Ausreden & Notlügen': { f: 'sprechen', b: 'persoenlichkeit', s: 'gespraech' },
    'Behördenbrief verstehen': { f: 'sprechen', b: 'behoerden' },
    'Beim Arzt': { f: 'sprechen', b: 'gesundheit' },
    'Beim Arzt · Teil 1: Wo tut es weh? Körper und Beschwerden': { f: 'sprechen', b: 'gesundheit' },
    'Beim Arzt · Teil 2: Rezept, Apotheke, Krankschreibung': { f: 'sprechen', b: 'gesundheit' },
    'Beim Bäcker und im Supermarkt · Teil 2: Etwas ist alle — nachfragen': { f: 'sprechen', b: 'essen' },
    'Beim Zahnarzt': { f: 'sprechen', b: 'gesundheit' },
    'Beruf & Lernen Teil 1': { f: 'sprechen', b: 'arbeit' },
    'Beruf & Lernen Teil 2': { f: 'sprechen', b: 'arbeit' },
    'Besuch und Einladung': { f: 'sprechen', b: 'freundschaft' },
    'Bewerbung & Vorstellungsgespräch': { f: 'sprechen', b: 'bewerbung' },
    'Beziehungen knüpfen Teil 1': { f: 'sprechen', b: 'freundschaft' },
    'Beziehungen pflegen Teil 2': { f: 'sprechen', b: 'freundschaft' },
    'Bildung & Chancen': { f: 'sprechen', b: 'ausbildung' },
    'Das Gesundheitssystem': { f: 'sprechen', b: 'gesundheit' },
    'Dating & Kennenlernen': { f: 'sprechen', b: 'familie' },
    'Debattier-Arena: 6 aktuelle Streitthemen': { f: 'sprechen', b: 'gesellschaft' },
    'Die Vorsilben an-, ab-, auf-, aus-, ein- · Teil 1: anrufen, abholen, aufmachen, einkaufen': { f: 'wortschatz', s: 'vorsilben' },
    'Die Vorsilben an-, ab-, auf-, aus-, ein- · Teil 2: dieselbe Silbe, neue Bedeutung': { f: 'wortschatz', s: 'vorsilben' },
    'Digital Detox & Handysucht': { f: 'sprechen', b: 'medien' },
    'doch, mal, ja, eben, halt — die kleinen Wörter': { f: 'sprechen', g: 'modalpartikeln', s: 'umgangssprache' },
    'Ehrenamt & Engagement': { f: 'sprechen', b: 'gesellschaft' },
    'Ehrlich sein oder höflich sein? · Teil 1: die ehrliche Antwort freundlich verpacken': { f: 'sprechen', b: 'persoenlichkeit', s: 'gespraech' },
    'Einen Termin machen · Teil 1: anrufen, Zeit vereinbaren, bestätigen': { f: 'sprechen', b: 'alltag', s: 'gespraech' },
    'Einkaufen, kochen, essen · Teil 1: Zutaten, Mengen, ein Rezept erklären': { f: 'sprechen', b: 'essen' },
    'Einkaufen, kochen, essen · Teil 2: im Restaurant bestellen und reklamieren': { f: 'sprechen', b: 'essen' },
    'Erweiterte Konnektoren': { f: 'grammatik', g: 'konnektoren' },
    'Fake News erkennen': { f: 'sprechen', b: 'medien' },
    'Familie & Beziehungen Teil 1': { f: 'sprechen', b: 'familie' },
    'Familie & Beziehungen Teil 2': { f: 'sprechen', b: 'familie' },
    'Feste & Bräuche': { f: 'sprechen', b: 'gesellschaft' },
    'Feste & Freizeit Teil 1': { f: 'sprechen', b: 'freizeit' },
    'Feste & Freizeit Teil 2': { f: 'sprechen', b: 'freizeit' },
    'Freie Sprechstunde · 1. Weihnachtstag': { f: 'sprechen', b: 'gesellschaft' },
    'Freie Sprechstunde · 2. Weihnachtstag': { f: 'sprechen', b: 'gesellschaft' },
    'Freie Sprechstunde · Advent, Weihnachten & Feste': { f: 'sprechen', b: 'gesellschaft' },
    'Freie Sprechstunde · Arbeit & Beruf': { f: 'sprechen', b: 'arbeit' },
    'Freie Sprechstunde · Aufschieberitis': { f: 'sprechen', b: 'persoenlichkeit' },
    'Freie Sprechstunde · Charakter & Gefühle': { f: 'sprechen', b: 'persoenlichkeit' },
    'Freie Sprechstunde · Erinnerungen & Kindheit': { f: 'sprechen', b: 'persoenlichkeit' },
    'Freie Sprechstunde · Essen & Genuss': { f: 'sprechen', b: 'essen' },
    'Freie Sprechstunde · Familie & Freunde': { f: 'sprechen', b: 'familie' },
    'Freie Sprechstunde · Gesundheit & Wohlbefinden': { f: 'sprechen', b: 'gesundheit' },
    'Freie Sprechstunde · Heiligabend': { f: 'sprechen', b: 'gesellschaft' },
    'Freie Sprechstunde · Jahresrückblick & gute Vorsätze': { f: 'sprechen', b: 'persoenlichkeit' },
    'Freie Sprechstunde · Medien & Nachrichten': { f: 'sprechen', b: 'medien' },
    'Freie Sprechstunde · Mein Tag': { f: 'sprechen', b: 'alltag' },
    'Freie Sprechstunde · Musik & Kultur': { f: 'sprechen', b: 'freizeit' },
    'Freie Sprechstunde · Reisen & Urlaub': { f: 'sprechen', b: 'reisen' },
    'Freie Sprechstunde · Silvester': { f: 'sprechen', b: 'gesellschaft' },
    'Freie Sprechstunde · Sport & Freizeit': { f: 'sprechen', b: 'freizeit' },
    'Freie Sprechstunde · Sprechkarten': { f: 'sprechen', offen: true },
    'Freie Sprechstunde · Technik & KI': { f: 'sprechen', b: 'medien' },
    'Freie Sprechstunde · Wetter & Jahreszeiten': { f: 'sprechen', b: 'alltag' },
    'Freie Sprechstunde · Zukunft & Träume': { f: 'sprechen', b: 'persoenlichkeit' },
    'Freundschaft Teil 1': { f: 'sprechen', b: 'freundschaft' },
    'Führerschein – Theorie & Prüfung': { f: 'sprechen', b: 'alltag' },
    'Führerschein Teil 2 – Praxis & Verkehr': { f: 'sprechen', b: 'alltag' },
    'GEHEN, KOMMEN, FAHREN · Teil 1: wohin und womit': { f: 'wortschatz', s: 'wortfamilien' },
    "GEHEN, KOMMEN, FAHREN · Teil 2: Das geht nicht. Wie geht's? Es kommt darauf an": { f: 'wortschatz', s: 'wortfamilien' },
    'Geld, Konsum & Sparen Teil 1': { f: 'sprechen', b: 'geld' },
    'Geld, Konsum & Sparen Teil 2': { f: 'sprechen', b: 'geld' },
    'Gesundheit & Ernährung Teil 1': { f: 'sprechen', b: 'gesundheit' },
    'Gesundheit & Ernährung Teil 2': { f: 'sprechen', b: 'gesundheit' },
    'Grammatik': { f: 'grammatik', offen: true },
    'Grammatikfokus · Adjektivendungen (Dinge beschreiben)': { f: 'grammatik', g: 'adjdekl' },
    'Grammatikfokus · da- & wo-Komposita': { f: 'grammatik', g: 'dawo' },
    'Grammatikfokus · Gegensatz & Einräumung (obwohl, trotzdem …)': { f: 'grammatik', g: 'konnektoren' },
    'Grammatikfokus · Komparativ & Superlativ': { f: 'grammatik', g: 'komparativ' },
    'Grammatikfokus · Konjunktiv II (höflich & Wünsche)': { f: 'grammatik', g: 'konjunktiv2' },
    'Grammatikfokus · Konnektoren': { f: 'grammatik', g: 'konnektoren' },
    'Grammatikfokus · Modalpartikeln (doch, mal, eben …)': { f: 'grammatik', g: 'modalpartikeln' },
    'Grammatikfokus · n-Deklination': { f: 'grammatik', g: 'ndeklination' },
    'Grammatikfokus · Passiv': { f: 'grammatik', g: 'passiv' },
    'Grammatikfokus · Perfekt & Präteritum (Vergangenheit)': { f: 'grammatik', g: ['perfekt', 'praeteritum'] },
    'Grammatikfokus · Reflexive Verben': { f: 'grammatik', g: 'reflexiv' },
    'Grammatikfokus · Relativsätze': { f: 'grammatik', g: 'relativsaetze' },
    'Grammatikfokus · Verben mit fester Präposition': { f: 'grammatik', g: 'praepverben' },
    'Großes Quiz & Spiele-Mix': { f: 'quiz' },
    'Großes Quiz & Spiele-Mix · Wimmelbild Freibad': { f: 'quiz', b: 'freizeit' },
    'Großes Quiz & Spiele-Mix · Wimmelbild Stadtpark': { f: 'quiz', b: 'freizeit' },
    'Handy am Esstisch — geht das? · Teil 1: Wortschatz und Regeln': { f: 'sprechen', b: 'medien' },
    'Handy am Esstisch — geht das? · Teil 2: die Debatte': { f: 'sprechen', b: 'medien' },
    'Hobbys & Freizeit': { f: 'sprechen', b: 'freizeit' },
    'Homeoffice oder Büro?': { f: 'sprechen', b: 'balance' },
    'Im Hotel': { f: 'sprechen', b: 'reisen' },
    'In der Küche · Sprachspielclub: Suchbild, Wo?/Wohin? (Wechselpräpositionen) & Tabu': { f: 'wortschatz', b: 'wohnen', g: 'wechselprep' },
    'In der Stadt · Sprachspielclub: Suchbild, Wo?/Wohin? (Wechselpräpositionen) & Tabu': { f: 'wortschatz', b: 'wohnen', g: 'wechselprep' },
    'In der Wohnung · Teil 1: Zimmer, Möbel und wo etwas steht': { f: 'sprechen', b: 'wohnen' },
    'In der Wohnung · Teil 2: Etwas ist kaputt — melden und beschreiben': { f: 'sprechen', b: 'wohnen' },
    'Integration & Heimat Teil 1': { f: 'sprechen', b: 'gesellschaft' },
    'Integration & Heimat Teil 2': { f: 'sprechen', b: 'gesellschaft' },
    'Job wechseln — wann ist der Moment? · Teil 1: kündigen, bleiben, sich neu bewerben': { f: 'sprechen', b: 'bewerbung' },
    'Job wechseln — wann ist der Moment? · Teil 2: die Debatte': { f: 'sprechen', b: 'bewerbung' },
    'KI & Arbeitswelt Teil 1': { f: 'sprechen', b: 'arbeit' },
    'KI & Arbeitswelt Teil 2': { f: 'sprechen', b: 'arbeit' },
    'Kritik üben, ohne zu verletzen': { f: 'sprechen', b: 'persoenlichkeit', s: 'gespraech' },
    'Kultur & Traditionen Teil 1': { f: 'sprechen', b: 'gesellschaft' },
    'Künstliche Intelligenz im Alltag': { f: 'sprechen', b: 'medien' },
    'Leben in 50 Jahren': { f: 'sprechen', b: 'gesellschaft' },
    'Leben in Deutschland & Einbürgerung': { f: 'sprechen', b: 'gesellschaft' },
    'LEGEN, STELLEN, SETZEN, HÄNGEN · Teil 1: Etwas hinlegen — und wo es dann liegt': { f: 'grammatik', g: 'wechselprep' },
    'LEGEN, STELLEN, SETZEN, HÄNGEN · Teil 2: Wohin oder wo? Der Fall entscheidet': { f: 'grammatik', g: 'wechselprep' },
    'MACHEN — das Wort, das alles kann · Teil 1': { f: 'wortschatz', s: 'wortfamilien' },
    'Macht Geld glücklich?': { f: 'sprechen', b: 'geld' },
    'Mängel melden beim Vermieter': { f: 'sprechen', b: 'wohnen' },
    'Medien & Digitalisierung Teil 1': { f: 'sprechen', b: 'medien' },
    'Medien & Digitalisierung Teil 2': { f: 'sprechen', b: 'medien' },
    'Mein Tag': { f: 'sprechen', b: 'alltag' },
    'Meine Familie': { f: 'sprechen', b: 'familie' },
    'Migration & Integration Teil 2': { f: 'sprechen', b: 'gesellschaft' },
    'Minimalismus': { f: 'sprechen', b: 'geld' },
    'Moralische Dilemmata – was würdest du tun?': { f: 'sprechen', b: 'persoenlichkeit' },
    'Muss man Geburtstage feiern? · Teil 1: feiern, einladen, sich drücken': { f: 'sprechen', b: 'freizeit' },
    'Muss man Geburtstage feiern? · Teil 2: die Debatte': { f: 'sprechen', b: 'freizeit' },
    'Nachfragen · Teil 2: zusammenfassen und absichern': { f: 'sprechen', s: 'gespraech' },
    'Nachfragen, bis es klar ist · Teil 1: Rückfragen ohne Gesichtsverlust': { f: 'sprechen', s: 'gespraech' },
    'Nein sagen, ohne unhöflich zu sein': { f: 'sprechen', s: 'gespraech' },
    'Neujahr — kein Unterricht': { f: 'sprechen', zaehlt: false },
    'Nomen-Verb-Verbindungen': { f: 'grammatik', g: 'nvv' },
    'Nominalisierung': { f: 'grammatik', g: 'nominalisierung' },
    'Nostalgie – früher war alles besser?': { f: 'sprechen', b: 'persoenlichkeit' },
    'Passiv': { f: 'grammatik', g: 'passiv' },
    'Peinliche Momente & Fettnäpfchen': { f: 'sprechen', b: 'persoenlichkeit' },
    'Plaudertisch': { f: 'sprechen', offen: true },
    'Pünktlichkeit — Marotte oder Respekt?': { f: 'sprechen', b: 'persoenlichkeit' },
    'Reisen & Urlaub Teil 1': { f: 'sprechen', b: 'reisen' },
    'Reisen & Urlaub Teil 2': { f: 'sprechen', b: 'reisen' },
    'Reiseplanung & Urlaub': { f: 'sprechen', b: 'reisen' },
    'Reklamation & Umtausch': { f: 'sprechen', b: 'geld' },
    'Relativsätze mit Präpositionen': { f: 'grammatik', g: 'relativsaetze' },
    'Sich beschweren und gewinnen': { f: 'sprechen', b: 'geld', s: 'gespraech' },
    'Sich krankmelden & die AU': { f: 'sprechen', b: 'arbeit' },
    'Small Talk · Teil 2: weiterführen und höflich beenden': { f: 'sprechen', b: 'freundschaft', s: 'gespraech' },
    'Small Talk, der nicht wehtut · Teil 1: Einstiegsfragen, sichere Themen': { f: 'sprechen', b: 'freundschaft', s: 'gespraech' },
    'Smalltalk & übers Wetter reden': { f: 'sprechen', b: 'freundschaft', s: 'gespraech' },
    'Spiele-Mix & großes Quiz': { f: 'quiz' },
    'Spiele-Mix & großes Quiz · Ab in den Park': { f: 'quiz', b: 'freizeit' },
    'Spiele-Mix & großes Quiz · Auf dem Flohmarkt': { f: 'quiz', b: 'geld' },
    'Spiele-Mix & großes Quiz · Auf dem Volksfest': { f: 'quiz', b: 'freizeit' },
    'Spiele-Mix & großes Quiz · Im Supermarkt': { f: 'quiz', b: 'essen' },
    'Spiele-Mix & großes Quiz · In der Arztpraxis': { f: 'quiz', b: 'gesundheit' },
    'Sport & gesund leben Teil 2': { f: 'sprechen', b: 'gesundheit' },
    'Sport & Lebensstil': { f: 'sprechen', b: 'freizeit' },
    'Sprachspielclub: Flughafen (Wimmelbild)': { f: 'quiz', b: 'reisen' },
    'Sprachspiele & freies Sprechen': { f: 'quiz', offen: true },
    'Sprachspiele & Wimmelbild': { f: 'quiz', offen: true },
    'Sprechclub': { f: 'sprechen', offen: true },
    'Streaming & Serien': { f: 'sprechen', b: 'medien' },
    'Tempolimit auf der Autobahn': { f: 'sprechen', b: 'umwelt' },
    'Termine · Teil 2: verschieben und absagen, ohne Ärger': { f: 'sprechen', b: 'alltag', s: 'gespraech' },
    'Test Live-Sync': { f: 'sprechen', zaehlt: false },
    'Umgangssprache Teil 1': { f: 'sprechen', s: 'umgangssprache' },
    'Umgangssprache Teil 2': { f: 'sprechen', s: 'umgangssprache' },
    'Vier-Tage-Woche — für alle? · Teil 1: Arbeitszeit, Lohn, Produktivität': { f: 'sprechen', b: 'balance' },
    'Vier-Tage-Woche — für alle? · Teil 2: die Debatte': { f: 'sprechen', b: 'balance' },
    'Was macht glücklich? Teil 1': { f: 'sprechen', b: 'persoenlichkeit' },
    'Was macht glücklich? Teil 2': { f: 'sprechen', b: 'persoenlichkeit' },
    'Wetter & Kleidung': { f: 'sprechen', b: 'alltag' },
    'Wie gesund muss Essen sein? · Teil 1: Fleisch, Zucker, Fertigessen — ein Etikett lesen': { f: 'sprechen', b: 'essen' },
    'Wie gesund muss Essen sein? · Teil 2: Debatte — Zuckersteuer und Schulessen': { f: 'sprechen', b: 'essen' },
    'Wie viel Ordnung braucht der Mensch?': { f: 'sprechen', b: 'persoenlichkeit' },
    'Wohnen & Nachbarn Teil 1': { f: 'sprechen', b: 'wohnen' },
    'Wohnen & Nachbarn Teil 2': { f: 'sprechen', b: 'wohnen' },
    'Wohnformen & WG-Leben': { f: 'sprechen', b: 'wohnen' },
    'Wohnungsnot & Mieten': { f: 'sprechen', b: 'wohnen' },
    'Wohnungssuche & Mietwahnsinn': { f: 'sprechen', b: 'wohnen' },
    'Wortschatzboost': { f: 'wortschatz', offen: true },
    'Wortschatzboost: Charaktereigenschaften': { f: 'wortschatz', b: 'persoenlichkeit' },
    'Wortschatzboost: Idiome & Redewendungen': { f: 'wortschatz', s: 'umgangssprache' },
    'Wortschatzboost: Wortfamilie „führen“': { f: 'wortschatz', s: 'wortfamilien' },
    'Wortschatzboost: Wortfamilie „gehen“': { f: 'wortschatz', s: 'wortfamilien' },
    'Wortschatzboost: Wortfamilie „kommen“': { f: 'wortschatz', s: 'wortfamilien' },
    'Wortschatzboost: Wortfamilie „setzen“': { f: 'wortschatz', s: 'wortfamilien' },
    'Wortschatzboost: Wortfamilie „ziehen“': { f: 'wortschatz', s: 'wortfamilien' },
    'Wortschatzfokus · Auf dem Weihnachtsmarkt (Tabu & großes Quiz)': { f: 'wortschatz', b: 'gesellschaft' },
    'Wortschatzfokus · Das Badezimmer (Tabu & großes Quiz)': { f: 'wortschatz', b: 'wohnen' },
    'Wortschatzfokus · Das Büro (Tabu & großes Quiz)': { f: 'wortschatz', b: 'arbeit' },
    'Wortschatzfokus · Das Wohnzimmer (Tabu & großes Quiz)': { f: 'wortschatz', b: 'wohnen' },
    'Wortschatzfokus · Die Wortfamilie führen': { f: 'wortschatz', s: 'wortfamilien' },
    'Wortschatzfokus · Falsche Freunde': { f: 'wortschatz', s: 'aehnlichewoerter' },
    'Wortschatzfokus · Im Fitnessstudio (Tabu & großes Quiz)': { f: 'wortschatz', b: 'freizeit' },
    'Wortschatzfokus · Im Fitnessstudio: Wortschatz, Wechselpräpositionen, Tabu & großes Quiz': { f: 'wortschatz', b: 'freizeit', g: 'wechselprep' },
    'Wortschatzfokus · Im Hotel: Wortschatz, Wechselpräpositionen, Tabu & großes Quiz': { f: 'wortschatz', b: 'reisen', g: 'wechselprep' },
    'Wortschatzfokus · Im Kaufhaus (Tabu & großes Quiz)': { f: 'wortschatz', b: 'geld' },
    'Wortschatzfokus · Im Restaurant: Wortschatz, Wechselpräpositionen, Tabu & großes Quiz': { f: 'wortschatz', b: 'essen', g: 'wechselprep' },
    'Wortschatzfokus · In der Schule (Tabu & großes Quiz)': { f: 'wortschatz', b: 'ausbildung' },
    'Wortschatzfokus · In der Stadt: Wortschatz, Wechselpräpositionen, Tabu & großes Quiz': { f: 'wortschatz', b: 'wohnen', g: 'wechselprep' },
    'Wortschatzfokus · Nomen-Verb-Verbindungen': { f: 'wortschatz', g: 'nvv' },
    'Wortschatzfokus · Redewendungen & Umgangssprache': { f: 'wortschatz', s: 'umgangssprache' },
    'Wortschatzfokus · Starke Adjektive': { f: 'wortschatz', s: 'starkeadj' },
    'Wortschatzfokus · Verben mit an-': { f: 'wortschatz', s: 'vorsilben' },
    'Wortschatzfokus · Verben mit auf-': { f: 'wortschatz', s: 'vorsilben' },
    'Wortschatzfokus · Verben mit aus-': { f: 'wortschatz', s: 'vorsilben' },
    'Wortschatzfokus · Verben mit ein-': { f: 'wortschatz', s: 'vorsilben' },
    'Wortschatzfokus · Verben mit vor-': { f: 'wortschatz', s: 'vorsilben' },
    'Wortschatzfokus · Wörter, die sich ähneln': { f: 'wortschatz', s: 'aehnlichewoerter' }
  };

  // Thementext einer Stunde → Zuordnung oder null (dann ist das Thema neu
  // und gehört hier eingetragen). Nimmt wie die Datenbank-Auswertung das
  // Feld topic und, wenn es leer ist, title.
  function zuordnen(topic, title) {
    var t = (topic && String(topic).trim()) || (title && String(title).trim()) || '';
    return Z[t] || null;
  }

  // Selbstprüfung gegen den Katalog. Leeres Array = alles in Ordnung.
  function pruefen(katalog) {
    var fehler = [];
    Object.keys(Z).forEach(function (k) {
      var z = Z[k];
      if (!katalog.fokus(z.f)) fehler.push(k + ': unbekannter Fokus ' + z.f);
      if (z.b && !katalog.bereich(z.b)) fehler.push(k + ': unbekannter Bereich ' + z.b);
      [].concat(z.g || []).forEach(function (g) {
        if (!katalog.grammatik(g)) fehler.push(k + ': unbekanntes Grammatik-Thema ' + g);
      });
      if (z.s && !katalog.sprache(z.s)) fehler.push(k + ': unbekanntes Sprach-Thema ' + z.s);
      var irgendwas = z.b || z.g || z.s || z.offen || z.zaehlt === false || z.f === 'quiz';
      if (!irgendwas) fehler.push(k + ': hängt an nichts');
    });
    return fehler;
  }

  var api = { ZUORDNUNG: Z, zuordnen: zuordnen, pruefen: pruefen };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DOW_ZUORDNUNG = api;
})(typeof window !== 'undefined' ? window : this);
