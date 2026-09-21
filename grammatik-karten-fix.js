/* grammatik-karten-fix.js — von Hand korrigierte Merkkarten
   grammatik-vielfalt.js wird von bau/mach-grammatik-vielfalt.js erzeugt.
   Beim Zerlegen der Grammatikseiten sind bei einigen Karten Überschrift
   und Beispiel vertauscht worden („Position 2 — Du kommst um acht“),
   oder die Karte verspricht „vier“ und zeigt drei. Diese Datei läuft
   danach und ersetzt genau diese Karten — so überlebt die Korrektur
   auch einen neuen Lauf des Skripts.
   Schlüssel: Thema-ID, dann der ALTE Titel der Karte. */
(function () {
  var FIX = {
    'a1-praesens': {
      'Sechs Endungen — und drei klingen gleich': {
        info: 'Das ist die ganze Tabelle. Sieh dir wir, sie und Sie an: Alle drei sind gleich wie der Infinitiv. Damit musst du dir eigentlich nur vier Formen merken.',
        beispiele: [
          { satz: 'ich komme', warum: '-e' },
          { satz: 'du kommst', warum: '-st' },
          { satz: 'er, sie, es kommt', warum: '-t' },
          { satz: 'wir kommen', warum: '-en — wie der Infinitiv' },
          { satz: 'ihr kommt', warum: '-t' },
          { satz: 'sie, Sie kommen', warum: '-en — wie der Infinitiv' }
        ]
      }
    },
    'nominalisierung': {
      'Vier Paare — und alle mit Genitiv': {
        wort: 'Vier Paare: aus dem Nebensatz wird ein Nomen',
        beispiele: [
          { satz: 'weil es regnete → wegen des Regens', warum: 'Grund' },
          { satz: 'obwohl es regnete → trotz des Regens', warum: 'Gegengrund' },
          { satz: 'während wir aßen → während des Essens', warum: 'gleichzeitig' },
          { satz: 'statt dass er anrief → statt eines Anrufs', warum: 'Ersatz' }
        ]
      },
      'Und wann man es besser lässt': {
        beispiele: [
          { satz: 'Höchstens zwei Nomen pro Satz', warum: 'Ab dem dritten verliert man den Anfang: „zur Sicherstellung der Bearbeitung der Anträge“ ist zu viel.' },
          { satz: 'Ein echtes Verb muss bleiben', warum: 'Steht am Ende nur noch „erfolgt“, „besteht“ oder „ist“, hast du zu viel umgeformt.' },
          { satz: 'Beim Sprechen zurück zum Nebensatz', warum: '„wegen des Regens“ wird wieder zu „weil es geregnet hat“.' }
        ]
      }
    },
    'a1-fragen': {
      'Zwei Bauweisen — mehr gibt es nicht': {
        beispiele: [
          { satz: 'Du kommst um acht.', warum: 'Aussage: das Verb steht auf Platz 2' },
          { satz: 'Kommst du um acht?', warum: 'Ja-Nein-Frage: das Verb steht auf Platz 1' },
          { satz: 'Wann kommst du?', warum: 'W-Frage: W-Wort vorn, das Verb auf Platz 2' }
        ]
      }
    },
    'negation': {
      'kein ersetzt ein — nicht macht den Rest': {
        beispiele: [
          { satz: 'Ich habe kein Auto.', warum: 'ein Auto → kein Auto' },
          { satz: 'Ich habe keine Zeit.', warum: 'Nomen ohne Artikel → kein' },
          { satz: 'Ich kenne den Mann nicht.', warum: 'der, die, das → nicht' }
        ]
      }
    },
    'possessivartikel': {
      'Die Endung kommt vom Wort danach': {
        beispiele: [
          { satz: 'mein Vater · meine Mutter · meine Eltern', warum: 'ich — die Endung wie bei ein / eine' },
          { satz: 'dein Bruder · deine Schwester', warum: 'du' },
          { satz: 'sein Hund · seine Katze', warum: 'er' }
        ]
      }
    },
    'praeteritum-sein-haben': {
      'Drei Reihen, und du bist durch': {
        beispiele: [
          { satz: 'ich war, du warst, er war, wir waren', warum: 'sein — unregelmäßig' },
          { satz: 'ich hatte, du hattest, er hatte, wir hatten', warum: 'haben — fast regelmäßig: hat + te' },
          { satz: 'ich musste, du musstest, er musste', warum: 'Modalverben: Stamm ohne Umlaut + te (konnte, durfte, wollte)' }
        ]
      }
    },
    'komparativ': {
      '-er und am …sten': {
        beispiele: [
          { satz: 'klein → kleiner → am kleinsten', warum: 'ganz normal' },
          { satz: 'alt → älter → am ältesten', warum: 'kurzes Wort mit a, o, u: Umlaut' },
          { satz: 'gut → besser → am besten', warum: 'ganz anders — ebenso: viel → mehr, gern → lieber, hoch → höher' }
        ]
      }
    },
    'konjunktiv2-vergangenheit': {
      'Zwei Bausteine — und ein Sonderfall': {
        beispiele: [
          { satz: 'Ich hätte mehr gelernt.', warum: 'hätte + Partizip II' },
          { satz: 'Ich wäre gern mitgekommen.', warum: 'wäre + Partizip II — bei Verben mit sein' },
          { satz: 'Du hättest anrufen können.', warum: 'Sonderfall Modalverb: zwei Infinitive am Ende' }
        ]
      }
    },
    'a1-akkusativ': {
      'Wen oder was? Das ist die Frage': {
        beispiele: [
          { satz: 'Ich kaufe den Tee. / einen Tee.', warum: 'nur der ändert sich: der → den, ein → einen' },
          { satz: 'Ich kaufe die Milch. / eine Milch.', warum: 'die bleibt die' },
          { satz: 'Ich kaufe das Brot. / ein Brot.', warum: 'das bleibt das' }
        ]
      }
    },
    'verben-mit-praeposition': {
      'Die Präposition bringt ihren Fall mit': {
        beispiele: [
          { satz: 'Ich spreche mit der Chefin.', warum: 'mit: immer Dativ' },
          { satz: 'Ich freue mich über die Nachricht. (jetzt)', warum: 'über: hier Akkusativ' },
          { satz: 'Ich freue mich auf den Urlaub. (später)', warum: 'auf: hier Akkusativ' }
        ]
      }
    },
    'gegensatz-konnektoren': {
      'Nebensatz, Hauptsatz oder Nomen': {
        info: 'Hier steht derselbe Inhalt viermal. Achte nur auf eines: wo das Verb steht. Genau das unterscheidet die vier — nicht die Bedeutung.',
        beispiele: [
          { satz: 'Obwohl es regnete, sind wir gelaufen.', warum: 'Nebensatz: Verb am Ende' },
          { satz: 'Es regnete. Trotzdem sind wir gelaufen.', warum: 'Adverb: Verb direkt danach' },
          { satz: 'Es regnete; dennoch sind wir gelaufen.', warum: 'Adverb, schriftlicher' },
          { satz: 'Trotz des Regens sind wir gelaufen.', warum: 'Präposition + Genitiv, gar kein zweites Verb' }
        ]
      }
    },
    'imperativ': {
      'So bildest du die drei Formen': {
        beispiele: [
          { satz: 'Komm! · Kommt! · Kommen Sie!', warum: 'du · ihr · Sie' },
          { satz: 'Warte! · Wartet! · Warten Sie!', warum: 'nach -t und -d kommt ein -e dazu' },
          { satz: 'Fahr! · Fahrt! · Fahren Sie!', warum: 'kein Umlaut: du fährst → fahr!' },
          { satz: 'Sei! · Seid! · Seien Sie!', warum: 'sein hat eigene Formen' }
        ]
      }
    },
    'genitiv-b2': {
      'Vier reichen — aber es gibt vierzehn': {
        beispiele: [
          { satz: 'wegen des Umzugs', warum: 'Grund' },
          { satz: 'trotz der Frist', warum: 'Gegengrund' },
          { satz: 'während der Laufzeit', warum: 'Zeitraum' },
          { satz: 'statt eines Anrufs', warum: 'Ersatz' }
        ]
      }
    },
    'praepositionen-dativ': {
      'zum, zur, beim, vom — die Kurzformen': {
        beispiele: [
          { satz: 'Ich gehe zum Arzt.', warum: 'zum = zu + dem' },
          { satz: 'Ich fahre zur Arbeit.', warum: 'zur = zu + der' },
          { satz: 'Ich war beim Zahnarzt.', warum: 'beim = bei + dem' },
          { satz: 'Ich komme vom Arzt.', warum: 'vom = von + dem' }
        ]
      }
    }
  };

  var U = window.UEBUNGEN; if (!U || !U.skills) return;
  U.skills.forEach(function (sk) {
    (sk.themes || []).forEach(function (t) {
      var f = FIX[t.id]; if (!f) return;
      (t.exercises || []).forEach(function (e) {
        if (e.type !== 'karte' || !e.regel || !f[e.wort]) return;
        var n = f[e.wort];
        if (n.info) e.info = n.info;
        if (n.beispiele) e.beispiele = n.beispiele;
        if (n.wort) e.wort = n.wort;
      });
    });
  });
})();
