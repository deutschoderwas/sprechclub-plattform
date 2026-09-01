/* ============================================================
   umlaute-nachziehen.js — ae, oe, ue und ss raus aus bau/

   In den Werkzeugen unter bau/ stand lange ae statt ä, oe statt ö,
   ue statt ü und ss statt ß — in Kommentaren, in Konsolenausgaben,
   in Bezeichnern und in den Feldnamen der JSON-Bausteine. Der
   Lernstoff selbst war immer sauber (das prüft bau/pruefe-umlaute.js
   und meldet null Stellen), aber ein Werkzeug für eine
   Deutschplattform sollte selbst richtig geschrieben sein.

   Zwei Dinge dürfen dabei nicht kaputtgehen:

   1. Dateinamen. uebungen.js, ueben.js, hoeren-b2-neu.js,
      pruefe-niveau.js heissen so, wie sie heissen — dort ist die
      Ersatzschreibung Teil des Namens. Sie werden vorher gegen
      Platzhalter getauscht und hinterher zurück.

   2. bau/pruefe-umlaute.js selbst. Dort stehen ae, oe und ue
      absichtlich: Es sind die Suchmuster.

   Danach müssen alle Generatoren dieselben Dateien erzeugen wie
   vorher — Byte für Byte. Genau das prüft der Aufrufer.

   Aufruf: node umlaute-nachziehen.js <projektwurzel>
   ============================================================ */
const fs = require('fs');
const path = require('path');

const wurzel = process.argv[2];
if (!wurzel) { console.error('Wo liegt das Projekt?'); process.exit(1); }

/* Diese Namen bleiben, wie sie sind. */
const NAMEN = [
  'uebungen.js', 'ueben.js', 'nachueben.js',
  'hoer-neu.js', 'hoeren-a1-neu.js', 'hoeren-b2-neu.js', 'hoeren-c1-neu.js',
  'hoeren-a1-quelle.json', 'hoeren-b2-quelle.json', 'hoeren-c1-quelle.json',
  'mach-hoeren-a1.js', 'mach-hoeren-b2.js', 'mach-hoeren-c1.js',
  'pruefe-niveau.js', 'pruefe-lektionen.js', 'pruefe-einstufung.js',
  'pruefe-umlaute.js', 'pruefe-zusammenfuehren.js',
  'themen-zusammenfuehren.js', 'lesen-schreiben-neu.js',
  'aussprache-neu.js', 'aussprache-plan.json', 'aussprache-quelle.json',
  'mach-aussprache.js', 'v-ueben', 'ubZur',
  'ton-ins-ueben.py', 'pruefe-situationen.py', 'situationen.py',
  'situationen-ziehen.py', 'mach-hoeren', 'hoeren-', 'pruefe-', 'ueben.js'
];

/* Ersetzt wird an Wortteilen, nicht an ganzen Wörtern — sonst
   bleiben Zusammensetzungen wie „woerterDazu" oder „Hoertexte"
   stehen. Reihenfolge zählt: Längeres zuerst. */
