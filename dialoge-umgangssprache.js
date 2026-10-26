/* ============================================================
   dialoge-umgangssprache.js — so wird wirklich gesprochen

   Julia (Übergabe, Oktober 2026): Umgangssprache fehlte im ganzen
   Lernbereich. Die neuen B2/C1-Gespräche haben sie schon; dieses
   Blatt holt die älteren B2/C1-Gespräche nach.

   Zwei Fälle:
   - Die Zeile klang schon umgangssprachlich („Ich brauch einen
     Namen“) -> sie bleibt, dazu kommt nur der Klartext.
   - Die Zeile war glattes Schriftdeutsch, obwohl in der Situation
     niemand so redet (Kollege, Nachbarin, Patient) -> sie wird
     gesprochen wie im Alltag, und das alte Schriftdeutsch steht
     jetzt als Klartext darunter. Es geht also nichts verloren.

   Die Antworten der Lernenden (beispiel) bleiben unverändert:
   Sie sollen verstehen, wie gesprochen wird — antworten dürfen
   sie in sauberem Deutsch.

   Wird NACH dialoge.js und dialoge-neu.js geladen. Nimmt man die
   Zeile in konto.html heraus, ist alles wie vorher.
   ============================================================ */
(function () {
  if (!window.DIALOGE) return;

  /* id -> { Schrittnummer: { amanda: neu (optional), klartext } } */
  var U = {
  /* ---------- C1: klang schon wie gesprochen, nur Klartext dazu ---------- */
  'c1-aufgabe-zurueckgeben': {
    1: { klartext: 'Ach, das ist nicht so schlimm. Zehn Folien, ein paar Zahlen, das Übliche.' },
    2: { klartext: 'Dann nimm doch einfach die Zahlen vom letzten Quartal.' },
    4: { klartext: 'Gut, dann die Auswertung. Aber für Donnerstag brauche ich irgendetwas.' } },
  'c1-angehoerige-vorwurf': {
    0: { klartext: 'Ich verstehe das nicht. Meine Mutter trägt seit Montag dieselbe Bluse.' },
    1: { klartext: 'Sie haben doch sicher zu wenig Personal. Sie können das ruhig sagen.' } },
  'c1-fehler-in-der-lieferkette': {
    0: { klartext: 'Wer war dafür verantwortlich? Ich brauche einen Namen für die Meldung.' },
    1: { klartext: 'Ich habe keine zehn Minuten Zeit. Der Kunde ruft jede halbe Stunde an.' },
    3: { klartext: 'Gut. Schreib es auf, ich brauche es für die Akte.' } },
  'c1-gehalt-und-luecke': {
    3: { klartext: '44.000 Euro wären möglich. Nach sechs Monaten sehen wir uns das noch einmal an.' },
    4: { klartext: 'Das ist fair. Ich schicke Ihnen bis Freitag ein Angebot.' } },
  'c1-gast-wird-laut': {
    0: { klartext: 'Wir warten jetzt seit fünfundvierzig Minuten. Das ist unverschämt!' },
    1: { klartext: 'Da gibt es nichts zu klären. Wir gehen.' } },
  'c1-amt-falscher-bescheid': {
    0: { klartext: 'Der Bescheid ist verschickt. Daran kann ich jetzt nichts mehr ändern.' },
    1: { klartext: 'Hier steht Januar bis März. So hat es das System ausgegeben.' },
    2: { klartext: 'Hier warten noch zwanzig Personen.' } },
  'c1-arzt-nicht-abspeisen-lassen': {
    1: { klartext: 'Das haben viele Menschen. Sollen wir in vier Wochen noch einmal nachsehen?' },
    3: { klartext: 'Gut, machen wir das. Einen Termin für die Blutabnahme bekommen Sie an der Anmeldung.' } },
  'c1-bank-mitverkauf-abwehren': {
    0: { klartext: 'Den Kredit bekommen Sie. Die Restschuldversicherung nehme ich gleich mit in den Vertrag, das machen fast alle.' },
    2: { klartext: '214 statt 189 Euro im Monat. Dafür sind Sie abgesichert, falls etwas passiert.' } },
  'c1-nachbar-vorwurf-laerm': {
    0: { klartext: 'Ich sage es Ihnen freundlich: Bei Ihnen ist ständig Lärm. Gestern wieder bis nach zehn Uhr.' },
    1: { klartext: 'Letzte Woche war es auch laut.' },
    4: { klartext: 'Na ja. Wir werden sehen.' } },
  'c1-laden-reklamation': {
    2: { klartext: 'Und was ist damit? Für mich sieht das nach normalem Verschleiß aus.' } },
  'c1-elterngespraech-schule': {
    1: { klartext: 'Vor allem in Mathematik. Ich glaube, da versteht er nicht richtig, was wir machen.' },
    4: { klartext: 'Ich frage einmal nach.' } },
  'c1-feier-woher-kommen-sie': {
    2: { klartext: 'Ich sage immer: Wer hierherkommt, muss sich auch anpassen.' },
    3: { klartext: 'Ich meine das gar nicht böse.' } },

  /* ---------- B2 / B2–C1: so spricht man da wirklich ---------- */
  'feedback': {
    0: { amanda: 'Du wolltest mich sprechen? Was gibt\'s?', klartext: 'Du wolltest mit mir sprechen? Gibt es ein Problem?' },
    1: { amanda: 'Ja, aber ich hab grad auch echt mega viel um die Ohren.', klartext: 'Ich habe aber auch wahnsinnig viel zu tun gerade.' },
    2: { amanda: 'Okay. Reicht\'s, wenn ich\'s bis zwölf rausschicke?', klartext: 'Okay. Wenn ich es bis zwölf schicke, reicht das?' } },
  'kaution-zurueckfordern': {
    0: { amanda: 'Weber. Ach, Sie sind\'s. Ja, die Kaution — da bin ich noch nicht zu gekommen.', klartext: 'Weber. Ach, Sie sind das. Ja, die Kaution — dazu bin ich noch nicht gekommen.' },
    2: { amanda: 'Na hören Sie mal. Ich mach das seit zwanzig Jahren so, da hat sich noch nie einer beschwert.', klartext: 'Na hören Sie mal. Ich mache das seit zwanzig Jahren so und hatte noch nie Probleme.' },
    3: { amanda: 'Also gut. Aber nix Schriftliches, das machen wir per Handschlag.', klartext: 'Also gut. Aber schriftlich will ich das nicht, ich mache das lieber per Handschlag.' } },
  'kind-wird-geaergert': {
    1: { amanda: 'Davon hab ich bis jetzt nichts mitgekriegt. In dem Alter ärgern die sich halt mal.', klartext: 'Davon habe ich bisher nichts bemerkt. Kinder necken sich in dem Alter nun einmal.' },
    3: { amanda: 'Gucken kann ich. Aber ich kann ja nicht dauernd danebenstehen.', klartext: 'Beobachten kann ich. Aber ich kann nicht ständig danebenstehen.' } },
  'neue-kollegin-zeigen': {
    0: { amanda: 'Also, ich klick hier auf Buchen — und dann? Ich hänge.', klartext: 'Also, ich klicke hier auf Buchen — und dann? Ich komme nicht weiter.' },
    1: { amanda: 'Ehrlich gesagt check ich\'s immer noch nicht. Kannst du\'s noch mal anders erklären?', klartext: 'Ehrlich gesagt habe ich das immer noch nicht verstanden. Kannst du es noch mal anders sagen?' },
    2: { amanda: 'Ah, jetzt hab ich\'s! Und wenn ich mich vertippe?', klartext: 'Ah, jetzt habe ich es verstanden. Und wenn ich mich vertippe?' },
    3: { amanda: 'Danke dir. Ich nerv dich heute bestimmt schon zum zehnten Mal.', klartext: 'Danke. Ich habe das Gefühl, ich frage dich heute schon zum zehnten Mal.' } },
  'aenderung-begruenden': {
    0: { amanda: 'Du willst die Zeichnung ändern? Jetzt? Wir sind mitten in der Fertigung!', klartext: 'Du willst die Zeichnung ändern? Wir sind mitten in der Fertigung.' },
    1: { amanda: 'Wieso das denn? Lief doch bis jetzt.', klartext: 'Warum? Bisher lief es doch.' },
    2: { amanda: 'Und was kostet uns der Spaß?', klartext: 'Was kostet uns das?' } },
  'anamnese-kurz': {
    0: { amanda: 'Tag. Ich hab seit \'n paar Tagen so Bauchweh.', klartext: 'Guten Tag. Ich habe seit ein paar Tagen Bauchschmerzen.' },
    1: { amanda: 'Seit Montag, glaub ich. Mal mehr, mal weniger.', klartext: 'Seit Montag, glaube ich. Mal mehr, mal weniger.' },
    3: { amanda: 'Übel war mir gestern, ja. Fieber hab ich nicht gemessen.', klartext: 'Übel war mir gestern, ja. Fieber habe ich nicht gemessen.' } },
  'befund-erklaeren': {
    0: { amanda: 'Auf dem Zettel stehen so viele Zahlen. Was heißt das denn jetzt?', klartext: 'Auf dem Zettel stehen so viele Zahlen. Was bedeutet das?' },
    2: { amanda: 'Und deswegen bin ich die ganze Zeit so platt?', klartext: 'Und deshalb bin ich so müde?' } },
  'frist-nicht-halten': {
    1: { amanda: 'Hm. Das hör ich nicht gern. Woran hakt\'s denn?', klartext: 'Das höre ich nicht gern. Woran liegt es?' } },
  'angehoerige-kritik': {
    1: { amanda: 'Ärgern ist noch harmlos. Ich frag mich, was hier sonst noch so alles untergeht.', klartext: 'Ärgern ist noch harmlos. Ich frage mich, was hier sonst noch übersehen wird.' } },

  /* ---------- B1 und B1–B2 (27.10.2026): sparsam, eine bis zwei Zeilen ----------
     Nur wo man im echten Leben so redet: Freunde, Familie, Nachbarn,
     Kollegen. Ämter, Praxen, Versicherungen, Polizei und Notruf bleiben
     bei B1 bewusst in Standardsprache. */
  'kunde': {
    0: { amanda: 'Also echt jetzt, das ist schon das dritte Mal, dass die Lieferung zu spät kommt!', klartext: 'Also ehrlich, das ist jetzt das dritte Mal, dass die Lieferung zu spät kommt!' } },
  'sofa-verkaufen': {
    1: { amanda: 'Hm, der Fleck ist größer als gedacht. Und da vorne ist das Leder auch schon rissig. Gehen sechzig statt hundertzwanzig?', klartext: 'Der Fleck ist größer, als ich dachte. Und vorne ist das Leder schon rissig. Würden Sie es für sechzig statt hundertzwanzig Euro verkaufen?' } },
  'laerm-nachbar': {
    0: { klartext: 'Ja? Oh, hallo. Gibt es ein Problem?' },
    1: { amanda: 'Echt? Sorry, hab ich gar nicht gemerkt. Wir feiern halt Geburtstag, ist ja nicht jede Woche.', klartext: 'Wirklich? Entschuldigung, das habe ich nicht bemerkt. Wir feiern Geburtstag, das ist ja nicht jede Woche.' } },
  'essen-reklamieren': {
    1: { amanda: 'Oh, das tut mir leid. Heute war echt die Hölle los, und die Küche ist unterbesetzt.', klartext: 'Oh, das tut mir leid. Es war eben ziemlich viel los, und die Küche ist heute unterbesetzt.' } },
  'umzug-hilfe': {
    0: { amanda: 'Na, wie läuft\'s mit dem Umzug? Schon alles in Kisten?', klartext: 'Na, wie läuft es mit dem Umzug? Bist du schon fertig mit Packen?' },
    3: { amanda: 'Gut. Und was ist mit dem Klavier? Das schlepp ich nicht.', klartext: 'Gut. Und was ist mit dem Klavier? Das trage ich nicht.' } },
  'zu-viel-verlangt': {
    0: { amanda: 'Du, ich bin nächste Woche schon wieder weg. Nimmst du wieder meine Pakete an?', klartext: 'Ich bin nächste Woche wieder verreist. Nimmst du wieder meine Pakete an?' },
    1: { amanda: 'Ach, sind ja nur zehn Tage. Und die Blumen bräuchten auch \'n bisschen Wasser.', klartext: 'Ach, nur zehn Tage. Und die Blumen bräuchten auch Wasser.' } },
  'streit-klaeren': {
    2: { amanda: 'Und warum hast du dann hinterher nix gesagt?', klartext: 'Und warum hast du dann hinterher nichts gesagt?' } },
  'heimweh-sprechen': {
    0: { amanda: 'Du bist heute so still. Alles okay bei dir?', klartext: 'Du bist heute so ruhig. Ist alles in Ordnung?' },
    3: { amanda: 'Du könntest doch einfach öfter mal hinfliegen.', klartext: 'Du könntest doch einfach öfter hinfliegen.' } },
  'erziehungstipp-schwieger': {
    1: { amanda: 'Ich mein ja nur. Kinder müssen früh selbstständig werden.', klartext: 'Ich meine ja nur. Kinder müssen früh selbstständig werden.' },
    2: { amanda: 'Jetzt bist du eingeschnappt. Ich wollt doch nur helfen.', klartext: 'Jetzt bist du beleidigt. Ich wollte doch nur helfen.' } },
  'bildschirmzeit-absprache': {
    1: { amanda: 'Ach komm, \'n bisschen Fernsehen hat noch keinem geschadet.', klartext: 'Ach, ein bisschen Fernsehen hat noch niemandem geschadet.' } },
  'mail-missverstaendnis': {
    0: { amanda: 'Du, deine Mail von gestern hat ganz schön Verwirrung gestiftet. Drei Leute dachten, das Treffen fällt flach.', klartext: 'Deine E-Mail von gestern hat für Verwirrung gesorgt. Drei Personen dachten, das Treffen fällt aus.' } },
  'meeting': {
    1: { amanda: 'Frau Klein meint, das frisst am Anfang zu viel Zeit. Was sagen Sie dazu?', klartext: 'Frau Klein sagt, das kostet am Anfang zu viel Zeit. Was meinen Sie dazu?' } },
  'dienstplan-fehler': {
    2: { amanda: 'Das wird schwierig. Wir haben zwei Ausfälle. Können Sie diese Woche nicht mal die Zähne zusammenbeißen?', klartext: 'Das wird schwierig. Wir haben zwei Ausfälle. Können Sie diese Woche nicht einmal durchhalten?' } },
  'uebergabe-station': {
    0: { amanda: 'So, da bin ich. Wie war\'s in der Früh? Fang mit der Zwölf an.', klartext: 'So, ich bin da. Wie war die Frühschicht? Fang mit Zimmer 12 an.' } },
  'zuschnitt-fehler': {
    2: { amanda: 'Mist. Und jetzt? Das Holz ist nicht billig.', klartext: 'Ärgerlich. Und jetzt? Das Holz ist teuer.' } },
  'rezept-erklaeren': {
    0: { amanda: 'Mmh, das schmeckt mega! Wie machst du das?', klartext: 'Das schmeckt sehr gut! Wie machst du das?' } },
  'reinigung-beschwerde': {
    2: { amanda: 'Vorgestern war\'s auch schon nicht so prickelnd.', klartext: 'Vorgestern war es auch schon nicht besonders sauber.' } },
  'hof-einweisung': {
    0: { amanda: 'Morgen! Ich bin der Neue — was soll ich machen?', klartext: 'Guten Morgen! Ich bin neu. Was soll ich machen?' } },
  'wetter-arbeit': {
    0: { amanda: 'Bei dem Sauwetter können wir doch nicht raus, oder?', klartext: 'Bei dem Regen können wir doch nicht hinaus, oder?' } },
  'phishing-erkennen': {
    0: { amanda: 'Guck mal, die Bank will mein Passwort. Soll ich das eingeben?', klartext: 'Schau mal, die Bank will mein Passwort. Soll ich das eingeben?' },
    2: { amanda: 'Und wenn\'s doch echt ist? Die schreiben, mein Konto wird gesperrt.', klartext: 'Und wenn es doch echt ist? Sie schreiben, dass mein Konto gesperrt wird.' } },
  'unklare-aufgabe': {
    0: { amanda: 'Machen Sie mir bis morgen bitte die Auswertung fertig, wie letztes Mal. Danke!', klartext: 'Bitte machen Sie bis morgen die Auswertung fertig, so wie letztes Mal. Danke!' } },
  'bestellung-kueche': {
    3: { amanda: 'Schade. Na gut, dann eben das Risotto. Aber bitte flott.', klartext: 'Schade. Na gut, dann nehme ich das Risotto. Aber es soll bitte schnell gehen.' } }
  };

  var D = window.DIALOGE;
  var liste = Array.isArray(D) ? D : Object.keys(D).map(function (k) { return D[k]; });
  liste.forEach(function (d) {
    var u = d && U[d.id]; if (!u) return;
    Object.keys(u).forEach(function (i) {
      var s = d.schritte && d.schritte[+i]; if (!s || s.klartext) return;
      if (u[i].amanda) s.amanda = u[i].amanda;
      s.klartext = u[i].klartext;
    });
  });
})();
