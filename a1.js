/* ============================================================
   deutschoderwas club — A1: Der Anfang
   14 Lektionen im Aufbau eines deutschen Integrationskurses
   (Reihenfolge nach Hueber "Schritte plus Neu" 1 + 2).

   Eine Lektion:
     nr        Nummer 1 bis 14
     id        kurzer Name, wird in der Adresse benutzt
     t         Titel der Lektion
     ziel      Was die Lernende danach kann
     chunks    Wortschatz als ganze Wendungen: de · hi (Hinweis) · bsp
     gram      Grammatik: t (Titel) · e (Erklaerung) · bsp (Beispielsaetze)
     ueb       Uebungen, gemischte Typen
     dialog    Gespraech mit Amanda: ort · schritte
     schreiben Schreibauftrag: auf · punkte · hilfe
     aus       Aussprache-Schwerpunkt

   Uebungstypen:
     wahl        {typ,f,o,l,e}          Mehrfachwahl, l = Index
     luecke      {typ,f,l,e}            Luecke wird getippt
     artikel     {typ,w,l,e}            der/die/das
     bausteine   {typ,l,teile,e}        Satz aus Bausteinen bauen
     paare       {typ,p,e}              zuordnen
     hoeren      {typ,text,f,o,l,e}     text wird vorgelesen
     sprechen    {typ,f,l,e}            nachsprechen
     uebersetzen {typ,f,l,e}            in die Zielsprache Deutsch
     ordnen      {typ,l,f,e}            Reihenfolge herstellen
   ============================================================ */