const TAUSCH = [
  ['Erklaerung', 'Erklärung'], ['erklaerung', 'erklärung'], ['erklaer', 'erklär'], ['Erklaer', 'Erklär'],
  ['Hoertext', 'Hörtext'], ['hoertext', 'hörtext'],
  ['Hoeren', 'Hören'], ['hoeren', 'hören'], ['Hoer', 'Hör'], ['hoer', 'hör'],
  ['Luecke', 'Lücke'], ['luecke', 'lücke'],
  ['Loesung', 'Lösung'], ['loesung', 'lösung'],
  ['Woerter', 'Wörter'], ['woerter', 'wörter'],
  ['Uebung', 'Übung'], ['uebung', 'übung'],
  ['Ueber', 'Über'], ['ueber', 'über'],
  ['Ueb', 'Üb'], ['ueben', 'üben'],
  ['Saetz', 'Sätz'], ['saetz', 'sätz'],
  ['Pruef', 'Prüf'], ['pruef', 'prüf'],
  ['Fuer', 'Für'], ['fuer', 'für'],
  ['Koenn', 'Könn'], ['koenn', 'könn'],
  ['Muess', 'Müss'], ['muess', 'müss'],
  ['Waer', 'Wär'], ['waer', 'wär'],
  ['Zurueck', 'Zurück'], ['zurueck', 'zurück'],
  ['Natuerlich', 'Natürlich'], ['natuerlich', 'natürlich'],
  ['Moeglich', 'Möglich'], ['moeglich', 'möglich'],
  ['Schoen', 'Schön'], ['schoen', 'schön'],
  ['Spaet', 'Spät'], ['spaet', 'spät'],
  ['Naechst', 'Nächst'], ['naechst', 'nächst'],
  ['Aehnlich', 'Ähnlich'], ['aehnlich', 'ähnlich'],
  ['Ueblich', 'Üblich'], ['ueblich', 'üblich'],
  ['Gewaehl', 'Gewähl'], ['gewaehl', 'gewähl'],
  ['Baecker', 'Bäcker'], ['baecker', 'bäcker'],
  ['Haeng', 'Häng'], ['haeng', 'häng'],
  ['Begruess', 'Begrüß'], ['begruess', 'begrüß'],
  ['Klaer', 'Klär'], ['klaer', 'klär'],
  ['Ergaenz', 'Ergänz'], ['ergaenz', 'ergänz'],
  ['Aender', 'Änder'], ['aender', 'änder'],
  ['Eintoenig', 'Eintönig'], ['eintoenig', 'eintönig'],
  ['Zaehl', 'Zähl'], ['zaehl', 'zähl'],
  ['Rueck', 'Rück'], ['rueck', 'rück'],
  ['Gehoer', 'Gehör'], ['gehoer', 'gehör'],
  ['Groess', 'Größ'], ['groess', 'größ'],
  ['Kaest', 'Käst'], ['kaest', 'käst'],
  ['Auffaellig', 'Auffällig'], ['auffaellig', 'auffällig'],
  ['Hoeher', 'Höher'], ['hoeher', 'höher'],
  ['Fuehl', 'Fühl'], ['fuehl', 'fühl'],
  ['Fuehr', 'Führ'], ['fuehr', 'führ'],
  ['Buero', 'Büro'], ['buero', 'büro'],
  ['Gruen', 'Grün'], ['gruen', 'grün'],
  ['Gruend', 'Gründ'], ['gruend', 'gründ'],
  ['Stueck', 'Stück'], ['stueck', 'stück'],
  ['Glueck', 'Glück'], ['glueck', 'glück'],
  ['Kueche', 'Küche'], ['kueche', 'küche'],
  ['Buech', 'Büch'], ['buech', 'büch'],
  ['Laeuft', 'Läuft'], ['laeuft', 'läuft'],
  ['Haeuf', 'Häuf'], ['haeuf', 'häuf'],
  ['Taegl', 'Tägl'], ['taegl', 'tägl'],
  ['Jaehr', 'Jähr'], ['jaehr', 'jähr'],
  ['Maenn', 'Männ'], ['maenn', 'männ'],
  ['Laend', 'Länd'], ['laend', 'länd'],
  ['Staend', 'Ständ'], ['staend', 'ständ'],
  ['Haett', 'Hätt'], ['haett', 'hätt'],
  ['Waehl', 'Wähl'], ['waehl', 'wähl'],
  ['Waehr', 'Währ'], ['waehr', 'währ'],
  ['Erzaehl', 'Erzähl'], ['erzaehl', 'erzähl'],
  ['Plaetz', 'Plätz'], ['plaetz', 'plätz'],
  ['Verhaeltnis', 'Verhältnis'], ['verhaeltnis', 'verhältnis'],
  ['Geschaeft', 'Geschäft'], ['geschaeft', 'geschäft'],
  ['Kuerz', 'Kürz'], ['kuerz', 'kürz'],
  ['Naeh', 'Näh'], ['naeh', 'näh'],
  ['Faell', 'Fäll'], ['faell', 'fäll'],
  ['Verlaeng', 'Verläng'], ['verlaeng', 'verläng'],
  ['Vermoegen', 'Vermögen'], ['vermoegen', 'vermögen'],
  ['Verfuegung', 'Verfügung'], ['verfuegung', 'verfügung'],
  ['Anfuehrung', 'Anführung'], ['anfuehrung', 'anführung'],
  ['Duenn', 'Dünn'], ['duenn', 'dünn'],
  ['Ueberfl', 'Überfl'], ['ausueben', 'ausüben'],
  ['Uebrig', 'Übrig'], ['uebrig', 'übrig'],
  ['Duerf', 'Dürf'], ['duerf', 'dürf'],
  ['Koerper', 'Körper'], ['koerper', 'körper'],
  ['Oeffn', 'Öffn'], ['oeffn', 'öffn'],
  ['Hoech', 'Höch'], ['hoech', 'höch'],
  ['Staerk', 'Stärk'], ['staerk', 'stärk'],
  ['Schwaech', 'Schwäch'], ['schwaech', 'schwäch'],
  ['Laeng', 'Läng'], ['laeng', 'läng'],
  ['Aeusser', 'Äußer'], ['aeusser', 'äußer'],
  ['Traeg', 'Träg'], ['traeg', 'träg'],
  ['Faehig', 'Fähig'], ['faehig', 'fähig'],
  ['Taetig', 'Tätig'], ['taetig', 'tätig'],
  ['Vollstaendig', 'Vollständig'], ['vollstaendig', 'vollständig'],
  /* ss zu ss nur dort, wo im Deutschen wirklich ein ss steht.
     Schluss, Fluss, Kuss, dass und Kasse bleiben unangetastet. */
];

