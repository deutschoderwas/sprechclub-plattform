/* ============================================================
   Der Lernpfad — B1 Alltag
   Nur die Reihenfolge, keine Inhalte: Jede Lektion zeigt auf
   Übungen, die schon in uebungen.js liegen, und schneidet sich
   ein Stück heraus. Neue Übungen landen automatisch im Pfad.
   ============================================================ */
window.LERNPFAD_B1 = {
  id: 'b1-alltag',
  bereich: 'alltag',
  niveau: 'B1',
  titel: 'Alltag auf B1',
  bloecke: [
    { id:'einkaufen', titel:'Einkaufen & Geld',      emoji:'🛒', ws:'einkaufen',       ho:'einkaufen',
      versprechen:'Preise verstehen, reklamieren, im Laden nachfragen.' },
    { id:'wohnen',    titel:'Wohnen & Nachbarn',     emoji:'🏠', ws:'wohnen',          ho:'wohnen',
      versprechen:'Wohnung beschreiben, Probleme melden, mit Nachbarn reden.' },
    { id:'arzt',      titel:'Beim Arzt',             emoji:'🩺', ws:'gesundheit',      ho:'gesundheit',
      versprechen:'Termin machen, Beschwerden beschreiben, Befund verstehen.' },
    { id:'essen',     titel:'Essen & Restaurant',    emoji:'🍽️', ws:'essen',           ho:'essen',
      versprechen:'Bestellen, nachfragen, über Essen sprechen.' },
    { id:'stadt',     titel:'Unterwegs in der Stadt',emoji:'🚌', ws:'stadt',           ho:'stadt',
      versprechen:'Weg fragen, Fahrkarten, Termine und Öffnungszeiten.' },
    { id:'amt',       titel:'Auf dem Amt',           emoji:'🏛️', ws:'amt-b1'   ,     ho:null,
      versprechen:'Formulare, Fristen und die Wörter im Bescheid.' },
    { id:'menschen',  titel:'Menschen & Gefühle',    emoji:'💬', ws:'gefuehle',        ho:'gefuehle',
      versprechen:'Sagen, wie es dir geht — und verstehen, wie es anderen geht.' },
    { id:'reisen',    titel:'Reisen & Verkehr',      emoji:'🚆', ws:'reisen',          ho:'reisen',
      versprechen:'Buchen, umsteigen, nach Verspätungen fragen.' }
  ],
  /* Bauplan jeder Lektion. „von/bis" schneidet aus dem Themenvorrat,
     „typen" filtert die Aufgabenart. So ist jede Lektion anders. */
  bauplan: [
    { id:'l1', titel:'Neue Wörter',        unter:'Kennenlernen',        quelle:'ws', typen:['match','choice'], von:0,  anzahl:8  },
    { id:'l2', titel:'Wörter festigen',    unter:'Üben',                quelle:'ws', typen:null,               von:8,  anzahl:8  },
    { id:'l3', titel:'So klingt es',       unter:'Hören',               quelle:'ho', typen:null,               von:0,  anzahl:8  },
    { id:'l4', titel:'Selbst anwenden',    unter:'Lücken & Sätze',      quelle:'ws', typen:['gap','choice'],   von:16, anzahl:8  },
    { id:'l5', titel:'Kannst du das jetzt?',unter:'Abschluss',          quelle:'alle',typen:null,              von:0,  anzahl:12 }
  ]
};
