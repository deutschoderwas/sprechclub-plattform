/* ============================================================
   lehrplan-teile.js — jede Lektion hat vier feste Teile

   Julias Ordnung: Lernen ist EIN Weg wie in einer App. Jede
   Lektion ist innen immer gleich gebaut:

       1 Wörter  ·  2 Hören  ·  3 Grammatik  ·  4 Gespräch

   30 Lektionen haben eine eigene Lektionsseite (lektion.html), die
   alle vier Teile schon enthält — die füllt mein-weg.js selbst.
   Für die übrigen 28 steht hier, welches vorhandene Material den
   fehlenden Teil übernimmt. Ausgesucht nach Thema UND Niveau; nichts
   davon ist neu erfunden, alles liegt schon auf der Plattform.

   Außerdem das Bild für die Lektionskarte, wo die Lektion keins hat.

   Arten:
     woerter  → Übungsreihe Wortschatz  (lernUeben('wortschatz', id))
     hoeren   → Übungsreihe Hören       (lernUeben('hoeren', id))
     grammatik→ Grammatikseite           (d = Dateiname)
     sprechen → Gespräch mit Amanda      (lernDialog(id))
     seite    → die Lektionsseite dieser Lektion (ihre Dialoge zum Hören)
   ============================================================ */
window.LEHRPLAN_TEILE = {

  /* ---------------- A1 ---------------- */
  'A1/7':  { bild: 'a1-l1',
             woerter:  { art: 'woerter',  id: 'essen',       t: 'Essen und Trinken — mit Artikel' },
             hoeren:   { art: 'hoeren',   id: 'essen',       t: 'Hören: im Café und beim Essen' },
             sprechen: { art: 'sprechen', id: 'supermarkt',  t: 'Im Supermarkt fragen' } },
  'A1/8':  { bild: 'th-wohnung',
             hoeren:   { art: 'hoeren',   id: 'wohnen',      t: 'Hören: Wohnen' } },
  'A1/9':  { bild: 'th-gespraech',
             hoeren:   { art: 'hoeren',   id: 'gefuehle',    t: 'Hören: Gefühle' } },
  'A1/10': { bild: 'th-weg',
             woerter:  { art: 'woerter',  id: 'stadt',       t: 'In der Stadt' },
             hoeren:   { art: 'hoeren',   id: 'stadt',       t: 'Hören: unterwegs in der Stadt' },
             grammatik:{ art: 'grammatik', d: 'grammatik-a1-fragen-a1.html', t: 'Fragen stellen: mit W-Wort und ohne', lvl: 'A1' } },

  /* ---------------- A2 ---------------- */
  'A2/7':  { bild: 'th-amt',
             hoeren:   { art: 'seite',    t: 'Hören: die Dialoge der Lektion' } },
  'A2/8':  { bild: 'sz-restaurant',
             hoeren:   { art: 'hoeren',   id: 'einkaufen',   t: 'Hören: Einkaufen' },
             grammatik:{ art: 'grammatik', d: 'grammatik-a2-hoeflich-a2.html', t: 'hätte, könnte, würde: höflich fragen', lvl: 'A2' } },
  'A2/9':  { bild: 'th-digital',
             hoeren:   { art: 'hoeren',   id: 'stadt',       t: 'Hören: Post, Bank und Wege' },
             grammatik:{ art: 'grammatik', d: 'grammatik-modalverben-a2.html', t: 'Modalverben: können, müssen, dürfen, wollen', lvl: 'A2' } },
  'A2/10': { bild: 'th-arbeit',
             hoeren:   { art: 'hoeren',   id: 'arbeit',      t: 'Hören: bei der Arbeit' } },
  'A2/11': { bild: 'a1-feste',
             hoeren:   { art: 'hoeren',   id: 'persoenlichkeit', t: 'Hören: Menschen und Nachbarn' },
             grammatik:{ art: 'grammatik', d: 'grammatik-perfekt-a2.html', t: 'Das Perfekt: haben oder sein?', lvl: 'A2' } },
  'A2/12': { bild: 'th-gespraech',
             woerter:  { art: 'woerter',  id: 'gefuehle',    t: 'Gefühle ausdrücken' },
             hoeren:   { art: 'hoeren',   id: 'gefuehle',    t: 'Hören: Gefühle' } },

  /* ---------------- B1 ---------------- */
  'B1/7':  { bild: 'sz-wohnung',
             woerter:  { art: 'woerter',  id: 'wohnen',      t: 'Wohnen und Umziehen' },
             hoeren:   { art: 'hoeren',   id: 'wohnen',      t: 'Hören: Wohnen' } },
  'B1/8':  { bild: 'sz-reklamation',
             hoeren:   { art: 'hoeren',   id: 'einkaufen',   t: 'Hören: Einkaufen und Reklamieren' } },
  'B1/9':  { bild: 'th-reise',
             grammatik:{ art: 'grammatik', d: 'grammatik-wechselpraepositionen-b1.html', t: 'Wechselpräpositionen: wo? und wohin?', lvl: 'B1' } },
  'B1/10': { bild: 'th-gespraech',
             grammatik:{ art: 'grammatik', d: 'grammatik-nebensaetze-b1.html', t: 'Nebensätze: weil, dass, wenn', lvl: 'B1' } },
  'B1/11': { bild: 'th-essen',
             grammatik:{ art: 'grammatik', d: 'grammatik-passiv-praesens-b1.html', t: 'Passiv im Präsens — wie im Rezept', lvl: 'B1' } },
  'B1/12': { bild: 'th-sprache',
             grammatik:{ art: 'grammatik', d: 'grammatik-modalpartikeln-b1.html', t: 'doch, mal, ja, eben', lvl: 'B1' } },
  'B1/13': { bild: 'th-idiom',
             grammatik:{ art: 'grammatik', d: 'grammatik-konjunktiv2-b1.html', t: 'Konjunktiv II: Wünsche und höfliche Bitten', lvl: 'B1' },
             sprechen: { art: 'sprechen', id: 'party',       t: 'Small Talk auf einer Feier' } },
  'B1/14': { bild: 'th-debatte',
             woerter:  { art: 'woerter',  id: 'redemittel',  t: 'Redemittel zum Diskutieren' },
             hoeren:   { art: 'hoeren',   id: 'medien',      t: 'Hören: Medien und Meinungen' },
             sprechen: { art: 'sprechen', id: 'meeting',     t: 'Im Meeting die Meinung sagen' } },

  /* ---------------- B2 ---------------- */
  'B2/7':  { bild: 'th-ironie',
             grammatik:{ art: 'grammatik', d: 'grammatik-verben-mit-praeposition-b2.html', t: 'Verben mit fester Präposition', lvl: 'B2' },
             sprechen: { art: 'sprechen', id: 'zu-viel-verlangt', t: 'Freundlich Grenzen setzen' } },
  'B2/8':  { bild: 'th-migration',
             hoeren:   { art: 'hoeren',   id: 'gefuehle',    t: 'Hören: Gefühle und Heimat' },
             grammatik:{ art: 'grammatik', d: 'grammatik-konjunktiv2-vergangenheit-b2.html', t: 'Hätte, wäre — was nicht passiert ist', lvl: 'B2' } },
  'B2/9':  { bild: 'th-arbeit',
             woerter:  { art: 'woerter',  id: 'ki-arbeitswelt', t: 'KI und Arbeitswelt' },
             hoeren:   { art: 'hoeren',   id: 'arbeit',      t: 'Hören: bei der Arbeit' } },
  'B2/10': { bild: 'th-wirtschaft',
             woerter:  { art: 'woerter',  id: 'c1-vertrag',  t: 'Verträge und Versicherungen' },
             hoeren:   { art: 'hoeren',   id: 'einkaufen',   t: 'Hören: Geld und Verträge' },
             grammatik:{ art: 'grammatik', d: 'grammatik-nominalstil-b2.html', t: 'wegen des Regens, weil es regnet', lvl: 'B2' } },
  'B2/11': { bild: 'th-debatte',
             woerter:  { art: 'woerter',  id: 'redemittel',  t: 'Redemittel zum Diskutieren' },
             hoeren:   { art: 'hoeren',   id: 'medien',      t: 'Hören: Medien und Gesellschaft' },
             grammatik:{ art: 'grammatik', d: 'grammatik-gegensatz-konnektoren-b2.html', t: 'Gegensätze: obwohl, trotzdem, dennoch', lvl: 'B2' },
             sprechen: { art: 'sprechen', id: 'feedback',    t: 'Kritik freundlich äußern' } },
  'B2/12': { bild: 'th-fachtext',
             woerter:  { art: 'woerter',  id: 'c1-buero',    t: 'Im Büro schreiben' },
             hoeren:   { art: 'hoeren',   id: 'arbeit',      t: 'Hören: im Büro' },
             sprechen: { art: 'sprechen', id: 'mail-missverstaendnis', t: 'Missverständnis in der E-Mail' } },

  /* ---------------- C1 ---------------- */
  'C1/7':  { bild: 'th-amt',
             hoeren:   { art: 'seite',    t: 'Hören: die Dialoge der Lektion' },
             grammatik:{ art: 'grammatik', d: 'grammatik-nominalstil-b2.html', t: 'Amtsdeutsch verstehen: der Nominalstil', lvl: 'B2–C1' } },
  'C1/8':  { bild: 'th-arzt',
             hoeren:   { art: 'seite',    t: 'Hören: die Dialoge der Lektion' },
             grammatik:{ art: 'grammatik', d: 'grammatik-indirekte-rede-b2.html', t: 'Indirekte Rede: was die Ärztin gesagt hat', lvl: 'B2–C1' } },
  'C1/9':  { bild: 'th-wirtschaft',
             hoeren:   { art: 'seite',    t: 'Hören: die Dialoge der Lektion' },
             grammatik:{ art: 'grammatik', d: 'grammatik-genitiv-schriftdeutsch-b2.html', t: 'Der Genitiv im Kleingedruckten', lvl: 'B2–C1' } },
  'C1/10': { bild: 'th-bildung',
             hoeren:   { art: 'seite',    t: 'Hören: die Dialoge der Lektion' },
             grammatik:{ art: 'grammatik', d: 'grammatik-partizipattribut-b2.html', t: 'das rennende Kind: Partizipien als Attribut', lvl: 'B2–C1' } }
};
