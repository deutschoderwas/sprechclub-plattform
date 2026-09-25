/* ============================================================
   pruefe-abdeckung.mjs — findet Uebungsthemen, die an keinem
   Bereich und an keiner Themenkarte haengen.

   Aufruf:  node bau/pruefe-abdeckung.mjs
   Ausgabe: Zahl je Fertigkeit + die Liste der Verwaisten.
   Exit 1, wenn welche uebrig sind.
   ============================================================ */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const HTML = fs.readFileSync(path.join(ROOT, 'konto.html'), 'utf8');
const DATEIEN = [...HTML.matchAll(/<script[^>]+src="([^"]+)"/g)]
  .map(m => m[1].replace(/\?.*/, ''))
  .filter(f => !/^https?:|^\/_vercel/.test(f))
  .filter(f => fs.existsSync(path.join(ROOT, f)));

const noop = () => {};
const mk = () => new Proxy(function () {}, {
  get: (t, p) => (p === 'length' ? 0 : p === Symbol.iterator ? function* () {} : mk()),
  set: () => true, apply: () => mk(), construct: () => mk(), has: () => true
});
const store = {};
global.localStorage = { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); }, removeItem: noop, clear: noop };
global.document = mk();
Object.defineProperty(global, 'navigator', { value: { userAgent: 'node', language: 'de' }, configurable: true });
global.location = { href: '', hash: '', search: '', pathname: '/konto.html', hostname: 'localhost' };
global.addEventListener = noop; global.setTimeout = () => 0; global.setInterval = () => 0;
global.requestAnimationFrame = () => 0; global.matchMedia = () => ({ matches: false, addEventListener: noop, addListener: noop });
global.fetch = () => Promise.resolve({ ok: false, json: () => Promise.resolve({}), text: () => Promise.resolve('') });
global.CustomEvent = class {}; global.Event = class {};
global.Audio = class { play() { return Promise.resolve(); } };
global.speechSynthesis = { getVoices: () => [], speak: noop, cancel: noop };
global.supabase = { createClient: () => mk() };
global.alert = noop; global.confirm = () => false; global.prompt = () => null;
global.history = { pushState: noop, replaceState: noop };
global.getComputedStyle = () => mk(); global.MutationObserver = class { observe() {} disconnect() {} };
global.window = global; global.self = global; global.top = global;

for (const f of DATEIEN) {
  try { new Function(fs.readFileSync(path.join(ROOT, f), 'utf8'))(); } catch (e) { /* Anzeige-Code, egal */ }
}
if (typeof global.BEREICHE_ANSCHLUSS === 'function') global.BEREICHE_ANSCHLUSS();

const U = global.UEBUNGEN;
if (!U) { console.error('UEBUNGEN nicht geladen'); process.exit(2); }

const erreichbar = new Set();
const eintragen = (liste) => (liste || []).forEach(t => {
  (t.ws || []).forEach(x => erreichbar.add('wortschatz|' + x));
  (t.ho || []).forEach(x => erreichbar.add('hoeren|' + x));
  (t.ls || []).forEach(x => erreichbar.add('lesen-schreiben|' + x));
  if (typeof t.gr === 'string' && t.art === 'grammatik') erreichbar.add('grammatik|' + t.gr);
  if (typeof t.au === 'string') erreichbar.add('aussprache|' + t.au);
  (t.hilf || []).forEach(x => { erreichbar.add('grammatik|' + x); erreichbar.add('aussprache|' + x); });
});
eintragen(global.THEMEN);
eintragen(global.BEREICHE);

const offen = [];
let gesamt = 0;
for (const s of U.skills) for (const t of s.themes) {
  gesamt++;
  if (!erreichbar.has(s.id + '|' + t.id)) offen.push([s.id, t.id, t.level || '', t.title || '']);
}
const jeSkill = {};
offen.forEach(r => { jeSkill[r[0]] = (jeSkill[r[0]] || 0) + 1; });

console.log('Uebungsthemen gesamt: ' + gesamt);
console.log('ohne Weg dorthin:     ' + offen.length + (offen.length ? '  ' + JSON.stringify(jeSkill) : ''));
if (offen.length) {
  let letzte = '';
  for (const r of offen) {
    if (r[0] !== letzte) { console.log('\n  ' + r[0]); letzte = r[0]; }
    console.log('    ' + r[1].padEnd(28) + r[2].padEnd(4) + r[3].slice(0, 46));
  }
  process.exit(1);
}
console.log('Alles erreichbar.');
