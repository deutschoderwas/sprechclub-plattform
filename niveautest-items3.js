/* ============================================================
   deutschoderwas · Niveau-Test – Hörverstehen-Erweiterung (prüfungsnah)
   +6 längere/komplexere Hörtexte (Durchsage, Arzt-AB, Bericht, Interview,
   Vortrag, Kommentar) mit je 2 Fragen (Detail + Inferenz) = 12 Hör-Items.
   options[0] = richtig (Engine mischt die Anzeige). Lädt NACH niveautest-data.js.
   ============================================================ */
(function () {
  var D = window.NIVEAUTEST;
  if (!D || !D.ITEMS || !D.AUDIO) return;
  var CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/';
  var IMG = {
    ubahn:     CDN + 'hf_20260621_111452_f49dcf84-b3d6-4938-bce4-9ca9f7351e5e.png',
    arzt:      CDN + 'hf_20260621_111453_63e52fab-65b2-46d4-a440-5bc3c55b0ceb.png',
    homeoffice:CDN + 'hf_20260621_111456_72408a38-b747-49ad-ad2d-a354b1025123.png',
    wohnung:   CDN + 'hf_20260621_111457_f222a827-e02a-4d40-a3ec-035ec20f3dd4.png',
    ki:        CDN + 'hf_20260621_111459_2bc09362-9c38-4b2f-84ce-0d50798f2c4b.png',
    tempo:     CDN + 'hf_20260621_111501_a3bedff0-6517-4231-805f-c9eaf76cdc64.png'
  };

  // ---- Neue (längere) Hör-Audios ----
  D.AUDIO.p_ubahn      = { url: CDN + 'hf_20260621_111400_8f0dc033-0f7c-4a44-b3b6-48fb3e4bf089.mp3', script: 'Sehr geehrte Fahrgäste, wegen Bauarbeiten zwischen Hauptbahnhof und Messe fällt die Linie U2 heute zwischen neun und vierzehn Uhr aus. Als Ersatz fahren Busse im Zehn-Minuten-Takt ab Ausgang Nord. Reisende mit viel Gepäck nutzen bitte den barrierefreien Eingang am Südausgang.' };
  D.AUDIO.p_arzt       = { url: CDN + 'hf_20260621_111402_f0865733-e724-4113-94cc-fd475ca6517d.mp3', script: 'Guten Tag, hier ist die Praxis Doktor Berger. Ihr Termin am Mittwoch um zehn Uhr muss leider verschoben werden, da der Arzt kurzfristig zu einer Fortbildung muss. Wir bieten Ihnen stattdessen Donnerstag um halb neun an. Bitte bringen Sie Ihre Versichertenkarte und die Überweisung mit.' };
  D.AUDIO.p_homeoffice = { url: CDN + 'hf_20260621_111405_8713a9e1-4813-47dd-a12b-435a600839cd.mp3', script: 'Eine aktuelle Studie zeigt: Immer mehr Berufstätige arbeiten von zu Hause. Während die Produktivität gestiegen ist, klagen viele über die fehlende Trennung zwischen Beruf und Privatleben. Fachleute empfehlen feste Arbeitszeiten und einen separaten Arbeitsplatz.' };
  D.AUDIO.p_wohnung    = { url: CDN + 'hf_20260621_111425_0028d400-7b41-4bb2-b35f-477f4045e40f.mp3', script: 'Frau Klein, warum haben so viele junge Leute Schwierigkeiten, eine bezahlbare Wohnung zu finden? – Das liegt vor allem an den stark gestiegenen Mieten in den Großstädten. Viele weichen deshalb ins Umland aus, nehmen dafür aber deutlich längere Arbeitswege in Kauf.' };
  D.AUDIO.p_ki         = { url: CDN + 'hf_20260621_111428_8f791a0c-f412-4913-9492-479c783c0b08.mp3', script: 'Der Vortrag widmete sich der Frage, inwiefern künstliche Intelligenz den Arbeitsmarkt verändert. Der Referent betonte, dass nicht ganze Berufe verschwinden, sondern vor allem einzelne Tätigkeiten automatisiert werden. Entscheidend sei die Bereitschaft, sich kontinuierlich weiterzubilden.' };
  D.AUDIO.p_tempo      = { url: CDN + 'hf_20260621_111431_2a99cda3-5c91-49b7-969b-75a9d1593a31.mp3', script: 'In der Debatte um das Tempolimit zeigte sich der Kommentator skeptisch. Zwar seien die Umweltargumente nachvollziehbar, doch bezweifle er, dass ein generelles Limit den entscheidenden Unterschied mache. Wichtiger sei der Ausbau des öffentlichen Nahverkehrs.' };

  function H(id, level, audio, img, q, options, explain) {
    return { id: id, level: level, skill: 'hoeren', audio: audio, img: img, q: q, options: options, answer: 0, explain: explain, exam: true };
  }

  var more = [
    /* B1 – Durchsage (Detail) */
    H('b1h3','B1','p_ubahn',IMG.ubahn,'Warum fällt die U2 heute aus?',
      ['Wegen Bauarbeiten','Wegen eines Streiks','Wegen eines Unfalls','Wegen eines Stromausfalls'],
      '„… wegen Bauarbeiten … fällt die Linie U2 … aus."'),
    H('b1h4','B1','p_ubahn',IMG.ubahn,'Wo fahren die Ersatzbusse ab?',
      ['Am Ausgang Nord','Am Südausgang','Am Hauptbahnhof','An der Messe'],
      'Busse fahren „ab Ausgang Nord" – der Südausgang ist nur für Reisende mit viel Gepäck.'),
    /* B1 – Anrufbeantworter (Detail) */
    H('b1h5','B1','p_arzt',IMG.arzt,'Warum muss der Termin verschoben werden?',
      ['Der Arzt muss zu einer Fortbildung','Der Arzt ist krank','Die Praxis ist geschlossen','Der Patient hat abgesagt'],
      '„… da der Arzt kurzfristig zu einer Fortbildung muss."'),
    H('b1h6','B1','p_arzt',IMG.arzt,'Was soll der Patient zum Termin mitbringen?',
      ['Versichertenkarte und Überweisung','Nur die Versichertenkarte','Ein Rezept','Bargeld'],
      '„Bitte bringen Sie Ihre Versichertenkarte und die Überweisung mit."'),
    /* B2 – Radiobericht (Detail + Empfehlung) */
    H('b2h2','B2','p_homeoffice',IMG.homeoffice,'Was ist laut Studie im Homeoffice gestiegen?',
      ['Die Produktivität','Die Krankheitstage','Die Arbeitszeit','Das Gehalt'],
      '„… während die Produktivität gestiegen ist …"'),
    H('b2h3','B2','p_homeoffice',IMG.homeoffice,'Was empfehlen die Fachleute?',
      ['Feste Arbeitszeiten und einen separaten Arbeitsplatz','Ganz auf Homeoffice verzichten','Längere Arbeitszeiten','Mehr Meetings im Büro'],
      '„… empfehlen feste Arbeitszeiten und einen separaten Arbeitsplatz."'),
    /* B2 – Interview (Grund + Folge) */
    H('b2h4','B2','p_wohnung',IMG.wohnung,'Was ist laut Frau Klein der Hauptgrund für die Wohnungsprobleme?',
      ['Die stark gestiegenen Mieten','Zu wenige Wohnungen im Umland','Zu strenge Vermieter','Die schlechte Verkehrsanbindung'],
      '„Das liegt vor allem an den stark gestiegenen Mieten."'),
    H('b2h5','B2','p_wohnung',IMG.wohnung,'Was nehmen viele junge Leute dafür in Kauf?',
      ['Deutlich längere Arbeitswege','Höhere Mieten','Kleinere Wohnungen','Schlechter bezahlte Jobs'],
      '„… weichen ins Umland aus, nehmen dafür aber deutlich längere Arbeitswege in Kauf."'),
    /* C1 – Vortrag (Inferenz) */
    H('c1h2','C1','p_ki',IMG.ki,'Was verschwindet laut dem Referenten gerade NICHT?',
      ['Ganze Berufe','Einzelne Tätigkeiten','Routineaufgaben','Bestimmte Arbeitsschritte'],
      '„… dass nicht ganze Berufe verschwinden, sondern einzelne Tätigkeiten automatisiert werden."'),
    H('c1h3','C1','p_ki',IMG.ki,'Was ist laut Referent entscheidend?',
      ['Die Bereitschaft zur kontinuierlichen Weiterbildung','Ein Verbot von künstlicher Intelligenz','Mehr neue Arbeitsplätze','Kürzere Arbeitszeiten'],
      '„Entscheidend sei … die Bereitschaft …, sich kontinuierlich weiterzubilden."'),
    /* C1 – Kommentar (Haltung + Wertung) */
    H('c1h4','C1','p_tempo',IMG.tempo,'Wie steht der Kommentator zum generellen Tempolimit?',
      ['Eher skeptisch','Voll und ganz dafür','Strikt dagegen','Ihm ist es gleichgültig'],
      'Er ist skeptisch, ob ein Limit „den entscheidenden Unterschied" macht – lehnt die Umweltargumente aber nicht ab.'),
    H('c1h5','C1','p_tempo',IMG.tempo,'Was hält der Kommentator für wichtiger?',
      ['Den Ausbau des öffentlichen Nahverkehrs','Höhere Strafen für Raser','Den Bau neuer Autobahnen','Rein symbolische Maßnahmen'],
      '„Wichtiger sei …, den Ausbau des öffentlichen Nahverkehrs voranzutreiben."')
  ];
  Array.prototype.push.apply(D.ITEMS, more);
})();
