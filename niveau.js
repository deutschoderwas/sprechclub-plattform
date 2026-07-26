/* ============================================================
   deutschoderwas club — DIE NIVEAUS
   Die oberste Ebene. Ganz oben wählt man aus, wo man steht:
   A1, A2, B1, B2 oder C1. Nicht als Filter, sondern als Eingang —
   wer A1 klickt, sieht eine A1-Welt.

   Ein Niveau:
     id      A1 … C1, wird auch gespeichert
     t       der Titel, wie er auf der Karte steht
     u       ein Satz dazu, ohne Werbesprache
     dauer   was es realistisch dauert, wenn man dranbleibt
     ziel    die Prüfung, auf die dieses Niveau zuläuft
     kann    was du danach kannst — in der Du-Form
     quelle  woher der Aufbau kommt (BAMF-Rahmencurriculum)
     inhalt  die Themen, die dahinterliegen
     lekt    wie viele Lektionen geplant sind

   Grundlage: KURSKONZEPT.md, Tabelle „Ebene 1 — Niveau".
   ============================================================ */

window.NIVEAUS = [

  {
    id: 'A1',
    t: 'A1 — Der Anfang',
    u: 'Ganz von vorn. Sich vorstellen, einkaufen, einen Termin machen.',
    dauer: 'etwa 4 Monate',
    ziel: 'Start Deutsch 1',
    kann: [
      'dich und deine Familie vorstellen',
      'sagen, woher du kommst und wo du wohnst',
      'im Laden nach dem Preis fragen und bezahlen',
      'beim Amt oder beim Arzt einen Termin ausmachen',
      'nach dem Weg fragen und die Antwort verstehen',
      'ein Formular mit deinen Daten ausfüllen',
      'sagen, was dir wehtut'
    ],
    quelle: 'Integrationskurs, Basissprachkurs 1 und 2',
    inhalt: 'Alphabet, Zahlen, sich vorstellen, Familie, Wohnung, Uhrzeit, Einkaufen, Essen, Arbeit, Ämter, Gesundheit, Wege, Kleidung, Feste',
    lekt: 14
  },

  {
    id: 'A2',
    t: 'A2 — Ankommen',
    u: 'Der Alltag läuft. Du erzählst von deinem Tag und regelst das Nötige selbst.',
    dauer: 'etwa 4 Monate',
    ziel: 'Start Deutsch 2 · DTZ A2',
    kann: [
      'über deinen Tag, deine Arbeit und dein Wochenende erzählen',
      'deine Wohnung beschreiben und mit den Nachbarn reden',
      'in der Schule deines Kindes nachfragen',
      'eine Reise planen und Fahrkarten kaufen',
      'bei der Bank ein Konto eröffnen und Fragen stellen',
      'höflich um etwas bitten und dich beschweren',
      'erzählen, wie es früher war'
    ],
    quelle: 'Integrationskurs, Basissprachkurs 3',
    inhalt: 'Ankommen, Wohnen, Arbeitswelt, Schule, Feste, Unterwegs, Reisen, Bank und Versicherung, Lebensstationen',
    lekt: 14
  },

  {
    id: 'B1',
    t: 'B1 — Selbstständig',
    u: 'Das Niveau, das auf dem Papier zählt. Arbeit, Ämter, Meinung — allein.',
    dauer: 'etwa 6 Monate',
    ziel: 'DTZ B1 · Zertifikat B1',
    kann: [
      'dich auf eine Stelle bewerben und ein Vorstellungsgespräch führen',
      'am Telefon mit Ämtern und Firmen klären, was du brauchst',
      'einen Vertrag verstehen und ihn kündigen',
      'deine Meinung sagen und begründen, auch wenn jemand widerspricht',
      'einen Brief ans Amt mit vier Leitpunkten schreiben',
      'im Team etwas gemeinsam planen',
      'über Politik, Geschichte und deine alte Heimat sprechen'
    ],
    quelle: 'Integrationskurs, Aufbausprachkurs',
    inhalt: 'Arbeit finden, Dienstleistung, Wohnen, Kollegen, Netz und Medien, Konsum, Miteinander, Politik und Geschichte, alte und neue Heimat',
    lekt: 14
  },

  {
    id: 'B2',
    t: 'B2 — Im Beruf',
    u: 'Du arbeitest auf Deutsch. Verhandeln, widersprechen, präsentieren.',
    dauer: 'etwa 7 Monate',
    ziel: 'Goethe B2 · telc B2, auch Pflege und Medizin',
    kann: [
      'deine Meinung im Streitgespräch begründen und halten',
      'verhandeln — über Gehalt, Termine und Bedingungen',
      'einen Konflikt im Team ansprechen, ohne jemanden zu verletzen',
      'Fachtexte aus deinem Beruf lesen und zusammenfassen',
      'eine Bewerbung schreiben, die ernst genommen wird',
      'etwas vor Kolleginnen und Kollegen präsentieren'
    ],
    quelle: 'Berufssprachkurs B2',
    inhalt: 'Meinung begründen, verhandeln, Konflikte, Fachtexte, Bewerbung, Präsentation',
    lekt: 12
  },

  {
    id: 'C1',
    t: 'C1 — Feine Töne',
    u: 'Studium, Fachlaufbahn, Zwischentöne. Du hörst, was jemand nicht sagt.',
    dauer: 'etwa 8 Monate',
    ziel: 'Goethe C1, seit 2024 modular · TestDaF',
    kann: [
      'einer Diskussion unter Muttersprachlern folgen und mitreden',
      'Ironie, Anspielungen und Zwischentöne verstehen',
      'sicher zwischen locker und förmlich wechseln',
      'wissenschaftlich schreiben und Quellen einordnen',
      'einen Vortrag halten und auf Nachfragen reagieren',
      'einen Forumsbeitrag von 230 Wörtern schreiben, der trägt'
    ],
    quelle: 'akademisch und beruflich',
    inhalt: 'Diskurs, Ironie, Register, Rhetorik, wissenschaftliche Sprache',
    lekt: 12
  }

];
