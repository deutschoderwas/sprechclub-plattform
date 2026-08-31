/* ============================================================
   grammatik-c1-neu.js — vier Themen, die wirklich C1 sind

   C1 hatte nach der Korrektur nur noch drei Grammatikthemen.
   Drei weitere standen dort, gehören aber ins B2 — Partizipial-
   attribut, Nominalstil und Passiversatz sind Goethe-B2-Stoff.

   Was C1 wirklich ausmacht, ist nicht mehr Regelwissen, sondern
   Register: dieselbe Sache in der Sprache sagen können, die zur
   Situation passt. Genau darum geht es hier.

   Hängt sich additiv an window.UEBUNGEN an.
   ============================================================ */
(function () {
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;

  var THEMEN = [
    {
      id: 'funktionsverbgefuege',
      title: 'Funktionsverbgefüge — in Betracht ziehen, zur Verfügung stellen',
      level: 'C1',
      emoji: '🏛️',
      words: [
        { de: 'in Betracht ziehen', info: 'überlegen, ob etwas infrage kommt', emoji: '🤔' },
        { de: 'zur Verfügung stellen', info: 'jemandem etwas geben, das er nutzen darf', emoji: '🤲' },
        { de: 'in Kraft treten', info: 'ab jetzt gelten, von einem Gesetz oder einer Regel', emoji: '⚖️' },
        { de: 'Rücksicht nehmen', info: 'an die anderen denken und sich danach richten', emoji: '🫱' },
        { de: 'zum Ausdruck bringen', info: 'etwas deutlich sagen oder zeigen', emoji: '🗣️' },
        { de: 'in Anspruch nehmen', info: 'etwas nutzen, worauf man ein Recht hat', emoji: '📋' }
      ],
      exercises: [
        { type: 'choice', q: 'Was bedeutet „Wir ziehen diese Möglichkeit in Betracht"?',
          options: ['Wir überlegen, ob wir das machen.', 'Wir haben uns schon entschieden.', 'Wir lehnen das ab.', 'Wir haben es vergessen.'],
          answer: 0, explain: 'in Betracht ziehen = erwägen. Entschieden ist noch nichts.' },
        { type: 'choice', q: 'Welches Verb gehört zu „Rücksicht"?',
          options: ['nehmen', 'machen', 'geben', 'stellen'],
          answer: 0, explain: 'Rücksicht nehmen. Diese Verbindungen sind fest — man kann sie nicht frei wählen.' },
        { type: 'gap', text: 'Das neue Gesetz tritt am ersten Januar in ___.', answer: 'Kraft', alts: ['kraft'],
          hint: 'ab dann gilt es', explain: 'in Kraft treten: ab diesem Tag gilt die Regel.' },
        { type: 'gap', text: 'Die Firma stellt den Mitarbeitern Laptops zur ___.', answer: 'Verfügung', alts: ['verfügung', 'verfuegung'],
          hint: 'sie dürfen sie nutzen', explain: 'zur Verfügung stellen: bereitstellen, zum Nutzen überlassen.' },
        { type: 'gap', text: 'Sie hat ihre Enttäuschung deutlich zum ___ gebracht.', answer: 'Ausdruck', alts: ['ausdruck'],
          hint: 'sie hat es klar gezeigt', explain: 'zum Ausdruck bringen ist die gehobene Form von ausdrücken.' },
        { type: 'match', intro: 'Welches Verb gehört zu welchem Nomen?',
          pairs: [
            { l: 'in Betracht', r: 'ziehen' },
            { l: 'zur Verfügung', r: 'stellen' },
            { l: 'in Kraft', r: 'treten' },
            { l: 'Rücksicht', r: 'nehmen' }
          ] },
        { type: 'order', answer: 'Die Regelung tritt im nächsten Monat in Kraft',
          hint: 'Der feste Ausdruck bleibt zusammen und geht ans Ende.',
          explain: 'in Kraft treten — die beiden Teile lassen sich nicht trennen.' },
        { type: 'order', answer: 'Wir stellen Ihnen die Unterlagen gern zur Verfügung',
          hint: 'Erst wer, dann das Verb, der feste Ausdruck ganz ans Ende.',
          explain: 'stellen … zur Verfügung: Das Verb steht auf Platz zwei, der Rest am Satzende.' },
        { type: 'fehler', satz: 'Wir machen Ihren Vorschlag in Betracht.', falsch: 'machen',
          richtig: 'Wir ziehen Ihren Vorschlag in Betracht.',
          explain: 'Zu in Betracht gehört ziehen. Diese Verbindungen sind fest und lassen sich nicht ersetzen.' },
        { type: 'fehler', satz: 'Bitte nehmen Sie Rücksicht auf die anderen Gäste bitte.', falsch: 'bitte', falschIdx: 8,
          richtig: 'Bitte nehmen Sie Rücksicht auf die anderen Gäste.',
          explain: 'Ein bitte reicht. Das zweite am Satzende ist eine Doppelung.' },
        { type: 'choice', q: 'Warum benutzt Amtsdeutsch solche Ausdrücke statt einfacher Verben?',
          options: ['Sie klingen sachlicher und lassen offen, wer handelt.', 'Sie sind kürzer.', 'Sie sind älter.', 'Sie sind leichter zu verstehen.'],
          answer: 0, explain: 'Genau darin liegt ihr Zweck — und ihre Schwäche: Der Handelnde verschwindet.' },
        { type: 'schreiben',
          auftrag: 'Formuliere diese drei Sätze in normales Deutsch um: „Die Kosten werden von uns übernommen." · „Ihr Antrag wird in Bearbeitung genommen." · „Von einer Erstattung wird abgesehen."',
          muster: 'Wir bezahlen die Kosten. Wir bearbeiten gerade Ihren Antrag. Wir erstatten das Geld nicht.',
          tipp: 'Die Kunst ist, den Handelnden zurückzuholen: Wer macht hier eigentlich was?' },
        { type: 'schreiben',
          auftrag: 'Schreib drei Sätze in der gehobenen Form: Du bietest einer Kundin Unterlagen an, bittest um Verständnis für eine Verzögerung und nennst ein Datum, ab dem eine neue Regel gilt.',
          muster: 'Gern stelle ich Ihnen die Unterlagen zur Verfügung. Für die Verzögerung bitte ich um Ihr Verständnis und hoffe, Sie nehmen Rücksicht auf die besondere Lage. Die neue Regelung tritt am ersten März in Kraft.',
          tipp: 'zur Verfügung stellen, um Verständnis bitten, in Kraft treten — drei Wendungen, die in jeder Geschäftsmail vorkommen.' }
      ]
    },

    {
      id: 'irreale-vergleiche',
      title: 'als ob, als wenn — irreale Vergleiche',
      level: 'C1',
      emoji: '🎭',
      words: [
        { de: 'als ob', info: 'leitet einen Vergleich ein, der nicht stimmt', emoji: '🎭' },
        { de: 'so tun, als ob', info: 'sich verhalten, als wäre etwas wahr', emoji: '🎬' },
        { de: 'den Anschein erwecken', info: 'so wirken, als wäre etwas so', emoji: '👀' },
        { de: 'scheinbar', info: 'es sieht so aus, ist aber nicht so', emoji: '🌫️' },
        { de: 'anscheinend', info: 'offenbar, wahrscheinlich wirklich so', emoji: '💡' },
        { de: 'vorgeben', info: 'etwas behaupten, was nicht stimmt', emoji: '🎪' }
      ],
      exercises: [
        { type: 'choice', q: '„Er tut so, als ob er alles verstanden ___."',
          options: ['hätte', 'hat', 'haben würde', 'habe'],
          answer: 0, explain: 'Nach als ob steht der Konjunktiv II — der Vergleich stimmt ja gerade nicht.' },
        { type: 'choice', q: 'Was ist der Unterschied zwischen scheinbar und anscheinend?',
          options: ['scheinbar heißt: es stimmt nicht. anscheinend heißt: es stimmt wohl.', 'Es gibt keinen Unterschied.', 'scheinbar ist höflicher.', 'anscheinend ist die Vergangenheit von scheinbar.'],
          answer: 0, explain: 'Scheinbar schlief er (er schlief nicht). Anscheinend schlief er (er schlief wohl wirklich).' },
        { type: 'gap', text: 'Sie sah mich an, als ___ sie mich nicht kennen würde.', answer: 'ob', alts: ['wenn'],
          hint: 'zwei Buchstaben', explain: 'als ob oder als wenn — beides ist möglich, als ob ist häufiger.' },
        { type: 'gap', text: 'Er tat so, als ___ er nichts gehört.', answer: 'hätte', alts: ['haette'],
          hint: 'Konjunktiv II von haben', explain: 'Nach als ob steht der Konjunktiv II: als hätte er nichts gehört.' },
        { type: 'gap', text: 'Ohne ob und ohne wenn rückt das Verb nach vorn: Er sah aus, als ___ er seit Tagen nicht geschlafen.', answer: 'hätte',
          hint: 'Konjunktiv II, direkt nach als', explain: 'Lässt man ob weg, steht das Verb direkt hinter als: als hätte er …' },
        { type: 'order', answer: 'Sie tut so als ob sie das nicht wüsste',
          hint: 'Nach als ob geht das Verb ans Ende.',
          explain: 'Mit ob ist es ein Nebensatz: als ob sie das nicht wüsste.' },
        { type: 'fehler', satz: 'Er tut so, als ob er alles weiß.', falsch: 'weiß',
          richtig: 'Er tut so, als ob er alles wüsste.',
          explain: 'Der Vergleich ist unwirklich, deshalb Konjunktiv II: wüsste, nicht weiß.' },
        { type: 'fehler', satz: 'Scheinbar hat sie den Zug verpasst, sie kam eine Stunde zu spät.', falsch: 'Scheinbar',
          richtig: 'Anscheinend hat sie den Zug verpasst, sie kam eine Stunde zu spät.',
          explain: 'Sie kam wirklich zu spät — also anscheinend. Scheinbar würde heißen: In Wahrheit hat sie ihn nicht verpasst.' },
        { type: 'match', intro: 'Was passt zusammen?',
          pairs: [
            { l: 'Er tut so, als ob …', r: 'er verhält sich, als wäre es wahr' },
            { l: 'Es hat den Anschein, dass …', r: 'es wirkt so, sicher ist es nicht' },
            { l: 'Er gibt vor, …', r: 'er behauptet etwas Unwahres' },
            { l: 'Anscheinend …', r: 'es ist wohl wirklich so' }
          ] },
        { type: 'choice', q: 'Welcher Satz ist richtig?',
          options: ['Es klang, als wäre jemand im Flur.', 'Es klang, als ist jemand im Flur.', 'Es klang, als ob jemand im Flur ist.', 'Es klang, als wenn jemand im Flur ist.'],
          answer: 0, explain: 'Ohne ob rückt der Konjunktiv II direkt hinter als: als wäre jemand …' },
        { type: 'schreiben',
          auftrag: 'Beschreibe eine Person, die etwas vortäuscht — in drei bis vier Sätzen. Benutze zweimal als ob und einmal anscheinend oder scheinbar.',
          muster: 'Er saß in der Besprechung, als ob ihn das Thema brennend interessieren würde. Dabei hatte er die Unterlagen anscheinend nicht einmal geöffnet. Jedes Mal, wenn eine Frage kam, nickte er, als hätte er längst eine Meinung dazu. Sein Interesse war also nur scheinbar.',
          tipp: 'als ob mit Konjunktiv II, anscheinend für das, was wirklich zutrifft, scheinbar für den falschen Eindruck.' },
        { type: 'schreiben',
          auftrag: 'Schreib drei Sätze über einen Ort, der auf dich einen bestimmten Eindruck macht, ohne dass es stimmt.',
          muster: 'Die Straße wirkt am Sonntagmorgen, als wäre die Stadt über Nacht leer geworden. Nur die Bäckerei hat offen, sonst sieht es aus, als ob niemand hier wohnte. Anscheinend schlafen aber einfach alle noch.',
          tipp: 'als wäre, als ob … wohnte — der Konjunktiv II macht klar, dass der Eindruck täuscht.' }
      ]
    },

    {
      id: 'praepositionen-gehoben',
      title: 'angesichts, aufgrund, hinsichtlich — Präpositionen im gehobenen Stil',
      level: 'C1',
      emoji: '📜',
      words: [
        { de: 'angesichts', info: 'wenn man das sieht oder bedenkt', emoji: '👁️' },
        { de: 'aufgrund', info: 'wegen, mit Blick auf den Grund', emoji: '🧭' },
        { de: 'hinsichtlich', info: 'was diesen Punkt betrifft', emoji: '🎯' },
        { de: 'zugunsten', info: 'zum Vorteil von jemandem', emoji: '⚖️' },
        { de: 'anlässlich', info: 'aus Anlass, zu einem bestimmten Ereignis', emoji: '🎉' },
        { de: 'mangels', info: 'weil etwas fehlt', emoji: '🕳️' }
      ],
      exercises: [
        { type: 'choice', q: 'Welchen Fall verlangen angesichts, aufgrund und hinsichtlich?',
          options: ['Genitiv', 'Dativ', 'Akkusativ', 'Nominativ'],
          answer: 0, explain: 'Alle drei stehen mit dem Genitiv: angesichts der Lage, aufgrund des Wetters.' },
        { type: 'gap', text: '___ der aktuellen Lage verschieben wir die Veranstaltung.', answer: 'Angesichts', alts: ['angesichts'],
          hint: 'wenn man die Lage bedenkt', explain: 'angesichts + Genitiv: mit Blick auf etwas, das jeder sieht.' },
        { type: 'gap', text: 'Der Flug fiel aufgrund ___ Wetters aus.', answer: 'des',
          hint: 'Genitiv Neutrum', explain: 'aufgrund des Wetters — Genitiv, nicht Dativ.' },
        { type: 'gap', text: '___ des Umzugs bleibt das Büro am Freitag geschlossen.', answer: 'Anlässlich', alts: ['anlässlich', 'anlaesslich'],
          hint: 'aus Anlass von etwas', explain: 'anlässlich nennt den Anlass — meist ein Ereignis, kein Problem.' },
        { type: 'gap', text: 'Der Antrag wurde ___ ausreichender Unterlagen abgelehnt.', answer: 'mangels',
          hint: 'weil sie fehlten', explain: 'mangels + Genitiv: weil etwas nicht in ausreichender Menge da war.' },
        { type: 'match', intro: 'Welche Präposition passt zu welcher Bedeutung?',
          pairs: [
            { l: 'angesichts', r: 'wenn man das bedenkt, was alle sehen' },
            { l: 'hinsichtlich', r: 'was diesen einen Punkt betrifft' },
            { l: 'zugunsten', r: 'zum Vorteil von jemandem' },
            { l: 'mangels', r: 'weil etwas fehlt' }
          ] },
        { type: 'fehler', satz: 'Aufgrund dem schlechten Wetter fiel das Fest aus.', falsch: 'dem',
          richtig: 'Aufgrund des schlechten Wetters fiel das Fest aus.',
          explain: 'aufgrund verlangt den Genitiv: des schlechten Wetters.' },
        { type: 'fehler', satz: 'Angesichts die hohen Kosten haben wir das Projekt gestoppt.', falsch: 'die',
          richtig: 'Angesichts der hohen Kosten haben wir das Projekt gestoppt.',
          explain: 'Auch angesichts steht mit dem Genitiv: der hohen Kosten.' },
        { type: 'order', answer: 'Hinsichtlich der Kosten haben wir noch Fragen',
          hint: 'Die Präposition steht mit ihrem Nomen vorn, dann kommt das Verb.',
          explain: 'Steht die Angabe vorn, folgt sofort das Verb: haben wir.' },
        { type: 'choice', q: 'Welcher Satz klingt in einer normalen E-Mail passend?',
          options: ['Wegen des Wetters verschieben wir das Treffen.', 'Angesichts der meteorologischen Lage sehen wir uns veranlasst, den Termin zu verlegen.', 'Aufgrund witterungsbedingter Umstände erfolgt eine Terminverschiebung.', 'Mangels geeigneter Bedingungen findet keine Zusammenkunft statt.'],
          answer: 0, explain: 'Register heißt auch: wissen, wann man es nicht braucht. Unter Kolleginnen reicht wegen.' },
        { type: 'schreiben',
          auftrag: 'Schreib denselben Sachverhalt zweimal: einmal als Aushang im Treppenhaus, einmal als Nachricht an eine Nachbarin. Der Aufzug wird gewartet und steht am Dienstag still.',
          muster: 'Aushang: Aufgrund von Wartungsarbeiten steht der Aufzug am Dienstag, dem 14., ganztägig nicht zur Verfügung. Wir bitten um Ihr Verständnis. — Nachricht: Hey, der Aufzug geht am Dienstag den ganzen Tag nicht, die warten ihn. Sag Bescheid, wenn du Hilfe mit dem Einkauf brauchst.',
          tipp: 'Derselbe Inhalt, zwei Register. Genau das ist die C1-Fertigkeit.' },
        { type: 'schreiben',
          auftrag: 'Formuliere drei gehobene Sätze für eine Absage: Du sagst eine Veranstaltung ab, nennst den Grund und bietest einen Ersatztermin an.',
          muster: 'Angesichts der geringen Anmeldezahl müssen wir die Veranstaltung leider absagen. Aufgrund der bereits getroffenen Vorbereitungen bieten wir allen Angemeldeten einen Ersatztermin im Mai an. Hinsichtlich der Rückerstattung melden wir uns in den kommenden Tagen gesondert.',
          tipp: 'angesichts für die Lage, aufgrund für den Grund, hinsichtlich für den nächsten Punkt.' }
      ]
    },

    {
      id: 'nominalisierte-adjektive',
      title: 'der Angestellte, das Wesentliche — nominalisierte Adjektive',
      level: 'C1',
      emoji: '🔤',
      words: [
        { de: 'der Angestellte', info: 'jemand, der in einer Firma arbeitet', emoji: '🧑‍💼' },
        { de: 'der Bekannte', info: 'jemand, den man kennt, aber kein enger Freund', emoji: '🤝' },
        { de: 'das Wesentliche', info: 'das, worauf es ankommt', emoji: '🎯' },
        { de: 'etwas Neues', info: 'eine Sache, die es vorher nicht gab', emoji: '✨' },
        { de: 'nichts Besonderes', info: 'nichts Auffälliges', emoji: '🤷' },
        { de: 'die Verwandten', info: 'die Menschen aus der eigenen Familie', emoji: '👨‍👩‍👧' }
      ],
      exercises: [
        { type: 'choice', q: 'Wie heißt es richtig: „Ich habe gestern ___ getroffen."',
          options: ['einen Bekannten', 'einen Bekannter', 'ein Bekannter', 'einen Bekannte'],
          answer: 0, explain: 'Nominalisierte Adjektive behalten die Adjektivendung: ein Bekannter, aber einen Bekannten.' },
        { type: 'choice', q: 'Nach etwas, nichts, viel und wenig steht das Adjektiv …',
          options: ['großgeschrieben mit -es: etwas Neues', 'kleingeschrieben: etwas neues', 'immer mit -en: etwas Neuen', 'ohne Endung: etwas Neu'],
          answer: 0, explain: 'etwas Neues, nichts Besonderes, viel Interessantes — groß und mit -es.' },
        { type: 'gap', text: 'Der ___ hat den Vertrag unterschrieben.', answer: 'Angestellte',
          hint: 'nach der wie ein Adjektiv', explain: 'der Angestellte, ein Angestellter — die Endung richtet sich nach dem Artikel.' },
        { type: 'gap', text: 'Ich habe mit einem ___ gesprochen.', answer: 'Angestellten',
          hint: 'Dativ nach mit', explain: 'mit einem Angestellten — im Dativ endet es auf -en.' },
        { type: 'gap', text: 'Erzähl mir etwas ___!', answer: 'Neues', alts: ['neues'],
          hint: 'groß, mit -es', explain: 'Nach etwas steht das nominalisierte Adjektiv groß und auf -es.' },
        { type: 'gap', text: 'Das ___ ist, dass alle rechtzeitig da sind.', answer: 'Wesentliche', alts: ['wesentliche'],
          hint: 'das, worauf es ankommt', explain: 'das Wesentliche — nach das endet es auf -e.' },
        { type: 'match', intro: 'Wer oder was ist gemeint?',
          pairs: [
            { l: 'der Angestellte', r: 'jemand, der in einer Firma arbeitet' },
            { l: 'der Bekannte', r: 'jemand, den man kennt, aber nicht gut' },
            { l: 'der Verwandte', r: 'jemand aus der eigenen Familie' },
            { l: 'das Wesentliche', r: 'das, worauf es wirklich ankommt' }
          ] },
        { type: 'fehler', satz: 'Ich habe gestern einen Bekannter getroffen.', falsch: 'Bekannter',
          richtig: 'Ich habe gestern einen Bekannten getroffen.',
          explain: 'Im Akkusativ nach einen endet das nominalisierte Adjektiv auf -en.' },
        { type: 'fehler', satz: 'Hast du etwas neues gehört?', falsch: 'neues',
          richtig: 'Hast du etwas Neues gehört?',
          explain: 'Nach etwas wird das Adjektiv zum Nomen und großgeschrieben: etwas Neues.' },
        { type: 'order', answer: 'Das Wesentliche haben wir schon besprochen',
          hint: 'Das Objekt steht vorn, dann kommt das Verb.',
          explain: 'Steht das Objekt auf Platz eins, folgt sofort das Verb: haben wir.' },
        { type: 'choice', q: 'Warum heißt es „die Angestellten", aber „zwei Angestellte"?',
          options: ['Mit Artikel endet es auf -en, ohne Artikel auf -e.', 'Das ist ein Rechtschreibfehler.', 'Beides ist immer gleich.', 'Zahlen zählen als Artikel.'],
          answer: 0, explain: 'Genau wie bei jedem Adjektiv: die guten Leute, aber zwei gute Leute.' },
        { type: 'schreiben',
          auftrag: 'Schreib vier Sätze über Menschen in deinem Umfeld und benutze dabei mindestens drei nominalisierte Adjektive.',
          muster: 'Eine Bekannte von mir hat gerade eine neue Stelle gefunden. Die Angestellten in ihrer alten Firma waren alle sehr nett, aber der Weg war zu weit. Sie sagt, das Wesentliche sei jetzt, dass sie abends wieder Zeit hat. Alle Verwandten haben ihr schon gratuliert.',
          tipp: 'eine Bekannte, die Angestellten, das Wesentliche, alle Verwandten — jedes Mal eine andere Endung.' },
        { type: 'schreiben',
          auftrag: 'Fasse einen Text oder Film in drei Sätzen zusammen und benutze dabei das Wesentliche, etwas Neues und nichts Besonderes.',
          muster: 'Das Wesentliche des Films lässt sich in einem Satz sagen: Eine Frau kehrt in ihr Heimatdorf zurück. Wer eine große Wendung erwartet, findet nichts Besonderes. Trotzdem war für mich etwas Neues dabei, nämlich wie ruhig eine Geschichte erzählt sein darf.',
          tipp: 'Alle drei stehen groß — sie sind hier keine Adjektive mehr, sondern Nomen.' }
      ]
    }
  ];

  var ziel = null;
  (window.UEBUNGEN.skills || []).forEach(function (s) { if (!ziel && s.id === 'grammatik') ziel = s; });
  if (!ziel) return;
  ziel.themes = (ziel.themes || []).concat(THEMEN);
})();
