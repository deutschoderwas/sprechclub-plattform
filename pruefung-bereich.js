/* ============================================================
   deutschoderwas club — PRÜFUNGSVORBEREITUNG

   „Keine Angst mehr vor der Prüfung."

   Das Gerüst, Schritt 2 von 7. Zwei Ebenen:

     1. Welche Prüfung?   — neun Kacheln, eine Seite
     2. Die Prüfungsseite — die Module, Musterprüfung, Wortschatz,
                            Videokurs, Bereitschaft

   Kein Prüfungstermin: deutschoderwas bereitet auf die Prüfung vor,
   nimmt sie aber nicht ab. Ein Countdown auf einen Termin, den es
   hier nicht gibt, wäre irreführend.

   Was hier schon echt ist: die Auswahl, der Aufbau, die Verbindung
   zu den 36 vorhandenen Lektionen, zu den vier Musterprüfungen und
   zum Einstufungstest. Was noch fehlt, steht als „kommt noch" da —
   ehrlich statt als leere Kachel.

   Die Minutenangaben sind gegen die Durchführungsbestimmungen des
   Goethe-Instituts geprüft: B2 und DTZ am 27.07.2026, A1, A2, B1 und
   C1 am 04.10.2026. Wo dort selbst „circa" steht, steht es hier auch
   — beim Hören zum Beispiel, weil die Länge der Aufnahme entscheidet.

   Bei C1 waren zwei Werte falsch: Lesen stand mit 70 statt 65
   Minuten, Sprechen mit 15 statt 20. Wer danach geübt hat, hat sich
   fünf Minuten zu knapp eingeteilt.

   Die beiden Fachprüfungen sind am 05.10.2026 gegen telc geprüft:
   telc Deutsch B2·C1 Medizin Fachsprachprüfung (schriftlich 80 Min
   ohne Pause, mündlich 65 Min als Einzelprüfung) und telc Deutsch
   B1·B2 Pflege (schriftlich 115 Min, Sprechen ca. 16 Min zu zweit).
   Beiden fehlte vorher der halbe Prüfungsablauf: bei Medizin der
   komplette schriftliche Teil, bei Pflege standen Kursthemen da,
   wo die Prüfungsteile hingehören.

   Büro & Logistik hat gar keine Prüfung. Deshalb steht dort jetzt
   „Übungszeit" statt „Prüfungsdauer", und Musterprüfung und
   Bildschirmtraining fallen weg.
   ============================================================ */