/* Die ss-Regeln stehen bewusst getrennt und greifen nur an ganzen
   Woertern. Der Grund ist ein Fehler, den die Tabelle oben schon
   angerichtet hat: „spass" als Teilstring hat in „Zustandspassiv"
   zugeschlagen — daraus wurde „Zustandspaßiv", und das stand danach
   in einer Grammatikerklaerung auf einer Deutschlernplattform.
   Aufgefallen ist es erst beim Vergleich der erzeugten Dateien.

   Deshalb hier: Wortgrenze auf beiden Seiten, und Zusammensetzungen
   werden einzeln aufgefuehrt statt geraten. */
const SS_WORTE = [
  ['gross', 'groß'], ['grosse', 'große'], ['grossen', 'großen'],
  ['grosser', 'großer'], ['grosses', 'großes'], ['groesse', 'größe'],
  ['bloss', 'bloß'], ['spass', 'spaß'], ['ausserdem', 'außerdem'],
  ['ausserhalb', 'außerhalb'], ['suess', 'süß'], ['heiss', 'heiß'],
  ['heisst', 'heißt'], ['massnahme', 'maßnahme'], ['massnahmen', 'maßnahmen'],
  ['strasse', 'straße'], ['strassen', 'straßen'], ['fuss', 'fuß'],
  ['gruss', 'gruß'], ['weiss', 'weiß'], ['schliesslich', 'schließlich'],
  ['ausschliesslich', 'ausschließlich']
];

function grossKlein(wort, vorlage) {
  return vorlage[0] === vorlage[0].toUpperCase()
    ? wort[0].toUpperCase() + wort.slice(1) : wort;
}

function dateienUnter(ordner) {
  const raus = [];
  fs.readdirSync(ordner, { withFileTypes: true }).forEach(e => {
    if (e.name === 'node_modules' || e.name.startsWith('.')) return;
    const voll = path.join(ordner, e.name);
    if (e.isDirectory()) raus.push(...dateienUnter(voll));
    else if (/\.(js|html|json|py|css)$/.test(e.name)) raus.push(voll);
  });
  return raus;
}

let geaendert = 0, stellen = 0;
dateienUnter(path.join(wurzel, 'bau')).forEach(f => {
  /* Zwei Dateien bleiben außen vor: in pruefe-umlaute.js sind ae, oe
     und ue die Suchmuster, und dieses Skript hier enthält die ganze
     Tauschtabelle plus seinen eigenen Platzhalter. */
  const name = path.basename(f);
  if (name === 'pruefe-umlaute.js' || name === 'umlaute-nachziehen.js') return;
  let s = fs.readFileSync(f, 'utf8');
  const vorher = s;

  /* Dateinamen aus der Schusslinie nehmen. Der Platzhalter darf in
     keiner Datei natuerlich vorkommen — eine Zahl zwischen
     Leerzeichen waere hier fatal, weil in den JSON-Bausteinen echte
     Zahlen stehen. */
  const schutz = [];
  NAMEN.forEach(n => {
    const re = new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    s = s.replace(re, () => { schutz.push(n); return '@@SCHUTZ' + (schutz.length - 1) + '@@'; });
  });

  TAUSCH.forEach(([a, b]) => { s = s.split(a).join(b); });

  SS_WORTE.forEach(([a, b]) => {
    s = s.replace(new RegExp('\\b' + a + '\\b', 'gi'),
                  m => grossKlein(b, m));
  });

  s = s.replace(/@@SCHUTZ(\d+)@@/g, (_, i) => schutz[+i]);
  if (s.indexOf('@@SCHUTZ') >= 0) {
    console.error('  ! Platzhalter blieb stehen in ' + f);
    process.exit(1);
  }

  if (s !== vorher) {
    const alteZeilen = vorher.split('\n'), neueZeilen = s.split('\n');
    let n = 0;
    alteZeilen.forEach((z, i) => { if (z !== neueZeilen[i]) n++; });
    stellen += n;
    geaendert++;
    fs.writeFileSync(f, s, 'utf8');
    console.log('  ' + path.relative(wurzel, f).padEnd(40) + n + ' Zeilen');
  }
});
console.log('\n' + geaendert + ' Dateien, ' + stellen + ' Zeilen umgestellt');
