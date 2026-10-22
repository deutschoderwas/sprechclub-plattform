import fs from 'fs';
const src = fs.readFileSync(process.env.HOME + '/mnt/Webseite/Plattform/api/pruefe-mitgliedschaften.js','utf8');

// Die drei Bausteine aus der Datei herausschneiden und hier ausfuehren,
// damit der Test wirklich den Code prueft und keine Kopie davon.
const teil = (re) => { const m = src.match(re); if(!m) throw new Error('nicht gefunden: '+re); return m[0]; };
const code = [
  teil(/const LAEUFT = \[[^\]]*\];/),
  teil(/const NIE_ZUSTANDE = \[[^\]]*\];/),
  teil(/const NICHT_BEZAHLT = \[[^\]]*\];/),
  teil(/function periodeEnde\(s\) \{[\s\S]*?\n\}/),
  teil(/function nochBezahlt\(s\) \{[\s\S]*?\n\}/),
].join('\n');
const f = new Function(code + '; return {LAEUFT, NIE_ZUSTANDE, NICHT_BEZAHLT, nochBezahlt};')();

const inZukunft = Math.floor(Date.now()/1000) + 60*60*24*30;   // Periode laeuft noch 30 Tage
const faelle = [
  ['active',             'Zahlung laeuft',                 true ],
  ['trialing',           'Testphase',                      true ],
  ['past_due',           'Abbuchung fehlgeschlagen',       false],
  ['unpaid',             'Rechnung offen geblieben',       false],
  ['incomplete',         'erste Zahlung nie durch',        false],
  ['incomplete_expired', 'Kaufversuch verfallen',          false],
  ['canceled',           'gekuendigt, Periode bezahlt',    true ],
];
let fehler = 0;
for (const [status, was, soll] of faelle) {
  const sub = { status, current_period_end: inZukunft };
  const zugang = f.LAEUFT.includes(status) || f.nochBezahlt(sub);
  const ok = zugang === soll;
  if (!ok) fehler++;
  console.log((ok ? '  ok  ' : '  FEHLER ') + status.padEnd(20) + was.padEnd(32) +
              'Zugang: ' + (zugang ? 'ja ' : 'nein') + '  (erwartet: ' + (soll ? 'ja' : 'nein') + ')');
}
// gekuendigt und Periode abgelaufen -> kein Zugang
const alt = { status:'canceled', current_period_end: Math.floor(Date.now()/1000) - 86400 };
const zugangAlt = f.LAEUFT.includes('canceled') || f.nochBezahlt(alt);
console.log((zugangAlt === false ? '  ok  ' : '  FEHLER ') + 'canceled'.padEnd(20) +
            'gekuendigt, Periode vorbei'.padEnd(32) + 'Zugang: ' + (zugangAlt ? 'ja' : 'nein') + '  (erwartet: nein)');
if (zugangAlt !== false) fehler++;
console.log(fehler ? '\n' + fehler + ' FEHLER' : '\nalles wie gewollt');
process.exit(fehler ? 1 : 0);
