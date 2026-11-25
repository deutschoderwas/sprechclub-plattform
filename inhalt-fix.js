/* ============================================================
   inhalt-fix.js — inhaltliche Korrekturen in den Übungen

   25.11.2026. Ein Prüf-Agent hat alle Lese-, Hör- und Fehler-
   Aufgaben, alle Lektionsaufgaben und Stichproben aus Grammatik
   und Wortschatz gelesen (82 Befunde). Diese Datei behebt sie,
   ohne die erzeugten Dateien (uebungen.js, hoer-*.js, vielfalt …)
   anzufassen: Sie läuft nach allen Übungsdateien, und noch einmal
   jedes Mal, wenn vielfalt.js neue Formen baut. Alles ist
   wiederholbar (zweimal anwenden ändert nichts mehr).

   Regelarten
     R  Aufgabe heraus (z. B. Hörtext mit falscher Sachangabe,
        der sich nicht ändern lässt, weil er aufgenommen ist)
     T  Text ersetzen, in allen Feldern einer Aufgabe; ___ steht
        für jede Lücke (___ oder _____)
     L  richtige Lösung ändern (Lücke und Auswahl)
     A  weitere richtige Lösungen bei Lücken; in Auswahlfragen
        fliegt ein Vorschlag raus, der dadurch auch richtig wäre
     O  einen falschen Auswahlvorschlag austauschen
     S  Felder einer Aufgabe neu setzen
   ============================================================ */