window.A1 = {
  titel: 'A1 — Der Anfang',
  unter: 'Ganz von vorn. 14 Lektionen für dein erstes Jahr in Deutschland — vom ersten Guten Tag bis zur Einladung zum Geburtstag.',
  lektionen: [

  /* ================= LEKTION 1 ================= */
  {
    nr: 1,
    id: 'vorstellen',
    t: 'Guten Tag, mein Name ist …',
    ziel: 'Nach dieser Lektion kannst du: jemanden begrüßen und dich verabschieden, deinen Namen sagen und buchstabieren, sagen, woher du kommst und welche Sprachen du sprichst, die Zahlen von 0 bis 20 verstehen und deine Telefonnummer nennen.',
    chunks: [
      {de:'Guten Tag!', hi:'die höfliche Begrüßung am Tag — passt fast immer', bsp:'Guten Tag, Frau Berger!'},
      {de:'Guten Morgen!', hi:'am Morgen, bis etwa 11 Uhr', bsp:'Guten Morgen, Herr Özdemir!'},
      {de:'Guten Abend!', hi:'ab etwa 18 Uhr', bsp:'Guten Abend! Ich bin Amina.'},
      {de:'Hallo!', hi:'locker, unter Freunden und im Kurs', bsp:'Hallo Yusuf, wie geht es dir?'},
      {de:'Auf Wiedersehen!', hi:'der höfliche Abschied', bsp:'Auf Wiedersehen, Frau Berger!'},
      {de:'Tschüss!', hi:'locker beim Abschied', bsp:'Tschüss, bis morgen!'},
      {de:'Ich heiße …', hi:'so sagst du deinen Namen', bsp:'Ich heiße Amina Haddad.'},
      {de:'Mein Name ist …', hi:'etwas formeller, gut am Telefon und beim Amt', bsp:'Mein Name ist Nguyen Van Minh.'},
      {de:'Wie heißt du?', hi:'du fragst eine Person, die du duzt', bsp:'Hallo, wie heißt du?'},
      {de:'Wie heißen Sie?', hi:'höflich — bei Fremden und beim Amt', bsp:'Guten Tag, wie heißen Sie?'},
      {de:'Ich komme aus …', hi:'so nennst du dein Land', bsp:'Ich komme aus Syrien.'},
      {de:'Woher kommen Sie?', hi:'du fragst nach dem Land, höflich', bsp:'Woher kommen Sie, Frau Kowal?'},
      {de:'Ich wohne in …', hi:'so nennst du deine Stadt', bsp:'Ich wohne in Leipzig.'},
      {de:'Ich spreche ein bisschen Deutsch.', hi:'ehrlich und freundlich — hilft am Anfang immer', bsp:'Ich spreche ein bisschen Deutsch und Englisch.'},
      {de:'Welche Sprachen sprichst du?', hi:'die Frage nach den Sprachen', bsp:'Welche Sprachen sprichst du, Olena?'},
      {de:'Wie geht es Ihnen?', hi:'höflich nach dem Befinden fragen', bsp:'Guten Tag, wie geht es Ihnen?'},
      {de:'Danke, gut. Und dir?', hi:'die normale Antwort, wenn dich jemand duzt', bsp:'Danke, gut. Und dir?'},
      {de:'Freut mich.', hi:'sagst du, wenn du jemanden neu kennenlernst', bsp:'Ich bin Yusuf. — Freut mich!'},
      {de:'Wie bitte?', hi:'wenn du etwas nicht gehört hast', bsp:'Wie bitte? Können Sie das wiederholen?'},
      {de:'Können Sie das buchstabieren?', hi:'wenn du einen Namen schreiben musst', bsp:'Haddad? Können Sie das buchstabieren?'},
      {de:'Ich bin neu hier.', hi:'erklärt in einem Satz sehr viel', bsp:'Entschuldigung, ich bin neu hier.'},
      {de:'Ich bin 34 Jahre alt.', hi:'so sagst du dein Alter', bsp:'Ich bin 34 Jahre alt und habe zwei Kinder.'},
      {de:'Meine Telefonnummer ist …', hi:'Zahlen einzeln sprechen: null - eins - sieben …', bsp:'Meine Telefonnummer ist 0176 23 45 678.'},
      {de:'Entschuldigung, ich verstehe das nicht.', hi:'der wichtigste Satz der ersten Wochen', bsp:'Entschuldigung, ich verstehe das nicht. Bitte langsam!'}
    ],
    gram: [
      {t:'Das Verb steht auf Platz 2', e:'Im deutschen Aussagesatz steht das Verb immer an der zweiten Stelle. Vorne steht meistens die Person. Danach kommt das Verb, dann der Rest.', bsp:['Ich komme aus Syrien.','Amina wohnt in Leipzig.','Wir sprechen Arabisch.']},
      {t:'Die W-Frage: Fragewort, dann Verb', e:'Eine Frage mit Fragewort beginnt mit dem Fragewort. Danach kommt sofort das Verb. Die wichtigsten Fragewörter sind wie, woher, wo und was.', bsp:['Wie heißt du?','Woher kommst du?','Wo wohnen Sie?']},
      {t:'ich, du und Sie', e:'Zu Freunden und im Kurs sagst du du. Zu fremden Erwachsenen sagst du Sie. Sie schreibt man immer groß. Wenn du unsicher bist, nimm Sie — das ist nie falsch.', bsp:['Wie heißt du, Yusuf?','Wie heißen Sie, Frau Berger?','Ich heiße Amina.']},
      {t:'Präsens: die Endungen', e:'Das Verb bekommt eine Endung. Bei ich ist es -e, bei du ist es -st, bei Sie ist es -en. Bei heißen fällt das s zusammen: du heißt.', bsp:['ich komme — du kommst — Sie kommen','ich heiße — du heißt — Sie heißen','ich spreche — du sprichst — Sie sprechen']},
      {t:'Das Verb sein', e:'sein ist unregelmäßig. Du musst es einfach lernen: ich bin, du bist, Sie sind. Mit sein sagst du, wer oder wie du bist.', bsp:['Ich bin Amina.','Bist du neu hier?','Sind Sie Frau Berger?']},
      {t:'aus: das Land, aus dem du kommst', e:'Nach aus nennst du dein Land. Bei den meisten Ländern steht nichts davor. Ein paar Länder haben einen Artikel: aus der Türkei, aus der Ukraine, aus dem Irak.', bsp:['Ich komme aus Vietnam.','Olena kommt aus der Ukraine.','Yusuf kommt aus der Türkei.']}
    ],
    ueb: [
      {typ:'wahl', f:'Es ist 19 Uhr. Du kommst in den Deutschkurs. Was sagst du?', o:['Guten Morgen!','Guten Abend!','Gute Nacht!'], l:1, e:'Ab etwa 18 Uhr sagt man Guten Abend. Gute Nacht sagt man nur, wenn jemand schlafen geht.'},
      {typ:'luecke', f:'Ich ___ aus Syrien.', l:'komme', e:'Bei ich endet das Verb auf -e: ich komme.'},
      {typ:'luecke', f:'Wie ___ du?', l:'heißt', e:'du heißt — bei heißen kommt kein zweites s dazu.'},
      {typ:'luecke', f:'Woher ___ Sie, Frau Berger?', l:'kommen', e:'Bei Sie endet das Verb auf -en, genau wie im Wörterbuch.'},
      {typ:'luecke', f:'Ich ___ Amina und ___ 34 Jahre alt.', l:'heiße bin', e:'Zuerst heiße (mit -e), dann bin. sein ist unregelmäßig.'},
      {typ:'luecke', f:'___ du neu hier?', l:'Bist', e:'du bist — in der Frage steht das Verb vorne: Bist du …?'},
      {typ:'bausteine', l:'Ich komme aus der Türkei.', teile:['Ich','komme','aus','der','Türkei'], e:'Person, dann Verb, dann der Rest. Die Türkei hat einen Artikel: aus der Türkei.'},
      {typ:'bausteine', l:'Woher kommst du?', teile:['Woher','kommst','du'], e:'Fragewort auf Platz 1, Verb auf Platz 2, dann die Person.'},
      {typ:'bausteine', l:'Mein Name ist Olena Kowal.', teile:['Mein','Name','ist','Olena','Kowal'], e:'Mein Name ist der Anfang, dann kommt das Verb ist.'},
      {typ:'paare', p:[['Guten Morgen','am Vormittag'],['Guten Tag','am Mittag und Nachmittag'],['Guten Abend','ab 18 Uhr'],['Gute Nacht','wenn jemand schlafen geht']], e:'Die Begrüßung richtet sich nach der Uhrzeit. Guten Tag passt am längsten.'},
      {typ:'paare', p:[['Wie heißen Sie?','Ich heiße Amina Haddad.'],['Woher kommen Sie?','Aus Syrien.'],['Wo wohnen Sie?','In Leipzig.'],['Wie geht es Ihnen?','Danke, gut.']], e:'Achte auf das Fragewort: wie fragt nach dem Namen, woher nach dem Land, wo nach dem Ort.'},
      {typ:'hoeren', text:'Guten Tag, ich heiße Olena Kowal und ich komme aus der Ukraine.', f:'Woher kommt Olena?', o:['aus Polen','aus der Ukraine','aus Rumänien'], l:1, e:'Sie sagt aus der Ukraine. Höre auf das Wort direkt nach aus.'},
      {typ:'hoeren', text:'Mein Name ist Yusuf. Y - U - S - U - F.', f:'Wie schreibt man den Namen?', o:['Jusuf','Yusuf','Yussuf'], l:1, e:'Der erste Buchstabe ist Y, gesprochen wie Ypsilon. Danach kommt nur ein s.'},
      {typ:'wahl', f:'Welche Zahl hörst du: zwölf?', o:['2','12','20'], l:1, e:'zwölf ist 12. Zwei ist 2 und zwanzig ist 20 — diese drei klingen ähnlich, also gut hinhören.'},
      {typ:'sprechen', f:'Sag: Guten Tag, ich heiße … und ich komme aus …', l:'Guten Tag, ich heiße', e:'Sprich langsam und mach eine kleine Pause nach heiße. Dann versteht dich jeder.'},
      {typ:'uebersetzen', f:'What is your name? (höflich, zu einer fremden Person)', l:'Wie heißen Sie?', e:'Höflich heißt Sie mit großem S und die Endung -en beim Verb.'},
      {typ:'ordnen', l:['Guten Tag! Ich bin Frau Berger.','Guten Tag! Ich heiße Amina Haddad.','Woher kommen Sie, Frau Haddad?','Ich komme aus Syrien.','Freut mich. Auf Wiedersehen!'], f:'Bring das Gespräch in die richtige Reihenfolge.', e:'Erst die Begrüßung, dann die Namen, dann die Frage nach dem Land, am Ende der Abschied.'},
      {typ:'luecke', f:'Olena ___ Ukrainisch, Russisch und ein bisschen Deutsch.', l:'spricht', e:'Bei er/sie wird das e zu i: ich spreche, aber sie spricht.'}
    ],
    dialog: {
      ort: 'Du bist heute zum ersten Mal im Deutschkurs. Die Lehrerin, Frau Berger, begrüßt dich an der Tür.',
      schritte: [
        {amanda:'Guten Tag! Ich bin Frau Berger, Ihre Lehrerin. Und Sie?', hinweis:'Begrüße sie und sag deinen Namen.', beispiel:'Guten Tag! Ich heiße Amina Haddad.', redemittel:['Ich heiße …','Mein Name ist …','Ich bin …']},
        {amanda:'Haddad — können Sie das bitte buchstabieren?', hinweis:'Buchstabiere deinen Familiennamen.', beispiel:'Ja, gern: H - A - D - D - A - D.', redemittel:['Ja, gern: …','Das schreibt man …','H wie Hamburg …']},
        {amanda:'Danke. Und woher kommen Sie?', hinweis:'Sag dein Land. Denk an aus.', beispiel:'Ich komme aus Syrien.', redemittel:['Ich komme aus …','Aus …','Ich bin aus …']},
        {amanda:'Und wo wohnen Sie jetzt?', hinweis:'Sag deine Stadt. Nach wohnen kommt in.', beispiel:'Ich wohne jetzt in Leipzig.', redemittel:['Ich wohne in …','In …','Ich wohne seit Mai in …']},
        {amanda:'Sehr gut. Sprechen Sie schon ein bisschen Deutsch?', hinweis:'Antworte ehrlich und nenne deine Sprachen.', beispiel:'Ein bisschen. Ich spreche Arabisch und Englisch.', redemittel:['Ein bisschen.','Ich spreche …','Ich lerne Deutsch seit …']}
      ]
    },
    schreiben: {
      auf: 'Fülle das Anmeldeformular für den Deutschkurs aus. Schreibe zu jedem Punkt eine Zeile.',
      punkte:['Familienname und Vorname','Geburtsdatum','Land','Adresse in Deutschland','Telefonnummer','Sprachen'],
      hilfe:'Schreibe kurz, ein Wort oder eine Zahl reicht. Familiennamen schreibt man in Formularen oft groß: HADDAD. Das Datum schreibt man mit Punkten: 12.04.1991. Bei Telefonnummern sprichst du die Zahlen einzeln.'
    },
    aus: 'ei und ie: bei ei hörst du ai (heißen, mein, drei), bei ie hörst du ein langes i (Sie, wie, vier). Übe im Wechsel: heißen - Sie, mein - wie, drei - vier.'
  },

  /* ================= LEKTION 2 ================= */
  {
    nr: 2,
    id: 'familie',
    t: 'Meine Familie',
    ziel: 'Nach dieser Lektion kannst du: über deine Familie sprechen, sagen wer zu dir gehört, nach Familie und Geschwistern fragen, das Alter nennen und ein Foto erklären.',
    chunks: [
      {de:'Das ist meine Frau.', hi:'du zeigst auf ein Foto oder stellst jemanden vor', bsp:'Das ist meine Frau. Sie heißt Layla.'},
      {de:'Das ist mein Mann.', hi:'mein bei Mann, meine bei Frau', bsp:'Das ist mein Mann. Er arbeitet in Hamburg.'},
      {de:'Ich bin verheiratet.', hi:'so sagst du deinen Familienstand', bsp:'Ich bin verheiratet und habe zwei Kinder.'},
      {de:'Ich bin ledig.', hi:'nicht verheiratet — steht so in jedem Formular', bsp:'Ich bin ledig und wohne allein.'},
      {de:'Ich habe zwei Kinder.', hi:'haben plus Zahl plus Kinder', bsp:'Ich habe zwei Kinder, einen Sohn und eine Tochter.'},
      {de:'meine Tochter', hi:'das Mädchen in der Familie', bsp:'Meine Tochter geht in die Schule.'},
      {de:'mein Sohn', hi:'der Junge in der Familie', bsp:'Mein Sohn ist erst drei Jahre alt.'},
      {de:'Wie alt ist dein Sohn?', hi:'so fragst du nach dem Alter', bsp:'Wie alt ist dein Sohn? — Er ist fünf.'},
      {de:'Er ist fünf Jahre alt.', hi:'die Antwort auf die Frage nach dem Alter', bsp:'Mein Sohn ist fünf Jahre alt.'},
      {de:'Hast du Geschwister?', hi:'Geschwister sind Brüder und Schwestern zusammen', bsp:'Hast du Geschwister, Olena?'},
      {de:'Ich habe einen Bruder und zwei Schwestern.', hi:'einen Bruder, aber eine Schwester', bsp:'Ich habe einen Bruder und zwei Schwestern.'},
      {de:'mein Vater und meine Mutter', hi:'zusammen sagt man: meine Eltern', bsp:'Mein Vater ist Lehrer, meine Mutter ist Ärztin.'},
      {de:'meine Eltern', hi:'immer Plural: meine Eltern wohnen …', bsp:'Meine Eltern wohnen noch in Vietnam.'},
      {de:'meine Großmutter und mein Großvater', hi:'die Eltern von deinen Eltern; auch Oma und Opa', bsp:'Meine Großmutter ist 81 Jahre alt.'},
      {de:'Meine Familie lebt in der Ukraine.', hi:'leben oder wohnen — beides geht', bsp:'Meine Familie lebt in der Ukraine, ich lebe hier.'},
      {de:'Ich wohne allein.', hi:'ohne andere Personen', bsp:'Ich wohne allein in einer kleinen Wohnung.'},
      {de:'Wir wohnen zusammen.', hi:'in einer Wohnung, als Familie', bsp:'Wir wohnen zusammen in Leipzig.'},
      {de:'Ich zeige dir ein Foto.', hi:'gutes Angebot, wenn du über Familie sprichst', bsp:'Ich zeige dir ein Foto von meiner Familie.'},
      {de:'Wir telefonieren jeden Sonntag.', hi:'so bleibst du in Kontakt', bsp:'Wir telefonieren jeden Sonntag um acht.'},
      {de:'Ich vermisse meine Familie.', hi:'ein wichtiger Satz — sag ihn, wenn du ihn brauchst', bsp:'Ich vermisse meine Familie sehr.'},
      {de:'Ist das Ihre Tochter?', hi:'höflich fragen: Ihre mit großem I', bsp:'Ist das Ihre Tochter auf dem Foto?'},
      {de:'Mein Mann arbeitet bei der Post.', hi:'so nennst du den Arbeitgeber', bsp:'Mein Mann arbeitet bei der Post in Halle.'},
      {de:'Wie heißt deine Mutter?', hi:'deine bei Mutter, dein bei Vater', bsp:'Wie heißt deine Mutter? — Sie heißt Fatima.'}
    ],
    gram: [
      {t:'mein, dein, Ihr: wem gehört das?', e:'Mit mein sagst du, dass etwas zu dir gehört. dein gehört zu du, Ihr gehört zu Sie. Bei die-Wörtern und im Plural kommt ein -e dazu: meine Frau, meine Eltern.', bsp:['mein Mann — meine Frau','dein Sohn — deine Tochter','Ihr Name — Ihre Adresse']},
      {t:'Alle Personalpronomen', e:'Jetzt kennst du alle Personen: ich, du, er, sie, es, wir, ihr, sie und Sie. er steht für einen Mann, sie für eine Frau, es für ein Kind oder ein Baby.', bsp:['Er heißt Yusuf.','Sie kommt aus Polen.','Wir wohnen in Leipzig.','Ihr sprecht sehr gut Deutsch.']},
      {t:'Das Verb haben', e:'haben ist unregelmäßig: ich habe, du hast, er hat, wir haben, ihr habt, sie haben. Mit haben sagst du, was zu dir gehört.', bsp:['Ich habe zwei Kinder.','Hast du Geschwister?','Sie hat einen Bruder.']},
      {t:'Die Endungen bei allen Personen', e:'Die Endungen sind: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. wir und sie haben dieselbe Endung wie der Infinitiv.', bsp:['ich wohne, du wohnst, er wohnt','wir wohnen, ihr wohnt, sie wohnen']},
      {t:'in: wo jemand wohnt', e:'Nach wohnen und leben kommt in. Bei Städten steht nichts weiter dazu: in Leipzig. Bei Ländern mit Artikel kommt der Artikel im Dativ: in der Türkei, in der Ukraine, im Irak.', bsp:['Ich wohne in Leipzig.','Meine Eltern leben in Vietnam.','Meine Schwester wohnt in der Türkei.']}
    ],
    ueb: [
      {typ:'luecke', f:'Das ist ___ Frau. Sie heißt Layla.', l:'meine', e:'die Frau ist ein die-Wort, deshalb meine mit -e.'},
      {typ:'luecke', f:'Das ist ___ Mann. Er heißt Yusuf.', l:'mein', e:'der Mann ist ein der-Wort, deshalb mein ohne Endung.'},
      {typ:'luecke', f:'Ich ___ zwei Kinder.', l:'habe', e:'Bei ich heißt es habe. haben ist unregelmäßig, aber bei ich ganz normal mit -e.'},
      {typ:'luecke', f:'___ du Geschwister?', l:'Hast', e:'du hast — in der Frage steht das Verb vorne.'},
      {typ:'luecke', f:'Mein Sohn ist drei Jahre alt. ___ geht noch nicht in die Schule.', l:'Er', e:'Der Sohn ist ein Mann, also er.'},
      {typ:'luecke', f:'Meine Eltern wohnen in Vietnam. ___ telefonieren jeden Sonntag.', l:'Wir', e:'Du und deine Eltern zusammen — das ist wir.'},
      {typ:'wahl', f:'Sie sprechen mit Frau Berger und zeigen ein Foto. Was fragen Sie höflich?', o:['Ist das deine Tochter?','Ist das Ihre Tochter?','Ist das meine Tochter?'], l:1, e:'Zu einer fremden Erwachsenen sagst du Sie, also Ihre mit großem I.'},
      {typ:'wahl', f:'Was bedeutet ledig?', o:['verheiratet','nicht verheiratet','geschieden'], l:1, e:'ledig heißt: noch nie verheiratet. Das Wort steht in fast jedem Formular.'},
      {typ:'bausteine', l:'Ich habe einen Bruder und zwei Schwestern.', teile:['Ich','habe','einen','Bruder','und','zwei','Schwestern'], e:'einen Bruder, aber zwei Schwestern — im Plural brauchst du kein Wort davor.'},
      {typ:'bausteine', l:'Meine Familie lebt in der Ukraine.', teile:['Meine','Familie','lebt','in','der','Ukraine'], e:'Die Familie ist eine Person-Gruppe, aber das Verb steht im Singular: lebt. Die Ukraine hat einen Artikel: in der Ukraine.'},
      {typ:'paare', p:[['mein Vater und meine Mutter','meine Eltern'],['mein Bruder und meine Schwester','meine Geschwister'],['mein Sohn und meine Tochter','meine Kinder'],['die Mutter von meiner Mutter','meine Großmutter']], e:'Für viele Familienwörter gibt es ein Wort, das beide zusammen nennt. Das spart dir viele Sätze.'},
      {typ:'hoeren', text:'Ich bin verheiratet und habe drei Kinder: zwei Töchter und einen Sohn.', f:'Wie viele Kinder hat die Person?', o:['zwei','drei','vier'], l:1, e:'Sie sagt drei Kinder und zählt dann auf: zwei Töchter plus ein Sohn.'},
      {typ:'hoeren', text:'Meine Eltern wohnen noch in Vietnam. Meine Schwester lebt in Berlin.', f:'Wer lebt in Deutschland?', o:['die Eltern','die Schwester','niemand'], l:1, e:'Die Eltern sind in Vietnam, die Schwester in Berlin. Berlin liegt in Deutschland.'},
      {typ:'sprechen', f:'Sag drei Sätze über deine Familie: Ich bin … Ich habe … Meine Familie …', l:'Ich bin', e:'Fang mit dem Familienstand an, dann die Kinder, dann der Wohnort. So macht es jede Prüfung auch.'},
      {typ:'uebersetzen', f:'How old is your son? (du-Form)', l:'Wie alt ist dein Sohn?', e:'Wie alt fragt nach dem Alter. der Sohn ist ein der-Wort, also dein ohne -e.'},
      {typ:'ordnen', l:['Hast du Geschwister?','Ja, ich habe eine Schwester.','Wie alt ist sie?','Sie ist 25 Jahre alt.'], f:'Bring das Gespräch in die richtige Reihenfolge.', e:'Erst die Ja-Frage, dann die Antwort, dann die Nachfrage zum Alter.'},
      {typ:'luecke', f:'Wie heißt ___ Mutter?', l:'deine', e:'die Mutter ist ein die-Wort: deine mit -e.'}
    ],
    dialog: {
      ort: 'Pause im Deutschkurs. Olena aus der Ukraine sitzt neben dir und zeigt ein Foto auf dem Handy.',
      schritte: [
        {amanda:'Schau mal, das ist meine Familie. Das sind meine Eltern und mein Bruder. Hast du auch Geschwister?', hinweis:'Antworte mit ja oder nein und sag, wen du hast.', beispiel:'Ja, ich habe zwei Schwestern und einen Bruder.', redemittel:['Ja, ich habe …','Nein, ich bin allein.','Ich habe nur …']},
        {amanda:'Und wo wohnen sie? Hier in Deutschland?', hinweis:'Sag, wo deine Familie lebt. Denk an in.', beispiel:'Nein, sie wohnen in Syrien. Nur ich bin hier.', redemittel:['Sie wohnen in …','Meine Familie lebt in …','Ein Teil ist hier, ein Teil in …']},
        {amanda:'Bist du verheiratet?', hinweis:'Sag deinen Familienstand.', beispiel:'Ja, ich bin verheiratet. Mein Mann heißt Karim.', redemittel:['Ja, ich bin verheiratet.','Nein, ich bin ledig.','Ich bin verheiratet und habe …']},
        {amanda:'Und Kinder? Ich habe eine Tochter, sie ist sieben.', hinweis:'Sag, ob du Kinder hast, und nenne das Alter.', beispiel:'Ich habe einen Sohn. Er ist fünf Jahre alt.', redemittel:['Ich habe … Kinder.','Er ist … Jahre alt.','Nein, noch nicht.']},
        {amanda:'Sieben und fünf — dann gehen sie fast zusammen in die Schule. Telefonierst du oft mit deiner Familie?', hinweis:'Sag, wie oft du telefonierst.', beispiel:'Ja, wir telefonieren jeden Sonntag.', redemittel:['Wir telefonieren jeden …','Jeden Tag.','Nicht oft, das ist schwer.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe fünf bis sechs Sätze über deine Familie. Ein Satz pro Punkt.',
      punkte:['Bist du verheiratet oder ledig?','Hast du Kinder? Wie alt sind sie?','Hast du Geschwister?','Wo wohnen deine Eltern?','Wer wohnt mit dir zusammen?'],
      hilfe:'Denk an mein und meine: mein Mann, mein Sohn, mein Bruder — aber meine Frau, meine Tochter, meine Schwester, meine Eltern. Beim Alter: Er ist fünf Jahre alt. Fang jeden Satz mit Ich oder Mein oder Meine an, dann kann fast nichts schiefgehen.'
    },
    aus: 'Das lange und das kurze a: Vater, Bruder und Jahre haben ein langes a. Mann, alt und Tante haben ein kurzes a. Zwei Konsonanten nach dem Vokal heißen fast immer: kurz sprechen.'
  },
  /* ================= LEKTION 3 ================= */
  {
    nr: 3,
    id: 'einkaufen',
    t: 'Einkaufen',
    ziel: 'Nach dieser Lektion kannst du: im Supermarkt und auf dem Markt einkaufen, nach Preisen fragen, Mengen nennen, sagen was du brauchst und was es nicht gibt, und an der Kasse bezahlen.',
    chunks: [
      {de:'Ich möchte ein Kilo Tomaten.', hi:'so bestellst du am Marktstand', bsp:'Guten Tag, ich möchte ein Kilo Tomaten.'},
      {de:'Ich brauche noch Brot.', hi:'brauchen sagt, was fehlt', bsp:'Ich brauche noch Brot und Milch.'},
      {de:'Was kostet das?', hi:'die Frage nach dem Preis, für eine Sache', bsp:'Entschuldigung, was kostet das?'},
      {de:'Was kosten die Äpfel?', hi:'kosten mit -en, weil es mehrere sind', bsp:'Was kosten die Äpfel?'},
      {de:'Das macht 4,50 Euro.', hi:'so sagt die Kassiererin den Preis: vier Euro fünfzig', bsp:'Das macht 4,50 Euro, bitte.'},
      {de:'Haben Sie Milch?', hi:'Ja-/Nein-Frage im Laden', bsp:'Entschuldigung, haben Sie Milch ohne Laktose?'},
      {de:'Wir haben keine Milch mehr.', hi:'kein sagt: es gibt nichts davon', bsp:'Tut mir leid, wir haben keine Milch mehr.'},
      {de:'eine Packung Reis', hi:'Reis, Nudeln und Zucker kommen in Packungen', bsp:'Ich nehme eine Packung Reis.'},
      {de:'eine Flasche Wasser', hi:'Wasser, Öl und Saft in Flaschen', bsp:'Bitte eine Flasche Wasser, ohne Kohlensäure.'},
      {de:'200 Gramm Käse', hi:'an der Wursttheke sagt man Gramm', bsp:'Ich möchte 200 Gramm Käse, bitte.'},
      {de:'ein Stück Kuchen', hi:'ein Stück ist ein Teil von etwas Großem', bsp:'Ein Stück Kuchen, bitte.'},
      {de:'Zahlen Sie mit Karte oder in bar?', hi:'die Standardfrage an der Kasse', bsp:'Zahlen Sie mit Karte oder in bar?'},
      {de:'Ich zahle bar.', hi:'bar heißt: mit Geldscheinen und Münzen', bsp:'Ich zahle bar, danke.'},
      {de:'Möchten Sie eine Tüte?', hi:'Tüten kosten in Deutschland Geld', bsp:'Möchten Sie eine Tüte? — Nein, danke.'},
      {de:'Sonst noch etwas?', hi:'die Verkäuferin fragt, ob du noch etwas willst', bsp:'Sonst noch etwas? — Nein, das ist alles.'},
      {de:'Nein, danke, das ist alles.', hi:'so beendest du die Bestellung', bsp:'Nein, danke, das ist alles.'},
      {de:'Wo finde ich Zucker?', hi:'die Frage nach dem Regal', bsp:'Entschuldigung, wo finde ich Zucker?'},
      {de:'Das ist im Angebot.', hi:'im Angebot heißt: diese Woche billiger', bsp:'Der Käse ist heute im Angebot.'},
      {de:'Das ist zu teuer.', hi:'zu heißt: mehr als du willst', bsp:'Vier Euro? Das ist zu teuer.'},
      {de:'Das ist günstig.', hi:'freundlicher als billig', bsp:'Ein Euro fünfzig — das ist günstig.'},
      {de:'an der Kasse', hi:'da bezahlst du', bsp:'Ich warte an der Kasse.'},
      {de:'der Kassenzettel', hi:'brauchst du beim Umtauschen', bsp:'Kann ich den Kassenzettel haben?'},
      {de:'Einen Moment, bitte.', hi:'wenn du Zeit brauchst', bsp:'Einen Moment, bitte. Ich suche mein Geld.'},
      {de:'Ich möchte bitte zahlen.', hi:'auch im Café und im Restaurant', bsp:'Ich möchte bitte zahlen.'}
    ],
    gram: [
      {t:'Die Ja-/Nein-Frage: Verb auf Platz 1', e:'Bei einer Frage ohne Fragewort steht das Verb ganz vorne. Danach kommt die Person. Die Antwort ist ja oder nein.', bsp:['Haben Sie Brot?','Kostet das vier Euro?','Möchten Sie eine Tüte?']},
      {t:'ein und eine: einer von vielen', e:'ein und eine benutzt du, wenn die Sache neu ist oder egal ist. Bei der-Wörtern und es-Wörtern heißt es ein, bei die-Wörtern eine.', bsp:['Das ist ein Apfel.','Das ist eine Tomate.','Das ist ein Ei.']},
      {t:'Nach möchte wird ein zu einen', e:'Bei der-Wörtern wird ein nach möchte, brauche oder nehme zu einen. Lerne das erst einmal als festen Satz. Warum das so ist, kommt in Lektion 6.', bsp:['Ich möchte einen Kaffee.','Ich brauche einen Beutel.','Ich nehme einen Apfel.']},
      {t:'kein: es gibt nichts davon', e:'kein ist das Gegenteil von ein. Es sieht fast genauso aus: kein Brot, keine Milch, keine Eier. Im Plural steht immer keine.', bsp:['Wir haben kein Brot.','Ich habe keine Zeit.','Es gibt keine Eier mehr.']},
      {t:'Der Plural', e:'Es gibt mehrere Plural-Endungen. Die häufigsten sind -e, -en, -er und -s. Manchmal kommt ein Umlaut dazu. Lerne den Plural immer mit dem Wort zusammen.', bsp:['der Apfel — die Äpfel','die Tomate — die Tomaten','das Ei — die Eier','das Handy — die Handys']},
      {t:'möchte: höflich sagen, was du willst', e:'möchte ist das höflichste Wort beim Einkaufen. Bei ich und er/sie steht möchte ohne Endung. Das zweite Verb, wenn eins kommt, steht am Ende.', bsp:['ich möchte — du möchtest — er möchte','wir möchten — ihr möchtet — Sie möchten','Ich möchte bitte zahlen.']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich möchte ___ Flasche Wasser.', l:'eine', e:'die Flasche ist ein die-Wort, deshalb eine.'},
      {typ:'luecke', f:'Ich brauche ___ Beutel für die Äpfel.', l:'einen', e:'der Beutel ist ein der-Wort. Nach brauche wird ein zu einen.'},
      {typ:'luecke', f:'Tut mir leid, wir haben ___ Milch mehr.', l:'keine', e:'die Milch ist ein die-Wort, deshalb keine. kein ist das Gegenteil von ein.'},
      {typ:'luecke', f:'Ich habe ___ Zeit, ich muss zur Arbeit.', l:'keine', e:'die Zeit ist ein die-Wort: keine Zeit. Der Satz kommt im Alltag jeden Tag.'},
      {typ:'luecke', f:'Was ___ die Äpfel?', l:'kosten', e:'Die Äpfel sind mehrere, deshalb kosten mit -en.'},
      {typ:'luecke', f:'___ Sie Kartoffeln?', l:'Haben', e:'Frage ohne Fragewort: das Verb steht ganz vorne.'},
      {typ:'artikel', w:'Apfel', l:'der', e:'der Apfel, Plural die Äpfel — mit Umlaut.'},
      {typ:'artikel', w:'Milch', l:'die', e:'die Milch. Milch gibt es nur im Singular.'},
      {typ:'artikel', w:'Brot', l:'das', e:'das Brot, Plural die Brote.'},
      {typ:'bausteine', l:'Ich möchte ein Kilo Tomaten.', teile:['Ich','möchte','ein','Kilo','Tomaten'], e:'Nach der Menge kommt die Ware ohne Artikel: ein Kilo Tomaten.'},
      {typ:'bausteine', l:'Haben Sie noch frisches Brot?', teile:['Haben','Sie','noch','frisches','Brot'], e:'Ja-/Nein-Frage: Haben steht vorne, dann Sie.'},
      {typ:'paare', p:[['eine Flasche','Wasser'],['eine Packung','Reis'],['ein Becher','Joghurt'],['200 Gramm','Käse'],['ein Kilo','Kartoffeln']], e:'Die Menge gehört zur Ware. Lerne beides zusammen, dann klingt es sofort richtig.'},
      {typ:'hoeren', text:'Das macht sieben Euro achtzig. Zahlen Sie mit Karte oder in bar?', f:'Wie viel musst du bezahlen?', o:['7,08 Euro','7,80 Euro','17,80 Euro'], l:1, e:'sieben Euro achtzig sind 7,80 Euro. Der zweite Teil sind immer die Cent.'},
      {typ:'hoeren', text:'Tut mir leid, wir haben heute keine Eier. Morgen wieder.', f:'Was gibt es heute nicht?', o:['Eier','Milch','Brot'], l:0, e:'Nach keine kommt die Ware, die fehlt: keine Eier.'},
      {typ:'wahl', f:'Die Verkäuferin fragt: Sonst noch etwas? Du willst nichts mehr. Was sagst du?', o:['Ja, bitte.','Nein, danke, das ist alles.','Wie bitte?'], l:1, e:'Das ist die feste Antwort. Mit danke bleibt es freundlich.'},
      {typ:'sprechen', f:'Sag deine Bestellung: Ich möchte ein Kilo Kartoffeln und 200 Gramm Käse, bitte.', l:'Ich möchte', e:'Ein bitte am Ende macht jede Bestellung höflich. Sprich die Menge deutlich.'},
      {typ:'uebersetzen', f:'How much does that cost?', l:'Was kostet das?', e:'Für eine Sache: Was kostet das? Für mehrere: Was kosten die?'},
      {typ:'ordnen', l:['Guten Tag, was möchten Sie?','Ich möchte 300 Gramm Käse, bitte.','Sonst noch etwas?','Nein, danke, das ist alles.','Das macht 4,20 Euro.'], f:'Bring das Gespräch an der Käsetheke in die richtige Reihenfolge.', e:'Begrüßung, Bestellung, Nachfrage, Abschluss, Preis — so läuft es in jedem Laden.'}
    ],
    dialog: {
      ort: 'Du bist an der Käse- und Wursttheke im Supermarkt. Der Verkäufer, Herr Özdemir, ist dran.',
      schritte: [
        {amanda:'Guten Tag! Was darf es sein?', hinweis:'Bestelle etwas mit einer Menge.', beispiel:'Guten Tag! Ich möchte 200 Gramm Käse, bitte.', redemittel:['Ich möchte …','Ich nehme …','Haben Sie …?']},
        {amanda:'Gern. Welchen Käse möchten Sie? Wir haben Gouda und Emmentaler.', hinweis:'Wähle einen und frag nach dem Preis.', beispiel:'Gouda, bitte. Was kostet der?', redemittel:['… , bitte.','Was kostet …?','Ist der im Angebot?']},
        {amanda:'Der Gouda kostet zwei Euro neunzig für hundert Gramm. Sonst noch etwas?', hinweis:'Bestelle noch eine Sache oder beende die Bestellung.', beispiel:'Ja, und eine Packung Butter, bitte.', redemittel:['Ja, und …','Nein, danke, das ist alles.','Haben Sie auch …?']},
        {amanda:'Butter ist nicht hier, die finden Sie im Kühlregal hinten links. Das macht dann fünf Euro achtzig.', hinweis:'Sag, wie du bezahlst.', beispiel:'Ich zahle mit Karte.', redemittel:['Ich zahle bar.','Mit Karte, bitte.','Einen Moment, bitte.']},
        {amanda:'Danke. Möchten Sie den Kassenzettel?', hinweis:'Antworte höflich mit ja oder nein.', beispiel:'Ja, gern. Vielen Dank!', redemittel:['Ja, gern.','Nein, danke.','Ja, bitte.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe einen Einkaufszettel für das Wochenende. Sechs bis acht Zeilen, immer mit einer Menge.',
      punkte:['Getränke','Obst oder Gemüse','Brot','etwas aus dem Kühlregal','etwas zum Kochen','etwas Süßes'],
      hilfe:'Schreibe so: 1 kg Kartoffeln, 2 Flaschen Wasser, 200 g Käse, 1 Packung Reis. Kurz ist richtig — ein Einkaufszettel ist kein Satz. Denk daran: bei mehreren Sachen brauchst du den Plural, und der ist bei jedem Wort anders.'
    },
    aus: 'Das ü in Tüte, für, günstig und Stück: Lippen wie beim u ganz rund machen, aber innen i sagen. Übe im Wechsel: Tute - Tüte, Stuck - Stück.'
  },

  /* ================= LEKTION 4 ================= */
  {
    nr: 4,
    id: 'wohnung',
    t: 'Meine Wohnung',
    ziel: 'Nach dieser Lektion kannst du: deine Wohnung beschreiben, Zimmer und Möbel benennen, eine Wohnungsanzeige verstehen, beim Vermieter anrufen und sagen, was dir gefällt und was nicht.',
    chunks: [
      {de:'Die Wohnung hat drei Zimmer.', hi:'so beschreibst du die Größe', bsp:'Die Wohnung hat drei Zimmer, Küche und Bad.'},
      {de:'Ich suche eine Wohnung.', hi:'der Satz für Anzeigen, Nachbarn und Ämter', bsp:'Ich suche eine Wohnung für vier Personen.'},
      {de:'Die Küche ist klein, aber hell.', hi:'zwei Adjektive mit aber verbinden', bsp:'Die Küche ist klein, aber hell.'},
      {de:'Das Zimmer ist sehr ruhig.', hi:'ruhig ist bei Wohnungen ein großes Lob', bsp:'Das Schlafzimmer ist sehr ruhig.'},
      {de:'Wie hoch ist die Miete?', hi:'die wichtigste Frage überhaupt', bsp:'Wie hoch ist die Miete?'},
      {de:'Die Miete ist 700 Euro warm.', hi:'warm heißt: mit Heizung und Nebenkosten', bsp:'Die Miete ist 700 Euro warm.'},
      {de:'die Nebenkosten', hi:'Wasser, Müll, Heizung — kommen zur Miete dazu', bsp:'Sind die Nebenkosten inklusive?'},
      {de:'Die Wohnung ist mir zu teuer.', hi:'freundlich absagen', bsp:'Tut mir leid, die Wohnung ist mir zu teuer.'},
      {de:'Ab wann ist die Wohnung frei?', hi:'frei heißt: du kannst einziehen', bsp:'Ab wann ist die Wohnung frei?'},
      {de:'Ich möchte die Wohnung gern ansehen.', hi:'so bekommst du einen Termin', bsp:'Ich möchte die Wohnung gern ansehen.'},
      {de:'der Vermieter und die Vermieterin', hi:'die Person, der die Wohnung gehört', bsp:'Der Vermieter heißt Herr Özdemir.'},
      {de:'Wir wohnen im Erdgeschoss.', hi:'Erdgeschoss ist unten, ohne Treppe', bsp:'Wir wohnen im Erdgeschoss, links.'},
      {de:'Der Aufzug funktioniert nicht.', hi:'ein Satz für den Hausmeister', bsp:'Der Aufzug funktioniert leider nicht.'},
      {de:'die Hausordnung', hi:'die Regeln im Haus: Ruhe, Müll, Treppe', bsp:'Das steht in der Hausordnung.'},
      {de:'die Mülltrennung', hi:'Papier, Gelbe Tonne, Bio, Restmüll — in Deutschland Pflicht', bsp:'Die Mülltrennung ist am Anfang schwer.'},
      {de:'Das Bad hat kein Fenster.', hi:'kein bei Dingen, die fehlen', bsp:'Das Bad hat kein Fenster, nur einen Lüfter.'},
      {de:'Die Nachbarn sind freundlich.', hi:'Nachbarn immer im Plural, wenn es mehrere sind', bsp:'Die Nachbarn sind sehr freundlich.'},
      {de:'Ich brauche noch einen Tisch.', hi:'einen bei der-Wörtern', bsp:'Ich brauche noch einen Tisch und zwei Stühle.'},
      {de:'Der Schrank ist neu.', hi:'Möbel beschreiben mit ist', bsp:'Der Schrank ist neu, das Bett ist alt.'},
      {de:'Ich kaufe die Möbel gebraucht.', hi:'gebraucht ist in Deutschland normal und günstig', bsp:'Ich kaufe die Möbel gebraucht im Internet.'},
      {de:'Wie viele Quadratmeter hat die Wohnung?', hi:'Quadratmeter steht in jeder Anzeige, kurz qm', bsp:'Wie viele Quadratmeter hat die Wohnung?'},
      {de:'die Kaution', hi:'Geld, das du am Anfang gibst und später zurückbekommst', bsp:'Die Kaution sind zwei Monatsmieten.'},
      {de:'Der Balkon ist groß.', hi:'ein Balkon macht jede Anzeige teurer', bsp:'Der Balkon ist groß und liegt nach Süden.'},
      {de:'Das ist perfekt für uns.', hi:'so sagst du zu', bsp:'Das ist perfekt für uns. Wir nehmen die Wohnung.'}
    ],
    gram: [
      {t:'der, die, das', e:'Jedes Nomen hat einen Artikel: der, die oder das. Der Artikel gehört zum Wort — lerne ihn immer mit. Im Plural ist es immer die.', bsp:['der Tisch — die Tische','die Küche — die Küchen','das Bad — die Bäder']},
      {t:'Das Adjektiv nach ist bleibt gleich', e:'Wenn das Adjektiv nach ist steht, bekommt es keine Endung. Das ist die einfachste Stelle für Adjektive im Deutschen.', bsp:['Die Küche ist klein.','Der Balkon ist groß.','Das Zimmer ist hell und ruhig.']},
      {t:'er, es, sie für Dinge', e:'Auch Dinge sind er, es oder sie. Das richtet sich nach dem Artikel: der Tisch wird er, das Bad wird es, die Küche wird sie.', bsp:['Der Tisch ist alt. Er kommt weg.','Das Bad ist klein. Es hat kein Fenster.','Die Küche ist neu. Sie ist sehr hell.']},
      {t:'nicht: wo steht es?', e:'nicht steht meistens hinter dem Verb. Wenn du ein Adjektiv verneinst, steht nicht direkt davor.', bsp:['Der Aufzug funktioniert nicht.','Ich wohne nicht in Leipzig.','Die Wohnung ist nicht teuer.']},
      {t:'kein oder nicht?', e:'kein verneint ein Nomen. nicht verneint alles andere: das Verb, ein Adjektiv oder einen Ort.', bsp:['Das Bad hat kein Fenster.','Die Wohnung ist nicht groß.','Ich habe keine Möbel.']},
      {t:'Komposita: zwei Wörter, ein Wort', e:'Deutsch klebt Wörter zusammen. Das letzte Wort bestimmt den Artikel. schlafen plus Zimmer wird das Schlafzimmer, weil das Zimmer ein es-Wort ist.', bsp:['das Schlafzimmer — schlafen + das Zimmer','die Hausordnung — das Haus + die Ordnung','der Küchentisch — die Küche + der Tisch']}
    ],
    ueb: [
      {typ:'artikel', w:'Küche', l:'die', e:'die Küche. Wörter auf -e sind meistens die-Wörter.'},
      {typ:'artikel', w:'Bad', l:'das', e:'das Bad, Plural die Bäder.'},
      {typ:'artikel', w:'Balkon', l:'der', e:'der Balkon. Betonung hinten: BalKON.'},
      {typ:'artikel', w:'Schrank', l:'der', e:'der Schrank, Plural die Schränke.'},
      {typ:'artikel', w:'Wohnung', l:'die', e:'die Wohnung. Wörter auf -ung sind immer die-Wörter — eine Regel, die immer stimmt.'},
      {typ:'luecke', f:'Der Tisch ist alt. ___ kommt weg.', l:'Er', e:'der Tisch wird er.'},
      {typ:'luecke', f:'Die Küche ist neu. ___ ist sehr hell.', l:'Sie', e:'die Küche wird sie.'},
      {typ:'luecke', f:'Der Aufzug funktioniert ___.', l:'nicht', e:'nicht verneint das Verb und steht dahinter.'},
      {typ:'luecke', f:'Das Bad hat ___ Fenster.', l:'kein', e:'das Fenster ist ein es-Wort, deshalb kein. Vor einem Nomen steht kein, nicht nicht.'},
      {typ:'luecke', f:'Die Wohnung ist ___ teuer, nur 480 Euro.', l:'nicht', e:'teuer ist ein Adjektiv, deshalb nicht davor.'},
      {typ:'bausteine', l:'Die Wohnung hat drei Zimmer und einen Balkon.', teile:['Die','Wohnung','hat','drei','Zimmer','und','einen','Balkon'], e:'Nach hat wird der Balkon zu einen Balkon.'},
      {typ:'bausteine', l:'Das Zimmer ist klein, aber hell.', teile:['Das','Zimmer','ist','klein,','aber','hell'], e:'Nach ist bleiben die Adjektive ohne Endung. aber verbindet sie.'},
      {typ:'paare', p:[['das Schlafzimmer','da steht das Bett'],['die Küche','da kochst du'],['das Bad','da ist die Dusche'],['der Balkon','da sitzt du draußen'],['der Keller','da steht dein Fahrrad']], e:'Jedes Zimmer hat seine Aufgabe. Über die Aufgabe merkst du dir das Wort besser als über eine Liste.'},
      {typ:'hoeren', text:'Die Wohnung hat zwei Zimmer, 54 Quadratmeter, und kostet 620 Euro warm. Sie ist ab dem ersten August frei.', f:'Wie viel kostet die Wohnung?', o:['540 Euro','620 Euro warm','620 Euro kalt'], l:1, e:'Sie sagt 620 Euro warm. warm heißt: Nebenkosten sind dabei.'},
      {typ:'hoeren', text:'Guten Tag, ich rufe wegen der Anzeige an. Ist die Wohnung noch frei?', f:'Was möchte die Person?', o:['die Wohnung kündigen','wissen, ob die Wohnung frei ist','die Miete bezahlen'], l:1, e:'Sie fragt: Ist die Wohnung noch frei? Das ist der erste Satz bei jedem Anruf zur Anzeige.'},
      {typ:'wahl', f:'die Haus + ordnung — welcher Artikel gilt für das ganze Wort?', o:['der Hausordnung','die Hausordnung','das Hausordnung'], l:1, e:'Das letzte Wort bestimmt: die Ordnung, also die Hausordnung.'},
      {typ:'sprechen', f:'Beschreibe deine Wohnung: Meine Wohnung hat … Zimmer. Die Küche ist … Das Bad ist …', l:'Meine Wohnung hat', e:'Erst die Zahl der Zimmer, dann ein Adjektiv pro Zimmer. Mehr braucht am Anfang niemand.'},
      {typ:'uebersetzen', f:'The kitchen is small but bright.', l:'Die Küche ist klein, aber hell.', e:'Nach ist bekommen die Adjektive keine Endung. Vor aber steht im Deutschen ein Komma.'}
    ],
    dialog: {
      ort: 'Du hast eine Wohnungsanzeige im Internet gefunden: 2 Zimmer, 58 qm, 590 Euro warm. Du rufst den Vermieter an.',
      schritte: [
        {amanda:'Özdemir, guten Tag?', hinweis:'Sag deinen Namen und warum du anrufst.', beispiel:'Guten Tag, mein Name ist Amina Haddad. Ich rufe wegen der Anzeige an.', redemittel:['Mein Name ist … Ich rufe wegen der Anzeige an.','Guten Tag, hier spricht …','Ist die Wohnung noch frei?']},
        {amanda:'Ja, die Wohnung ist noch frei. Für wie viele Personen suchen Sie?', hinweis:'Sag, wie viele Personen einziehen.', beispiel:'Für drei Personen: mein Mann, mein Sohn und ich.', redemittel:['Für … Personen.','Ich suche für mich allein.','Wir sind … Personen.']},
        {amanda:'Gut. Die Wohnung hat zwei Zimmer, Küche und Bad, und einen kleinen Balkon.', hinweis:'Frag nach der Miete oder nach den Nebenkosten.', beispiel:'Und wie hoch ist die Miete?', redemittel:['Wie hoch ist die Miete?','Sind die Nebenkosten inklusive?','Wie hoch ist die Kaution?']},
        {amanda:'590 Euro warm, die Nebenkosten sind also dabei. Die Kaution sind zwei Monatsmieten.', hinweis:'Frag, wann du die Wohnung sehen kannst.', beispiel:'Das ist in Ordnung. Ich möchte die Wohnung gern ansehen.', redemittel:['Ich möchte die Wohnung gern ansehen.','Wann kann ich kommen?','Ab wann ist die Wohnung frei?']},
        {amanda:'Passt Ihnen Donnerstag um 17 Uhr?', hinweis:'Sag ja und wiederhole den Termin, damit nichts schiefgeht.', beispiel:'Ja, Donnerstag um 17 Uhr ist gut. Vielen Dank!', redemittel:['Ja, das passt.','Donnerstag um 17 Uhr, gut.','Tut mir leid, da arbeite ich.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe eine kurze Suchanzeige für eine Wohnung. Fünf bis sechs Zeilen.',
      punkte:['Wer sucht? (Personen)','Wie viele Zimmer?','In welcher Stadt oder in welchem Stadtteil?','Wie viel Miete ist möglich?','Ab wann?','Telefonnummer'],
      hilfe:'Anzeigen sind kurz. So geht es: Familie mit einem Kind sucht 3-Zimmer-Wohnung in Leipzig, bis 750 Euro warm, ab 1. September. Telefon 0176 … Achte auf die Zusammensetzungen: 3-Zimmer-Wohnung schreibt man mit Bindestrichen.'
    },
    aus: 'Der ch-Laut: In ich, Küche und Küchentisch klingt ch leise und weich, weit vorn im Mund. In Buch, Nachbar und auch klingt ch tief hinten. Übe im Wechsel: ich - auch, Küche - Buch.'
  },
  /* ================= LEKTION 5 ================= */
  {
    nr: 5,
    id: 'tag',
    t: 'Mein Tag',
    ziel: 'Nach dieser Lektion kannst du: die Uhrzeit sagen und verstehen, deinen Tagesablauf erzählen, die Wochentage nennen, nach Terminen fragen und sagen, wann du Zeit hast.',
    chunks: [
      {de:'Wie spät ist es?', hi:'die Frage nach der Uhrzeit', bsp:'Entschuldigung, wie spät ist es?'},
      {de:'Es ist Viertel nach sieben.', hi:'7:15 — Viertel nach heißt 15 Minuten später', bsp:'Es ist Viertel nach sieben, ich muss los.'},
      {de:'Es ist halb acht.', hi:'7:30 — Achtung: halb acht ist vor acht, nicht nach acht', bsp:'Es ist halb acht. Der Kurs fängt gleich an.'},
      {de:'Es ist Viertel vor neun.', hi:'8:45', bsp:'Es ist Viertel vor neun.'},
      {de:'Ich stehe um sechs Uhr auf.', hi:'aufstehen — auf geht ans Satzende', bsp:'Ich stehe um sechs Uhr auf.'},
      {de:'Ich frühstücke um halb sieben.', hi:'frühstücken ist ein Verb, kein Nomen', bsp:'Ich frühstücke um halb sieben mit den Kindern.'},
      {de:'Wann fängt der Kurs an?', hi:'anfangen — an geht ans Ende', bsp:'Wann fängt der Kurs an? — Um acht.'},
      {de:'Der Kurs fängt um acht Uhr an.', hi:'die Antwort mit um', bsp:'Der Kurs fängt um acht Uhr an und dauert bis zwölf.'},
      {de:'von acht bis zwölf Uhr', hi:'von … bis … für einen Zeitraum', bsp:'Ich habe Kurs von acht bis zwölf Uhr.'},
      {de:'Ich bringe die Kinder in die Kita.', hi:'der Alltagssatz vieler Eltern', bsp:'Um sieben bringe ich die Kinder in die Kita.'},
      {de:'Ich kaufe noch schnell ein.', hi:'einkaufen — ein geht ans Ende', bsp:'Nach dem Kurs kaufe ich noch schnell ein.'},
      {de:'Ich räume die Küche auf.', hi:'aufräumen — auf geht ans Ende', bsp:'Abends räume ich die Küche auf.'},
      {de:'Ich rufe meine Mutter an.', hi:'anrufen — an geht ans Ende', bsp:'Am Sonntag rufe ich meine Mutter an.'},
      {de:'Ich sehe abends fern.', hi:'fernsehen — fern geht ans Ende', bsp:'Ich sehe abends eine Stunde fern.'},
      {de:'Am Montag habe ich Deutschkurs.', hi:'am plus Wochentag', bsp:'Am Montag und am Mittwoch habe ich Deutschkurs.'},
      {de:'am Wochenende', hi:'Samstag und Sonntag zusammen', bsp:'Am Wochenende schlafe ich lange.'},
      {de:'Wann hast du Zeit?', hi:'so machst du einen Termin', bsp:'Wann hast du Zeit? Am Freitag?'},
      {de:'Ich habe keine Zeit.', hi:'freundliche Absage', bsp:'Heute habe ich leider keine Zeit.'},
      {de:'Ich gehe um zehn ins Bett.', hi:'ins Bett gehen — feste Wendung', bsp:'Ich gehe um zehn ins Bett, ich bin müde.'},
      {de:'Ich bin müde.', hi:'sagst du sehr oft im ersten Jahr', bsp:'Ich bin müde, der Tag war lang.'},
      {de:'Ich esse um zwölf Mittag.', hi:'essen: ich esse, du isst, er isst', bsp:'Ich esse um zwölf Mittag in der Kantine.'},
      {de:'Ich schlafe sieben Stunden.', hi:'schlafen: ich schlafe, du schläfst, er schläft', bsp:'Ich schlafe nur sieben Stunden.'},
      {de:'Ich bin immer pünktlich.', hi:'pünktlich sein ist in Deutschland wichtig', bsp:'Ich bin immer pünktlich, meistens fünf Minuten früher.'},
      {de:'Der Termin ist am Dienstag um 9 Uhr.', hi:'am für den Tag, um für die Uhrzeit', bsp:'Der Termin ist am Dienstag um 9 Uhr.'}
    ],
    gram: [
      {t:'Trennbare Verben: der Anfang geht ans Ende', e:'Manche Verben haben einen Teil vorne, der sich löst: aufstehen, anfangen, einkaufen, anrufen, aufräumen, fernsehen. Im Satz steht der Rest auf Platz 2 und der kleine Teil ganz am Ende.', bsp:['Ich stehe um sechs auf.','Der Kurs fängt um acht an.','Ich rufe meine Mutter an.']},
      {t:'Die Satzklammer', e:'Das Verb auf Platz 2 und der kleine Teil am Ende sind wie zwei Klammern. Alles andere steht in der Mitte. Wenn du das siehst, verstehst du plötzlich sehr viele Sätze.', bsp:['Ich kaufe nach dem Kurs im Supermarkt ein.','Wir räumen am Samstag die Wohnung auf.']},
      {t:'Der Vokal wechselt bei du und er', e:'Ein paar Verben ändern ihren Vokal bei du und er/sie/es. Bei ich und im Plural bleibt alles normal.', bsp:['essen: ich esse — du isst — er isst','schlafen: ich schlafe — du schläfst — er schläft','fernsehen: ich sehe fern — du siehst fern — er sieht fern']},
      {t:'um: die Uhrzeit', e:'Vor einer Uhrzeit steht um. Vor einem Wochentag steht am. Vor einem Zeitraum steht von … bis.', bsp:['um acht Uhr','am Montag','von acht bis zwölf Uhr']},
      {t:'Die Uhrzeit im Alltag', e:'Im Gespräch sagst du Viertel nach, halb und Viertel vor. Vorsicht bei halb: halb acht ist 7:30, also eine halbe Stunde vor acht. Bei Terminen und im Radio hörst du oft die offizielle Form: 19:30 Uhr.', bsp:['7:15 — Viertel nach sieben','7:30 — halb acht','7:45 — Viertel vor acht','19:30 — neunzehn Uhr dreißig']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich ___ jeden Tag um sechs Uhr ___.', l:'stehe auf', e:'aufstehen ist trennbar: stehe auf Platz 2, auf ans Ende.'},
      {typ:'luecke', f:'Der Kurs ___ um acht Uhr ___.', l:'fängt an', e:'anfangen ist trennbar. Und der Vokal wechselt: er fängt.'},
      {typ:'luecke', f:'___ du am Freitag Zeit?', l:'Hast', e:'Frage ohne Fragewort: das Verb steht vorne.'},
      {typ:'luecke', f:'Yusuf ___ jeden Abend eine Stunde fern.', l:'sieht', e:'fernsehen wechselt den Vokal: ich sehe, aber er sieht.'},
      {typ:'luecke', f:'Ich habe Kurs ___ acht ___ zwölf Uhr.', l:'von bis', e:'Ein Zeitraum bekommt von … bis.'},
      {typ:'luecke', f:'___ Montag habe ich Deutschkurs.', l:'Am', e:'Vor einem Wochentag steht am: am Montag.'},
      {typ:'wahl', f:'Es ist halb acht. Wie viel Uhr ist es?', o:['8:30','7:30','7:00'], l:1, e:'halb acht heißt: eine halbe Stunde vor acht, also 7:30. Das ist anders als in vielen Sprachen.'},
      {typ:'wahl', f:'Es ist 16:45. Was sagst du im Gespräch?', o:['Viertel nach vier','Viertel vor fünf','halb fünf'], l:1, e:'45 Minuten heißt: Viertel vor der nächsten Stunde, also Viertel vor fünf.'},
      {typ:'bausteine', l:'Ich rufe am Sonntag meine Mutter an.', teile:['Ich','rufe','am','Sonntag','meine','Mutter','an'], e:'rufe auf Platz 2, an ganz am Ende — alles andere steht dazwischen.'},
      {typ:'bausteine', l:'Wann fängt der Deutschkurs an?', teile:['Wann','fängt','der','Deutschkurs','an'], e:'In der W-Frage steht auch der kleine Teil am Ende: an.'},
      {typ:'bausteine', l:'Am Samstag räumen wir die Wohnung auf.', teile:['Am','Samstag','räumen','wir','die','Wohnung','auf'], e:'Wenn Am Samstag vorne steht, kommt das Verb sofort danach und wir erst dahinter.'},
      {typ:'paare', p:[['7:15','Viertel nach sieben'],['7:30','halb acht'],['7:45','Viertel vor acht'],['8:00','acht Uhr'],['12:30','halb eins']], e:'Halb zeigt immer auf die nächste Stunde. Wenn du das einmal drin hast, sitzt die ganze Uhr.'},
      {typ:'hoeren', text:'Guten Morgen, der Kurs beginnt heute erst um halb zehn, nicht um neun.', f:'Wann beginnt der Kurs heute?', o:['um 9:00','um 9:30','um 10:30'], l:1, e:'halb zehn ist 9:30. Der Kurs fängt also eine halbe Stunde später an.'},
      {typ:'hoeren', text:'Ich stehe um fünf auf, bringe die Kinder um sieben in die Kita und fange um acht mit der Arbeit an.', f:'Wann bringt die Person die Kinder in die Kita?', o:['um fünf','um sieben','um acht'], l:1, e:'Drei Uhrzeiten in einem Satz — höre auf das Wort direkt nach um.'},
      {typ:'ordnen', l:['Ich stehe um sechs Uhr auf.','Ich frühstücke und bringe die Kinder in die Kita.','Von acht bis zwölf habe ich Deutschkurs.','Nachmittags kaufe ich ein und räume auf.','Um zehn gehe ich ins Bett.'], f:'Bring den Tagesablauf in die richtige Reihenfolge.', e:'Morgen, Vormittag, Nachmittag, Abend — mehr Ordnung braucht ein Tagesablauf nicht.'},
      {typ:'sprechen', f:'Erzähl deinen Morgen: Ich stehe um … auf. Dann frühstücke ich. Um … fängt … an.', l:'Ich stehe um', e:'Denk an das kleine auf am Ende. Genau daran erkennt man, wer die Satzklammer kann.'},
      {typ:'uebersetzen', f:'When does the course start?', l:'Wann fängt der Kurs an?', e:'anfangen ist trennbar, deshalb steht an am Ende. Auch beginnen geht: Wann beginnt der Kurs?'},
      {typ:'artikel', w:'Uhr', l:'die', e:'die Uhr. In der Zeitangabe steht Uhr ohne Artikel: um acht Uhr.'}
    ],
    dialog: {
      ort: 'Nach dem Kurs. Olena möchte mit dir zusammen für den Test lernen und sucht einen Termin.',
      schritte: [
        {amanda:'Sag mal, hast du diese Woche Zeit? Ich möchte zusammen lernen.', hinweis:'Sag ja und frag nach dem Tag.', beispiel:'Ja, gern! Wann hast du Zeit?', redemittel:['Ja, gern!','Wann hast du Zeit?','Diese Woche ist schwierig.']},
        {amanda:'Am Mittwoch? Vormittags habe ich Kurs, aber nachmittags bin ich frei.', hinweis:'Sag, ob Mittwoch passt, und nenne eine Uhrzeit.', beispiel:'Mittwoch passt. Um drei Uhr?', redemittel:['Mittwoch passt.','Um … Uhr?','Am Mittwoch kann ich nicht.']},
        {amanda:'Drei ist zu früh, da hole ich meine Tochter von der Schule ab. Geht auch halb fünf?', hinweis:'Sag ja oder nenne eine andere Uhrzeit.', beispiel:'Halb fünf ist gut. Von halb fünf bis sechs?', redemittel:['Halb fünf ist gut.','Ja, das passt mir.','Lieber um fünf.']},
        {amanda:'Perfekt. Und wo? Bei mir zu Hause oder in der Bibliothek?', hinweis:'Wähle einen Ort.', beispiel:'In der Bibliothek, da ist es ruhig.', redemittel:['In der Bibliothek.','Bei dir, wenn das geht.','Das ist mir gleich.']},
        {amanda:'Gut, Bibliothek, Mittwoch, halb fünf. Bist du pünktlich?', hinweis:'Antworte und bestätige den Termin.', beispiel:'Ja, ich bin immer pünktlich. Bis Mittwoch!', redemittel:['Ja, immer.','Ich versuche es.','Bis Mittwoch!']}
      ]
    },
    schreiben: {
      auf: 'Schreibe deinen Tagesablauf. Sechs bis acht Sätze, jeder Satz mit einer Uhrzeit.',
      punkte:['Wann stehst du auf?','Was machst du am Morgen?','Wann hast du Kurs oder Arbeit? Von wann bis wann?','Was machst du am Nachmittag?','Was machst du am Abend?','Wann gehst du ins Bett?'],
      hilfe:'Benutze mindestens drei trennbare Verben: aufstehen, einkaufen, aufräumen, anrufen, fernsehen. Denk daran, den kleinen Teil ans Satzende zu setzen. Nach um kommt die Uhrzeit, nach am der Wochentag, und für Zeiträume nimm von … bis.'
    },
    aus: 'Der Wortakzent bei trennbaren Verben liegt immer vorn auf dem kleinen Teil: ÁUFstehen, ÁNfangen, ÉINkaufen, FÉRNsehen. Sprich diesen Teil deutlich lauter, dann klingt es sofort deutsch.'
  },

  /* ================= LEKTION 6 ================= */
  {
    nr: 6,
    id: 'freizeit',
    t: 'Freizeit',
    ziel: 'Nach dieser Lektion kannst du: dich mit jemandem verabreden, eine Einladung annehmen oder absagen, im Café und im Restaurant etwas bestellen, bezahlen und über deine Hobbys sprechen.',
    chunks: [
      {de:'Hast du am Samstag Zeit?', hi:'so fängt jede Verabredung an', bsp:'Hast du am Samstag Zeit?'},
      {de:'Gehen wir ins Kino?', hi:'ein Vorschlag als Frage', bsp:'Gehen wir am Freitag ins Kino?'},
      {de:'Das ist eine gute Idee.', hi:'freundlich zustimmen', bsp:'Ins Kino? Das ist eine gute Idee.'},
      {de:'Ich hole dich ab.', hi:'abholen — ab geht ans Ende', bsp:'Ich hole dich um sieben ab.'},
      {de:'Treffen wir uns um sieben?', hi:'sich treffen — eine feste Wendung', bsp:'Treffen wir uns um sieben am Bahnhof?'},
      {de:'Leider habe ich keine Zeit.', hi:'höfliche Absage — leider hilft immer', bsp:'Leider habe ich am Samstag keine Zeit.'},
      {de:'Schade! Vielleicht nächste Woche.', hi:'so bleibt die Tür offen', bsp:'Schade! Vielleicht nächste Woche.'},
      {de:'Ich möchte bitte bestellen.', hi:'so rufst du im Restaurant die Bedienung', bsp:'Entschuldigung, ich möchte bitte bestellen.'},
      {de:'Die Speisekarte, bitte.', hi:'die Karte mit dem Essen', bsp:'Die Speisekarte, bitte.'},
      {de:'Ich nehme einen Kaffee.', hi:'nehmen ist das normale Wort beim Bestellen', bsp:'Ich nehme einen Kaffee und ein Wasser.'},
      {de:'Ich nehme die Suppe.', hi:'die Suppe bleibt die — nur der wird zu den', bsp:'Ich nehme die Suppe und einen Salat.'},
      {de:'Was möchten Sie trinken?', hi:'die Frage der Bedienung', bsp:'Was möchten Sie trinken?'},
      {de:'Ein Glas Wasser, bitte.', hi:'Wasser gibt es in Deutschland nicht automatisch gratis', bsp:'Ein Glas Wasser, bitte.'},
      {de:'Zusammen oder getrennt?', hi:'die Frage beim Bezahlen', bsp:'Zusammen oder getrennt? — Getrennt, bitte.'},
      {de:'Getrennt, bitte.', hi:'jeder zahlt selbst — in Deutschland völlig normal', bsp:'Getrennt, bitte.'},
      {de:'Stimmt so.', hi:'du gibst Trinkgeld und willst kein Wechselgeld', bsp:'Zwölf Euro? Stimmt so.'},
      {de:'Das Essen war sehr gut.', hi:'ein Lob am Ende', bsp:'Danke, das Essen war sehr gut.'},
      {de:'Guten Appetit!', hi:'sagt man vor dem Essen, immer', bsp:'Guten Appetit! — Danke, gleichfalls.'},
      {de:'Ich habe Hunger.', hi:'ohne Artikel: Hunger haben', bsp:'Ich habe Hunger. Gehen wir essen?'},
      {de:'Ich spiele gern Fußball.', hi:'gern zeigt, dass du es magst', bsp:'Ich spiele gern Fußball, am Sonntag im Park.'},
      {de:'Ich lese ein Buch.', hi:'lesen: ich lese, du liest, er liest', bsp:'Abends lese ich ein Buch.'},
      {de:'Ich fahre Fahrrad.', hi:'fahren: ich fahre, du fährst, er fährt', bsp:'Im Sommer fahre ich jeden Tag Fahrrad.'},
      {de:'Ich mache einen Spaziergang.', hi:'einen, weil der Spaziergang ein der-Wort ist', bsp:'Am Sonntag mache ich einen Spaziergang.'},
      {de:'Bis Samstag!', hi:'der Abschied nach einer Verabredung', bsp:'Alles klar, bis Samstag!'}
    ],
    gram: [
      {t:'Der Akkusativ: nur der ändert sich', e:'Viele Verben brauchen ein zweites Wort: Ich nehme etwas. Dieses Wort steht im Akkusativ. Die gute Nachricht: Nur bei der-Wörtern ändert sich etwas. der wird den, ein wird einen, mein wird meinen. die und das bleiben gleich.', bsp:['der Kaffee — Ich nehme den Kaffee.','die Suppe — Ich nehme die Suppe.','das Bier — Ich nehme das Bier.']},
      {t:'ein wird einen', e:'Genau dasselbe passiert bei ein, kein und mein: Bei der-Wörtern kommt -en dazu. Bei die-Wörtern und es-Wörtern bleibt alles, wie es ist.', bsp:['Ich möchte einen Salat.','Ich möchte eine Suppe.','Ich möchte ein Wasser.','Ich habe keinen Hunger.']},
      {t:'Welche Verben brauchen den Akkusativ?', e:'Sehr viele: nehmen, möchten, haben, brauchen, kaufen, essen, trinken, lesen, machen, holen. Wenn du fragen kannst wen oder was, dann ist es Akkusativ.', bsp:['Ich brauche einen Stift.','Ich trinke einen Tee.','Ich lese einen Krimi.']},
      {t:'doch: die Antwort auf eine negative Frage', e:'Wenn die Frage ein nicht oder kein enthält und du widersprichst, sagst du doch statt ja. Das ist ein kleines Wort mit großer Wirkung.', bsp:['Hast du keinen Hunger? — Doch, ich habe Hunger!','Kommst du nicht mit? — Doch, natürlich!']},
      {t:'nehmen, lesen, fahren', e:'Auch diese drei wechseln den Vokal bei du und er/sie/es. Sie kommen im Alltag ständig vor, deshalb lohnt sich das Lernen sofort.', bsp:['nehmen: ich nehme — du nimmst — er nimmt','lesen: ich lese — du liest — er liest','fahren: ich fahre — du fährst — er fährt']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich nehme ___ Kaffee und ___ Wasser.', l:'einen ein', e:'der Kaffee wird zu einen Kaffee. das Wasser bleibt ein Wasser.'},
      {typ:'luecke', f:'Ich möchte ___ Suppe, bitte.', l:'eine', e:'die Suppe bleibt im Akkusativ eine Suppe — bei die-Wörtern ändert sich nichts.'},
      {typ:'luecke', f:'Ich brauche ___ Stift.', l:'einen', e:'der Stift wird zu einen Stift.'},
      {typ:'luecke', f:'Yusuf ___ jeden Sonntag Fahrrad.', l:'fährt', e:'fahren wechselt den Vokal: ich fahre, aber er fährt.'},
      {typ:'luecke', f:'Was ___ du, den Fisch oder das Schnitzel?', l:'nimmst', e:'nehmen wird bei du zu nimmst — kurz und mit i.'},
      {typ:'luecke', f:'Hast du keinen Hunger? — ___, ich habe großen Hunger!', l:'Doch', e:'Die Frage hat ein kein. Wenn du widersprichst, sagst du doch.'},
      {typ:'wahl', f:'Die Bedienung fragt: Zusammen oder getrennt? Jeder möchte selbst bezahlen. Was sagst du?', o:['Zusammen, bitte.','Getrennt, bitte.','Stimmt so.'], l:1, e:'getrennt heißt: jeder zahlt sein Essen. Das ist in Deutschland ganz normal.'},
      {typ:'wahl', f:'Olena fragt: Gehen wir ins Kino? Du kannst nicht. Was ist am höflichsten?', o:['Nein.','Leider habe ich keine Zeit. Vielleicht nächste Woche?','Ich will nicht.'], l:1, e:'leider plus ein neuer Vorschlag — so sagst du ab, ohne jemanden zu verletzen.'},
      {typ:'bausteine', l:'Ich nehme einen Salat und ein Wasser.', teile:['Ich','nehme','einen','Salat','und','ein','Wasser'], e:'der Salat wird einen Salat, das Wasser bleibt ein Wasser.'},
      {typ:'bausteine', l:'Ich hole dich um sieben Uhr ab.', teile:['Ich','hole','dich','um','sieben','Uhr','ab'], e:'abholen ist trennbar: hole auf Platz 2, ab am Ende.'},
      {typ:'bausteine', l:'Treffen wir uns am Bahnhof?', teile:['Treffen','wir','uns','am','Bahnhof'], e:'Ein Vorschlag als Frage: das Verb steht vorne. uns gehört fest zu treffen.'},
      {typ:'paare', p:[['Guten Appetit!','Danke, gleichfalls.'],['Zusammen oder getrennt?','Getrennt, bitte.'],['Was möchten Sie trinken?','Ein Glas Wasser, bitte.'],['Hast du am Samstag Zeit?','Ja, ab vier bin ich frei.'],['Schade!','Vielleicht nächste Woche.']], e:'Frage und Antwort gehören im Alltag als Paar zusammen. So lernst du beide Seiten.'},
      {typ:'hoeren', text:'Und für Sie? — Ich nehme die Tomatensuppe und danach das Schnitzel mit Salat.', f:'Was bestellt die Person zuerst?', o:['einen Salat','die Tomatensuppe','das Schnitzel'], l:1, e:'Zuerst kommt die Suppe, danach das Schnitzel. Das Wort danach zeigt die Reihenfolge.'},
      {typ:'hoeren', text:'Tut mir leid, am Samstag kann ich nicht. Aber am Sonntag habe ich Zeit.', f:'Wann hat die Person Zeit?', o:['am Samstag','am Sonntag','gar nicht'], l:1, e:'Nach aber kommt die gute Nachricht: am Sonntag.'},
      {typ:'ordnen', l:['Guten Abend, möchten Sie schon bestellen?','Ja, ich nehme die Suppe und einen Salat.','Und was möchten Sie trinken?','Ein Glas Wasser, bitte.','Vielen Dank. Guten Appetit!'], f:'Bring das Gespräch im Restaurant in die richtige Reihenfolge.', e:'Erst das Essen, dann das Getränk, am Ende Guten Appetit — so läuft es fast immer.'},
      {typ:'sprechen', f:'Bestelle: Ich nehme einen Salat, eine Suppe und ein Wasser, bitte.', l:'Ich nehme', e:'Achte auf einen, eine, ein. Das sind die drei Formen, die du beim Bestellen brauchst.'},
      {typ:'uebersetzen', f:'I would like a coffee, please.', l:'Ich möchte einen Kaffee, bitte.', e:'der Kaffee wird nach möchte zu einen Kaffee. Das bitte gehört im Deutschen dazu.'},
      {typ:'artikel', w:'Speisekarte', l:'die', e:'die Speisekarte, aus die Karte. Das letzte Wort bestimmt den Artikel.'}
    ],
    dialog: {
      ort: 'Freitagabend im Café. Du sitzt mit Yusuf am Tisch, die Bedienung kommt.',
      schritte: [
        {amanda:'Guten Abend! Möchten Sie schon bestellen?', hinweis:'Bestelle ein Getränk oder frag nach der Karte.', beispiel:'Guten Abend! Die Speisekarte, bitte.', redemittel:['Die Speisekarte, bitte.','Ja, ich nehme …','Einen Moment noch, bitte.']},
        {amanda:'Bitte schön. Möchten Sie schon etwas trinken?', hinweis:'Bestelle ein Getränk mit einen, eine oder ein.', beispiel:'Ja, ich nehme einen Apfelsaft.', redemittel:['Ich nehme einen …','Ein Glas Wasser, bitte.','Für mich einen Tee.']},
        {amanda:'Gern. Und zu essen?', hinweis:'Bestelle etwas zu essen.', beispiel:'Ich nehme die Suppe und einen Salat.', redemittel:['Ich nehme …','Ich möchte …','Was können Sie empfehlen?']},
        {amanda:'Sehr gern. Guten Appetit!', hinweis:'Antworte höflich.', beispiel:'Danke, gleichfalls!', redemittel:['Danke!','Danke, gleichfalls.','Vielen Dank.']},
        {amanda:'Hat es geschmeckt? Möchten Sie zahlen? Zusammen oder getrennt?', hinweis:'Lobe das Essen und sag, wie du zahlst.', beispiel:'Es war sehr gut, danke. Getrennt, bitte.', redemittel:['Das Essen war sehr gut.','Getrennt, bitte.','Zusammen, bitte.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe Olena eine kurze Nachricht und verabrede dich mit ihr.',
      punkte:['Begrüßung','Was möchtest du machen?','Wann? Tag und Uhrzeit','Wo treffen ihr euch?','Frage am Ende und Gruß'],
      hilfe:'Eine Nachricht darf kurz sein: Hallo Olena, gehen wir am Samstag ins Kino? Der Film fängt um 20 Uhr an. Treffen wir uns um halb acht am Kino? Schreib mir. Liebe Grüße, Amina. Achte auf am beim Tag und um bei der Uhrzeit.'
    },
    aus: 'Satzmelodie: Bei einer Frage geht die Stimme am Ende nach oben (Gehen wir ins Kino?). Bei einem Aussagesatz geht sie nach unten (Ich nehme einen Kaffee.). Übe denselben Satz einmal als Frage und einmal als Aussage.'
  },
  /* ================= LEKTION 7 ================= */
  {
    nr: 7,
    id: 'schule',
    t: 'Kinder und Schule',
    ziel: 'Nach dieser Lektion kannst du: über deine Kinder und ihre Schule sprechen, einen Kita-Platz und einen Termin bei der Lehrerin erfragen, dein Kind krankmelden und erzählen, was schon passiert ist.',
    chunks: [
      {de:'Mein Sohn geht in die Kita.', hi:'die Kita ist der Kindergarten', bsp:'Mein Sohn geht seit März in die Kita.'},
      {de:'Ich brauche einen Kita-Platz.', hi:'Plätze sind knapp — dieser Satz ist wichtig', bsp:'Ich brauche einen Kita-Platz für meine Tochter.'},
      {de:'Ich habe mein Kind angemeldet.', hi:'anmelden im Perfekt: habe … angemeldet', bsp:'Ich habe mein Kind schon im Januar angemeldet.'},
      {de:'Meine Tochter ist in der zweiten Klasse.', hi:'die Klasse ist die Schulstufe', bsp:'Meine Tochter ist in der zweiten Klasse.'},
      {de:'die Grundschule', hi:'Klasse 1 bis 4, für alle Kinder', bsp:'Die Grundschule ist gleich um die Ecke.'},
      {de:'die Klassenlehrerin', hi:'die wichtigste Person für dein Kind', bsp:'Die Klassenlehrerin heißt Frau Berger.'},
      {de:'der Elternabend', hi:'ein Abend für alle Eltern, meistens zweimal im Jahr', bsp:'Am Dienstag ist Elternabend um 19 Uhr.'},
      {de:'Ich bin zum Elternabend gegangen.', hi:'gehen im Perfekt mit sein: bin … gegangen', bsp:'Ich bin gestern zum Elternabend gegangen.'},
      {de:'die Hausaufgaben machen', hi:'immer Plural: die Hausaufgaben', bsp:'Mein Sohn macht seine Hausaufgaben allein.'},
      {de:'das Zeugnis', hi:'kommt zweimal im Jahr, mit Noten von 1 bis 6', bsp:'Das Zeugnis kommt vor den Ferien.'},
      {de:'Sie hat eine Zwei bekommen.', hi:'Note 1 ist die beste, Note 6 die schlechteste', bsp:'In Mathe hat sie eine Zwei bekommen.'},
      {de:'Mein Sohn kann schon lesen.', hi:'können plus Verb am Ende', bsp:'Mein Sohn kann schon lesen und schreiben.'},
      {de:'Er will Fußball spielen.', hi:'wollen plus Verb am Ende', bsp:'Er will nach der Schule Fußball spielen.'},
      {de:'Ich möchte mit der Lehrerin sprechen.', hi:'der höfliche Anfang im Sekretariat', bsp:'Guten Tag, ich möchte mit der Lehrerin sprechen.'},
      {de:'Ich möchte einen Termin machen.', hi:'Termin machen — eine der wichtigsten Wendungen in Deutschland', bsp:'Ich möchte einen Termin machen, bitte.'},
      {de:'Mein Kind ist krank und kommt heute nicht.', hi:'so meldest du dein Kind telefonisch ab', bsp:'Mein Kind ist krank und kommt heute nicht.'},
      {de:'Ich habe eine Entschuldigung geschrieben.', hi:'ein kurzer Zettel für die Schule', bsp:'Ich habe eine Entschuldigung geschrieben.'},
      {de:'Wie war es in der Schule?', hi:'die Frage am Nachmittag', bsp:'Wie war es heute in der Schule?'},
      {de:'Wir sind nach Deutschland gekommen.', hi:'kommen im Perfekt mit sein', bsp:'Wir sind vor zwei Jahren nach Deutschland gekommen.'},
      {de:'Er hat Deutsch gelernt.', hi:'lernen im Perfekt mit haben', bsp:'Er hat sehr schnell Deutsch gelernt.'},
      {de:'die Ferien', hi:'nur Plural, sechs Wochen im Sommer', bsp:'In den Ferien fahren wir zu meinen Eltern.'},
      {de:'der Schulweg', hi:'der Weg von zu Hause zur Schule', bsp:'Der Schulweg ist zehn Minuten zu Fuß.'},
      {de:'die Schultüte', hi:'eine große bunte Tüte am ersten Schultag', bsp:'Am ersten Schultag gibt es eine Schultüte.'},
      {de:'Können Sie das bitte wiederholen?', hi:'im Gespräch mit der Schule oft nötig', bsp:'Können Sie das bitte wiederholen? Langsam?'}
    ],
    gram: [
      {t:'können und wollen', e:'Modalverben stehen auf Platz 2. Das zweite Verb geht ans Satzende und bleibt im Infinitiv. Bei ich und er/sie/es haben Modalverben keine Endung.', bsp:['ich kann — du kannst — er kann','ich will — du willst — er will','Mein Sohn kann schon lesen.']},
      {t:'Die Klammer beim Modalverb', e:'Wie bei den trennbaren Verben entsteht eine Klammer: Modalverb auf Platz 2, Infinitiv am Ende, alles andere in der Mitte.', bsp:['Ich kann heute nicht zum Elternabend kommen.','Er will nach der Schule Fußball spielen.']},
      {t:'Das Perfekt mit haben', e:'Über Vergangenes sprichst du mit dem Perfekt. Du brauchst zwei Teile: haben auf Platz 2 und das Partizip am Ende. Bei regelmäßigen Verben ist das Partizip ge- plus Stamm plus -t.', bsp:['lernen: Ich habe Deutsch gelernt.','machen: Er hat die Hausaufgaben gemacht.','anmelden: Ich habe mein Kind angemeldet.']},
      {t:'Das Perfekt mit sein', e:'Verben der Bewegung und der Veränderung nehmen sein statt haben: gehen, kommen, fahren, fliegen, bleiben. Das Partizip endet oft auf -en.', bsp:['gehen: Ich bin zum Elternabend gegangen.','kommen: Wir sind nach Deutschland gekommen.','fahren: Sie ist mit dem Bus gefahren.']},
      {t:'Unregelmäßige Partizipien', e:'Viele wichtige Verben haben ein unregelmäßiges Partizip. Lerne sie in drei Teilen: Infinitiv, haben oder sein, Partizip.', bsp:['sprechen — hat gesprochen','schreiben — hat geschrieben','bekommen — hat bekommen','sein — ist gewesen']}
    ],
    ueb: [
      {typ:'luecke', f:'Mein Sohn ___ schon lesen.', l:'kann', e:'Bei er hat können keine Endung: er kann. Das Verb lesen steht am Ende.'},
      {typ:'luecke', f:'Ich ___ heute nicht zum Elternabend kommen.', l:'kann', e:'Auch bei ich ohne Endung: ich kann. kommen bleibt am Satzende.'},
      {typ:'luecke', f:'Wir ___ vor zwei Jahren nach Deutschland ___.', l:'sind gekommen', e:'kommen ist eine Bewegung, deshalb Perfekt mit sein: sind gekommen.'},
      {typ:'luecke', f:'Ich ___ mein Kind schon im Januar ___.', l:'habe angemeldet', e:'anmelden ist trennbar: das ge- steht in der Mitte — angemeldet. Und es geht mit haben.'},
      {typ:'luecke', f:'Er ___ sehr schnell Deutsch ___.', l:'hat gelernt', e:'lernen ist regelmäßig: ge- plus lern plus -t. Perfekt mit haben.'},
      {typ:'luecke', f:'Meine Tochter ___ eine Zwei ___.', l:'hat bekommen', e:'bekommen bekommt kein ge-. Das Partizip ist gleich wie der Infinitiv: bekommen.'},
      {typ:'wahl', f:'Welches Verb bildet das Perfekt mit sein?', o:['lernen','fahren','machen'], l:1, e:'fahren ist eine Bewegung: Ich bin gefahren. lernen und machen nehmen haben.'},
      {typ:'wahl', f:'Note 1 in Deutschland heißt:', o:['sehr gut','ausreichend','schlecht'], l:0, e:'Die Skala geht von 1 (sehr gut) bis 6 (nicht ausreichend). Anders als in vielen Ländern ist die kleine Zahl die gute.'},
      {typ:'bausteine', l:'Ich habe mein Kind in der Kita angemeldet.', teile:['Ich','habe','mein','Kind','in','der','Kita','angemeldet'], e:'habe auf Platz 2, das Partizip angemeldet ganz am Ende.'},
      {typ:'bausteine', l:'Ich bin gestern zum Elternabend gegangen.', teile:['Ich','bin','gestern','zum','Elternabend','gegangen'], e:'gehen nimmt sein. Das Partizip gegangen steht am Ende.'},
      {typ:'bausteine', l:'Er will nach der Schule Fußball spielen.', teile:['Er','will','nach','der','Schule','Fußball','spielen'], e:'will auf Platz 2, spielen am Ende — die Modalverb-Klammer.'},
      {typ:'paare', p:[['lernen','hat gelernt'],['machen','hat gemacht'],['gehen','ist gegangen'],['kommen','ist gekommen'],['schreiben','hat geschrieben'],['sprechen','hat gesprochen']], e:'Lerne jedes Verb mit haben oder sein zusammen. Getrennt gelernt vergisst man die Hälfte.'},
      {typ:'hoeren', text:'Guten Morgen, Frau Berger. Mein Sohn Karim ist krank, er hat Fieber. Er kommt heute nicht in die Schule.', f:'Warum ruft die Mutter an?', o:['Sie möchte einen Termin.','Ihr Sohn ist krank.','Sie fragt nach den Hausaufgaben.'], l:1, e:'Sie sagt: ist krank, hat Fieber, kommt heute nicht. Das ist eine Krankmeldung.'},
      {typ:'hoeren', text:'Am Dienstag um 19 Uhr ist Elternabend im Klassenzimmer 2b. Bitte kommen Sie pünktlich.', f:'Wann ist der Elternabend?', o:['Montag um 19 Uhr','Dienstag um 19 Uhr','Dienstag um 9 Uhr'], l:1, e:'Höre auf den Tag und dann auf die Uhrzeit: Dienstag, 19 Uhr.'},
      {typ:'sprechen', f:'Erzähl von deinem Kind: Mein Sohn ist … Jahre alt. Er geht in … Er kann schon …', l:'Mein Sohn ist', e:'Erst Alter, dann Kita oder Schule, dann eine Fähigkeit. Bei kann steht das zweite Verb am Ende.'},
      {typ:'uebersetzen', f:'I would like to make an appointment with the teacher.', l:'Ich möchte einen Termin mit der Lehrerin machen.', e:'einen Termin machen ist eine feste Wendung. machen steht am Ende, weil möchte auf Platz 2 steht.'},
      {typ:'ordnen', l:['Guten Tag, Sekretariat der Grundschule Süd.','Guten Tag, mein Name ist Amina Haddad.','Ich möchte einen Termin mit Frau Berger machen.','Geht es am Donnerstag um 15 Uhr?','Ja, das passt. Vielen Dank!'], f:'Bring das Telefongespräch in die richtige Reihenfolge.', e:'Erst meldet sich die Schule, dann nennst du deinen Namen, dann dein Anliegen, dann der Termin.'},
      {typ:'artikel', w:'Zeugnis', l:'das', e:'das Zeugnis, Plural die Zeugnisse.'}
    ],
    dialog: {
      ort: 'Du hast einen Termin bei Frau Berger, der Klassenlehrerin deiner Tochter. Sie holt dich am Klassenzimmer ab.',
      schritte: [
        {amanda:'Guten Tag, Frau Haddad, kommen Sie herein. Wie geht es Ihnen?', hinweis:'Begrüße sie und antworte kurz.', beispiel:'Guten Tag, Frau Berger. Danke, gut. Und Ihnen?', redemittel:['Danke, gut. Und Ihnen?','Danke, es geht.','Guten Tag, Frau Berger.']},
        {amanda:'Danke, auch gut. Lina macht sich sehr gut in Mathe. Wie ist es zu Hause mit den Hausaufgaben?', hinweis:'Erzähl, wie es zu Hause läuft. Du kannst das Perfekt benutzen.', beispiel:'Sie macht die Hausaufgaben allein. Gestern hat sie zwei Stunden gearbeitet.', redemittel:['Sie macht die Hausaufgaben …','Gestern hat sie …','Das ist manchmal schwer.']},
        {amanda:'Sehr gut. Beim Lesen braucht sie noch Übung. Können Sie zu Hause mit ihr lesen?', hinweis:'Antworte mit können. Sag, was möglich ist.', beispiel:'Ja, ich kann jeden Abend zwanzig Minuten mit ihr lesen.', redemittel:['Ja, ich kann …','Das ist schwierig, weil …','Mein Mann kann …']},
        {amanda:'Wunderbar. Noch etwas: Am Dienstag ist Elternabend. Kommen Sie?', hinweis:'Sag zu oder ab, mit Grund.', beispiel:'Ja, ich komme gern. Um wie viel Uhr fängt er an?', redemittel:['Ja, ich komme gern.','Leider kann ich nicht, ich arbeite.','Um wie viel Uhr fängt er an?']},
        {amanda:'Um 19 Uhr, hier im Klassenzimmer. Haben Sie noch Fragen?', hinweis:'Stelle eine Frage oder bedanke dich.', beispiel:'Ja, eine Frage: Wann kommt das Zeugnis?', redemittel:['Ja, eine Frage: …','Nein, vielen Dank.','Können Sie das bitte wiederholen?']}
      ]
    },
    schreiben: {
      auf: 'Schreibe eine Entschuldigung für die Schule. Dein Kind war zwei Tage krank.',
      punkte:['Anrede: Sehr geehrte Frau Berger,','Name des Kindes und Klasse','Was war? (krank, Fieber)','Welche Tage?','Gruß und Unterschrift'],
      hilfe:'So kann es aussehen: Sehr geehrte Frau Berger, meine Tochter Lina Haddad, Klasse 2b, war am Montag und Dienstag krank. Sie hatte Fieber. Bitte entschuldigen Sie ihr Fehlen. Mit freundlichen Grüßen, Amina Haddad. Nach der Anrede steht ein Komma, und danach geht es klein weiter.'
    },
    aus: 'Der lange und kurze Vokal im Partizip: gegangen und gekommen haben kurze Vokale, gelernt und gemacht auch. Aber gelesen und geschrieben haben ein langes e und i. Ein einzelner Konsonant nach dem Vokal heißt oft: lang sprechen.'
  },

  /* ================= LEKTION 8 ================= */
  {
    nr: 8,
    id: 'beruf',
    t: 'Beruf und Arbeit',
    ziel: 'Nach dieser Lektion kannst du: deinen Beruf nennen, über deine Arbeit und deine Arbeitszeiten sprechen, sagen was du früher gemacht hast, und im Gespräch nach einer Stelle fragen.',
    chunks: [
      {de:'Ich bin Krankenpflegerin.', hi:'Beruf ohne Artikel: Ich bin Lehrer, Ich bin Fahrerin', bsp:'Ich bin Krankenpflegerin und arbeite im Altenheim.'},
      {de:'Ich arbeite als Fahrer.', hi:'als, wenn du die Tätigkeit betonst', bsp:'Zurzeit arbeite ich als Fahrer.'},
      {de:'Ich arbeite bei der Post.', hi:'bei plus Firma oder Arbeitgeber', bsp:'Ich arbeite bei der Post in Halle.'},
      {de:'Ich arbeite seit zwei Jahren in Deutschland.', hi:'seit plus Zeit: es läuft noch', bsp:'Ich arbeite seit zwei Jahren in Deutschland.'},
      {de:'Vor drei Jahren war ich Lehrer in Syrien.', hi:'vor plus Zeit: es ist vorbei', bsp:'Vor drei Jahren war ich Lehrer in Syrien.'},
      {de:'Ich suche eine Arbeit.', hi:'Arbeit oder Stelle — beides geht', bsp:'Ich suche eine Arbeit in Teilzeit.'},
      {de:'Ich habe eine Stelle gefunden.', hi:'finden im Perfekt: habe gefunden', bsp:'Ich habe eine Stelle im Lager gefunden.'},
      {de:'Ich arbeite in Vollzeit.', hi:'meistens 38 bis 40 Stunden pro Woche', bsp:'Ich arbeite in Vollzeit, 40 Stunden.'},
      {de:'Ich arbeite in Teilzeit.', hi:'weniger Stunden, oft wegen der Kinder', bsp:'Ich arbeite in Teilzeit, 20 Stunden pro Woche.'},
      {de:'Ich habe Frühschicht.', hi:'Schichten: Frühschicht, Spätschicht, Nachtschicht', bsp:'Diese Woche habe ich Frühschicht, ab sechs Uhr.'},
      {de:'mein Chef und meine Chefin', hi:'die Person über dir', bsp:'Mein Chef heißt Herr Özdemir.'},
      {de:'meine Kollegin und mein Kollege', hi:'die Leute, mit denen du arbeitest', bsp:'Meine Kollegin hilft mir viel.'},
      {de:'Ich verdiene 14 Euro pro Stunde.', hi:'verdienen ist das Wort für Geld für Arbeit', bsp:'Ich verdiene 14 Euro pro Stunde, brutto.'},
      {de:'Ich hatte in Syrien einen guten Job.', hi:'hatte ist die Vergangenheit von haben', bsp:'Ich hatte in Syrien einen guten Job.'},
      {de:'Ich möchte mein Zeugnis anerkennen lassen.', hi:'sehr wichtig für viele Berufe in Deutschland', bsp:'Ich möchte mein Zeugnis anerkennen lassen.'},
      {de:'das Praktikum', hi:'kurze Arbeit zum Lernen, oft der erste Schritt', bsp:'Ich mache ein Praktikum in einer Küche.'},
      {de:'Ich schreibe eine Bewerbung.', hi:'Bewerbung: Brief plus Lebenslauf plus Zeugnisse', bsp:'Ich schreibe eine Bewerbung für die Stelle.'},
      {de:'das Vorstellungsgespräch', hi:'das Gespräch mit der Firma', bsp:'Am Montag habe ich ein Vorstellungsgespräch.'},
      {de:'Ich habe eine Arbeitserlaubnis.', hi:'ohne Arbeitserlaubnis geht in Deutschland nichts', bsp:'Ja, ich habe eine Arbeitserlaubnis.'},
      {de:'Wie viele Stunden arbeiten Sie?', hi:'die Frage nach der Arbeitszeit', bsp:'Wie viele Stunden arbeiten Sie pro Woche?'},
      {de:'Ich mache oft Überstunden.', hi:'mehr arbeiten als im Vertrag', bsp:'Im Winter mache ich oft Überstunden.'},
      {de:'Ich habe morgen frei.', hi:'frei haben heißt: kein Arbeitstag', bsp:'Ich habe morgen frei, wir können uns treffen.'},
      {de:'Ich möchte Urlaub nehmen.', hi:'Urlaub nehmen — feste Wendung', bsp:'Im August möchte ich Urlaub nehmen.'},
      {de:'Ich bin für die Küche zuständig.', hi:'zuständig sein für — im Beruf sehr nützlich', bsp:'Ich bin für die Küche und die Bestellungen zuständig.'}
    ],
    gram: [
      {t:'-in macht die weibliche Form', e:'Fast jeder Beruf hat eine weibliche Form mit -in. Manchmal kommt ein Umlaut dazu. Im Plural steht -innen.', bsp:['der Lehrer — die Lehrerin','der Fahrer — die Fahrerin','der Arzt — die Ärztin','die Kolleginnen']},
      {t:'Beruf ohne Artikel', e:'Wenn du deinen Beruf nennst, steht kein Artikel davor. Das ist anders als im Englischen. Mit als betonst du die Tätigkeit.', bsp:['Ich bin Lehrer.','Sie ist Krankenpflegerin.','Ich arbeite als Fahrer.']},
      {t:'bei, als, für', e:'bei nennt die Firma. als nennt die Tätigkeit. für nennt den Bereich oder die Person.', bsp:['Ich arbeite bei Aldi.','Ich arbeite als Fahrerin.','Ich bin für die Küche zuständig.']},
      {t:'seit und vor', e:'seit heißt: es hat angefangen und läuft noch. vor heißt: es ist vorbei. Beide stehen mit einer Zeitangabe.', bsp:['Ich wohne seit zwei Jahren in Leipzig.','Vor zwei Jahren bin ich gekommen.','Ich arbeite seit Mai bei der Post.']},
      {t:'war und hatte', e:'Bei sein und haben benutzt man für die Vergangenheit nicht das Perfekt, sondern war und hatte. Das klingt besser und ist kürzer.', bsp:['ich war — du warst — er war — wir waren','ich hatte — du hattest — er hatte — wir hatten','Ich war Lehrer. Ich hatte einen guten Job.']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich bin Lehrer. Meine Frau ist ___.', l:'Lehrerin', e:'Die weibliche Form bekommt -in: die Lehrerin.'},
      {typ:'luecke', f:'Ich arbeite ___ Fahrer bei einer Spedition.', l:'als', e:'als nennt die Tätigkeit, bei nennt die Firma.'},
      {typ:'luecke', f:'Ich arbeite ___ der Post.', l:'bei', e:'bei plus Arbeitgeber: bei der Post, bei Aldi, bei Siemens.'},
      {typ:'luecke', f:'Ich wohne ___ zwei Jahren in Leipzig.', l:'seit', e:'seit heißt: es läuft noch. Die Zeit steht im Dativ: seit zwei Jahren.'},
      {typ:'luecke', f:'___ drei Jahren war ich in Syrien.', l:'Vor', e:'vor heißt: es ist vorbei. Danach passt war sehr gut.'},
      {typ:'luecke', f:'Früher ___ ich Lehrer und ___ einen guten Job.', l:'war hatte', e:'Bei sein und haben nimmt man in der Vergangenheit war und hatte, nicht das Perfekt.'},
      {typ:'wahl', f:'Was sagst du, wenn du deinen Beruf nennst?', o:['Ich bin ein Fahrer.','Ich bin Fahrer.','Ich bin der Fahrer.'], l:1, e:'Beim Beruf steht im Deutschen kein Artikel: Ich bin Fahrer.'},
      {typ:'wahl', f:'Du arbeitest von 6 bis 14 Uhr. Welche Schicht ist das?', o:['Frühschicht','Spätschicht','Nachtschicht'], l:0, e:'Die Frühschicht fängt sehr früh an, meistens um sechs.'},
      {typ:'bausteine', l:'Ich arbeite seit einem Jahr als Pflegerin.', teile:['Ich','arbeite','seit','einem','Jahr','als','Pflegerin'], e:'seit für die Zeit, als für die Tätigkeit — zwei Präpositionen in einem Satz.'},
      {typ:'bausteine', l:'Vor drei Jahren war ich Lehrer in Syrien.', teile:['Vor','drei','Jahren','war','ich','Lehrer','in','Syrien'], e:'Wenn Vor drei Jahren vorne steht, kommt das Verb war sofort danach.'},
      {typ:'bausteine', l:'Ich habe eine Stelle im Lager gefunden.', teile:['Ich','habe','eine','Stelle','im','Lager','gefunden'], e:'Perfekt mit haben: habe auf Platz 2, gefunden am Ende.'},
      {typ:'paare', p:[['der Arzt','die Ärztin'],['der Verkäufer','die Verkäuferin'],['der Koch','die Köchin'],['der Krankenpfleger','die Krankenpflegerin'],['der Kollege','die Kollegin']], e:'Meistens reicht -in. Bei Arzt und Koch kommt ein Umlaut dazu.'},
      {typ:'hoeren', text:'Ich arbeite seit acht Monaten bei einer Reinigungsfirma, in Teilzeit, zwanzig Stunden pro Woche.', f:'Wie viel arbeitet die Person?', o:['acht Stunden','zwanzig Stunden pro Woche','vierzig Stunden pro Woche'], l:1, e:'acht Monate ist die Dauer, zwanzig Stunden ist die Arbeitszeit. Nicht verwechseln.'},
      {typ:'hoeren', text:'Und was haben Sie in Ihrem Heimatland gemacht? — Ich war Elektriker, zehn Jahre.', f:'Was war die Person früher?', o:['Fahrer','Elektriker','Lehrer'], l:1, e:'Er sagt Ich war Elektriker. war zeigt: das ist vorbei.'},
      {typ:'sprechen', f:'Sag drei Sätze: Ich bin … Ich arbeite seit … bei … Früher war ich …', l:'Ich bin', e:'Beruf ohne Artikel, seit für jetzt, war für früher. Genau diese drei Sätze braucht jedes Vorstellungsgespräch.'},
      {typ:'uebersetzen', f:'I have been working here for two years.', l:'Ich arbeite seit zwei Jahren hier.', e:'Deutsch nimmt hier das Präsens plus seit. Eine Vergangenheitsform wäre falsch.'},
      {typ:'ordnen', l:['Guten Tag, ich habe Ihre Anzeige gelesen.','Ich suche eine Stelle als Küchenhilfe.','Ich habe zwei Jahre in einer Kantine gearbeitet.','Ich habe eine Arbeitserlaubnis.','Wann kann ich zu einem Gespräch kommen?'], f:'Bring das Bewerbungsgespräch am Telefon in die richtige Reihenfolge.', e:'Erst der Anlass, dann der Wunsch, dann die Erfahrung, dann die Formalien, am Ende die Bitte um einen Termin.'},
      {typ:'artikel', w:'Arbeit', l:'die', e:'die Arbeit. Auch die Arbeitserlaubnis und die Arbeitszeit — der erste Teil ändert nichts, der letzte entscheidet.'}
    ],
    dialog: {
      ort: 'Du bist beim Jobcenter. Frau Berger ist deine Beraterin und schaut in deine Unterlagen.',
      schritte: [
        {amanda:'Guten Tag, setzen Sie sich. Erzählen Sie mir: Was haben Sie in Ihrem Heimatland gearbeitet?', hinweis:'Sag deinen früheren Beruf mit war.', beispiel:'Ich war Elektriker. Ich habe zehn Jahre in einer Firma gearbeitet.', redemittel:['Ich war …','Ich habe als … gearbeitet.','Ich hatte eine kleine Firma.']},
        {amanda:'Und haben Sie Zeugnisse dabei?', hinweis:'Antworte und frag nach der Anerkennung.', beispiel:'Ja, hier sind meine Zeugnisse. Ich möchte sie anerkennen lassen.', redemittel:['Ja, hier sind meine Zeugnisse.','Nein, sie sind noch in Syrien.','Ich möchte sie anerkennen lassen.']},
        {amanda:'Gut. Wie viele Stunden können Sie arbeiten? Sie haben zwei kleine Kinder.', hinweis:'Sag, wie viel du arbeiten kannst. Benutze können.', beispiel:'Ich kann in Teilzeit arbeiten, etwa zwanzig Stunden pro Woche.', redemittel:['Ich kann … Stunden arbeiten.','In Vollzeit, kein Problem.','Nur vormittags, wegen der Kita.']},
        {amanda:'Verstehe. Und wie ist Ihr Deutsch? Der Betrieb spricht nur Deutsch.', hinweis:'Beschreibe dein Deutsch ehrlich.', beispiel:'Ich lerne seit einem Jahr Deutsch. Ich verstehe schon viel, aber ich spreche noch langsam.', redemittel:['Ich lerne seit … Deutsch.','Ich spreche ein bisschen.','Ich mache gerade den A1-Kurs.']},
        {amanda:'Das ist völlig in Ordnung. Ich habe hier eine Stelle als Lagerhelfer, Frühschicht. Interessiert Sie das?', hinweis:'Sag zu und frag etwas Konkretes.', beispiel:'Ja, das interessiert mich. Wie viel verdiene ich pro Stunde?', redemittel:['Ja, das interessiert mich.','Wie viel verdiene ich pro Stunde?','Wann fängt die Schicht an?']}
      ]
    },
    schreiben: {
      auf: 'Schreibe einen kurzen Lebenslauf in Stichpunkten. Nur die Zeilen, keine ganzen Sätze.',
      punkte:['Name, Geburtsdatum, Adresse, Telefon','Schule und Ausbildung mit Jahren','Berufserfahrung mit Jahren und Firma','Sprachen mit Niveau','Führerschein ja oder nein'],
      hilfe:'Ein deutscher Lebenslauf ist eine Liste, kein Text. So sieht eine Zeile aus: 2015 bis 2022: Elektriker, Firma Nour, Damaskus. Bei Sprachen schreibst du: Arabisch (Muttersprache), Deutsch (A1), Englisch (gut). Ganz oben stehen Name und Kontakt.'
    },
    aus: 'Wortakzent in langen Wörtern: der Ton liegt auf dem ersten Teil. ÁRbeitserlaubnis, VÓRstellungsgespräch, KRÁNkenpflegerin, ÜBERstunden. Sprich den ersten Teil kräftig, den Rest ruhig.'
  },
  /* ================= LEKTION 9 ================= */
  {
    nr: 9,
    id: 'amt',
    t: 'Ämter und Behörden',
    ziel: 'Nach dieser Lektion kannst du: einen Termin beim Bürgeramt machen, dich anmelden, Formulare verstehen und ausfüllen, Anweisungen auf Sie verstehen und um Hilfe bitten, wenn du einen Brief nicht verstehst.',
    chunks: [
      {de:'Ich muss mich anmelden.', hi:'Anmeldung beim Bürgeramt: Pflicht in den ersten 14 Tagen', bsp:'Ich bin neu in Leipzig, ich muss mich anmelden.'},
      {de:'das Bürgeramt', hi:'auch Einwohnermeldeamt oder Bürgerbüro', bsp:'Wo ist hier das Bürgeramt?'},
      {de:'Ich möchte einen Termin buchen.', hi:'fast alle Ämter arbeiten nur mit Termin', bsp:'Ich möchte online einen Termin buchen.'},
      {de:'Ich habe einen Termin um 10 Uhr.', hi:'sag das am Empfang', bsp:'Guten Tag, ich habe einen Termin um 10 Uhr.'},
      {de:'Ziehen Sie bitte eine Wartenummer.', hi:'ein Zettel mit einer Nummer, dann warten', bsp:'Ziehen Sie bitte eine Wartenummer.'},
      {de:'Nehmen Sie bitte Platz.', hi:'höflich für: Setzen Sie sich', bsp:'Nehmen Sie bitte Platz, ich rufe Sie auf.'},
      {de:'Füllen Sie bitte das Formular aus.', hi:'ausfüllen — aus geht ans Ende', bsp:'Füllen Sie bitte das Formular aus.'},
      {de:'Unterschreiben Sie hier, bitte.', hi:'die Unterschrift ist dein Name mit Hand', bsp:'Unterschreiben Sie hier unten, bitte.'},
      {de:'Bringen Sie Ihren Pass mit.', hi:'mitbringen — mit geht ans Ende', bsp:'Bringen Sie Ihren Pass und den Mietvertrag mit.'},
      {de:'Ich brauche eine Meldebescheinigung.', hi:'das Papier, das zeigt, wo du wohnst', bsp:'Ich brauche eine Meldebescheinigung für die Bank.'},
      {de:'Welche Unterlagen brauche ich?', hi:'immer vorher fragen — spart einen zweiten Termin', bsp:'Welche Unterlagen brauche ich für den Antrag?'},
      {de:'Man muss einen Termin machen.', hi:'man heißt: alle Leute, jeder', bsp:'Man muss vorher einen Termin machen.'},
      {de:'Hier darf man nicht rauchen.', hi:'dürfen heißt: es ist erlaubt oder verboten', bsp:'Hier darf man nicht rauchen.'},
      {de:'Ich habe einen Brief vom Jobcenter bekommen.', hi:'Briefe von Ämtern kommen oft und sind schwer', bsp:'Ich habe einen Brief vom Jobcenter bekommen.'},
      {de:'Ich verstehe den Brief nicht.', hi:'ganz normal — sag es ruhig', bsp:'Entschuldigung, ich verstehe den Brief nicht.'},
      {de:'Können Sie mir bitte helfen?', hi:'der wichtigste Satz beim Amt', bsp:'Können Sie mir bitte helfen?'},
      {de:'Sprechen Sie bitte langsam.', hi:'du darfst das jederzeit sagen', bsp:'Sprechen Sie bitte langsam, ich lerne noch Deutsch.'},
      {de:'Können Sie das bitte wiederholen?', hi:'besser als nur nicken', bsp:'Können Sie das bitte wiederholen?'},
      {de:'die Ausländerbehörde', hi:'für Aufenthalt und Visum', bsp:'Der Termin ist bei der Ausländerbehörde.'},
      {de:'die Aufenthaltserlaubnis', hi:'die Erlaubnis, in Deutschland zu bleiben', bsp:'Meine Aufenthaltserlaubnis gilt bis 2028.'},
      {de:'die Krankenkasse', hi:'Krankenversicherung — in Deutschland Pflicht', bsp:'Bei welcher Krankenkasse sind Sie?'},
      {de:'die Steuer-Identifikationsnummer', hi:'kurz Steuer-ID, brauchst du für die Arbeit', bsp:'Der Arbeitgeber braucht meine Steuer-ID.'},
      {de:'Ich möchte ein Konto eröffnen.', hi:'bei der Sparkasse oder einer anderen Bank', bsp:'Ich möchte ein Konto eröffnen.'},
      {de:'Der Antrag ist fertig.', hi:'ein gutes Gefühl', bsp:'Der Antrag ist fertig, hier ist meine Unterschrift.'}
    ],
    gram: [
      {t:'müssen: es ist notwendig', e:'müssen sagt: es geht nicht anders. Wie bei allen Modalverben steht das zweite Verb am Ende. Bei ich und er/sie/es gibt es keine Endung.', bsp:['ich muss — du musst — er muss','wir müssen — ihr müsst — sie müssen','Ich muss zum Bürgeramt gehen.']},
      {t:'dürfen: es ist erlaubt', e:'dürfen sagt: du hast die Erlaubnis. Mit nicht wird daraus ein Verbot. Verwechsle es nicht mit können, das die Fähigkeit meint.', bsp:['ich darf — du darfst — er darf','Hier darf man nicht parken.','Darf ich hier sitzen?']},
      {t:'man: alle Leute', e:'man ist keine bestimmte Person, sondern jeder. Das Verb steht wie bei er/sie/es. Man benutzt es für Regeln und für allgemeine Sätze.', bsp:['Man muss einen Termin machen.','Hier darf man nicht rauchen.','Wie sagt man das auf Deutsch?']},
      {t:'Der Imperativ mit Sie', e:'Bei Anweisungen an Sie steht das Verb vorne und Sie direkt dahinter. Ein bitte macht es höflich. Genau so klingen alle Ämter und Formulare.', bsp:['Füllen Sie bitte das Formular aus.','Unterschreiben Sie hier.','Nehmen Sie bitte Platz.','Kommen Sie herein!']},
      {t:'Trennbare Verben im Imperativ', e:'Der kleine Teil geht auch hier ans Ende. Deshalb hörst du beim Amt sehr oft ein Wörtchen ganz am Schluss: aus, mit, an.', bsp:['Füllen Sie das Formular aus.','Bringen Sie Ihren Pass mit.','Rufen Sie morgen noch einmal an.']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich ___ mich innerhalb von 14 Tagen anmelden.', l:'muss', e:'muss ohne Endung bei ich. Das Verb anmelden steht am Ende.'},
      {typ:'luecke', f:'Hier ___ man nicht rauchen.', l:'darf', e:'dürfen plus nicht ist ein Verbot. Bei man steht darf.'},
      {typ:'luecke', f:'___ muss vorher einen Termin machen.', l:'Man', e:'man heißt: alle Leute. Das Verb steht wie bei er.'},
      {typ:'luecke', f:'___ Sie bitte das Formular ___.', l:'Füllen aus', e:'Imperativ mit Sie: Verb vorne, Sie dahinter, aus am Ende.'},
      {typ:'luecke', f:'___ Sie mir bitte helfen?', l:'Können', e:'Höfliche Bitte mit können: das Verb steht vorne, helfen am Ende.'},
      {typ:'wahl', f:'Du bist neu in der Stadt. Was musst du in den ersten 14 Tagen machen?', o:['ein Konto eröffnen','dich beim Bürgeramt anmelden','einen Deutschkurs buchen'], l:1, e:'Die Anmeldung beim Bürgeramt ist Pflicht. Ohne sie bekommst du keine Steuer-ID und kein Konto.'},
      {typ:'wahl', f:'Was ist der Unterschied? Ich kann nicht kommen. / Ich darf nicht kommen.', o:['Das ist dasselbe.','kann = es ist nicht möglich, darf = es ist verboten','kann = verboten, darf = nicht möglich'], l:1, e:'können ist die Möglichkeit, dürfen die Erlaubnis. Beim Amt ist der Unterschied wichtig.'},
      {typ:'wahl', f:'Was bedeutet: Ziehen Sie bitte eine Wartenummer?', o:['Sie müssen bezahlen.','Sie nehmen einen Zettel mit einer Nummer und warten.','Sie müssen morgen wiederkommen.'], l:1, e:'Fast jedes Amt arbeitet mit Nummern. Auf dem Bildschirm erscheint deine Nummer und ein Zimmer.'},
      {typ:'bausteine', l:'Ich möchte einen Termin beim Bürgeramt machen.', teile:['Ich','möchte','einen','Termin','beim','Bürgeramt','machen'], e:'möchte auf Platz 2, machen am Ende. der Termin wird einen Termin.'},
      {typ:'bausteine', l:'Welche Unterlagen brauche ich für den Antrag?', teile:['Welche','Unterlagen','brauche','ich','für','den','Antrag'], e:'W-Frage: Fragewort plus Nomen vorne, dann sofort das Verb. Nach für kommt den Antrag.'},
      {typ:'bausteine', l:'Man muss vorher einen Termin buchen.', teile:['Man','muss','vorher','einen','Termin','buchen'], e:'muss auf Platz 2, buchen am Ende — die Modalverb-Klammer.'},
      {typ:'paare', p:[['das Bürgeramt','Anmeldung und Meldebescheinigung'],['die Ausländerbehörde','Aufenthaltserlaubnis'],['das Jobcenter','Arbeit und Geld'],['die Krankenkasse','Versichertenkarte'],['das Finanzamt','Steuer-ID']], e:'Jedes Amt hat seine Aufgabe. Wenn du das weißt, sparst du dir viele falsche Wege.'},
      {typ:'hoeren', text:'Bitte füllen Sie das Formular aus und unterschreiben Sie unten rechts. Dann bringen Sie es zu Zimmer 214.', f:'Was sollst du zuerst machen?', o:['zu Zimmer 214 gehen','das Formular ausfüllen','einen Termin buchen'], l:1, e:'Die Reihenfolge steht im Satz: ausfüllen, unterschreiben, dann bringen.'},
      {typ:'hoeren', text:'Nummer B 47, bitte zu Schalter drei.', f:'Wohin sollst du gehen?', o:['zu Schalter drei','zu Schalter sieben','zu Zimmer 47'], l:0, e:'B 47 ist die Wartenummer, Schalter drei ist der Ort. Höre auf das Wort nach zu.'},
      {typ:'sprechen', f:'Sag am Empfang: Guten Tag, ich habe einen Termin um zehn Uhr. Mein Name ist …', l:'Guten Tag, ich habe einen Termin', e:'Termin plus Uhrzeit plus Name — mehr will der Empfang nicht wissen.'},
      {typ:'uebersetzen', f:'Could you help me, please? I do not understand this letter.', l:'Können Sie mir bitte helfen? Ich verstehe den Brief nicht.', e:'helfen braucht mir, nicht mich. Und nicht steht am Satzende hinter dem Objekt.'},
      {typ:'ordnen', l:['Ich buche online einen Termin.','Ich gehe zum Bürgeramt und ziehe eine Wartenummer.','Ich fülle das Formular aus.','Ich unterschreibe und zeige meinen Pass.','Ich bekomme die Meldebescheinigung.'], f:'Bring die Anmeldung in die richtige Reihenfolge.', e:'Termin, warten, Formular, Unterschrift, Papier — so läuft fast jede Anmeldung in Deutschland.'},
      {typ:'artikel', w:'Formular', l:'das', e:'das Formular, Plural die Formulare.'}
    ],
    dialog: {
      ort: 'Du bist im Bürgeramt, Zimmer 214. Herr Özdemir arbeitet am Schalter. Du willst dich anmelden.',
      schritte: [
        {amanda:'Guten Tag, kommen Sie herein. Wie kann ich Ihnen helfen?', hinweis:'Sag, was du willst.', beispiel:'Guten Tag. Ich bin neu in Leipzig und möchte mich anmelden.', redemittel:['Ich möchte mich anmelden.','Ich brauche eine Meldebescheinigung.','Ich habe einen Termin um 10 Uhr.']},
        {amanda:'Gern. Haben Sie Ihren Pass und die Wohnungsgeberbestätigung dabei?', hinweis:'Antworte. Wenn etwas fehlt, sag es.', beispiel:'Ja, hier ist mein Pass. Die Bestätigung habe ich auch.', redemittel:['Ja, hier bitte.','Die Bestätigung habe ich nicht.','Was ist das genau?']},
        {amanda:'Sehr gut. Füllen Sie bitte dieses Formular aus. Alle Personen in der Wohnung, auch die Kinder.', hinweis:'Frag nach, wenn du etwas nicht verstehst.', beispiel:'Entschuldigung, ich verstehe diese Zeile nicht. Können Sie mir helfen?', redemittel:['Können Sie mir helfen?','Was bedeutet dieses Wort?','Sprechen Sie bitte langsam.']},
        {amanda:'Natürlich. Hier steht: Einzugsdatum. Also der Tag, an dem Sie in die Wohnung gekommen sind.', hinweis:'Bedanke dich und sag, wann du eingezogen bist.', beispiel:'Danke. Wir sind am ersten Juni eingezogen.', redemittel:['Danke, jetzt verstehe ich.','Wir sind am … eingezogen.','Ich schreibe den ersten Juni.']},
        {amanda:'Danke. Unterschreiben Sie bitte hier unten. Möchten Sie noch die Steuer-ID beantragen?', hinweis:'Antworte und frag, wie lange es dauert.', beispiel:'Ja, bitte. Wie lange dauert das?', redemittel:['Ja, bitte.','Nein, danke, das habe ich schon.','Wie lange dauert das?']}
      ]
    },
    schreiben: {
      auf: 'Schreibe eine kurze E-Mail an das Bürgeramt und bitte um einen Termin.',
      punkte:['Anrede: Sehr geehrte Damen und Herren,','Warum schreibst du? (Anmeldung)','Wann kannst du kommen? Nenne zwei Möglichkeiten.','Frage nach den Unterlagen','Gruß und Name'],
      hilfe:'So kann es gehen: Sehr geehrte Damen und Herren, ich bin am 1. Juni nach Leipzig gezogen und möchte mich anmelden. Ich möchte gern einen Termin. Ich kann am Montag oder am Donnerstag vormittags kommen. Welche Unterlagen muss ich mitbringen? Mit freundlichen Grüßen, Amina Haddad. An Ämter schreibst du immer Sie, nie du.'
    },
    aus: 'Die Endung -ung ist immer unbetont und klingt kurz: die AnMELdung, die BeSCHEInigung, die ErLAUBnis. Der Ton liegt vor der Endung. Übe: Anmeldung, Wohnung, Bescheinigung, Rechnung.'
  },

  /* ================= LEKTION 10 ================= */
  {
    nr: 10,
    id: 'gesundheit',
    t: 'Gesundheit und Krankheit',
    ziel: 'Nach dieser Lektion kannst du: die Körperteile benennen, sagen was dir weh tut, beim Arzt einen Termin machen, den Rat der Ärztin verstehen und dich bei der Arbeit krankmelden.',
    chunks: [
      {de:'Ich bin krank.', hi:'der einfachste und wichtigste Satz', bsp:'Ich bin krank und bleibe heute zu Hause.'},
      {de:'Ich habe Kopfschmerzen.', hi:'Schmerzen ist immer Plural', bsp:'Ich habe seit gestern starke Kopfschmerzen.'},
      {de:'Mein Bauch tut weh.', hi:'wehtun — weh geht ans Ende', bsp:'Mein Bauch tut weh, besonders morgens.'},
      {de:'Ich habe Fieber.', hi:'ohne Artikel: Fieber haben', bsp:'Ich habe Fieber, 38,7 Grad.'},
      {de:'Ich bin erkältet.', hi:'Schnupfen, Husten, Halsschmerzen', bsp:'Ich bin erkältet, aber es ist nicht schlimm.'},
      {de:'Ich möchte einen Termin machen.', hi:'auch beim Arzt: immer erst der Termin', bsp:'Guten Tag, ich möchte einen Termin machen.'},
      {de:'Haben Sie Ihre Versichertenkarte?', hi:'die Karte von der Krankenkasse, immer mitbringen', bsp:'Haben Sie Ihre Versichertenkarte dabei?'},
      {de:'Was fehlt Ihnen?', hi:'so fragt die Ärztin nach dem Problem', bsp:'Guten Tag, was fehlt Ihnen?'},
      {de:'Seit wann haben Sie die Schmerzen?', hi:'seit wann fragt nach dem Anfang', bsp:'Seit wann haben Sie die Schmerzen?'},
      {de:'Seit drei Tagen.', hi:'seit plus Dativ Plural: Tagen, Wochen', bsp:'Seit drei Tagen, immer nach dem Essen.'},
      {de:'Sie sollen viel trinken.', hi:'sollen: ein Rat oder eine Anweisung', bsp:'Sie sollen viel trinken und im Bett bleiben.'},
      {de:'Öffnen Sie bitte den Mund.', hi:'Imperativ beim Arzt', bsp:'Öffnen Sie bitte den Mund und sagen Sie Ah.'},
      {de:'Die Ärztin hat mir Tabletten verschrieben.', hi:'verschreiben: der Arzt schreibt ein Rezept', bsp:'Die Ärztin hat mir Tabletten verschrieben.'},
      {de:'das Rezept', hi:'der Zettel für die Apotheke', bsp:'Hier ist Ihr Rezept für die Apotheke.'},
      {de:'die Apotheke', hi:'nur da bekommst du Medikamente auf Rezept', bsp:'Die Apotheke ist gleich neben der Praxis.'},
      {de:'Ich brauche eine Krankmeldung.', hi:'das Papier für den Arbeitgeber', bsp:'Ich brauche eine Krankmeldung für meinen Chef.'},
      {de:'Ich melde mich krank.', hi:'sich krankmelden — beim Arbeitgeber anrufen', bsp:'Ich melde mich für zwei Tage krank.'},
      {de:'Ich rufe im Büro an.', hi:'anrufen — an geht ans Ende', bsp:'Ich rufe gleich im Büro an.'},
      {de:'Ich muss zum Arzt.', hi:'zum Arzt gehen — feste Wendung', bsp:'Ich muss heute noch zum Arzt.'},
      {de:'meine Hausärztin', hi:'die erste Adresse bei Problemen', bsp:'Meine Hausärztin heißt Frau Dr. Berger.'},
      {de:'der Notruf 112', hi:'112 für Notarzt und Feuerwehr, 110 für Polizei', bsp:'Bei einem Notfall rufe 112 an.'},
      {de:'Gute Besserung!', hi:'sagt man zu jemandem, der krank ist', bsp:'Gute Besserung! Ruh dich aus.'},
      {de:'Es ist nicht schlimm.', hi:'beruhigt und ist meistens wahr', bsp:'Es ist nicht schlimm, in drei Tagen ist es weg.'},
      {de:'der Kopf, der Arm, das Bein, der Rücken, der Hals', hi:'die häufigsten Körperteile beim Arzt', bsp:'Mein Rücken tut weh, und mein Hals auch.'}
    ],
    gram: [
      {t:'Alle Possessivartikel', e:'Jetzt kommen alle Formen zusammen: mein, dein, sein (von er), ihr (von sie), unser, euer, ihr (von sie im Plural), Ihr (höflich). Bei die-Wörtern und im Plural kommt ein -e dazu.', bsp:['mein Arm — meine Hand','sein Rücken — seine Schulter','ihr Kopf — ihre Zähne','unser Kind — unsere Kinder']},
      {t:'sein oder ihr?', e:'Wichtig: sein gehört zu er, ihr gehört zu sie. Der Artikel danach richtet sich nicht nach der Person, sondern nach dem Nomen.', bsp:['Yusuf hat Zahnschmerzen. Sein Zahn tut weh.','Olena ist krank. Ihr Hals tut weh.','Das Kind weint. Sein Bein tut weh.']},
      {t:'sollen: ein Rat von jemand anderem', e:'sollen benutzt du, wenn jemand anderes etwas sagt oder empfiehlt. Der Arzt sagt es, du erzählst es weiter. Wie immer steht das zweite Verb am Ende.', bsp:['ich soll — du sollst — er soll','Ich soll drei Tage im Bett bleiben.','Sie sollen viel Wasser trinken.']},
      {t:'müssen, sollen oder dürfen?', e:'müssen ist eine Pflicht. sollen ist ein Rat oder ein Auftrag von jemandem. dürfen ist eine Erlaubnis. Beim Arzt hörst du alle drei.', bsp:['Ich muss zum Arzt. (keine Wahl)','Ich soll viel trinken. (Rat der Ärztin)','Ich darf wieder arbeiten. (Erlaubnis)']},
      {t:'wehtun und Schmerzen', e:'Zwei Wege, dasselbe zu sagen. Bei wehtun nennst du den Körperteil: Mein Kopf tut weh. Bei Schmerzen klebst du den Körperteil vorne an: Kopfschmerzen.', bsp:['Mein Kopf tut weh. — Ich habe Kopfschmerzen.','Mein Bauch tut weh. — Ich habe Bauchschmerzen.','Meine Füße tun weh.']}
    ],
    ueb: [
      {typ:'luecke', f:'Olena ist krank. ___ Hals tut weh.', l:'Ihr', e:'Olena ist sie, deshalb ihr. der Hals ist ein der-Wort, also ohne -e.'},
      {typ:'luecke', f:'Yusuf war beim Zahnarzt. ___ Zahn tut noch weh.', l:'Sein', e:'Yusuf ist er, deshalb sein.'},
      {typ:'luecke', f:'Die Ärztin sagt: Sie ___ viel Wasser trinken.', l:'sollen', e:'sollen ist der Rat von jemand anderem. Bei Sie heißt es sollen.'},
      {typ:'luecke', f:'Mein Rücken ___ seit einer Woche ___.', l:'tut weh', e:'wehtun ist trennbar: tut auf Platz 2, weh am Ende.'},
      {typ:'luecke', f:'___ wann haben Sie die Schmerzen? — ___ drei Tagen.', l:'Seit Seit', e:'seit fragt und antwortet nach dem Anfang. Danach steht der Dativ: seit drei Tagen.'},
      {typ:'wahl', f:'Was sagst du der Ärztin, wenn dein Kopf weh tut?', o:['Ich habe Kopfschmerzen.','Ich bin Kopfschmerzen.','Mein Kopf ist weh.'], l:0, e:'Schmerzen hat man: Ich habe Kopfschmerzen. Oder: Mein Kopf tut weh.'},
      {typ:'wahl', f:'Du bist krank und arbeitest. Was machst du zuerst?', o:['Ich gehe zur Arbeit und sage es dort.','Ich rufe morgens im Betrieb an und melde mich krank.','Ich warte bis zum Nachmittag.'], l:1, e:'In Deutschland ruft man am ersten Krankheitstag früh an. Die Krankmeldung vom Arzt kommt dazu.'},
      {typ:'wahl', f:'Welche Nummer ist der Notruf für den Notarzt?', o:['110','112','116'], l:1, e:'112 ist Notarzt und Feuerwehr, 110 ist die Polizei. 112 funktioniert in ganz Europa.'},
      {typ:'bausteine', l:'Ich habe seit drei Tagen Halsschmerzen.', teile:['Ich','habe','seit','drei','Tagen','Halsschmerzen'], e:'seit drei Tagen steht in der Mitte, das Nomen am Ende.'},
      {typ:'bausteine', l:'Ich möchte einen Termin bei Frau Dr. Berger machen.', teile:['Ich','möchte','einen','Termin','bei','Frau','Dr.','Berger','machen'], e:'bei plus Person, machen am Ende, weil möchte auf Platz 2 steht.'},
      {typ:'bausteine', l:'Sie sollen zwei Tage im Bett bleiben.', teile:['Sie','sollen','zwei','Tage','im','Bett','bleiben'], e:'sollen auf Platz 2, bleiben am Ende.'},
      {typ:'paare', p:[['der Kopf','Kopfschmerzen und Tabletten'],['der Zahn','der Zahnarzt'],['der Hals','Husten und Tee'],['der Rücken','langes Sitzen und Stehen'],['der Bauch','das Essen von gestern']], e:'Wenn du den Körperteil mit einer Situation verbindest, sitzt das Wort schneller.'},
      {typ:'hoeren', text:'Praxis Dr. Berger, guten Tag. — Guten Tag, ich möchte einen Termin. Ich habe seit zwei Tagen Fieber. — Können Sie heute um 15 Uhr kommen?', f:'Wann ist der Termin?', o:['heute um 15 Uhr','morgen um 15 Uhr','heute um 5 Uhr'], l:0, e:'Sie sagt heute um 15 Uhr. 15 Uhr ist drei Uhr nachmittags.'},
      {typ:'hoeren', text:'Sie haben eine Erkältung. Nehmen Sie diese Tabletten dreimal täglich und trinken Sie viel. Ich schreibe Sie drei Tage krank.', f:'Wie lange ist die Person krankgeschrieben?', o:['einen Tag','drei Tage','eine Woche'], l:1, e:'Sie sagt: Ich schreibe Sie drei Tage krank. dreimal täglich gehört zu den Tabletten.'},
      {typ:'sprechen', f:'Ruf im Betrieb an: Guten Morgen, hier ist … Ich bin krank und kann heute nicht kommen.', l:'Guten Morgen, hier ist', e:'Name, Grund, Dauer — in dieser Reihenfolge. Kurz halten, der Chef braucht nur die Fakten.'},
      {typ:'uebersetzen', f:'I have had a headache for two days.', l:'Ich habe seit zwei Tagen Kopfschmerzen.', e:'Deutsch nimmt Präsens plus seit. Und Kopfschmerzen ist ein Wort, immer Plural.'},
      {typ:'ordnen', l:['Ich rufe die Praxis an und mache einen Termin.','Ich gebe an der Anmeldung meine Versichertenkarte ab.','Die Ärztin fragt: Was fehlt Ihnen?','Ich bekomme ein Rezept und eine Krankmeldung.','Ich hole die Tabletten in der Apotheke.'], f:'Bring den Weg zum Arzt in die richtige Reihenfolge.', e:'Termin, Karte, Gespräch, Rezept, Apotheke — so läuft ein Arztbesuch in Deutschland fast immer.'},
      {typ:'artikel', w:'Rezept', l:'das', e:'das Rezept. Vorsicht: das Wort heißt auch Kochrezept — der Zusammenhang entscheidet.'}
    ],
    dialog: {
      ort: 'Du bist bei deiner Hausärztin, Frau Dr. Berger. Du hast seit drei Tagen Halsschmerzen und Fieber.',
      schritte: [
        {amanda:'Guten Tag, setzen Sie sich. Was fehlt Ihnen denn?', hinweis:'Beschreibe dein Problem.', beispiel:'Guten Tag. Ich habe Halsschmerzen und Fieber.', redemittel:['Ich habe … schmerzen.','Mein … tut weh.','Ich bin erkältet.']},
        {amanda:'Seit wann haben Sie die Beschwerden?', hinweis:'Sag, seit wann. Denk an seit plus Dativ.', beispiel:'Seit drei Tagen. Am Montag hat es angefangen.', redemittel:['Seit … Tagen.','Seit einer Woche.','Seit gestern.']},
        {amanda:'Öffnen Sie bitte den Mund. — Ja, der Hals ist rot. Haben Sie auch Husten?', hinweis:'Antworte mit ja oder nein und ergänze etwas.', beispiel:'Ja, besonders nachts. Und ich kann schlecht schlafen.', redemittel:['Ja, besonders nachts.','Nein, nur Halsschmerzen.','Ein bisschen.']},
        {amanda:'Das ist eine Erkältung, nichts Schlimmes. Sie sollen viel trinken und zwei Tage zu Hause bleiben.', hinweis:'Frag nach der Krankmeldung für die Arbeit.', beispiel:'Ich brauche eine Krankmeldung für meinen Chef.', redemittel:['Ich brauche eine Krankmeldung.','Wie lange soll ich zu Hause bleiben?','Brauche ich Tabletten?']},
        {amanda:'Natürlich, ich schreibe Sie bis Freitag krank. Hier ist das Rezept. Gute Besserung!', hinweis:'Bedanke dich und frag, wo du die Tabletten bekommst.', beispiel:'Vielen Dank. Bekomme ich die Tabletten in der Apotheke?', redemittel:['Vielen Dank!','Wo bekomme ich die Tabletten?','Muss ich wiederkommen?']}
      ]
    },
    schreiben: {
      auf: 'Schreibe eine kurze E-Mail an deinen Chef, Herrn Özdemir, und melde dich krank.',
      punkte:['Anrede: Sehr geehrter Herr Özdemir,','Du bist krank — was hast du?','Wie lange fehlst du?','Die Krankmeldung kommt (per Post oder du bringst sie)','Gruß und Name'],
      hilfe:'Kurz und klar: Sehr geehrter Herr Özdemir, ich bin krank und kann heute nicht zur Arbeit kommen. Ich habe Fieber. Die Ärztin hat mich bis Freitag krankgeschrieben. Die Krankmeldung schicke ich heute per Post. Mit freundlichen Grüßen, Amina Haddad. Wichtig: Melde dich am ersten Tag, nicht erst am zweiten.'
    },
    aus: 'Die Konsonantengruppe schm, schl, schn: SCHMerzen, SCHLafen, SCHNupfen. Sch ist ein Laut, nicht drei. Die Lippen kommen nach vorn. Übe langsam: Schmerzen - Schlaf - Schnupfen - Schwester.'
  },
  /* ================= LEKTION 11 ================= */
  {
    nr: 11,
    id: 'unterwegs',
    t: 'In der Stadt unterwegs',
    ziel: 'Nach dieser Lektion kannst du: nach dem Weg fragen und einen Weg verstehen, mit Bus und Bahn fahren, eine Fahrkarte kaufen, Durchsagen verstehen und sagen, wo etwas ist und wohin du willst.',
    chunks: [
      {de:'Entschuldigung, wo ist der Bahnhof?', hi:'die einfachste Frage nach dem Weg', bsp:'Entschuldigung, wo ist der Bahnhof?'},
      {de:'Wie komme ich zum Bürgeramt?', hi:'wie komme ich zu — die beste Wegfrage', bsp:'Wie komme ich zum Bürgeramt?'},
      {de:'Gehen Sie geradeaus.', hi:'immer weiter, nicht abbiegen', bsp:'Gehen Sie hundert Meter geradeaus.'},
      {de:'Gehen Sie links.', hi:'links und rechts — kurz und wichtig', bsp:'Gehen Sie an der Kirche links.'},
      {de:'an der Ampel rechts', hi:'die Ampel ist der beste Orientierungspunkt', bsp:'An der Ampel rechts, dann die zweite Straße links.'},
      {de:'Das ist neben der Post.', hi:'neben plus Dativ: neben der Post', bsp:'Die Apotheke ist neben der Post.'},
      {de:'Der Supermarkt ist gegenüber.', hi:'auf der anderen Straßenseite', bsp:'Der Supermarkt ist gegenüber vom Bahnhof.'},
      {de:'Ist es weit?', hi:'die zweite Frage nach der ersten', bsp:'Ist es weit? — Nein, fünf Minuten.'},
      {de:'Zu Fuß sind es zehn Minuten.', hi:'zu Fuß heißt: laufen', bsp:'Zu Fuß sind es zehn Minuten.'},
      {de:'Ich fahre mit dem Bus.', hi:'mit plus Dativ: mit dem Bus, mit der Bahn', bsp:'Ich fahre jeden Tag mit dem Bus zur Arbeit.'},
      {de:'Ich fahre mit der Straßenbahn.', hi:'die Straßenbahn wird zu mit der', bsp:'Ich fahre mit der Straßenbahn, Linie 9.'},
      {de:'Welche Linie fährt zum Zentrum?', hi:'die Linie ist die Nummer von Bus oder Bahn', bsp:'Welche Linie fährt zum Zentrum?'},
      {de:'Ich muss umsteigen.', hi:'umsteigen — um geht ans Ende', bsp:'Ich muss am Hauptbahnhof umsteigen.'},
      {de:'eine Fahrkarte kaufen', hi:'ohne Fahrkarte wird es teuer', bsp:'Ich möchte eine Fahrkarte nach Halle kaufen.'},
      {de:'der Fahrkartenautomat', hi:'steht an jeder Haltestelle', bsp:'Der Fahrkartenautomat nimmt keine Scheine.'},
      {de:'Wann fährt der nächste Bus?', hi:'der nächste heißt: der danach', bsp:'Wann fährt der nächste Bus nach Grünau?'},
      {de:'Der Zug hat zehn Minuten Verspätung.', hi:'Verspätung heißt: er kommt später', bsp:'Der Zug hat leider zehn Minuten Verspätung.'},
      {de:'Der Zug fährt auf Gleis 3.', hi:'Gleis plus Zahl, sehr wichtig am Bahnhof', bsp:'Der ICE nach Berlin fährt heute auf Gleis 3.'},
      {de:'Ich fahre nach Hamburg.', hi:'nach plus Stadt oder Land ohne Artikel', bsp:'Am Wochenende fahre ich nach Hamburg.'},
      {de:'Ich gehe in die Apotheke.', hi:'in plus Akkusativ, wenn du dorthin gehst', bsp:'Ich gehe schnell in die Apotheke.'},
      {de:'Ich gehe zur Arbeit.', hi:'zu plus Dativ: zur Arbeit, zum Arzt', bsp:'Ich gehe um sieben zur Arbeit.'},
      {de:'Wie lange dauert das?', hi:'dauern fragt nach der Zeit', bsp:'Wie lange dauert die Fahrt?'},
      {de:'Ich habe mich verlaufen.', hi:'du weißt nicht mehr, wo du bist', bsp:'Entschuldigung, ich habe mich verlaufen.'},
      {de:'Können Sie mir das auf der Karte zeigen?', hi:'rettet dich, wenn du die Erklärung nicht verstehst', bsp:'Können Sie mir das auf der Karte zeigen?'}
    ],
    gram: [
      {t:'mit: das Verkehrsmittel', e:'Nach mit steht immer der Dativ. der wird dem, die wird der, das wird dem. So sagst du, womit du fährst.', bsp:['mit dem Bus','mit der Straßenbahn','mit dem Auto','mit dem Fahrrad']},
      {t:'Wo? Der Ort steht im Dativ', e:'Bei der Frage Wo? steht nach in, an, auf, neben, vor, hinter, über, unter und zwischen der Dativ. Es bewegt sich nichts, es ist einfach da.', bsp:['Die Apotheke ist neben der Post.','Ich warte an der Haltestelle.','Das Buch liegt auf dem Tisch.']},
      {t:'Wohin? Die Richtung steht im Akkusativ', e:'Bei der Frage Wohin? steht nach denselben Präpositionen der Akkusativ. Jetzt bewegt sich etwas: du gehst irgendwohin.', bsp:['Ich gehe in die Apotheke.','Ich gehe an die Haltestelle.','Ich lege das Buch auf den Tisch.']},
      {t:'Die kurzen Formen', e:'Ein paar Formen kleben zusammen. Du hörst sie überall, deshalb lerne sie gleich mit.', bsp:['in dem = im (Wo?)','in das = ins (Wohin?)','zu dem = zum','zu der = zur','an dem = am']},
      {t:'zu, nach oder in?', e:'zu nimmst du für Personen, Firmen und Ämter. nach nimmst du für Städte und Länder ohne Artikel und für nach Hause. in nimmst du, wenn du in einen Raum oder ein Gebäude hineingehst.', bsp:['Ich gehe zum Arzt.','Ich fahre nach Hamburg.','Ich gehe in die Apotheke.','Ich fahre nach Hause.']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich fahre jeden Tag ___ Bus zur Arbeit.', l:'mit dem', e:'Nach mit steht der Dativ: der Bus wird dem Bus.'},
      {typ:'luecke', f:'Ich fahre ___ Straßenbahn, Linie 9.', l:'mit der', e:'die Straßenbahn wird im Dativ zu der Straßenbahn.'},
      {typ:'luecke', f:'Die Apotheke ist neben ___ Post.', l:'der', e:'Wo? Also Dativ: die Post wird der Post.'},
      {typ:'luecke', f:'Ich gehe schnell in ___ Apotheke.', l:'die', e:'Wohin? Also Akkusativ: in die Apotheke.'},
      {typ:'luecke', f:'Ich muss ___ Arzt.', l:'zum', e:'zu dem wird zum. Bei Personen und Praxen nimmst du zu.'},
      {typ:'luecke', f:'Am Samstag fahre ich ___ Berlin.', l:'nach', e:'Bei Städten ohne Artikel steht nach.'},
      {typ:'wahl', f:'Du stehst vor dem Bahnhof und suchst das Bürgeramt. Was fragst du?', o:['Wo bin ich?','Wie komme ich zum Bürgeramt?','Was kostet das Bürgeramt?'], l:1, e:'Wie komme ich zu … ist die klarste Wegfrage. Die Antwort bekommst du als Wegbeschreibung.'},
      {typ:'wahl', f:'Die Durchsage sagt: Der Zug hat 20 Minuten Verspätung. Was heißt das?', o:['Der Zug fährt 20 Minuten früher.','Der Zug kommt 20 Minuten später.','Der Zug fährt heute nicht.'], l:1, e:'Verspätung heißt immer: später als geplant. Das Wort hörst du in Deutschland oft.'},
      {typ:'bausteine', l:'Gehen Sie an der Ampel nach rechts.', teile:['Gehen','Sie','an','der','Ampel','nach','rechts'], e:'Imperativ mit Sie: Verb vorne. an der Ampel ist Dativ, weil es der Ort ist.'},
      {typ:'bausteine', l:'Ich fahre mit der U-Bahn zum Hauptbahnhof.', teile:['Ich','fahre','mit','der','U-Bahn','zum','Hauptbahnhof'], e:'mit plus Dativ für das Verkehrsmittel, zu plus Dativ für das Ziel.'},
      {typ:'bausteine', l:'Wann fährt der nächste Bus nach Grünau?', teile:['Wann','fährt','der','nächste','Bus','nach','Grünau'], e:'W-Frage: Wann vorne, dann das Verb. nach für den Ortsnamen.'},
      {typ:'paare', p:[['zum Arzt','zu einer Person'],['nach Hamburg','zu einer Stadt'],['in die Apotheke','in ein Gebäude hinein'],['nach Hause','feste Wendung'],['zur Arbeit','zu einem Ort mit die']], e:'Die drei Wörter zu, nach und in teilen sich die Richtungen. Merke dir für jedes ein Beispiel.'},
      {typ:'hoeren', text:'Gehen Sie hier geradeaus bis zur Ampel, dann links. Die Post ist auf der rechten Seite, neben der Apotheke.', f:'Wo ist die Post?', o:['vor der Ampel','neben der Apotheke','gegenüber vom Bahnhof'], l:1, e:'Der letzte Satz gibt den genauen Ort: neben der Apotheke.'},
      {typ:'hoeren', text:'Nächster Halt: Hauptbahnhof. Umsteigen zu den Linien 1, 4 und 15.', f:'Was kannst du am Hauptbahnhof machen?', o:['aussteigen und umsteigen','eine Fahrkarte kaufen','nichts, der Bus fährt weiter'], l:0, e:'Umsteigen zu den Linien … heißt: hier kannst du in andere Bahnen wechseln.'},
      {typ:'sprechen', f:'Frag nach dem Weg: Entschuldigung, wie komme ich zum Bahnhof? Ist es weit?', l:'Entschuldigung, wie komme ich', e:'Fang immer mit Entschuldigung an. Dann hören dir die Leute wirklich zu.'},
      {typ:'uebersetzen', f:'I go to work by bike.', l:'Ich fahre mit dem Fahrrad zur Arbeit.', e:'mit dem Fahrrad für das Verkehrsmittel, zur Arbeit für das Ziel. Beide im Dativ.'},
      {typ:'ordnen', l:['Entschuldigung, wie komme ich zum Museum?','Gehen Sie geradeaus bis zur Ampel.','Und dann?','Dann links. Das Museum ist nach hundert Metern rechts.','Vielen Dank!'], f:'Bring die Wegbeschreibung in die richtige Reihenfolge.', e:'Frage, erster Teil, Nachfrage, zweiter Teil, Dank. Die Nachfrage Und dann? ist Gold wert.'},
      {typ:'artikel', w:'Haltestelle', l:'die', e:'die Haltestelle, aus die Stelle. Der letzte Teil entscheidet.'}
    ],
    dialog: {
      ort: 'Du stehst am Hauptbahnhof und suchst das Bürgeramt. Du sprichst eine Frau an der Haltestelle an.',
      schritte: [
        {amanda:'Ja bitte, kann ich Ihnen helfen?', hinweis:'Frag nach dem Weg zum Bürgeramt.', beispiel:'Entschuldigung, wie komme ich zum Bürgeramt?', redemittel:['Wie komme ich zu …?','Wo ist …?','Ich habe mich verlaufen.']},
        {amanda:'Zum Bürgeramt? Das ist in der Stadtmitte. Gehen Sie zu Fuß oder fahren Sie?', hinweis:'Sag, wie du dorthin willst.', beispiel:'Ich gehe zu Fuß. Ist es weit?', redemittel:['Ich gehe zu Fuß.','Ich fahre mit dem Bus.','Ist es weit?']},
        {amanda:'Zu Fuß sind es etwa zwanzig Minuten. Mit der Straßenbahn Linie 9 sind Sie in fünf Minuten da.', hinweis:'Frag nach der Haltestelle oder nach der Fahrkarte.', beispiel:'Dann nehme ich die Bahn. Wo ist die Haltestelle?', redemittel:['Wo ist die Haltestelle?','Wo kaufe ich eine Fahrkarte?','Muss ich umsteigen?']},
        {amanda:'Die Haltestelle ist da drüben, gegenüber von der Post. Die Fahrkarte bekommen Sie am Automaten.', hinweis:'Frag, wo du aussteigen musst.', beispiel:'Danke. Und wo muss ich aussteigen?', redemittel:['Wo muss ich aussteigen?','Wie viele Haltestellen sind das?','Was kostet die Fahrkarte?']},
        {amanda:'An der Haltestelle Rathaus, die dritte. Dann sehen Sie das Bürgeramt schon.', hinweis:'Wiederhole kurz und bedanke dich.', beispiel:'Also Linie 9 bis Rathaus, die dritte Haltestelle. Vielen Dank!', redemittel:['Also Linie … bis …','Vielen Dank!','Das ist sehr nett, danke.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe Yusuf eine Nachricht und erkläre ihm den Weg von der Haltestelle zu deiner Wohnung.',
      punkte:['Wo steigt er aus? (Haltestelle, Linie)','Erste Richtung: geradeaus, links oder rechts','Ein Orientierungspunkt (Ampel, Apotheke, Supermarkt)','Straße und Hausnummer','Wie lange dauert es zu Fuß?'],
      hilfe:'Schreib in kurzen Sätzen mit Imperativ oder mit du: Steig an der Haltestelle Rathaus aus. Geh geradeaus bis zur Apotheke. Dann links in die Gartenstraße. Ich wohne in Nummer 14, im zweiten Stock. Zu Fuß sind es fünf Minuten. Denk daran: bei Wo? Dativ, bei Wohin? Akkusativ.'
    },
    aus: 'Das deutsche R am Wortanfang klingt hinten im Hals, fast wie ein leises Gurgeln: Rathaus, rechts, Richtung. Am Wortende wird es weich wie ein a: Uhr, hier, Bahnhof. Übe: rechts - Uhr, Regen - hier.'
  },

  /* ================= LEKTION 12 ================= */
  {
    nr: 12,
    id: 'kundenservice',
    t: 'Kundenservice',
    ziel: 'Nach dieser Lektion kannst du: am Telefon höflich dein Anliegen sagen, ein Problem mit einer Ware melden, etwas umtauschen oder reklamieren, einen Termin verschieben und mit würde und könnte höflich bleiben.',
    chunks: [
      {de:'Könnten Sie mir bitte helfen?', hi:'könnte ist die höflichste Form von können', bsp:'Guten Tag, könnten Sie mir bitte helfen?'},
      {de:'Ich würde gern einen Termin machen.', hi:'würde gern ist höflicher als möchte', bsp:'Ich würde gern einen Termin für Freitag machen.'},
      {de:'Ich rufe wegen meiner Rechnung an.', hi:'so nennst du sofort den Grund', bsp:'Guten Tag, ich rufe wegen meiner Rechnung an.'},
      {de:'Ich habe ein Problem mit meinem Handy.', hi:'ein Problem haben mit plus Dativ', bsp:'Ich habe ein Problem mit meinem Handy.'},
      {de:'Der Kühlschrank funktioniert nicht.', hi:'funktionieren ist das Wort für Geräte', bsp:'Der neue Kühlschrank funktioniert nicht.'},
      {de:'Das Gerät ist kaputt.', hi:'kaputt heißt: es geht nicht mehr', bsp:'Nach zwei Wochen war das Gerät kaputt.'},
      {de:'Ich möchte das zurückgeben.', hi:'zurückgeben — zurück geht ans Ende', bsp:'Ich möchte das Gerät zurückgeben.'},
      {de:'Ich möchte das umtauschen.', hi:'umtauschen: du bekommst etwas anderes', bsp:'Ich möchte die Hose umtauschen, sie ist zu klein.'},
      {de:'Hier ist der Kassenzettel.', hi:'ohne Kassenzettel geht meistens nichts', bsp:'Hier ist der Kassenzettel vom Montag.'},
      {de:'Ich möchte mich beschweren.', hi:'sich beschweren: du bist nicht zufrieden', bsp:'Ich möchte mich über die Lieferung beschweren.'},
      {de:'Können Sie das reparieren?', hi:'reparieren heißt: wieder heil machen', bsp:'Können Sie das reparieren oder bekomme ich ein neues?'},
      {de:'Wann ist das fertig?', hi:'die wichtigste Nachfrage', bsp:'Und wann ist das fertig?'},
      {de:'In zwei Wochen.', hi:'in plus Zeit heißt: nach dieser Zeit', bsp:'Das Gerät ist in zwei Wochen fertig.'},
      {de:'Ab Montag habe ich Zeit.', hi:'ab heißt: von diesem Tag an', bsp:'Ab Montag habe ich wieder Zeit.'},
      {de:'Der Vertrag läuft bis Dezember.', hi:'bis nennt das Ende', bsp:'Mein Vertrag läuft noch bis Dezember.'},
      {de:'Ich möchte den Vertrag kündigen.', hi:'kündigen: den Vertrag beenden', bsp:'Ich möchte meinen Vertrag zum 31.12. kündigen.'},
      {de:'Einen Moment, ich verbinde Sie.', hi:'das hörst du bei jeder Hotline', bsp:'Einen Moment, ich verbinde Sie mit der Technik.'},
      {de:'Bleiben Sie bitte am Apparat.', hi:'Apparat ist ein altes Wort für Telefon', bsp:'Bleiben Sie bitte am Apparat.'},
      {de:'Kann ich eine Nachricht hinterlassen?', hi:'wenn die Person nicht da ist', bsp:'Kann ich eine Nachricht hinterlassen?'},
      {de:'Rufen Sie mich bitte zurück.', hi:'zurückrufen — zurück geht ans Ende', bsp:'Rufen Sie mich bitte heute noch zurück.'},
      {de:'Meine Nummer ist …', hi:'Zahlen langsam und einzeln sprechen', bsp:'Meine Nummer ist 0176 23 45 678.'},
      {de:'Ich habe das Paket nicht bekommen.', hi:'ein Klassiker beim Onlinekauf', bsp:'Ich habe das Paket bis heute nicht bekommen.'},
      {de:'Das tut mir leid.', hi:'sagt der Service — und du auch, wenn nötig', bsp:'Das tut mir leid, das prüfe ich sofort.'},
      {de:'Vielen Dank für Ihre Hilfe.', hi:'ein guter Schluss für jedes Servicegespräch', bsp:'Vielen Dank für Ihre Hilfe. Auf Wiederhören!'}
    ],
    gram: [
      {t:'würde und könnte: höflich bleiben', e:'Mit würde und könnte klingt jede Bitte freundlicher. Das zweite Verb steht am Ende. Du musst nichts anderes ändern.', bsp:['Ich würde gern einen Termin machen.','Könnten Sie mir bitte helfen?','Könnten Sie das bitte wiederholen?','Ich würde gern mit Frau Berger sprechen.']},
      {t:'Die Formen von würde und könnte', e:'würde: ich würde, du würdest, er würde, wir würden, Sie würden. könnte: ich könnte, du könntest, er könnte, wir könnten, Sie könnten.', bsp:['Ich würde gern zahlen.','Könnten Sie mich zurückrufen?','Wir würden gern umtauschen.']},
      {t:'vor, nach und bei mit Zeit', e:'vor heißt: früher als. nach heißt: später als. bei heißt: während oder im Fall von. Nach allen dreien steht der Dativ.', bsp:['vor dem Termin','nach dem Kauf','bei Problemen rufen Sie an']},
      {t:'in, bis und ab', e:'in plus Zeit heißt: nach dieser Zeit ist es so weit. bis nennt das Ende. ab nennt den Anfang.', bsp:['Das Gerät ist in zwei Wochen fertig.','Der Vertrag läuft bis Dezember.','Ab Montag bin ich wieder da.']},
      {t:'Am Telefon: der feste Anfang', e:'Ein Anruf in Deutschland hat fast immer denselben Anfang: Gruß, Name, Grund. Wenn du diese drei Schritte machst, ist der Rest viel leichter.', bsp:['Guten Tag, mein Name ist Amina Haddad.','Ich rufe wegen meiner Bestellung an.','Könnten Sie mir bitte helfen?']}
    ],
    ueb: [
      {typ:'luecke', f:'___ Sie mir bitte helfen?', l:'Könnten', e:'könnte ist die höfliche Form von können. In der Frage steht sie vorne.'},
      {typ:'luecke', f:'Ich ___ gern einen Termin machen.', l:'würde', e:'würde gern ist die höflichste Art, einen Wunsch zu sagen. machen steht am Ende.'},
      {typ:'luecke', f:'Das Gerät ist ___ zwei Wochen fertig.', l:'in', e:'in plus Zeit heißt: nach dieser Zeit ist es fertig.'},
      {typ:'luecke', f:'Mein Vertrag läuft ___ Dezember.', l:'bis', e:'bis nennt das Ende eines Zeitraums.'},
      {typ:'luecke', f:'___ Montag bin ich wieder im Büro.', l:'Ab', e:'ab nennt den Anfang: von Montag an.'},
      {typ:'wahl', f:'Welcher Satz ist am höflichsten?', o:['Helfen Sie mir!','Ich brauche Hilfe.','Könnten Sie mir bitte helfen?'], l:2, e:'könnte plus bitte ist die höflichste Form. Beim Kundenservice bringt dich das am weitesten.'},
      {typ:'wahl', f:'Du hast eine Hose gekauft, sie ist zu klein. Was möchtest du?', o:['Ich möchte die Hose umtauschen.','Ich möchte die Hose reparieren.','Ich möchte die Hose kündigen.'], l:0, e:'umtauschen heißt: zurückgeben und etwas anderes bekommen. Nimm den Kassenzettel mit.'},
      {typ:'wahl', f:'Am Telefon hörst du: Bleiben Sie bitte am Apparat. Was machst du?', o:['auflegen','warten','die Nummer noch einmal wählen'], l:1, e:'am Apparat bleiben heißt: warten, nicht auflegen. Gleich kommt jemand.'},
      {typ:'bausteine', l:'Ich würde gern einen Termin für Freitag machen.', teile:['Ich','würde','gern','einen','Termin','für','Freitag','machen'], e:'würde auf Platz 2, machen am Ende. gern steht direkt hinter würde.'},
      {typ:'bausteine', l:'Könnten Sie mich bitte morgen zurückrufen?', teile:['Könnten','Sie','mich','bitte','morgen','zurückrufen'], e:'In der Frage steht Könnten vorne. zurückrufen bleibt in einem Stück, weil es der Infinitiv ist.'},
      {typ:'bausteine', l:'Der Kühlschrank funktioniert seit gestern nicht.', teile:['Der','Kühlschrank','funktioniert','seit','gestern','nicht'], e:'nicht steht am Ende und verneint das Verb.'},
      {typ:'paare', p:[['Einen Moment, ich verbinde Sie.','Du wartest kurz.'],['Kann ich eine Nachricht hinterlassen?','Die Person ist nicht da.'],['Hier ist der Kassenzettel.','Du möchtest umtauschen.'],['Das tut mir leid.','Der Service entschuldigt sich.'],['Auf Wiederhören!','Das Telefonat ist zu Ende.']], e:'Am Telefon kommen immer dieselben Sätze. Wenn du sie erkennst, verstehst du das halbe Gespräch.'},
      {typ:'hoeren', text:'Guten Tag, hier ist der Kundenservice. Ihre Waschmaschine ist repariert. Sie können sie ab Donnerstag abholen.', f:'Ab wann kannst du die Maschine abholen?', o:['ab Dienstag','ab Donnerstag','ab Samstag'], l:1, e:'Höre auf das Wort nach ab. Dienstag und Donnerstag klingen ähnlich, also gut hinhören.'},
      {typ:'hoeren', text:'Leider ist Frau Berger heute nicht im Haus. Möchten Sie eine Nachricht hinterlassen?', f:'Was ist das Problem?', o:['Frau Berger ist krank.','Frau Berger ist heute nicht da.','Die Nummer ist falsch.'], l:1, e:'nicht im Haus heißt: heute nicht im Büro. Warum, sagt die Person nicht.'},
      {typ:'sprechen', f:'Ruf an: Guten Tag, mein Name ist … Ich rufe wegen meiner Bestellung an. Könnten Sie mir bitte helfen?', l:'Guten Tag, mein Name ist', e:'Gruß, Name, Grund, Bitte. Diese vier Schritte machen dich am Telefon sicher.'},
      {typ:'uebersetzen', f:'I would like to cancel my contract.', l:'Ich würde gern meinen Vertrag kündigen.', e:'würde gern plus Infinitiv am Ende. mein Vertrag wird im Akkusativ zu meinen Vertrag.'},
      {typ:'ordnen', l:['Guten Tag, Kundenservice Elektro Meier.','Guten Tag, mein Name ist Amina Haddad.','Ich rufe wegen meiner Waschmaschine an. Sie funktioniert nicht.','Wann haben Sie das Gerät gekauft?','Vor drei Monaten. Hier ist die Rechnungsnummer.'], f:'Bring den Anruf beim Kundenservice in die richtige Reihenfolge.', e:'Die Firma meldet sich, du nennst deinen Namen, dann den Grund. Danach kommen die Details.'},
      {typ:'artikel', w:'Rechnung', l:'die', e:'die Rechnung. Alle Wörter auf -ung sind die-Wörter, ohne Ausnahme.'}
    ],
    dialog: {
      ort: 'Du hast vor drei Wochen online eine Waschmaschine gekauft. Sie funktioniert nicht mehr. Du rufst beim Kundenservice an.',
      schritte: [
        {amanda:'Kundenservice Elektro Meier, Berger, guten Tag.', hinweis:'Nenne deinen Namen und den Grund für den Anruf.', beispiel:'Guten Tag, mein Name ist Amina Haddad. Ich rufe wegen meiner Waschmaschine an.', redemittel:['Mein Name ist …','Ich rufe wegen … an.','Ich habe ein Problem mit …']},
        {amanda:'Was ist denn genau das Problem?', hinweis:'Beschreibe den Fehler in ein bis zwei Sätzen.', beispiel:'Sie funktioniert seit gestern nicht mehr. Das Wasser läuft nicht ab.', redemittel:['Sie funktioniert nicht.','Das Gerät ist kaputt.','Seit gestern …']},
        {amanda:'Das tut mir leid. Wann haben Sie die Maschine gekauft?', hinweis:'Sag, wann du gekauft hast. Denk an vor plus Zeit.', beispiel:'Vor drei Wochen, am 5. Juni. Ich habe die Rechnung hier.', redemittel:['Vor … Wochen.','Am … habe ich sie gekauft.','Ich habe die Rechnung hier.']},
        {amanda:'Gut, dann haben Sie noch Garantie. Ein Techniker kann am Donnerstag zwischen 8 und 12 Uhr kommen. Passt das?', hinweis:'Sag zu oder schlage höflich einen anderen Termin vor.', beispiel:'Donnerstag passt leider nicht, da arbeite ich. Könnten Sie auch am Freitag?', redemittel:['Ja, das passt.','Könnten Sie auch am …?','Ginge auch nachmittags?']},
        {amanda:'Freitag, 13 bis 17 Uhr, geht das? Dann trage ich das so ein.', hinweis:'Bestätige den Termin und bedanke dich.', beispiel:'Ja, Freitag Nachmittag ist gut. Vielen Dank für Ihre Hilfe!', redemittel:['Ja, das ist gut.','Vielen Dank für Ihre Hilfe.','Auf Wiederhören!']}
      ]
    },
    schreiben: {
      auf: 'Schreibe eine E-Mail an einen Onlineshop. Deine Bestellung ist nicht angekommen.',
      punkte:['Anrede: Sehr geehrte Damen und Herren,','Was hast du bestellt und wann? (Bestellnummer)','Was ist das Problem?','Was möchtest du? (liefern oder Geld zurück)','Gruß und Name'],
      hilfe:'So kann es gehen: Sehr geehrte Damen und Herren, am 3. Juni habe ich bei Ihnen einen Wasserkocher bestellt, Bestellnummer 8842-11. Das Paket ist bis heute nicht angekommen. Könnten Sie bitte prüfen, wo die Lieferung ist? Ich würde gern wissen, wann sie kommt. Mit freundlichen Grüßen, Amina Haddad. Nenne immer die Nummer — ohne Nummer findet niemand deine Bestellung.'
    },
    aus: 'Höflichkeit hörst du an der Melodie: Könnten Sie mir bitte helfen? geht am Ende nach oben und wird weicher gesprochen. Sprich langsamer als sonst und mach eine kleine Pause vor bitte.'
  },
  /* ================= LEKTION 13 ================= */
  {
    nr: 13,
    id: 'kleidung',
    t: 'Kleidung und Wetter',
    ziel: 'Nach dieser Lektion kannst du: Kleidung und Farben benennen, im Geschäft nach Größe und Preis fragen, sagen was dir gefällt und passt, etwas umtauschen und über das Wetter und die Jahreszeiten sprechen.',
    chunks: [
      {de:'Welche Größe haben Sie?', hi:'die erste Frage im Bekleidungsgeschäft', bsp:'Welche Größe haben Sie? — Ich habe Größe 40.'},
      {de:'Ich habe Größe 40.', hi:'Größen in Deutschland: 36, 38, 40 …', bsp:'Ich habe Größe 40, manchmal 42.'},
      {de:'Kann ich das anprobieren?', hi:'anprobieren — an geht ans Ende', bsp:'Kann ich die Hose anprobieren?'},
      {de:'die Umkleidekabine', hi:'der kleine Raum zum Anprobieren', bsp:'Die Umkleidekabine ist hinten rechts.'},
      {de:'Die Hose passt mir nicht.', hi:'passen braucht mir, dir, ihm', bsp:'Die Hose passt mir nicht, sie ist zu eng.'},
      {de:'Sie ist zu klein.', hi:'zu heißt: mehr als gut ist', bsp:'Die Jacke ist zu klein. Haben Sie eine Nummer größer?'},
      {de:'Das gefällt mir.', hi:'gefallen braucht auch mir', bsp:'Der Pullover gefällt mir sehr gut.'},
      {de:'Der gefällt mir besser.', hi:'der als Pronomen: der da', bsp:'Der blaue oder der graue? — Der gefällt mir besser.'},
      {de:'Wie findest du die Jacke?', hi:'so fragst du nach einer Meinung', bsp:'Wie findest du die Jacke? — Sehr schön!'},
      {de:'Ich mag Blau.', hi:'mögen für Vorlieben', bsp:'Ich mag Blau und Grau, kein Rot.'},
      {de:'Ich trage gern Jeans.', hi:'tragen ist das Wort für Kleidung', bsp:'Ich trage gern Jeans und ein T-Shirt.'},
      {de:'Was kostet der Pullover?', hi:'Preis fragen wie im Supermarkt', bsp:'Was kostet der Pullover?'},
      {de:'Der ist im Angebot.', hi:'Angebot heißt: heute günstiger', bsp:'Der ist im Angebot, nur 19 Euro.'},
      {de:'Haben Sie das auch in Rot?', hi:'in plus Farbe', bsp:'Haben Sie das auch in Rot oder in Schwarz?'},
      {de:'Ich möchte das umtauschen.', hi:'mit Kassenzettel, meistens 14 Tage lang', bsp:'Ich möchte das umtauschen, es passt nicht.'},
      {de:'Der Schuh gehört mir.', hi:'gehören braucht mir, dir, ihm', bsp:'Die Jacke gehört mir, die hängt hier seit gestern.'},
      {de:'Wie ist das Wetter heute?', hi:'der Klassiker für jedes Gespräch', bsp:'Wie ist das Wetter heute in Leipzig?'},
      {de:'Es regnet.', hi:'immer mit es', bsp:'Es regnet seit heute Morgen.'},
      {de:'Es ist kalt.', hi:'auch: warm, heiß, kühl, windig', bsp:'Heute ist es kalt und windig.'},
      {de:'Heute sind es zwei Grad.', hi:'Temperatur mit Grad', bsp:'Heute sind es nur zwei Grad.'},
      {de:'Es schneit.', hi:'Schnee kommt vom Himmel', bsp:'Es schneit seit gestern Abend.'},
      {de:'Die Sonne scheint.', hi:'scheinen ist das Wort für die Sonne', bsp:'Die Sonne scheint, wir gehen in den Park.'},
      {de:'Im Winter ist es sehr kalt.', hi:'im plus Jahreszeit', bsp:'Im Winter ist es hier sehr kalt und dunkel.'},
      {de:'Nimm einen Schirm mit!', hi:'mitnehmen — mit geht ans Ende', bsp:'Es regnet gleich. Nimm einen Schirm mit!'}
    ],
    gram: [
      {t:'der, die, das als Pronomen', e:'Im Gespräch ersetzt der, die oder das oft das Nomen. Du zeigst dabei auf die Sache. Das klingt lebendig und ganz normal.', bsp:['Der Pullover? Der gefällt mir.','Die Jacke? Die ist zu teuer.','Das T-Shirt? Das nehme ich.']},
      {t:'welch-: welcher, welche, welches', e:'Mit welch- fragst du nach einer Auswahl. Die Endung passt sich dem Nomen an: welcher bei der, welche bei die, welches bei das.', bsp:['Welcher Pullover gefällt dir?','Welche Größe haben Sie?','Welches T-Shirt nimmst du?']},
      {t:'Personalpronomen im Dativ', e:'Manche Verben brauchen mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen. Das ist der Dativ. Er sagt: für wen gilt das.', bsp:['mir, dir, ihm, ihr','uns, euch, ihnen, Ihnen','Das gefällt mir. Passt es dir?']},
      {t:'Verben mit Dativ: gefallen, gehören, passen', e:'Diese drei Verben drehen den Satz um. Die Sache ist der Chef im Satz, die Person steht im Dativ. Lerne die Sätze als Ganzes.', bsp:['Der Pullover gefällt mir.','Die Schuhe gefallen mir.','Die Jacke gehört ihr.','Die Hose passt mir nicht.']},
      {t:'gern, lieber, am liebsten', e:'Mit gern sagst du, was du magst. lieber ist die Steigerung, am liebsten der Favorit. Dasselbe Muster gibt es bei gut - besser - am besten und viel - mehr - am meisten.', bsp:['Ich trage gern Jeans.','Ich trage lieber Röcke.','Am liebsten trage ich Sportkleidung.','Der blaue gefällt mir besser.']},
      {t:'mögen', e:'mögen sagt, was du magst. Anders als die anderen Modalverben steht es meistens allein, ohne zweites Verb.', bsp:['ich mag — du magst — er mag','wir mögen — ihr mögt — sie mögen','Ich mag Blau. Magst du Rot?']}
    ],
    ueb: [
      {typ:'luecke', f:'Der Pullover gefällt ___ sehr gut.', l:'mir', e:'gefallen braucht den Dativ: mir. Die Sache gefällt, die Person steht im Dativ.'},
      {typ:'luecke', f:'Die Hose passt ___ nicht, sie ist zu eng.', l:'mir', e:'Auch passen braucht den Dativ: Sie passt mir nicht.'},
      {typ:'luecke', f:'Diese Jacke gehört ___. Sie ist von Olena.', l:'ihr', e:'Olena ist sie, im Dativ wird daraus ihr.'},
      {typ:'luecke', f:'___ Größe haben Sie?', l:'Welche', e:'die Größe ist ein die-Wort, deshalb welche.'},
      {typ:'luecke', f:'___ Pullover nimmst du, den blauen oder den grauen?', l:'Welchen', e:'nehmen braucht den Akkusativ, deshalb welchen mit -en.'},
      {typ:'luecke', f:'Ich trage gern Jeans, aber ___ trage ich Sportkleidung.', l:'lieber', e:'lieber ist die Steigerung von gern.'},
      {typ:'wahl', f:'Die Jacke ist zu klein. Was sagst du im Geschäft?', o:['Haben Sie die auch eine Nummer größer?','Die Jacke gefällt mir nicht.','Ich möchte zahlen.'], l:0, e:'Bei der Größe fragst du nach einer Nummer größer oder kleiner. Das versteht jede Verkäuferin sofort.'},
      {typ:'wahl', f:'Es sind zwei Grad und es regnet. Was ziehst du an?', o:['ein T-Shirt und Sandalen','eine Jacke, einen Schal und feste Schuhe','einen Badeanzug'], l:1, e:'Zwei Grad ist kalt, Regen macht es unangenehm. Jacke, Schal und feste Schuhe passen.'},
      {typ:'wahl', f:'Welcher Satz ist richtig?', o:['Ich gefalle den Pullover.','Der Pullover gefällt mir.','Ich gefällt der Pullover.'], l:1, e:'Bei gefallen ist die Sache das Subjekt: Der Pullover gefällt mir. Genau umgekehrt wie in vielen Sprachen.'},
      {typ:'bausteine', l:'Die Schuhe gefallen mir sehr gut.', teile:['Die','Schuhe','gefallen','mir','sehr','gut'], e:'Die Schuhe sind mehrere, deshalb gefallen mit -en.'},
      {typ:'bausteine', l:'Kann ich die Hose bitte anprobieren?', teile:['Kann','ich','die','Hose','bitte','anprobieren'], e:'Frage mit Modalverb: Kann vorne, anprobieren am Ende.'},
      {typ:'bausteine', l:'Im Winter ist es hier sehr kalt.', teile:['Im','Winter','ist','es','hier','sehr','kalt'], e:'Wenn Im Winter vorne steht, kommt das Verb ist sofort danach.'},
      {typ:'paare', p:[['der Frühling','März, April, Mai'],['der Sommer','Juni, Juli, August'],['der Herbst','September, Oktober, November'],['der Winter','Dezember, Januar, Februar'],['Es schneit.','weiß und kalt']], e:'Die vier Jahreszeiten mit ihren Monaten. In Deutschland spürst du alle vier deutlich.'},
      {typ:'hoeren', text:'Das Wetter am Dienstag: morgens noch Regen, am Nachmittag Sonne, Höchsttemperatur vierzehn Grad.', f:'Wie wird der Nachmittag?', o:['Regen','Sonne','Schnee'], l:1, e:'Der Wetterbericht geht der Reihe nach: erst morgens, dann am Nachmittag.'},
      {typ:'hoeren', text:'Die Hose in Größe 40 haben wir leider nicht mehr, nur noch 38 und 42.', f:'Welche Größe gibt es nicht?', o:['38','40','42'], l:1, e:'Nach leider nicht mehr kommt das, was fehlt: Größe 40.'},
      {typ:'sprechen', f:'Sag im Geschäft: Entschuldigung, kann ich das anprobieren? Ich habe Größe 40.', l:'Entschuldigung, kann ich', e:'anprobieren steht am Ende. Sprich die Zahl deutlich, damit es keine Verwechslung gibt.'},
      {typ:'uebersetzen', f:'I like the blue jacket. It suits me.', l:'Die blaue Jacke gefällt mir. Sie passt mir.', e:'Zweimal Dativ: gefällt mir und passt mir. Beides sind Verben mit Dativ.'},
      {typ:'artikel', w:'Jacke', l:'die', e:'die Jacke. Wörter auf -e sind meistens die-Wörter.'}
    ],
    dialog: {
      ort: 'Du bist in einem Bekleidungsgeschäft. Du suchst eine Jacke für den Winter. Eine Verkäuferin kommt zu dir.',
      schritte: [
        {amanda:'Guten Tag! Kann ich Ihnen helfen?', hinweis:'Sag, was du suchst.', beispiel:'Guten Tag. Ja, ich suche eine warme Jacke für den Winter.', redemittel:['Ich suche …','Ich schaue nur, danke.','Haben Sie …?']},
        {amanda:'Gern. Welche Größe haben Sie?', hinweis:'Nenne deine Größe.', beispiel:'Ich habe Größe 40.', redemittel:['Ich habe Größe …','Das weiß ich nicht genau.','Meistens 40.']},
        {amanda:'Hier, diese ist sehr warm. Wir haben sie in Schwarz, Blau und Rot.', hinweis:'Wähle eine Farbe und frag, ob du sie anprobieren kannst.', beispiel:'Die blaue gefällt mir. Kann ich sie anprobieren?', redemittel:['Die … gefällt mir.','Kann ich sie anprobieren?','Haben Sie das auch in …?']},
        {amanda:'Natürlich, die Umkleidekabine ist da hinten. — Und, wie ist sie?', hinweis:'Sag, ob sie passt. Denk an passt mir.', beispiel:'Sie ist ein bisschen zu klein. Haben Sie eine Nummer größer?', redemittel:['Sie passt mir gut.','Sie ist zu klein.','Haben Sie eine Nummer größer?']},
        {amanda:'Hier ist die 42. — Sehr schön! Die kostet 79 Euro, aber sie ist heute im Angebot: 59 Euro.', hinweis:'Entscheide dich und sag, wie du zahlst.', beispiel:'Gut, die nehme ich. Ich zahle mit Karte.', redemittel:['Die nehme ich.','Das ist mir zu teuer.','Ich zahle mit Karte.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe Olena eine Nachricht über das Wetter und deine Kleidung für morgen.',
      punkte:['Wie ist das Wetter heute?','Wie wird das Wetter morgen?','Was ziehst du an?','Ein Rat für sie (Schirm, Jacke)','Frage und Gruß'],
      hilfe:'So kann es aussehen: Hallo Olena, heute regnet es den ganzen Tag und es sind nur acht Grad. Morgen soll die Sonne scheinen. Ich ziehe eine Jacke und feste Schuhe an. Nimm einen Schirm mit! Gehen wir trotzdem in den Park? Liebe Grüße, Amina. Benutze es bei Wetterwörtern: Es regnet, es schneit, es ist kalt.'
    },
    aus: 'Der Umlaut ö in schön, Größe, möchte und Röcke: Lippen rund wie beim o, aber innen e sagen. Übe im Wechsel: schon - schön, Rocke - Röcke, Grosse - Größe.'
  },

  /* ================= LEKTION 14 ================= */
  {
    nr: 14,
    id: 'feste',
    t: 'Feste',
    ziel: 'Nach dieser Lektion kannst du: das Datum sagen und schreiben, jemanden einladen, eine Einladung annehmen oder absagen, gratulieren und über deutsche Feiertage sprechen.',
    chunks: [
      {de:'Wann hast du Geburtstag?', hi:'Geburtstag haben — ohne Artikel', bsp:'Wann hast du Geburtstag? — Am dritten Mai.'},
      {de:'Am dritten Mai.', hi:'am plus Ordinalzahl plus Monat', bsp:'Ich habe am dritten Mai Geburtstag.'},
      {de:'Herzlichen Glückwunsch!', hi:'zum Geburtstag und zu allem Schönen', bsp:'Herzlichen Glückwunsch zum Geburtstag!'},
      {de:'Alles Gute!', hi:'kurz und passt fast immer', bsp:'Alles Gute für dich und deine Familie!'},
      {de:'Ich werde vierzig.', hi:'werden für das neue Alter', bsp:'Am Samstag werde ich vierzig.'},
      {de:'Ich möchte dich einladen.', hi:'einladen — ein geht ans Ende', bsp:'Ich möchte dich zu meiner Party einladen.'},
      {de:'Ich lade dich zu meinem Geburtstag ein.', hi:'dich ist der Akkusativ von du', bsp:'Ich lade dich zu meinem Geburtstag ein.'},
      {de:'Kommst du?', hi:'die direkte Frage nach der Einladung', bsp:'Am Samstag um sieben. Kommst du?'},
      {de:'Ich komme gern.', hi:'die freundlichste Zusage', bsp:'Danke, ich komme sehr gern!'},
      {de:'Ich kann leider nicht, denn ich muss arbeiten.', hi:'denn nennt den Grund', bsp:'Ich kann leider nicht, denn ich muss arbeiten.'},
      {de:'Danke für die Einladung.', hi:'sagst du immer, auch bei einer Absage', bsp:'Vielen Dank für die Einladung!'},
      {de:'Ich bringe einen Kuchen mit.', hi:'mitbringen — mit geht ans Ende', bsp:'Ich bringe einen Kuchen und Getränke mit.'},
      {de:'das Geschenk', hi:'in Deutschland packt man Geschenke ein', bsp:'Das Geschenk ist von uns allen.'},
      {de:'Wir feiern zu Hause.', hi:'feiern ist das Wort für Fest', bsp:'Wir feiern zu Hause, im Garten.'},
      {de:'Frohe Weihnachten!', hi:'am 24., 25. und 26. Dezember', bsp:'Frohe Weihnachten und ein gutes neues Jahr!'},
      {de:'Gutes neues Jahr!', hi:'am 31.12. und in den ersten Januartagen', bsp:'Gutes neues Jahr! Alles Gute für 2027!'},
      {de:'Frohe Ostern!', hi:'im Frühling, mit Eiern und langem Wochenende', bsp:'Frohe Ostern! Wir suchen Eier im Garten.'},
      {de:'Viel Glück!', hi:'vor einer Prüfung oder einem Termin', bsp:'Viel Glück morgen bei der Prüfung!'},
      {de:'der Feiertag', hi:'Geschäfte zu, viele haben frei', bsp:'Der 3. Oktober ist ein Feiertag.'},
      {de:'Am ersten Mai haben wir frei.', hi:'der 1. Mai ist der Tag der Arbeit', bsp:'Am ersten Mai haben wir frei.'},
      {de:'Wir sehen uns dann!', hi:'ein warmer Abschied nach einer Zusage', bsp:'Bis Samstag, wir sehen uns dann!'},
      {de:'Ich schreibe dir eine Karte.', hi:'Karten schreibt man in Deutschland noch oft', bsp:'Ich schreibe dir eine Karte zum Geburtstag.'},
      {de:'Prost!', hi:'beim Anstoßen mit Gläsern, dabei in die Augen schauen', bsp:'Auf dich! Prost!'},
      {de:'Es wird bestimmt schön.', hi:'werden für die Zukunft', bsp:'Es wird bestimmt ein schöner Abend.'}
    ],
    gram: [
      {t:'Ordinalzahlen: der erste, der zweite', e:'Bis 19 hängst du -te an die Zahl, ab 20 hängst du -ste an. Ein paar sind unregelmäßig: erste, dritte, siebte. Beim Datum steht ein Punkt hinter der Zahl: der 3. Mai.', bsp:['1. erste — 2. zweite — 3. dritte','4. vierte — 7. siebte — 8. achte','20. zwanzigste — 31. einunddreißigste']},
      {t:'Das Datum sagen und schreiben', e:'Auf die Frage Wann? antwortest du mit am plus Ordinalzahl mit -n: am dritten Mai. Geschrieben wird es kurz: am 3. Mai oder 03.05.', bsp:['Heute ist der erste Juni.','Ich habe am dritten Mai Geburtstag.','Der Termin ist am 24. Dezember.']},
      {t:'Personalpronomen im Akkusativ', e:'Nach vielen Verben stehen die kurzen Formen im Akkusativ: mich, dich, ihn, sie, es, uns, euch, sie, Sie. Nur er wird zu ihn — die anderen sind leicht.', bsp:['Ich lade dich ein.','Ruf mich an!','Ich hole ihn ab.','Wir besuchen euch am Sonntag.']},
      {t:'denn: der Grund', e:'denn verbindet zwei Sätze und nennt den Grund. Das Schöne daran: nach denn bleibt der Satz ganz normal, das Verb steht wieder auf Platz 2.', bsp:['Ich komme nicht, denn ich muss arbeiten.','Wir feiern draußen, denn das Wetter ist schön.']},
      {t:'werden', e:'werden heißt: etwas verändert sich. Damit sagst du dein neues Alter und sprichst über die Zukunft. Die Formen: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden.', bsp:['Ich werde am Samstag vierzig.','Es wird bestimmt schön.','Mein Sohn wird nächstes Jahr sechs.']}
    ],
    ueb: [
      {typ:'luecke', f:'Ich habe am ___ Mai Geburtstag. (3.)', l:'dritten', e:'Beim Datum mit am bekommt die Ordinalzahl ein -n: am dritten Mai.'},
      {typ:'luecke', f:'Heute ist der ___ Juni. (1.)', l:'erste', e:'Ohne am steht die Grundform: der erste Juni. erste ist unregelmäßig.'},
      {typ:'luecke', f:'Ich lade ___ zu meinem Geburtstag ein.', l:'dich', e:'du wird im Akkusativ zu dich. einladen ist trennbar, ein steht am Ende.'},
      {typ:'luecke', f:'Yusuf hat kein Auto. Ich hole ___ ab.', l:'ihn', e:'er wird im Akkusativ zu ihn — die einzige Form, die sich stark ändert.'},
      {typ:'luecke', f:'Ich komme leider nicht, ___ ich muss arbeiten.', l:'denn', e:'denn nennt den Grund. Danach bleibt der Satz normal: ich muss arbeiten.'},
      {typ:'luecke', f:'Am Samstag ___ ich vierzig.', l:'werde', e:'werden für das neue Alter: ich werde vierzig.'},
      {typ:'wahl', f:'Es ist der Geburtstag von Frau Berger. Was sagst du?', o:['Gute Besserung!','Herzlichen Glückwunsch!','Viel Glück!'], l:1, e:'Herzlichen Glückwunsch gehört zum Geburtstag. Gute Besserung sagt man zu Kranken, Viel Glück vor einer Prüfung.'},
      {typ:'wahl', f:'Wie schreibt man den 24. Dezember kurz?', o:['24.12.','12.24.','24/12'], l:0, e:'In Deutschland steht der Tag vorn, dann der Monat, mit Punkten: 24.12.'},
      {typ:'wahl', f:'Was ist der 3. Oktober in Deutschland?', o:['ein normaler Arbeitstag','ein Feiertag','der erste Schultag'], l:1, e:'Der 3. Oktober ist der Tag der Deutschen Einheit. Die Geschäfte sind zu.'},
      {typ:'bausteine', l:'Ich lade dich zu meiner Party ein.', teile:['Ich','lade','dich','zu','meiner','Party','ein'], e:'lade auf Platz 2, ein ganz am Ende. dich ist der Akkusativ von du.'},
      {typ:'bausteine', l:'Ich komme nicht, denn ich muss arbeiten.', teile:['Ich','komme','nicht,','denn','ich','muss','arbeiten'], e:'Nach denn steht ein ganz normaler Satz: ich muss arbeiten.'},
      {typ:'bausteine', l:'Ich bringe einen Kuchen und Getränke mit.', teile:['Ich','bringe','einen','Kuchen','und','Getränke','mit'], e:'mitbringen ist trennbar: mit steht ganz am Ende, hinter beiden Sachen.'},
      {typ:'paare', p:[['Herzlichen Glückwunsch!','zum Geburtstag'],['Frohe Weihnachten!','am 25. Dezember'],['Gutes neues Jahr!','am 1. Januar'],['Gute Besserung!','wenn jemand krank ist'],['Viel Glück!','vor einer Prüfung']], e:'Jeder Anlass hat seinen festen Satz. Wenn du diese fünf kannst, bist du das ganze Jahr gut ausgerüstet.'},
      {typ:'hoeren', text:'Meine Party ist am Samstag, dem einundzwanzigsten Juni, ab neunzehn Uhr bei mir zu Hause.', f:'Wann ist die Party?', o:['am 21. Juni um 19 Uhr','am 12. Juni um 19 Uhr','am 21. Juli um 9 Uhr'], l:0, e:'einundzwanzigsten ist der 21. Höre auf die Reihenfolge: erst die Eins, dann die Zwanzig.'},
      {typ:'hoeren', text:'Danke für die Einladung! Ich komme sehr gern und bringe einen Salat mit.', f:'Was macht die Person?', o:['Sie sagt ab.','Sie sagt zu und bringt etwas mit.','Sie fragt nach der Adresse.'], l:1, e:'Ich komme sehr gern ist eine klare Zusage. Etwas mitzubringen ist in Deutschland üblich.'},
      {typ:'sprechen', f:'Lade jemanden ein: Ich lade dich zu meinem Geburtstag ein. Am Samstag, dem 21. Juni, um sieben. Kommst du?', l:'Ich lade dich', e:'Einladung, Datum, Uhrzeit, Frage. Denk an das kleine ein am Satzende.'},
      {typ:'uebersetzen', f:'Happy birthday! All the best!', l:'Herzlichen Glückwunsch zum Geburtstag! Alles Gute!', e:'Die feste Wendung ist Herzlichen Glückwunsch zum Geburtstag. Alles Gute passt als Zusatz.'},
      {typ:'ordnen', l:['Hallo Yusuf, ich feiere am Samstag meinen Geburtstag.','Ich lade dich herzlich ein.','Wir fangen um sieben Uhr an, bei mir zu Hause.','Bringst du bitte nichts mit, ich koche schon.','Sag mir kurz Bescheid. Liebe Grüße, Amina'], f:'Bring die Einladung in die richtige Reihenfolge.', e:'Anlass, Einladung, Zeit und Ort, Hinweis, Bitte um Antwort — so ist jede Einladung vollständig.'}
    ],
    dialog: {
      ort: 'Du triffst Olena im Kurs. Du möchtest sie zu deinem Geburtstag einladen.',
      schritte: [
        {amanda:'Hallo! Du siehst fröhlich aus. Gibt es etwas zu feiern?', hinweis:'Sag, dass du Geburtstag hast, und nenne das Datum.', beispiel:'Ja! Am Samstag habe ich Geburtstag, am einundzwanzigsten Juni.', redemittel:['Ich habe am … Geburtstag.','Am Samstag werde ich …','Ja, ich feiere am …']},
        {amanda:'Oh, herzlichen Glückwunsch im Voraus! Wirst du feiern?', hinweis:'Lade sie ein.', beispiel:'Danke! Ja, ich feiere zu Hause. Ich möchte dich einladen.', redemittel:['Ich möchte dich einladen.','Ich lade dich ein.','Kommst du?']},
        {amanda:'Sehr gern! Wann fängt es an, und wo genau wohnst du?', hinweis:'Nenne Uhrzeit und Adresse.', beispiel:'Um sieben Uhr, Gartenstraße 14, im zweiten Stock.', redemittel:['Um … Uhr.','Ich wohne in der …','Es fängt um … an.']},
        {amanda:'Perfekt. Soll ich etwas mitbringen? Einen Salat vielleicht?', hinweis:'Antworte freundlich, mit ja oder nein.', beispiel:'Sehr gern, ein Salat wäre schön. Getränke habe ich genug.', redemittel:['Sehr gern, …','Nein, bring bitte nichts mit.','Ein Salat wäre schön.']},
        {amanda:'Abgemacht. Ich freue mich! Bis Samstag also.', hinweis:'Verabschiede dich freundlich.', beispiel:'Ich freue mich auch. Wir sehen uns dann. Bis Samstag!', redemittel:['Wir sehen uns dann!','Bis Samstag!','Ich freue mich auch.']}
      ]
    },
    schreiben: {
      auf: 'Schreibe eine Einladung zu deinem Geburtstag. Sechs bis acht Zeilen.',
      punkte:['Anrede','Was feierst du?','Wann? Datum und Uhrzeit','Wo? Adresse','Soll jemand etwas mitbringen?','Bitte um Antwort','Gruß'],
      hilfe:'So kann es aussehen: Liebe Olena, am Samstag, dem 21. Juni, werde ich vierzig. Das möchte ich feiern und lade dich herzlich ein. Wir fangen um 19 Uhr an, bei mir zu Hause, Gartenstraße 14. Bring bitte nichts mit, ich koche. Sag mir bis Donnerstag Bescheid. Liebe Grüße, Amina. An Freunde schreibst du Liebe oder Lieber, an Ämter Sehr geehrte.'
    },
    aus: 'Die Endung -st und -ste in den Ordinalzahlen: erSTE, zwanzigSTE, einunddreißigSTE. Sprich das s und das t deutlich getrennt, nicht wie sch. Übe: erste - zweite - dritte - vierte - zwanzigste.'
  }

  ]
};
