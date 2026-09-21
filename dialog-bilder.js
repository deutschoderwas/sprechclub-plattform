/* dialog-bilder.js — 33 Gespräche hatten kein eigenes Foto; statt eines
   leeren Kopfes zeigen sie jetzt ein vorhandenes Bild aus derselben
   Situation (Amt, Praxis, Büro, Lager …). Ein eigenes Foto hat Vorrang:
   Liegt später bilder/dialog/<id>.jpg vor, einfach die Zeile löschen. */
(function () {
  var BILD = {
    'c1-aufgabe-zurueckgeben': 'unklare-aufgabe',
    'c1-angehoerige-vorwurf': 'angehoerige-kritik',
    'c1-fehler-in-der-lieferkette': 'lieferung-annehmen',
    'c1-gehalt-und-luecke': 'bewerbung',
    'c1-gast-wird-laut': 'essen-reklamieren',
    'c1-amt-falscher-bescheid': 'amt',
    'c1-arzt-nicht-abspeisen-lassen': 'beschwerden',
    'c1-bank-mitverkauf-abwehren': 'konto-eroeffnen',
    'c1-nachbar-vorwurf-laerm': 'laerm-nachbar',
    'c1-laden-reklamation': 'reklamation-laden',
    'c1-zug-faellt-aus': 'anschluss-verpasst',
    'c1-elterngespraech-schule': 'elterngespraech-schule',
    'c1-feier-woher-kommen-sie': 'party',
    'einkaufszettel': 'geburtstag-planen',
    'rezept-erklaeren': 'kompliment-annehmen',
    'anamnese-kurz': 'ueberweisung-facharzt',
    'befund-erklaeren': 'beschwerden',
    'reinigung-uebergabe': 'dienstplan-fehler',
    'reinigung-beschwerde': 'feedback',
    'abnahme-begleiten': 'anweisung-baustelle',
    'aenderung-begruenden': 'meeting',
    'hof-einweisung': 'sicherheitsunterweisung',
    'wetter-arbeit': 'anweisung-baustelle',
    'telefon-praxis': 'arzt-termin',
    'telefon-ausrichten': 'telefon-melden',
    'anmeldung-buergeramt': 'aufenthaltstitel-verlaengern',
    'beratungsstelle': 'wohngeld-antrag',
    'kurs-nachfragen': 'nicht-verstanden',
    'kurs-entschuldigung': 'pruefung-wiederholen',
    'weiterbildung-beratung': 'jobcenter-weiterbewilligung',
    'praktikum-fragen': 'praktikum',
    'abo-kuendigen': 'handyvertrag-kuendigen',
    'phishing-erkennen': 'handyvertrag-abschliessen'
  };
  var D = window.DIALOGE; if (!D) return;
  var liste = Array.isArray(D) ? D : Object.keys(D).map(function (k) { return D[k]; });
  liste.forEach(function (d) { if (d && !d.bild && BILD[d.id]) d.bild = BILD[d.id]; });
})();
