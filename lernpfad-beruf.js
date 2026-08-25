/* ============================================================
   Der Lernpfad — B1 Beruf
   Gleicher Bauplan wie der Alltagspfad, andere Blöcke.
   ============================================================ */
window.LERNPFAD_BERUF = {
  id: 'b1-beruf',
  bereich: 'beruf',
  niveau: 'B1',
  titel: 'Beruf auf B1',
  bloecke: [
    { id:'buero',     titel:'Im Büro',      emoji:'💼', ws:'arbeit',        ho:'arbeit',
      versprechen:'Absprechen, nachfragen, zusagen und absagen.' },
    { id:'bewerbung', titel:'Bewerbung',    emoji:'📄', ws:'bewerbung-b1',  ho:null,
      versprechen:'Von der Anzeige über das Gespräch bis zur Zusage.' },
    { id:'pflege',    titel:'In der Pflege',emoji:'🏥', ws:'pflege-b1',     ho:null,
      versprechen:'Schicht, Übergabe, Bewohner — die Sprache im Dienst.' }
  ],
  bauplan: null   /* nutzt denselben wie der Alltagspfad */
};
