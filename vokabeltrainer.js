/* ============================================================
   deutschoderwas club · Vokabeltrainer (Vollbild)
   Tagesrunde aus Kursbibliothek, Live-Unterricht und Üben.
   Wiederholung nach Vergessenskurve, neun Aufgabentypen,
   Wortmarkierung im Satz, Artikelfarben, Ton, Tastatur.
   Ersetzt window.renderVokabeln aus konto.html.
   ============================================================ */
(function () {
  'use strict';

  var POOL = [], BEKANNT = {}, STAND = {};
  /* Titelfoto je Thema (Julia, 08.11.: alles visueller, nur echte Fotos).
     Aus bilder/dialog, bilder/thema und bilder/beruf. Fehlt ein Thema hier,
     nimmt die Karte das erste Wortfoto aus dem Thema. */
  var TH_BILD = {"Am Telefon – professionell reagieren": "bilder/dialog/telefon-melden-s.jpg", "Angehörige informieren": "bilder/dialog/angehoerige-kritik-s.jpg", "Arbeitswelt im Wandel": "bilder/beruf/grossraum.jpg", "Auf Augenhöhe debattieren": "bilder/dialog/feedback-s.jpg", "Auf dem Amt": "bilder/dialog/anmeldung-buergeramt-s.jpg", "Aufklärung vor dem Eingriff": "bilder/dialog/c1-zweitmeinung-op-s.jpg", "Beim Arzt": "bilder/dialog/arzt-termin-s.jpg", "Bewerbung und Lebenslauf": "bilder/thema/bewerbung-s.jpg", "Das Aufklärungsgespräch": "bilder/dialog/befund-erklaeren-s.jpg", "Das schwierige Gespräch": "bilder/dialog/jemanden-troesten-s.jpg", "Den Weg finden": "bilder/thema/stadt-s.jpg", "Der erste Tag im neuen Job": "bilder/dialog/erster-tag-s.jpg", "Der kurze Bericht": "bilder/beruf/buero.jpg", "Die Anamnese – das Erstgespräch": "bilder/dialog/anamnese-kurz-s.jpg", "Die Körperpflege — mit dem Bewohner sprechen": "bilder/thema/pflege-s.jpg", "Die Patientenvorstellung": "bilder/dialog/c1-pflege-arzt-ueberzeugen-s.jpg", "Die Pflegedokumentation": "bilder/beruf/pflege.jpg", "Die Schichtübergabe": "bilder/dialog/uebergabe-station-s.jpg", "Die komplette Prüfungssimulation": "bilder/dialog/pruefung-wiederholen-s.jpg", "Die körperliche Untersuchung": "bilder/dialog/physio-ersttermin-s.jpg", "E-Mails, die man gern liest": "bilder/dialog/mail-missverstaendnis-s.jpg", "Eine Wohnung suchen": "bilder/dialog/wohnung-s.jpg", "Einen Konflikt klären": "bilder/dialog/streit-klaeren-s.jpg", "Einkaufen im Supermarkt": "bilder/dialog/supermarkt-s.jpg", "Essen & Trinken": "bilder/thema/essen-s.jpg", "Etwas überzeugend präsentieren": "bilder/beruf/workshop.jpg", "Fachtexte erschließen": "bilder/thema/nominalisierung-s.jpg", "Forschung verständlich erklären": "bilder/thema/bildung-s.jpg", "Gesund leben": "bilder/thema/gesundheit-s.jpg", "Hallo! Ich bin …": "bilder/thema/a1-begruessung-s.jpg", "Hart verhandeln, fair bleiben": "bilder/dialog/c1-catering-verhandeln-s.jpg", "Hören — Ansagen, Gespräche, Nachrichten": "bilder/dialog/bahnhof-s.jpg", "Hören — was wirklich gefragt wird": "bilder/dialog/nicht-verstanden-s.jpg", "Im Meeting das Wort ergreifen": "bilder/dialog/meeting-s.jpg", "Ironie und Zwischentöne": "bilder/dialog/kompliment-annehmen-s.jpg", "Karriere und Gehalt verhandeln": "bilder/dialog/gehalt-s.jpg", "Kleidung kaufen und umtauschen": "bilder/dialog/umtausch-s.jpg", "Konflikt im Team ansprechen": "bilder/dialog/c1-kollege-laestert-s.jpg", "Konsum und Verantwortung": "bilder/thema/einkaufen-s.jpg", "Künstliche Intelligenz im Alltag": "bilder/thema/ki-arbeitswelt-s.jpg", "Lesen — Anzeigen, Formulare, Briefe": "bilder/dialog/post-s.jpg", "Lesen — die Aufgabentypen und ihre Fallen": "bilder/dialog/kurs-nachfragen-s.jpg", "Lieferung und Reklamation": "bilder/dialog/lieferung-annehmen-s.jpg", "Mein Tag und die Uhrzeit": "bilder/thema/a1-tagesablauf-s.jpg", "Meine Familie": "bilder/thema/familie-s.jpg", "Migration und Zugehörigkeit": "bilder/dialog/heimweh-sprechen-s.jpg", "Nachrichten und soziale Medien": "bilder/thema/medien-s.jpg", "Notfall im Dienst": "bilder/dialog/notaufnahme-anmeldung-s.jpg", "Politik und Beteiligung": "bilder/dialog/c1-hausversammlung-fahrradkeller-s.jpg", "Redewendungen sicher benutzen": "bilder/thema/redewendungen-s.jpg", "Reisen und Urlaub": "bilder/thema/reisen-s.jpg", "Rhetorik durchschauen": "bilder/thema/redemittel-s.jpg", "Schreiben — der Brief, der Punkte holt": "bilder/dialog/widerspruch-krankenkasse-s.jpg", "Schreiben — die halbformelle Nachricht": "bilder/dialog/kurs-entschuldigung-s.jpg", "Sprachbausteine — die Muster, die immer kommen": "bilder/thema/konnektoren-s.jpg", "Sprechen Teil 1 — über sich erzählen": "bilder/dialog/kaffee-einladen-s.jpg", "Sprechen Teil 2 — ein Bild beschreiben": "bilder/thema/kultur-s.jpg", "Sprechen Teil 3 — gemeinsam planen": "bilder/dialog/geburtstag-planen-s.jpg", "Sprechen — ein Thema präsentieren": "bilder/thema/live-unterricht-s.jpg", "Sprechen — gemeinsam etwas planen": "bilder/dialog/party-s.jpg", "Stilebenen treffen": "bilder/thema/umgangssprache-s.jpg", "Teil 1 — das Anamnesegespräch": "bilder/dialog/c1-arzt-nicht-abspeisen-lassen-s.jpg", "Teil 2 — die schriftliche Dokumentation": "bilder/dialog/ueberweisung-facharzt-s.jpg", "Teil 3 — das Arzt-Arzt-Gespräch": "bilder/dialog/bereitschaftsdienst-116117-s.jpg", "Telefonat mit der Kollegin": "bilder/dialog/telefon-ausrichten-s.jpg", "Termine koordinieren": "bilder/dialog/termin-verschieben-s.jpg", "Termine machen und absagen": "bilder/dialog/einladung-absagen-s.jpg", "Vom Laienwort zum Fachbegriff": "bilder/dialog/apotheke-rezept-s.jpg", "Weiterbildung neben dem Beruf": "bilder/dialog/weiterbildung-beratung-s.jpg", "Wie Sprache Wirklichkeit formt": "bilder/thema/menschen-s.jpg", "Zahlen, Alter & Telefonnummer": "bilder/thema/a1-fragen-s.jpg", "Ärger mit den Nachbarn": "bilder/dialog/c1-nachbar-vorwurf-laerm-s.jpg"};
  /* Julia, 20.10.2026: "Bei den Woertern moechte ich eh, dass wir das
     irgendwie so organisieren, dass sie auch mal nach Thema und Niveau
     sortiert werden und man diese dann immer wieder mit Beispielsaetzen
     ueben kann (auch fachspezifische)."

     Bisher entschied allein die Tagesrunde, was drankommt. Wer gezielt
     "Beim Arzt" oder "Bewerbung" ueben wollte, konnte das nicht. Diese
     beiden Merker tragen die Auswahl zwischen zwei Zeichnungen der
     Startseite; THEMEN haelt die zuletzt gezeigte Liste, damit der
     Klick nur eine Nummer uebergeben muss und kein Thema mit
     Anfuehrungszeichen durch ein onclick-Attribut gefaedelt wird. */
  var NIVEAU_FILTER = '', THEMEN = [], NIVEAU_VOREINGESTELLT = false;
  var RUNDE = [], POS = 0, ERG = [], LAEUFT = false, GEPRUEFT = false, SERIE = {}; TRAIN_TYP = '';
  var ZIEL_VORGABE = [10, 15, 25, 40];

  /* ================= Grundlagen ================= */
  function sb() { return window.sb || null; }
  function esc(x) {
    return String(x == null ? '' : x).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function l1() { try { return localStorage.getItem('dow_l1') || ''; } catch (e) { return ''; } }
  function trRoh(id) { var m = (window.VOK_TR || {})[l1()]; return (m && m[id]) || null; }
  /* 21.11.2026, Julia: „die Übersetzungen im Übungsteil sind meistens
     falsch, lass sie einfach weg.“ trWort/trSatz liefern deshalb nichts
     mehr. Alles, was daran hängt, prüft schon auf leer: die Zeile unter
     der Wortkarte und unter dem Beispielsatz fällt weg, und die Spiele
     „Übersetzung“ und „rückwärts“ werden gar nicht erst ausgewählt. */
  var OHNE_TR = true;
  function trWort(v) {
    if (OHNE_TR) return '';
    var a = trRoh(v.id); if (a && a[0]) return a[0];
    if (v.zwilling) { var b = trRoh(v.zwilling); if (b && b[0]) return b[0]; }
    return v.trDirekt || '';
  }
  function trSatz(v) {
    if (OHNE_TR) return '';
    var a = trRoh(v.id); if (a && a[1]) return a[1];
    if (v.zwilling) { var b = trRoh(v.zwilling); if (b && b[1]) return b[1]; }
    return '';
  }
  var RTL = { fa: 1, ar: 1, ur: 1, he: 1 };
  function rtl() { return !!RTL[l1()]; }
  function rtlK() { return rtl() ? ' vt-rtl' : ''; }

  function mische(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  function zufall(a) { return a[Math.floor(Math.random() * a.length)]; }
  function q(sel) { return document.querySelector(sel); }
  function qa(sel) { return [].slice.call(document.querySelectorAll(sel)); }

  /* ================= Artikelfarben ================= */
  // Im Deutschunterricht üblich: der = blau, die = rot, das = grün
  var ART_FARBE = { der: '#2F6FD0', die: '#D0407A', das: '#1E9E63' };
  function artikelChip(a) {
    if (!a) return '';
    return '<span class="vt-artchip" style="--af:' + ART_FARBE[a] + '">' + a + '</span>';
  }

  /* ================= Ton ================= */
  var STIMME = null;
  function stimme() {
    if (STIMME) return STIMME;
    try {
      var v = speechSynthesis.getVoices().filter(function (x) { return /^de/i.test(x.lang); });
      STIMME = v.filter(function (x) { return /google|premium|siri|natural|anna|petra/i.test(x.name); })[0] || v[0] || null;
    } catch (e) { STIMME = null; }
    return STIMME;
  }
  try { speechSynthesis.onvoiceschanged = function () { STIMME = null; stimme(); }; } catch (e) {}
  function sprich(text, tempo) {
    if (window.sagen) { window.sagen(String(text), { rolle: 'julia', langsam: !!(tempo && tempo < 0.85) }); return; }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = 'de-DE'; u.rate = tempo || 0.92;
      var s = stimme(); if (s) u.voice = s;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  window.__vtSprich = function (t, tempo, el) {
    sprich(t, tempo);
    if (el) { el.classList.add('vt-tont'); setTimeout(function () { el.classList.remove('vt-tont'); }, 620); }
  };

  /* ================= Wort im Satz markieren ================= */
  function wortRegex(w) {
    w = String(w || '').trim();
    if (!w) return null;
    var stamm = w.replace(/(en|er|es|em|e|n|s)$/i, '');
    if (stamm.length < 3) stamm = w;
    return new RegExp('(^|[\\s(„"\'])(' + stamm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-zäöüß]{0,4})(?=[\\s.,!?;:)"„\']|$)', 'i');
  }
  /* 22.11.2026: Trennbare Verben. „ausgehen“ steht im Satz als „Wir gehen
     heute Abend aus.“ – vorher war dann gar nichts markiert (gut 100 Wörter).
     Jetzt werden beide Teile markiert: der Verbstamm und die Vorsilbe am
     Satzende. Starke Verben mit anderem Stammvokal (nehmen – nimmt) findet
     das nicht, dann bleibt es wie vorher ohne Markierung. */
  var VORSILBEN = ['dagegen', 'zusammen', 'zurück', 'hinein', 'runter', 'gegen', 'hoch', 'klein', 'weiter', 'vorbei', 'heraus', 'herein', 'hinaus', 'kennen',
    'statt', 'fest', 'fort', 'frei', 'teil', 'auf', 'aus', 'ein', 'mit', 'nach', 'vor', 'weg', 'los',
    'her', 'hin', 'dar', 'ab', 'an', 'bei', 'zu', 'um'];
  function trennbar(w) {
    w = String(w || '').trim().toLowerCase().replace(/^sich\s+/, '');
    if (/\s/.test(w) || !/(e|el|er)?n$/.test(w)) return null;
    for (var i = 0; i < VORSILBEN.length; i++) {
      var vs = VORSILBEN[i];
      if (w.indexOf(vs) === 0 && w.length - vs.length >= 4) {
        var rest = w.slice(vs.length).replace(/(en|n)$/, '');
        if (rest.length < 2) return null;
        return { vs: vs, stamm: rest };
      }
    }
    return null;
  }
  function umlautKlasse(st) {
    return st.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/a(?!u)/, '[aä]').replace(/o/, '[oö]').replace(/u/, '[uü]');
  }
  /* 22.11.2026: Wendungen. „Ich hätte gern …“, „Sehr geehrter Herr … /
     Sehr geehrte Frau …“, „sich ärgern über“: erst ohne Satzzeichen und
     Auslassung, jede Variante einzeln; klappt das nicht, werden die
     tragenden Wörter einzeln markiert, wenn mindestens die Hälfte im Satz
     steht. Nachsilben („-itis“) und Vorsilben („hyper-“) markieren das
     ganze Wort, in dem sie stecken. */
  var M_AN = String.fromCharCode(1), M_AUS = String.fromCharCode(2);
  var FUELL = { sich: 1, etwas: 1, jemand: 1, jemandem: 1, jemanden: 1, einen: 1, einem: 1, einer: 1, eine: 1,
    ein: 1, der: 1, die: 1, das: 1, den: 1, dem: 1, des: 1, und: 1, sein: 1 };
  function wendungMarkiert(s, wort, k) {
    var roh = String(wort || '').replace(/[…?!.:;"„“”»«()]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!roh) return null;
    var varianten = roh.split(/\s*\/\s*/).map(function (x) { return x.trim(); }).filter(Boolean);
    var mk = function (x) { return x.split(M_AN).join('<mark class="' + k + '">').split(M_AUS).join('</mark>'); };
    for (var i = 0; i < varianten.length; i++) {
      var vv = varianten[i].replace(/^sich\s+/i, '');
      if (/^-\S+$/.test(vv)) {
        var reN = new RegExp('([A-Za-zÄÖÜäöüß]+' + vv.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![a-zäöüß])', 'i');
        if (reN.test(s)) return mk(s.replace(reN, M_AN + '$1' + M_AUS));
        continue;
      }
      if (/^\S+-$/.test(vv)) {
        var reV = new RegExp('(^|[\\s(„"\'])(' + vv.slice(0, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-zäöüß]+)', 'i');
        if (reV.test(s)) return mk(s.replace(reV, '$1' + M_AN + '$2' + M_AUS));
        continue;
      }
      var re1 = wortRegex(vv);
      if (re1 && re1.test(s)) return mk(s.replace(re1, '$1' + M_AN + '$2' + M_AUS));
    }
    var teile = varianten[0].split(' ').filter(function (t) { return t.length >= 3 && !FUELL[t.toLowerCase()]; });
    if (teile.length < 2) return null;
    var neu = s, treffer = 0;
    teile.forEach(function (t) {
      var reT = wortRegex(t);
      if (reT && reT.test(neu)) { neu = neu.replace(reT, '$1' + M_AN + '$2' + M_AUS); treffer++; }
    });
    return treffer >= Math.ceil(teile.length / 2) ? mk(neu) : null;
  }
  function satzMarkiertAlt(satz, wort, klasse) {
    var s = esc(satz || '');
    var k = 'vt-mark' + (klasse ? ' ' + klasse : '');
    var re = wortRegex(wort);
    if (re && re.test(s)) return s.replace(re, '$1<mark class="' + k + '">$2</mark>');
    /* Verbformen: Partizip („buchen“ → „gebucht“, „hochladen“ →
       „hochgeladen“) und Umlaut im Präsens („gefallen“ → „gefällt“). */
    var wl = String(wort || '').trim();
    if (/^[a-zäöüß]+(e|el|er)?n$/.test(wl) && wl.length >= 5) {
      var stv = wl.replace(/(en|n)$/, ''), tv = trennbar(wl);
      var grenz = '(?=[\\s.,!?;:)"„\']|$)';
      var muster = [umlautKlasse(tv ? tv.vs + 'ge' + tv.stamm : 'ge' + stv) + '(?:e?t|en)[a-zäöüß]{0,2}'];
      if (!/^(be|ver|er|ent|zer|ge|emp|miss)/.test(wl) || true) muster.push(umlautKlasse(stv) + '[a-zäöüß]{0,3}');
      for (var mi = 0; mi < muster.length; mi++) {
        var reF = new RegExp('(^|[\\s(„"\'])(' + muster[mi] + ')' + grenz, 'i');
        if (reF.test(s)) return s.replace(reF, '$1<mark class="' + k + '">$2</mark>');
      }
    }
    var t = trennbar(wort);
    if (!t) { var w2 = wendungMarkiert(s, wort, k); return w2 || s; }
    var reV = new RegExp('(^|[\\s(„"\'])(' + umlautKlasse(t.stamm) + '[a-zäöüß]{0,3})(?=[\\s.,!?;:)"„\']|$)', 'i');
    var m = reV.exec(s);
    if (!m) return wendungMarkiert(s, wort, k) || s;
    var nach = m.index + m[0].length;
    var reP = new RegExp('(\\s)(' + t.vs + ')(?=[\\s.,!?;:)"„\']|$)', 'i');
    var rest = s.slice(nach), m2 = reP.exec(rest);
    if (!m2) return wendungMarkiert(s, wort, k) || s;
    var vorn = s.slice(0, m.index) + m[1] + '<mark class="' + k + '">' + m[2] + '</mark>';
    var hinten = rest.slice(0, m2.index) + m2[1] + '<mark class="' + k + '">' + m2[2] + '</mark>' + rest.slice(m2.index + m2[0].length);
    return vorn + hinten;
  }

  /* Markierung, Fassung 3 (22.11.2026). Ein Baustein findet ein einzelnes
     Wort in allen üblichen Formen: wie geschrieben (mit Endung), als
     Verb mit Umlaut („gefällt“), als Partizip („gebucht“, „eingelebt“),
     als zu-Infinitiv („kleinzureden“) und geteilt („gehen … aus“).
     Wendungen werden in ihre tragenden Wörter zerlegt; jedes läuft durch
     denselben Baustein. Zeichen 1 und 2 sind Platzhalter für <mark>,
     damit ein zweites Wort nicht in einem schon gesetzten Tag landet. */
  var GRENZE = '(?=[\\s.,!?;:)"„“\']|$)', VORN = '(^|[\\s(„"\'])';
  function einzelMarkiert(s, w, an, aus) {
    w = String(w || '').trim().replace(/^sich\s+/i, '');
    if (!w || /\s/.test(w)) return null;
    var re = wortRegex(w);
    if (re && re.test(s)) return s.replace(re, '$1' + an + '$2' + aus);
    var wl = w.toLowerCase();
    if (!/^[a-zäöüß]+(e|el|er)?n$/.test(wl) || wl.length < 5) return null;
    var tv = trennbar(wl), stv = wl.replace(/(en|n)$/, '');
    var muster = [umlautKlasse(tv ? tv.vs + 'ge' + tv.stamm : 'ge' + stv) + '(?:e?t|en)[a-zäöüß]{0,2}'];
    if (tv) muster.push(umlautKlasse(tv.vs + 'zu' + tv.stamm) + 'en');
    if (!tv) muster.push(umlautKlasse(stv) + '[a-zäöüß]{0,3}');
    for (var i = 0; i < muster.length; i++) {
      var reF = new RegExp(VORN + '(' + muster[i] + ')' + GRENZE, 'i');
      if (reF.test(s)) return s.replace(reF, '$1' + an + '$2' + aus);
    }
    if (!tv) return null;
    var reV = new RegExp(VORN + '(' + umlautKlasse(tv.stamm) + '[a-zäöüß]{0,3})' + GRENZE, 'i');
    var m = reV.exec(s);
    if (!m) return null;
    var nach = m.index + m[0].length, rest = s.slice(nach);
    var m2 = new RegExp('(\\s)(' + tv.vs + ')' + GRENZE, 'i').exec(rest);
    if (!m2) return null;
    return s.slice(0, m.index) + m[1] + an + m[2] + aus
      + rest.slice(0, m2.index) + m2[1] + an + m2[2] + aus + rest.slice(m2.index + m2[0].length);
  }
  function satzMarkiert(satz, wort, klasse) {
    var s = esc(satz || '');
    var k = 'vt-mark' + (klasse ? ' ' + klasse : '');
    var fertig = function (x) { return x.split(M_AN).join('<mark class="' + k + '">').split(M_AUS).join('</mark>'); };
    var ganz = einzelMarkiert(s, wort, M_AN, M_AUS);
    if (ganz) return fertig(ganz);
    var re0 = wortRegex(String(wort || '').trim());
    if (re0 && re0.test(s)) return fertig(s.replace(re0, '$1' + M_AN + '$2' + M_AUS));
    var roh = String(wort || '').replace(/[…?!.:;"„“”»«()]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!roh) return s;
    var varianten = roh.split(/\s*\/\s*/).map(function (x) { return x.trim(); }).filter(Boolean);
    for (var i = 0; i < varianten.length; i++) {
      var vv = varianten[i].replace(/^sich\s+/i, '');
      /* „sich bewerben bei / als“: die zweite Hälfte ist nur ein kleines Wort */
      if (i > 0 && vv.length < 4) continue;
      if (/^-\S+$/.test(vv)) {
        var reN = new RegExp('([A-Za-zÄÖÜäöüß]+' + vv.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![a-zäöüß])', 'i');
        if (reN.test(s)) return fertig(s.replace(reN, M_AN + '$1' + M_AUS));
        continue;
      }
      if (/^\S+-$/.test(vv)) {
        var reP = new RegExp(VORN + '(' + vv.slice(0, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-zäöüß]+)', 'i');
        if (reP.test(s)) return fertig(s.replace(reP, '$1' + M_AN + '$2' + M_AUS));
        continue;
      }
      var e1 = einzelMarkiert(s, vv, M_AN, M_AUS);
      if (e1) return fertig(e1);
      var re1 = wortRegex(vv);
      if (re1 && re1.test(s)) return fertig(s.replace(re1, '$1' + M_AN + '$2' + M_AUS));
    }
    var teile = varianten[0].split(' ').filter(function (t) { return t.length >= 2 && !FUELL[t.toLowerCase()]; });
    if (!teile.length) return s;
    var neu = s, treffer = 0, tragend = 0;
    teile.forEach(function (t) {
      var x = einzelMarkiert(neu, t, M_AN, M_AUS);
      if (x) { neu = x; treffer++; if (t.length >= 4) tragend++; }
    });
    /* Nur kleine Wörter wie „auf“ gefunden: lieber gar nichts markieren */
    return (tragend && treffer >= Math.ceil(teile.length / 2)) ? fertig(neu) : s;
  }

  /* 22.11.2026: Gut 270 Einträge haben im Feld bsp keinen ganzen Satz,
     sondern einen Hinweis („zum Abschied“, „10“, „zwei Liter Milch“).
     Die stehen jetzt als „So benutzt man es“ da statt als „Beispiel aus
     dem Alltag“, und aus ihnen wird kein Satz zum Bauen gemacht. */
  function istSatz(v) {
    var b = String((v && v.bsp) || '').trim();
    return /^[A-ZÄÖÜ„"0-9]/.test(b) && /[.!?…]["“”»]?$/.test(b) && b.split(/\s+/).length >= 3;
  }
  /* Etikett über dem Beispiel: ganzer Satz mit dem Wort = „Beispiel aus
     dem Alltag“, Wortverbindung mit dem Wort = „So benutzt man es“,
     Wort kommt gar nicht vor (Merksatz, Zahl, Erläuterung) = „Zum Wort“. */
  function bspMitWort(v) { return /<mark/.test(satzMarkiert(v.bsp, v.wort || v.de)); }
  function bspKlasse(v) {
    if (!bspMitWort(v)) return ' zumwort';
    return istSatz(v) ? '' : ' hinweis';
  }
  /* Ob die Erklärung das Wort schon verrät („kürzen – etwas kürzer
     machen“). Dann taugt sie nicht als Frage. */
  function erklaerungOk(v) {
    var b = String((v && v.bedeutung) || '').toLowerCase();
    if (b.length < 8) return false;
    var teile = String(v.wort || v.de || '').toLowerCase().replace(/[^a-zäöüß\s]/g, ' ').split(/\s+/);
    return !teile.some(function (t) {
      if (t.length < 4) return false;
      var st = t.replace(/(en|er|es|em|e|n|s)$/, '');
      if (st.length < 4) st = t;
      return b.indexOf(st) > -1;
    });
  }

  /* ================= Bild ================= */
  // Wortkarte, wenn es kein Bild und kein Emoji gibt: Anfangsbuchstabe in Artikelfarbe
  function wortKarte(v, gr) {
    var f = (v.artikel && ART_FARBE[v.artikel]) || '#1B9BC0';
    var buch = (v.wort || v.de || '?').trim().charAt(0).toUpperCase();
    return '<span class="vt-bild ' + (gr || '') + ' vt-typo" style="--tk:' + f + '">'
      + '<span class="vt-typo-b">' + esc(buch) + '</span></span>';
  }
  function bild(v, gr) {
    var id = v.zwilling || v.id;
    if (!v.em && !v.zwilling && v.quelle === 'live') return wortKarte(v, gr);
    return '<span class="vt-bild ' + (gr || '') + '">'
      + '<img src="vok-bild/' + encodeURIComponent(id) + '.webp" alt="" loading="lazy" '
      + 'onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
      + '<span class="vt-em" style="display:none">' + (v.em || '🔤') + '</span></span>';
  }
  /* 897 der 1043 Woerter haben kein Foto — aber alle ein Emoji. Bisher
     sassen sie deshalb alle auf demselben hellgruenen Grund, und weil es
     nur 338 verschiedene Emojis gibt, sahen viele Karten identisch aus:
     ⚖️ steht fuer 27 verschiedene Woerter, 🔁 fuer 21.

     Die Karte traegt jetzt die Artikelfarbe — blau der, pink die, gruen
     das. Das ist die uebliche Farbmethodik im DaF-Unterricht: der Artikel
     praegt sich mit dem Wort zusammen ein, statt getrennt gelernt zu
     werden. Nebenbei unterscheiden sich die Karten endlich voneinander.

     Verraten wird dabei nichts: die Artikelabfrage ("der, die oder das?")
     zeigt gar kein Bild, sondern nur Wort und Beispielsatz. */
  function bildEmoji(v, gr) {
    if (hatBild(v)) return bild(v, gr);
    if (!v.em) return wortKarte(v, gr);
    var f = v.artikel && ART_FARBE[v.artikel];
    if (!f) return '<span class="vt-bild ' + (gr || '') + '"><span class="vt-em" style="display:flex">' + v.em + '</span></span>';
    return '<span class="vt-bild ' + (gr || '') + ' vt-art" style="--tk:' + f + '">'
      + '<span class="vt-em" style="display:flex">' + v.em + '</span>'
      + '<span class="vt-art-tag">' + esc(v.artikel) + '</span></span>';
  }

  // Zu welchen Wörtern gibt es ein echtes Bild? (vok-bild/index.js)
  function hatBild(v) {
    var m = window.VOK_BILD;
    if (!m) return false;
    return !!(m[v.id] || (v.zwilling && m[v.zwilling]));
  }

  /* ================= Wortquellen ================= */
  function lektionenGemacht() {
    var m = {};
    try { m = JSON.parse(localStorage.getItem('dow_lek') || '{}'); } catch (e) { m = {}; }
    var ids = {};
    Object.keys(m).forEach(function (k) {
      var t = /^([a-z0-9]+)-(\d+)$/.exec(k);
      if (t) ids[t[1] + '-l' + t[2]] = 1;
    });
    return ids;
  }
  /* Steht im Profil keine Stufe, wird die genommen, die der
     Lernbereich gemerkt hat oder die der Niveautest ergab. Vorher
     fiel das immer auf A1 zurück — ein C1-Lerner bekam die
     A1-Wörter zuerst.

     19.10.2026: Genau das passierte trotzdem weiter. Gelesen wurden
     nur level und target_level — die Stufe aus dem Niveautest bzw.
     aus der eigenen Angabe steht aber in profiles.stufe, und die
     stand hier nicht. Aksana hatte B2 angegeben und bekam A1-Wörter;
     bei 23 aktiven Mitgliedern ist stufe die EINZIGE gesetzte Angabe.
     stufe steht jetzt vorn: sie ist die jüngste und genaueste.
     target_level bleibt ganz hinten — das ist das Ziel, nicht der
     Stand. */
  function meinNiveau() {
    var n = '';
    try {
      n = (window.profile && (window.profile.stufe || window.profile.level
                              || window.profile.target_level)) || '';
    } catch (e) {}
    if (!n) { try { n = (window.lsGet && window.lsGet('niveau', '')) || ''; } catch (e) {} }
    if (!n) {
      try { var t = JSON.parse(localStorage.getItem('dow_niveautest') || 'null'); if (t && t.stufe) n = t.stufe; } catch (e) {}
    }
    var m = /([ABC][12])/.exec(String(n)); return m ? m[1] : 'A1';
  }
  var STUFEN = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  function slug(s) {
    return String(s).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  }
  // Kern eines Eintrags fuer den Abgleich: ohne Artikel, ohne Zusaetze in Klammern
  function kernWort(s) {
    return String(s || '').replace(/^(der|die|das)\s+/i, '')
      .replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }
  var POOL_IDX = null;
  function poolIndex() {
    if (POOL_IDX) return POOL_IDX;
    POOL_IDX = {};
    POOL.forEach(function (v) {
      var k = kernWort(v.de);
      if (k && !POOL_IDX[k]) POOL_IDX[k] = v;
    });
    return POOL_IDX;
  }
  function ausLive() {
    var out = [], idx = poolIndex();
    try {
      if (typeof collectVocab !== 'function') return out;
      /* 11.11.2026: auf die Schuelerin zugeschnitten. Woerter aus der
         Stunde tragen seit stunden-woerter.js eine Stufe; mehr als eine
         Stufe ueber der eigenen kommt nicht in den Trainer. */
      var meinI = STUFEN.indexOf(meinNiveau());
      collectVocab().forEach(function (v) {
        if (!v || !v.de) return;
        if (v.niveau && meinI >= 0 && STUFEN.indexOf(v.niveau) > meinI + 1) return;
        var a = (/^(der|die|das)\s/i.exec(v.de) || [])[1];
        var zwilling = idx[kernWort(v.de)] || null;   // gibt es das Wort auch im Kurs?
        out.push({
          id: 'live-' + slug(v.de), de: v.de,
          wort: v.de.replace(/^(der|die|das)\s+/i, ''),
          artikel: (a ? a.toLowerCase() : null) || (zwilling && zwilling.artikel) || null,
          art: a ? 'nomen' : (zwilling ? zwilling.art : 'wort'),
          em: v.em || (zwilling && zwilling.em) || '',
          bsp: v.bsp || v.beispiel || v.example || (zwilling && zwilling.bsp) || '',
          bedeutung: v.info || v.hi || (zwilling && zwilling.bedeutung) || '',
          niveau: v.niveau || (zwilling && zwilling.niveau) || meinNiveau(),
          kurs: 'Live-Unterricht', thema: v.from || 'Deine Stunde',
          quelle: 'live',
          zwilling: zwilling ? zwilling.id : null,       // fuer Bild und Uebersetzung
          trDirekt: v.uebersetzung || v.tr || ''
        });
      });
    } catch (e) {}
    return out;
  }
  function alleWoerter() {
    var alles = POOL.concat(ausLive()), g = {};
    return alles.filter(function (v) { if (g[v.id]) return false; g[v.id] = 1; return true; });
  }

  /* ================= Runde bauen ================= */
  function baueRunde(ziel) {
    var alle = alleWoerter(), idx = {};
    alle.forEach(function (v) { idx[v.id] = v; });
    var heute = new Date().toISOString().slice(0, 10);

    var faellig = [];
    Object.keys(BEKANNT).forEach(function (id) {
      var s = BEKANNT[id];
      if (s.faellig && s.faellig > heute) return;
      if (idx[id]) faellig.push(idx[id]);
    });
    faellig.sort(function (a, b) { return (BEKANNT[b.id].falsch || 0) - (BEKANNT[a.id].falsch || 0); });

    var gemacht = lektionenGemacht(), meinIdx = Math.max(0, STUFEN.indexOf(meinNiveau()));
    var kand = alle.filter(function (v) { return !BEKANNT[v.id]; });
    function rang(v) {
      if (v.quelle === 'live') return 0;
      if ((v.quellen || []).some(function (x) { return gemacht[x]; })) return 1;
      return 2 + Math.abs(STUFEN.indexOf(v.niveau) - meinIdx);
    }
    kand.sort(function (a, b) {
      var r = rang(a) - rang(b);
      return r || (STUFEN.indexOf(a.niveau) - STUFEN.indexOf(b.niveau));
    });

    var maxNeu = Math.max(3, Math.round(ziel * 0.45));
    var neu = kand.slice(0, maxNeu);
    var woerter = faellig.slice(0, Math.max(0, ziel - neu.length)).concat(neu).slice(0, ziel);
    if (woerter.length < ziel) {
      var drin = {}; woerter.forEach(function (v) { drin[v.id] = 1; });
      woerter = woerter.concat(kand.filter(function (v) { return !drin[v.id]; }).slice(0, ziel - woerter.length));
    }
    return baueAufgaben(mische(woerter));
  }

  // Eine Runde aus einer bestimmten Auswahl — fuer einen Kasten oder
  // fuer die Woerter, die einen aergern.
  function baueRundeAus(woerter) {
    return baueAufgaben(mische(woerter.slice(0, 30)));
  }

  // Aus Wörtern werden Aufgaben. Neue Wörter bekommen eine kleine Serie:
  // kennenlernen -> wiedererkennen -> selbst produzieren.
  function baueAufgaben(woerter) {
    var erste = [], spaeter = [];
    woerter.forEach(function (v) {
      if (!BEKANNT[v.id]) {
        var a = leichterTyp(v), b = schwererTyp(v, a);
        erste.push({ v: v, typ: 'kennenlernen', letzte: false });
        erste.push({ v: v, typ: a, letzte: false });
        spaeter.push({ v: v, typ: b, letzte: true });
      } else {
        erste.push({ v: v, typ: typFuer(v), letzte: true });
      }
    });
    var alle = erste.concat(mische(spaeter));

    // Ein Spiel in die Mitte, wenn genug Wörter mit Übersetzung da sind
    var mitTr = woerter.filter(function (v) { return !!trWort(v); });
    /* Nur Nomen: bei Grüßen oder Wendungen sehen die Fotos sich zu ähnlich */
    var mitFoto = woerter.filter(function (v) { return hatBild(v) && v.art === 'nomen'; });
    if (mitTr.length >= 5) {
      var pos = Math.min(alle.length, Math.max(3, Math.round(alle.length / 3)));
      alle.splice(pos, 0, { spiel: 'paare', woerter: mische(mitTr).slice(0, 5) });
    } else if (mitFoto.length >= 4) {
      /* Ohne Übersetzung: Wort zum Foto. Erst nach der Hälfte der Runde,
         damit die neuen Wörter schon einmal gesehen wurden. */
      var pos2 = Math.min(alle.length, Math.max(4, Math.round(alle.length / 2)));
      alle.splice(pos2, 0, { spiel: 'paare', bild: true, woerter: mische(mitFoto).slice(0, 4) });
    }
    return alle;
  }

  // Leichte erste Übung nach dem Kennenlernen
  function leichterTyp(v) {
    var m = [];
    if (trWort(v)) m.push('uebersetzung');
    if (hatBild(v)) m.push('bild');
    if (erklaerungOk(v)) m.push('erklaerung');
    m.push('hoeren');
    return zufall(m);
  }
  // Zweite, schwerere Übung — möglichst eine andere Form
  function schwererTyp(v, nicht) {
    var m = [];
    if (artikelFrage(v)) m.push('artikel');
    if (luecken(v)) m.push('luecke');
    var kurz = (v.wort || v.de).trim();
    if (!/\s/.test(kurz) && kurz.length <= 13) m.push('buchstaben');
    if (trWort(v)) m.push('rueckwaerts');
    if (erklaerungOk(v)) m.push('bedeutung');
    m.push('hoeren');
    m = m.filter(function (t) { return t !== nicht; });
    return m.length ? zufall(m) : 'hoeren';
  }

  /* ================= Aufgabentypen ================= */
  function luecken(v) {
    if (!v.bsp || v.art === 'wendung') return null;
    var w = (v.wort || v.de).trim();
    if (!w || /\s/.test(w)) return null;
    var re = wortRegex(w);
    return (re && re.test(v.bsp)) ? re : null;
  }
  var TYP_INFO = {
    /* 21.11.2026: Markenfarben statt Regenbogen. Gold = neu, Türkis =
       erkennen und hören, Rot = selbst schreiben, Schwarz = im Satz,
       Petrol = Bedeutung. Die Gruppe heißt im Kopf der Karte mit. */
    kennenlernen: { f: 'Neues Wort', g: 'Kennenlernen', farbe: '#8A6500', ic: '' },
    uebersetzung: { f: 'Was heißt das?', g: 'Bedeutung', farbe: '#0E6D85', ic: '' },
    rueckwaerts: { f: 'Welches deutsche Wort ist das?', g: 'Bedeutung', farbe: '#0E6D85', ic: '' },
    erklaerung: { f: 'Welches Wort passt zur Erklärung?', g: 'Bedeutung', farbe: '#0E6D85', ic: '' },
    bedeutung: { f: 'Was bedeutet das?', g: 'Bedeutung', farbe: '#0E6D85', ic: '' },
    buchstaben: { f: 'Setz das Wort zusammen', g: 'Schreiben', farbe: '#D42A21', ic: '' },
    karte: { f: 'Karteikarte', g: 'Wiederholen', farbe: '#8A6500', ic: '' },
    diktat: { f: 'Hör zu und schreib das Wort', g: 'Diktat', farbe: '#D42A21', ic: '' },
    bild: { f: 'Welches Bild passt?', g: 'Erkennen', farbe: '#0E7FA0', ic: '' },
    artikel: { f: 'der, die oder das?', g: 'Erkennen', farbe: '#0E7FA0', ic: '' },
    luecke: { f: 'Welches Wort fehlt im Satz?', g: 'Im Satz', farbe: '#14181B', ic: '' },
    hoeren: { f: 'Hör genau hin', g: 'Hören', farbe: '#0E7FA0', ic: '' },
    tippen: { f: 'Schreib das Wort auf Deutsch', g: 'Schreiben', farbe: '#D42A21', ic: '' },
    satzbau: { f: 'Bau den Satz', g: 'Im Satz', farbe: '#14181B', ic: '' },
    satzhoeren: { f: 'Hör den Satz: Welches Wort fehlt?', g: 'Hören', farbe: '#0E7FA0', ic: '' }
  };

  function typFuer(v) {
    if (!BEKANNT[v.id]) return 'kennenlernen';
    var st = (BEKANNT[v.id] && BEKANNT[v.id].stufe) || 0;
    var hatTr = !!trWort(v), hatBsp = !!v.bsp;
    var lang = /\s/.test((v.wort || v.de).trim());
    var kannL = !!luecken(v);
    var m = [];
    if (st <= 1) { m = hatTr ? ['uebersetzung'] : []; if (hatBild(v)) m.push('bild'); if (!m.length) m = ['hoeren']; }
    else if (st === 2) {
      m = ['rueckwaerts', 'hoeren'];
      if (artikelFrage(v)) m.push('artikel');
      if (kannL) m.push('luecke');
    } else if (st === 3) {
      m = ['hoeren'];
      if (!lang) m.push('tippen');
      if (kannL) { m.push('luecke'); m.push('satzhoeren'); }
      if (artikelFrage(v)) m.push('artikel');
    } else {
      m = ['hoeren'];
      if (!lang) m.push('tippen');
      if (kannL) m.push('satzhoeren');
      var wz = hatBsp && istSatz(v) && bspMitWort(v) ? v.bsp.split(/\s+/).length : 0;
      if (wz >= 4 && wz <= 9) m.push('satzbau');
    }
    /* Ohne Übersetzung (seit 21.11. abgeschaltet) übernimmt die deutsche
       Erklärung: „Was bedeutet das?“ statt Übersetzung, „Welches Wort
       passt zur Erklärung?“ statt rückwärts, und Schreiben mit Bild und
       Erklärung als Vorlage. Vorher blieben nur Hören und Bild übrig. */
    if (!hatTr) {
      var eOk = erklaerungOk(v);
      m = m.map(function (t) {
        if (t === 'uebersetzung') return eOk ? 'bedeutung' : null;
        if (t === 'rueckwaerts') return eOk ? 'erklaerung' : null;
        if (t === 'tippen') return (eOk || hatBild(v)) ? 'tippen' : null;
        return t;
      }).filter(Boolean);
      if (st <= 1 && eOk) m.push('erklaerung');
      if (st >= 2 && eOk) m.push('bedeutung');
    }
    if (!m.length) m = hatBild(v) ? ['bild'] : ['hoeren'];
    return zufall(m);
  }

  function ablenker(v, n, art) {
    var basis = POOL.filter(function (x) {
      if (x.id === v.id) return false;
      if (art === 'tr' && !trWort(x)) return false;
      if (art === 'einzel' && /\s/.test((x.wort || x.de).trim())) return false;
      if (art === 'bed' && (!x.bedeutung || normal(x.bedeutung) === normal(v.bedeutung))) return false;
      /* Keine Wortteile („-stomie“) und keine Doppelformen als Auswahl,
         keine Zahlwörter neben Nicht-Zahlen („Zwanzig Stellen …“ passt sonst auch) */
      var xw0 = String(x.wort || x.de || '').trim();
      if (art !== 'bed' && /^-|-$|\/|…/.test(xw0)) return false;
      if (art !== 'bed' && /Zahlen/.test(x.thema || '') && !/Zahlen/.test(v.thema || '')) return false;
      return true;
    });
    var nah = basis.filter(function (x) { return x.niveau === v.niveau && x.art === v.art; });
    var mit = basis.filter(function (x) { return x.art === v.art; });
    var quelle = nah.length >= n ? nah : (mit.length >= n ? mit : basis);
    /* 22.11.2026: Bei Lücke und Hören konnte ein falscher Vorschlag auch
       passen („Ich schicke meine Meldung per E-Mail“ statt „Bewerbung“).
       Deshalb: Ablenker aus einem anderen Thema, bei Nomen mit demselben
       Artikel (damit nicht die Grammatik die Lösung verrät), und nie ein
       Wort, das ohnehin im Satz steht. */
    if (art === 'einzel' || art === 'de') {
      var satzKlein = String(v.bsp || '').toLowerCase();
      var fremdOk = function (x) {
        if ((x.thema || '') === (v.thema || '')) return false;
        var xw = String(x.wort || x.de || '').trim().toLowerCase();
        return !(art === 'einzel' && xw && satzKlein.indexOf(xw) > -1);
      };
      /* Am besten aus einem anderen Kurs (Alltag A1, Büro, Medizin …),
         sonst aus einem anderen Thema. Zwei Wörter aus demselben Bereich
         passen sonst zu leicht beide („Ich hätte gern die Suppe / Milch“). */
      var kurs = function (x) { return String((x.quellen || [])[0] || x.kurs || '').split('-')[0]; };
      var vk = kurs(v);
      var anderswo = function (x) { return fremdOk(x) && (!vk || kurs(x) !== vk); };
      var f0 = mit.filter(anderswo), f1 = nah.filter(fremdOk), f2 = mit.filter(fremdOk);
      if (art === 'einzel' && f0.length >= n) quelle = f0;
      else if (f1.length >= n) quelle = f1; else if (f2.length >= n) quelle = f2;
      if (art === 'einzel' && v.artikel) {
        var gleich = quelle.filter(function (x) { return x.artikel === v.artikel; });
        if (gleich.length >= n) quelle = gleich;
      }
    }
    /* Ein Text darf nur einmal vorkommen, und nie so wie die Lösung:
       im Pool steht dasselbe Wort manchmal unter zwei ids. */
    var gesehen = {}; gesehen[normal(v.de)] = 1; gesehen[normal(v.wort || v.de)] = 1;
    if (art === 'bed') gesehen['b:' + normal(v.bedeutung)] = 1;
    var aus = [];
    mische(quelle).concat(mische(basis)).some(function (x) {
      if (art === 'bed') {
        var kb = 'b:' + normal(x.bedeutung);
        if (gesehen[kb]) return false;
        gesehen[kb] = 1;
      }
      var k1 = normal(x.de), k2 = normal(x.wort || x.de);
      if (gesehen[k1] || gesehen[k2]) return false;
      gesehen[k1] = 1; gesehen[k2] = 1; aus.push(x);
      return aus.length >= n;
    });
    return aus;
  }

  /* ================= Stil ================= */
  function stil() {
    if (document.getElementById('vt-stil')) return;
    var st = document.createElement('style'); st.id = 'vt-stil';
    st.textContent = `
/* ---------- Startseite im Schülerbereich ---------- */
.vt-hero{position:relative;overflow:hidden;border-radius:26px;padding:34px 32px;margin-bottom:22px;color:#fff;
  background:linear-gradient(135deg,#0B6157 0%,#14708B 42%,#2CC0AE 100%)}
.vt-hero::after{content:'';position:absolute;right:-70px;top:-70px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.08)}
.vt-hero::before{content:'';position:absolute;right:60px;bottom:-110px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.06)}
.vt-hero-in{position:relative;z-index:1;display:flex;gap:28px;align-items:center;flex-wrap:wrap}
.vt-hero-tx{flex:1;min-width:260px}
.vt-hero h1{font-family:'Space Grotesk',system-ui,sans-serif;font-size:36px;line-height:1.1;margin:0 0 10px;color:#fff}
.vt-hero p{margin:0 0 22px;font-size:16px;line-height:1.6;opacity:.94;max-width:520px}
.vt-serie{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.2);border-radius:999px;padding:7px 15px;font-size:13.5px;font-weight:800;margin-bottom:14px}
.vt-los{border:none;border-radius:16px;background:#fff;color:#0B6157;font-family:inherit;font-size:17px;font-weight:800;
  padding:17px 34px;cursor:pointer;box-shadow:0 12px 30px rgba(0,0,0,.2);transition:transform .16s,box-shadow .16s}
.vt-los:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(0,0,0,.26)}
.vt-ring{position:relative;width:150px;height:150px;flex:none}
.vt-ring svg{transform:rotate(-90deg)}
.vt-ring .zahl{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1}
.vt-ring .zahl b{font-family:'Space Grotesk',system-ui,sans-serif;font-size:38px;font-weight:700}
.vt-ring .zahl small{font-size:12px;font-weight:700;opacity:.88;margin-top:4px}
.vt-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px;margin-bottom:22px}
.vt-kpi{background:#fff;border:1px solid var(--border,#F6F9FA);border-radius:20px;padding:20px 22px;position:relative;overflow:hidden}
.vt-kpi>i{position:absolute;right:16px;top:16px;font-size:26px;font-style:normal;opacity:.9}
.vt-kpi .k{font-size:12.5px;font-weight:800;color:#8A857C;letter-spacing:.04em;text-transform:uppercase}
.vt-kpi .v{font-size:38px;font-weight:800;color:#141414;line-height:1.1;margin-top:4px;font-family:'Space Grotesk',system-ui,sans-serif}
.vt-kpi .d{font-size:13px;color:#8A857C;margin-top:2px}
.vt-kpi .balken{height:7px;border-radius:99px;background:#F6F9FA;margin-top:12px;overflow:hidden}
.vt-kpi .balken>i{position:static;display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#1B9BC0,#2CC0AE);font-size:0}
.vt-zeile{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:14px;color:#6A655C;margin-bottom:10px;font-weight:600}
.vt-zb{border:2px solid var(--border,#F6F9FA);background:#fff;border-radius:999px;padding:9px 18px;font-family:inherit;font-size:14px;font-weight:800;color:#4A4740;cursor:pointer;transition:all .15s}
.vt-zb:hover{border-color:#1B9BC0}
.vt-zb.on{background:#14708B;border-color:#14708B;color:#fff}
.vt-hinweis{background:#F6F9FA;border:1px solid #F0DFA8;border-radius:16px;padding:16px 20px;font-size:14.5px;color:#6B5A22;line-height:1.6}

/* ---------- Vollbild-Runde ---------- */
#vtVoll{position:fixed;inset:0;z-index:900;background:#FAF8F2;display:flex;flex-direction:column;
  font-family:'Inter',system-ui,-apple-system,sans-serif;animation:vtAuf .22s ease}
@keyframes vtAuf{from{opacity:0;transform:scale(.99)}to{opacity:1;transform:none}}
#vtVoll *{box-sizing:border-box}
.vt-top{flex:none;display:flex;align-items:center;gap:18px;padding:18px 26px;background:#fff;border-bottom:1px solid #F6F9FA}
.vt-x{border:none;background:none;font-size:30px;line-height:1;color:#C7D0D4;cursor:pointer;padding:2px 10px;border-radius:11px;flex:none}
.vt-x:hover{background:#F3F0E9;color:#5A5750}
.vt-bar{flex:1;height:16px;border-radius:999px;background:#F6F9FA;overflow:hidden;position:relative}
.vt-bar>i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#1B9BC0,#2CC0AE);
  transition:width .4s cubic-bezier(.3,.9,.3,1);position:relative}
.vt-bar>i::after{content:'';position:absolute;inset:0 0 50% 0;border-radius:999px;background:rgba(255,255,255,.25)}
.vt-top .n{font-size:16px;font-weight:800;color:#6A655C;flex:none;min-width:66px;text-align:right;font-variant-numeric:tabular-nums}
.vt-top .fl{flex:none;display:flex;align-items:center;gap:6px;background:#F6F9FA;color:#8A6D14;border-radius:999px;padding:7px 14px;font-size:14px;font-weight:800}

.vt-buehne{flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;padding:34px 24px 210px}
.vt-karte{width:100%;max-width:860px}
.vt-etikett{display:inline-flex;align-items:center;gap:9px;background:var(--tf,#1B9BC0);color:#fff;border-radius:999px;
  padding:9px 20px;font-size:14px;font-weight:800;margin-bottom:26px}
.vt-etikett .ic{font-size:16px}

.vt-gross{font-family:'Space Grotesk',system-ui,sans-serif;font-size:clamp(34px,5.4vw,58px);font-weight:700;
  line-height:1.12;color:#141414;margin:0 0 14px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.vt-gross.mitte{justify-content:center;text-align:center}
.vt-lauts{border:none;background:#EAF8F5;color:#14708B;width:60px;height:60px;border-radius:19px;font-size:27px;cursor:pointer;
  flex:none;display:inline-flex;align-items:center;justify-content:center;transition:transform .16s,background .2s;vertical-align:middle}
.vt-lauts:hover{background:#D3F0EA;transform:scale(1.05)}
.vt-lauts.klein{width:46px;height:46px;font-size:21px;border-radius:14px}
.vt-tont{transform:scale(1.16)}
.vt-unter{font-size:clamp(17px,2.3vw,22px);color:#5A5750;line-height:1.5;margin:0 0 30px;font-weight:600}
.vt-unter.vt-rtl{direction:rtl;text-align:right}

.vt-artchip{display:inline-block;background:var(--af,#666);color:#fff;border-radius:9px;padding:2px 11px;font-size:.62em;
  font-weight:800;vertical-align:middle;margin-right:12px;font-family:'Inter',system-ui,sans-serif}

.vt-mark{background:linear-gradient(180deg,transparent 52%,#FFE59A 52%);color:inherit;padding:0 3px;border-radius:3px;font-weight:800}
.vt-mark.gruen{background:linear-gradient(180deg,transparent 52%,#A9EBD3 52%)}
.vt-mark.rot{background:linear-gradient(180deg,transparent 52%,#FFC9C9 52%)}

.vt-satzbox{background:#fff;border:2px solid #F6F9FA;border-radius:22px;padding:26px 30px;margin-bottom:28px}
.vt-satz{font-size:clamp(21px,3vw,30px);line-height:1.6;color:#20221F;font-weight:600;margin:0}
.vt-satz-tr{font-size:16px;color:#8A857C;margin-top:12px;line-height:1.5}
.vt-satz-tr.vt-rtl{direction:rtl;text-align:right}

.vt-bild{width:170px;height:170px;border-radius:30px;background:linear-gradient(135deg,#F2F8F6,#E4F2EE);
  display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none;margin:0 auto 26px}
.vt-bild.gr{width:230px;height:230px;border-radius:38px}
.vt-bild.mini{width:64px;height:64px;border-radius:17px;margin:0}
.vt-bild img{width:100%;height:100%;object-fit:cover;display:block}
.vt-bild .vt-em{width:100%;height:100%;align-items:center;justify-content:center;font-size:76px}
.vt-bild.gr .vt-em{font-size:104px}
.vt-bild.mini .vt-em{font-size:30px}

.vt-opt{display:grid;gap:14px}
.vt-opt.zwei{grid-template-columns:1fr 1fr}
.vt-opt.bilder{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))}
.vt-opt.drei{grid-template-columns:repeat(3,1fr)}
.vt-o{position:relative;border:3px solid #E7ECEE;background:#fff;border-radius:20px;padding:22px 26px;font-family:inherit;
  font-size:clamp(17px,2.1vw,21px);font-weight:700;color:#20221F;cursor:pointer;text-align:left;line-height:1.35;
  transition:border-color .16s,background .16s,transform .12s,box-shadow .16s;box-shadow:0 3px 0 #E7ECEE}
.vt-o:hover:not(:disabled){border-color:#1B9BC0;transform:translateY(-2px);box-shadow:0 6px 0 #B9E4DC}
.vt-o:disabled{cursor:default}
.vt-o .taste{position:absolute;left:13px;top:11px;font-size:11px;font-weight:800;color:#C7D0D4;border:1px solid #E7ECEE;border-radius:6px;padding:0 6px}
.vt-o.richtig{border-color:#1B9BC0;background:#E9F9F5;color:#07463E;box-shadow:0 3px 0 #9EDCD0}
.vt-o.falsch{border-color:#E05B5B;background:#F6F9FA;color:#8E2222;box-shadow:0 3px 0 #F2B5B5}
.vt-o.vt-rtl{direction:rtl;text-align:right}
.vt-o.bildo{display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px 14px}
.vt-o.bildo .vt-bild{width:120px;height:120px;margin:0;border-radius:22px}
.vt-o.bildo .vt-bild .vt-em{font-size:56px}
.vt-o.artikel{text-align:center;font-size:clamp(24px,3.4vw,34px);font-weight:800;padding:30px 12px;
  border-color:var(--af);color:var(--af)}
.vt-o.artikel:hover:not(:disabled){border-color:var(--af)}

.vt-eingabe{width:100%;border:3px solid #E7ECEE;border-radius:20px;padding:24px 26px;font-family:inherit;
  font-size:clamp(20px,2.6vw,26px);font-weight:700;color:#20221F;outline:none;background:#fff;box-shadow:0 3px 0 #E7ECEE}
.vt-eingabe:focus{border-color:#1B9BC0;box-shadow:0 3px 0 #B9E4DC}
.vt-eingabe.richtig{border-color:#1B9BC0;background:#E9F9F5}
.vt-eingabe.falsch{border-color:#E05B5B;background:#F6F9FA}

.vt-bau{display:flex;flex-wrap:wrap;gap:11px;min-height:88px;border:3px dashed #E7ECEE;border-radius:20px;
  padding:18px;margin-bottom:16px;align-content:flex-start;background:#fff}
.vt-teile{display:flex;flex-wrap:wrap;gap:11px}
.vt-teil{border:3px solid #E7ECEE;background:#fff;border-radius:15px;padding:13px 20px;font-family:inherit;
  font-size:clamp(16px,2vw,21px);font-weight:700;color:#20221F;cursor:pointer;box-shadow:0 3px 0 #E7ECEE;transition:transform .12s}
.vt-teil:hover{border-color:#1B9BC0;transform:translateY(-2px)}

.vt-hoerknopf{width:150px;height:150px;border-radius:44px;border:none;background:linear-gradient(135deg,#3E5FCC,#6B84E0);
  color:#fff;font-size:60px;cursor:pointer;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;
  box-shadow:0 16px 40px rgba(62,95,204,.36);transition:transform .16s}
.vt-hoerknopf:hover{transform:scale(1.05)}
.vt-langsam{display:block;margin:0 auto 30px;border:2px solid #E7ECEE;background:#fff;border-radius:999px;
  padding:11px 22px;font-family:inherit;font-size:15px;font-weight:700;color:#5A5750;cursor:pointer}
.vt-langsam:hover{border-color:#3E5FCC;color:#3E5FCC}

.vt-fuss{position:fixed;left:0;right:0;bottom:0;z-index:2;background:#fff;border-top:2px solid #F6F9FA;
  padding:20px 26px calc(20px + env(safe-area-inset-bottom));transform:translateY(115%);transition:transform .26s cubic-bezier(.2,.9,.3,1)}
.vt-fuss.an{transform:none}
.vt-fuss.gut{background:#E9F9F5;border-top-color:#9EDCD0}
.vt-fuss.schlecht{background:#F6F9FA;border-top-color:#F2B5B5}
.vt-fuss-in{max-width:860px;margin:0 auto;display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.vt-fuss-tx{flex:1;min-width:230px}
.vt-fuss b{display:flex;align-items:center;gap:10px;font-size:22px;font-family:'Space Grotesk',system-ui,sans-serif;margin-bottom:6px}
.vt-fuss.gut b{color:#0A6157}
.vt-fuss.schlecht b{color:#9E2626}
.vt-fuss .lsg{font-size:17px;color:#2A2721;line-height:1.5;font-weight:600;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.vt-fuss .lsg .vt-lauts{width:38px;height:38px;font-size:17px;border-radius:12px}
.vt-fuss .lsg em{font-style:normal;font-weight:800}
.vt-bed{margin:14px 0 4px}
.vt-bed span{display:block;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
  color:#0A7D72;margin-bottom:6px}
.vt-bed p{margin:0;font-size:17px;line-height:1.55;color:#2A2721}
.vt-satzbox.mitlabel{position:relative;padding-top:26px}
.vt-satzbox.mitlabel::before{content:'Beispiel aus dem Alltag';position:absolute;top:9px;left:16px;
  font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#8A857C}
.vt-fuss .bedz{margin-top:8px;font-size:15px;line-height:1.5;color:#2A2721}
.vt-fuss .bedz b{font-weight:800}
.vt-fuss .bspz{margin-top:8px;font-size:15px;color:#5A5750;line-height:1.5}
.vt-fuss .bspz i{font-style:normal;color:#8A857C;display:block;margin-top:3px}
.vt-fuss .bspz i.vt-rtl{direction:rtl;text-align:right}
.vt-fuss .wieder{margin-top:8px;font-size:13.5px;color:#8A857C;font-weight:600}
.vt-weiter{flex:none;border:none;border-radius:17px;padding:20px 44px;font-family:inherit;font-size:18px;font-weight:800;
  color:#fff;cursor:pointer;background:linear-gradient(135deg,#14708B,#1B9BC0);box-shadow:0 8px 22px rgba(14,124,112,.34);transition:transform .15s}
.vt-weiter:hover{transform:translateY(-2px)}
.vt-weiter.rot{background:linear-gradient(135deg,#C24141,#E05B5B);box-shadow:0 8px 22px rgba(194,65,65,.32)}
.vt-pruefen{width:100%;margin-top:22px;border:none;border-radius:17px;padding:20px;font-family:inherit;font-size:18px;
  font-weight:800;color:#fff;cursor:pointer;background:linear-gradient(135deg,#14708B,#1B9BC0);box-shadow:0 8px 22px rgba(14,124,112,.3)}

.vt-ende{max-width:640px;margin:0 auto;text-align:center;padding-top:20px}
.vt-ende .gr{font-size:96px;line-height:1;margin-bottom:14px;animation:vtHuepf .6s cubic-bezier(.3,1.6,.5,1)}
@keyframes vtHuepf{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.15)}100%{transform:none;opacity:1}}
.vt-ende h2{font-family:'Space Grotesk',system-ui,sans-serif;font-size:42px;margin:0 0 12px;color:#141414}
.vt-ende p{color:#5A5750;font-size:17px;margin:0 0 30px;line-height:1.6}
.vt-ergz{display:flex;gap:16px;justify-content:center;margin-bottom:32px;flex-wrap:wrap}
.vt-ergz div{background:#fff;border:2px solid #F6F9FA;border-radius:20px;padding:20px 30px;min-width:130px}
.vt-ergz b{display:block;font-size:40px;font-family:'Space Grotesk',system-ui,sans-serif;color:#141414;line-height:1.1}
.vt-ergz span{font-size:13.5px;color:#8A857C;font-weight:700}
.vt-liste{text-align:left;margin:0 auto 30px;display:flex;flex-direction:column;gap:10px}
.vt-liste .z{display:flex;align-items:center;gap:14px;background:#fff;border:2px solid #F6F9FA;border-radius:16px;padding:13px 18px}
.vt-liste .z .tx{flex:1;min-width:0}
.vt-liste .z .tx b{display:block;font-size:17px;font-weight:800;color:#20221F}
.vt-liste .z .tx span{font-size:14px;color:#8A857C}
.vt-liste .z .st{font-size:12.5px;font-weight:800;padding:5px 12px;border-radius:999px;flex:none}
.vt-liste .z .st.g{background:#E9F9F5;color:#0A6157}
.vt-liste .z .st.s{background:#F6F9FA;color:#9E2626}
.vt-konfetti{position:fixed;inset:0;pointer-events:none;z-index:3;overflow:hidden}
.vt-konf{position:absolute;width:11px;height:16px;border-radius:2px;animation:vtFall linear forwards}
@keyframes vtFall{to{transform:translateY(105vh) rotate(720deg);opacity:.15}}

/* Wortkarte statt Bild, wenn nichts da ist */
.vt-bild.vt-art{background:linear-gradient(135deg,color-mix(in srgb,var(--tk) 9%,#fff),color-mix(in srgb,var(--tk) 22%,#fff));
  position:relative}
.vt-art-tag{position:absolute;left:12px;bottom:10px;font-family:'Space Grotesk',system-ui,sans-serif;
  font-size:15px;font-weight:700;color:var(--tk);opacity:.8;letter-spacing:.3px;line-height:1}
.vt-bild.gr .vt-art-tag{font-size:19px;left:16px;bottom:14px}
.vt-bild.mini .vt-art-tag{display:none}
.vt-bild.vt-typo{background:linear-gradient(135deg,color-mix(in srgb,var(--tk) 12%,#fff),color-mix(in srgb,var(--tk) 26%,#fff));
  box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--tk) 30%,transparent)}
.vt-typo-b{font-family:'Space Grotesk',system-ui,sans-serif;font-size:64px;font-weight:700;color:var(--tk);line-height:1}
.vt-bild.gr .vt-typo-b{font-size:92px}
.vt-bild.mini .vt-typo-b{font-size:26px}

/* Buchstabensalat */
.vt-bau.vt-buch{gap:8px;min-height:82px;align-items:center}
.vt-teil.vt-bt{min-width:56px;text-align:center;font-size:clamp(20px,2.6vw,28px);padding:12px 10px;font-weight:800}

/* Spiel: Paare finden */
.vt-paare{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.vt-sp{display:flex;flex-direction:column;gap:11px}
.vt-pk{display:flex;align-items:center;gap:11px;border:3px solid #E7ECEE;background:#fff;border-radius:16px;
  padding:16px 18px;font-family:inherit;font-size:clamp(15px,1.9vw,19px);font-weight:700;color:#20221F;
  cursor:pointer;text-align:left;box-shadow:0 3px 0 #E7ECEE;transition:all .15s;min-height:62px}
.vt-pk:hover{border-color:#C7457F;transform:translateY(-2px)}
.vt-pk .e{font-size:23px;flex:none}
.vt-pk.gewaehlt{border-color:#C7457F;background:#FDF0F6;box-shadow:0 3px 0 #F0B9D4}
.vt-pk.daneben{border-color:#E05B5B;background:#F6F9FA;animation:vtWackel .3s}
@keyframes vtWackel{0%,100%{transform:none}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.vt-pk.fertig{border-color:#1B9BC0;background:#E9F9F5;color:#0A6157;box-shadow:0 3px 0 #9EDCD0;cursor:default;opacity:.75}
.vt-pk.vt-rtl{direction:rtl;text-align:right}
@media(max-width:760px){
  .vt-paare{gap:10px}
  .vt-pk{padding:13px 13px;min-height:54px;border-radius:13px;font-size:14.5px;gap:8px}
  .vt-pk .e{font-size:19px}
}

.vt-leer{background:#fff;border:2px dashed #E7ECEE;border-radius:22px;padding:40px;text-align:center;color:#6A655C;font-size:16px;line-height:1.65}

@media(max-width:760px){
  .vt-hero{padding:26px 22px;border-radius:22px}
  .vt-hero h1{font-size:29px}
  .vt-hero-in{gap:18px}
  .vt-ring{width:110px;height:110px}
  .vt-ring .zahl b{font-size:29px}
  .vt-top{padding:13px 15px;gap:12px}
  .vt-top .fl{display:none}
  .vt-buehne{padding:24px 16px 240px}
  .vt-opt.drei{grid-template-columns:1fr}
  .vt-opt.zwei{grid-template-columns:1fr}
  .vt-o{padding:18px 20px;border-radius:17px}
  .vt-o .taste{display:none}
  .vt-satzbox{padding:20px 18px;border-radius:18px}
  .vt-fuss{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}
  .vt-fuss-in{gap:14px}
  .vt-weiter{width:100%;padding:18px}
  .vt-ende h2{font-size:31px}
  .vt-ende .gr{font-size:72px}
  .vt-hoerknopf{width:120px;height:120px;font-size:48px;border-radius:36px}
}
`;
    document.head.appendChild(st);
  }

  /* ================= Startseite ================= */
  function ring(heute, ziel) {
    var p = ziel ? Math.min(1, heute / ziel) : 0, r = 64, u = 2 * Math.PI * r;
    return '<div class="vt-ring"><svg width="150" height="150" viewBox="0 0 150 150">'
      + '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="rgba(255,255,255,.24)" stroke-width="13"/>'
      + '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" '
      + 'stroke-dasharray="' + u + '" stroke-dashoffset="' + (u * (1 - p)) + '"/></svg>'
      + '<div class="zahl"><b>' + heute + '</b><small>von ' + ziel + ' heute</small></div></div>';
  }

  /* ============================================================
     Die Uebersicht: Tagesdosis oben, Kaesten in der Mitte,
     Herkunft unten.

     Warum diese Reihenfolge: eine Tagesrunde mit Ziellinie bringt
     den Schueler morgen wieder. Die Kaesten machen sichtbar, dass
     etwas passiert — ein Wort wandert nach rechts, wenn man es
     konnte, und faellt zurueck, wenn nicht. Die Herkunft ist der
     Gedaechtnishaken: „die Woerter von deiner Arzt-Stunde" behaelt
     man, eine alphabetische Liste nicht.
     ============================================================ */

  /* Die fuenf Kaesten liegen auf den Stufen, die der Server schon
     fuehrt. Die Abstaende stehen in naechsterAbstand(): 1, 3, 7,
     16, 35, 75 Tage. */
  var KAESTEN = [
    { id: 0, nm: 'Neu',       wann: 'noch nie geübt',      von: -1, bis: 0 },
    { id: 1, nm: 'Frisch',    wann: 'morgen wieder',       von: 1,  bis: 1 },
    { id: 2, nm: 'Wackelig',  wann: 'in 3 bis 7 Tagen',    von: 2,  bis: 3 },
    { id: 3, nm: 'Sitzt',     wann: 'in 2 bis 5 Wochen',   von: 4,  bis: 5 },
    { id: 4, nm: 'Fest',      wann: 'in etwa 10 Wochen',   von: 6,  bis: 9 }
  ];

  function stufeVon(v) {
    var b = BEKANNT[v.id];
    if (!b) return 0;
    return Math.max(0, b.stufe || 0);
  }
  function kastenVon(v) {
    var st = stufeVon(v);
    for (var i = KAESTEN.length - 1; i >= 0; i--) {
      if (st >= KAESTEN[i].von && st <= KAESTEN[i].bis) return i;
    }
    return 0;
  }
  function istFaellig(v) {
    var b = BEKANNT[v.id];
    if (!b) return false;
    var heute = new Date().toISOString().slice(0, 10);
    return !!(b.faellig && b.faellig <= heute);
  }
  function aergertMich(v) {
    var b = BEKANNT[v.id];
    return !!(b && (b.falsch || 0) >= 2);
  }

  /* Die Portion baut sich selbst: alles Faellige plus hoechstens
     fuenf neue. Nach einer Stunde mit viel neuem Wortschatz wird
     der Tag von selbst laenger, an ruhigen Tagen kurz. Nach oben
     gedeckelt, damit es nie erschlagend wird. */
  function tagesplan() {
    var alle = alleWoerter();
    var faellig = alle.filter(istFaellig);
    var neuDa = alle.filter(function (v) { return !BEKANNT[v.id]; });
    var neu = Math.min(5, neuDa.length);
    var gesamt = Math.min(30, faellig.length + neu);
    if (!gesamt) gesamt = Math.min(8, neuDa.length);
    return {
      faellig: faellig.length,
      neu: neu,
      neuDa: neuDa.length,
      gesamt: gesamt,
      minuten: Math.max(2, Math.round(gesamt * 0.35))
    };
  }

  /* Woher die Woerter kommen. Live-Woerter tragen ihre Stunde,
     Kurswoerter ihr Thema. Mehr als sechs Regale zeigen wir nicht —
     danach faengt es wieder an, eine Liste zu werden. */
  function herkunft() {
    var g = {};
    alleWoerter().forEach(function (v) {
      var nm = (v.quelle === 'live' ? (v.thema || 'Deine Stunde') : (v.thema || v.kurs || 'Kurs'));
      if (!nm) return;
      if (!g[nm]) g[nm] = { nm: nm, live: v.quelle === 'live', n: 0, sitzt: 0 };
      g[nm].n++;
      if (stufeVon(v) >= 4) g[nm].sitzt++;
    });
    return Object.keys(g).map(function (k) { return g[k]; })
      .sort(function (a, b) { return (b.live - a.live) || (b.n - a.n); })
      .slice(0, 8);
  }

  /* Alle Woerter nach Thema buendeln, auf Wunsch nur ein Niveau.
     Jedes Wort im Pool hat einen Beispielsatz (nachgezaehlt: 1043 von
     1043), darum ist jedes Thema auch wirklich uebbar. */
  function themenNach(niveau) {
    var g = {};
    alleWoerter().forEach(function (v) {
      if (niveau && v.niveau !== niveau) return;
      var nm = v.thema || v.kurs || 'Ohne Thema';
      if (!g[nm]) g[nm] = { nm: nm, n: 0, sitzt: 0, neu: 0, woerter: [] };
      g[nm].n++;
      g[nm].woerter.push(v);
      if (stufeVon(v) >= 4) g[nm].sitzt++;
      if (!BEKANNT[v.id]) g[nm].neu++;
    });
    return Object.keys(g).map(function (k) { return g[k]; })
      .sort(function (a, b) { return a.nm.localeCompare(b.nm, 'de'); });
  }

  /* Welche Niveaus kommen ueberhaupt vor, und mit wie vielen Woertern?
     Nur die zeigen wir als Knopf — eine leere Stufe waere eine
     Sackgasse. */
  function niveauZaehlung() {
    var z = {};
    alleWoerter().forEach(function (v) { var n = v.niveau || ''; if (n) z[n] = (z[n] || 0) + 1; });
    return STUFEN.filter(function (n) { return z[n]; }).map(function (n) { return { n: n, anzahl: z[n] }; });
  }

  function vpZahl(n, wort1, wort2) {
    return n + ' ' + (n === 1 ? wort1 : wort2);
  }

  /* ============================================================
     21.11.2026 Ausbau, Julia: „richtig schön professionell, bildlich,
     mit Markierungen … der Vokabeltrainer muss richtig gut ausgebaut
     werden“. Dazu kommen: der Lernweg eines Wortes als Leitfaden,
     „Meine Wörter“ (aus vokabel_eigene, also auch alles, was jemand im
     Üben mit einem Tipp hinzugefügt hat), eine Suche über alle Wörter
     mit Markierung, ein Steckbrief beim neuen Wort und in der
     Rückmeldung die Wanderung von Kasten zu Kasten.
     Farben je Kasten: Schwarz, Rot, Gold, Türkis, Petrol.
     ============================================================ */
  var K_FARBE = ['#14181B', '#D42A21', '#E0A800', '#1B9BC0', '#0E6D85'];
  var LV_FARBE = { A1: '#1B9BC0', A2: '#0E6D85', B1: '#E0A800', B2: '#D42A21', C1: '#14181B', C2: '#14181B' };
  var ART_NAME = { nomen: 'Nomen', verb: 'Verb', adjektiv: 'Adjektiv', adverb: 'Adverb', ausdruck: 'Ausdruck', wendung: 'Wendung' };
  var SUCHE = [], MEINE = [], MEINE_ALLE = false;

  function kastenAusStufe(st) {
    for (var i = KAESTEN.length - 1; i >= 0; i--) { if (st >= KAESTEN[i].von && st <= KAESTEN[i].bis) return i; }
    return 0;
  }
  function kastenPill(v) {
    var i = kastenVon(v);
    return '<span class="vbx-kp" style="--kf:' + K_FARBE[i] + '">' + esc(KAESTEN[i].nm)
      + (istFaellig(v) ? ' · fällig' : '') + '</span>';
  }
  function steckbrief(v) {
    var t = [];
    if (v.niveau) t.push('<span class="lv" style="--lf:' + (LV_FARBE[v.niveau] || '#0E6D85') + '">' + esc(v.niveau) + '</span>');
    var a = ART_NAME[String(v.art || '').toLowerCase()];
    if (!a && v.artikel) a = 'Nomen';
    if (a) t.push('<span>' + a + '</span>');
    if (v.thema) t.push('<span>' + esc(v.thema) + '</span>');
    return t.length ? '<div class="vbx-steck">' + t.join('') + '</div>' : '';
  }
  function wanderung(alt, neu) {
    var a = kastenAusStufe(Math.max(0, alt)), b = kastenAusStufe(Math.max(0, neu));
    var pfeil = b > a ? 'hoch' : b < a ? 'runter' : 'bleibt';
    return '<div class="vbx-wander ' + pfeil + '">'
      + KAESTEN.map(function (k, i) {
        return '<span class="' + (i === b ? 'ziel' : i === a ? 'start' : '') + '" style="--kf:' + K_FARBE[i] + '">' + esc(k.nm) + '</span>';
      }).join('') + '</div>';
  }
  function markTreffer(t, such) {
    t = String(t || '');
    var i = t.toLowerCase().indexOf(String(such || '').toLowerCase());
    if (!such || i < 0) return esc(t);
    return esc(t.slice(0, i)) + '<mark class="vbx-such">' + esc(t.slice(i, i + such.length)) + '</mark>' + esc(t.slice(i + such.length));
  }
  function wortZeile(v, such) {
    var w = (v.wort || v.de || '').trim();
    return '<div class="vbx-wz" role="button" tabindex="0" data-id="' + esc(v.id) + '" onclick="__vtWortkarte(event,this)">' + bildEmoji(v, 'mini')
      /* Artikel nur bei Nomen: im Pool tragen auch Wendungen wie „passt mir gut.“ einen */
      + '<div class="tx"><b>' + (/^[A-ZÄÖÜ]/.test(w) ? artikelChip(v.artikel) : '') + '<span class="w">' + (such ? markTreffer(w, such) : esc(w)) + '</span></b>'
      + (v.bedeutung ? '<span class="bed">' + (such ? markTreffer(v.bedeutung, such) : esc(v.bedeutung)) + '</span>' : '')
      + (v.bsp ? '<span class="bsp">' + satzMarkiert(v.bsp, w) + '</span>' : '')
      + '</div><div class="re">' + kastenPill(v) + lauts(v.de || w, 1) + '</div></div>';
  }

  /* ============================================================
     22.11.2026, Julia: „den Vokabeltrainer auch übungstechnisch so
     gestalten, dass die Wörter durch verschiedene Übungen trainiert
     werden können“. Neben der Tagesrunde (gemischt, nach Plan) gibt es
     jetzt jede Übungsart einzeln: 13 Arten, jeweils 10 Wörter aus der
     gewählten Quelle (schon gelernte Wörter, Meine Wörter oder ein
     Niveau). Fällige Wörter kommen zuerst. Jede Antwort zählt für den
     Wiederholungsplan wie in der Tagesrunde.
     ============================================================ */
  var TRAIN_TYP = '', TRAIN_QUELLE = 'gelernt';
  function einzelnesWort(v) { return !/\s/.test(String(v.wort || v.de || '').trim()); }
  function satzbauOk(v) {
    if (!v.bsp || !istSatz(v) || !bspMitWort(v)) return false;
    var n = v.bsp.trim().split(/\s+/).length;
    return n >= 4 && n <= 10;
  }
  var TRAINING = [
    { typ: 'karte', nm: 'Karteikarten', tx: 'Wort ansehen, Karte umdrehen, ehrlich bewerten.', f: '#E0A800', ok: function () { return true; } },
    { typ: 'bild', nm: 'Bild zuordnen', tx: 'Zum Wort das passende Foto finden.', f: '#1B9BC0', ok: function (v) { return hatBild(v); } },
    { typ: 'erklaerung', nm: 'Erklärung zum Wort', tx: 'Eine Erklärung lesen und das passende Wort wählen.', f: '#0E6D85', ok: function (v) { return erklaerungOk(v); } },
    { typ: 'bedeutung', nm: 'Was bedeutet das?', tx: 'Zum Wort die richtige Erklärung finden.', f: '#0E6D85', ok: function (v) { return erklaerungOk(v); } },
    { typ: 'artikel', nm: 'der, die, das', tx: 'Bei jedem Nomen den Artikel wählen.', f: '#1B9BC0', ok: function (v) { return artikelFrage(v); } },
    { typ: 'hoeren', nm: 'Hören', tx: 'Wort hören und richtig antippen.', f: '#1B9BC0', ok: function () { return true; } },
    { typ: 'diktat', nm: 'Diktat', tx: 'Wort hören und selbst schreiben.', f: '#D42A21', ok: function (v) { return einzelnesWort(v); } },
    { typ: 'tippen', nm: 'Schreiben', tx: 'Mit Foto und Erklärung das Wort schreiben.', f: '#D42A21', ok: function (v) { return einzelnesWort(v) && (erklaerungOk(v) || hatBild(v)); } },
    { typ: 'buchstaben', nm: 'Buchstabensalat', tx: 'Das Wort aus seinen Buchstaben bauen.', f: '#D42A21', ok: function (v) { var w = String(v.wort || v.de || '').trim(); return einzelnesWort(v) && w.length <= 13; } },
    { typ: 'luecke', nm: 'Lückensätze', tx: 'Das fehlende Wort im Satz finden.', f: '#14181B', ok: function (v) { return !!luecken(v); } },
    { typ: 'satzhoeren', nm: 'Satz hören', tx: 'Den Satz hören und die Lücke füllen.', f: '#14181B', ok: function (v) { return !!luecken(v); } },
    { typ: 'satzbau', nm: 'Sätze bauen', tx: 'Den Beispielsatz in die richtige Reihenfolge bringen.', f: '#14181B', ok: satzbauOk },
    { typ: 'paare', nm: 'Paare finden', tx: 'Wörter und Fotos verbinden, je vier auf einmal.', f: '#D42A21', ok: function (v) { return hatBild(v) && v.art === 'nomen' && artikelFrage(v); } }
  ];
  var QUELLEN = [
    { id: 'gelernt', nm: 'Schon gelernt' },
    { id: 'meine', nm: 'Meine Wörter' },
    { id: 'niveau', nm: 'Mein Niveau' }
  ];
  function trainPool() {
    var alle = alleWoerter(), pool;
    if (TRAIN_QUELLE === 'meine') pool = alle.filter(function (v) { return v.eigen; });
    else if (TRAIN_QUELLE === 'gelernt') pool = alle.filter(function (v) { return !!BEKANNT[v.id]; });
    else pool = NIVEAU_FILTER ? alle.filter(function (v) { return v.niveau === NIVEAU_FILTER; }) : alle;
    return pool;
  }
  function trainingHtml() {
    var pool = trainPool();
    var h = '<header><h3>Üben nach Übungsart</h3>'
      + '<p>Trainiere deine Wörter gezielt mit einer Übung. Jede Runde hat bis zu 10 Wörter, die fälligen zuerst, und zählt für deinen Wiederholungsplan.</p></header>'
      + '<div class="vbx-quellen" role="tablist">' + QUELLEN.map(function (q) {
        var n = q.id === TRAIN_QUELLE ? pool.length : null;
        return '<button type="button" class="vp-nchip' + (q.id === TRAIN_QUELLE ? ' an' : '') + '" onclick="__vtQuelle(\'' + q.id + '\')">'
          + esc(q.id === 'niveau' && NIVEAU_FILTER ? 'Niveau ' + NIVEAU_FILTER : q.nm) + (n != null ? ' <i>' + n + '</i>' : '') + '</button>';
      }).join('') + '</div>';
    if (pool.length < 4) {
      h += '<div class="vbx-leerkarte"><span class="ic">i</span><div><b>Hier sind noch zu wenige Wörter</b><span>'
        + (TRAIN_QUELLE === 'gelernt' ? 'Mach erst ein paar Tagesrunden. Sobald du Wörter kennengelernt hast, kannst du sie hier mit jeder Übung trainieren.'
          : TRAIN_QUELLE === 'meine' ? 'Füg im Bereich Üben Wörter mit „In den Vokabeltrainer“ hinzu.'
          : 'Wähl oben bei den Themen ein anderes Niveau.')
        + '</span></div></div>';
      return h;
    }
    h += '<div class="vbx-tr">' + TRAINING.map(function (t) {
      var n = pool.filter(t.ok).length;
      var geht = t.typ === 'paare' ? n >= 4 : n >= 3;
      return '<button type="button" class="vbx-trk" style="--tf:' + t.f + '"' + (geht ? ' onclick="__vtTraining(\'' + t.typ + '\')"' : ' disabled') + '>'
        + '<b>' + esc(t.nm) + '</b><span>' + esc(t.tx) + '</span>'
        + '<i>' + (geht ? vpZahl(n, 'Wort', 'Wörter') : 'zu wenige Wörter') + '</i></button>';
    }).join('') + '</div>';
    return h;
  }
  window.__vtQuelle = function (q) {
    TRAIN_QUELLE = q;
    var vz = document.getElementById('v-vokabeln'); if (vz) vz.__vbxHtml = null;
    var el = document.getElementById('vbxTraining');
    if (el) el.innerHTML = trainingHtml();
  };
  window.__vtTraining = function (typ) {
    var t = TRAINING.filter(function (x) { return x.typ === typ; })[0];
    if (!t) return;
    var w = trainPool().filter(t.ok);
    if (!w.length) return;
    /* fällig zuerst, dann was am wenigsten sitzt, sonst zufällig */
    w = mische(w).sort(function (a, b) {
      return ((istFaellig(b) ? 1 : 0) - (istFaellig(a) ? 1 : 0)) || (stufeVon(a) - stufeVon(b));
    });
    SERIE = {}; POS = 0; ERG = []; LAEUFT = true;
    if (typ === 'paare') {
      RUNDE = [];
      for (var i = 0; i + 4 <= Math.min(w.length, 12); i += 4) RUNDE.push({ spiel: 'paare', bild: true, woerter: w.slice(i, i + 4) });
    } else {
      RUNDE = w.slice(0, 10).map(function (v) { return { v: v, typ: typ, letzte: true }; });
    }
    TRAIN_TYP = typ;
    if (!RUNDE.length) { LAEUFT = false; return; }
    zeichne();
  };

  /* Karteikarte: umdrehen, dann selbst bewerten */
  window.__vtDrehen = function () {
    var h = document.querySelector('#vtKarte .vbx-hinten'); if (h) h.hidden = false;
    var b = document.getElementById('vbxDreh'); if (b) b.style.display = 'none';
    var s2 = document.getElementById('vbxSelbst'); if (s2) s2.hidden = false;
    try { var a = RUNDE[POS]; if (a && a.v && a.v.bsp) sprich(a.v.bsp, 0.9); } catch (e) {}
  };
  window.__vtSelbst = function (ok) {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var a = RUNDE[POS]; if (!a) return;
    if (!ok) SERIE[a.v.id] = true;
    if (a.letzte) ERG.push({ v: a.v, richtig: ok });
    window.__vtAntwort();
  };

  /* 22.11.2026: Jedes Wort in „Meine Wörter“ und in der Suche öffnet eine
     Wortkarte: großes Bild, Bedeutung, markierter Satz, „Gut zu wissen“,
     in welchem Kasten es liegt und wann es wiederkommt. Von dort lässt
     sich genau dieses Wort üben. */
  function wiederWann(v) {
    var b = BEKANNT[v.id];
    if (!b) return 'Noch nicht geübt. In der Tagesrunde lernst du es kennen.';
    if (istFaellig(v)) return 'Heute fällig.';
    if (b.faellig) {
      var d = new Date(b.faellig + 'T12:00:00');
      if (!isNaN(d)) return 'Kommt wieder am ' + d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }) + '.';
    }
    return 'Kommt wieder, wenn es Zeit zum Auffrischen ist.';
  }
  window.__vtWortkarte = function (ev, el) {
    if (ev && ev.target && ev.target.closest && ev.target.closest('.vt-lauts')) return;
    var id = el && el.getAttribute('data-id');
    var v = alleWoerter().filter(function (x) { return x.id === id; })[0];
    if (!v) return;
    var w = (v.wort || v.de || '').trim(), k = kastenVon(v);
    var alt = document.getElementById('vbxSheet'); if (alt) alt.remove();
    var d = document.createElement('div');
    d.id = 'vbxSheet'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true');
    d.innerHTML = '<div class="vbx-sh-bg" onclick="__vtWortkarteZu()"></div><div class="vbx-sh">'
      + '<button class="vbx-sh-x" onclick="__vtWortkarteZu()" aria-label="Schließen">×</button>'
      + '<div class="vbx-sh-kopf">' + bildEmoji(v, 'gr')
      + '<div><h2>' + (/^[A-ZÄÖÜ]/.test(w) ? artikelChip(v.artikel) : '') + esc(w) + ' ' + lauts(v.de || w) + '</h2>' + steckbrief(v) + '</div></div>'
      + (v.bedeutung ? '<div class="vbx-sh-b"><span>Bedeutung</span><p>' + esc(v.bedeutung) + '</p></div>' : '')
      + (v.bsp ? '<div class="vbx-sh-b satz"><span>Beispiel</span><p>' + satzMarkiert(v.bsp, w) + ' ' + lauts(v.bsp, 1) + '</p></div>' : '')
      + (v.hinweis ? '<div class="vbx-sh-b gut"><span>Gut zu wissen</span><p>' + esc(v.hinweis) + '</p></div>' : '')
      + '<div class="vbx-sh-stand">' + wanderungStatisch(k) + '<p>' + esc(wiederWann(v)) + '</p></div>'
      + '<div class="vbx-knoepfe"><button class="vbx-b" type="button" onclick="__vtWortUeben(\'' + esc(v.id).replace(/'/g, '') + '\')">Dieses Wort üben</button>'
      + '<button class="vbx-b hell" type="button" onclick="__vtWortkarteZu()">Schließen</button></div>'
      + '</div>';
    document.body.appendChild(d);
    document.addEventListener('keydown', wortkarteTaste);
  };
  function wortkarteTaste(e) { if (e.key === 'Escape') window.__vtWortkarteZu(); }
  window.__vtWortkarteZu = function () {
    var d = document.getElementById('vbxSheet'); if (d) d.remove();
    document.removeEventListener('keydown', wortkarteTaste);
  };
  window.__vtWortUeben = function (id) {
    window.__vtWortkarteZu();
    var v = alleWoerter().filter(function (x) { return x.id === id; })[0];
    if (v) runde([v]);
  };
  function wanderungStatisch(k) {
    return '<div class="vbx-sh-kaesten">' + KAESTEN.map(function (x, i) {
      return '<span class="' + (i === k ? 'hier' : '') + '" style="--kf:' + K_FARBE[i] + '">' + esc(x.nm) + '</span>';
    }).join('') + '</div>';
  }

  function lernweg(offen) {
    var schritte = [
      ['#E0A800', 'Kennenlernen', 'Bild, Bedeutung und ein Satz aus dem Alltag. Das Wort ist im Satz markiert.'],
      ['#1B9BC0', 'Erkennen', 'Hören, das passende Bild finden, der, die oder das wählen.'],
      ['#D42A21', 'Anwenden', 'Das Wort in die Lücke setzen, den Satz bauen, es selbst schreiben.'],
      ['#0E6D85', 'Wiederholen', 'Morgen, dann nach 3, 7, 16, 35 und 75 Tagen. Genau dann, wenn du es sonst vergessen würdest.']
    ];
    return '<section class="vp-teil"><details class="vbx-weg"' + (offen ? ' open' : '') + '><summary>'
      + '<span><b>So lernst du ein Wort</b><i>Vier Schritte, der Trainer plant die Wiederholungen für dich</i></span></summary>'
      + '<ol class="vbx-schritte">' + schritte.map(function (x, i) {
        return '<li style="--sf:' + x[0] + '"><span class="nr">' + (i + 1) + '</span><b>' + x[1] + '</b><span>' + x[2] + '</span></li>';
      }).join('') + '</ol>'
      + '<p class="vbx-weg-fuss">Pro Tag kommen alle fälligen Wörter und höchstens fünf neue dazu. '
      + 'Ein Fehler schickt das Wort einen Kasten zurück, am Ende der Runde kommt es gleich noch einmal.</p>'
      + '</details></section>';
  }

  function meineWoerter(alle) {
    MEINE = alle.filter(function (v) { return v.eigen; }).reverse();
    var h = '<section class="vp-teil vbx-meine"><header><h3>Meine Wörter</h3>'
      + '<p>Wörter, die du dir selbst gemerkt hast: im Üben mit einem Tipp auf „In den Vokabeltrainer“ oder aus einem Gespräch.</p></header>';
    if (!MEINE.length) {
      return h + '<div class="vbx-leerkarte"><span class="ic">+</span><div><b>Noch leer</b>'
        + '<span>Im Bereich Üben steht bei neuen Wörtern der Knopf „In den Vokabeltrainer“. Ein Tipp, und das Wort steht hier und kommt in deine Wiederholungen.</span></div>'
        + '<a class="vbx-b hell" href="#ueben">Zum Üben</a></div></section>';
    }
    var zeig = MEINE_ALLE ? MEINE : MEINE.slice(0, 6);
    h += '<div class="vbx-liste" id="vbxMeine">' + zeig.map(function (v) { return wortZeile(v); }).join('') + '</div>'
      + '<div class="vbx-knoepfe"><button class="vbx-b" type="button" onclick="__vtEigene()">'
      + vpZahl(Math.min(MEINE.length, 20), 'Wort üben', 'Wörter üben') + '</button>'
      + (MEINE.length > 6 && !MEINE_ALLE ? '<button class="vbx-b hell" type="button" onclick="__vtEigeneAlle()">Alle ' + MEINE.length + ' zeigen</button>' : '')
      + '</div></section>';
    return h;
  }

  function nachschlagen() {
    return '<section class="vp-teil vbx-nach"><header><h3>Wort nachschlagen</h3>'
      + '<p>Such ein Wort oder eine Bedeutung. Du siehst den Beispielsatz und wie gut das Wort schon sitzt.</p></header>'
      + '<label class="vbx-suche"><span aria-hidden="true">&#9906;</span>'
      + '<input type="search" id="vbxSuche" placeholder="z. B. Termin, Wohnung, sich bewerben" autocomplete="off" oninput="__vtSuche(this)"></label>'
      + '<div id="vbxTreffer" class="vbx-liste"></div></section>';
  }

  function runde(w) {
    if (!w || !w.length) return;
    SERIE = {}; TRAIN_TYP = ''; RUNDE = baueRundeAus(w.slice(0, 20)); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) { LAEUFT = false; return; }
    zeichne();
  }
  window.__vtEigene = function () {
    runde(MEINE.slice().sort(function (a, b) { return stufeVon(a) - stufeVon(b); }));
  };
  window.__vtEigeneAlle = function () {
    MEINE_ALLE = true;
    var el = document.getElementById('vbxMeine');
    if (el) el.innerHTML = MEINE.map(function (v) { return wortZeile(v); }).join('');
    var b = document.querySelector('.vbx-meine .vbx-b.hell'); if (b) b.remove();
  };
  window.__vtSuche = function (inp) {
    var such = String((inp && inp.value) || '').trim();
    var box = document.getElementById('vbxTreffer'); if (!box) return;
    if (such.length < 2) { SUCHE = []; box.innerHTML = ''; return; }
    var n = normal(such), alle = alleWoerter();
    var vorn = alle.filter(function (v) { return normal(v.wort || v.de).indexOf(n) === 0; });
    var drin = {}; vorn.forEach(function (v) { drin[v.id] = 1; });
    var sonst = alle.filter(function (v) {
      return !drin[v.id] && (normal(v.de).indexOf(n) > -1 || normal(v.bedeutung).indexOf(n) > -1);
    });
    SUCHE = vorn.concat(sonst).slice(0, 12);
    box.innerHTML = SUCHE.length
      ? SUCHE.map(function (v) { return wortZeile(v, such); }).join('')
        + '<div class="vbx-knoepfe"><button class="vbx-b" type="button" onclick="__vtSucheUeben()">'
        + (SUCHE.length === 1 ? 'Dieses Wort üben' : 'Diese ' + SUCHE.length + ' Wörter üben') + '</button></div>'
      : '<p class="vbx-nichts">Kein Wort gefunden. Versuch es mit dem Wortanfang.</p>';
  };
  window.__vtSucheUeben = function () { runde(SUCHE); };
  /* Nur zum Prüfen (Vorschau-Skripte): eine Aufgabenart zu einem Wort. */
  window.__vtProbe = function (typ, id) {
    var v = alleWoerter().filter(function (x) { return x.id === id; })[0];
    if (!v) return false;
    SERIE = {}; TRAIN_TYP = ''; POS = 0; ERG = []; LAEUFT = true;
    RUNDE = typ === 'paare'
      ? [{ spiel: 'paare', bild: true, woerter: alleWoerter().filter(function (x) { return hatBild(x) && x.art === 'nomen' && x.id !== v.id; }).slice(0, 3).concat([v]) }]
      : [{ v: v, typ: typ, letzte: true }];
    zeichne(); return true;
  };
  window.__vtTest = { luecke: function (v) { return !!luecken(v); }, satzMarkiert: satzMarkiert, istSatz: istSatz, erklaerungOk: erklaerungOk, typFuer: function (id, st) {
    var v = alleWoerter().filter(function (x) { return x.id === id; })[0]; var alt = BEKANNT[id];
    BEKANNT[id] = { stufe: st }; var t = typFuer(v); if (alt) BEKANNT[id] = alt; else delete BEKANNT[id]; return t; } };

  function startbild() {
    /* Beim ersten Öffnen auf der eigenen Stufe (fuer-dich.js). Erst wenn
       ICH da ist, gilt es als erledigt, sonst bliebe es für immer auf „Alle“. */
    if (!NIVEAU_VOREINGESTELLT && window.ICH) {
      NIVEAU_VOREINGESTELLT = true;
      try { var meine = window.ICH.niveau(); if (themenNach(meine).length) NIVEAU_FILTER = meine; } catch (e) {}
    }
    var plan = tagesplan();
    var heute = STAND.heute || 0, serie = STAND.serie || 0;
    var alle = alleWoerter();
    var fertig = plan.gesamt === 0 || (heute >= plan.gesamt && plan.faellig === 0);
    var aerger = alle.filter(aergertMich);
    var zaehl = KAESTEN.map(function () { return 0; });
    alle.forEach(function (v) { if (BEKANNT[v.id] || v.quelle === 'live' || true) zaehl[kastenVon(v)]++; });
    var geuebt = alle.length - zaehl[0];
    var ersterTag = geuebt === 0;

    var h = '<div class="vp" lang="de">';

    /* ---------- 1  Heute ---------- */
    h += '<div class="vp-heute vpx-held' + (fertig ? ' fertig' : '') + '">'
      + '<div class="tx">'
      + (serie > 0 ? '<span class="vp-serie">' + vpZahl(serie, 'Tag', 'Tage') + ' am Stück</span>' : '')
      + '<span class="vp-zuruf">' + (fertig ? 'Für heute reicht das' : 'Heute dran') + '</span>';

    if (fertig) {
      h += '<h2>Fertig für heute</h2>'
        + '<p>' + (plan.neuDa
          ? 'Wenn du magst, häng noch eine Runde an. Es warten noch ' + vpZahl(plan.neuDa, 'neues Wort', 'neue Wörter') + '.'
          : 'Alles wiederholt. Neue Wörter kommen automatisch aus deiner nächsten Stunde.') + '</p>'
        + (plan.neuDa ? '<button class="vp-los" onclick="__vtStart()">Noch eine Runde</button>' : '');
    } else if (ersterTag) {
      h += '<h2>Deine ersten Wörter warten</h2>'
        + '<p>' + vpZahl(plan.gesamt, 'Wort', 'Wörter') + ' für den Anfang, etwa ' + plan.minuten + ' Minuten. '
        + 'In drei Tagen siehst du hier unten, was schon sitzt.</p>'
        + '<button class="vp-los" onclick="__vtStart()">Losgehen</button>';
    } else {
      h += '<h2>' + vpZahl(plan.gesamt, 'Wort ist dran', 'Wörter sind dran') + '</h2>'
        + '<p>'
        + (plan.faellig ? '<b>' + vpZahl(plan.faellig, 'Wort', 'Wörter') + '</b> zum Auffrischen' : 'Nichts fällig')
        + (plan.neu ? ' und ' + vpZahl(plan.neu, 'neues dazu', 'neue dazu') : '')
        + ' · etwa ' + plan.minuten + ' Minuten.</p>'
        + '<button class="vp-los" onclick="__vtStart()">Losgehen</button>';
    }
    /* 14.11.2026: Foto statt Amanda-Zeichnung, wie in den anderen
       Bereichen. Fehlt es, kommt Amanda wie vorher. */
    var amandaBild = (window.AmandaBild ? window.AmandaBild(fertig ? 'pokal' : 'lesen') : 'amanda/a-lesen.webp');
    h += '</div><span class="vpx-bild"><img src="bilder/bereich/vk-hero.webp" alt="" '
      + 'onerror="if(this.dataset.f){this.parentNode.remove()}else{this.dataset.f=1;this.parentNode.className=\'vpx-bild amanda\';this.src=\'' + amandaBild + '\'}"></span></div>';

    /* ---------- 2  Die fuenf Kaesten ---------- */
    h += '<section class="vp-teil"><header><h3>Deine Wortkästen</h3>'
      + '<p>Ein Wort wandert nach rechts, wenn du es konntest, und fällt zurück, wenn nicht. Tipp auf einen Kasten, um nur diese Wörter zu üben.</p></header>'
      + '<div class="vp-kaesten">';
    var faelligK = KAESTEN.map(function () { return 0; });
    alle.forEach(function (v) { if (istFaellig(v)) faelligK[kastenVon(v)]++; });
    KAESTEN.forEach(function (k, i) {
      var n = zaehl[i];
      h += '<button class="vp-kasten' + (n ? '' : ' leer') + '" type="button" style="--kf:' + K_FARBE[i] + '"'
        + (n ? ' onclick="__vtKasten(' + i + ')"' : ' disabled')
        + '>' + (faelligK[i] ? '<span class="vbx-faellig">' + faelligK[i] + ' fällig</span>' : '')
        + '<span class="nr">' + (i + 1) + '</span>'
        + '<b>' + esc(k.nm) + '</b>'
        + '<span class="v">' + n + '</span>'
        + '<span class="w">' + esc(k.wann) + '</span></button>';
    });
    h += '</div></section>';

    h += lernweg(ersterTag) + '<section class="vp-teil" id="vbxTraining">' + trainingHtml() + '</section>'
      + meineWoerter(alle) + nachschlagen();

    /* ---------- 3  Die aergern dich ---------- */
    if (aerger.length >= 3) {
      h += '<section class="vp-teil"><div class="vp-aerger">'
        + '<div><b>' + vpZahl(aerger.length, 'Wort ärgert dich', 'Wörter ärgern dich') + '</b>'
        + '<span>Die hast du öfter falsch als richtig gehabt. Zehn Minuten, dann sind sie weg.</span></div>'
        + '<button class="vp-b" type="button" onclick="__vtAerger()">Die üben</button></div></section>';
    }

    /* ---------- 3b  Nach Thema und Niveau ---------- */
    /* Beim ersten Öffnen auf der eigenen Stufe (fuer-dich.js), "Alle" bleibt ein Klick */

    THEMEN = themenNach(NIVEAU_FILTER);
    var niv = niveauZaehlung();
    if (THEMEN.length) {
      h += '<section class="vp-teil"><header><h3>Üb, was du willst</h3>'
        + '<p>Such dir ein Thema aus. Zu jedem Wort gibt es einen Beispielsatz. '
        + 'Du kannst ein Thema so oft wiederholen, wie du magst.</p></header>';

      h += '<div class="vp-niv">'
        + '<button type="button" class="vp-nchip' + (NIVEAU_FILTER ? '' : ' an') + '" onclick="__vtNiveau(\'\')">Alle</button>';
      niv.forEach(function (x) {
        h += '<button type="button" data-lv="' + x.n + '" class="vp-nchip' + (NIVEAU_FILTER === x.n ? ' an' : '') + '"'
          + ' onclick="__vtNiveau(\'' + x.n + '\')">' + x.n + ' <i>' + x.anzahl + '</i></button>';
      });
      h += '</div>';

      h += '<div class="vp-themen">';
      THEMEN.forEach(function (t, i) {
        var pr = t.n ? Math.round((t.sitzt / t.n) * 100) : 0;
        var mitFoto = t.woerter.filter(hatBild).slice(0, 3);
        var titel = TH_BILD[t.nm] || (mitFoto[0] ? 'vok-bild/' + encodeURIComponent(mitFoto[0].zwilling && window.VOK_BILD[mitFoto[0].zwilling] ? mitFoto[0].zwilling : mitFoto[0].id) + '.webp' : '');
        h += '<button class="vp-thema" type="button" onclick="__vtThema(' + i + ')">'
          + (titel ? '<span class="vp-tbild"><img src="' + titel + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>' : '')
          + '<span class="vp-tkoerper">'
          + '<b>' + esc(t.nm) + '</b>'
          + '<span class="z">' + vpZahl(t.n, 'Wort', 'Wörter')
          + (t.sitzt ? ' · ' + t.sitzt + ' sitzen' : (t.neu === t.n ? ' · noch ganz neu' : '')) + '</span>'
          + '<span class="bal"><i style="width:' + pr + '%"></i></span>'
          + '</span></button>';
      });
      h += '</div>';
      if (NIVEAU_FILTER) {
        h += '<p class="vp-fuss">' + vpZahl(THEMEN.length, 'Thema', 'Themen') + ' auf ' + esc(NIVEAU_FILTER) + '.</p>';
      }
      h += '</section>';
    }

    /* ---------- 4  Woher die Woerter kommen ---------- */
    var her = herkunft();
    if (her.length) {
      h += '<section class="vp-teil"><header><h3>Woher deine Wörter kommen</h3>'
        + '<p>Wörter aus einer echten Situation bleiben besser hängen als eine Liste.</p></header>'
        + '<div class="vp-regale">';
      her.forEach(function (r) {
        var p = r.n ? Math.round((r.sitzt / r.n) * 100) : 0;
        h += '<div class="vp-regal">'
          + '<b>' + esc(r.nm) + '</b>'
          + '<span class="z">' + vpZahl(r.n, 'Wort', 'Wörter') + ' · ' + r.sitzt + ' sitzen</span>'
          + '<span class="bal"><i style="width:' + p + '%"></i></span></div>';
      });
      h += '</div>'
        + '<p class="vp-fuss">Neue Wörter kommen von selbst: aus deinem LIVE-Unterricht und aus den Orten unter '
        + '<a href="#bereiche">Freizeit &amp; Beruf</a>.</p>'
        + '</section>';
    }


    h += '</div>';
    return h;
  }

  /* ================= Vollbild ================= */
  function voll() {
    var d = document.getElementById('vtVoll');
    if (d) return d;
    d = document.createElement('div'); d.id = 'vtVoll'; d.setAttribute('lang', 'de');
    d.innerHTML = '<div class="vt-top"></div><div class="vt-buehne"><div class="vt-karte" id="vtKarte"></div></div>'
      + '<div class="vt-fuss" id="vtFuss"></div>';
    document.body.appendChild(d);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', taste);
    return d;
  }
  function vollZu() {
    var d = document.getElementById('vtVoll');
    if (d) d.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', taste);
    try { speechSynthesis.cancel(); } catch (e) {}
  }
  function taste(e) {
    if (e.key === 'Escape') { window.__vtAbbruch(); return; }
    var f = document.getElementById('vtFuss');
    if (f && f.classList.contains('an')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); var b = f.querySelector('.vt-weiter'); if (b) b.click();
      }
      return;
    }
    if (/^[1-9]$/.test(e.key) && !/input|textarea/i.test((e.target && e.target.tagName) || '')) {
      var opts = qa('#vtKarte .vt-o');
      var i = parseInt(e.key, 10) - 1;
      if (opts[i]) { e.preventDefault(); opts[i].click(); }
    }
    if (e.key === 'Enter') {
      var p = q('#vtKarte .vt-pruefen'); if (p) { e.preventDefault(); p.click(); }
    }
  }

  function kopf() {
    var p = RUNDE.length ? Math.round((POS / RUNDE.length) * 100) : 0;
    var serie = STAND.serie || 0;
    q('#vtVoll .vt-top').innerHTML =
      '<button class="vt-x" onclick="__vtAbbruch()" aria-label="Runde beenden">×</button>'
      + '<div class="vt-bar"><i style="width:' + p + '%"></i></div>'
      + (serie > 0 ? '<div class="fl">🔥 ' + serie + '</div>' : '')
      + '<div class="n">' + (POS + 1) + ' / ' + RUNDE.length + '</div>';
  }
  function lauts(t, klein) {
    return '<button class="vt-lauts' + (klein ? ' klein' : '') + '" onclick="__vtSprich(\''
      + esc(t).replace(/'/g, "\\'") + '\',0.92,this)" aria-label="Anhören">🔊</button>';
  }
  function etikett(typ) {
    var i = TYP_INFO[typ] || TYP_INFO.uebersetzung;
    return '<div class="vt-etikett" style="--tf:' + i.farbe + '">' + (i.g ? '<span class="gr">' + i.g + '</span>' : '') + i.f + '</div>';
  }
  function tasteN(i) { return '<span class="taste">' + (i + 1) + '</span>'; }

  /* ================= Aufgaben ================= */
  function zeichne() {
    var a = RUNDE[POS];
    if (!a) return abschluss();
    GEPRUEFT = false;
    if (a.spiel === 'paare') return zeichnePaare(a);
    var v = a.v;
    var typ = a.typ;
    voll(); kopf();
    var f = document.getElementById('vtFuss');
    f.className = 'vt-fuss'; f.innerHTML = '';
    var k = document.getElementById('vtKarte');
    var h = etikett(typ);

    if (typ === 'kennenlernen') {
      var ue = trWort(v);
      h += bild(v, 'gr')
        + '<h2 class="vt-gross mitte">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + (ue ? '<p class="vt-unter' + rtlK() + '" style="text-align:center">' + esc(ue) + '</p>' : '')
        + steckbrief(v)
        + (v.bedeutung ? '<div class="vt-bed"><span>Bedeutung</span><p>' + esc(v.bedeutung) + '</p></div>' : '')
        + (v.bsp ? '<div class="vt-satzbox' + (v.bedeutung ? ' mitlabel' : '') + bspKlasse(v) + '"><p class="vt-satz">' + satzMarkiert(v.bsp, v.wort || v.de) + ' ' + lauts(v.bsp, 1) + '</p>'
          + (trSatz(v) ? '<div class="vt-satz-tr' + rtlK() + '">' + esc(trSatz(v)) + '</div>' : '') + '</div>' : '')
        + (v.hinweis ? '<div class="vbx-gut"><span>Gut zu wissen</span>' + esc(v.hinweis) + '</div>' : '')
        + '<button class="vt-pruefen" onclick="__vtWeiterNeu()">Verstanden, weiter</button>';

    } else if (typ === 'uebersetzung') {
      var r1 = trWort(v);
      var o1 = mische(ablenker(v, 3, 'tr').map(trWort).concat([r1]));
      h += '<h2 class="vt-gross">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + '<div class="vt-opt">' + o1.map(function (o, i) {
          return '<button class="vt-o' + rtlK() + '" onclick="__vtWahl(this,' + (o === r1) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'rueckwaerts') {
      var o2 = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      h += '<h2 class="vt-gross' + rtlK() + '">' + esc(trWort(v)) + '</h2>'
        + '<div class="vt-opt">' + o2.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'karte') {
      var wk = (v.wort || v.de || '').trim();
      h += '<div class="vbx-karte">' + bild(v, 'gr')
        + '<h2 class="vt-gross mitte">' + artikelChip(v.artikel) + esc(wk) + lauts(v.de) + '</h2>'
        + '<p class="vbx-tipp">Was bedeutet das Wort? Überleg kurz, dann dreh die Karte um.</p>'
        + '<div class="vbx-hinten" hidden>'
        + (v.bedeutung ? '<div class="vt-bed"><span>Bedeutung</span><p>' + esc(v.bedeutung) + '</p></div>' : '')
        + (v.bsp ? '<div class="vt-satzbox"><p class="vt-satz">' + satzMarkiert(v.bsp, wk) + ' ' + lauts(v.bsp, 1) + '</p></div>' : '')
        + (v.hinweis ? '<div class="vbx-gut"><span>Gut zu wissen</span>' + esc(v.hinweis) + '</div>' : '')
        + '</div></div>'
        + '<button class="vt-pruefen" id="vbxDreh" onclick="__vtDrehen()">Karte umdrehen</button>'
        + '<div class="vbx-selbst" id="vbxSelbst" hidden>'
        + '<button class="nein" onclick="__vtSelbst(false)">Noch nicht</button>'
        + '<button class="ja" onclick="__vtSelbst(true)">Wusste ich</button></div>';

    } else if (typ === 'diktat') {
      var dk = esc(v.de).replace(/'/g, "\\'");
      h += '<button class="vt-hoerknopf" onclick="__vtSprich(\'' + dk + '\',0.85,this)">🔊</button>'
        + '<button class="vt-langsam" onclick="__vtSprich(\'' + dk + '\',0.5,this)">🐢 langsamer abspielen</button>'
        + '<input class="vt-eingabe" id="vtIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Was hörst du?">'
        + '<p class="vbx-tipp">' + (v.artikel ? 'Schreib das Wort, den Artikel kannst du dazuschreiben.' : 'Schreib das Wort genau so, wie du es hörst.') + '</p>'
        + '<button class="vt-pruefen" onclick="__vtTippen()">Prüfen</button>';
      setTimeout(function () { sprich(v.de, 0.85); }, 300);

    } else if (typ === 'erklaerung') {
      var oE = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      h += '<div class="vt-satzbox vbx-erkl"><span class="vbx-erkl-k">Erklärung</span><p class="vt-satz">' + esc(v.bedeutung) + '</p></div>'
        + '<div class="vt-opt zwei">' + oE.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'bedeutung') {
      var andere = ablenker(v, 3, 'bed').map(function (x) { return x.bedeutung; });
      var oB = mische(andere.concat([v.bedeutung]));
      h += '<h2 class="vt-gross mitte">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + '<div class="vt-opt">' + oB.map(function (o, i) {
          return '<button class="vt-o vbx-lang" onclick="__vtWahl(this,' + (o === v.bedeutung) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'bild') {
      var mitBild = POOL.filter(function (x) { return x.id !== v.id && hatBild(x); });
      var nah = mitBild.filter(function (x) { return x.niveau === v.niveau; });
      var kand = mische((nah.length >= 3 ? nah : mitBild).slice(0, 60)).slice(0, 3).concat([v]);
      kand = mische(kand);
      h += '<h2 class="vt-gross mitte">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + '<div class="vt-opt bilder">' + kand.map(function (x, i) {
          return '<button class="vt-o bildo" onclick="__vtWahl(this,' + (x.id === v.id) + ')">' + tasteN(i) + bildEmoji(x) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'artikel') {
      h += '<h2 class="vt-gross mitte">' + esc(v.wort) + lauts(v.de) + '</h2>'
        + (v.bsp ? '<div class="vt-satzbox"><p class="vt-satz">' + satzMarkiert(v.bsp, v.wort) + '</p></div>' : '')
        + '<div class="vt-opt drei">' + ['der', 'die', 'das'].map(function (a, i) {
          return '<button class="vt-o artikel" style="--af:' + ART_FARBE[a] + '" onclick="__vtWahl(this,' + (a === v.artikel) + ')">' + tasteN(i) + a + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'luecke') {
      var w = (v.wort || v.de).trim();
      var satz = esc(v.bsp).replace(luecken(v), '$1<mark class="vt-mark" style="background:none;border-bottom:4px solid #E07B39;color:#E07B39;letter-spacing:2px">•••</mark>');
      var o3 = mische(ablenker(v, 3, 'einzel').map(function (x) { return (x.wort || x.de).trim(); }).concat([w]));
      h += '<div class="vt-satzbox"><p class="vt-satz">' + satz + '</p>'
        + (trSatz(v) ? '<div class="vt-satz-tr' + rtlK() + '">' + esc(trSatz(v)) + '</div>' : '') + '</div>'
        + '<div class="vt-opt zwei">' + o3.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === w) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'hoeren') {
      var o4 = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      h += '<button class="vt-hoerknopf" onclick="__vtSprich(\'' + esc(v.de).replace(/'/g, "\\'") + '\',0.9,this)">🔊</button>'
        + '<button class="vt-langsam" onclick="__vtSprich(\'' + esc(v.de).replace(/'/g, "\\'") + '\',0.5,this)">🐢 langsamer abspielen</button>'
        + '<div class="vt-opt zwei">' + o4.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';
      setTimeout(function () { sprich(v.de, 0.9); }, 280);

    } else if (typ === 'satzhoeren') {
      var w2 = (v.wort || v.de).trim();
      var satz2 = esc(v.bsp).replace(luecken(v), '$1<mark class="vt-mark" style="background:none;border-bottom:4px solid #0E6D85;color:#0E6D85;letter-spacing:2px">•••</mark>');
      var o5 = mische(ablenker(v, 3, 'einzel').map(function (x) { return (x.wort || x.de).trim(); }).concat([w2]));
      h += '<button class="vt-hoerknopf" onclick="__vtSprich(\'' + esc(v.bsp).replace(/'/g, "\\'") + '\',0.88,this)">🔊</button>'
        + '<button class="vt-langsam" onclick="__vtSprich(\'' + esc(v.bsp).replace(/'/g, "\\'") + '\',0.5,this)">🐢 langsamer abspielen</button>'
        + '<div class="vt-satzbox"><p class="vt-satz">' + satz2 + '</p></div>'
        + '<div class="vt-opt zwei">' + o5.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === w2) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';
      setTimeout(function () { sprich(v.bsp, 0.88); }, 300);

    } else if (typ === 'tippen') {
      var vorlage = trWort(v) || (erklaerungOk(v) ? v.bedeutung : '');
      var anf = (v.wort || v.de).trim().charAt(0);
      h += bild(v, '')
        + (vorlage ? '<h2 class="vt-gross mitte' + rtlK() + '" style="font-size:clamp(20px,2.8vw,28px);line-height:1.35">' + esc(vorlage) + '</h2>' : '')
        + '<p class="vbx-tipp">Das Wort beginnt mit <b>' + esc(anf) + '</b> und hat ' + (v.wort || v.de).trim().length + ' Zeichen'
        + (v.artikel ? ', den Artikel kannst du dazuschreiben' : '') + '.</p>'
        + '<input class="vt-eingabe" id="vtIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" '
        + 'placeholder="' + (v.artikel ? 'z. B. der Tisch' : 'auf Deutsch schreiben …') + '">'
        + '<button class="vt-pruefen" onclick="__vtTippen()">Prüfen</button>';

    } else if (typ === 'buchstaben') {
      var ziel = (v.wort || v.de).trim();
      var buchst = mische(ziel.split(''));
      h += bild(v, '')
        + ((trWort(v) || erklaerungOk(v)) ? '<h2 class="vt-gross mitte' + rtlK() + '" style="font-size:clamp(20px,2.8vw,28px);line-height:1.35">' + esc(trWort(v) || v.bedeutung) + '</h2>' : '')
        + '<div class="vt-bau vt-buch" id="vtBau"></div>'
        + '<div class="vt-teile" id="vtTeile">' + buchst.map(function (c) {
          return '<button class="vt-teil vt-bt" onclick="__vtBau(this)">' + esc(c) + '</button>';
        }).join('') + '</div>'
        + '<button class="vt-pruefen" onclick="__vtBuchPruefen()">Prüfen</button>';

    } else if (typ === 'satzbau') {
      var teile = mische(v.bsp.replace(/\s+/g, ' ').trim().split(' '));
      h += (trSatz(v) ? '<p class="vt-unter' + rtlK() + '">' + esc(trSatz(v)) + '</p>' : '')
        + '<div class="vt-bau" id="vtBau"></div>'
        + '<div class="vt-teile" id="vtTeile">' + teile.map(function (t) {
          return '<button class="vt-teil" onclick="__vtBau(this)">' + esc(t) + '</button>';
        }).join('') + '</div>'
        + '<button class="vt-pruefen" onclick="__vtSatzPruefen()">Prüfen</button>';
    }

    k.innerHTML = h;
    var inp = document.getElementById('vtIn');
    if (inp) { inp.focus(); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') window.__vtTippen(); }); }
    var b = q('#vtVoll .vt-buehne'); if (b) b.scrollTop = 0;
  }

  /* ================= Spiel: Paare finden ================= */
  var PAAR = { offen: null, fertig: 0, gesamt: 0, fehler: 0 };
  function zeichnePaare(a) {
    voll(); kopf();
    var f = document.getElementById('vtFuss'); f.className = 'vt-fuss'; f.innerHTML = '';
    PAAR = { offen: null, fertig: 0, gesamt: a.woerter.length, fehler: 0, woerter: a.woerter };
    var links = mische(a.woerter.slice());
    var rechts = mische(a.woerter.slice());
    document.getElementById('vtKarte').innerHTML =
      '<div class="vt-etikett" style="--tf:#D42A21"><span class="gr">Spiel</span>Finde die Paare</div>'
      + '<p class="vt-unter">' + (a.bild ? 'Tippe ein Wort an und dann das passende Foto.' : 'Tippe ein deutsches Wort an und dann seine Übersetzung.') + '</p>'
      + '<div class="vt-paare' + (a.bild ? ' vbx-bildpaare' : '') + '">'
      + '<div class="vt-sp">' + links.map(function (v) {
        return '<button class="vt-pk" data-id="' + esc(v.id) + '" data-seite="l" onclick="__vtPaar(this)">'
          + (v.em && !a.bild ? '<span class="e">' + v.em + '</span>' : '') + '<span>' + esc(v.de) + '</span></button>';
      }).join('') + '</div>'
      + '<div class="vt-sp">' + rechts.map(function (v) {
        if (a.bild) return '<button class="vt-pk vbx-pkb" data-id="' + esc(v.id) + '" data-seite="r" onclick="__vtPaar(this)" aria-label="Foto">'
          + bild(v, 'mini') + '</button>';
        return '<button class="vt-pk' + rtlK() + '" data-id="' + esc(v.id) + '" data-seite="r" onclick="__vtPaar(this)">'
          + '<span>' + esc(trWort(v)) + '</span></button>';
      }).join('') + '</div>'
      + '</div>';
    var b = q('#vtVoll .vt-buehne'); if (b) b.scrollTop = 0;
  }
  window.__vtPaar = function (el) {
    if (el.classList.contains('fertig')) return;
    var offen = PAAR.offen;
    if (!offen) {
      qa('.vt-pk.gewaehlt').forEach(function (x) { x.classList.remove('gewaehlt'); });
      el.classList.add('gewaehlt'); PAAR.offen = el; return;
    }
    if (offen === el) { el.classList.remove('gewaehlt'); PAAR.offen = null; return; }
    if (offen.dataset.seite === el.dataset.seite) {
      offen.classList.remove('gewaehlt'); el.classList.add('gewaehlt'); PAAR.offen = el; return;
    }
    var treffer = offen.dataset.id === el.dataset.id;
    if (treffer) {
      offen.classList.remove('gewaehlt'); offen.classList.add('fertig');
      el.classList.add('fertig');
      PAAR.offen = null; PAAR.fertig++;
      var wort = null;
      PAAR.woerter.forEach(function (v) { if (v.id === el.dataset.id) wort = v; });
      if (wort) sprich(wort.de, 0.95);
      if (PAAR.fertig >= PAAR.gesamt) setTimeout(paareFertig, 420);
    } else {
      PAAR.fehler++;
      var a1 = offen, b1 = el;
      a1.classList.add('daneben'); b1.classList.add('daneben');
      setTimeout(function () {
        a1.classList.remove('daneben', 'gewaehlt'); b1.classList.remove('daneben');
      }, 480);
      PAAR.offen = null;
    }
  };
  function paareFertig() {
    var f = document.getElementById('vtFuss');
    var gut = PAAR.fehler === 0;
    f.className = 'vt-fuss an ' + (gut ? 'gut' : 'schlecht');
    f.innerHTML = '<div class="vt-fuss-in"><div class="vt-fuss-tx">'
      + '<b>' + (gut ? 'Alle Paare auf Anhieb!' : 'Geschafft, mit ' + PAAR.fehler + ' Fehlversuch' + (PAAR.fehler === 1 ? '' : 'en')) + '</b>'
      + '<div class="lsg">' + PAAR.gesamt + ' Wörter zugeordnet.</div></div>'
      + '<button class="vt-weiter" onclick="__vtAntwort()">Weiter →</button></div>';
  }

  /* ================= Antworten ================= */
  function normal(s) {
    return String(s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.,!?;:]/g, '');
  }
  window.__vtWahl = function (el, richtig) {
    if (GEPRUEFT) return; GEPRUEFT = true;
    qa('#vtKarte .vt-o').forEach(function (b) {
      b.disabled = true;
      if (b !== el && (b.getAttribute('onclick') || '').indexOf('true') > -1) b.classList.add('richtig');
    });
    el.classList.add(richtig ? 'richtig' : 'falsch');
    rueck(richtig);
  };
  window.__vtTippen = function () {
    if (GEPRUEFT) return;
    var v = RUNDE[POS].v, inp = document.getElementById('vtIn');
    if (!inp) return;
    var ist = normal(inp.value); if (!ist) { inp.focus(); return; }
    GEPRUEFT = true;
    var richtig = (ist === normal(v.de) || ist === normal(v.wort));
    inp.classList.add(richtig ? 'richtig' : 'falsch'); inp.disabled = true;
    rueck(richtig);
  };
  window.__vtBau = function (el) {
    var bau = document.getElementById('vtBau');
    if (el.parentNode.id === 'vtTeile') bau.appendChild(el);
    else document.getElementById('vtTeile').appendChild(el);
  };
  window.__vtBuchPruefen = function () {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var v = RUNDE[POS].v, bau = document.getElementById('vtBau');
    var ist = qa('#vtBau .vt-teil').map(function (b) { return b.textContent; }).join('');
    var richtig = normal(ist) === normal(v.wort || v.de);
    bau.style.borderColor = richtig ? '#1B9BC0' : '#E05B5B';
    bau.style.background = richtig ? '#E9F9F5' : '#F6F9FA';
    rueck(richtig);
  };
  window.__vtSatzPruefen = function () {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var v = RUNDE[POS].v, bau = document.getElementById('vtBau');
    var ist = qa('#vtBau .vt-teil').map(function (b) { return b.textContent; }).join(' ');
    var richtig = normal(ist) === normal(v.bsp);
    bau.style.borderColor = richtig ? '#1B9BC0' : '#E05B5B';
    bau.style.background = richtig ? '#E9F9F5' : '#F6F9FA';
    rueck(richtig);
  };
  window.__vtWeiterNeu = function () { weiter(); };

  function naechsterAbstand(stufe) {
    var t = [0, 1, 3, 7, 16, 35, 75][Math.min(stufe, 6)];
    if (t <= 0) return 'gleich noch einmal';
    if (t === 1) return 'morgen wieder';
    if (t < 30) return 'in ' + t + ' Tagen wieder';
    return 'in ' + Math.round(t / 30) + ' Monaten wieder';
  }

  function rueck(richtig) {
    var a = RUNDE[POS], v = a.v;
    if (!richtig) SERIE[v.id] = true;                 // Fehler in der Serie merken
    if (a.letzte) ERG.push({ v: v, richtig: !SERIE[v.id] });
    qa('#vtKarte .vt-pruefen').forEach(function (b) { b.style.display = 'none'; });
    qa('#vtTeile .vt-teil, #vtBau .vt-teil').forEach(function (b) { b.style.pointerEvents = 'none'; b.style.opacity = '.7'; });

    var st = (BEKANNT[v.id] && BEKANNT[v.id].stufe) || 0;
    var zaehlt = !SERIE[v.id] && richtig;
    var neuStufe = zaehlt ? Math.min(st + 1, 6) : (st <= 1 ? 0 : 1);
    var ue = trWort(v);
    try { if (window.klang) window.klang(richtig ? 'richtig' : 'falsch'); } catch (_k) {}
    var f = document.getElementById('vtFuss');
    f.className = 'vt-fuss an ' + (richtig ? 'gut' : 'schlecht');
    f.innerHTML = '<div class="vt-fuss-in"><div class="vt-fuss-tx">'
      + '<b>' + (richtig ? '<span>✅</span>' + zufall(['Richtig!', 'Sitzt!', 'Genau so.', 'Sehr gut!', 'Perfekt.'])
        : '<span>💡</span>Noch nicht. So ist es richtig') + '</b>'
      + '<div class="lsg"><em>' + artikelChip(v.artikel) + esc(v.wort || v.de) + '</em>'
      + (ue ? ', ' + esc(ue) : '') + ' ' + lauts(v.de, 1) + '</div>'
      + (v.bedeutung ? '<div class="bedz">' + esc(v.bedeutung) + '</div>' : '')
      + (v.bsp ? '<div class="bspz">' + satzMarkiert(v.bsp, v.wort || v.de, richtig ? 'gruen' : 'rot')
        + (trSatz(v) ? '<i class="' + (rtl() ? 'vt-rtl' : '') + '">' + esc(trSatz(v)) + '</i>' : '') + '</div>' : '')
      + (a.letzte ? wanderung(st, neuStufe) + '<div class="wieder">Dieses Wort kommt ' + naechsterAbstand(neuStufe) + '.</div>'
                  : '<div class="wieder">Gleich noch eine Übung zu diesem Wort.</div>')
      + '</div>'
      + '<button class="vt-weiter' + (richtig ? '' : ' rot') + '" onclick="__vtAntwort()">'
      + (POS + 1 >= RUNDE.length ? 'Runde abschließen' : 'Weiter') + ' →</button></div>';
  }

  // Lernstand nur am Ende einer Wortserie schreiben
  async function buchen(v, richtig) {
    try {
      var c = sb();
      if (c && v) {
        var r = await c.rpc('vok_antwort', { p_vok_id: v.id, p_richtig: !!richtig, p_quelle: v.quelle || 'kurs' });
        if (r && r.data && r.data[0]) {
          BEKANNT[v.id] = { stufe: r.data[0].stufe, faellig: r.data[0].faellig_am, falsch: (BEKANNT[v.id] || {}).falsch || 0 };
        }
      }
    } catch (e) {}
    STAND.heute = (STAND.heute || 0) + 1;
  }
  function weiter() {
    POS++;
    if (POS >= RUNDE.length) abschluss(); else zeichne();
  }
  window.__vtAntwort = async function () {
    var a = RUNDE[POS];
    if (a && a.letzte && a.v) {
      var ok = !SERIE[a.v.id];
      await buchen(a.v, ok);
      // Nicht gekonnt? Dann kommt das Wort am Ende der Runde noch einmal.
      if (!ok && !a.wieder && RUNDE.length < 42) {
        SERIE[a.v.id] = false;
        RUNDE.push({ v: a.v, typ: TRAIN_TYP ? a.typ : leichterTyp(a.v), letzte: true, wieder: true });
      }
    }
    weiter();
  };

  window.__vtAbbruch = function () {
    LAEUFT = false; vollZu();
    ladeStand().then(function () { window.renderVokabeln(); });
  };

  /* ================= Abschluss ================= */
  function konfetti() {
    var farben = ['#14181B', '#D42A21', '#E0A800', '#1B9BC0', '#0E6D85'];
    var d = document.createElement('div'); d.className = 'vt-konfetti';
    var h = '';
    for (var i = 0; i < 70; i++) {
      h += '<span class="vt-konf" style="left:' + (Math.random() * 100) + '%;top:-24px;background:'
        + zufall(farben) + ';animation-duration:' + (2.2 + Math.random() * 2) + 's;animation-delay:'
        + (Math.random() * 0.7) + 's"></span>';
    }
    d.innerHTML = h;
    var v = document.getElementById('vtVoll'); if (v) v.appendChild(d);
    setTimeout(function () { d.remove(); }, 5200);
  }

  function abschluss() {
    LAEUFT = false;
    voll();
    q('#vtVoll .vt-top').innerHTML = '<button class="vt-x" onclick="__vtAbbruch()">×</button>'
      + '<div class="vt-bar"><i style="width:100%"></i></div><div class="n">fertig</div>';
    var f = document.getElementById('vtFuss'); f.className = 'vt-fuss'; f.innerHTML = '';

    var gut = ERG.filter(function (e) { return e.richtig; }).length;
    var schlecht = ERG.length - gut;
    var quote = ERG.length ? Math.round((gut / ERG.length) * 100) : 0;
    var kopfz = quote >= 90 ? ['🏆', 'Stark!'] : quote >= 70 ? ['🎉', 'Gut gemacht!'] : ['💪', 'Weiter so!'];

    var liste = ERG.map(function (e) {
      return '<div class="z">' + bildEmoji(e.v, 'mini')
        + '<div class="tx"><b>' + esc(e.v.de) + '</b><span>' + esc(trWort(e.v) || e.v.thema || '') + '</span></div>'
        + '<span class="st ' + (e.richtig ? 'g' : 's') + '">' + (e.richtig ? 'sitzt' : 'nochmal') + '</span></div>';
    }).join('');

    document.getElementById('vtKarte').innerHTML = '<div class="vt-ende">'
      + '<div class="gr">' + kopfz[0] + '</div><h2>' + kopfz[1] + '</h2>'
      + '<p>' + (schlecht === 0
        ? 'Alles richtig. Die Wörter kommen genau dann zurück, wenn es Zeit zum Auffrischen ist.'
        : schlecht + (schlecht === 1
          ? ' Wort siehst du bald wieder, genau dann, wenn du es sonst vergessen würdest.'
          : ' Wörter siehst du bald wieder, genau dann, wenn du sie sonst vergessen würdest.'))
      + '</p>'
      + '<div class="vt-ergz">'
      + '<div><b>' + gut + '</b><span>richtig</span></div>'
      + '<div><b>' + schlecht + '</b><span>zum Üben</span></div>'
      + '<div><b>' + quote + '%</b><span>Trefferquote</span></div></div>'
      + '<div class="vt-liste">' + liste + '</div>'
      + (TRAIN_TYP
        ? '<button class="vt-los" style="background:#14181B;color:#fff" onclick="__vtTraining(\'' + TRAIN_TYP + '\')">Noch eine Runde: ' + esc((TRAINING.filter(function (t) { return t.typ === TRAIN_TYP; })[0] || {}).nm || '') + '</button>'
        : '<button class="vt-los" style="background:#14181B;color:#fff" onclick="__vtStart()">Noch eine Runde →</button>')
      + '<div style="margin-top:14px"><button class="vt-langsam" style="display:inline-block" onclick="__vtAbbruch()">Für heute reicht\'s</button></div>'
      + '</div>';
    if (quote >= 70) konfetti();
    var b = q('#vtVoll .vt-buehne'); if (b) b.scrollTop = 0;
  }

  /* ================= Steuerung ================= */
  window.__vtStart = function () {
    SERIE = {}; TRAIN_TYP = ''; RUNDE = baueRunde(tagesplan().gesamt || 8); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) {
      vollZu();
      document.getElementById('v-vokabeln').innerHTML =
        '<div class="vt-leer">Im Moment ist nichts fällig und es gibt keine neuen Wörter mehr. '
        + 'Öffne eine Lektion in der Kursbibliothek — die Wörter daraus landen automatisch hier.</div>';
      return;
    }
    zeichne();
  };
  /* Aus einem Kasten heraus ueben. Innerhalb des Kastens kommen die
     faelligen zuerst — die sind der eigentliche Grund, warum man
     hier ist. */
  window.__vtKasten = function (i) {
    var w = alleWoerter().filter(function (v) { return kastenVon(v) === i; });
    w.sort(function (a, b) { return (istFaellig(b) ? 1 : 0) - (istFaellig(a) ? 1 : 0); });
    if (!w.length) return;
    SERIE = {}; TRAIN_TYP = ''; RUNDE = baueRundeAus(w); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) return;
    zeichne();
  };
  /* Niveau umstellen: nur merken und die Startseite neu zeichnen.
     Nichts wird geladen, die Woerter liegen laengst im Speicher. */
  window.__vtNiveau = function (n) {
    NIVEAU_FILTER = n || '';
    try { window.renderVokabeln(); } catch (e) {}
    try {
      var el = document.querySelector('#v-vokabeln .vp-niv');
      if (el && el.scrollIntoView) el.scrollIntoView({ block: 'center' });
    } catch (e) {}
  };

  /* Ein Thema ueben. Die Nummer zeigt in die Liste, die beim letzten
     Zeichnen entstanden ist — so muss kein Thementitel durch ein
     onclick-Attribut, und Namen mit Anfuehrungszeichen oder Apostroph
     koennen nichts kaputt machen. */
  window.__vtThema = function (i) {
    var t = THEMEN[i];
    if (!t || !t.woerter.length) return;
    /* Was noch nicht sitzt, zuerst — sonst uebt man beim zweiten
       Durchgang wieder die Woerter, die man laengst kann. */
    var w = t.woerter.slice().sort(function (a, b) { return stufeVon(a) - stufeVon(b); });
    SERIE = {}; TRAIN_TYP = ''; RUNDE = baueRundeAus(w); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) return;
    zeichne();
  };

  window.__vtAerger = function () {
    var w = alleWoerter().filter(aergertMich);
    if (!w.length) return;
    SERIE = {}; TRAIN_TYP = ''; RUNDE = baueRundeAus(w); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) return;
    zeichne();
  };

  window.__vtZiel = async function (z) {
    try { var c = sb(); if (c) await c.rpc('vok_ziel', { p_ziel: z }); } catch (e) {}
    STAND.ziel = z; window.renderVokabeln();
  };

  async function ladeStand() {
    var c = sb(); if (!c) return;
    try { var a = await c.rpc('vok_stand'); STAND = (a && a.data) || {}; } catch (e) { STAND = {}; }
    try { window.VOKABEL_STAND = STAND; } catch (e) { }
    try {
      var b = await c.rpc('vok_bekannt');
      BEKANNT = {};
      ((b && b.data) || []).forEach(function (r) { BEKANNT[r.vok_id] = { stufe: r.stufe, gelernt: r.gelernt, falsch: 0 }; });
      var f = await c.rpc('vok_faellig', { p_max: 200 });
      ((f && f.data) || []).forEach(function (r) {
        BEKANNT[r.vok_id] = BEKANNT[r.vok_id] || { stufe: r.stufe };
        BEKANNT[r.vok_id].faellig = '1970-01-01';
        BEKANNT[r.vok_id].falsch = r.falsch;
      });
    } catch (e) {}
  }
  function ladeSkript(pfad) {
    return new Promise(function (ok) {
      var s = document.createElement('script'); s.src = pfad;
      s.onload = function () { ok(true); }; s.onerror = function () { ok(false); };
      document.head.appendChild(s);
    });
  }
  var poolLauf = null;
  /* 22.11.2026: Zwei Korrekturen an den Daten, einmal beim Laden.
     1) 15 Sätze wie „Das tut mir leid.“ waren in Artikel „das“ und Wort
        „tut mir leid.“ zerlegt. Dann fragte „der, die oder das?“ nach
        „passt mir gut.“. Jetzt ist der ganze Satz das Wort, ohne Artikel.
     2) Wo im Feld bsp nur ein Hinweis stand, kommt der neue Beispielsatz
        aus vok-beispielsaetze.js; der Hinweis bleibt als „Gut zu wissen“. */
  function pflege(pool) {
    var neu = window.VOK_BSP_NEU || {};
    pool.forEach(function (v) {
      if (v._gepflegt) return;
      v._gepflegt = 1;
      if (v.artikel && /^(Der|Die|Das) /.test(v.de || '')) {
        v.wort = v.de; v.artikel = ''; v.art = 'wendung';
      }
      var satz = neu[v.id];
      if (satz && satz !== v.bsp) {
        if (v.bsp) v.hinweis = v.bsp;
        v.bsp = satz;
      }
    });
  }
  /* Der/die/das-Frage nur bei einem einzelnen Nomen. Bei „Quelle angeben“
     oder „Kind / die Kinder“ ist sie keine sinnvolle Aufgabe. */
  function artikelFrage(v) {
    var w = String(v.wort || '').trim();
    return !!v.artikel && v.art === 'nomen' && !/\s/.test(w) && /^[A-ZÄÖÜ]/.test(w);
  }

  function ladePool() {
    if (window.VOK_POOL && window.VOK_POOL.length) return Promise.resolve(true);
    if (poolLauf) return poolLauf;
    poolLauf = Promise.all([ladeSkript('vokabeln-pool.js'), ladeSkript('vok-bild/index.js?v=2'), ladeSkript('vok-beispielsaetze.js?v=1')]);
    return poolLauf;
  }
  /* ---------- Eigene Wörter ----------
     Die Tabelle vokabel_eigene gibt es seit Langem, aber niemand hat
     sie je gelesen oder beschrieben. Hier kommen die Wörter an, die
     jemand sich aus einem Gespräch merkt — sie liegen beim Konto,
     nicht im Browser, und sind deshalb auf jedem Gerät da. */
  var eigeneGeladen = false;
  async function ladeEigene() {
    if (eigeneGeladen) return;
    eigeneGeladen = true;
    var c = sb(); if (!c) return;
    try {
      var r = await c.from('vokabel_eigene')
        .select('vok_id,de,wort,artikel,art,em,bsp,bedeutung,niveau,thema,bild,quelle')
        .order('angelegt', { ascending: false }).limit(2000);
      var rows = (r && r.data) || [];
      if (!rows.length) return;
      var da = {};
      (window.VOK_POOL || []).forEach(function (v) { da[v.id] = 1; });
      var neu = [];
      rows.forEach(function (x) {
        if (!x.vok_id || da[x.vok_id]) return;
        da[x.vok_id] = 1;
        neu.push({ id:x.vok_id, de:x.de, wort:x.wort, artikel:x.artikel || '',
                   art:x.art || 'wort', em:x.em || '', bsp:x.bsp || '',
                   bedeutung:x.bedeutung || '',
                   niveau:x.niveau || 'A2', thema:x.thema || 'Meine Wörter',
                   bild:x.bild || '', quellen:[x.quelle || 'eigen'], eigen:true });
      });
      if (neu.length) window.VOK_POOL = (window.VOK_POOL || []).concat(neu);
    } catch (e) {}
  }

  /* Von aussen: ein Wort merken. Gibt true zurück, wenn es jetzt
     im Trainer liegt — auch dann, wenn es schon drin war. */
  window.vokMerken = async function (w) {
    var c = sb(); if (!c || !w || !w.wort) return false;
    var id = 'eig-' + String(w.wort).toLowerCase()
      .replace(/\u00e4/g,'ae').replace(/\u00f6/g,'oe').replace(/\u00fc/g,'ue').replace(/\u00df/g,'ss')
      .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60);
    if (!id || id === 'eig-') return false;
    var u = null;
    try { u = (await c.auth.getUser()).data.user; } catch (e) {}
    if (!u) return false;
    var zeile = { user_id:u.id, vok_id:id, de:String(w.wort), wort:String(w.wort),
      artikel:w.artikel || null, art:w.art || 'wort', em:w.em || '',
      bsp:w.bsp || '', bedeutung:w.bedeutung || '', niveau:w.niveau || 'B2',
      thema:w.thema || 'Aus den Gesprächen', quelle:'gespraech' };
    try {
      var r = await c.from('vokabel_eigene').upsert(zeile, { onConflict:'user_id,vok_id' });
      if (r && r.error) return false;
    } catch (e) { return false; }
    /* Sofort sichtbar machen, ohne die Seite neu zu laden. */
    try {
      var drin = (window.VOK_POOL || []).some(function (v) { return v.id === id; });
      if (!drin) window.VOK_POOL = (window.VOK_POOL || []).concat([{
        id:id, de:zeile.de, wort:zeile.wort, artikel:zeile.artikel || '',
        art:zeile.art, em:zeile.em, bsp:zeile.bsp, bedeutung:zeile.bedeutung,
        niveau:zeile.niveau,
        thema:zeile.thema, bild:'', quellen:['gespraech'], eigen:true }]);
    } catch (e) {}
    return true;
  };

  function ladeSprache() {
    var l = l1(); if (!l) return Promise.resolve();
    if ((window.VOK_TR || {})[l]) return Promise.resolve();
    return ladeSkript('vok-tr/' + l + '.js');
  }

  /* ================= Einstieg ================= */
  /* 14.11.2026: der Trainer im Stil von „Meine Stunden“ - Petrol-Bühne,
     die fünf Kästen als eine Leiste, Niveau als Reiter. Steht hier und
     nicht in lernraum-stil.css, damit beides an einer Stelle bleibt.
     Doppelte Klasse (.vp .vp-…), damit es vor lernraum-stil.css gewinnt. */
  function vpxStil() {
    if (document.getElementById('vpx-stil')) return;
    var st = document.createElement('style'); st.id = 'vpx-stil';
    st.textContent = [
      '#v-vokabeln .vp .vp-heute.vpx-held{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:0;align-items:stretch;padding:0;border:0;border-radius:24px;background:linear-gradient(140deg,#0E6D85,#0A4E62);color:#fff;box-shadow:0 22px 44px -26px rgba(10,78,98,.65)}',
      '#v-vokabeln .vp .vpx-held .tx{padding:30px 32px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}',
      '#v-vokabeln .vp .vpx-held h2{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;font-size:clamp(26px,3.4vw,38px);letter-spacing:-.025em;line-height:1.1;color:#fff;margin:0 0 10px}',
      '#v-vokabeln .vp .vpx-held p{color:#D6EEF5;font-size:15px;line-height:1.55;margin:0 0 20px}',
      '#v-vokabeln .vp .vpx-held p b{color:#fff}',
      '#v-vokabeln .vp .vpx-held .vp-zuruf{font-family:Inter,sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#A9DEEE;margin-bottom:6px}',
      '#v-vokabeln .vp .vpx-held .vp-serie{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.24);color:#fff;margin-bottom:10px}',
      '#v-vokabeln .vp .vpx-held .vp-los{background:#fff;color:#0A4E62;border-radius:14px;padding:13px 26px;min-height:50px;box-shadow:0 10px 22px -12px rgba(0,0,0,.45)}',
      '#v-vokabeln .vp .vpx-held .vp-los:hover{background:#F2F8FA}',
      '#v-vokabeln .vp .vpx-bild{display:block;position:relative;min-height:250px;background:#0B5A70}',
      '#v-vokabeln .vp .vpx-bild img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
      '#v-vokabeln .vp .vpx-bild::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#0C5D74 0%,rgba(12,93,116,0) 38%)}',
      '#v-vokabeln .vp .vpx-bild.amanda{background:transparent;display:flex;align-items:flex-end;justify-content:center}',
      '#v-vokabeln .vp .vpx-bild.amanda::before{display:none}',
      '#v-vokabeln .vp .vpx-bild.amanda img{position:static;width:auto;height:170px;object-fit:contain}',
      '#v-vokabeln .vp .vp-teil h3{font-family:"Space Grotesk",Inter,sans-serif;font-size:21px;letter-spacing:-.01em}',
      '#v-vokabeln .vp .vp-teil header p{color:#6B7A82}',
      '#v-vokabeln .vp .vp-kaesten{grid-template-columns:repeat(5,minmax(0,1fr));gap:0;background:#fff;border:1px solid #E7EBF0;border-radius:18px;overflow:hidden}',
      '#v-vokabeln .vp .vp-kasten{border:0;border-radius:0;border-right:1px solid #EEF2F5;padding:16px 16px 16px;background:#fff}',
      '#v-vokabeln .vp .vp-kasten:last-child{border-right:0}',
      '#v-vokabeln .vp .vp-kasten:hover:not(:disabled){transform:none;box-shadow:none;background:#F2F8FA}',
      '#v-vokabeln .vp .vp-kasten:disabled{opacity:1}',
      '#v-vokabeln .vp .vp-kasten:disabled .v,#v-vokabeln .vp .vp-kasten:disabled b{color:#9AA6AD}',
      '#v-vokabeln .vp .vp-kasten .v{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;font-size:30px;color:#0E6D85}',
      '#v-vokabeln .vp .vp-kasten .w{color:#6B7A82}',
      '#v-vokabeln .vp .vp-niv{display:inline-flex;flex-wrap:nowrap;gap:4px;padding:4px;background:#F1F4F7;border:1px solid #E7EBF0;border-radius:14px;max-width:100%;overflow-x:auto;scrollbar-width:none}',
      '#v-vokabeln .vp .vp-niv::-webkit-scrollbar{display:none}',
      '#v-vokabeln .vp .vp-nchip{flex:0 0 auto;border:0;background:transparent;border-radius:10px;padding:9px 14px;color:#4B5A63;font-weight:600;min-height:40px}',
      '#v-vokabeln .vp .vp-nchip.an{background:#fff;color:#0A4E62;box-shadow:0 2px 8px -3px rgba(18,24,31,.25)}',
      '#v-vokabeln .vp .vp-hinweis{background:#F2F8FA;border:1px solid #D5E8EE;color:#0A4E62;border-radius:16px}',
      '@media(max-width:760px){',
      '  #v-vokabeln .vp .vp-heute.vpx-held{grid-template-columns:1fr;border-radius:20px}',
      '  #v-vokabeln .vp .vpx-bild{order:-1;min-height:0;aspect-ratio:16/7}',
      '  #v-vokabeln .vp .vpx-bild::before{background:linear-gradient(0deg,#0D6680 0%,rgba(13,102,128,0) 55%)}',
      '  #v-vokabeln .vp .vpx-bild.amanda{aspect-ratio:auto;order:2}',
      '  #v-vokabeln .vp .vpx-bild.amanda img{height:110px}',
      '  #v-vokabeln .vp .vpx-held .tx{padding:14px 18px 20px}',
      '  #v-vokabeln .vp .vpx-held .vp-los{width:100%}',
      '  #v-vokabeln .vp .vp-kaesten{grid-template-columns:repeat(5,minmax(0,1fr))}',
      '  #v-vokabeln .vp .vp-kasten{padding:12px 6px;align-items:center;text-align:center}',
      '  #v-vokabeln .vp .vp-kasten .nr,#v-vokabeln .vp .vp-kasten .w{display:none}',
      '  #v-vokabeln .vp .vp-kasten b{font-size:11.5px}',
      '  #v-vokabeln .vp .vp-kasten .v{font-size:21px}',
      '  #v-vokabeln .vp .vp-regale{grid-template-columns:1fr 1fr}',
      '}'
    ].join('\n');
    document.head.appendChild(st);
  }

  function vbxStil() {
    if (document.getElementById('vbx-stil')) return;
    var st = document.createElement('style'); st.id = 'vbx-stil';
    var V = '#v-vokabeln .vp ';
    st.textContent = [
      /* Bühne: Schwarz nach Petrol, Flaggenstreifen unten */
      V + '.vp-heute.vpx-held{position:relative;overflow:hidden;background:linear-gradient(135deg,#14181B 0%,#123844 55%,#0E6D85 100%)}',
      V + '.vp-heute.vpx-held::after{content:"";position:absolute;left:0;right:0;bottom:0;height:5px;z-index:3;background:linear-gradient(90deg,#14181B 0 33.3%,#D42A21 33.3% 66.6%,#E0A800 66.6%)}',
      V + '.vpx-bild::before{background:linear-gradient(90deg,#123844 0%,rgba(18,56,68,0) 40%)}',
      V + '.vpx-held .vp-zuruf{color:#E0A800}',
      V + '.vpx-held .vp-los{background:#fff;color:#14181B}',
      /* Kästen mit Farbstreifen */
      V + '.vp-kasten{position:relative;border-top:4px solid var(--kf)!important}',
      V + '.vp-kasten .v{color:var(--kf)!important}',
      V + '.vp-kasten[style*="#E0A800"] .v{color:#8A6500!important}',
      V + '.vp-kasten:disabled .v{color:#9AA6AD!important}',
      V + '.vbx-faellig{position:absolute;right:10px;bottom:12px;font-size:11px;font-weight:800;color:#fff;background:#D42A21;border-radius:999px;padding:2px 8px}',
      /* Niveau-Leiter */
      V + '.vp-nchip[data-lv]::before{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px;background:var(--lf)}',
      V + '.vp-nchip[data-lv="A1"]{--lf:#1B9BC0}' + V + '.vp-nchip[data-lv="A2"]{--lf:#0E6D85}' + V + '.vp-nchip[data-lv="B1"]{--lf:#E0A800}'
        + V + '.vp-nchip[data-lv="B2"]{--lf:#D42A21}' + V + '.vp-nchip[data-lv="C1"],' + V + '.vp-nchip[data-lv="C2"]{--lf:#14181B}',
      V + '.vp-nchip[data-lv].an{box-shadow:inset 0 -3px 0 var(--lf),0 2px 8px -3px rgba(18,24,31,.25)}',
      V + '.vp-thema .bal i,' + V + '.vp-regal .bal i{background:linear-gradient(90deg,#0E6D85,#1B9BC0)}',
      /* Lernweg */
      V + '.vbx-weg{background:#fff;border:1px solid #E7EBF0;border-radius:18px;padding:0;overflow:hidden}',
      V + '.vbx-weg summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px}',
      V + '.vbx-weg summary::-webkit-details-marker{display:none}',
      V + '.vbx-weg summary::after{content:"";width:9px;height:9px;border-right:2px solid #5F6B76;border-bottom:2px solid #5F6B76;transform:rotate(45deg);transition:transform .2s;flex:0 0 auto}',
      V + '.vbx-weg[open] summary::after{transform:rotate(-135deg)}',
      V + '.vbx-weg summary b{display:block;font-family:"Space Grotesk",Inter,sans-serif;font-size:18px;color:#14181B}',
      V + '.vbx-weg summary i{display:block;font-style:normal;font-size:13.5px;color:#5F6B76;margin-top:2px}',
      V + '.vbx-schritte{list-style:none;margin:0;padding:4px 20px 6px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}',
      V + '.vbx-schritte li{border-top:4px solid var(--sf);background:#F8FAFB;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:5px}',
      V + '.vbx-schritte .nr{width:26px;height:26px;border-radius:50%;background:var(--sf);color:#fff;font-weight:800;font-size:13px;display:inline-flex;align-items:center;justify-content:center}',
      V + '.vbx-schritte li[style*="#E0A800"] .nr{color:#14181B}',
      V + '.vbx-schritte b{font-size:15px;color:#14181B}',
      V + '.vbx-schritte span:last-child{font-size:13.5px;line-height:1.5;color:#4B5763}',
      V + '.vbx-weg-fuss{margin:8px 20px 18px;font-size:13.5px;color:#5F6B76;line-height:1.55}',
      /* Wortlisten */
      V + '.vbx-liste{display:grid;gap:8px}',
      V + '.vbx-wz{cursor:pointer;transition:border-color .15s,box-shadow .15s}',
      V + '.vbx-wz:hover{border-color:#BFDDE6;box-shadow:0 6px 16px -12px rgba(16,24,40,.4)}',
      V + '.vbx-wz{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:14px;align-items:center;background:#fff;border:1px solid #E7EBF0;border-radius:16px;padding:12px 14px}',
      V + '.vbx-wz .vt-bild.mini{width:52px;height:52px;border-radius:12px;margin:0}',
      V + '.vbx-wz .tx{display:flex;flex-direction:column;gap:3px;min-width:0}',
      V + '.vbx-wz .tx b{font-size:16.5px;color:#14181B;display:flex;align-items:center;gap:7px;flex-wrap:wrap}',
      V + '.vbx-wz .bed{font-size:13.5px;color:#4B5763}',
      V + '.vbx-wz .bsp{font-size:14px;color:#2A2F33;line-height:1.5}',
      V + '.vbx-wz .re{display:flex;flex-direction:column;align-items:flex-end;gap:8px}',
      V + '.vbx-kp{font-size:11.5px;font-weight:800;white-space:nowrap;color:var(--kf);background:#fff;border:1.5px solid var(--kf);border-radius:999px;padding:2px 9px}',
      V + '.vbx-kp[style*="#E0A800"]{color:#8A6500}',
      V + '.vbx-such{background:#FFF3C4;color:inherit;border-bottom:2px solid #E0A800;padding:0 1px}',
      V + '.vbx-knoepfe{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}',
      V + '.vbx-b{border:0;border-radius:12px;background:#14181B;color:#fff;font:700 14.5px Inter,system-ui,sans-serif;padding:12px 18px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center}',
      V + '.vbx-b:hover{background:#000}',
      V + '.vbx-b.hell{background:#fff;color:#14181B;border:1px solid #D5DCE3}',
      V + '.vbx-leerkarte{display:flex;gap:14px;align-items:center;background:#FFFBEA;border:1px dashed #E0A800;border-radius:16px;padding:16px 18px}',
      V + '.vbx-leerkarte .ic{flex:0 0 auto;width:40px;height:40px;border-radius:12px;background:#E0A800;color:#14181B;font-size:24px;font-weight:800;display:flex;align-items:center;justify-content:center}',
      V + '.vbx-leerkarte div{flex:1;display:flex;flex-direction:column;gap:3px}',
      V + '.vbx-leerkarte div span{font-size:14px;color:#4B5763;line-height:1.5}',
      V + '.vbx-suche{display:flex;align-items:center;gap:10px;background:#fff;border:1.5px solid #D5DCE3;border-radius:14px;padding:4px 14px;margin-bottom:12px}',
      V + '.vbx-suche:focus-within{border-color:#0E6D85;box-shadow:0 0 0 3px rgba(14,109,133,.12)}',
      V + '.vbx-suche span{font-size:18px;color:#5F6B76;transform:rotate(-45deg)}',
      V + '.vbx-suche input{flex:1;border:0;outline:0;font:500 16px Inter,system-ui,sans-serif;padding:11px 0;background:transparent;min-width:0}',
      V + '.vbx-nichts{color:#5F6B76;font-size:14px}',
      /* Übungskarten */
      'html #vtVoll .vt-bar>i{background:linear-gradient(90deg,#14181B,#D42A21 55%,#E0A800)!important}',
      '#vtVoll .vt-hoerknopf{background:linear-gradient(135deg,#0E6D85,#1B9BC0);box-shadow:0 14px 30px -12px rgba(14,109,133,.55)}',
      '#vtVoll .vt-langsam:hover{border-color:#0E6D85;color:#0E6D85}',
      '#vtVoll .vt-etikett{background:#fff;color:var(--tf);border:1.5px solid var(--tf);box-shadow:none;font-weight:800}',
      '#vtVoll .vt-etikett .gr{background:var(--tf);color:#fff;border-radius:999px;padding:2px 9px;margin:-2px 4px -2px -8px;font-size:11px;letter-spacing:.06em;text-transform:uppercase}',
      '#vtVoll .vt-etikett[style*="#8A6500"] .gr{background:#E0A800;color:#14181B}',
      '#vtVoll .vt-pruefen{background:#14181B!important;color:#fff!important;box-shadow:none!important}',
      '#vtVoll .vt-weiter:not(.rot){background:#14181B!important;color:#fff!important;box-shadow:none!important}',
      '#vtVoll .vt-weiter.rot{background:#D42A21!important;box-shadow:none!important}',
      '#vtVoll .vt-o:hover:not(:disabled){border-color:#0E6D85;box-shadow:0 4px 0 #CFE3EA}',
      '#vtVoll .vt-o.richtig{border-color:#0E6D85;background:#E8F4F7;color:#0A4E62;box-shadow:0 3px 0 #BFDDE6}',
      '#vtVoll .vt-o.falsch{border-color:#D42A21;background:#FDF0EF;color:#9E1F18;box-shadow:0 3px 0 #F3C0BC}',
      '#vtVoll .vt-o .taste{color:#fff;border:0;background:#14181B;border-radius:5px;padding:0 5px;font-size:10px;line-height:16px;left:7px;top:7px}',
      '#vtVoll .vt-opt>.vt-o:nth-child(2) .taste{background:#D42A21}',
      '#vtVoll .vt-opt>.vt-o:nth-child(3) .taste{background:#E0A800;color:#14181B}',
      '#vtVoll .vt-opt>.vt-o:nth-child(4) .taste{background:#1B9BC0}',
      '#vtVoll .vt-mark{background:#FFF3C4;border-bottom:3px solid #E0A800;border-radius:4px;padding:0 4px}',
      '#vtVoll .vt-mark.gruen{background:#E3F2F6;border-bottom-color:#0E6D85}',
      '#vtVoll .vt-mark.rot{background:#FDE8E6;border-bottom-color:#D42A21}',
      '#vtVoll .vt-fuss.gut{background:#F1F8FA;border-top-color:#0E6D85}',
      '#vtVoll .vt-fuss.gut b{color:#0A4E62}',
      '#vtVoll .vt-fuss.schlecht{background:#FDF5F4;border-top-color:#D42A21}',
      '#vtVoll .vt-fuss.schlecht b{color:#9E1F18}',
      '#vtVoll .vt-bed span{color:#0E6D85}',
      '#vtVoll .vt-satzbox.mitlabel.hinweis::before{content:"So benutzt man es"}',
      '#vtVoll .vt-satzbox.mitlabel.zumwort::before{content:"Zum Wort"}',
      V + '.vbx-quellen{display:inline-flex;flex-wrap:wrap;gap:4px;padding:4px;background:#F1F4F7;border:1px solid #E7EBF0;border-radius:14px;margin-bottom:14px;max-width:100%;overflow-x:auto;scrollbar-width:none}',
      V + '.vbx-quellen i{font-style:normal;color:#5F6B76;font-weight:700;margin-left:4px}',
      V + '.vbx-tr{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}',
      V + '.vbx-trk{position:relative;text-align:left;display:flex;flex-direction:column;gap:4px;background:#fff;border:1px solid #E7EBF0;border-top:4px solid var(--tf);border-radius:14px;padding:14px 14px 12px;cursor:pointer;font-family:inherit;transition:transform .15s,box-shadow .15s}',
      V + '.vbx-trk:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 10px 22px -14px rgba(16,24,40,.35)}',
      V + '.vbx-trk b{font-size:15.5px;color:#14181B}',
      V + '.vbx-trk span{font-size:13px;line-height:1.45;color:#4B5763}',
      V + '.vbx-trk i{font-style:normal;font-size:12px;font-weight:800;color:var(--tf);margin-top:4px}',
      V + '.vbx-trk[style*="#E0A800"] i{color:#8A6500}',
      V + '.vbx-trk:disabled{opacity:.5;cursor:default}',
      '#vtVoll .vbx-karte .vbx-hinten{animation:vbxAuf .25s ease-out}',
      '@keyframes vbxAuf{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}',
      '#vtVoll .vbx-selbst{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}',
      '#vtVoll .vbx-selbst[hidden]{display:none}',
      '#vtVoll .vbx-bildpaare .vt-pk{min-height:88px;justify-content:center;text-align:center}',
      '#vtVoll .vbx-bildpaare .vt-sp{gap:10px}',
      '#vtVoll .vbx-selbst button{border-radius:16px;padding:18px;font:800 17px Inter,system-ui,sans-serif;cursor:pointer}',
      '#vtVoll .vbx-selbst .nein{background:#fff;color:#D42A21;border:2px solid #D42A21}',
      '#vtVoll .vbx-selbst .ja{background:#0E6D85;color:#fff;border:2px solid #0E6D85}',
      '@media(max-width:760px){' + V + '.vbx-tr{grid-template-columns:1fr 1fr;gap:8px}' + V + '.vbx-trk{padding:12px 11px 10px}' + V + '.vbx-trk span{font-size:12.5px}}',
      '#vbxSheet{position:fixed;inset:0;z-index:10050;display:flex;align-items:flex-end;justify-content:center}',
      '#vbxSheet .vbx-sh-bg{position:absolute;inset:0;background:rgba(20,24,27,.55)}',
      '#vbxSheet .vbx-sh{position:relative;width:min(560px,100%);max-height:92vh;overflow:auto;background:linear-gradient(90deg,#14181B 0 33.3%,#D42A21 33.3% 66.6%,#E0A800 66.6%) top/100% 5px no-repeat,#fff;border-radius:22px 22px 0 0;padding:26px 20px 24px;box-shadow:0 -10px 40px rgba(0,0,0,.25);animation:vbxAuf .22s ease-out}',
      '@media(min-width:761px){#vbxSheet{align-items:center}#vbxSheet .vbx-sh{border-radius:22px}}',
      '#vbxSheet .vbx-sh-x{position:absolute;top:10px;right:12px;width:36px;height:36px;border:0;border-radius:50%;background:#F1F4F7;font-size:22px;cursor:pointer;color:#14181B}',
      '#vbxSheet .vbx-sh-kopf{display:flex;gap:16px;align-items:center;margin-bottom:14px;padding-right:36px}',
      '#vbxSheet .vbx-sh-kopf .vt-bild.gr{width:110px;height:110px;border-radius:18px;margin:0;flex:0 0 auto}',
      '#vbxSheet .vbx-sh-kopf h2{font:700 26px/1.2 "Space Grotesk",Inter,sans-serif;margin:0 0 8px;color:#14181B;display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
      '#vbxSheet .vbx-steck{display:flex;flex-wrap:wrap;gap:6px}',
      '#vbxSheet .vbx-steck span{font-size:12px;font-weight:700;color:#4B5763;background:#F1F4F7;border-radius:999px;padding:3px 10px}',
      '#vbxSheet .vbx-steck .lv{background:var(--lf);color:#fff}',
      '#vbxSheet .vbx-steck .lv[style*="#E0A800"]{color:#14181B}',
      '#vbxSheet .vbx-sh-b{margin:0 0 12px}',
      '#vbxSheet .vbx-sh-b span{display:block;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0E6D85;margin-bottom:3px}',
      '#vbxSheet .vbx-sh-b p{margin:0;font-size:16px;line-height:1.55;color:#2A2F33}',
      '#vbxSheet .vbx-sh-b.satz p{font-size:18px;background:#F8FAFB;border-radius:12px;padding:10px 12px}',
      '#vbxSheet .vbx-sh-b.gut{border-left:4px solid #E0A800;background:#FFFBEA;border-radius:0 12px 12px 0;padding:8px 12px}',
      '#vbxSheet .vbx-sh-b.gut span{color:#8A6500}',
      '#vbxSheet .vt-mark{background:#FFF3C4;border-bottom:3px solid #E0A800;border-radius:4px;padding:0 3px;font-weight:700}',
      '#vbxSheet .vbx-sh-stand{border-top:1px solid #EEF2F5;padding-top:12px;margin-top:4px}',
      '#vbxSheet .vbx-sh-stand p{margin:6px 0 0;font-size:14px;color:#4B5763}',
      '#vbxSheet .vbx-sh-kaesten{display:flex;gap:4px;flex-wrap:wrap}',
      '#vbxSheet .vbx-sh-kaesten span{font-size:12px;font-weight:700;color:#9AA6AD;border:1px solid #E1E6EA;border-radius:999px;padding:2px 10px}',
      '#vbxSheet .vbx-sh-kaesten span.hier{background:var(--kf);border-color:var(--kf);color:#fff}',
      '#vbxSheet .vbx-sh-kaesten span.hier[style*="#E0A800"]{color:#14181B}',
      '#vbxSheet .vbx-knoepfe{display:flex;gap:10px;margin-top:16px}',
      '#vbxSheet .vbx-b{flex:1;justify-content:center;white-space:nowrap;border:0;border-radius:12px;background:#14181B;color:#fff;font:700 15px Inter,system-ui,sans-serif;padding:13px 16px;cursor:pointer;display:inline-flex}',
      '#vbxSheet .vbx-b.hell{background:#fff;color:#14181B;border:1px solid #D5DCE3}',
      '#vbxSheet .vt-lauts{width:38px;height:38px;border-radius:12px;font-size:16px}',
      '#vbxSheet .vt-lauts.klein{width:30px;height:30px;font-size:13px;vertical-align:middle}',
      '@media(max-width:760px){#vbxSheet .vbx-sh-kopf .vt-bild.gr{width:84px;height:84px}#vbxSheet .vbx-sh-kopf h2{font-size:22px}}',
      '#vtVoll{overflow-x:hidden;overscroll-behavior:contain}',
      '#vtVoll .vt-buehne{overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}',
      '#vtVoll .vt-karte{max-width:100%;box-sizing:border-box}',
      '#vtVoll .vt-o,#vtVoll .vt-pk,#vtVoll .vt-satz{overflow-wrap:break-word;word-break:normal;hyphens:auto;-webkit-hyphens:auto}',
      '#vtVoll .vt-gross{overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto}',
      '#vtVoll img{max-width:100%}',
      '#v-vokabeln .vp{overflow-x:clip}',
      '#v-vokabeln .vbx-wz .tx b,#v-vokabeln .vbx-wz .bsp,#v-vokabeln .vbx-wz .bed{overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto}',
      '@media(max-width:360px){#vtVoll .vt-pk{font-size:13px;padding:10px 8px}#vtVoll .vbx-bildpaare .vbx-pkb .vt-bild.mini{width:60px;height:60px}}',
      '#vtVoll .vbx-gut{margin:-14px 0 22px;padding:10px 14px;border-left:4px solid #E0A800;background:#FFFBEA;border-radius:0 12px 12px 0;font-size:15px;color:#2A2F33;line-height:1.5}',
      '#vtVoll .vbx-gut span{display:block;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#8A6500;margin-bottom:2px}',
      '#vtVoll .vt-satzbox.hinweis .vt-satz,#vtVoll .vt-satzbox.zumwort .vt-satz{font-size:clamp(18px,2.4vw,24px)}',
      '#vtVoll .vbx-erkl{position:relative;padding-top:34px;border-color:#BFDDE6;background:#F3F9FB}',
      '#vtVoll .vbx-erkl-k{position:absolute;top:11px;left:18px;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0E6D85}',
      '#vtVoll .vbx-erkl .vt-satz{font-size:clamp(19px,2.6vw,26px);line-height:1.45}',
      '#vtVoll .vt-o.vbx-lang{font-size:16px;font-weight:600;line-height:1.45;padding:18px 22px 18px 34px;text-align:left}',
      '#vtVoll .vbx-tipp{text-align:center;color:#5F6B76;font-size:15px;margin:-4px 0 14px}',
      '#vtVoll .vbx-tipp b{display:inline-block;min-width:26px;padding:1px 7px;border-radius:7px;background:#FFF3C4;color:#14181B;border-bottom:2px solid #E0A800}',
      '#vtVoll .vbx-pkb{justify-content:center;padding:6px}',
      '#vtVoll .vbx-pkb .vt-bild.mini{width:72px;height:72px;border-radius:12px;margin:0}',
      '#vtVoll .vt-pk:hover{border-color:#0E6D85}',
      '#vtVoll .vt-pk.gewaehlt{border-color:#14181B;background:#F1F4F7;box-shadow:0 3px 0 #C9D1D8}',
      '#vtVoll .vt-pk.fertig{border-color:#0E6D85;background:#E8F4F7;color:#0A4E62;box-shadow:0 3px 0 #BFDDE6}',
      '#vtVoll .vt-pk.daneben{border-color:#D42A21;background:#FDF0EF}',
      '#vtVoll .vbx-steck{display:flex;justify-content:center;flex-wrap:wrap;gap:6px;margin:4px 0 14px}',
      '#vtVoll .vbx-steck span{font-size:12.5px;font-weight:700;color:#4B5763;background:#F1F4F7;border-radius:999px;padding:3px 11px}',
      '#vtVoll .vbx-steck .lv{background:var(--lf);color:#fff}',
      '#vtVoll .vbx-steck .lv[style*="#E0A800"]{color:#14181B}',
      '#vtVoll .vbx-wander{display:flex;gap:4px;margin:8px 0 4px;flex-wrap:wrap}',
      '#vtVoll .vbx-wander span{font-size:11.5px;font-weight:700;color:#9AA6AD;border:1px solid #E1E6EA;border-radius:999px;padding:2px 9px;background:#fff}',
      '#vtVoll .vbx-wander span.start{color:#5F6B76;border-style:dashed;border-color:#9AA6AD}',
      '#vtVoll .vbx-wander span.ziel{background:var(--kf);border-color:var(--kf);color:#fff}',
      '#vtVoll .vbx-wander span.ziel[style*="#E0A800"]{color:#14181B}',
      '#vtVoll .vt-ende .vt-ergz b{color:#14181B}',
      '@media(max-width:760px){',
      '  ' + V + '.vbx-schritte{grid-template-columns:1fr 1fr;padding:4px 14px 6px;gap:8px}',
      '  ' + V + '.vbx-schritte li{padding:12px}',
      '  ' + V + '.vbx-weg summary{padding:14px 16px}',
      '  ' + V + '.vbx-weg-fuss{margin:8px 16px 16px}',
      '  ' + V + '.vbx-wz{grid-template-columns:auto minmax(0,1fr);gap:12px;padding:12px}',
      '  ' + V + '.vbx-wz .vt-bild.mini{width:44px;height:44px}',
      '  ' + V + '.vbx-wz .re{grid-column:1/-1;flex-direction:row;justify-content:space-between;align-items:center}',
      '  ' + V + '.vbx-faellig{position:static;margin-top:4px;font-size:10px;padding:1px 6px}',
      '  ' + V + '.vbx-leerkarte{flex-wrap:wrap}',
      '  ' + V + '.vbx-leerkarte .vbx-b{width:100%;justify-content:center}',
      '  ' + V + '.vbx-knoepfe .vbx-b{flex:1;justify-content:center}',
      '}'
    ].join('\n');
    document.head.appendChild(st);
  }

  /* 22.11.2026, Julia: „in der mobilen Version robust, damit die Seite
     nicht hin und her springt“. Gemessen in der Vorschau am iPhone: die
     Startseite wurde beim Öffnen viermal neu geschrieben (Platzhalter,
     „wird geladen“, Seite, und nach dem Nachladen der Lernbereich-Dateien
     noch einmal ganz). Jedes Mal luden die Bilder neu und die Höhe
     änderte sich. Jetzt:
     - läuft schon ein Zeichnen, wartet ein zweiter Aufruf darauf,
     - steht schon dieselbe Seite da, wird nichts ersetzt,
     - wird doch ersetzt, bleibt die Scrollposition und die Suche stehen,
     - „wird geladen“ erscheint nur, wenn noch gar nichts dasteht. */
  var ZEICHNEN = null, NOCHMAL = false;
  window.renderVokabeln = function () {
    if (ZEICHNEN) { NOCHMAL = true; return ZEICHNEN; }
    ZEICHNEN = zeichneStart().catch(function () {}).then(function () {
      ZEICHNEN = null;
      if (NOCHMAL) { NOCHMAL = false; return window.renderVokabeln(); }
    });
    return ZEICHNEN;
  };
  async function zeichneStart() {
    /* Ohne Zugang wird hier nicht gezeichnet. Die Seite hat an dieser
       Stelle schon die Sperrseite stehen; frueher hat der Trainer sie
       ueberschrieben, sobald er geladen war, und ein Konto ohne Zugang
       sah die Woerter trotzdem. */
    if (window.zugangGesperrt && window.zugangGesperrt('vokabeln')) return;
    stil(); vpxStil(); vbxStil();
    var ziel = document.getElementById('v-vokabeln');
    if (!ziel) return;
    if (!(window.VOK_POOL && window.VOK_POOL.length)) {
      if (!ziel.innerHTML.trim()) ziel.innerHTML = '<div class="vt-leer">Deine Wörter werden geladen …</div>';
      await ladePool();
    }
    await ladeEigene();
    POOL = window.VOK_POOL || [];
    pflege(POOL);
    if (!POOL.length) {
      ziel.innerHTML = '<div class="vt-leer">Die Wortliste konnte nicht geladen werden. Lade die Seite bitte neu.</div>';
      return;
    }
    await ladeSprache();
    await ladeStand();
    if (LAEUFT) return;
    var html = startbild();
    if (ziel.__vbxHtml === html && ziel.querySelector('.vp')) return;
    var warDa = !!ziel.querySelector('.vp');
    var y = window.scrollY || 0;
    var such = document.getElementById('vbxSuche');
    var suchWert = such ? such.value : '';
    var suchFokus = such && document.activeElement === such;
    ziel.innerHTML = html;
    ziel.__vbxHtml = html;
    if (suchWert) {
      var neu = document.getElementById('vbxSuche');
      if (neu) { neu.value = suchWert; window.__vtSuche(neu); if (suchFokus) { try { neu.focus({ preventScroll: true }); } catch (e) {} } }
    }
    if (warDa && y) { try { window.scrollTo(0, y); } catch (e) {} }
  }

  window.VokTrainer = { neu: function () { return window.renderVokabeln(); } };

  /* Sicherheitsnetz. In konto.html liegen mehrere Dateien, die in
     denselben Kasten zeichnen — der einfache Trainer in der Seite
     selbst und vokabeln.js. Wer zuletzt malt, gewinnt, und das war
     nicht immer der hier. Also: sobald die Ansicht offen ist und
     noch nicht unsere Uebersicht zeigt, zeichnen wir sie. */
  function nachziehen() {
    if (window.zugangGesperrt && window.zugangGesperrt('vokabeln')) return;
    var v = document.getElementById('v-vokabeln');
    if (!v || !v.classList.contains('active')) return;
    if (v.querySelector('.vp')) return;
    if (LAEUFT) return;
    try { window.renderVokabeln(); } catch (e) {}
  }
  window.addEventListener('hashchange', function () { setTimeout(nachziehen, 60); });
  if (document.readyState === 'complete') setTimeout(nachziehen, 300);
  else window.addEventListener('load', function () { setTimeout(nachziehen, 300); });
  setTimeout(nachziehen, 1200);

  /* ------------------------------------------------------------
     window.vokabelStand — die Zahl, die der ganze Rest der Plattform liest

     vokabeln.js (der alte Trainer) definiert diese Funktion aus dem
     localStorage-Schluessel 'vok'. Diese Datei laedt NACH vokabeln.js und
     uebernimmt die Ansicht (window.renderVokabeln) — die Funktion aber
     liess sie stehen. Folge: Startseite, Seitenleiste, "Mein Bereich" und
     der Stand-Streifen lasen einen Trainer aus, den niemand mehr benutzt,
     und zeigten dauerhaft "0 Woerter gelernt", "0 Tage am Stueck" und
     "Heute steht nichts offen" — auch bei 200 faelligen Woertern.
     ------------------------------------------------------------ */
  function standNachAussen() {
    var pool  = (window.VOK_POOL || []);
    var heute = new Date().toISOString().slice(0, 10);
    var gelernt = 0, faellig = 0, neu = 0;

    if (pool.length) {
      pool.forEach(function (v) {
        var b = BEKANNT[v.id];
        if (!b) { neu++; return; }
        gelernt++;
        if (b.faellig && b.faellig <= heute) faellig++;
      });
    } else {
      /* Der Pool wird erst beim Oeffnen des Trainers geladen. Bis dahin
         zaehlen wir aus dem, was wir haben — besser eine richtige Zahl
         fuer die gelernten Woerter als ueberall eine 0. */
      Object.keys(BEKANNT).forEach(function (k) {
        gelernt++;
        var b = BEKANNT[k];
        if (b && b.faellig && b.faellig <= heute) faellig++;
      });
    }

    var letzter = STAND.tag || STAND.letzter_tag || null;
    var pause = null;
    if (letzter) {
      pause = Math.round((new Date(heute) - new Date(letzter)) / 86400000);
      if (!isFinite(pause) || pause < 0) pause = null;
    }
    return {
      gesamt:     pool.length || gelernt,
      neu:        neu,
      faellig:    faellig,
      gelernt:    gelernt,
      heute:      STAND.heute || 0,
      ziel:       STAND.ziel  || 20,
      serie:      STAND.serie || 0,
      letzterTag: letzter,
      pauseTage:  pause,
      erinnern:   (pause != null && pause >= 2)
    };
  }
  window.vokabelStand = standNachAussen;

  /* Die Zahlen muessen stehen, BEVOR jemand den Trainer oeffnet — die
     Startseite fragt sie beim allerersten Blick ab. Vorher wurde der
     Stand erst beim Betreten der Vokabelansicht geholt, und wer nie
     hineinging, sah ueberall Nullen und Gedankenstriche. */
  (function vorladen(versuch) {
    versuch = versuch || 0;
    var c = null; try { c = sb(); } catch (e) {}
    if (!c) { if (versuch < 12) setTimeout(function () { vorladen(versuch + 1); }, 800); return; }
    try { ladeStand(); } catch (e) {}
  })();
})();