(function(){
  'use strict';

  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }

  /* ---------- Die Prüfungen ----------
     kurs  = die sechs vorhandenen Lektionen in kurse/ (über lektion.html)
     stufe = der Stufenkurs aus a1.js / a2.js (über kursOeffnen)
     muster= Schlüssel in pruefung.js für die Musterprüfung          */
  var PRUEFUNGEN = [
    { id:'sd1', name:'Start Deutsch 1', anbieter:'Goethe · telc', niveau:'A1',
      bild:'menschen', stufe:'A1',
      fuer:'Ehegattennachzug und der erste Nachweis, dass du Deutsch kannst.',
      module:[ {id:'hoeren',n:'Hören',m:'ca. 20'}, {id:'lesen',n:'Lesen',m:'25'},
               {id:'schreiben',n:'Schreiben',m:'20'}, {id:'sprechen',n:'Sprechen',m:'15'} ],
      geprueft:true,
      hinweis:'Schriftlich zusammen 65 Minuten. Gesprochen wird in der Gruppe mit bis zu vier '
             +'Teilnehmenden, 15 Minuten für alle drei Teile.' },

    { id:'sd2', name:'Start Deutsch 2', anbieter:'Goethe · telc', niveau:'A2',
      bild:'wohnen', stufe:'A2', muster:'A2',
      fuer:'Aufenthaltstitel, erste Arbeit, der Schritt nach dem Anfang.',
      module:[ {id:'hoeren',n:'Hören',m:'ca. 30'}, {id:'lesen',n:'Lesen',m:'30'},
               {id:'schreiben',n:'Schreiben',m:'30'}, {id:'sprechen',n:'Sprechen',m:'15'} ],
      geprueft:true,
      hinweis:'Schriftlich zusammen 90 Minuten. Sprechen 15 Minuten zu zweit, 10 Minuten allein — '
             +'ohne Vorbereitungszeit, die Aufgabe kommt erst in der Prüfung.' },

    { id:'dtz', name:'DTZ', anbieter:'Deutsch-Test für Zuwanderer', niveau:'A2–B1',
      bild:'amt', kurs:'dtz', muster:'B1', geprueft:true,
      fuer:'Der Abschluss des Integrationskurses. Zählt für Niederlassung und Einbürgerung.',
      module:[ {id:'hoeren',n:'Hören',m:'25'}, {id:'lesen',n:'Lesen',m:'45'},
               {id:'schreiben',n:'Schreiben',m:'30'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ],
      punkte:'Hören und Lesen zusammen 45 Punkte — ab 33 ist es B1, ab 20 A2. '
            +'Schreiben 20 Punkte, ab 15 B1. Sprechen 100 Punkte, ab 40 B1.' },

    { id:'b1', name:'Goethe-Zertifikat B1', anbieter:'Goethe · ÖSD', niveau:'B1',
      bild:'buero', kurs:'goethetelc', muster:'B1',
      fuer:'Einbürgerung, Ausbildung, viele Arbeitgeber. Die wichtigste Hürde.',
      module:[ {id:'lesen',n:'Lesen',m:'65'}, {id:'hoeren',n:'Hören',m:'ca. 40'},
               {id:'schreiben',n:'Schreiben',m:'60'}, {id:'sprechen',n:'Sprechen',m:'ca. 15'} ],
      modular:true, geprueft:true,
      hinweis:'Sprechen ca. 15 Minuten zu zweit, ca. 10 Minuten allein — dazu 15 Minuten Vorbereitung. '
             +'Die schriftlichen Module dauern zusammen etwa 165 Minuten.' },

    { id:'b2', name:'Goethe-Zertifikat B2', anbieter:'Goethe-Institut', niveau:'B2',
      bild:'bewerbung', kurs:'goethetelc', muster:'B2', geprueft:true,
      fuer:'Studium, Anerkennung im Beruf, qualifizierte Arbeit.',
      module:[ {id:'lesen',n:'Lesen',m:'65'}, {id:'hoeren',n:'Hören',m:'40'},
               {id:'schreiben',n:'Schreiben',m:'75'}, {id:'sprechen',n:'Sprechen',m:'15'} ],
      modular:true },

    { id:'c1', name:'Goethe-Zertifikat C1', anbieter:'Goethe-Institut', niveau:'C1',
      bild:'typisch-deutsch', kurs:'goethetelc', muster:'C1',
      fuer:'Universität, Führungsposition, anspruchsvolle Fachberufe.',
      /* Die allgemeinen Modultexte sind fuer A1/A2 geschrieben ("Anzeigen,
         Schilder, Texte"). Auf C1 lasen sie sich wie aus einer anderen
         Pruefung — deshalb hier eigene. */
      module:[ {id:'lesen',n:'Lesen',m:'65',
                 t:'Vier Teile, 30 Aufgaben: Lückentext, Sachartikel, Sätze einsetzen, Fachleute zuordnen.'},
               {id:'hoeren',n:'Hören',m:'ca. 40',
                 t:'Vortrag, Gespräch unter Fachleuten, Radiobeitrag — vieles hörst du nur einmal.'},
               {id:'schreiben',n:'Schreiben',m:'75',
                 t:'Ein Diskussionsbeitrag im Forum und eine formelle E-Mail — gewertet wird auch der Ton.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 20',
                 t:'Ein Kurzvortrag mit Nachfragen und eine Diskussion, in der du deine Position halten musst.'} ],
      modular:true, geprueft:true,
      hinweis:'Sprechen ca. 20 Minuten zu zweit, 15 Minuten allein — dazu 20 Minuten Vorbereitung. '
             +'Lesen: 65 Minuten für 30 Aufgaben, davon 5 für den Antwortbogen; bestanden ab 18 richtigen. '
             +'Schreiben: 75 Minuten für zwei Texte, bewertet von zwei Prüfenden unabhängig voneinander.' },


    /* ---------- Die telc-Prüfungen, jede mit eigener Seite ----------
       01.11.2026: Vorher teilten sich Goethe und telc eine Seite — mit
       den Goethe-Zeiten. Eine Schülerin, die sich auf telc B1 vorbereitet,
       sah dort „Lesen 65 Min, modular" — bei telc sind es 90 Minuten
       Lesen und Sprachbausteine zusammen, und es gibt keine Module.
       Gegen telc geprüft am 01.11.2026:
       B1: Übungstest 1 Zertifikat Deutsch (shop.telc.net)
       B2: telc.net Prüfungsseite + Übungstest 3 Deutsch B2
       C1 Hochschule: telc „Tipps zur Prüfungsvorbereitung Deutsch Hochschule"
       B1+ Beruf: telc.net Prüfungsseite
       Wo telc eine Zahl nicht nennt, steht hier auch keine. */
    { id:'telcb1', name:'telc Deutsch B1', anbieter:'telc · Zertifikat Deutsch', niveau:'B1',
      bild:'buero', kurs:'goethetelc', muster:'B1', telc:true, geprueft:true,
      training:{ lesen:'telcB1', hoeren:'telcB1', schreiben:'telcB1', sprechen:'telcB1' },
      /* Punkteprognose für „Bist du bereit?" — Gewichte nach telc:
         schriftlich 225 (Lesen 75 + Sprachbausteine 30, Hören 75, Schreiben 45),
         Grenze 135; mündlich 75, Grenze 45. */
      prognose:{ teile:[ { name:'Schriftliche Prüfung', max:225, grenze:135,
                           anteile:{ lesen:105, hoeren:75, schreiben:45 } },
                         { name:'Mündliche Prüfung', max:75, grenze:45, anteile:{ sprechen:75 } } ] },
      mat:{
        wortschatz:['Arbeit und Beruf','Wohnen und Nachbarschaft','Gesundheit und Arzt','Ämter und Behörden',
                    'Freizeit und Vereine','Reisen und Verkehr','Einkaufen und Dienstleistungen','Medien und Kommunikation',
                    'Schule, Kurse, Weiterbildung','Familie und Feste','Umwelt und Stadt'],
        grammatik:['Konnektoren: weil, obwohl, deshalb, trotzdem, damit, als/wenn','Präpositionen mit Dativ und Akkusativ',
                   'Relativsätze und Relativpronomen','Adjektivendungen','Perfekt und Präteritum','Passiv',
                   'Konjunktiv II für höfliche Bitten','Verben mit festen Präpositionen (warten auf, sich freuen über)',
                   'zu + Infinitiv','Reflexive Verben und Reflexivpronomen'],
        redemittel:[
          ['Schreiben — Einleitung','Vielen Dank für deine Mail. / Vielen Dank für Ihre Nachricht vom …'],
          ['Schreiben — Punkte verbinden','Außerdem … · Deshalb … · Was … betrifft, … · Zum Schluss noch eine Frage: …'],
          ['Schreiben — Schluss','Ich freue mich auf deine Antwort. / Ich freue mich auf Ihre Antwort. · Viele Grüße / Mit freundlichen Grüßen'],
          ['Sprechen — Text wiedergeben','In meinem Text geht es um … · Die Autorin meint, dass … · Sie schreibt, dass …'],
          ['Sprechen — Meinung','Ich persönlich finde … · Da bin ich anderer Meinung, weil … · Da hast du recht, aber …'],
          ['Sprechen — Planen','Wie wäre es, wenn wir … · Ich schlage vor, dass … · Einverstanden. Dann machen wir es so: …'] ],
        bewertung:[
          ['Lesen und Sprachbausteine','Jeder der drei Leseteile zählt 25 Punkte, jeder Teil Sprachbausteine 15 — zusammen 105.'],
          ['Hören','Drei Teile mit 20 Aufgaben richtig oder falsch, jeder Teil 25 Punkte — zusammen 75.'],
          ['Schreiben','Drei Kriterien — Leitpunkte, Gestaltung, Richtigkeit — je A bis D (5, 3, 1, 0), Summe mal drei: höchstens 45.'],
          ['Sprechen','Je Teil: Ausdrucksfähigkeit, Aufgabenbewältigung, formale Richtigkeit, Aussprache. Teil 1 bis 15, Teil 2 und 3 je bis 30 Punkte.'],
          ['Bestanden','Schriftlich mindestens 135 von 225, mündlich mindestens 45 von 75. Beide Teile müssen reichen; einen nicht bestandenen Teil kannst du allein wiederholen.'] ],
        ablauf:[
          'Schriftlich, 150 Minuten: erst Lesen und Sprachbausteine (90 Minuten), dann Hören (ca. 30), dann Schreiben (30).',
          'Beim Hören: Teil 1 hörst du nur einmal, Teil 2 und 3 zweimal.',
          'Mündlich: meist zu zweit, ca. 15 Minuten. Vorher 20 Minuten Vorbereitung.',
          'In der Vorbereitung bekommst du die Aufgaben für Teil 2 und 3 — mach dir Stichpunkte, keine ganzen Sätze.'] },
      fuer:'Einbürgerung, Ausbildung, viele Arbeitgeber — das Zertifikat Deutsch von telc.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'Drei Leseteile mit 20 Aufgaben, dann zwei Teile Sprachbausteine — Grammatik und Wortschatz im Text, 20 Lücken. Die 90 Minuten teilst du selbst ein.'},
               {id:'hoeren',n:'Hören',m:'ca. 30',
                 t:'Drei Teile, 20 Aufgaben — alle richtig oder falsch.'},
               {id:'schreiben',n:'Schreiben',m:'30',
                 t:'Eine E-Mail, informell oder halbformell, zu vier Leitpunkten. Alle vier müssen drin sein.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 15',
                 t:'Zu zweit: einander kennenlernen, über ein Thema sprechen, gemeinsam etwas planen.'} ],
      hinweis:'Schriftlich 150 Minuten: erst Lesen und Sprachbausteine, dann Hören, dann Schreiben. '
             +'Mündlich ca. 15 Minuten zu zweit, vorher 20 Minuten Vorbereitung.',
      punkte:'Bestanden hast du mit 135 von 225 Punkten im schriftlichen und 45 von 75 Punkten im '
            +'mündlichen Teil — beide Teile müssen reichen. Fällt ein Teil durch, wiederholst du nur '
            +'diesen Teil, im selben oder im nächsten Kalenderjahr.',
      uebungstest:'https://shop.telc.net/media/catalog/product/file/telc_deutsch_b1_zd_uebungstest_1.pdf' },

    { id:'telca2b1', name:'telc Deutsch A2·B1', anbieter:'telc · zwei Niveaus', niveau:'A2–B1',
      bild:'amt', kurs:'goethetelc', telc:true, geprueft:true,
      fuer:'Aufenthalt, Einbürgerung, Beruf — eine Prüfung, am Ende steht A2 oder B1 auf dem Zertifikat.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'45',
                 t:'Vier Leseteile: Kleinanzeigen, eine Mitteilung, E-Mails mit Betreffzeilen, ein Sachtext. Dazu Sprachbausteine und eine Mail, die du danach beantwortest.'},
               {id:'hoeren',n:'Hören',m:'ca. 35',
                 t:'Fünf Teile: Alltagsgespräch, Gespräch im Beruf, Ansagen, Meinungen — und eine Telefonnotiz nach dem Anrufbeantworter.'},
               {id:'schreiben',n:'Schreiben',m:'45',
                 t:'Eine Mail beantworten und in zehn Minuten auf eine Kurznachricht antworten.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 15',
                 t:'Zu zweit, ohne Vorbereitung: dich vorstellen, gemeinsam planen, Meinung begründen.'} ],
      hinweis:'Schriftlich 125 Minuten: Lesen 45, Sprachbausteine mit Lesen und Schreiben 35, Hören ca. 35, Schreiben 10. '
             +'Mündlich ca. 15 Minuten zu zweit, ohne Vorbereitungszeit. Einzelne Teile kann man nicht getrennt ablegen.',
      punkte:'240 Punkte, je 60 für Lesen, Hören, Schreiben und Sprechen. B1: mindestens 70 Prozent insgesamt, '
            +'70 Prozent in drei der vier Fertigkeiten und überall mindestens 40 Prozent. A2: mindestens 40 Prozent insgesamt, '
            +'40 Prozent in drei der vier und überall mindestens 10 Prozent.',
      training:{ lesen:'telcA2B1', hoeren:'telcA2B1', schreiben:'telcA2B1', sprechen:'telcA2B1' },
      prognose:{ typ:'a2b1' },
      uebungstest:'https://shop.telc.net/media/catalog/product/file/2/0/20231106_5060-b00-010102_web.pdf',
      mat:{
        wortschatz:['Wohnen und Nachbarn','Arbeit und Kollegen','Arzt und Gesundheit','Ämter und Formulare','Kita und Schule',
                    'Einkaufen und Reklamieren','Freizeit und Feste','Bus, Bahn und Verkehr','Telefonieren und Termine'],
        grammatik:['weil, denn, deshalb, dass, wenn — Wortstellung','Perfekt im Gespräch','Modalverben (müssen, dürfen, können, sollen)',
                   'Präpositionen mit Dativ (mit, bei, nach, seit, von, zu)','Wechselpräpositionen (in, an, auf …)',
                   'Personalpronomen und Possessivartikel','Höfliche Bitten mit „könnten" und „würden"','Vergleiche: größer als, so groß wie'],
        redemittel:[
          ['Mail — Anfang und Schluss','Liebe Anna, vielen Dank für deine Mail. · Viele Grüße / Sehr geehrte Frau …, Mit freundlichen Grüßen'],
          ['Mail — antworten','Du fragst, ob … — ja, gern! · Leider kann ich nicht, weil … · Kannst du mir sagen, …?'],
          ['Sprechen — vorstellen','Ich heiße … und komme aus … · Ich lebe seit … in … · In meiner Freizeit …'],
          ['Sprechen — planen','Wollen wir …? · Wie wäre es mit …? · Gute Idee! / Das geht leider nicht, weil … · Also machen wir …'],
          ['Sprechen — Meinung','Einerseits …, andererseits … · Ich finde …, weil … · Zum Beispiel …'] ],
        bewertung:[
          ['Lesen (60)','Leseteile 1 bis 4 zusammen 54 Punkte, dazu 6 Punkte für das Lesen der Mail.'],
          ['Hören (60)','Vier Teile mit je 15 Punkten; die Telefonnotiz zählt zum Schreiben.'],
          ['Schreiben (60)','Sprachbausteine 5, Mail beantworten 15, Telefonnotiz 5, Kurznachricht 5 — dazu 30 Punkte für die Sprache.'],
          ['Sprechen (60)','Teil 1 6, Teil 2 12, Teil 3 12 Punkte für den Inhalt — dazu 30 Punkte für die Sprache.'],
          ['B1 oder A2','B1 ab 70 Prozent (168 von 240) und 70 Prozent in drei Fertigkeiten, überall mindestens 40 Prozent. A2 ab 40 Prozent, 40 Prozent in drei Fertigkeiten, überall mindestens 10 Prozent.'] ],
        ablauf:[
          'Schriftlich 125 Minuten: Lesen (45), Sprachbausteine mit Lesen und Schreiben (35), Hören (ca. 35), Schreiben (10).',
          'Beim Hören: Alltagsgespräch, Ansagen und Anrufbeantworter zweimal, Gespräch im Beruf und Meinungen nur einmal.',
          'Mündlich zu zweit, ca. 15 Minuten, ohne Vorbereitung — nur vor Teil 3 etwa eine Minute für Notizen.',
          'Die Prüfung gibt es nur ganz: Einzelne Teile kann man nicht getrennt ablegen.'] } },

    { id:'telcb2', name:'telc Deutsch B2', anbieter:'telc', niveau:'B2',
      bild:'bewerbung', kurs:'goethetelc', muster:'B2', telc:true, geprueft:true,
      training:{ lesen:'telcB2', hoeren:'telcB2', schreiben:'telcB2', sprechen:'telcB2' },
      /* Gewichte nach telc „Tipps Deutsch B2": Lesen 75 + Sprachbausteine 30, Hören 75,
         Schreiben 45 = 225 schriftlich; mündlich 75. Eine Bestehensgrenze nennt das
         Dokument nicht — 60 % ist hier ein Richtwert und so beschriftet. */
      prognose:{ richtwert:true, teile:[ { name:'Schriftliche Prüfung', max:225, grenze:135,
                           anteile:{ lesen:105, hoeren:75, schreiben:45 } },
                         { name:'Mündliche Prüfung', max:75, grenze:45, anteile:{ sprechen:75 } } ] },
      mat:{
        wortschatz:['Arbeitswelt und Karriere','Gesellschaft und Zusammenleben','Umwelt und Klima','Technik und Digitales',
                    'Gesundheit und Ernährung','Bildung und Weiterbildung','Wohnen und Stadt','Konsum und Werbung','Medien',
                    'Reisen und Mobilität','Kultur und Freizeit'],
        grammatik:['Zweiteilige Konnektoren: nicht nur … sondern auch, je … desto, sowohl … als auch, weder … noch',
                   'Präpositionen mit Genitiv: trotz, wegen, aufgrund, innerhalb, während','Passiv mit Modalverb',
                   'Konjunktiv II, auch in der Vergangenheit','Relativsätze mit Präposition (mit dem, über die)',
                   'Pronominaladverbien: darauf, worüber, damit','Partizipien als Adjektive','Indirekte Rede (einfach)',
                   'Nomen-Verb-Verbindungen (zur Verfügung stellen, Rücksicht nehmen)'],
        redemittel:[
          ['Schreiben — Anfrage','Ich habe Ihre Anzeige in … gelesen und hätte einige Fragen. · Könnten Sie mir bitte mitteilen, ob …'],
          ['Schreiben — Beschwerde','Leider muss ich mich über … beschweren. · Laut Ihrer Beschreibung … · Ich erwarte daher, dass …'],
          ['Schreiben — verbinden','Darüber hinaus … · Zum einen … zum anderen … · Folglich … · Dennoch …'],
          ['Sprechen — Erfahrung','Ich möchte von einer Erfahrung erzählen, die … · Damals … · Rückblickend würde ich sagen …'],
          ['Sprechen — Diskussion','Ich sehe das etwas anders, denn … · Das stimmt zwar, aber … · Ein wichtiges Argument ist …'],
          ['Sprechen — Planen','Ich hätte Bedenken, weil … · Was hältst du davon, wenn … · Dann halten wir fest: …'] ],
        bewertung:[
          ['Lesen und Sprachbausteine','Leseteil 1 und 2 je 25 Punkte, Teil 3 25 Punkte (2,5 je Situation), Sprachbausteine je 15 — zusammen 105.'],
          ['Hören','Teil 1 und 3 je 25 Punkte (5 je Aussage), Teil 2 25 Punkte (2,5 je Aussage) — zusammen 75. Jeder Text nur einmal.'],
          ['Schreiben','Drei Kriterien — Aufgabenbewältigung (drei Leitpunkte), Gestaltung, Richtigkeit — je A bis D (5, 3, 1, 0), Summe mal drei: höchstens 45.'],
          ['Sprechen','Drei Teile je 25 Punkte: Ausdrucksfähigkeit, Aufgabenbewältigung, formale Richtigkeit, Aussprache. Das Kennenlernen am Anfang zählt nicht.'],
          ['Insgesamt','300 Punkte: 225 schriftlich, 75 mündlich.'] ],
        ablauf:[
          'Schriftlich: Lesen und Sprachbausteine 90 Minuten ohne Pause, dann Hören (ca. 20), dann Schreiben (30).',
          'Beim Hören hörst du jeden Text nur einmal.',
          'Beim Schreiben wählst du zwischen Aufgabe A (Bitte um Informationen) und B (Beschwerde).',
          'Mündlich zu zweit, ca. 15 Minuten, vorher 20 Minuten Vorbereitung. Zuerst ein kurzes Kennenlernen, das nicht bewertet wird.'] },
      fuer:'Studium, Anerkennung im Beruf, qualifizierte Arbeit — die B2-Prüfung von telc.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'Drei Leseteile mit 20 Aufgaben, dann zwei Teile Sprachbausteine mit 20 Lücken. Zusammen 90 Minuten, ohne Pause.'},
               {id:'hoeren',n:'Hören',m:'ca. 20',
                 t:'Drei Teile, 20 Aufgaben — alle richtig oder falsch.'},
               {id:'schreiben',n:'Schreiben',m:'30',
                 t:'Eine halbformelle E-Mail, mindestens 150 Wörter.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 15',
                 t:'Zu zweit: über Erfahrungen sprechen, diskutieren, gemeinsam etwas planen.'} ],
      hinweis:'Schriftlich: Lesen und Sprachbausteine 90 Minuten ohne Pause, dann Hören ca. 20 und '
             +'Schreiben 30 Minuten. Mündlich ca. 15 Minuten zu zweit, vorher 20 Minuten Vorbereitung.',
      uebungstest:'https://shop.telc.net/media/catalog/product/file/201907015023B00030201BiB.pdf' },

    { id:'telcc1allg', name:'telc Deutsch C1', anbieter:'telc · allgemein', niveau:'C1',
      bild:'typisch-deutsch', kurs:'goethetelc', telc:true, geprueft:true,
      fuer:'Für Beruf, Behörde und Anerkennung — die allgemeine C1-Prüfung von telc.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'Textrekonstruktion, Abschnitte zuordnen, ein langer Text mit „richtig / falsch / steht nicht im Text", Sprachbausteine mit 22 Lücken.'},
               {id:'hoeren',n:'Hören',m:'ca. 40',
                 t:'Acht Personen, ein Gespräch, ein Vortrag zum Mitschreiben — alles nur einmal.'},
               {id:'schreiben',n:'Schreiben',m:'70',
                 t:'Eine Erörterung oder Stellungnahme, etwa 350 Wörter — eines von zwei Themen.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 16',
                 t:'Zu zweit: Präsentation, Anschlussfragen und Zusammenfassung, Diskussion.'} ],
      hinweis:'Schriftlich: Lesen und Sprachbausteine 90 Minuten, 20 Minuten Pause, Hören ca. 40, Schreiben 70 Minuten. '
             +'Mündlich ca. 16 Minuten zu zweit, vorher 20 Minuten Vorbereitung für die Präsentation.',
      training:{ lesen:'telcC1', hoeren:'telcC1', schreiben:'telcC1', sprechen:'telcC1' },
      /* Punkte laut telc Übungstest 1 Deutsch C1: Lesen 48 + Sprachbausteine 22,
         Hören 48, Schreiben 48 = 166; mündlich 48. Grenze nicht genannt → Richtwert. */
      prognose:{ richtwert:true, teile:[ { name:'Schriftliche Prüfung', max:166, grenze:100,
                           anteile:{ lesen:70, hoeren:48, schreiben:48 } },
                         { name:'Mündliche Prüfung', max:48, grenze:29, anteile:{ sprechen:48 } } ] },
      uebungstest:'https://shop.telc.net/media/catalog/product/file/5029B00010101BiB.pdf',
      mat:{
        wortschatz:['Arbeitswelt und Karriere','Wohnen und Stadtentwicklung','Konsum und Nachhaltigkeit','Medien und Öffentlichkeit',
                    'Gesundheit und Pflege','Familie und Generationen','Kultur und Freizeit','Verkehr und Mobilität','Politik vor Ort und Ehrenamt'],
        grammatik:['Nominalstil und Funktionsverbgefüge (in Anspruch nehmen, zur Sprache bringen)','Passiv und Passiversatz',
                   'Konjunktiv I und II in Redewiedergabe und Hypothese','Partizipialattribute',
                   'Konnektoren: wohingegen, insofern, zumal, sofern, indem, geschweige denn','Präpositionen mit Genitiv: angesichts, hinsichtlich, infolge, mangels'],
        redemittel:[
          ['Schreiben — Position wiedergeben','Der Verfasser des Leserbriefs vertritt die Auffassung, dass … · Laut der Umfrage …'],
          ['Schreiben — abwägen','Zwar …, jedoch … · Dafür spricht … · Dagegen lässt sich einwenden …'],
          ['Schreiben — Stellung nehmen','Meines Erachtens … · Ich halte es für sinnvoll, … · Abschließend möchte ich betonen …'],
          ['Sprechen — Präsentation','Ich möchte auf drei Aspekte eingehen. · Damit komme ich zu … · Zusammenfassend …'],
          ['Sprechen — zusammenfassen','Wenn ich dich richtig verstanden habe, … · Mich würde noch interessieren …'],
          ['Sprechen — diskutieren','Die These besagt im Kern, dass … · Dem stimme ich nur bedingt zu, weil … · Das ist ein berechtigter Einwand, allerdings …'] ],
        bewertung:[
          ['Lesen und Sprachbausteine (70)','Textrekonstruktion 12, Abschnitte 12, Detailverstehen 22, Überschrift 2, Sprachbausteine 22.'],
          ['Hören (48)','Acht Personen 8, Gespräch 20, Vortrag mitschreiben 20. Alles nur einmal.'],
          ['Schreiben (48)','Ein Text, bewertet nach Aufgabengerechtheit, Korrektheit, Repertoire und kommunikativer Gestaltung.'],
          ['Sprechen (48)','Präsentation, Anschlussfragen/Zusammenfassung, Diskussion — Inhalt und Sprache.'],
          ['Insgesamt','214 Punkte: 166 schriftlich, 48 mündlich.'] ],
        ablauf:[
          'Schriftlich: Lesen und Sprachbausteine 90 Minuten, dann 20 Minuten Pause, Hören ca. 40, Schreiben 70.',
          'Beim Hören läuft jeder Text nur einmal — beim Vortrag schreibst du auf einem Handzettel mit.',
          'Beim Schreiben wählst du eines von zwei Themen, etwa 350 Wörter.',
          'Mündlich zu zweit, ca. 16 Minuten, vorher 20 Minuten Vorbereitung für deine Präsentation.'] } },

    { id:'telcc1', name:'telc Deutsch C1 Hochschule', anbieter:'telc · Hochschulzugang', niveau:'C1',
      bild:'typisch-deutsch', kurs:'goethetelc', muster:'C1', telc:true, geprueft:true,
      fuer:'Der Sprachnachweis für das Studium an einer deutschen Hochschule.',
      training:{ lesen:'telcC1H', hoeren:'telcC1H', schreiben:'telcC1H', sprechen:'telcC1H' },
      /* Punkte nach telc „Tipps C1 Hochschule": Lesen 48 + Sprachbausteine 22, Hören 48,
         Schreiben 48 = 166 schriftlich; mündlich 48. Eine Bestehensgrenze nennt das
         Dokument nicht — 60 % ist ein Richtwert. */
      prognose:{ richtwert:true, teile:[ { name:'Schriftliche Prüfung', max:166, grenze:100,
                           anteile:{ lesen:70, hoeren:48, schreiben:48 } },
                         { name:'Mündliche Prüfung', max:48, grenze:29, anteile:{ sprechen:48 } } ] },
      mat:{
        wortschatz:['Studium und Lehre','Wissenschaft und Forschung','Bildungspolitik','Gesellschaft und Demografie',
                    'Umwelt und Klima','Technik und Digitalisierung','Gesundheit und Psychologie','Wirtschaft und Arbeit','Medien und Kommunikation'],
        grammatik:['Nominalstil: aus Verben Nomen machen (die Durchführung der Studie)','Passiv und Passiversatz (lässt sich, ist zu)',
                   'Konjunktiv I in der Redewiedergabe','Partizipialattribute (die im Labor durchgeführte Studie)',
                   'Konnektoren: wohingegen, insofern, zumal, sofern, indem','Präpositionen mit Genitiv: angesichts, hinsichtlich, infolge',
                   'Funktionsverbgefüge: in Betracht ziehen, zur Folge haben, Kritik üben'],
        redemittel:[
          ['Schreiben — Positionen wiedergeben','X vertritt die Auffassung, dass … · Laut Y sei … · Demgegenüber betont Z …'],
          ['Schreiben — abwägen','Zwar …, jedoch … · Einerseits …, andererseits … · Dafür spricht … · Dagegen lässt sich einwenden …'],
          ['Schreiben — Fazit','Zusammenfassend lässt sich festhalten … · Meines Erachtens … · Abschließend …'],
          ['Sprechen — Präsentation','Ich möchte auf drei Aspekte eingehen. · Erstens … · Damit komme ich zu … · Abschließend …'],
          ['Sprechen — zusammenfassen','Wenn ich dich richtig verstanden habe, … · Dein zentraler Punkt war … · Mich würde noch interessieren …'],
          ['Sprechen — Zitat','Das Zitat bringt zum Ausdruck, dass … · Dem würde ich nur teilweise zustimmen, denn … · Das ist ein berechtigter Einwand, allerdings …'] ],
        bewertung:[
          ['Lesen und Sprachbausteine (70)','Textrekonstruktion 12, Abschnitte 12, Detailverstehen 22 + Überschrift 2, Sprachbausteine 22.'],
          ['Hören (48)','Acht Personen 8, Gespräch 20 (2 je Aufgabe), Vortrag mitschreiben 20 (2 je Notiz). Alles nur einmal.'],
          ['Schreiben (48)','Vier Kriterien: Aufgabengerechtheit, Korrektheit, Repertoire, kommunikative Gestaltung.'],
          ['Sprechen (48)','Inhalt 16 (Präsentation 6, Zusammenfassung 4, Diskussion 6) und Sprache 32 (Flüssigkeit, Repertoire, Richtigkeit, Aussprache je bis 8).'],
          ['Insgesamt','214 Punkte: 166 schriftlich, 48 mündlich.'] ],
        ablauf:[
          'Schriftlich: Lesen und Sprachbausteine 90 Minuten, Hören ca. 40, Schreiben 70.',
          'Beim Hören läuft jeder Text nur einmal — beim Vortrag schreibst du auf einem Handzettel mit.',
          'Beim Schreiben wählst du eines von zwei Themen, etwa 350 Wörter.',
          'Mündlich zu zweit, ca. 16 Minuten, vorher 20 Minuten Vorbereitung für deine Präsentation.'] },
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'Drei Leseteile mit langen Sachtexten, zusammen rund 2600 Wörter, dazu ein Lückentext mit 22 Sprachbausteinen.'},
               {id:'hoeren',n:'Hören',m:'ca. 40',
                 t:'Drei Teile. Im letzten schreibst du bei einem Vortrag von etwa 10 Minuten mit. 5 Minuten zum Übertragen sind dabei.'},
               {id:'schreiben',n:'Schreiben',m:'70',
                 t:'Ein Text mit etwa 350 Wörtern — du wählst eines von zwei Themen.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 16',
                 t:'Zu zweit: eine kurze Präsentation, die Präsentation des anderen zusammenfassen und nachfragen, dann eine Diskussion zu einem Zitat.'} ],
      hinweis:'Schriftlich: Lesen und Sprachbausteine 90 Minuten, Hören ca. 40, Schreiben 70 Minuten. '
             +'Mündlich ca. 16 Minuten zu zweit, vorher 20 Minuten Vorbereitung für die Präsentation.',
      punkte:'Insgesamt 214 Punkte: 166 im schriftlichen, 48 im mündlichen Teil.',
      uebungstest:'https://shop.telc.net/media/catalog/product/file/5032B00010301BiB.pdf' },

    { id:'telcmed', name:'telc Medizin', anbieter:'Fachsprachprüfung', niveau:'B2–C1',
      bild:'gesundheit', kurs:'telcmed', fach:true, geprueft:true, dauer:'ca. 2 Std 25 Min',
      fuer:'Die Fachsprachprüfung auf dem Weg zur Approbation.',
      module:[ {id:'hoeren',n:'Hören',m:'ca. 30',
                 t:'Drei Teile: Visite, Übergabe, Telefonat — Klinikalltag im Ohr.'},
               {id:'lesen',n:'Lesen und Sprachbausteine',m:'50',
                 t:'Arztbriefe, Befunde, Fachartikel — dazu die Grammatik im Text.'},
               {id:'anamnese',n:'Arzt-Patienten-Gespräch',m:'ca. 20',
                 t:'Das Erstgespräch mit dem Patienten, in Alltagssprache.'},
               {id:'doku',n:'Kurzarztbrief',m:'ca. 20',
                 t:'Das Gehörte schriftlich festhalten — knapp und korrekt.'},
               {id:'fall',n:'Arzt-Arzt-Gespräch',m:'ca. 20',
                 t:'Den Fall der Kollegin vorstellen, in Fachsprache.'} ],
      hinweis:'Diese Prüfung hat zwei Hälften. Schriftlich zusammen 80 Minuten ohne Pause — '
             +'erst Hören, dann Lesen und Sprachbausteine. Danach der mündliche Teil: '
             +'65 Minuten als Einzelprüfung mit 5 Minuten Vorbereitung. Darin sprichst du mit '
             +'dem Patienten, schreibst den Kurzarztbrief und stellst den Fall der Kollegin vor. '
             +'Einzelne Module kann man hier nicht ablegen — alles an einem Termin.' },

    { id:'pflege', name:'Deutsch für die Pflege', anbieter:'telc B1·B2 Pflege', niveau:'B1–B2',
      bild:'pflege', kurs:'pflege', fach:true, geprueft:true, dauer:'ca. 2 Std 10 Min',
      fuer:'Anerkennung als Pflegefachkraft — Übergabe, Angehörige, Dokumentation.',
      module:[ {id:'hoeren',n:'Hören',m:'25',
                 t:'Übergabe, Visite, Telefon — vier Teile aus dem Dienstalltag.'},
               {id:'lesen',n:'Lesen und Sprachbausteine',m:'60',
                 t:'Pflegeberichte, Dienstpläne, Medikamentenpläne — dazu die Grammatik im Text.'},
               {id:'schreiben',n:'Schreiben',m:'30',
                 t:'Ein Pflegebericht. Punkte gibt es für Vollständigkeit, nicht für schöne Sätze.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 16',
                 t:'Drei Teile zu zweit: Übergabe, Gespräch mit Angehörigen, Beratung.'} ],
      hinweis:'Eine Prüfung, zwei Niveaus: ob am Ende B1 oder B2 auf dem Zertifikat steht, '
             +'entscheidet dein Ergebnis. Schriftlich zusammen 115 Minuten. Sprechen ca. 16 Minuten '
             +'zu zweit — dazu 20 Minuten Vorbereitung. Einzelne Module kann man hier nicht ablegen.' },

    { id:'telcb1beruf', name:'telc Deutsch B1+ Beruf', anbieter:'telc · Beruf', niveau:'B1',
      bild:'kunden', kurs:'goethetelc', telc:true, fach:true, geprueft:true,
      fuer:'Deutsch für den Arbeitsplatz — der Nachweis für Jobcenter und Arbeitgeber.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'E-Mails und Betreffzeilen, ein E-Mail-Wechsel, Anzeigen; dazu Sprachbausteine in einem Infotext und einem Geschäftsbrief.'},
               {id:'hoeren',n:'Hören',m:'30', t:'Kollegen äußern sich (einmal hören), ein Gespräch im Betrieb und kurze Ansagen (je zweimal).'},
               {id:'schreiben',n:'Schreiben',m:'30', t:'Ein halbformeller Brief oder eine E-Mail aus dem Beruf mit vier Leitpunkten.'},
               {id:'sprechen',n:'Sprechen',m:'15',
                 t:'Zu zweit: Kontaktaufnahme, Gespräch über ein Arbeitsthema, gemeinsam eine Aufgabe lösen.'} ],
      hinweis:'Schriftlich 150 Minuten: Lesen und Sprachbausteine 90, Hören ca. 30, Schreiben 30. '
             +'Mündlich ca. 15 Minuten zu zweit, vorher 20 Minuten Vorbereitung.',
      punkte:'Bestanden mit mindestens 180 von 300 Punkten und mindestens 60 Prozent in jedem Teil: 135 von 225 schriftlich, '
            +'45 von 75 mündlich. Ist nur ein Teil nicht bestanden, kannst du ihn bis Ende des folgenden Kalenderjahres wiederholen.',
      training:{ lesen:'telcB1B', hoeren:'telcB1B', schreiben:'telcB1B', sprechen:'telcB1B' },
      prognose:{ teile:[ { name:'Schriftliche Prüfung', max:225, grenze:135, anteile:{ lesen:105, hoeren:75, schreiben:45 } },
                         { name:'Mündliche Prüfung', max:75, grenze:45, anteile:{ sprechen:75 } } ] },
      mat:{
        wortschatz:['Bewerbung und Vorstellungsgespräch','Arbeitsvertrag und Arbeitszeit','Kollegen und Vorgesetzte','Kunden und Reklamationen',
                    'Lieferung und Bestellung','Arbeitsschutz und Gesundheit','Weiterbildung','Urlaub und Krankmeldung','Telefon und E-Mail im Büro'],
        grammatik:['Konnektoren: weil, obwohl, deshalb, damit, sodass','Passiv im Arbeitsablauf (wird geliefert, wurde repariert)',
                   'Höfliche Bitten mit Konjunktiv II (Könnten Sie …, Ich würde gern …)','Präpositionen mit Dativ und Akkusativ',
                   'Relativsätze','Verben mit Präposition (sich bewerben um, sich kümmern um, Bescheid geben über)','zu + Infinitiv'],
        redemittel:[
          ['Brief — Anfang','Sehr geehrte Damen und Herren, ich beziehe mich auf Ihre Anzeige vom … · ich wende mich an Sie, weil …'],
          ['Brief — bitten und anfragen','Könnten Sie mir bitte mitteilen, … · Ich wäre Ihnen dankbar, wenn … · Bitte schicken Sie mir …'],
          ['Brief — Schluss','Für Rückfragen stehe ich Ihnen gern zur Verfügung. · Mit freundlichen Grüßen'],
          ['Sprechen — Informationen weitergeben','Auf meinem Blatt steht, dass … · Interessant finde ich, dass …'],
          ['Sprechen — planen','Ich schlage vor, dass … · Wie wäre es, wenn … · Dann kümmere ich mich um … und du um …'] ],
        bewertung:[
          ['Lesen (75) und Sprachbausteine (30)','Jeder Leseteil 25 Punkte, jeder Teil Sprachbausteine 15.'],
          ['Hören (75)','Drei Teile mit je 25 Punkten.'],
          ['Schreiben (45)','Leitpunkte, Gestaltung, Richtigkeit je A–D (5/3/1/0), mal drei; dazu bis zu 2 Zusatzpunkte. Ist Kriterium I oder III ein D, gibt es 0 Punkte.'],
          ['Sprechen (75)','Teil 1 bis 15, Teil 2 und 3 je bis 30: Ausdrucksfähigkeit, Aufgabenbewältigung, Richtigkeit, Aussprache.'],
          ['Bestanden','180 von 300 und in jedem Teil 60 Prozent: 135 schriftlich, 45 mündlich.'] ],
        ablauf:[
          'Schriftlich: Lesen und Sprachbausteine 90 Minuten, Hören ca. 30, Schreiben 30.',
          'Beim Hören: Teil 1 nur einmal, Teil 2 und 3 zweimal.',
          'Mündlich zu zweit, ca. 15 Minuten, vorher 20 Minuten Vorbereitung.'] },
      uebungstest:'https://shop.telc.net/media/catalog/product/file//2/0/20201224_5034-b00-010103_web_2.pdf' },

    { id:'telcb2beruf', name:'telc Deutsch B2+ Beruf', anbieter:'telc · Beruf', niveau:'B2',
      bild:'kunden', kurs:'goethetelc', telc:true, fach:true, geprueft:true,
      fuer:'Deutsch für qualifizierte Jobs — Berichte, Besprechungen, Verhandlungen.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'Fünf Leseteile aus dem Arbeitsleben (60 Minuten), dazu zwei Teile Sprachbausteine (30 Minuten).'},
               {id:'hoeren',n:'Hören',m:'ca. 30', t:'Nachrichten, ein Firmenporträt und eine Besprechung — alles nur einmal hören.'},
               {id:'schreiben',n:'Schreiben',m:'60', t:'Ein Geschäftsbrief mit sechs Leitpunkten (180–200 Wörter) und eine kurze E-Mail oder Notiz (60–80 Wörter).'},
               {id:'sprechen',n:'Sprechen',m:'ca. 18',
                 t:'Zu zweit: etwas präsentieren, ein Thema diskutieren, gemeinsam verhandeln.'} ],
      hinweis:'Schriftlich 180 Minuten: Lesen und Sprachbausteine 90, Hören ca. 30, Schreiben 60. '
             +'Mündlich ca. 18 Minuten zu zweit, vorher 20 Minuten Vorbereitung.',
      punkte:'Bestanden mit mindestens 60 Prozent in beiden Teilen: 45 von 75 Punkten schriftlich und 15 von 25 mündlich.',
      training:{ lesen:'telcB2B', hoeren:'telcB2B', schreiben:'telcB2B', sprechen:'telcB2B' },
      prognose:{ teile:[ { name:'Schriftliche Prüfung', max:75, grenze:45, anteile:{ lesen:30, hoeren:20, schreiben:25 } },
                         { name:'Mündliche Prüfung', max:25, grenze:15, anteile:{ sprechen:25 } } ] },
      mat:{
        wortschatz:['Angebot, Auftrag und Rechnung','Reklamation und Kulanz','Projekte und Termine','Besprechung und Protokoll',
                    'Personal, Bewerbung und Weiterbildung','Arbeitsrecht und Arbeitszeit','Marketing und Kunden','Firmenporträt: Zahlen und Entwicklung'],
        grammatik:['Nominalstil im Geschäftsbrief (nach Prüfung, bei Rückfragen)','Passiv und Passiversatz (lässt sich, ist zu erledigen)',
                   'Konnektoren: zumal, sofern, indem, wohingegen','Konjunktiv II für Vorschläge und Bedingungen',
                   'Verben und Nomen mit Präposition (Bezug nehmen auf, in Rechnung stellen)','Indirekte Rede im Bericht'],
        redemittel:[
          ['Brief — Bezug und Anliegen','Bezug nehmend auf Ihre Anfrage vom … · Hiermit möchten wir Ihnen mitteilen, dass …'],
          ['Brief — Angebot und Bedingungen','Gern unterbreiten wir Ihnen folgendes Angebot: … · Bei einer Bestellung bis … gewähren wir …'],
          ['Brief — Schluss','Für Rückfragen stehen wir Ihnen gern zur Verfügung. · Wir freuen uns auf Ihre Rückmeldung.'],
          ['Präsentieren','Ich möchte Ihnen kurz … vorstellen. · Zunächst …, danach … · Abschließend lässt sich sagen …'],
          ['Diskutieren','Da muss ich widersprechen. · Das sehe ich anders, weil … · Ein wichtiges Argument ist …'],
          ['Verhandeln','Ich könnte mir vorstellen, dass … · Wären Sie einverstanden, wenn …? · Darauf können wir uns einigen.'] ],
        bewertung:[
          ['Lesen und Sprachbausteine','Zusammen mit Hören und Schreiben 75 Punkte schriftlich.'],
          ['Schreiben (25)','Teil 1 bis 20 Punkte: Inhalt 4, kommunikative Angemessenheit 8, sprachliche Angemessenheit 8. Teil 2 bis 5 Punkte, als Ganzes bewertet.'],
          ['Sprechen (25)','Präsentieren, Diskutieren, Verhandeln — zu zweit.'],
          ['Bestanden','60 Prozent in beiden Teilen: 45 schriftlich, 15 mündlich.'] ],
        ablauf:[
          'Schriftlich: Lesen 60 Minuten, Sprachbausteine 30, Hören ca. 30, Schreiben 60.',
          'Beim Hören: Alle Texte nur einmal.',
          'Mündlich zu zweit, ca. 18 Minuten, vorher 20 Minuten Vorbereitung.'] },
      uebungstest:'https://shop.telc.net/media/catalog/product/file/10_09_telc_deutsch_b2_beruf_uebungstest_1.pdf' },

    { id:'telcb1b2beruf', name:'telc Deutsch B1·B2 Beruf', anbieter:'telc · Beruf · zwei Niveaus', niveau:'B1–B2',
      bild:'buero', kurs:'goethetelc', telc:true, fach:true, geprueft:true,
      fuer:'Die Prüfung am Ende vom Berufssprachkurs — am Ende steht B1 oder B2 auf dem Zertifikat.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'60',
                 t:'Betreffzeilen, Fragen und Tipps aus einem Forum, Anfragen und Reklamationen, eine Regel; dazu zwei Teile Sprachbausteine.'},
               {id:'hoeren',n:'Hören',m:'ca. 25', t:'Telefonansagen, kurze Gespräche im Betrieb, eine Radiosendung oder Besprechung, Meinungen. Alles nur einmal.'},
               {id:'schreiben',n:'Schreiben',m:'45', t:'Zwei E-Mails: an Kunden (Sie) und an Kollegen oder Vorgesetzte, je drei Inhaltspunkte.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 16',
                 t:'Meist zu zweit: ein Foto aus der Arbeitswelt kommentieren, ein Kurzvortrag, gemeinsam eine Aufgabe lösen.'} ],
      hinweis:'Schriftlich 2 Stunden 10 Minuten: Hören ca. 25, Lesen und Sprachbausteine 60, Schreiben 45. '
             +'Mündlich ca. 16 Minuten, vorher 20 Minuten Vorbereitung für Teil 2 und 3.',
      punkte:'Drei Ergebnisse: Hören, Lesen und Sprachbausteine zusammen (59 Punkte: B1 ab 27, B2 ab 43), Schreiben (40: B1 ab 14, B2 ab 30) '
            +'und Sprechen (100: B1 ab 35, B2 ab 75). Ohne B1 im Sprechen gibt es kein Zertifikat. B2 bekommst du mit B2 im Sprechen, '
            +'B2 in einem schriftlichen Teil und mindestens B1 im anderen.',
      training:{ lesen:'telcB1B2', hoeren:'telcB1B2', schreiben:'telcB1B2', sprechen:'telcB1B2' },
      prognose:{ typ:'b1b2' },
      mat:{
        wortschatz:['Telefon, Termine und Rückruf','Anfrage, Angebot und Auftrag','Reklamation und Lieferung','Arbeitszeit, Urlaub und Krankmeldung',
                    'Arbeitsschutz und Regeln im Betrieb','Kollegen, Team und Besprechung','Weiterbildung und Einarbeitung','Kunden und Service'],
        grammatik:['Konnektoren: weil, obwohl, damit, deshalb, trotzdem','Präpositionen und Pronomen (worüber, dafür, dessen)',
                   'Passiv im Betrieb (wird geliefert, muss repariert werden)','Höfliche Bitten mit Konjunktiv II',
                   'Nomen-Verb-Verbindungen (in Rechnung stellen, zur Verfügung stehen)','Relativsätze'],
        redemittel:[
          ['E-Mail an Kunden','Sehr geehrte Frau …, vielen Dank für Ihre Anfrage vom … · Gern bieten wir Ihnen … an. · Für Rückfragen stehe ich Ihnen gern zur Verfügung.'],
          ['E-Mail an Kollegen','Hallo …, kurz zur Info: … · Kannst du bitte bis … · Sag mir einfach Bescheid, wenn …'],
          ['Foto kommentieren','Auf dem Foto sieht man … · Im Hintergrund … · Ich glaube, dass … · Diese Arbeit finde ich …, weil …'],
          ['Kurzvortrag','Ich spreche heute über … · Zuerst …, dann … · Zum Schluss möchte ich sagen, dass …'],
          ['Gemeinsam planen','Ich schlage vor, dass … · Was hältst du davon, wenn …? · Gut, dann machen wir es so.'] ],
        bewertung:[
          ['Hören, Lesen, Sprachbausteine (59)','Jede richtige Lösung ein Punkt. B1 ab 27, B2 ab 43.'],
          ['Schreiben (40)','Je E-Mail vier Kriterien mit 0 bis 5 Punkten: Aufgabenbewältigung, Gestaltung, Korrektheit, Wortschatz. B1 ab 14, B2 ab 30.'],
          ['Sprechen (100)','50 für die Aufgaben (Foto 10, Vortrag 20, Aufgabe 20), 50 für Aussprache, Flüssigkeit, Korrektheit, Wortschatz. B1 ab 35, B2 ab 75.'],
          ['Zertifikat','B2: Sprechen B2 und schriftlich einmal B2, einmal mindestens B1. B1: Sprechen B1 und schriftlich B1; ein schwacher Teil geht nur mit Mindestpunkten (19 bzw. 8).'] ],
        ablauf:[
          'Schriftlich: Hören ca. 25 Minuten, Lesen und Sprachbausteine 60, Schreiben 45.',
          'Beim Hören: Alle Texte nur einmal.',
          'Mündlich meist zu zweit, ca. 16 Minuten, vorher 20 Minuten Vorbereitung.'] },
      uebungstest:'https://shop.telc.net/media/catalog/product/file//2/0/20201225_5066-b00-010102_web_1.pdf' },

    { id:'telcb2c1beruf', name:'telc Deutsch B2·C1 Beruf', anbieter:'telc · Beruf · zwei Niveaus', niveau:'B2–C1',
      bild:'buero', kurs:'goethetelc', telc:true, fach:true, geprueft:true,
      fuer:'Für Fachkräfte und den Berufssprachkurs C1 — am Ende steht B2 oder C1 auf dem Zertifikat.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'70',
                 t:'Ein Internetforum, ein langer betrieblicher Bericht, ein Sachtext (50 Minuten); dazu ein Gespräch und ein Geschäftsbrief mit Lücken (20 Minuten).'},
               {id:'hoeren',n:'Hören',m:'40', t:'Zwei Gespräche, ein Vortrag, Meinungen von fünf Personen, eine Besprechung. Alles nur einmal.'},
               {id:'schreiben',n:'Schreiben',m:'60', t:'Drei Texte: eine E-Mail an Kollegen, eine formelle Antwort nach außen, eine Diskussionsvorlage.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 20',
                 t:'Zu zweit: Small Talk zu einem Foto, eine Präsentation von etwa drei Minuten, eine Diskussion.'} ],
      hinweis:'Schriftlich 190 Minuten: Hören 40, Lesen 50, Sprachbausteine 20, Pause, Schreiben 60. '
             +'Mündlich ca. 20 Minuten zu zweit. Die Präsentation bereitest du zu Hause vor und hältst sie frei.',
      punkte:'Drei Ergebnisse: Hören, Lesen und Sprachbausteine zusammen (70 Punkte: B2 ab 32, C1 ab 50), Schreiben (42: B2 ab 18, C1 ab 34) '
            +'und Sprechen (100: B2 ab 35, C1 ab 75). Ohne B2 im Sprechen gibt es kein Zertifikat. C1 bekommst du mit C1 im Sprechen, '
            +'C1 in einem schriftlichen Teil und mindestens B2 im anderen.',
      training:{ lesen:'telcB2C1', hoeren:'telcB2C1', schreiben:'telcB2C1', sprechen:'telcB2C1' },
      prognose:{ typ:'b2c1' },
      mat:{
        wortschatz:['Projekte, Berichte und Kennzahlen','Umstrukturierung und Veränderungen','Arbeitsrecht und Mitbestimmung','Arbeitsschutz und Gesundheit',
                    'Personal, Bewerbung und Weiterbildung','Kunden, Lieferanten und Reklamation','Besprechungen und Entscheidungen','Arbeitszeit und Arbeitsorganisation'],
        grammatik:['Nominalstil in Berichten und Vorlagen','Konnektoren auf C1: zwar … jedoch, demgegenüber, insofern, sofern',
                   'Passiv und Passiversatz (lässt sich, ist zu prüfen)','Präpositionaladverbien (darauf, womit, worüber)',
                   'Nomen-Verb-Verbindungen (in Kraft treten, zur Sprache bringen)','Konjunktiv I und indirekte Rede im Bericht'],
        redemittel:[
          ['Diskussionsvorlage','Ausgangslage: … · Für Möglichkeit A spricht, dass … · Demgegenüber … · Wir empfehlen daher …, weil …'],
          ['Formelle Antwort','Vielen Dank für Ihre Bewerbung / Anfrage. · Wir freuen uns, Ihnen … anbieten zu können. · Bitte bestätigen Sie bis …'],
          ['Small Talk','Das kenne ich gut, bei uns … · Wie ist das bei Ihnen? · Ehrlich gesagt sehe ich das ein bisschen anders.'],
          ['Präsentation','Ich möchte Ihnen heute … vorstellen. · Damit komme ich zum zweiten Punkt. · Zusammenfassend lässt sich sagen …'],
          ['Diskussion','Da muss ich Ihnen widersprechen. · Das stimmt zwar, aber … · Können wir uns darauf einigen, dass …?'] ],
        bewertung:[
          ['Hören, Lesen, Sprachbausteine (70)','Jede richtige Lösung ein Punkt. B2 ab 32, C1 ab 50.'],
          ['Schreiben (42)','Je Text Aufgabenbewältigung und Gestaltung (Teil 1 je 2, Teil 2 je 4, Teil 3 je 5), dazu Korrektheit und Wortschatz über alle drei Texte (je 10). B2 ab 18, C1 ab 34.'],
          ['Sprechen (100)','50 für die Aufgaben (Small Talk 10, Präsentation 10, Rückfragen 10, Diskussion 20), 50 für Aussprache, Flüssigkeit, Korrektheit, Wortschatz. B2 ab 35, C1 ab 75.'],
          ['Zertifikat','C1: Sprechen C1 und schriftlich einmal C1, einmal mindestens B2. B2: Sprechen mindestens B2 und schriftlich mindestens einmal B2; ein schwacher Teil geht nur mit Mindestpunkten (19 bzw. 8).'] ],
        ablauf:[
          'Schriftlich: Hören 40 Minuten, Lesen 50, Sprachbausteine 20, Pause, Schreiben 60.',
          'Beim Hören: Alle Texte nur einmal.',
          'Mündlich zu zweit, ca. 20 Minuten. Präsentation frei, nicht ablesen; Laptop und Beamer sind nicht erlaubt.'] },
      uebungstest:'https://shop.telc.net/media/catalog/product/file/u/e/uebungstest_deutsch_b2-c1-beruf.pdf' },

    { id:'telcc1beruf', name:'telc Deutsch C1 Beruf', anbieter:'telc · Beruf', niveau:'C1',
      bild:'buero', kurs:'goethetelc', telc:true, fach:true, geprueft:true,
      fuer:'C1 für Fach- und Führungskräfte — für Anerkennung, Bewerbung und Aufstieg.',
      module:[ {id:'lesen',n:'Lesen und Sprachbausteine',m:'90',
                 t:'Ein Wirtschaftsartikel mit Lücken, Forenbeiträge, eine E-Mail mit langem Fachtext; dazu ein Rundschreiben mit 22 Lücken.'},
               {id:'hoeren',n:'Hören',m:'ca. 40', t:'Acht kurze Interviews, ein Verkaufs- oder Verhandlungsgespräch, ein Vortrag zum Mitschreiben. Alles nur einmal.'},
               {id:'schreiben',n:'Schreiben',m:'70', t:'Ein argumentativer Text von etwa 350 Wörtern zu einem von zwei betrieblichen Themen.'},
               {id:'sprechen',n:'Sprechen',m:'ca. 16',
                 t:'Zu zweit: eine Präsentation für eine Zielgruppe, Anschlussfragen, eine Diskussion.'} ],
      hinweis:'Schriftlich: Lesen und Sprachbausteine 90 Minuten, 20 Minuten Pause, Hören ca. 40, Schreiben 70. '
             +'Mündlich ca. 16 Minuten zu zweit, vorher 20 Minuten Vorbereitung.',
      punkte:'214 Punkte: schriftlich 166 (Lesen 48, Sprachbausteine 22, Hören 48, Schreiben 48), mündlich 48. Bestanden mit mindestens 128 Punkten '
            +'und mindestens 60 Prozent in beiden Teilen. Ist nur ein Teil nicht bestanden, kannst du ihn bis Ende des folgenden Kalenderjahres wiederholen.',
      training:{ lesen:'telcC1B', hoeren:'telcC1B', schreiben:'telcC1B', sprechen:'telcC1B' },
      prognose:{ teile:[ { name:'Schriftliche Prüfung', max:166, grenze:100, anteile:{ lesen:70, hoeren:48, schreiben:48 } },
                         { name:'Mündliche Prüfung', max:48, grenze:29, anteile:{ sprechen:48 } },
                         { name:'Gesamt', max:214, grenze:128, anteile:{ lesen:70, hoeren:48, schreiben:48, sprechen:48 } } ] },
      mat:{
        wortschatz:['Unternehmen und Märkte','Vertrieb, Verkauf und Verhandlung','Personal und Führung','Kundenzufriedenheit und Beschwerden',
                    'Produktion und Prozesse','Marketing und Öffentlichkeitsarbeit','Arbeitsrecht und Arbeitszeit','Weiterbildung und Karriere'],
        grammatik:['Nominalstil (die Einführung von …, nach Abschluss der …)','Konnektoren: zwar … jedoch, sofern, zumal, wohingegen, insofern',
                   'Passiv und Passiversatz (lässt sich, ist zu prüfen, bedarf der …)','Partizipialattribute (die im Vorjahr eingeführte Regelung)',
                   'Nomen-Verb-Verbindungen (in Anspruch nehmen, zur Verfügung stellen, in Kraft treten)','Konjunktiv I in der Redewiedergabe'],
        redemittel:[
          ['Text: Einleitung','In vielen Unternehmen wird derzeit darüber diskutiert, ob … · Die Geschäftsleitung erwägt, …'],
          ['Text: abwägen','Für … spricht vor allem, dass … · Dem steht entgegen, dass … · Zwar …, jedoch …'],
          ['Text: Standpunkt','Alles in allem halte ich … für sinnvoll, sofern … · Ausschlaggebend ist für mich …'],
          ['Präsentation','Ich möchte Ihnen heute … vorstellen. · Damit komme ich zum zweiten Punkt. · Zusammenfassend lässt sich sagen …'],
          ['Diskussion','In meinem Herkunftsland ist es üblich, dass … · Da muss ich Ihnen widersprechen. · Das ist ein berechtigter Einwand, allerdings …'] ],
        bewertung:[
          ['Lesen (48) und Sprachbausteine (22)','Jede Leseaufgabe zwei Punkte, jede Lücke einen.'],
          ['Hören (48)','Teil 1 je ein Punkt, Teil 2 und 3 je zwei Punkte (eine Notiz kann auch einen Punkt bekommen).'],
          ['Schreiben (48)','Aufgabengerechtheit, Korrektheit, Repertoire, Kommunikative Gestaltung, je A 12, B 8, C 4, D 0.'],
          ['Sprechen (48)','Inhalt 16 (Präsentation 6, Anschlussfragen 4, Diskussion 6), Sprache 32 (Flüssigkeit, Repertoire, Richtigkeit, Aussprache je 8).'],
          ['Bestanden','Mindestens 128 von 214 und 60 Prozent schriftlich und mündlich.'] ],
        ablauf:[
          'Schriftlich: Lesen und Sprachbausteine 90 Minuten, Pause, Hören ca. 40, Schreiben 70.',
          'Beim Hören: Alle Texte nur einmal.',
          'Mündlich zu zweit, ca. 16 Minuten, vorher 20 Minuten Vorbereitung. Frei sprechen, nicht auswendig.'] },
      uebungstest:'https://shop.telc.net/media/catalog/product/file/2/0/20201225-5038-b00-010101_web_1.pdf' },

    { id:'buero', name:'Deutsch für Büro & Logistik', anbieter:'ohne Prüfung', niveau:'A2–B2',
      bild:'kunden', kurs:'buero', fach:true, ohnePruefung:true,
      fuer:'Telefon, E-Mail, Kundengespräch — für den Arbeitsalltag, nicht für ein Zertifikat.',
      module:[ {id:'telefon',n:'Am Telefon',m:'ca. 20'},
               {id:'mail',n:'E-Mail und Schriftverkehr',m:'ca. 20'},
               {id:'kunden',n:'Kundengespräch',m:'ca. 20'} ],
      hinweis:'Hier gibt es keine Prüfung und kein Zertifikat — die Minuten sind Übungszeit, '
             +'kein Prüfungstakt. Wenn du am Ende ein Papier brauchst, ist das Zertifikat B1 oder B2 '
             +'der passende Weg: die Bürolektionen zahlen direkt darauf ein.' }
  ];

  /* ---------- Welche Lektion gehört zu welchem Modul ----------
     Die 36 Lektionen aus kurse/ liegen schon fertig da. Hier steht,
     welche zu welchem Prüfungsteil gehört — sonst landet jeder Klick
     auf Lektion 1. */
  var LEKTIONEN = {
    goethetelc: {
      lesen:    [ [1,'Lesen — die Aufgabentypen und ihre Fallen'], [4,'Sprachbausteine — die Muster, die immer kommen'] ],
      hoeren:   [ [2,'Hören — was wirklich gefragt wird'] ],
      schreiben:[ [3,'Schreiben — der Brief, der Punkte holt'] ],
      sprechen: [ [5,'Sprechen — ein Thema präsentieren'], [6,'Sprechen — gemeinsam etwas planen'] ]
    },
    dtz: {
      hoeren:   [ [1,'Hören — Ansagen, Gespräche, Nachrichten'] ],
      lesen:    [ [2,'Lesen — Anzeigen, Formulare, Briefe'] ],
      schreiben:[ [3,'Schreiben — die halbformelle Nachricht'] ],
      sprechen: [ [4,'Teil 1 — über sich erzählen'], [5,'Teil 2 — ein Bild beschreiben'], [6,'Teil 3 — gemeinsam planen'] ]
    },
    telcmed: {
      anamnese: [ [1,'Teil 1 — das Anamnesegespräch'], [4,'Vom Laienwort zum Fachbegriff'], [5,'Das Aufklärungsgespräch'] ],
      doku:     [ [2,'Teil 2 — die schriftliche Dokumentation'] ],
      fall:     [ [3,'Teil 3 — das Arzt-Arzt-Gespräch'], [6,'Die komplette Prüfungssimulation'] ]
    },
    pflege: {
      hoeren:    [ [1,'Die Schichtübergabe'], [5,'Notfall im Dienst'] ],
      schreiben: [ [4,'Die Pflegedokumentation'] ],
      sprechen:  [ [2,'Die Körperpflege — mit dem Bewohner sprechen'], [3,'Angehörige informieren'], [6,'Konflikt im Team ansprechen'] ]
    },
    buero: {
      telefon: [ [1,'Am Telefon — professionell reagieren'], [5,'Termine koordinieren'] ],
      mail:    [ [2,'E-Mails, die man gern liest'], [6,'Der kurze Bericht'] ],
      kunden:  [ [3,'Im Meeting das Wort ergreifen'], [4,'Lieferung und Reklamation'] ]
    }
  };

  /* Zusätzliche Lektionen, die zur Prüfung passen, aber aus einem
     anderen Kurs kommen. */
  var ZUSATZ = {
    telcmed: { kurs:'medizin', name:'Deutsch für Mediziner', lektionen:[
      [1,'Die Anamnese — das Erstgespräch'], [2,'Die körperliche Untersuchung'],
      [3,'Aufklärung vor dem Eingriff'], [4,'Die Patientenvorstellung'],
      [5,'Telefonat mit der Kollegin'], [6,'Das schwierige Gespräch'] ] }
  };

  function pruefungVon(id){ for(var i=0;i<PRUEFUNGEN.length;i++) if(PRUEFUNGEN[i].id===id) return PRUEFUNGEN[i]; return null; }

  /* ---------- Meine Prüfung (aus dem Lernziel) ----------
     01.11.2026: Eine neue Schülerin hatte „telc B1" und ihr Datum im
     Lernziel eingetragen — und sah hier trotzdem alle neun Prüfungen
     und „Termin: noch nicht eingetragen". Jetzt liest der Bereich das
     Lernziel: ihre Prüfung steht oben, die anderen sind eingeklappt,
     und der Termin zeigt die echten Tage bis zur Prüfung.
     Lernziel-ID -> [Prüfungsseite hier, Name wie sie ihn gewählt hat] */
  var LZ_ZU_PF = {
    goethe_a1:['sd1','Goethe A1'], goethe_a2:['sd2','Goethe A2'], telc_a2:['sd2','telc A2'],
    telc_a2b1:['telca2b1','telc A2·B1'],
    goethe_b1:['b1','Goethe B1'], telc_b1:['telcb1','telc B1'], telc_b1_beruf:['telcb1beruf','telc B1+ Beruf'],
    goethe_b2:['b2','Goethe B2'], telc_b2:['telcb2','telc B2'], telc_b2_beruf:['telcb2beruf','telc B2+ Beruf'], telc_b1b2_beruf:['telcb1b2beruf','telc B1·B2 Beruf'], telc_b2c1_beruf:['telcb2c1beruf','telc B2·C1 Beruf'], telc_c1_beruf:['telcc1beruf','telc C1 Beruf'],
    telc_c1_allg:['telcc1allg','telc C1'],
    goethe_c1:['c1','Goethe C1'], telc_c1:['telcc1','telc C1 Hochschule'],
    telc_b1b2_pflege:['pflege','telc B1·B2 Pflege'], telc_b2c1_medizin:['telcmed','telc B2·C1 Medizin'],
    dtz:['dtz','DTZ']
  };
  /* In der App (app.html) gibt es kein lernziel.js — dort liegt das Lernziel in window.LZ_DATEN. */
  function lzDaten(){ return (window.LZ && window.LZ.data) || window.LZ_DATEN || null; }
  window.pruefLernzielLaden = function(){
    if(window.LZ && window.LZ.laden) return window.LZ.laden();
    var sb = window.sb; if(!sb || !sb.auth) return Promise.resolve(null);
    return sb.auth.getSession().then(function(r){
      var u = r && r.data && r.data.session && r.data.session.user; if(!u) return null;
      return sb.from('lernziel').select('*').eq('user_id', u.id).maybeSingle()
        .then(function(x){ window.LZ_DATEN = (x && x.data) || null; return window.LZ_DATEN; });
    }).catch(function(){ return null; });
  };
  function meinePruefung(){
    var d = lzDaten();
    if(!d || d.ziel!=='pruefung' || !d.pruefung) return null;
    var z = LZ_ZU_PF[d.pruefung]; if(!z) return null;
    var p = pruefungVon(z[0]); if(!p) return null;
    return { p:p, name:z[1], termin:d.termin||null };
  }
  function terminText(t){
    if(!t) return null;
    var d = new Date(t+'T12:00:00'); if(isNaN(d)) return null;
    var datum = new Intl.DateTimeFormat('de-DE',{ day:'numeric', month:'long', year:'numeric' }).format(d);
    var heute = new Date(); heute.setHours(12,0,0,0);
    var tage = Math.round((d - heute)/86400000);
    var rest = tage>1 ? 'noch '+tage+' Tage' + (tage>=14 ? ' (gut '+Math.floor(tage/7)+' Wochen)' : '')
             : tage===1 ? 'morgen' : tage===0 ? 'heute — viel Erfolg!' : 'vorbei';
    return { datum:datum, rest:rest, vorbei:tage<0 };
  }
  window.pruefTerminAendern=function(){
    window.LZ_ZURUECK='pruefung';
    if(window.LZ && window.LZ.starten) window.LZ.starten(true); else if(window.go) window.go('lernpfad');
  };
  var lzGeladen=false;
  function stilMeine(){
    if(document.getElementById('pf-mein-stil')) return;
    var st=document.createElement('style'); st.id='pf-mein-stil';
    st.textContent=[
      '.pf-mein{margin:0 0 8px}',
      '.pf-mein-info{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin:0 0 12px;font-size:14px;color:var(--m-muted,#6B7280)}',
      '.pf-mein-info b{color:var(--m-ink,#1A1A1A)}',
      '.pf-mein-info button{background:none;border:0;padding:0;color:#14708B;font-weight:700;font-size:14px;cursor:pointer;text-decoration:underline}',
      '.pf-andere{margin-top:26px;border-top:1px solid rgba(0,0,0,.08);padding-top:14px}',
      '.pf-andere>summary{cursor:pointer;font-weight:700;font-size:15px;padding:8px 0;list-style:none}',
      '.pf-andere>summary::-webkit-details-marker{display:none}',
      '.pf-andere>summary:before{content:"▸ ";color:#14708B}',
      '.pf-andere[open]>summary:before{content:"▾ "}',
      '.pf-mat-voll{display:grid;gap:14px}',
      '.pf-mat-k{background:#fff;border:1px solid #ECE6DA;border-radius:18px;padding:16px 18px;box-shadow:0 6px 18px rgba(20,40,60,.05)}',
      '.pf-mat-k h4{margin:0 0 10px;font-size:16px}',
      '.pf-mat-l{margin:0;padding-left:20px;line-height:1.6;font-size:14.5px}',
      '.pf-mat-p{display:grid;gap:8px}',
      '.pf-mat-p div{display:grid;gap:2px;padding:9px 12px;background:#F7F5EF;border-radius:11px}',
      '.pf-mat-p b{font-size:13.5px}', '.pf-mat-p span{font-size:14px;color:#3C4650;line-height:1.5}',
      '.pf-mat-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px}',
      '.pf-mat-tags span{background:#E9F6FA;color:#0E5E75;border-radius:999px;padding:6px 12px;font-size:13.5px;font-weight:600}',
      '.pf-mat-k .pf-mat-knoepfe{margin-top:10px}',
      '.pf-prog{margin-top:14px;padding:14px 16px;border-radius:16px;background:#fff;border:1px solid #ECE6DA}',
      '.pf-prog-k{display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px}',
      '.pf-prog-k span{color:#5B6672;font-size:14px}',
      '.pf-prog-bar{position:relative;height:12px;background:#EEF1F3;border-radius:99px;margin:10px 0 8px;overflow:visible}',
      '.pf-prog-bar i{display:block;height:100%;border-radius:99px;background:#E7B43A}',
      '.pf-prog.gut .pf-prog-bar i{background:#2E9E62}',
      '.pf-prog-bar em{position:absolute;top:-4px;width:2px;height:20px;background:#1F2A33}',
      '.pf-prog p{margin:0;font-size:14px}'
    ].join('\n');
    document.head.appendChild(st);
  }

  /* ---------- Fortschritt ----------
 — bis die Module echte Inhalte haben, zählt
     der Fortschritt der dahinterliegenden Lektionen. */
  /* Die Trainingsdateien sind unter 'A1'..'B2' abgelegt. Drei Pruefungen
     tragen aber einen Bereich als Niveau: DTZ 'A2–B1', Pflege 'B1–B2',
     telc Medizin 'B2–C1'. Fuer die fand lesenVorhanden('A2–B1') nichts —
     das komplette, fertige Training war fuer sie unerreichbar, obwohl
     LESEN_B1 und Co. geladen danebenlagen.
     Wir nehmen das obere Niveau (darauf zielt die Pruefung) und fallen
     auf das untere zurueck, wenn es das obere nicht gibt. */
  function trainingNiveau(p, modId){
    /* telc-Seiten haben eigene Trainings je Fertigkeit (p.training), z. B.
       { lesen:'telcB1' }. Was es noch nicht gibt, faellt aufs Niveau zurueck. */
    if (p && p.training && modId && p.training[modId]) return p.training[modId];
    var roh = String((p && p.niveau) || '').trim();
    if (!/[–-]/.test(roh)) return roh;
    var teile = roh.split(/[–-]/).map(function(x){ return x.trim(); });
    var oben = teile[teile.length - 1], unten = teile[0];
    var da = function(n){
      return (window.lesenVorhanden && window.lesenVorhanden(n))
          || (window.hoerenVorhanden && window.hoerenVorhanden(n))
          || (window.schreibenVorhanden && window.schreibenVorhanden(n))
          || (window.sprechenVorhanden && window.sprechenVorhanden(n));
    };
    if (da(oben)) return oben;
    if (da(unten)) return unten;
    return oben;
  }

  function modulProzent(p, mod){
    try{
      /* Wo es echte Aufgaben gibt, zaehlt das echte Ergebnis.
         Bisher ist das nur Lesen A1 — der Rest faellt auf den
         Fortschritt der dahinterliegenden Lektionen zurueck. */
      var nv = trainingNiveau(p, mod && mod.id);
      if(mod && mod.id==='lesen' && window.lesenVorhanden && window.lesenVorhanden(nv)){
        var lp = window.lesenProzent(nv);
        if(lp!=null) return lp;
      }
      if(mod && mod.id==='hoeren' && window.hoerenVorhanden && window.hoerenVorhanden(nv)){
        var hp = window.hoerenProzent(nv);
        if(hp!=null) return hp;
      }
      if(mod && mod.id==='schreiben' && window.schreibenVorhanden && window.schreibenVorhanden(nv)){
        var sp = window.schreibenProzent(nv);
        if(sp!=null) return sp;
      }
      /* Sprechen fehlte hier als Einziges — window.sprechenProzent gibt es
         laengst. Folge: Sprechen stand bei B1 und B2 ewig auf 0 %, und
         "Als Naechstes dran" bewarb es endlos mit "51 Aufgaben warten",
         auch wenn alle 51 schon gemacht waren. */
      if(mod && mod.id==='sprechen' && window.sprechenVorhanden && window.sprechenVorhanden(nv)){
        var gp = window.sprechenProzent(nv);
        if(gp!=null) return gp;
      }
      /* p.stufe haben nur A1 und A2. DTZ, C1, Medizin, Pflege und Buero
         tragen ihren Kurs in p.kurs — und genau unter diesem Schluessel
         speichert lektion.html den Fortschritt. Ohne den Rueckfall standen
         fuenf von neun Pruefungsseiten dauerhaft auf 0 %. */
      var kursSchluessel = p.stufe || p.kurs;
      if(kursSchluessel && window.kursStand){
        var st=window.kursStand(kursSchluessel);
        if(st) return st.prozent;
      }
    }catch(e){}
    return 0;
  }

  /* Gibt es fuer dieses Modul ein eigenes Training? */
  /* Wie viele Aufgaben stecken in so einem Trainingsdatensatz? */
  function aufgabenZahl(d){
    var n = 0; if(!d) return 0;
    (d.bloecke||[]).forEach(function(b){ n += (b.aufgaben||[]).length; });
    (d.teile||[]).forEach(function(t){
      (t.runden||[]).forEach(function(r){
        /* Beim Schreiben ist eine Runde entweder ein ganzes Formular
           oder eine Handvoll Mitteilungen — beides zaehlt hier mit. */
        n += r.aufgaben ? r.aufgaben.length : 1;
      });
    });
    (d.laeufe||[]).forEach(function(l){
      if(l.teile) l.teile.forEach(function(t){ n += (t.aufgaben||[]).length; });
      else n += 1;
    });
    return n;
  }

  function trainingVon(p, m){
    if(m.id==='lesen' && window.lesenVorhanden && window.lesenVorhanden(trainingNiveau(p, m.id))){
      return { klick:"lesenStart('"+E(trainingNiveau(p, m.id))+"')", knopf:'Lesen trainieren',
               anzahl:aufgabenZahl((window.lesenDaten && window.lesenDaten(trainingNiveau(p, m.id))) || window.LESEN_A1),
               was:'Vier Stufen: erst der Wortschatz, dann die Strategie, '
                 + 'dann die Aufgabentypen, zuletzt die ganze Prüfung mit Uhr.' };
    }
    if(m.id==='hoeren' && window.hoerenVorhanden && window.hoerenVorhanden(trainingNiveau(p, m.id))){
      return { klick:"hoerenStart('"+E(trainingNiveau(p, m.id))+"')", knopf:'Hören trainieren',
               anzahl:aufgabenZahl((window.hoerenDaten && window.hoerenDaten(trainingNiveau(p, m.id))) || window.HOEREN_A1),
               was:'Vier Stufen: erst Zahlen und Zeiten, dann die Signalwörter, '
                 + 'dann Gespräche, Durchsagen und Ansagen, zuletzt die ganze Prüfung.' };
    }
    if(m.id==='sprechen' && window.sprechenVorhanden && window.sprechenVorhanden(trainingNiveau(p, m.id))){
      return { klick:"sprechenStart('"+E(trainingNiveau(p, m.id))+"')", knopf:'Sprechen trainieren',
               anzahl:aufgabenZahl((window.sprechenDaten && window.sprechenDaten(trainingNiveau(p, m.id))) || window.SPRECHEN_A1),
               was:'Vier Stufen: erst die Sätze über dich, dann Fragen und Bitten bauen, '
                 + 'dann die echten Prüfungskarten mit Aufnahme und Musterlösung, '
                 + 'zuletzt alle drei Teile mit Uhr.' };
    }
    if(m.id==='schreiben' && window.schreibenVorhanden && window.schreibenVorhanden(trainingNiveau(p, m.id))){
      return { klick:"schreibenStart('"+E(trainingNiveau(p, m.id))+"')", knopf:'Schreiben trainieren',
               /* Stand fest auf SCHREIBEN_A1: A2, B1 und B2 zeigten alle
                  "51 Aufgaben" statt 54, 60 und 60. */
               anzahl:aufgabenZahl((window.schreibenDaten && window.schreibenDaten(trainingNiveau(p, m.id))) || window.SCHREIBEN_A1),
               was:'Vier Stufen: erst die Wörter im Formular, dann die Bausteine einer '
                 + 'Mitteilung, dann echte Formulare und Nachrichten mit Korrektur, '
                 + 'zuletzt beides zusammen mit Uhr.' };
    }
    return null;
  }

  /* ---------- Ebene 1: Welche Prüfung? ---------- */
  window.renderPruefungen=function(){
    var v=document.getElementById('v-pruefung'); if(!v) return;
    /* Lernziel noch nicht da (frisch eingeloggt)? Einmal nachladen, dann neu zeichnen. */
    if(!lzGeladen && window.LZ && !window.LZ.data && window.LZ.laden){
      lzGeladen=true;
      window.LZ.laden().then(function(d){ if(d && document.getElementById('v-pruefung')===v && v.querySelector('.pf-kopf')) window.renderPruefungen(); });
    }
    var mein = meinePruefung();
    var gruppen = function(ohne){
      var nicht = function(p){ return !ohne || p.id!==ohne; };
      return '<div class="pf-gruppe"><span class="pf-gr-t">Die Sprachprüfungen</span></div>'
        + '<div class="pf-liste">' + PRUEFUNGEN.filter(function(p){ return !p.fach && nicht(p); }).map(kachel).join('') + '</div>'
        + '<div class="pf-gruppe"><span class="pf-gr-t">Für deinen Beruf</span></div>'
        + '<div class="pf-liste">' + PRUEFUNGEN.filter(function(p){ return p.fach && nicht(p); }).map(kachel).join('') + '</div>';
    };
    var unten;
    if(mein){
      stilMeine();
      var tt = terminText(mein.termin);
      unten = '<div class="pf-gruppe"><span class="pf-gr-t">Deine Prüfung</span></div>'
        + '<div class="pf-mein-info"><span>Du hast <b>'+E(mein.name)+'</b> als Ziel gewählt'
        +   (tt && !tt.vorbei ? ' — am <b>'+E(tt.datum)+'</b>, '+E(tt.rest) : '')+'.</span>'
        +   '<button type="button" onclick="pruefTerminAendern()">'+(tt?'Ändern':'Termin eintragen')+'</button></div>'
        + '<div class="pf-liste pf-mein">' + kachel(mein.p) + '</div>'
        + '<details class="pf-andere"><summary>Andere Prüfungen ansehen</summary>' + gruppen(mein.p.id) + '</details>';
    } else {
      unten = gruppen(null);
    }
    v.innerHTML =
        '<div class="pf-kopf">'
      +   '<span class="pf-kicker">Prüfungsvorbereitung</span>'
      +   '<h1>Keine Angst mehr vor der Prüfung.</h1>'
      +   '<p>Du weißt vorher, was drankommt, wie lange du hast und wie bewertet wird. '
      +   'Und du hast es geübt, bevor es zählt.</p>'
      +   '<a class="pf-test" href="niveau-test-club.html" target="_blank" rel="noopener">'
      +     '<span class="pf-test-ic">🎯</span>'
      +     '<span class="pf-test-tx"><b>Du weißt nicht, welche Prüfung?</b>'
      +     '<span>Der Einstufungstest sagt es dir in 15 Minuten — 112 Aufgaben, mit Auswertung.</span></span>'
      +     '<span class="pf-test-go">Test starten →</span>'
      +   '</a>'
      + '</div>'
      + unten;
    try{ window.scrollTo(0,0); }catch(e){}
  };

  function lektionZahl(p){
    var n=0, m=LEKTIONEN[p.kurs]||{};
    for(var k in m) if(m.hasOwnProperty(k)) n+=m[k].length;
    if(ZUSATZ[p.id]) n+=ZUSATZ[p.id].lektionen.length;
    if(!n && p.stufe && window.kursStand){ try{ var st=window.kursStand(p.stufe); if(st) n=st.anzahl; }catch(e){} }
    return n ? (n+' Lektionen') : 'im Aufbau';
  }

  function kachel(p){
    /* Die Farbwelt steigt mit dem Niveau — dieselbe wie auf der Prüfungsseite. */
    return '<button type="button" class="pf-k pf-w-'+farbwelt(p)+'" onclick="pruefungOeffnen(\'' + p.id + '\')">'
      + '<span class="pf-k-bild"><img src="bilder/thema/'+p.bild+'-s.jpg" alt="" loading="lazy" onerror="this.remove()">'
      +   '<span class="pf-k-niv">'+E(p.niveau)+'</span></span>'
      + '<span class="pf-k-tx">'
      +   '<span class="pf-k-n">'+E(p.name)+'</span>'
      +   '<span class="pf-k-a">'+E(p.anbieter)+'</span>'
      +   '<span class="pf-k-f">'+E(p.fuer)+'</span>'
      + '</span>'
      + '<span class="pf-k-r"><span class="pf-k-anz">'+lektionZahl(p)+'</span>'
      +   '<span class="pf-k-go">Öffnen →</span></span>'
      + '</button>';
  }

  /* ============================================================
     Ebene 2 — Die Prüfungsseite

     Farbiger Kopf, links die Schrittleiste, rechts der offene Bereich.
     Die Farbwelt richtet sich nach dem Niveau: A1 und A2 türkis,
     B1 gold, B2 rot, C1 violett. Man sieht am Kopf, wie weit oben
     man gerade ist.
     ============================================================ */

  var NIVEAUFARBE = {
    'A1':'a', 'A2':'a', 'A2–B1':'b1', 'B1':'b1', 'A2–B2':'b1',
    'B1–B2':'b2', 'B2':'b2', 'B2–C1':'c1', 'C1':'c1'
  };
  function farbwelt(p){ return NIVEAUFARBE[p.niveau] || 'a'; }

  /* Der aufmunternde Halbsatz hinter dem Namen — bekommt den Marker */
  var MUTMACHER = {
    'a':'du schaffst das', 'b1':'Schritt für Schritt',
    'b2':'du bist fast da', 'c1':'die Königsklasse'
  };

  var MODUL_STIL = {
    hoeren:{z:'🎧',f:'turq'}, lesen:{z:'📖',f:'gold'},
    schreiben:{z:'✍️',f:'rot'}, sprechen:{z:'💬',f:'gruen'},
    anamnese:{z:'🩺',f:'turq'}, doku:{z:'📋',f:'gold'}, fall:{z:'🧑‍⚕️',f:'rot'},
    uebergabe:{z:'🔁',f:'turq'}, angehoerige:{z:'👪',f:'rot'},
    telefon:{z:'📞',f:'turq'}, mail:{z:'✉️',f:'gold'}, kunden:{z:'🤝',f:'gruen'}
  };
  /* Ein Satz, der sagt, was in diesem Teil wirklich passiert */
  var MODUL_TEXT = {
    hoeren:'Ansagen, Gespräche, Durchsagen — du hörst jeden Text zweimal.',
    lesen:'Anzeigen, Schilder, Texte — verstehen, was wirklich gemeint ist.',
    schreiben:'Punkte gibt es für Vollständigkeit, nicht für schöne Sätze.',
    sprechen:'Sich vorstellen, fragen, bitten — meist in einer kleinen Gruppe.',
    anamnese:'Das Erstgespräch mit dem Patienten, in Alltagssprache.',
    doku:'Das Gehörte schriftlich festhalten — knapp und korrekt.',
    fall:'Den Fall der Kollegin vorstellen, in Fachsprache.',
    uebergabe:'Die Schichtübergabe: knapp, vollständig, in der richtigen Reihenfolge.',
    angehoerige:'Mit Bewohnern und Angehörigen sprechen — freundlich und klar.',
    telefon:'Anrufe annehmen, weiterleiten, Notizen machen.',
    mail:'E-Mails, die man gern liest — Anrede, Anliegen, Schluss.',
    kunden:'Das Kundengespräch: zuhören, nachfragen, eine Lösung anbieten.'
  };

  var BEREICHE = [
    { id:'module',  z:'🧩', f:'turq',  t:'Die Prüfungsteile',
      k:'Jeden Teil einzeln üben — mit den Lektionen, die dazugehören.' },
    { id:'muster',  z:'📝', f:'rot',   t:'Musterprüfung',
      k:'Ein kompletter Durchgang, so wie am Prüfungstag.' },
    { id:'material',z:'📚', f:'gold',  t:'Wortschatz & Grammatik',
      k:'Nicht irgendein Wortschatz — der, der in dieser Prüfung vorkommt.' },
    { id:'video',   z:'🎬', f:'lila',  t:'Videokurs',
      k:'Erklärungen zum Anschauen, direkt beim passenden Teil.' },
    { id:'bereit',  z:'🎯', f:'gruen', t:'Bist du bereit?',
      k:'Eine ehrliche Einschätzung, bevor du dich anmeldest.' },
    /* Seit 2026 laufen Hoeren, Lesen und Schreiben am Rechner.
       Getippt wird auf QWERTZ, ohne Rechtschreibpruefung. Das ist
       eine eigene Fertigkeit: man kann B2 koennen und trotzdem an
       „Staatsangehoerigkeit" scheitern, weil das ö nicht kommt. */
    { id:'bildschirm', z:'⌨️', f:'lila', t:'Am Bildschirm',
      k:'Die Prüfung läuft jetzt am Rechner. Tippen, wie sie es verlangt.' }
  ];

  /* Ohne Prüfung ergeben Musterprüfung und Bildschirmtraining keinen Sinn —
     und „Prüfungsteile" heißen die drei Bereiche dann auch nicht. */
  var OHNE_TITEL = {
    module:  ['Die drei Bereiche','Jeden Bereich einzeln üben — mit den Lektionen, die dazugehören.'],
    material:['Wortschatz & Grammatik','Der Wortschatz, der im Büroalltag wirklich vorkommt.'],
    bereit:  ['Wo stehst du?','Eine ehrliche Einschätzung, Bereich für Bereich.']
  };
  function bereicheVon(p){
    if(p.mat) return BEREICHE.map(function(b){
      return b.id==='material' ? { id:b.id, z:'🧭', f:b.f, t:'Alles für die Prüfung',
        k:'Ablauf, Bewertung, Themen, Grammatik und die wichtigsten Sätze.' } : b; });
    if(!p.ohnePruefung) return BEREICHE;
    var raus = { muster:1, bildschirm:1 };
    return BEREICHE.filter(function(b){ return !raus[b.id]; }).map(function(b){
      var t = OHNE_TITEL[b.id];
      return t ? { id:b.id, z:b.z, f:b.f, t:t[0], k:t[1] } : b;
    });
  }

  function gesamtProzent(p){
    var g=0; p.module.forEach(function(m){ g+=modulProzent(p,m); });
    return Math.round(g/Math.max(1,p.module.length));
  }
  function gesamtDauer(p){
    /* Wo die Vorbereitungszeit zur Prüfungszeit zählt, ergibt die Summe
       der Teile nicht die Zeit, die man wirklich dort sitzt. */
    if(p.dauer) return p.dauer;
    var min=0, ca=false;
    p.module.forEach(function(m){
      var z=String(m.m).match(/\d+/); if(z) min+=parseInt(z[0],10);
      if(String(m.m).indexOf('ca.')>=0) ca=true;
    });
    if(!min) return '—';
    var t = min>=60 ? (Math.floor(min/60)+' Std'+(min%60?' '+(min%60)+' Min':'')) : (min+' Min');
    return (ca?'ca. ':'')+t;
  }
  function lektionZahlP(p){
    var n=0, L=LEKTIONEN[p.kurs]||{};
    for(var k in L) n+=L[k].length;
    if(!n && p.stufe) return '14 im '+p.stufe+'-Kurs';
    return n ? (n+' Lektionen') : '—';
  }
  function bereichStand(p, b){
    if(b.id==='module'){
      var pr=gesamtProzent(p);
      return { text:p.module.length+(p.ohnePruefung?' Bereiche · ':' Teile · ')+pr+' %', bar:pr };
    }
    if(b.id==='muster'){
      var da = (p.muster && window.PRUEFUNG && window.PRUEFUNG[p.muster]) || p.uebungstest;
      return { text: da ? 'bereit zum Ansehen' : 'in Vorbereitung', leer:!da };
    }
    /* material war der einzige Bereich ohne leer-Flag — die Schrittleiste
       zeigte ihn deshalb als erledigt, obwohl dort fuer alle neun
       Pruefungen derselbe Platzhaltersatz steht. */
    if(b.id==='material') return p.mat ? { text:'Ablauf, Bewertung, Themen', leer:false } : { text:'Wortschatz & Grammatik', leer:true };
    if(b.id==='video')    return { text:'in Vorbereitung', leer:true };
    /* Das Bildschirmtraining ist fertig und zaehlt mit — es fiel nur in
       den Standardzweig und blieb auch nach 100 % grau. */
    if(b.id==='bildschirm' && window.bildschirmProzent){
      var bp = window.bildschirmProzent();
      if(bp!=null) return { text: bp>0 ? bp+' % geschafft' : 'bereit zum Üben', bar:bp, leer:false };
    }
    return { text:'noch kein Ergebnis', leer:true };
  }

  window.pruefungOeffnen=function(id, bereich){
    var p=pruefungVon(id); if(!p) return;
    stilMeine();
    var v=document.getElementById('v-pruefung'); if(!v) return;
    S('pruefLetzte', id);
    var liste = bereicheVon(p);
    var offen = bereich || 'module', daIst = false;
    for(var bi=0;bi<liste.length;bi++) if(liste[bi].id===offen) daIst = true;
    if(!daIst) offen = 'module';
    var welt = farbwelt(p), pr = gesamtProzent(p);

    var schritte = liste.map(function(b){
      var st=bereichStand(p,b);
      return '<button class="pf-st pf-f-'+b.f+(b.id===offen?' an':'')+(st.leer?' leer':'')+'" '
        + 'onclick="pruefungOeffnen(\'' + E(p.id) + '\',\'' + b.id + '\')">'
        + '<span class="pf-st-z">'+b.z+'</span>'
        + '<span class="pf-st-t"><b>'+E(b.t)+'</b><span>'+E(st.text)+'</span>'
        +   (st.bar!=null ? '<span class="pf-st-bar"><i style="width:'+Math.max(3,st.bar)+'%"></i></span>' : '')
        + '</span></button>';
    }).join('');

    var b=null;
    for(var i=0;i<liste.length;i++) if(liste[i].id===offen) b=liste[i];

    v.innerHTML =
        '<div class="pf-hero pf-n-'+welt+'">'
      +   '<span class="pf-punkte"></span>'
      +   '<span class="pf-blob pf-blob1"></span><span class="pf-blob pf-blob2"></span>'
      +   '<span class="pf-blob pf-blob3"></span>'
      +   '<img class="pf-hero-foto" src="bilder/thema/'+E(p.bild)+'.jpg" alt="" loading="lazy" onerror="this.remove()">'
      +   '<div class="pf-hero-in">'
      +     '<div class="pf-krumen"><button onclick="renderPruefungen()">Prüfungsvorbereitung</button>'
      +       '<span>›</span><b>'+E(p.name)+'</b></div>'
      +     '<div class="pf-hero-oben"><div>'
      +       '<div class="pf-pillen">'
      +         (function(){ var mp=meinePruefung(); return (mp && mp.p.id===p.id) ? '<span class="pf-p pf-p-rot">⭐ Deine Prüfung</span>' : ''; })()
      +         '<span class="pf-p pf-p-gold">'+E(p.niveau)+'</span>'
      +         '<span class="pf-p pf-p-weiss">'+E(p.anbieter)+'</span>'
      +         (pr>0 ? '<span class="pf-p pf-p-rot">🔥 '+pr+' % geschafft</span>' : '')
      +       '</div>'
      +       '<h1>'+E(p.name)+' — <span class="pf-mark">'+E(MUTMACHER[welt]||'du schaffst das')+'</span></h1>'
      +       '<p class="pf-lead">'+E(p.fuer)+'</p>'
      +     '</div>'
      +     '<div class="pf-ring" style="--p:'+pr+'"><i><b>'+pr+'%</b><span>vorbereitet</span></i></div>'
      +     '</div>'
      +     '<div class="pf-hfak">'
      +       '<div class="pf-hf"><span>Niveau</span><b>'+E(p.niveau)+'</b></div>'
      +       '<div class="pf-hf"><span>'+(p.ohnePruefung?'Bereiche':(p.module.length===4?'Module':'Teile'))+'</span><b>'+p.module.length+'</b></div>'
      +       '<div class="pf-hf"><span>'+(p.ohnePruefung?'Übungszeit':'Prüfungsdauer')+'</span><b>'+E(gesamtDauer(p))+'</b></div>'
      +       '<div class="pf-hf"><span>Abschluss</span><b>'
      +         (p.ohnePruefung?'ohne Zertifikat':(p.modular?'einzeln möglich':'ein Termin'))+'</b></div>'
      +       '<div class="pf-hf"><span>Lektionen</span><b>'+E(lektionZahlP(p))+'</b></div>'
      +     '</div>'
      +   '</div>'
      + '</div>'
      + '<div class="pf-body">'
      +   '<nav class="pf-rail"><h3>Deine Vorbereitung</h3>'
      +     '<div class="pf-rail-l">'+schritte+'</div>'
      +     (p.ohnePruefung ? '' : terminKarte(p))
      +   '</nav>'
      +   '<div class="pf-inhalt">'
      +     '<div class="pf-kopfzeile"><h2>'+E(b?b.t:'')+'</h2><p>'+E(b?b.k:'')+'</p></div>'
      +     naechsterSchritt(p, offen)
      +     bereichInhalt(p, offen)
      +   '</div>'
      + '</div>';
    try{ window.scrollTo(0,0); }catch(e){}
  };

  /* Termin-Karte links: echtes Datum, wenn diese Seite die eigene Prüfung ist */
  function terminKarte(p){
    var mein = meinePruefung();
    var tt = (mein && mein.p.id===p.id) ? terminText(mein.termin) : null;
    if(tt && !tt.vorbei){
      return '<div class="pf-termin"><span>⏳ Deine Prüfung · '+E(mein.name)+'</span><b>'+E(tt.datum)+'</b>'
        + '<em>'+E(tt.rest.charAt(0).toUpperCase()+tt.rest.slice(1))+'</em>'
        + '<button onclick="pruefTerminAendern()">Termin ändern</button></div>';
    }
    return '<div class="pf-termin"><span>⏳ Dein Termin</span><b>Noch nicht eingetragen</b>'
      + '<em>Trag ihn ein — dann siehst du hier, wie viele Tage dir noch bleiben.</em>'
      + '<button onclick="pruefTerminAendern()">Termin eintragen</button></div>';
  }

  /* Die goldene Zeile: was jetzt dran ist */
  function naechsterSchritt(p, bid){
    if(bid!=='module') return '';
    /* Solange das Lesetraining nicht durch ist, ist es der naechste Schritt —
       es ist das Einzige hier, was schon echte Pruefungsaufgaben hat. */
    for(var t=0;t<p.module.length;t++){
      var tr0 = trainingVon(p, p.module[t]);
      if(tr0){
        var lp0 = modulProzent(p, p.module[t]);
        if(lp0!=null && lp0 < 100){
          var z0 = (MODUL_STIL[p.module[t].id]||{}).z || '👉';
          return '<div class="pf-jetzt"><span class="pf-jetzt-z">'+z0+'</span>'
            + '<div class="pf-jetzt-t"><span>Als Nächstes dran</span>'
            +   '<b>'+E(tr0.knopf)+'</b>'
            +   '<em>'+(lp0>0 ? E(p.module[t].n)+': '+lp0+' % geschafft — weiter geht\'s' : tr0.anzahl+' echte Prüfungsaufgaben warten')+'</em></div>'
            + '<button class="pf-jetzt-b" onclick="'+tr0.klick+'">Los geht\'s →</button></div>';
        }
      }
    }
    var L=LEKTIONEN[p.kurs]||{}, erste=null;
    for(var i=0;i<p.module.length && !erste;i++){
      var l=L[p.module[i].id];
      if(l && l.length) erste={ kurs:p.kurs, nr:l[0][0], t:l[0][1], modul:p.module[i].n };
    }
    if(!erste && p.stufe) erste={ stufe:p.stufe, t:'Lektion 1 — der Anfang', modul:p.module[0].n };
    if(!erste) return '';
    var klick = erste.kurs ? 'pruefLektion(\''+E(erste.kurs)+'\','+erste.nr+')'
                           : 'kursUebersicht(\''+E(erste.stufe)+'\')';
    return '<div class="pf-jetzt"><span class="pf-jetzt-z">👋</span>'
      + '<div class="pf-jetzt-t"><span>Als Nächstes dran</span><b>'+E(erste.t)+'</b>'
      +   '<em>zahlt auf '+E(erste.modul)+' ein</em></div>'
      + '<button class="pf-jetzt-b" onclick="'+klick+'">Los geht\'s →</button></div>';
  }

  function bereichInhalt(p, id){
    if(id==='module')   return moduleBlock(p);
    if(id==='muster')   return musterBlock(p);
    if(id==='material') return materialBlock(p);
    if(id==='video')    return videoBlock(p);
    if(id==='bereit')   return bereitBlock(p);
    if(id==='bildschirm') return (window.bildschirmBlock ? window.bildschirmBlock(p) : '');
    return '';
  }

  /* 1 — Die Prüfungsteile als farbige Karten */
  function moduleBlock(p){
    var karten = p.module.map(function(m){
      var pr  = modulProzent(p,m);
      var lek = (LEKTIONEN[p.kurs]||{})[m.id] || [];
      var st  = MODUL_STIL[m.id] || { z:'📝', f:'turq' };
      var txt = m.t || MODUL_TEXT[m.id] || '';
      var inhalt;

      var tr = trainingVon(p, m);
      if(tr){
        inhalt = '<div class="pf-m-tr"><p>'+E(tr.was)+'</p>'
          + '<button class="pf-m-tb" onclick="'+tr.klick+'">'+E(tr.knopf)+' →</button>'
          + '<span class="pf-m-tn">'+tr.anzahl+' Aufgaben</span></div>';
        if(lek.length){
          inhalt += '<div class="pf-m-lek">' + lek.map(function(l){
            return '<button class="pf-m-l" onclick="pruefLektion(\''+E(p.kurs)+'\','+l[0]+')">'
              + '<i>'+l[0]+'</i>'+E(l[1])+'<span>→</span></button>';
          }).join('') + '</div>';
        } else if(p.stufe){
          /* Der Kurs bleibt erreichbar — das Training ersetzt ihn nicht, es kommt dazu. */
          inhalt += '<button class="pf-m-nb" onclick="kursUebersicht(\''+E(p.stufe)+'\')">'
            + 'oder im '+E(p.stufe)+'-Kurs weiterlernen →</button>';
        }
      } else if(lek.length){
        inhalt = '<div class="pf-m-lek">' + lek.map(function(l){
          return '<button class="pf-m-l" onclick="pruefLektion(\''+E(p.kurs)+'\','+l[0]+')">'
            + '<i>'+l[0]+'</i>'+E(l[1])+'<span>→</span></button>';
        }).join('') + '</div>';
      } else if(p.stufe){
        inhalt = '<button class="pf-m-b" onclick="kursUebersicht(\''+E(p.stufe)+'\')">Zum '
          + E(p.stufe)+'-Kurs →</button>';
      } else {
        inhalt = '<span class="pf-m-bald">Eigene Lektionen kommen noch</span>';
      }

      return '<div class="pf-m pf-f-'+st.f+(tr?' hat':'')+'">'
        + (tr ? '<span class="pf-m-neu">neu · zum Üben bereit</span>' : '')
        + '<div class="pf-m-kopf"><span class="pf-m-z">'+st.z+'</span><b>'+E(m.n)+'</b>'
        +   '<span class="pf-m-min">'+E(m.m)+' Min</span></div>'
        + (txt ? '<p>'+E(txt)+'</p>' : '')
        + inhalt
        + '<div class="pf-m-f"><span class="pf-m-bar"><i style="width:'+Math.max(3,pr)+'%"></i></span>'
        +   '<span class="pf-m-pz">'+pr+' %</span></div>'
        + '</div>';
    }).join('');

    var hinweis = p.modular
      ? '<p class="pf-hinw">Diese Prüfung ist modular: Du kannst die Teile einzeln ablegen '
        + 'und einzeln wiederholen.</p>' : '';
    /* hinweis und punkte standen bisher in der Tabelle, wurden aber nirgends
       gezeigt — die Punkteverteilung des DTZ zum Beispiel war geschrieben
       und unsichtbar. Genau das will jemand wissen, der sich vorbereitet. */
    if(p.hinweis) hinweis += '<p class="pf-hinw">'+E(p.hinweis)+'</p>';
    if(p.punkte)  hinweis += '<p class="pf-hinw">'+E(p.punkte)+'</p>';
    if(p.telc){
      var NAMEN = { lesen:'Lesen und Sprachbausteine', hoeren:'Hören', schreiben:'Schreiben', sprechen:'Sprechen' };
      var echt = [], noch = [];
      p.module.forEach(function(m){ ((p.training && p.training[m.id]) ? echt : noch).push(NAMEN[m.id] || m.n); });
      var und = function(l){ return l.length>1 ? l.slice(0,-1).join(', ')+' und '+l[l.length-1] : l.join(''); };
      hinweis += '<p class="pf-hinw pf-telc-hinw">ℹ️ '
        + (echt.length ? und(echt)+' übst du hier im echten telc-Format. ' : '')
        + (noch.length ? 'Die Trainings für '+und(noch)+' sind '+(echt.length?'noch ':'')+'nach dem Goethe-Format gebaut — '
          + 'sie üben dasselbe Niveau, aber die Aufgaben sehen bei telc anders aus. Die telc-Versionen bauen wir gerade. ' : '')
        + (p.uebungstest ? 'Den offiziellen telc-Übungstest findest du unter „Musterprüfung".' : '') + '</p>';
    }
    var zu = ZUSATZ[p.id] ? zusatzBlock(ZUSATZ[p.id]) : '';
    return hinweis + '<div class="pf-mods">'+karten+'</div>' + zu;
  }

  function zusatzBlock(z){
    return '<div class="pf-zusatz">'
      + '<b>Dazu passt: '+E(z.name)+'</b>'
      + '<span>Sechs Lektionen Fachsprache, die auf dieselbe Prüfung einzahlen.</span>'
      + '<div class="pf-zusatz-l">' + z.lektionen.map(function(l){
          return '<button class="pf-lek" onclick="pruefLektion(\''+z.kurs+'\','+l[0]+')">'
            + '<span class="pf-lek-nr">'+l[0]+'</span>'
            + '<span class="pf-lek-t">'+E(l[1])+'</span>'
            + '<span class="pf-lek-go">→</span></button>';
        }).join('') + '</div></div>';
  }

  window.pruefLektion=function(kurs, nr){
    try{ location.href='lektion.html?k='+encodeURIComponent(kurs)+'&l='+nr; }catch(e){}
  };

  window.pruefLektionen=function(kursId){
    try{ location.href='lektion.html?k='+encodeURIComponent(kursId)+'&l=1'; }catch(e){}
  };

  /* 2 — Musterprüfung */
  function musterBlock(p){
    var inhalt;
    if(p.muster && window.PRUEFUNG && window.PRUEFUNG[p.muster]){
      var m=window.PRUEFUNG[p.muster];
      var teile = m.teile.map(function(t){
        var n=(t.aufgaben||[]).length;
        return '<span class="pf-teil"><b>'+E(t.name||t.art)+'</b><span>'+n+' Aufgaben</span></span>';
      }).join('');
      inhalt='<div class="pf-muster">'
        +'<div class="pf-muster-tx"><b>'+E(m.titel)+'</b>'
        +'<span>'+m.minuten+' Minuten · '
        + m.teile.reduce(function(a,t){ return a+(t.aufgaben||[]).length; },0)+' Aufgaben</span>'
        +'<div class="pf-teile">'+teile+'</div>'
        +'<span class="pf-hinw2">Schreiben und Sprechen fehlen hier noch, ebenso die Uhr und die '
        +'Punktebewertung. Das ist Schritt 4.</span></div>'
        +'<button class="pf-b1" onclick="pruefMusterStarten(\''+p.muster+'\')">Aufgaben ansehen →</button>'
        +'</div>';
    } else {
      inhalt='<div class="pf-leer">Für diese Prüfung gibt es noch keine Musterprüfung. '
        +'Vorhanden sind bisher A2, B1, B2 und C1.</div>';
    }
    if(p.uebungstest){
      inhalt = '<div class="pf-muster"><div class="pf-muster-tx"><b>Der offizielle Übungstest von telc</b>'
        + '<span>Eine komplette Prüfung im echten telc-Format, kostenlos als PDF. '
        + 'Druck ihn aus und mach ihn einmal mit Uhr, wie am Prüfungstag.</span></div>'
        + '<a class="pf-b1" href="'+E(p.uebungstest)+'" target="_blank" rel="noopener">Übungstest öffnen →</a></div>'
        + inhalt;
    }
    return block('2', 'Musterprüfung', inhalt, 'pf-must');
  }

  window.pruefMusterStarten=function(k){
    try{ if(window.toast) toast('Die Musterprüfung wird in Schritt 4 eingebaut — die Aufgaben liegen schon bereit ('+k+').'); }catch(e){}
  };

  /* 3 — Wortschatz und Grammatik */
  function materialBlock(p){
    if(p.mat){
      var M = p.mat, liste = function(l){ return '<ul class="pf-mat-l">'+l.map(function(x){ return '<li>'+E(x)+'</li>'; }).join('')+'</ul>'; };
      var paare = function(l){ return '<div class="pf-mat-p">'+l.map(function(x){
          return '<div><b>'+E(x[0])+'</b><span>'+E(x[1])+'</span></div>'; }).join('')+'</div>'; };
      var inh = '<div class="pf-mat pf-mat-voll">'
        + '<div class="pf-mat-k"><h4>📋 So läuft der Prüfungstag</h4>'+liste(M.ablauf)+'</div>'
        + '<div class="pf-mat-k"><h4>⚖️ So wird bewertet</h4>'+paare(M.bewertung)+'</div>'
        + '<div class="pf-mat-k"><h4>🗂️ Typische Themen auf B1</h4><div class="pf-mat-tags">'
        +   M.wortschatz.map(function(w){ return '<span>'+E(w)+'</span>'; }).join('')+'</div>'
        +   '<div class="pf-mat-knoepfe"><button class="pf-b2 pf-b-s" onclick="go(\'vokabeln\')">Wortschatz üben →</button></div></div>'
        + '<div class="pf-mat-k"><h4>🧩 Grammatik, die in den Sprachbausteinen oft drankommt</h4>'+liste(M.grammatik)
        +   '<div class="pf-mat-knoepfe"><button class="pf-b2 pf-b-s" onclick="go(\'lernen\')">Grammatik üben →</button></div></div>'
        + '<div class="pf-mat-k"><h4>💬 Sätze, die du sicher können solltest</h4>'+paare(M.redemittel)+'</div>'
        + '</div>';
      return block('3', 'Alles für diese Prüfung', inh, 'pf-mat-b');
    }
    var inhalt='<div class="pf-mat">'
      +'<p>Die vorhandenen Grammatik- und Wortschatzseiten werden hier eingehängt: '
      +'17 Grammatikkapitel, 34 Wortschatzseiten, 8 Aussprachekapitel.</p>'
      +'<div class="pf-mat-knoepfe">'
      +'<button class="pf-b2 pf-b-s" onclick="go(\'lernen\')">Zum Lernbereich →</button>'
      +'<button class="pf-b2 pf-b-s" onclick="go(\'vokabeln\')">Vokabeltrainer →</button>'
      +'</div></div>';
    return block('3', 'Wortschatz & Grammatik für diese Prüfung', inhalt, 'pf-mat-b');
  }

  /* 4 — Videokurs */
  function videoBlock(p){
    var inhalt='<div class="pf-video">'
      +'<div class="pf-video-platz"><span>▶</span></div>'
      +'<div class="pf-video-tx"><b>Deine Videos kommen hierher</b>'
      +'<span>Ein Video pro Thema, direkt im Modul, zu dem es gehört — nicht in einer eigenen '
      +'Videothek. Wer beim Schreiben hängt, findet das Schreiben-Video im Schreiben-Modul.</span></div>'
      +'</div>';
    return block('4', 'Videokurs', inhalt, 'pf-vid');
  }

  /* 5 — Bist du bereit? */
  /* telc: Punkteprognose aus den eigenen Trainingsergebnissen. Ehrlich als
     Schätzung beschriftet — sie rechnet die Prozent je Fertigkeit auf die
     Punkte der echten Prüfung hoch. */
  /* telc A2·B1: je Fertigkeit 60 Punkte, Ergebnis B1, A2 oder noch nicht. */
  function prognoseA2B1(p){
    var NAM = { lesen:'Lesen', hoeren:'Hören', schreiben:'Schreiben', sprechen:'Sprechen' };
    var pkt = p.module.map(function(m){ return { n:NAM[m.id]||m.n, p:Math.round(modulProzent(p,m)*0.6) }; });
    var sum = pkt.reduce(function(a,x){ return a+x.p; },0);
    var drei = function(g){ return pkt.filter(function(x){ return x.p>=g; }).length>=3; };
    var alle = function(g){ return pkt.every(function(x){ return x.p>=g; }); };
    var stufe = (sum>=168 && drei(42) && alle(24)) ? 'B1' : ((sum>=96 && drei(24) && alle(6)) ? 'A2' : null);
    var zeilen = pkt.map(function(x){
      return '<div class="pf-prog '+(x.p>=42?'gut':'knapp')+'"><div class="pf-prog-k"><b>'+E(x.n)+'</b><span>'+x.p+' von 60 · B1 ab 42</span></div>'
        + '<div class="pf-prog-bar"><i style="width:'+Math.max(2,Math.round(x.p/60*100))+'%"></i><em style="left:70%"></em></div></div>'; }).join('');
    return block('5','Bist du bereit?','<div class="pf-bereit"><p>Eine Schätzung aus deinen Trainingsergebnissen, hochgerechnet auf die 240 Punkte der Prüfung.</p>'
      + '<div class="pf-prog '+(stufe==='B1'?'gut':'knapp')+'"><div class="pf-prog-k"><b>Nach deinen Übungen</b><span>'+sum+' von 240</span></div>'
      + '<p>'+(stufe==='B1' ? '✅ Das reicht für B1.' : (stufe==='A2' ? '🟡 Das reicht für A2 — für B1 fehlt noch etwas.' : '⏳ Noch nicht genug für A2 — übe weiter, vor allem die Prüfungsläufe.'))+'</p></div>'
      + zeilen + '</div>','pf-ber');
  }

  /* telc B1·B2 Beruf: drei Ergebnisse, jedes B2, B1 oder darunter. */
  function prognoseB1B2(p){
    var pr = {}; p.module.forEach(function(m){ pr[m.id] = modulProzent(p, m); });
    var hls = Math.round(((pr.hoeren||0)*23 + (pr.lesen||0)*36)/100), sch = Math.round((pr.schreiben||0)*40/100), spr = Math.round(pr.sprechen||0);
    var st = function(x, b1, b2){ return x>=b2 ? 'B2' : (x>=b1 ? 'B1' : '–'); };
    var sH = st(hls,27,43), sS = st(sch,14,30), sP = st(spr,35,75);
    var erg = null;
    if(sP!=='–'){
      if(sP==='B2' && sH!=='–' && sS!=='–' && (sH==='B2' || sS==='B2')) erg = 'B2';
      else if((sH!=='–' && sS!=='–') || (sH!=='–' && sch>=8) || (sS!=='–' && hls>=19)) erg = 'B1';
    }
    var z = function(n, x, max, b1, b2, s){
      return '<div class="pf-prog '+(s==='–'?'knapp':'gut')+'"><div class="pf-prog-k"><b>'+E(n)+'</b><span>'+x+' von '+max+' · B1 ab '+b1+', B2 ab '+b2+'</span></div>'
        + '<div class="pf-prog-bar"><i style="width:'+Math.max(2,Math.round(x/max*100))+'%"></i><em style="left:'+Math.round(b1/max*100)+'%"></em><em style="left:'+Math.round(b2/max*100)+'%"></em></div></div>'; };
    return block('5','Bist du bereit?','<div class="pf-bereit"><p>Eine Schätzung aus deinen Trainingsergebnissen, hochgerechnet auf die drei Ergebnisse der Prüfung.</p>'
      + '<div class="pf-prog '+(erg?'gut':'knapp')+'"><div class="pf-prog-k"><b>Nach deinen Übungen</b><span>'+(erg||'noch nicht B1')+'</span></div>'
      + '<p>'+(erg==='B2' ? '✅ Das reicht für B2.' : (erg==='B1' ? '🟡 Das reicht für B1 — für B2 brauchst du B2 im Sprechen und in einem schriftlichen Teil.' : '⏳ Noch nicht genug für B1 — wichtig: Ohne B1 im Sprechen gibt es kein Zertifikat.'))+'</p></div>'
      + z('Hören, Lesen, Sprachbausteine', hls, 59, 27, 43, sH) + z('Schreiben', sch, 40, 14, 30, sS) + z('Sprechen', spr, 100, 35, 75, sP)
      + '</div>','pf-ber');
  }

  /* telc B2·C1 Beruf: drei Ergebnisse, jedes C1, B2 oder darunter. */
  function prognoseB2C1(p){
    var pr = {}; p.module.forEach(function(m){ pr[m.id] = modulProzent(p, m); });
    var hls = Math.round(((pr.hoeren||0)*25 + (pr.lesen||0)*45)/100), sch = Math.round((pr.schreiben||0)*42/100), spr = Math.round(pr.sprechen||0);
    var st = function(x, b2, c1){ return x>=c1 ? 'C1' : (x>=b2 ? 'B2' : '–'); };
    var sH = st(hls,32,50), sS = st(sch,18,34), sP = st(spr,35,75);
    var erg = null;
    if(sP!=='–'){
      if(sP==='C1' && sH!=='–' && sS!=='–' && (sH==='C1' || sS==='C1')) erg = 'C1';
      else if((sH!=='–' && sS!=='–') || (sH!=='–' && sch>=8) || (sS!=='–' && hls>=19)) erg = 'B2';
    }
    var z = function(n, x, max, b2, c1, s){
      return '<div class="pf-prog '+(s==='–'?'knapp':'gut')+'"><div class="pf-prog-k"><b>'+E(n)+'</b><span>'+x+' von '+max+' · B2 ab '+b2+', C1 ab '+c1+'</span></div>'
        + '<div class="pf-prog-bar"><i style="width:'+Math.max(2,Math.round(x/max*100))+'%"></i><em style="left:'+Math.round(b2/max*100)+'%"></em><em style="left:'+Math.round(c1/max*100)+'%"></em></div></div>'; };
    return block('5','Bist du bereit?','<div class="pf-bereit"><p>Eine Schätzung aus deinen Trainingsergebnissen, hochgerechnet auf die drei Ergebnisse der Prüfung.</p>'
      + '<div class="pf-prog '+(erg?'gut':'knapp')+'"><div class="pf-prog-k"><b>Nach deinen Übungen</b><span>'+(erg||'noch nicht B2')+'</span></div>'
      + '<p>'+(erg==='C1' ? '✅ Das reicht für C1.' : (erg==='B2' ? '🟡 Das reicht für B2 — für C1 brauchst du C1 im Sprechen und in einem schriftlichen Teil.' : '⏳ Noch nicht genug für B2 — wichtig: Ohne B2 im Sprechen gibt es kein Zertifikat.'))+'</p></div>'
      + z('Hören, Lesen, Sprachbausteine', hls, 70, 32, 50, sH) + z('Schreiben', sch, 42, 18, 34, sS) + z('Sprechen', spr, 100, 35, 75, sP)
      + '</div>','pf-ber');
  }

  function prognoseBlock(p){
    if(p.prognose.typ==='b2c1') return prognoseB2C1(p);
    if(p.prognose.typ==='a2b1') return prognoseA2B1(p);
    if(p.prognose.typ==='b1b2') return prognoseB1B2(p);
    var zeilen = p.prognose.teile.map(function(t){
      var pts = 0, offen = [];
      for(var k in t.anteile){
        var m = null; p.module.forEach(function(x){ if(x.id===k) m=x; });
        var pr = m ? modulProzent(p, m) : 0;
        if(!pr) offen.push(m ? m.n : k);
        pts += t.anteile[k] * pr / 100;
      }
      pts = Math.round(pts);
      var ok = pts >= t.grenze;
      return '<div class="pf-prog '+(ok?'gut':'knapp')+'">'
        + '<div class="pf-prog-k"><b>'+E(t.name)+'</b><span>'+pts+' von '+t.max+' · '+(p.prognose.richtwert?'Richtwert 60 %: ':'bestanden ab ')+t.grenze+'</span></div>'
        + '<div class="pf-prog-bar"><i style="width:'+Math.max(2,Math.round(pts/t.max*100))+'%"></i>'
        +   '<em style="left:'+Math.round(t.grenze/t.max*100)+'%"></em></div>'
        + '<p>'+(ok ? '✅ Nach deinen Übungen liegst du über der Grenze.'
                   : '⏳ Noch unter der Grenze'+(offen.length?' — noch nicht geübt: '+E(offen.join(', ')):'')+'.')+'</p></div>';
    }).join('');
    return block('5', 'Bist du bereit?', '<div class="pf-bereit"><p>Eine Schätzung aus deinen Trainingsergebnissen, '
      + 'hochgerechnet auf die Punkte der echten Prüfung. Je mehr du übst — vor allem die Prüfungsläufe mit Uhr —, desto genauer wird sie.</p>'
      + zeilen + '</div>', 'pf-ber');
  }

  function bereitBlock(p){
    if(p.prognose) return prognoseBlock(p);
    var einl = p.ohnePruefung
      ? 'Am Ende steht hier eine ehrliche Einschätzung: wie sicher du in jedem Bereich schon bist — '
        + 'und was du als Nächstes üben solltest.'
      : 'Am Ende steht hier eine ehrliche Einschätzung: Punkteprognose aus deinen '
        + 'Trainingsergebnissen, Modul für Modul — und die klare Ansage, wenn eines noch nicht reicht.';
    var inhalt='<div class="pf-bereit">'
      +'<p>'+einl+'</p>'
      +'<div class="pf-bereit-m">'
      + p.module.map(function(m){ return '<span class="pf-bereit-z"><b>'+E(m.n)+'</b><span>noch kein Ergebnis</span></span>'; }).join('')
      +'</div></div>';
    return block('5', 'Bist du bereit?', inhalt, 'pf-ber');
  }

  /* Auf einer Unterseite steht der Titel schon oben im Kopf —
     der Abschnitt darunter braucht dann keine zweite Überschrift. */
  /* Der Titel steht schon oben in der Kopfzeile — hier nur der Inhalt. */
  function block(nr, titel, inhalt, kls){
    return '<section class="pf-block '+(kls||'')+'" data-nr="'+nr+'">' + inhalt + '</section>';
  }

  window.PRUEFUNGEN_DATEN = PRUEFUNGEN;
  window.pruefMeine = meinePruefung;
  window.pruefTerminText = terminText;
})();
