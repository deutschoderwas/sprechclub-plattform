/* ============================================================
   sprech-minute.js — „Eine Minute frei sprechen“ im Bereich Sprechen

   Warum (12.11.2026): Eine Schülerin hat die Sprech-Challenge mit
   Timer aus den Grammatikfokus-Stunden entdeckt (90 Sekunden über ein
   Thema). Julia: „Ich möchte, dass wir diese Übung mit dem Timer in den
   Sprechen-Teil hinzufügen und auch vermerken, dass man das freie
   Sprechen dadurch üben kann.“

   Ablauf: Thema ziehen (passend zum eigenen Niveau), Zeit wählen
   (1 Minute, 90 Sekunden, 2 Minuten), auf Wunsch aufnehmen, los.
   Danach: Aufnahme anhören und ein kurzer Selbstcheck.

   Nach außen: window.spMinute() öffnet die Übung in #spDisk.
   ============================================================ */
(function () {
  'use strict';
  if (window.spMinute) return;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function niveau() { try { return window.ICH ? window.ICH.niveau() : 'B1'; } catch (e) { return 'B1'; } }
  function stufe() { var n = niveau(); return THEMEN[n] ? n : (n === 'C2' ? 'C1' : 'B1'); }

  /* Themen je Niveau: vier Fragen als Leitfaden, dazu nützliche Wendungen. */
  var THEMEN = {
    A1: [
      { t: 'Ich und meine Familie', b: ['Wie heißt du, woher kommst du?', 'Wer ist in deiner Familie?', 'Wo wohnt deine Familie?', 'Was macht ihr gern zusammen?'], n: 'Ich heiße … · Ich habe … · Wir … gern.' },
      { t: 'Mein Tag', b: ['Wann stehst du auf?', 'Was isst du zum Frühstück?', 'Was machst du am Vormittag?', 'Was machst du am Abend?'], n: 'Zuerst … · Dann … · Am Abend …' },
      { t: 'Meine Wohnung', b: ['Wo wohnst du?', 'Wie viele Zimmer hat deine Wohnung?', 'Welches Zimmer magst du?', 'Was gefällt dir nicht?'], n: 'Meine Wohnung ist … · Ich mag … · Leider …' },
      { t: 'Essen und Trinken', b: ['Was isst du gern?', 'Was trinkst du gern?', 'Kochst du selbst?', 'Was isst man in deinem Land?'], n: 'Ich esse gern … · Ich trinke kein … · In meinem Land …' },
      { t: 'Das Wochenende', b: ['Was machst du am Samstag?', 'Was machst du am Sonntag?', 'Mit wem bist du zusammen?', 'Was magst du am Wochenende?'], n: 'Am Samstag … · Am Sonntag … · Ich mag …' },
      { t: 'Einkaufen', b: ['Wo kaufst du ein?', 'Was kaufst du oft?', 'Was ist teuer, was ist billig?', 'Kaufst du gern ein?'], n: 'Ich kaufe … ein. · … ist teuer. · Ich finde …' } ],
    A2: [
      { t: 'Mein letzter Urlaub', b: ['Wohin bist du gefahren?', 'Mit wem warst du dort?', 'Was hast du gemacht?', 'Was war besonders schön?'], n: 'Ich bin nach … gefahren. · Wir haben … · Am schönsten war …' },
      { t: 'Meine Arbeit oder Schule', b: ['Was machst du beruflich oder was lernst du?', 'Wie sieht ein normaler Tag aus?', 'Was gefällt dir daran?', 'Was ist manchmal schwer?'], n: 'Ich arbeite als … · Mir gefällt … · Manchmal …' },
      { t: 'Meine Stadt', b: ['Wo wohnst du?', 'Was kann man dort machen?', 'Was gefällt dir an deiner Stadt?', 'Was fehlt dir?'], n: 'In meiner Stadt gibt es … · Man kann … · Mir fehlt …' },
      { t: 'Ein Fest in meinem Land', b: ['Welches Fest ist wichtig?', 'Wann feiert man es?', 'Was isst man?', 'Was machst du an diesem Tag?'], n: 'Bei uns feiert man … · Man isst … · Ich …' },
      { t: 'Gesund leben', b: ['Was machst du für deine Gesundheit?', 'Treibst du Sport?', 'Was isst du gesund?', 'Was möchtest du ändern?'], n: 'Ich gehe oft … · Ich versuche, … · Ich möchte …' },
      { t: 'Mein Lieblingsort', b: ['Wo ist dein Lieblingsort?', 'Wie sieht er aus?', 'Wann bist du dort?', 'Warum magst du ihn?'], n: 'Mein Lieblingsort ist … · Dort … · Ich mag ihn, weil …' } ],
    B1: [
      { t: 'Ein Erlebnis, das ich nicht vergesse', b: ['Was ist passiert?', 'Wo und wann war das?', 'Wie hast du dich gefühlt?', 'Was hast du daraus gelernt?'], n: 'Vor ein paar Jahren … · Ich war total … · Seitdem …' },
      { t: 'Homeoffice oder Büro?', b: ['Wo arbeitest du lieber?', 'Was spricht für Homeoffice?', 'Was spricht für das Büro?', 'Was ist deine Meinung?'], n: 'Einerseits … andererseits … · Für mich ist wichtig, dass …' },
      { t: 'Deutsch lernen', b: ['Warum lernst du Deutsch?', 'Was fällt dir leicht?', 'Was ist schwierig?', 'Was ist dein Tipp für andere?'], n: 'Ich lerne Deutsch, weil … · Am schwersten ist … · Mein Tipp: …' },
      { t: 'Leben in der Stadt oder auf dem Land', b: ['Wo wohnst du jetzt?', 'Was sind die Vorteile der Stadt?', 'Was sind die Vorteile auf dem Land?', 'Wo möchtest du später leben?'], n: 'Ein Vorteil ist … · Ein Nachteil ist … · Später möchte ich …' },
      { t: 'Ein Buch, ein Film oder eine Serie', b: ['Worum geht es?', 'Wer spielt mit oder wer hat es geschrieben?', 'Was hat dir gefallen?', 'Wem würdest du es empfehlen?'], n: 'Es geht um … · Besonders gut fand ich … · Ich empfehle es …' },
      { t: 'Mein Traumjob', b: ['Was wäre dein Traumjob?', 'Warum gerade dieser?', 'Was brauchst du dafür?', 'Was hält dich ab?'], n: 'Mein Traumjob wäre … · Dafür müsste ich … · Leider …' } ],
    B2: [
      { t: 'Soziale Medien', b: ['Wie nutzt du soziale Medien?', 'Welche Vorteile siehst du?', 'Welche Gefahren gibt es?', 'Wie sollte man damit umgehen?'], n: 'Einerseits … andererseits … · Ich halte es für … · Entscheidend ist …' },
      { t: 'Arbeit und Freizeit', b: ['Wie trennst du Arbeit und Freizeit?', 'Was macht dich gestresst?', 'Was hilft dir, abzuschalten?', 'Sollte man weniger arbeiten?'], n: 'Mir fällt auf, dass … · Was mir hilft, ist … · Meiner Meinung nach …' },
      { t: 'Umwelt im Alltag', b: ['Was tust du selbst für die Umwelt?', 'Was ist schwer umzusetzen?', 'Wer trägt die meiste Verantwortung?', 'Was sollte sich ändern?'], n: 'Ich achte darauf, dass … · Das Problem ist … · Es wäre sinnvoll, …' },
      { t: 'Eine wichtige Entscheidung', b: ['Welche Entscheidung war das?', 'Was waren die Alternativen?', 'Warum hast du dich so entschieden?', 'Würdest du es wieder so machen?'], n: 'Ich stand vor der Wahl … · Ausschlaggebend war … · Im Nachhinein …' },
      { t: 'Reisen früher und heute', b: ['Wie hat sich das Reisen verändert?', 'Was ist besser geworden?', 'Was ist schlechter?', 'Wie reist du am liebsten?'], n: 'Früher … heute … · Im Vergleich dazu … · Ich bevorzuge …' },
      { t: 'Lernen mit KI', b: ['Nutzt du KI zum Lernen?', 'Wobei hilft sie dir?', 'Wo siehst du Grenzen?', 'Wie wird Lernen in Zukunft aussehen?'], n: 'Ich nutze … · Eine Grenze ist … · Ich vermute, dass …' } ],
    C1: [
      { t: 'Was Bildung heute leisten muss', b: ['Was sollte Schule vermitteln?', 'Was kommt heute zu kurz?', 'Welche Rolle spielt lebenslanges Lernen?', 'Was würdest du ändern?'], n: 'Es greift zu kurz, … · Nicht zuletzt … · Ich plädiere dafür, …' },
      { t: 'Arbeit im Wandel', b: ['Wie verändert sich die Arbeitswelt?', 'Welche Chancen entstehen?', 'Wer verliert dabei?', 'Wie sollte man sich vorbereiten?'], n: 'Zum einen … zum anderen … · Daraus folgt … · Entscheidend wird sein …' },
      { t: 'Heimat', b: ['Was bedeutet Heimat für dich?', 'Kann man mehrere Heimaten haben?', 'Wie verändert Migration den Begriff?', 'Was hält dich an einem Ort?'], n: 'Für mich ist Heimat weniger … als … · Ich würde sagen … · Letztlich …' },
      { t: 'Konsum und Verzicht', b: ['Wie viel brauchen wir wirklich?', 'Warum fällt Verzicht schwer?', 'Kann Konsum nachhaltig sein?', 'Was hast du selbst geändert?'], n: 'Zugegeben … dennoch … · Es lässt sich beobachten, dass … · Mein Fazit: …' },
      { t: 'Medien und Wahrheit', b: ['Woher bekommst du Nachrichten?', 'Wie erkennst du verlässliche Quellen?', 'Welche Verantwortung haben Medien?', 'Und welche wir als Leser?'], n: 'Ausschlaggebend ist … · Dem steht gegenüber, dass … · Insofern …' },
      { t: 'Ein Wendepunkt in meinem Leben', b: ['Was hat sich geändert?', 'Wie kam es dazu?', 'Wie hast du reagiert?', 'Was nimmst du daraus mit?'], n: 'Rückblickend … · Erst später wurde mir klar, … · Bis heute …' } ]
  };

  var S = { i: -1, dauer: 60, rest: 60, takt: null, laeuft: false, aufnehmen: false, rec: null, teile: [], url: '' };

  function thema() { return THEMEN[stufe()][S.i] || THEMEN[stufe()][0]; }
  function neuesThema() {
    var l = THEMEN[stufe()], i;
    do { i = Math.floor(Math.random() * l.length); } while (i === S.i && l.length > 1);
    S.i = i;
  }
  function zeit(s) { return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }

  window.spMinute = function () {
    var z = el('spDisk'); if (!z) return;
    if (z.getAttribute('data-was') === 'minute' && z.innerHTML) { stopp(true); z.innerHTML = ''; z.removeAttribute('data-was'); return; }
    stil();
    z.setAttribute('data-was', 'minute');
    if (S.i < 0) neuesThema();
    malen();
    try { z.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {}
  };

  function malen(fertig) {
    var z = el('spDisk'); if (!z) return;
    var t = thema();
    z.innerHTML = '<div class="spm">'
      + '<p class="sp-kick">Frei sprechen · ' + E(stufe()) + '</p>'
      + '<h3>Eine Minute am Stück über ein Thema</h3>'
      + '<p class="spm-warum">So übst du <b>freies Sprechen</b>: ohne Text, ohne Pause, in ganzen Sätzen. '
      + 'Genau das brauchst du im Gespräch, in der Prüfung beim Präsentieren und in der Sprech-Challenge im Sprechclub. '
      + 'Wer das ein paar Mal pro Woche macht, spricht spürbar flüssiger.</p>'
      + '<div class="spm-karte">'
      +   '<div class="spm-thema">' + E(t.t) + '</div>'
      +   '<ul class="spm-hilfe">' + t.b.map(function (x) { return '<li>' + E(x) + '</li>'; }).join('') + '</ul>'
      +   '<div class="spm-n">💬 Nützlich: ' + E(t.n) + '</div>'
      + '</div>'
      + '<div class="spm-dauer">' + [[60, '1 Minute'], [90, '90 Sekunden'], [120, '2 Minuten']].map(function (d) {
          return '<button class="' + (S.dauer === d[0] ? 'an' : '') + '" onclick="spmDauer(' + d[0] + ')"' + (S.laeuft ? ' disabled' : '') + '>' + d[1] + '</button>';
        }).join('') + '</div>'
      + '<div class="spm-uhr' + (S.laeuft ? ' laeuft' : '') + (S.rest <= 10 && S.laeuft ? ' knapp' : '') + '" id="spmUhr">' + zeit(S.rest) + '</div>'
      + '<label class="spm-rec"><input type="checkbox" ' + (S.aufnehmen ? 'checked' : '') + (S.laeuft ? ' disabled' : '') + ' onchange="spmAufnahme(this.checked)"> Mich dabei aufnehmen (nur auf deinem Gerät)</label>'
      + '<div class="spm-knoepfe">'
      +   (S.laeuft
          ? '<button class="spm-stop" onclick="spmStopp()">⏹ Stopp</button>'
          : '<button class="spm-los" onclick="spmStart()">▶ ' + (fertig ? 'Nochmal' : 'Los geht’s') + '</button>'
            + '<button class="spm-neu" onclick="spmNeu()">🎲 Anderes Thema</button>')
      + '</div>'
      + (fertig ? fertigHtml() : '<p class="spm-tipp">Tipp: Geh die vier Fragen der Reihe nach durch. Wenn dir ein Wort fehlt, sag es mit anderen Worten und sprich weiter.</p>')
      + '</div>';
  }

  function fertigHtml() {
    return '<div class="spm-fertig">'
      + '<b>Geschafft! ' + (S.rest > 0 ? 'Du hast nach ' + zeit(S.dauer - S.rest) + ' aufgehört.' : 'Du hast die ganze Zeit gesprochen.') + '</b>'
      + (S.url ? '<audio controls src="' + S.url + '"></audio>' : '')
      + '<p>Kurzer Check: Hast du ohne lange Pausen gesprochen? Hast du alle vier Fragen beantwortet? '
      + 'Hast du Sätze verbunden, zum Beispiel mit weil, aber, deshalb, außerdem?</p>'
      + '<p class="spm-klein">Nimm dasselbe Thema morgen noch einmal. Beim zweiten Mal wird es fast immer flüssiger.</p>'
      + '</div>';
  }

  window.spmDauer = function (s) { if (S.laeuft) return; S.dauer = s; S.rest = s; malen(); };
  window.spmNeu = function () { if (S.laeuft) return; neuesThema(); S.rest = S.dauer; aufraeumen(); malen(); };
  window.spmAufnahme = function (an) { S.aufnehmen = !!an; };

  function aufraeumen() { if (S.url) { try { URL.revokeObjectURL(S.url); } catch (e) {} } S.url = ''; }

  window.spmStart = function () {
    if (S.laeuft) return;
    aufraeumen();
    S.rest = S.dauer; S.laeuft = true; malen();
    if (S.aufnehmen) aufnahmeStarten();
    S.takt = setInterval(function () {
      S.rest--;
      var u = el('spmUhr');
      if (u) { u.textContent = zeit(Math.max(0, S.rest)); if (S.rest <= 10) u.classList.add('knapp'); }
      if (S.rest <= 0) stopp();
    }, 1000);
  };
  window.spmStopp = function () { stopp(); };

  function stopp(still) {
    if (S.takt) { clearInterval(S.takt); S.takt = null; }
    var war = S.laeuft; S.laeuft = false;
    if (S.rec && S.rec.state !== 'inactive') {
      S.rec.onstop = function () {
        try { S.url = URL.createObjectURL(new Blob(S.teile, { type: S.rec.mimeType || 'audio/webm' })); } catch (e) {}
        try { S.rec.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
        S.rec = null; if (!still) malen(true);
      };
      try { S.rec.stop(); } catch (e) { S.rec = null; }
      return;
    }
    if (war && !still) malen(true);
  }

  function aufnahmeStarten() {
    S.teile = [];
    if (!navigator.mediaDevices || !window.MediaRecorder) { S.aufnehmen = false; return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      if (!S.laeuft) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
      var r = new MediaRecorder(stream); r.stream = stream;
      r.ondataavailable = function (e) { if (e.data && e.data.size) S.teile.push(e.data); };
      r.start(); S.rec = r;
    }).catch(function () { S.aufnehmen = false; });
  }

  function stil() {
    if (el('spm-stil')) return;
    var s = document.createElement('style'); s.id = 'spm-stil';
    s.textContent = [
      '.spm{margin-top:14px;background:#fff;border:1px solid #E7EBF0;border-radius:16px;padding:18px}',
      '.spm h3{font-family:"Space Grotesk",Inter,sans-serif;font-size:19px;margin:0 0 8px}',
      '.spm-warum{margin:0 0 14px;font-size:14px;color:#3C4650;line-height:1.55;background:#EAF6FA;border-radius:12px;padding:10px 12px}',
      '.spm-karte{border:1.5px solid #14708B;border-radius:14px;padding:14px 16px;background:#FBFDFE}',
      '.spm-thema{font-family:"Space Grotesk",Inter,sans-serif;font-size:20px;font-weight:700;color:#12181F;margin-bottom:8px}',
      '.spm-hilfe{margin:0 0 10px;padding-left:20px;line-height:1.6;font-size:15px}',
      '.spm-n{font-size:13.5px;color:#5E6A78}',
      '.spm-dauer{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 6px}',
      '.spm-dauer button{border:1px solid #E7EBF0;background:#F6F9FA;border-radius:999px;padding:7px 13px;font:inherit;font-size:13.5px;font-weight:600;cursor:pointer;color:#12181F}',
      '.spm-dauer button.an{background:#14708B;border-color:#14708B;color:#fff}',
      '.spm-uhr{font-family:"Space Grotesk",Inter,sans-serif;font-size:56px;font-weight:700;text-align:center;color:#12181F;margin:6px 0;font-variant-numeric:tabular-nums}',
      '.spm-uhr.laeuft{color:#14708B}', '.spm-uhr.knapp{color:#D42A21}',
      '.spm-rec{display:flex;gap:8px;align-items:center;justify-content:center;font-size:13.5px;color:#5E6A78;margin-bottom:10px}',
      '.spm-knoepfe{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}',
      '.spm-knoepfe button{border:0;border-radius:12px;padding:12px 18px;font:inherit;font-size:15px;font-weight:700;cursor:pointer}',
      '.spm-los{background:#D42A21;color:#fff}', '.spm-stop{background:#12181F;color:#fff}', '.spm-neu{background:#F6F9FA;color:#12181F;border:1px solid #E7EBF0 !important}',
      '.spm-tipp{margin:12px 0 0;font-size:13.5px;color:#5E6A78;line-height:1.5;text-align:center}',
      '.spm-fertig{margin-top:14px;background:#EEF8F1;border-radius:12px;padding:12px 14px;font-size:14px;line-height:1.55}',
      '.spm-fertig audio{width:100%;margin:8px 0}', '.spm-fertig p{margin:6px 0 0}', '.spm-klein{color:#5E6A78;font-size:13px}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