(function () {
  'use strict';

  /* Welche Texte in einer Aufgabe nie angefasst werden: der
     absichtlich falsche Satz bei „Finde den Fehler“. */
  function istFehlerSatz(e, f) { return e.type === 'fehler' && f === 'satz'; }

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function lueckenRegex(s) { return new RegExp(s.split('___').map(esc).join('(_{2,})'), 'g'); }
  function norm(s) { return String(s == null ? '' : s).replace(/^🧩\s*Was (passt|fehlt)\?\s*/, '').replace(/_{2,}/g, '___'); }
  function satzVon(e) { return norm(e.text || e.satz || e.q || ''); }

  function jedeAufgabe(k, fn) {
    var U = window.UEBUNGEN; if (!U || !U.skills) return;
    var teile = k.split('|');
    U.skills.forEach(function (sk) {
      if (teile[0] !== '*' && sk.id !== teile[0]) return;
      (sk.themes || []).forEach(function (t) {
        if (teile[1] !== '*' && t.id !== teile[1]) return;
        fn(t, sk);
      });
    });
  }
  function textIn(e, s) {
    var gef = false;
    (function geh(o) {
      if (gef || o == null) return;
      if (typeof o === 'string') { if (o.indexOf(s) > -1) gef = true; return; }
      if (Array.isArray(o)) { o.forEach(geh); return; }
      if (typeof o === 'object') for (var key in o) if (key !== 'audioUrl' && key !== 'img') geh(o[key]);
    })(e);
    return gef;
  }
  function ersetzeUeberall(e, re, neu) {
    var teile = neu.split('___');
    function ers() {
      var a = arguments, out = teile[0];
      for (var i = 1; i < teile.length; i++) out += (a[i] || '___') + teile[i];
      return out;
    }
    (function geh(o) {
      if (!o || typeof o !== 'object') return;
      for (var key in o) {
        if (key === 'audioUrl' || key === 'img') continue;
        var v = o[key];
        if (typeof v === 'string') { if (!istFehlerSatz(o, key)) { re.lastIndex = 0; o[key] = v.replace(re, ers); } }
        else if (Array.isArray(v)) {
          v.forEach(function (x, i) { if (typeof x === 'string') { re.lastIndex = 0; v[i] = x.replace(re, ers); } else geh(x); });
        } else if (v && typeof v === 'object') geh(v);
      }
    })(e);
  }
  function gleich(a, b) { return String(a).trim().toLowerCase() === String(b).trim().toLowerCase(); }

  /* ---------- Regeln ---------- */
  var MEDIZIN = ['hoeren|b2-arzt-befund', 'hoeren|medizin', 'wortschatz|a2-arzt', 'wortschatz|b2-gesundheit', 'wortschatz|c1-arzt'];

  var R = [
    /* Fragen zu Hörtext-Ausschnitten (…), die nach Dingen außerhalb des Ausschnitts fragten */
    ['*|*', function (e) { return e.type === 'listen' && e.__hf && /^…/.test(e.transcript || ''); }],
    /* Aufnahmen mit falscher Sachangabe (Aufnahme lässt sich nicht ändern) */
    ['hoeren|rechte', 'mit der Post, ein Foto'],                 // Krankschreibung kommt seit 2023 elektronisch
    ['wortschatz|a2-amt', 'Ausweis und den Mietvertrag'],        // Anmeldung: Wohnungsgeberbestätigung, nicht Mietvertrag
    ['hoeren|b2-wohnen-vertrag', 'drei geeignete Leute'],        // „drei Nachmieter“ ist ein Mythos
    ['hoeren|bank', 'zweimal mit falscher Geheimzahl'],          // gesperrt wird nach drei Fehlversuchen
    ['hoeren|werkstatt', 'bekommen Sie keine Plakette'],         // bei geringen Mängeln gibt es die Plakette
    ['hoeren|handel', 'entweder ein neues Gerät oder einen Gutschein'], // Gutschein muss man nicht nehmen
    ['hoeren|bau', 'Hallo Herr Demir'],                          // „Herr Demir“ und dann du
    ['hoeren|umgangssprache', 'Der Zug war schon weg, aber dann hatte er'], // widerspricht sich
    /* Fehler-Aufgaben ohne eindeutigen Fehler */
    ['aussprache|vokale', 'Das Bett steht neben dem Fenster und es ist bequem.'],
    ['lesen-schreiben|lesen-a1-alltag', 'in die Praxis mit.'],
    ['wortschatz|b2-geld', 'Bitte kündigen Sie mir den Vertrag bis zum 30.9. auf.'],
    ['wortschatz|c1-abwaegen', 'ob Sie zustimmen oder nicht zustimmen wollen'],
    ['lesen-schreiben|lesen-kommentar-c1', 'sondern wie sie kommuniziert wurde.'],
    ['wortschatz|c1-vertrag', 'Ich bestehe auf die Nachbesserung'],
    ['grammatik|feine-konnektoren-c1', '„Es sei denn" steht fast immer'],
    ['aussprache|fremdwoerter-b1', 'Wie spricht man das on in „Balkon“?']
  ];

  var T = [
    /* Rechtschreibung, Grammatik, Logik */
    ['grammatik|partikeln-c1', 'Das Ergebnis ist ___ nicht zufriedenstellend.', 'Das Ergebnis ist ___ zufriedenstellend, im Gegenteil: Wir müssen alles neu machen.'],
    ['grammatik|partikeln-c1', 'Mit „durchaus nicht" oder „keineswegs" wird die Verneinung deutlich verstärkt.', '„keineswegs“ verneint stark: ganz und gar nicht. Deshalb passt danach „im Gegenteil“.'],
    ['grammatik|praepositionen-gehoben', 'ohne steht mit Akkusativ, nicht mit Genitiv — der Klassiker unter den Verwechslungen.', 'mangels + Genitiv: weil etwas fehlt. „ohne“ steht mit Akkusativ: ohne einen Nachweis.'],
    ['grammatik|praepositionen-gehoben', '___ des Umzugs bleibt das Büro am Freitag geschlossen.', '___ des Firmenjubiläums lädt die Firma alle Kunden zu einem Empfang ein.'],
    ['grammatik|weil-dass-wenn', 'Wir gehen spazieren, ___ das Wetter gut ist.', 'Wir gehen morgen spazieren, ___ das Wetter gut ist. Sonst bleiben wir zu Hause.'],
    ['grammatik|weil-dass-wenn', 'Ich bleibe zu Hause, ___ es regnet.', 'Ich bleibe heute zu Hause, ___ es schon den ganzen Tag regnet.'],
    ['grammatik|weil-dass-wenn', '___ ich Zeit habe, rufe ich dich an.', '___ ich heute Abend noch Zeit habe, rufe ich dich an. Vielleicht klappt es aber nicht.'],
    ['grammatik|nebensaetze', 'Ich gehe raus, ___ es regnet.', 'Ich gehe ohne Schirm raus, ___ es stark regnet.'],
    ['grammatik|temporale-nebensaetze', '___ du gehst, ruf mich bitte an.', '___ du gehst, ruf mich bitte noch einmal an.'],
    ['grammatik|passiv-b2', 'Die Rechnung ___ noch heute bezahlt.', 'Die Rechnung ___ morgen bezahlt.'],
    ['grammatik|verben-mit-praeposition', 'sich bewerben um + Akkusativ.', 'sich bewerben um oder auf + Akkusativ.'],
    ['grammatik|modalverben', 'Kinder unter zwölf ___ vorne nicht sitzen', 'Kinder unter zwölf ___ nur mit Kindersitz im Auto mitfahren'],
    ['grammatik|modalverben', 'Kinder unter zwölf dürfen vorne nicht sitzen', 'Kinder unter zwölf dürfen nur mit Kindersitz im Auto mitfahren'],
    ['grammatik|korrelate', 'Ohne das Korrelat fehlt dem Satz ein Bein.', 'Das Korrelat davon ist hier üblich, aber nicht Pflicht.'],
    ['grammatik|a1-artikel', 'Alle Wörter auf -ung sind feminin', 'Nomen mit der Nachsilbe -ung sind feminin'],
    ['aussprache|knacklaut', 'vereisen und ver-eisen', 'vereisen und verreisen'],
    ['aussprache|v-w-f', 'Wasser klingt nicht wie im Englischen water beginnt.', 'Wasser beginnt nicht so wie das englische water.'],
    ['aussprache|vokallaenge-b2', 'Das Dehnungs-h ist stumm: Zahl, Jahr, ihn, Ruhe. Man hört es nie, man sieht es nur.', 'Das Dehnungs-h ist stumm: Zahl, Jahr, ihn, Uhr. Man hört es nicht, man sieht es nur.'],
    ['aussprache|h-laut-a2', 'Nach einem Vokal ist das h immer stumm. Es steht nur da, um zu sagen: Dieser Vokal ist lang. Genauso bei sehen, nehmen, wohnen.', 'Zwischen zwei Vokalen hört man das h in der normalen Aussprache nicht: gehen klingt wie „geen“. Genauso bei sehen und Ruhe.'],
    ['grammatik|partikeln-c1', 'Betontes „ja" am Satzanfang drückt genau diese Resignation aus.', 'Das unbetonte „ja“ im Satz drückt genau diese Resignation aus: Man hat es kommen sehen.'],
    ['lesen-schreiben|lesen-b2-stellenanzeige', 'Welche der drei Punkte ist', 'Welcher der drei Punkte ist'],
    ['lesen-schreiben|lesen-b2-zahlen', 'der Kleingedruckte den Zeitraum', 'das Kleingedruckte den Zeitraum'],
    ['wortschatz|a2-umzug', 'Bitte ist die Wohnung dann leer und sauber.', 'Bitte sorgen Sie dafür, dass die Wohnung dann leer und sauber ist.'],
    ['wortschatz|a2-umzug', 'Beim ___ ziehen bunte Wagen durch die ganze Stadt', 'Beim ___ helfen mir zwei Freunde mit den Kartons'],
    ['wortschatz|a2-umzug', 'Beim Umzug ziehen bunte Wagen durch die ganze Stadt', 'Beim Umzug helfen mir zwei Freunde mit den Kartons'],
    ['wortschatz|a2-umzug', 'Beim §Umzug§ ziehen bunte Wagen durch die ganze Stadt', 'Beim §Umzug§ helfen mir zwei Freunde mit den Kartons'],
    ['wortschatz|a2-umzug', 'Zwei Verben ohne zu gehen hier nicht.', '„helfen tragen“ in dieser Reihenfolge geht nicht.'],
    ['hoeren|a1-zahlen', 'Zehn Euro Schein', 'Zehneuroschein'],
    ['hoeren|c1-zwischen-den-zeilen', 'Was hat die anrufende Person gemacht, um die Zusage ernst zu meinen?', 'Woran zeigt die anrufende Person, dass sie ihr Interesse ernst meint?'],
    ['hoeren|bau', 'Weil dort gerade der Kran gearbeitet wird', 'Weil dort gerade der Kran arbeitet'],
    ['hoeren|b2-reise-stoerung', 'einhundertzehn Minuten', 'einhundertfünfundzwanzig Minuten'],
    ['wortschatz|a2-cafe', 'Verkäufer: Gern, sind die noch warm genug? Sie sind ganz frisch.', 'Verkäufer: Gern. Frau: Sind die noch warm genug? Verkäufer: Sie sind ganz frisch.'],
    ['wortschatz|a2-unterwegs', 'Was soll Frau Nowak machen?', 'Was soll die Person machen?'],
    ['wortschatz|a1-tagesablauf', 'Um ___ mache ich eine halbe Stunde Pause', 'Am ___ mache ich eine halbe Stunde Pause'],
    ['wortschatz|a1-tagesablauf', 'Um Mittag mache ich eine halbe Stunde Pause', 'Am Mittag mache ich eine halbe Stunde Pause'],
    ['wortschatz|a1-tagesablauf', 'Um §Mittag§ mache ich eine halbe Stunde Pause', 'Am §Mittag§ mache ich eine halbe Stunde Pause'],
    ['*|*', 'Die Bus ___ ist direkt vor dem Supermarkt', 'Die ___ ist direkt vor dem Supermarkt'],
    ['*|*', 'Die Bus haltestelle ist direkt vor dem Supermarkt', 'Die Haltestelle ist direkt vor dem Supermarkt'],
    ['*|*', 'Die Bus§haltestelle§ ist direkt vor dem Supermarkt', 'Die §Haltestelle§ ist direkt vor dem Supermarkt'],
    ['*|*', 'Die Bus §haltestelle§ ist direkt vor dem Supermarkt', 'Die §Haltestelle§ ist direkt vor dem Supermarkt'],
    ['lesen-schreiben|lesen-a2-werbung', 'Kündigung: 3 Monate vor Ende, schriftlich.', 'Kündigung: 1 Monat vor Ende, per E-Mail oder Brief.'],
    ['lesen-schreiben|lesen-a2-werbung', 'Es heißt der Vorrat reicht, ohne aus. Ausreichen bedeutet etwas anderes — dass die Menge genügt.', 'Im Nebensatz steht das Verb zusammen am Ende: solange der Vorrat reicht (oder: ausreicht).'],
    ['lesen-schreiben|schreiben-beschwerde-b2', 'Das Gesetz sieht diese Reihenfolge vor: erst Nachbesserung, dann Ersatz.', 'Der Käufer darf wählen: Reparatur oder neues Gerät. Hier kommt zuerst die Reparatur, der Austausch ist der nächste Schritt — Geld zurück gibt es erst, wenn beides scheitert.'],
    ['wortschatz|integration', 'Vorurteile = Durch echte Begegnungen habe ich meine ___ abgebaut..', 'Vorurteile = feste Meinungen über Menschen, bevor man sie kennt.'],
    ['wortschatz|c1-amt', '„erhalten haben werden" gibt es nicht. Im Amtsdeutsch steht dort schlicht nach Erhalt.', '„erhalten haben werden“ (Futur II) ist hier unnötig und gestelzt. Im Amtsdeutsch steht dort schlicht nach Erhalt.'],
    ['wortschatz|c1-pflege', 'Und im Nebensatz steht das Verb am Ende.', 'Und der Infinitiv sagen steht am Satzende.'],
    ['grammatik|genitiv-b2', 'Nie, meinetwegen ist die richtige Form.', 'Nur umgangssprachlich — geschrieben heißt es meinetwegen.'],
    ['aussprache|endsilben-b2', 'kapitalÍSmus, TourÍSmus, OptimÍSmus', 'kapitaLISmus, TouRISmus, OptiMISmus'],
    ['aussprache|endsilben-b2', 'kapitalÍSmus', 'kapitaLISmus'],
    ['aussprache|endsilben-b2', 'kapitalisMÚS', 'kapitalisMUS'],
    ['wortschatz|b2-bildung', 'mit einer Ausnahme — die Pflegedokumentation und das Arzneimittelrecht fehlen.', 'mit zwei Ausnahmen: Die Pflegedokumentation und das Arzneimittelrecht fehlen.'],
    ['wortschatz|b2-bildung', 'Der Bescheid stellt teilweise Gleichwertigkeit fest und nennt eine Anpassungsmaßnahme von sechs Monaten. Frau Osei kann in dieser Zeit bereits als Pflegehelferin arbeiten und wird nach bestandener Kenntnisprüfung als Pflegefachfrau eingesetzt.', 'Der Bescheid stellt teilweise Gleichwertigkeit fest und nennt als Ausgleich einen Anpassungslehrgang von sechs Monaten. Frau Osei kann in dieser Zeit bereits als Pflegehelferin arbeiten und wird nach dem Lehrgang als Pflegefachfrau eingesetzt.'],
    ['wortschatz|b2-bildung', 'Die fehlenden sechs Monate absolvieren und die Kenntnisprüfung ablegen.', 'Den sechsmonatigen Anpassungslehrgang absolvieren.'],
    ['wortschatz|b2-bildung', 'Deshalb steht am Ende eine Anpassungsmaßnahme und keine Neuausbildung.', 'Deshalb steht am Ende ein Anpassungslehrgang und keine Neuausbildung.']
  ];
  /* Überweisung: in den Arzt-Themen ist die ärztliche gemeint, der Beispielsatz sprach von der Bank */
  MEDIZIN.forEach(function (k) {
    T.push([k, 'Die ___ ist erst morgen auf deinem Konto', 'Für den Hautarzt brauche ich eine ___ von meiner Hausärztin']);
    T.push([k, 'Die Überweisung ist erst morgen auf deinem Konto', 'Für den Hautarzt brauche ich eine Überweisung von meiner Hausärztin']);
    T.push([k, 'Die §Überweisung§ ist erst morgen auf deinem Konto', 'Für den Hautarzt brauche ich eine §Überweisung§ von meiner Hausärztin']);
  });

  /* [Thema, Satz (mit ___), richtige Lösung] */
  var L = [
    ['grammatik|praepositionen-gehoben', '___ eines Nachweises können wir nichts erstatten.', 'Mangels']
  ];

  /* [Thema, Satz, weitere richtige Lösungen, raus aus den Lösungen, Ersatz-Vorschläge für Auswahlfragen] */
  var A = [
    ['grammatik|partikeln-c1', 'Das Ergebnis ist ___ zufriedenstellend, im Gegenteil', ['keinesfalls', 'nicht', 'gar nicht', 'überhaupt nicht'], ['durchaus'], ['zwar', 'ja', 'ohnehin']],
    ['grammatik|verben-mit-praeposition', 'Er hat sich ___ die Stelle beworben.', ['auf'], [], ['an', 'für', 'mit']],
    ['grammatik|verben-mit-praeposition', 'Ich bewerbe mich ___ eine Stelle als Pflegefachkraft.', ['auf'], [], ['an', 'für', 'mit']],
    ['grammatik|praepositionen-gehoben', '___ der Kosten müssen wir noch sprechen.', ['Bezüglich', 'bezüglich'], [], ['Mangels', 'Anlässlich', 'Infolge']],
    ['grammatik|praepositionen-gehoben', '___ der Umbauarbeiten bleibt der Zugang gesperrt.', ['Wegen', 'wegen', 'Aufgrund', 'aufgrund'], [], ['Mangels', 'Anlässlich', 'Bezüglich']],
    ['grammatik|nominalisierung', '___ der Bauarbeiten ist die Straße gesperrt.', ['wegen', 'Während', 'während', 'Aufgrund', 'aufgrund'], [], ['Trotz', 'Nach', 'Ohne']],
    ['grammatik|nominalisierung', '___ des schlechten Wetters bleiben wir zu Hause.', ['wegen', 'Während', 'während', 'Aufgrund', 'aufgrund'], [], ['Trotz', 'Nach', 'Ohne']],
    ['grammatik|nominalisierung', '___ der Wiedereröffnung gelten neue Öffnungszeiten.', ['nach', 'Seit', 'seit', 'Ab', 'ab', 'Mit', 'mit', 'Wegen', 'wegen'], [], ['Trotz', 'Ohne', 'Statt']],
    ['grammatik|nominalisierung', '___ des schlechten Wetters fiel das Fest aus.', ['Wegen', 'wegen', 'Infolge', 'infolge'], [], ['Trotz', 'Nach', 'Ohne']],
    ['grammatik|genitiv', '___ des Regens bleiben wir drinnen.', [], ['Trotz'], []],
    ['grammatik|passiv-b2', 'In diesem Raum ___ nicht geraucht.', [], ['darf'], []],
    ['grammatik|funktionsverbgefuege', 'Die neue Regelung ist ___.', [], ['in Kraft treten'], []],
    ['grammatik|weil-dass-wenn', 'Wir gehen morgen spazieren, ___ das Wetter gut ist.', ['falls'], [], ['dass', 'ob', 'wann']],
    ['grammatik|weil-dass-wenn', 'Ich bleibe heute zu Hause, ___ es schon den ganzen Tag regnet.', ['da'], [], ['dass', 'ob', 'wann']],
    ['grammatik|weil-dass-wenn', '___ ich heute Abend noch Zeit habe, rufe ich dich an.', ['Falls', 'falls', 'wenn'], [], ['Dass', 'Ob', 'Weil']],
    ['grammatik|nebensaetze', 'Er ist glücklich, ___ er den Job bekommen hat.', ['dass'], [], ['obwohl', 'ob', 'damit']],
    ['grammatik|nebensaetze', 'Ruf mich an, ___ du angekommen bist.', ['sobald', 'wenn'], [], ['obwohl', 'ob', 'damit']],
    ['grammatik|temporale-nebensaetze', '___ ich dusche, höre ich Podcasts.', ['Wenn', 'wenn', 'während'], [], ['Ob', 'Damit', 'Dass']],
    ['grammatik|temporale-nebensaetze', '___ ich koche, hört mein Sohn Musik.', ['Wenn', 'wenn', 'während'], [], ['Ob', 'Damit', 'Dass']],
    ['grammatik|temporale-nebensaetze', 'Ich melde mich, ___ ich mehr weiß.', ['wenn'], [], ['ob', 'dass', 'obwohl']],
    ['grammatik|temporale-nebensaetze', '___ ich krank war, hat mir meine Nachbarin geholfen.', ['Während', 'während', 'als'], [], ['Ob', 'Dass', 'Bevor']],
    ['grammatik|temporale-nebensaetze', '___ du gehst, ruf mich bitte noch einmal an.', ['Wenn', 'wenn', 'bevor'], [], ['Ob', 'Dass', 'Seitdem']],
    ['grammatik|uneingeleitete-nebensaetze', '___ Sie Widerspruch einlegen, beachten Sie bitte die Frist.', ['Sollten', 'sollten'], [], []],
    ['grammatik|nominalstil', 'Trotz mehrfacher ___ kam keine Antwort.', ['Nachfragen'], [], []]
  ];

  /* [Thema, Teil der Frage, falscher Vorschlag, neuer Vorschlag] */
  var O = [
    ['grammatik|praepositionen-gehoben', 'des Firmenjubiläums lädt', 'Aufgrund', 'Mangels'],
    ['grammatik|praepositionen-gehoben', 'des Firmenjubiläums lädt', 'Wegen', 'Mangels'],
    ['grammatik|praepositionen-gehoben', 'der neuen Rechtslage prüfen wir', 'Hinsichtlich', 'Anlässlich'],
    ['grammatik|feine-konnektoren-c1', 'geschweige denn', 'dass er eine Wohnung hat', 'er hat eine Wohnung'],
    ['grammatik|irreale-vergleiche', 'als ob er alles verstanden', 'habe', 'hatte'],
    ['grammatik|nominalisierte-adjektive', 'ist, dass alle rechtzeitig da sind', 'Wichtigste', 'Bekannte'],
    ['grammatik|partikeln-c1', 'zugesagt, aber die Bedingungen kannte', 'wohl', 'kaum'],
    ['grammatik|attribute-umformen-c1', '„der zu prüfende Antrag"', 'Der Antrag, der geprüft werden kann.', 'Der Antrag, der selbst prüfen muss.'],
    ['grammatik|weil-dass-wenn', 'es schon den ganzen Tag regnet', 'wenn', 'wann'],
    ['*|*', 'ist direkt vor dem Supermarkt', 'haltestelle', 'Haltestelle'],
    ['*|*', 'ist direkt vor dem Supermarkt', 'kreuzung', 'Kreuzung'],
    ['*|*', 'ist direkt vor dem Supermarkt', 'ampel', 'Ampel']
  ];

  /* [Thema, woran man die Aufgabe erkennt (Feld, Text), neue Werte] */
  var S = [
    ['aussprache|oe-ue', ['q', 'Welches Paar unterscheidet sich nur durch ü und i?'], {
      options: ['schön – schon', 'der Hund – bunt', 'der Ofen – offen', 'die Tür – das Tier'], answer: 3 }],
    ['aussprache|endungen-b1', ['q', '„Er ist Deutscher“ und „Das ist typisch deutsch“'], {
      q: 'Wie spricht man das tsch in „deutsch“?',
      options: ['Als t und sch in einem Zug: deu-tsch.', 'Nur als sch, ganz ohne t.', 'Als ch wie in ich.', 'Als zwei Silben: deut-sch.'],
      answer: 0,
      explain: 'tsch ist ein Laut mit kurzem t-Anschlag, wie in Tschüss oder Matsch. In „Deutscher“ klingt es genauso: Deu-tscher.' }],
    ['aussprache|endungen-b1', ['satz', 'Ich finde die Antwort richtich und wichtich geschrieben.'], {
      satz: 'Ich finde die Antwort richtich.', richtig: 'Ich finde die Antwort richtig.' }],
    ['aussprache|oe-ue', ['satz', 'Kannst du mir bitte ein Loffel geben?'], {
      satz: 'Kannst du mir bitte einen Loffel geben?', explain: 'Das ö fehlt: der Löffel. Lippen rund wie bei o, die Zunge vorne wie bei e.' }],
    ['lesen-schreiben|schreiben-erste-saetze-a1', ['satz', 'Ich bin 32 jahre alt'], {
      satz: 'Ich bin 32 jahre alt.', explain: 'Jahre ist ein Nomen — also groß.' }],
    ['wortschatz|c1-studium', ['satz', 'Ich habe mich um einen Termin in der Sprechstunde gebetet.'], {
      satz: 'Ich habe um einen Termin in der Sprechstunde gebetet.', explain: 'bitten, bat, gebeten — beten, betete, gebetet ist ein anderes Verb.' }],
    ['aussprache|varianten-c1', ['satz', 'In der Schweiz sagt man Straße mit ß.'], {
      satz: 'In der Schweiz schreibt man Straße mit ß.' }],
    ['aussprache|rueckfrage-b1', ['satz', 'Sie meinen also dass der Termin abgesagt ist.'], {
      satz: 'Sie meinen also, dass der Termin abgesagt ist.' }],
    ['aussprache|ironie-c1', ['satz', 'Er ist ANGEBLICH krank, aber ich glaube ihm voll und ganz.'], {
      richtig: 'Er ist krank — ich glaube ihm voll und ganz.',
      explain: 'Betontes „angeblich“ und voller Glaube passen nicht zusammen. Wenn du ihm glaubst, lass das Distanzwort weg.' }],
    ['aussprache|vokallaenge-b2', ['satz', 'Das Wort Ruhe hat ein langes u, weil das h dehnt den Vokal.'], {
      satz: 'Das Wort Uhr hat ein langes u, weil das h dehnt den Vokal.',
      richtig: 'Das Wort Uhr hat ein langes u, weil das h den Vokal dehnt.',
      explain: 'Nach weil steht das Verb am Ende. Und zur Sache: Das Dehnungs-h wird nicht gesprochen, es macht nur den Vokal lang.' }],
    ['lesen-schreiben|lesen-alltag-b1', ['satz', 'Ich freue mich über Ihre Einladung zum Gespräch am Donnerstag.'], {
      satz: 'Ich freue mich über das Gespräch am Donnerstag.' }],
    ['grammatik|a1-wortstellung', ['satz', 'Meine Schwester in Berlin wohnt seit zwei Jahren.'], {
      satz: 'Meine Schwester seit zwei Jahren wohnt in Berlin.' }],
    ['wortschatz|a1-koerper', ['satz', 'Ich habe Kopfweh und gehe zu der Arzt.'], { falsch: 'der' }],
    ['wortschatz|c1-wirtschaft', ['satz', 'Trotz der guten Konjunktur wurden im letzten Jahr weniger investiert.'], { falsch: 'wurden' }],
    ['wortschatz|c1-erinnerung', ['satz', 'Über die Rolle des Vaters wurde in der Familie nie gesprochen worden.'], { falsch: 'worden' }],
    ['aussprache|v-w-f', ['satz', 'Der Vogel sitzt auf dem Fenster und singt sehr schön.'], { falsch: 'Fenster' }],
    ['wortschatz|c1-vertrag', ['satz', 'Wenn Sie nicht rechtzeitig kündigen, verlängert der Vertrag sich automatisch um ein Jahr.'], {
      satz: 'Wenn Sie nicht rechtzeitig kündigen, verlängert der Vertrag sich automatisch.',
      richtig: 'Wenn Sie nicht rechtzeitig kündigen, verlängert sich der Vertrag automatisch.' }],
    ['lesen-schreiben|schreiben-b1-kuendigen', ['satz', 'Der Vertrag wird um ein Jahr verlängert, wenn man kündigt nicht.'], {
      satz: 'Der Vertrag läuft automatisch weiter, wenn man kündigt nicht.',
      richtig: 'Der Vertrag läuft automatisch weiter, wenn man nicht kündigt.' }],
    ['wortschatz|b2-digital', ['q', 'Was bedeutet es, wenn ein Häkchen als Voreinstellung schon gesetzt ist?'], {
      q: 'Ein Häkchen für die Werbe-Einwilligung ist schon gesetzt. Was gilt?',
      options: ['Die Einwilligung ist so nicht wirksam — man hätte selbst aktiv zustimmen müssen.', 'Man hat damit wirksam zugestimmt.', 'Man kann es später nicht mehr ändern.', 'Es gilt nur für den einen Besuch.'],
      answer: 0 }]
  ];

  /* Starke Adjektive: In „Was fehlt?“ standen Synonyme als falsche
     Vorschläge (Konzert „großartig“, aber auch „wunderbar“, „genial“).
     Falsche Vorschläge kommen jetzt aus der Gegengruppe. */
  var GRUPPE = {};
  ['gut', 'schön', 'großartig', 'hervorragend', 'fantastisch', 'wunderbar', 'beeindruckend', 'atemberaubend', 'herrlich', 'ausgezeichnet', 'genial', 'bezaubernd', 'umwerfend'].forEach(function (w) { GRUPPE[w] = 'plus'; });
  ['schlecht', 'furchtbar', 'schrecklich', 'entsetzlich'].forEach(function (w) { GRUPPE[w] = 'minus'; });
  ['winzig', 'riesig'].forEach(function (w) { GRUPPE[w] = 'groesse'; });
  function starkeAdjektive(t) {
    (t.exercises || []).forEach(function (e) {
      if (e.type !== 'choice' || !Array.isArray(e.options) || !/^🧩\s*Was fehlt/.test(e.q || '')) return;
      var g = GRUPPE[e.options[e.answer]]; if (!g || g === 'groesse') return;
      var vorrat = Object.keys(GRUPPE).filter(function (w) { return GRUPPE[w] !== g && e.options.indexOf(w) < 0; });
      e.options.forEach(function (o, i) {
        if (i === e.answer || GRUPPE[o] !== g) return;
        var neu = vorrat.shift(); if (neu) e.options[i] = neu;
      });
    });
  }

  /* Zeit-Konjunktionen: Bei den automatisch gebauten Auswahlfragen
     („🧩 Was passt?“) waren die falschen Vorschläge andere Zeitwörter —
     „Bevor ich dusche, höre ich Podcasts“ ist aber genauso richtig wie
     „Während …“. Falsche Vorschläge sind hier deshalb Wörter, die nie
     passen. Die Lücken-Aufgabe zum selben Satz fragt weiter frei ab. */
  var ZEIT = ['als', 'wenn', 'während', 'bevor', 'nachdem', 'seit', 'seitdem', 'sobald', 'bis', 'solange', 'ehe'];
  function zeitKonjunktionen(t) {
    (t.exercises || []).forEach(function (e) {
      if (e.type !== 'choice' || !e.__v || !Array.isArray(e.options)) return;
      var gross = /^[A-ZÄÖÜ]/.test(String(e.options[e.answer] || ''));
      var vorrat = (gross ? ['Ob', 'Dass', 'Damit', 'Denn'] : ['ob', 'dass', 'damit', 'denn']).filter(function (x) { return e.options.indexOf(x) < 0; });
      e.options.forEach(function (o, i) {
        if (i === e.answer || ZEIT.indexOf(String(o).toLowerCase()) < 0) return;
        var n = vorrat.shift(); if (n) e.options[i] = n;
      });
    });
  }

  /* ---------- Anwenden ---------- */
  function lauf() {
    R.forEach(function (r) {
      jedeAufgabe(r[0], function (t) {
        t.exercises = (t.exercises || []).filter(function (e) {
          return typeof r[1] === 'function' ? !r[1](e) : !textIn(e, r[1]);
        });
      });
    });
    T.forEach(function (r) {
      var re = lueckenRegex(r[1]);
      jedeAufgabe(r[0], function (t) { (t.exercises || []).forEach(function (e) { ersetzeUeberall(e, re, r[2]); }); });
    });
    L.forEach(function (r) {
      jedeAufgabe(r[0], function (t) {
        (t.exercises || []).forEach(function (e) {
          if (satzVon(e).indexOf(r[1]) < 0) return;
          if (Array.isArray(e.options)) {
            var i = e.options.indexOf(r[2]);
            if (i > -1) e.answer = i; else e.options[e.answer] = r[2];
          } else if (e.type === 'gap' || e.type === 'tippen') {
            e.answer = r[2]; e.alts = [r[2].toLowerCase()];
          }
        });
      });
    });
    A.forEach(function (r) {
      jedeAufgabe(r[0], function (t) {
        (t.exercises || []).forEach(function (e) {
          if (satzVon(e).indexOf(r[1]) < 0) return;
          if (e.type === 'gap' || e.type === 'tippen') {
            var alts = (e.alts || []).filter(function (x) { return !r[3].some(function (w) { return gleich(w, x); }); });
            r[2].forEach(function (x) { if (alts.indexOf(x) < 0 && x !== e.answer) alts.push(x); });
            e.alts = alts;
          } else if (Array.isArray(e.options)) {
            var vorrat = r[4].filter(function (x) { return e.options.every(function (o) { return !gleich(o, x); }); });
            e.options.forEach(function (o, i) {
              if (i === e.answer) return;
              if (r[2].some(function (w) { return gleich(w, o); })) { var n = vorrat.shift(); if (n) e.options[i] = n; }
            });
          }
        });
      });
    });
    O.forEach(function (r) {
      jedeAufgabe(r[0], function (t) {
        (t.exercises || []).forEach(function (e) {
          if (!Array.isArray(e.options) || norm(e.q || '').indexOf(r[1]) < 0 && (e.q || '').indexOf(r[1]) < 0) return;
          var i = e.options.indexOf(r[2]);
          if (i < 0 || i === e.answer || e.options.indexOf(r[3]) > -1) return;
          e.options[i] = r[3];
        });
      });
    });
    S.forEach(function (r) {
      jedeAufgabe(r[0], function (t) {
        (t.exercises || []).forEach(function (e) {
          if (typeof e[r[1][0]] !== 'string' || e[r[1][0]].indexOf(r[1][1]) < 0) return;
          for (var key in r[2]) e[key] = Array.isArray(r[2][key]) ? r[2][key].slice() : r[2][key];
        });
      });
    });
    jedeAufgabe('*|starke-adjektive', starkeAdjektive);
    jedeAufgabe('grammatik|temporale-nebensaetze', zeitKonjunktionen);
    /* „..“ am Ende einer Erklärung (Bedeutung endete schon mit Punkt) */
    jedeAufgabe('*|*', function (t) {
      (t.exercises || []).forEach(function (e) {
        if (typeof e.explain === 'string') e.explain = e.explain.replace(/([^.])\.\.(?!\.)/g, '$1.');
      });
    });
  }

  function anVielfalt() {
    var V = window.VIELFALT; if (!V || !V.alle || V.__inhaltFix) return !!(V && V.__inhaltFix);
    var alt = V.alle;
    V.alle = function () { var r = alt.apply(this, arguments); try { lauf(); } catch (e) {} return r; };
    V.__inhaltFix = 1;
    return true;
  }
  try { lauf(); } catch (e) {}
  if (!anVielfalt()) { var n = 0; (function warte() { if (!anVielfalt() && n++ < 40) setTimeout(warte, 250); })(); }
  window.__inhaltFix = lauf;
})();
