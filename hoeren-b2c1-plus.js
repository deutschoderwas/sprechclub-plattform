/* ============================================================
   hoeren-b2c1-plus.js — Hören auf B2 und C1 auffüllen

   Gemessen am 11.10.2026 stand Hören so da: A1 sechs Themen mit
   288 Aufgaben, A2 acht mit 384 — B2 dagegen nur fünf mit 223
   und C1 vier mit 192. (B1 liegt mit 41 Themen weit darüber,
   weil dort die Lektionen mithängen; das ist kein Maßstab.)

   Diese Datei hängt sechs Themen an, drei pro Niveau:

     B2  b2-arzt-befund          Befund, Überweisung, Krankschreibung
     B2  b2-bank-geld            Konto, Dispo, Gebühren
     B2  b2-reise-stoerung       Verspätung, Umbuchung, Entschädigung
     C1  c1-vortrag-folgen       Gliederung, Exkurs, Rückbezug
     C1  c1-bewerbungsgespraech  indirekte Fragen, Gehalt, Rückfragen
     C1  c1-telefonkonferenz     schlechte Leitung, viele Stimmen

   Form wie in hoeren-b2-neu.js: 16 Wörter, vier Hörtexte, sechzehn
   Wortfragen. Die übrigen Formen (tippen, buchstaben, artikel,
   speak, order) erzeugt bau/mach-vielfalt.js daraus, so wie bei
   den bestehenden Themen auch.

   Kein audioUrl: Zu diesen Texten gibt es keine Aufnahme. ueben.js
   liest sie seit dem 11.10. mit der Stimme des Geräts vor — vorher
   stand dort ein Knopf, der auf undefined zeigte. Eine echte
   Aufnahme bleibt besser; wenn Julia welche einspricht, kommt bei
   jedem Hörtext ein audioUrl dazu und der Knopf wechselt von allein.

   Erzeugt von mach-hoeren.py. Die Hörtexte und Wörter stehen in
   hoer_daten.py — die Wortfragen bitte dort ändern, nicht hier.
   ============================================================ */
(function () {
  'use strict';

  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var sk = null;
  for (var i = 0; i < U.skills.length; i++) {
    if (U.skills[i] && U.skills[i].id === 'hoeren') { sk = U.skills[i]; break; }
  }
  if (!sk) return;
  if (sk.__b2c1PlusGeladen) return;
  sk.__b2c1PlusGeladen = true;

  var THEMEN = [
    {
      "id": "b2-arzt-befund",
      "title": "Beim Facharzt: Befund, Überweisung, Krankschreibung",
      "level": "B2",
      "emoji": "🎧",
      "words": [
        {
          "de": "der Befund",
          "info": "das Ergebnis einer Untersuchung",
          "emoji": "📋"
        },
        {
          "de": "die Überweisung",
          "info": "der Zettel vom Hausarzt zum Facharzt",
          "emoji": "➡️"
        },
        {
          "de": "die Krankschreibung",
          "info": "die Bescheinigung, dass man nicht arbeiten kann",
          "emoji": "🛏️"
        },
        {
          "de": "die Vorsorge",
          "info": "eine Untersuchung, bevor etwas weh tut",
          "emoji": "🛡️"
        },
        {
          "de": "unauffällig",
          "info": "ohne Hinweis auf eine Krankheit",
          "emoji": "✅"
        },
        {
          "de": "die Kontrolle",
          "info": "ein zweiter Termin, um nachzusehen",
          "emoji": "🔁"
        },
        {
          "de": "die Nebenwirkung",
          "info": "was ein Medikament außerdem bewirkt",
          "emoji": "⚠️"
        },
        {
          "de": "absetzen",
          "info": "ein Medikament nicht mehr nehmen",
          "emoji": "🛑"
        },
        {
          "de": "die Dosis",
          "info": "wie viel man von einem Medikament nimmt",
          "emoji": "💊"
        },
        {
          "de": "nüchtern",
          "info": "ohne vorher gegessen zu haben",
          "emoji": "🚫🍽️"
        },
        {
          "de": "die Rücksprache",
          "info": "noch einmal mit jemandem reden, bevor man entscheidet",
          "emoji": "💬"
        },
        {
          "de": "die Praxis",
          "info": "der Ort, an dem eine Ärztin arbeitet",
          "emoji": "🏥"
        },
        {
          "de": "die Zuzahlung",
          "info": "der Teil, den man selbst bezahlt",
          "emoji": "💶"
        },
        {
          "de": "der Verdacht",
          "info": "die Vermutung, dass etwas vorliegt",
          "emoji": "🤔"
        },
        {
          "de": "die Beschwerden",
          "info": "was einem weh tut oder fehlt",
          "emoji": "😣"
        },
        {
          "de": "sich schonen",
          "info": "sich nicht anstrengen",
          "emoji": "🪶"
        }
      ],
      "exercises": [
        {
          "type": "listen",
          "label": "📞 Anruf aus der Praxis",
          "q": "Was soll Frau Nowak tun?",
          "options": [
            "In drei Monaten zur Kontrolle kommen, nüchtern und ohne neue Überweisung.",
            "Sofort in die Praxis kommen, weil ein Wert zu hoch ist.",
            "Sich eine neue Überweisung vom Hausarzt holen.",
            "Mit der Behandlung des erhöhten Wertes beginnen."
          ],
          "answer": 0,
          "transcript": "Guten Tag, Frau Nowak, hier ist die Praxis Dr. Heller. Ich rufe wegen Ihrer Blutwerte an. Der Befund ist insgesamt unauffällig, da müssen Sie sich keine Sorgen machen. Ein Wert liegt ganz leicht über der Norm, das ist aber nichts, was wir jetzt behandeln müssten. Frau Doktor würde das in drei Monaten noch einmal kontrollieren. Sie brauchen dafür keine neue Überweisung, rufen Sie einfach an und sagen Sie, es geht um die Kontrolle. Und kommen Sie bitte wieder nüchtern, also morgens und ohne Frühstück."
        },
        {
          "type": "listen",
          "label": "🗣️ Im Sprechzimmer",
          "q": "Was sagt die Ärztin über das Medikament?",
          "options": [
            "Es soll weitergenommen werden, aber nur noch mit der halben Dosis.",
            "Es soll sofort abgesetzt werden.",
            "Die Dosis soll verdoppelt werden.",
            "Es soll durch ein anderes Medikament ersetzt werden."
          ],
          "answer": 0,
          "transcript": "Also, ich habe mir das angesehen. Der Verdacht aus der Überweisung hat sich nicht bestätigt — das ist die gute Nachricht. Trotzdem erklären die Beschwerden sich noch nicht ganz. Ich würde vorschlagen, dass Sie das Medikament zunächst weiternehmen, aber mit halber Dosis. Setzen Sie es bitte nicht einfach ab, das hat beim letzten Mal zu Problemen geführt. Wenn es in zwei Wochen nicht besser ist, halten Sie noch einmal Rücksprache mit mir, bevor wir etwas anderes versuchen."
        },
        {
          "type": "listen",
          "label": "💬 Am Empfang",
          "q": "Was muss der Patient selbst erledigen?",
          "options": [
            "Seinem Betrieb sagen, dass er krank ist.",
            "Die Krankschreibung an den Arbeitgeber schicken.",
            "Die Zuzahlung in der Praxis bezahlen.",
            "Die Krankenkasse über die Krankschreibung informieren."
          ],
          "answer": 0,
          "transcript": "Die Krankschreibung habe ich Ihnen fertig gemacht, die gilt bis einschließlich Freitag. An Ihren Arbeitgeber geht nichts von uns aus, das läuft heute elektronisch über die Krankenkasse — Sie müssen Ihrem Betrieb aber trotzdem selbst Bescheid sagen, dass Sie krank sind. Für das Rezept fällt eine Zuzahlung an, die zahlen Sie direkt in der Apotheke, nicht bei uns. Und wenn es Montag noch nicht besser ist, rufen Sie bitte vor zehn an, dann bekommen Sie noch einen Termin."
        },
        {
          "type": "listen",
          "label": "📻 In der Apotheke",
          "q": "Welchen Fehler soll der Kunde vermeiden?",
          "options": [
            "Das Medikament absetzen, sobald er sich besser fühlt.",
            "Das Medikament zum Essen einnehmen.",
            "Die Packung ganz aufbrauchen.",
            "Morgens statt abends einnehmen."
          ],
          "answer": 0,
          "transcript": "Das nehmen Sie bitte einmal täglich, am besten morgens zum Essen. Nicht auf nüchternen Magen, davon wird manchen übel — das ist die häufigste Nebenwirkung, und sie verschwindet meistens nach ein paar Tagen. Was Sie nicht machen sollten: das Mittel absetzen, sobald es Ihnen besser geht. Die Packung wird zu Ende genommen, auch wenn Sie nach drei Tagen schon nichts mehr spüren. Und Alkohol lassen Sie in der Zeit bitte weg."
        },
        {
          "type": "choice",
          "audio": "der Befund",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "das Ergebnis einer Untersuchung",
            "eine Untersuchung, bevor etwas weh tut",
            "ein Medikament nicht mehr nehmen",
            "der Ort, an dem eine Ärztin arbeitet"
          ],
          "answer": 0,
          "w": "der Befund",
          "explain": "der Befund = das Ergebnis einer Untersuchung."
        },
        {
          "type": "choice",
          "audio": "die Überweisung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "der Zettel vom Hausarzt zum Facharzt",
            "ohne Hinweis auf eine Krankheit",
            "wie viel man von einem Medikament nimmt",
            "der Teil, den man selbst bezahlt"
          ],
          "answer": 0,
          "w": "die Überweisung",
          "explain": "die Überweisung = der Zettel vom Hausarzt zum Facharzt."
        },
        {
          "type": "choice",
          "audio": "die Krankschreibung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Bescheinigung, dass man nicht arbeiten kann",
            "ein zweiter Termin, um nachzusehen",
            "ohne vorher gegessen zu haben",
            "die Vermutung, dass etwas vorliegt"
          ],
          "answer": 0,
          "w": "die Krankschreibung",
          "explain": "die Krankschreibung = die Bescheinigung, dass man nicht arbeiten kann."
        },
        {
          "type": "choice",
          "audio": "die Vorsorge",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "eine Untersuchung, bevor etwas weh tut",
            "was ein Medikament außerdem bewirkt",
            "noch einmal mit jemandem reden, bevor man entscheidet",
            "was einem weh tut oder fehlt"
          ],
          "answer": 0,
          "w": "die Vorsorge",
          "explain": "die Vorsorge = eine Untersuchung, bevor etwas weh tut."
        },
        {
          "type": "choice",
          "audio": "unauffällig",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ohne Hinweis auf eine Krankheit",
            "ein Medikament nicht mehr nehmen",
            "der Ort, an dem eine Ärztin arbeitet",
            "sich nicht anstrengen"
          ],
          "answer": 0,
          "w": "unauffällig",
          "explain": "unauffällig = ohne Hinweis auf eine Krankheit."
        },
        {
          "type": "choice",
          "audio": "die Kontrolle",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein zweiter Termin, um nachzusehen",
            "wie viel man von einem Medikament nimmt",
            "der Teil, den man selbst bezahlt",
            "das Ergebnis einer Untersuchung"
          ],
          "answer": 0,
          "w": "die Kontrolle",
          "explain": "die Kontrolle = ein zweiter Termin, um nachzusehen."
        },
        {
          "type": "choice",
          "audio": "die Nebenwirkung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was ein Medikament außerdem bewirkt",
            "ohne vorher gegessen zu haben",
            "die Vermutung, dass etwas vorliegt",
            "der Zettel vom Hausarzt zum Facharzt"
          ],
          "answer": 0,
          "w": "die Nebenwirkung",
          "explain": "die Nebenwirkung = was ein Medikament außerdem bewirkt."
        },
        {
          "type": "choice",
          "audio": "absetzen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Medikament nicht mehr nehmen",
            "noch einmal mit jemandem reden, bevor man entscheidet",
            "was einem weh tut oder fehlt",
            "die Bescheinigung, dass man nicht arbeiten kann"
          ],
          "answer": 0,
          "w": "absetzen",
          "explain": "absetzen = ein Medikament nicht mehr nehmen."
        },
        {
          "type": "choice",
          "audio": "die Dosis",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie viel man von einem Medikament nimmt",
            "der Ort, an dem eine Ärztin arbeitet",
            "sich nicht anstrengen",
            "eine Untersuchung, bevor etwas weh tut"
          ],
          "answer": 0,
          "w": "die Dosis",
          "explain": "die Dosis = wie viel man von einem Medikament nimmt."
        },
        {
          "type": "choice",
          "audio": "nüchtern",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ohne vorher gegessen zu haben",
            "der Teil, den man selbst bezahlt",
            "das Ergebnis einer Untersuchung",
            "ohne Hinweis auf eine Krankheit"
          ],
          "answer": 0,
          "w": "nüchtern",
          "explain": "nüchtern = ohne vorher gegessen zu haben."
        },
        {
          "type": "choice",
          "audio": "die Rücksprache",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "noch einmal mit jemandem reden, bevor man entscheidet",
            "die Vermutung, dass etwas vorliegt",
            "der Zettel vom Hausarzt zum Facharzt",
            "ein zweiter Termin, um nachzusehen"
          ],
          "answer": 0,
          "w": "die Rücksprache",
          "explain": "die Rücksprache = noch einmal mit jemandem reden, bevor man entscheidet."
        },
        {
          "type": "choice",
          "audio": "die Praxis",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "der Ort, an dem eine Ärztin arbeitet",
            "was einem weh tut oder fehlt",
            "die Bescheinigung, dass man nicht arbeiten kann",
            "was ein Medikament außerdem bewirkt"
          ],
          "answer": 0,
          "w": "die Praxis",
          "explain": "die Praxis = der Ort, an dem eine Ärztin arbeitet."
        },
        {
          "type": "choice",
          "audio": "die Zuzahlung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "der Teil, den man selbst bezahlt",
            "sich nicht anstrengen",
            "eine Untersuchung, bevor etwas weh tut",
            "ein Medikament nicht mehr nehmen"
          ],
          "answer": 0,
          "w": "die Zuzahlung",
          "explain": "die Zuzahlung = der Teil, den man selbst bezahlt."
        },
        {
          "type": "choice",
          "audio": "der Verdacht",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Vermutung, dass etwas vorliegt",
            "das Ergebnis einer Untersuchung",
            "ohne Hinweis auf eine Krankheit",
            "wie viel man von einem Medikament nimmt"
          ],
          "answer": 0,
          "w": "der Verdacht",
          "explain": "der Verdacht = die Vermutung, dass etwas vorliegt."
        },
        {
          "type": "choice",
          "audio": "die Beschwerden",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was einem weh tut oder fehlt",
            "der Zettel vom Hausarzt zum Facharzt",
            "ein zweiter Termin, um nachzusehen",
            "ohne vorher gegessen zu haben"
          ],
          "answer": 0,
          "w": "die Beschwerden",
          "explain": "die Beschwerden = was einem weh tut oder fehlt."
        },
        {
          "type": "choice",
          "audio": "sich schonen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "sich nicht anstrengen",
            "die Bescheinigung, dass man nicht arbeiten kann",
            "was ein Medikament außerdem bewirkt",
            "noch einmal mit jemandem reden, bevor man entscheidet"
          ],
          "answer": 0,
          "w": "sich schonen",
          "explain": "sich schonen = sich nicht anstrengen."
        }
      ]
    },
    {
      "id": "b2-bank-geld",
      "title": "Bank und Geld: Konto, Dispo, Gebühren",
      "level": "B2",
      "emoji": "🎧",
      "words": [
        {
          "de": "der Dispo",
          "info": "wie weit man das Konto überziehen darf",
          "emoji": "📉"
        },
        {
          "de": "überziehen",
          "info": "mehr ausgeben, als auf dem Konto ist",
          "emoji": "⬇️"
        },
        {
          "de": "der Dauerauftrag",
          "info": "eine Zahlung, die jeden Monat von allein läuft",
          "emoji": "🔁"
        },
        {
          "de": "die Lastschrift",
          "info": "jemand darf das Geld selbst abbuchen",
          "emoji": "🧾"
        },
        {
          "de": "die Gebühr",
          "info": "was die Bank für eine Leistung verlangt",
          "emoji": "💶"
        },
        {
          "de": "der Zinssatz",
          "info": "wie teuer geliehenes Geld ist, in Prozent",
          "emoji": "📈"
        },
        {
          "de": "die Rate",
          "info": "der Betrag, den man jeden Monat zurückzahlt",
          "emoji": "📆"
        },
        {
          "de": "die Laufzeit",
          "info": "wie lange ein Vertrag oder Kredit läuft",
          "emoji": "⏳"
        },
        {
          "de": "der Kontoauszug",
          "info": "die Liste aller Bewegungen auf dem Konto",
          "emoji": "📄"
        },
        {
          "de": "die Bonität",
          "info": "wie zahlungsfähig jemand aus Sicht der Bank ist",
          "emoji": "⭐"
        },
        {
          "de": "widerrufen",
          "info": "einen Vertrag nachträglich rückgängig machen",
          "emoji": "↩️"
        },
        {
          "de": "die Frist",
          "info": "die Zeit, bis zu der etwas geschehen muss",
          "emoji": "⏰"
        },
        {
          "de": "das Entgelt",
          "info": "das Wort der Bank für Gebühr",
          "emoji": "🏷️"
        },
        {
          "de": "die Rücklastschrift",
          "info": "eine Abbuchung, die nicht geklappt hat",
          "emoji": "❌"
        },
        {
          "de": "der Freistellungsauftrag",
          "info": "damit auf Zinsen bis zu einer Grenze keine Steuer anfällt",
          "emoji": "📝"
        },
        {
          "de": "aufstocken",
          "info": "einen Betrag oder Rahmen größer machen",
          "emoji": "⬆️"
        }
      ],
      "exercises": [
        {
          "type": "listen",
          "label": "📞 Rückruf von der Bank",
          "q": "Was rät der Berater?",
          "options": [
            "Bei längerem Bedarf einen Ratenkredit statt des Dispos zu nehmen.",
            "Den Dispo auf dreitausend Euro aufzustocken und so zu nutzen.",
            "Das Konto zu wechseln, weil die Gebühren zu hoch sind.",
            "Nichts zu tun, weil zwölf Prozent günstig sind."
          ],
          "answer": 0,
          "transcript": "Guten Tag, Herr Demir, Sie hatten wegen des Dispos angefragt. Ich habe mir das angesehen: Ihr Rahmen liegt derzeit bei zweitausend Euro, aufstocken können wir den auf dreitausend. Nur — und das sage ich Ihnen ganz offen — der Zinssatz liegt beim Dispo bei knapp zwölf Prozent. Wenn Sie das Geld länger als ein paar Wochen brauchen, ist ein Ratenkredit deutlich günstiger, da wären wir bei etwa sechs Prozent. Überlegen Sie es sich, und melden Sie sich einfach, wenn Sie das durchrechnen wollen."
        },
        {
          "type": "listen",
          "label": "🗣️ Am Schalter",
          "q": "Was empfiehlt die Beraterin?",
          "options": [
            "Mit dem Vermieter über ein späteres Abbuchungsdatum zu sprechen.",
            "Den Dispo dauerhaft als Puffer zu nutzen.",
            "Den Arbeitgeber zu bitten, früher zu zahlen.",
            "Die Miete künftig selbst zu überweisen."
          ],
          "answer": 0,
          "transcript": "Die Rücklastschrift kam, weil im Moment der Abbuchung nicht genug auf dem Konto war. Die Miete ging am Ersten raus, Ihr Gehalt kam aber erst am Dritten — das ist seit dem Jobwechsel so. Zwei Möglichkeiten: Entweder Sie sprechen mit dem Vermieter, ob die Abbuchung auf den Fünften gehen kann. Oder Sie lassen den Dispo als Puffer stehen. Ich würde Ihnen das Erste empfehlen, das kostet Sie nichts. Die Gebühr für die Rücklastschrift buche ich Ihnen einmalig zurück."
        },
        {
          "type": "listen",
          "label": "💬 Nachricht auf der Mailbox",
          "q": "Was fehlt für den Kreditantrag noch?",
          "options": [
            "Ein weiterer Gehaltsnachweis.",
            "Die Bonitätsprüfung.",
            "Die Unterschrift unter dem Vertrag.",
            "Der Widerruf der alten Vereinbarung."
          ],
          "answer": 0,
          "transcript": "Hallo Frau Krüger, hier ist Hoffmann von der Sparkasse. Es geht um Ihren Kreditantrag. Die Unterlagen sind vollständig, die Bonitätsprüfung ist durch, da gibt es keine Probleme. Was noch fehlt, sind die letzten drei Gehaltsnachweise — Sie hatten zwei geschickt. Wenn die bis Donnerstag da sind, bekommen Sie den Vertrag noch diese Woche. Denken Sie daran: Nach der Unterschrift haben Sie vierzehn Tage, in denen Sie widerrufen können, ohne einen Grund zu nennen."
        },
        {
          "type": "listen",
          "label": "📻 Im Beratungsgespräch",
          "q": "Worin unterscheiden sich Dauerauftrag und Lastschrift?",
          "options": [
            "Beim Dauerauftrag bestimmt man selbst Betrag und Zeitpunkt, bei der Lastschrift der Empfänger.",
            "Der Dauerauftrag ist kostenlos, die Lastschrift kostet eine Gebühr.",
            "Die Lastschrift läuft nur einmal, der Dauerauftrag jeden Monat.",
            "Beim Dauerauftrag kann der Betrag jeden Monat anders sein."
          ],
          "answer": 0,
          "transcript": "Beim Dauerauftrag bestimmen Sie: Sie sagen, wann wie viel an wen geht, und das läuft dann von allein. Bei der Lastschrift ist es umgekehrt — da holt sich der andere das Geld, und der Betrag kann jeden Monat anders sein. Deshalb ist die Lastschrift für Strom oder Handy üblich, der Dauerauftrag für die Miete. Und falls eine Lastschrift nicht stimmt: Sie können sie acht Wochen lang ohne Angabe von Gründen zurückholen."
        },
        {
          "type": "choice",
          "audio": "der Dispo",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie weit man das Konto überziehen darf",
            "jemand darf das Geld selbst abbuchen",
            "wie lange ein Vertrag oder Kredit läuft",
            "die Zeit, bis zu der etwas geschehen muss"
          ],
          "answer": 0,
          "w": "der Dispo",
          "explain": "der Dispo = wie weit man das Konto überziehen darf."
        },
        {
          "type": "choice",
          "audio": "überziehen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "mehr ausgeben, als auf dem Konto ist",
            "was die Bank für eine Leistung verlangt",
            "die Liste aller Bewegungen auf dem Konto",
            "das Wort der Bank für Gebühr"
          ],
          "answer": 0,
          "w": "überziehen",
          "explain": "überziehen = mehr ausgeben, als auf dem Konto ist."
        },
        {
          "type": "choice",
          "audio": "der Dauerauftrag",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "eine Zahlung, die jeden Monat von allein läuft",
            "wie teuer geliehenes Geld ist, in Prozent",
            "wie zahlungsfähig jemand aus Sicht der Bank ist",
            "eine Abbuchung, die nicht geklappt hat"
          ],
          "answer": 0,
          "w": "der Dauerauftrag",
          "explain": "der Dauerauftrag = eine Zahlung, die jeden Monat von allein läuft."
        },
        {
          "type": "choice",
          "audio": "die Lastschrift",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "jemand darf das Geld selbst abbuchen",
            "der Betrag, den man jeden Monat zurückzahlt",
            "einen Vertrag nachträglich rückgängig machen",
            "damit auf Zinsen bis zu einer Grenze keine Steuer anfällt"
          ],
          "answer": 0,
          "w": "die Lastschrift",
          "explain": "die Lastschrift = jemand darf das Geld selbst abbuchen."
        },
        {
          "type": "choice",
          "audio": "die Gebühr",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was die Bank für eine Leistung verlangt",
            "wie lange ein Vertrag oder Kredit läuft",
            "die Zeit, bis zu der etwas geschehen muss",
            "einen Betrag oder Rahmen größer machen"
          ],
          "answer": 0,
          "w": "die Gebühr",
          "explain": "die Gebühr = was die Bank für eine Leistung verlangt."
        },
        {
          "type": "choice",
          "audio": "der Zinssatz",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie teuer geliehenes Geld ist, in Prozent",
            "die Liste aller Bewegungen auf dem Konto",
            "das Wort der Bank für Gebühr",
            "wie weit man das Konto überziehen darf"
          ],
          "answer": 0,
          "w": "der Zinssatz",
          "explain": "der Zinssatz = wie teuer geliehenes Geld ist, in Prozent."
        },
        {
          "type": "choice",
          "audio": "die Rate",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "der Betrag, den man jeden Monat zurückzahlt",
            "wie zahlungsfähig jemand aus Sicht der Bank ist",
            "eine Abbuchung, die nicht geklappt hat",
            "mehr ausgeben, als auf dem Konto ist"
          ],
          "answer": 0,
          "w": "die Rate",
          "explain": "die Rate = der Betrag, den man jeden Monat zurückzahlt."
        },
        {
          "type": "choice",
          "audio": "die Laufzeit",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie lange ein Vertrag oder Kredit läuft",
            "einen Vertrag nachträglich rückgängig machen",
            "damit auf Zinsen bis zu einer Grenze keine Steuer anfällt",
            "eine Zahlung, die jeden Monat von allein läuft"
          ],
          "answer": 0,
          "w": "die Laufzeit",
          "explain": "die Laufzeit = wie lange ein Vertrag oder Kredit läuft."
        },
        {
          "type": "choice",
          "audio": "der Kontoauszug",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Liste aller Bewegungen auf dem Konto",
            "die Zeit, bis zu der etwas geschehen muss",
            "einen Betrag oder Rahmen größer machen",
            "jemand darf das Geld selbst abbuchen"
          ],
          "answer": 0,
          "w": "der Kontoauszug",
          "explain": "der Kontoauszug = die Liste aller Bewegungen auf dem Konto."
        },
        {
          "type": "choice",
          "audio": "die Bonität",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie zahlungsfähig jemand aus Sicht der Bank ist",
            "das Wort der Bank für Gebühr",
            "wie weit man das Konto überziehen darf",
            "was die Bank für eine Leistung verlangt"
          ],
          "answer": 0,
          "w": "die Bonität",
          "explain": "die Bonität = wie zahlungsfähig jemand aus Sicht der Bank ist."
        },
        {
          "type": "choice",
          "audio": "widerrufen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "einen Vertrag nachträglich rückgängig machen",
            "eine Abbuchung, die nicht geklappt hat",
            "mehr ausgeben, als auf dem Konto ist",
            "wie teuer geliehenes Geld ist, in Prozent"
          ],
          "answer": 0,
          "w": "widerrufen",
          "explain": "widerrufen = einen Vertrag nachträglich rückgängig machen."
        },
        {
          "type": "choice",
          "audio": "die Frist",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Zeit, bis zu der etwas geschehen muss",
            "damit auf Zinsen bis zu einer Grenze keine Steuer anfällt",
            "eine Zahlung, die jeden Monat von allein läuft",
            "der Betrag, den man jeden Monat zurückzahlt"
          ],
          "answer": 0,
          "w": "die Frist",
          "explain": "die Frist = die Zeit, bis zu der etwas geschehen muss."
        },
        {
          "type": "choice",
          "audio": "das Entgelt",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "das Wort der Bank für Gebühr",
            "einen Betrag oder Rahmen größer machen",
            "jemand darf das Geld selbst abbuchen",
            "wie lange ein Vertrag oder Kredit läuft"
          ],
          "answer": 0,
          "w": "das Entgelt",
          "explain": "das Entgelt = das Wort der Bank für Gebühr."
        },
        {
          "type": "choice",
          "audio": "die Rücklastschrift",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "eine Abbuchung, die nicht geklappt hat",
            "wie weit man das Konto überziehen darf",
            "was die Bank für eine Leistung verlangt",
            "die Liste aller Bewegungen auf dem Konto"
          ],
          "answer": 0,
          "w": "die Rücklastschrift",
          "explain": "die Rücklastschrift = eine Abbuchung, die nicht geklappt hat."
        },
        {
          "type": "choice",
          "audio": "der Freistellungsauftrag",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "damit auf Zinsen bis zu einer Grenze keine Steuer anfällt",
            "mehr ausgeben, als auf dem Konto ist",
            "wie teuer geliehenes Geld ist, in Prozent",
            "wie zahlungsfähig jemand aus Sicht der Bank ist"
          ],
          "answer": 0,
          "w": "der Freistellungsauftrag",
          "explain": "der Freistellungsauftrag = damit auf Zinsen bis zu einer Grenze keine Steuer anfällt."
        },
        {
          "type": "choice",
          "audio": "aufstocken",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "einen Betrag oder Rahmen größer machen",
            "eine Zahlung, die jeden Monat von allein läuft",
            "der Betrag, den man jeden Monat zurückzahlt",
            "einen Vertrag nachträglich rückgängig machen"
          ],
          "answer": 0,
          "w": "aufstocken",
          "explain": "aufstocken = einen Betrag oder Rahmen größer machen."
        }
      ]
    },
    {
      "id": "b2-reise-stoerung",
      "title": "Wenn die Reise schiefgeht: Verspätung, Umbuchung, Entschädigung",
      "level": "B2",
      "emoji": "🎧",
      "words": [
        {
          "de": "die Verspätung",
          "info": "wenn etwas später kommt als geplant",
          "emoji": "⏱️"
        },
        {
          "de": "der Anschluss",
          "info": "der nächste Zug oder Flug, den man erreichen muss",
          "emoji": "🔗"
        },
        {
          "de": "umbuchen",
          "info": "auf eine andere Verbindung wechseln",
          "emoji": "🔄"
        },
        {
          "de": "die Entschädigung",
          "info": "Geld als Ausgleich für einen Schaden",
          "emoji": "💶"
        },
        {
          "de": "der Ersatzverkehr",
          "info": "Busse statt der ausgefallenen Bahn",
          "emoji": "🚌"
        },
        {
          "de": "die Durchsage",
          "info": "was über Lautsprecher angesagt wird",
          "emoji": "📢"
        },
        {
          "de": "entfallen",
          "info": "nicht stattfinden",
          "emoji": "🚫"
        },
        {
          "de": "die Fahrgastrechte",
          "info": "was einem als Reisendem zusteht",
          "emoji": "⚖️"
        },
        {
          "de": "der Beleg",
          "info": "ein Papier als Nachweis",
          "emoji": "🧾"
        },
        {
          "de": "erstatten",
          "info": "Geld zurückzahlen",
          "emoji": "↩️"
        },
        {
          "de": "die Zugbindung",
          "info": "die Pflicht, genau diesen Zug zu nehmen",
          "emoji": "🎫"
        },
        {
          "de": "aufheben",
          "info": "hier: eine Regel nicht mehr gelten lassen",
          "emoji": "🆓"
        },
        {
          "de": "der Schalter",
          "info": "die Stelle, an der man persönlich bedient wird",
          "emoji": "🪟"
        },
        {
          "de": "sich gedulden",
          "info": "ruhig warten",
          "emoji": "🧘"
        },
        {
          "de": "die Weiterfahrt",
          "info": "wie es nach dem Halt weitergeht",
          "emoji": "➡️"
        },
        {
          "de": "in Anspruch nehmen",
          "info": "etwas nutzen, worauf man ein Recht hat",
          "emoji": "✋"
        }
      ],
      "exercises": [
        {
          "type": "listen",
          "label": "📢 Durchsage im Zug",
          "q": "Was gilt für Reisende nach Bremen?",
          "options": [
            "Sie müssen den nächsten Zug nehmen, der stündlich fährt.",
            "Ihr Anschlusszug wartet auf den verspäteten Zug.",
            "Sie müssen am Schalter umbuchen lassen.",
            "Sie bekommen auf jeden Fall eine Entschädigung."
          ],
          "answer": 0,
          "transcript": "Sehr geehrte Fahrgäste, wir haben derzeit etwa fünfundzwanzig Minuten Verspätung. Grund ist eine Signalstörung bei Hannover. Für Reisende nach Bremen: Ihr Anschluss wartet nicht, der nächste Zug fährt stündlich. Die Zugbindung ist für alle Fahrkarten aufgehoben, Sie können also auch eine frühere oder spätere Verbindung nehmen, ohne umzubuchen. Ab sechzig Minuten Verspätung am Ziel haben Sie Anspruch auf eine Entschädigung; das Formular bekommen Sie beim Zugpersonal oder online."
        },
        {
          "type": "listen",
          "label": "🗣️ Am Serviceschalter",
          "q": "Was kann der Reisende wählen?",
          "options": [
            "Eine Umbuchung mit Hotel oder die Erstattung des Flugpreises.",
            "Eine Entschädigung in Höhe des Flugpreises.",
            "Ein Hotel und zusätzlich die volle Erstattung.",
            "Nur die Umbuchung auf den Flug am nächsten Morgen."
          ],
          "answer": 0,
          "transcript": "Also, Ihr Flug ist gestrichen, das sehe ich hier. Sie haben jetzt zwei Rechte, und die können Sie sich aussuchen: Entweder wir buchen Sie auf die nächste Maschine um, das wäre morgen früh um sieben, und Sie bekommen für heute Nacht ein Hotel. Oder Sie lassen sich den Flug komplett erstatten und reisen anders. Was ich Ihnen nicht sagen kann, ist, ob Sie zusätzlich Geld bekommen — das hängt davon ab, warum der Flug ausgefallen ist, und das klärt die Airline."
        },
        {
          "type": "listen",
          "label": "📞 Beim Kundenservice",
          "q": "Warum wird der Taxibeleg nicht erstattet?",
          "options": [
            "Weil der Reisende vor Mitternacht angekommen ist.",
            "Weil der Beleg nicht lesbar ist.",
            "Weil die Verspätung unter zwei Stunden lag.",
            "Weil Taxikosten grundsätzlich nie erstattet werden."
          ],
          "answer": 0,
          "transcript": "Ich habe Ihren Antrag hier vorliegen. Die Verspätung ist bestätigt, einhundertzehn Minuten, damit stehen Ihnen fünfzig Prozent des Fahrpreises zu. Was ich noch brauche, ist die Fahrkarte selbst — ein Foto genügt. Den Beleg für das Taxi kann ich leider nicht anerkennen, Taxikosten werden nur ab Mitternacht erstattet, und Sie sind um halb elf angekommen. Sobald die Karte da ist, geht das Geld innerhalb von vier Wochen auf Ihr Konto."
        },
        {
          "type": "listen",
          "label": "📻 Ansage am Bahnsteig",
          "q": "Was können Reisende mit Fahrrad nicht tun?",
          "options": [
            "Den Ersatzbus nach Kassel benutzen.",
            "Die Reservierung erstatten lassen.",
            "Am Schalter in der Halle nachfragen.",
            "Alle dreißig Minuten abfahren."
          ],
          "answer": 0,
          "transcript": "Achtung auf Gleis sieben: Der Regionalexpress nach Kassel entfällt heute. Zwischen Göttingen und Kassel fährt Ersatzverkehr mit Bussen, Abfahrt vor dem Hauptausgang, etwa alle dreißig Minuten. Bitte rechnen Sie mit einer längeren Fahrzeit von rund fünfundvierzig Minuten. Fahrräder können im Bus leider nicht mitgenommen werden. Reisende mit Sitzplatzreservierung wenden sich bitte an den Schalter in der Halle, dort wird die Reservierung erstattet."
        },
        {
          "type": "choice",
          "audio": "die Verspätung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wenn etwas später kommt als geplant",
            "Geld als Ausgleich für einen Schaden",
            "was einem als Reisendem zusteht",
            "hier: eine Regel nicht mehr gelten lassen"
          ],
          "answer": 0,
          "w": "die Verspätung",
          "explain": "die Verspätung = wenn etwas später kommt als geplant."
        },
        {
          "type": "choice",
          "audio": "der Anschluss",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "der nächste Zug oder Flug, den man erreichen muss",
            "Busse statt der ausgefallenen Bahn",
            "ein Papier als Nachweis",
            "die Stelle, an der man persönlich bedient wird"
          ],
          "answer": 0,
          "w": "der Anschluss",
          "explain": "der Anschluss = der nächste Zug oder Flug, den man erreichen muss."
        },
        {
          "type": "choice",
          "audio": "umbuchen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "auf eine andere Verbindung wechseln",
            "was über Lautsprecher angesagt wird",
            "Geld zurückzahlen",
            "ruhig warten"
          ],
          "answer": 0,
          "w": "umbuchen",
          "explain": "umbuchen = auf eine andere Verbindung wechseln."
        },
        {
          "type": "choice",
          "audio": "die Entschädigung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "Geld als Ausgleich für einen Schaden",
            "nicht stattfinden",
            "die Pflicht, genau diesen Zug zu nehmen",
            "wie es nach dem Halt weitergeht"
          ],
          "answer": 0,
          "w": "die Entschädigung",
          "explain": "die Entschädigung = Geld als Ausgleich für einen Schaden."
        },
        {
          "type": "choice",
          "audio": "der Ersatzverkehr",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "Busse statt der ausgefallenen Bahn",
            "was einem als Reisendem zusteht",
            "hier: eine Regel nicht mehr gelten lassen",
            "etwas nutzen, worauf man ein Recht hat"
          ],
          "answer": 0,
          "w": "der Ersatzverkehr",
          "explain": "der Ersatzverkehr = Busse statt der ausgefallenen Bahn."
        },
        {
          "type": "choice",
          "audio": "die Durchsage",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was über Lautsprecher angesagt wird",
            "ein Papier als Nachweis",
            "die Stelle, an der man persönlich bedient wird",
            "wenn etwas später kommt als geplant"
          ],
          "answer": 0,
          "w": "die Durchsage",
          "explain": "die Durchsage = was über Lautsprecher angesagt wird."
        },
        {
          "type": "choice",
          "audio": "entfallen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "nicht stattfinden",
            "Geld zurückzahlen",
            "ruhig warten",
            "der nächste Zug oder Flug, den man erreichen muss"
          ],
          "answer": 0,
          "w": "entfallen",
          "explain": "entfallen = nicht stattfinden."
        },
        {
          "type": "choice",
          "audio": "die Fahrgastrechte",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was einem als Reisendem zusteht",
            "die Pflicht, genau diesen Zug zu nehmen",
            "wie es nach dem Halt weitergeht",
            "auf eine andere Verbindung wechseln"
          ],
          "answer": 0,
          "w": "die Fahrgastrechte",
          "explain": "die Fahrgastrechte = was einem als Reisendem zusteht."
        },
        {
          "type": "choice",
          "audio": "der Beleg",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Papier als Nachweis",
            "hier: eine Regel nicht mehr gelten lassen",
            "etwas nutzen, worauf man ein Recht hat",
            "Geld als Ausgleich für einen Schaden"
          ],
          "answer": 0,
          "w": "der Beleg",
          "explain": "der Beleg = ein Papier als Nachweis."
        },
        {
          "type": "choice",
          "audio": "erstatten",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "Geld zurückzahlen",
            "die Stelle, an der man persönlich bedient wird",
            "wenn etwas später kommt als geplant",
            "Busse statt der ausgefallenen Bahn"
          ],
          "answer": 0,
          "w": "erstatten",
          "explain": "erstatten = Geld zurückzahlen."
        },
        {
          "type": "choice",
          "audio": "die Zugbindung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Pflicht, genau diesen Zug zu nehmen",
            "ruhig warten",
            "der nächste Zug oder Flug, den man erreichen muss",
            "was über Lautsprecher angesagt wird"
          ],
          "answer": 0,
          "w": "die Zugbindung",
          "explain": "die Zugbindung = die Pflicht, genau diesen Zug zu nehmen."
        },
        {
          "type": "choice",
          "audio": "aufheben",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "hier: eine Regel nicht mehr gelten lassen",
            "wie es nach dem Halt weitergeht",
            "auf eine andere Verbindung wechseln",
            "nicht stattfinden"
          ],
          "answer": 0,
          "w": "aufheben",
          "explain": "aufheben = hier: eine Regel nicht mehr gelten lassen."
        },
        {
          "type": "choice",
          "audio": "der Schalter",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Stelle, an der man persönlich bedient wird",
            "etwas nutzen, worauf man ein Recht hat",
            "Geld als Ausgleich für einen Schaden",
            "was einem als Reisendem zusteht"
          ],
          "answer": 0,
          "w": "der Schalter",
          "explain": "der Schalter = die Stelle, an der man persönlich bedient wird."
        },
        {
          "type": "choice",
          "audio": "sich gedulden",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ruhig warten",
            "wenn etwas später kommt als geplant",
            "Busse statt der ausgefallenen Bahn",
            "ein Papier als Nachweis"
          ],
          "answer": 0,
          "w": "sich gedulden",
          "explain": "sich gedulden = ruhig warten."
        },
        {
          "type": "choice",
          "audio": "die Weiterfahrt",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie es nach dem Halt weitergeht",
            "der nächste Zug oder Flug, den man erreichen muss",
            "was über Lautsprecher angesagt wird",
            "Geld zurückzahlen"
          ],
          "answer": 0,
          "w": "die Weiterfahrt",
          "explain": "die Weiterfahrt = wie es nach dem Halt weitergeht."
        },
        {
          "type": "choice",
          "audio": "in Anspruch nehmen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "etwas nutzen, worauf man ein Recht hat",
            "auf eine andere Verbindung wechseln",
            "nicht stattfinden",
            "die Pflicht, genau diesen Zug zu nehmen"
          ],
          "answer": 0,
          "w": "in Anspruch nehmen",
          "explain": "in Anspruch nehmen = etwas nutzen, worauf man ein Recht hat."
        }
      ]
    },
    {
      "id": "c1-vortrag-folgen",
      "title": "Dem Vortrag folgen: Gliederung, Exkurs, Rückbezug",
      "level": "C1",
      "emoji": "🎧",
      "words": [
        {
          "de": "die Gliederung",
          "info": "wie ein Vortrag aufgebaut ist",
          "emoji": "🗂️"
        },
        {
          "de": "der Exkurs",
          "info": "ein Abstecher weg vom eigentlichen Thema",
          "emoji": "↪️"
        },
        {
          "de": "der Rückbezug",
          "info": "wenn jemand auf etwas Früheres zurückkommt",
          "emoji": "🔙"
        },
        {
          "de": "die These",
          "info": "die Behauptung, die begründet werden soll",
          "emoji": "🎯"
        },
        {
          "de": "die Einschränkung",
          "info": "ein Zusatz, der die Aussage schwächer macht",
          "emoji": "⚖️"
        },
        {
          "de": "vorwegnehmen",
          "info": "etwas sagen, bevor es eigentlich dran ist",
          "emoji": "⏩"
        },
        {
          "de": "der Einwand",
          "info": "ein Gegenargument",
          "emoji": "✋"
        },
        {
          "de": "entkräften",
          "info": "ein Argument widerlegen",
          "emoji": "💨"
        },
        {
          "de": "der rote Faden",
          "info": "die Linie, die sich durch das Ganze zieht",
          "emoji": "🧵"
        },
        {
          "de": "abschweifen",
          "info": "vom Thema wegkommen",
          "emoji": "🌀"
        },
        {
          "de": "zusammenfassen",
          "info": "das Wichtigste kurz wiederholen",
          "emoji": "📌"
        },
        {
          "de": "die Schlussfolgerung",
          "info": "was sich aus dem Gesagten ergibt",
          "emoji": "➡️"
        },
        {
          "de": "untermauern",
          "info": "mit Belegen stützen",
          "emoji": "🧱"
        },
        {
          "de": "die Randbemerkung",
          "info": "eine Nebensache am Rande",
          "emoji": "📎"
        },
        {
          "de": "zurückkommen auf",
          "info": "ein früheres Thema wieder aufgreifen",
          "emoji": "🔁"
        },
        {
          "de": "der Ausblick",
          "info": "was danach noch kommt oder zu erwarten ist",
          "emoji": "🔭"
        }
      ],
      "exercises": [
        {
          "type": "listen",
          "label": "🎙️ Anfang eines Vortrags",
          "q": "Was macht der Redner am Anfang?",
          "options": [
            "Er nimmt ein Missverständnis vorweg, das sonst die Diskussion bestimmen würde.",
            "Er erklärt, warum die Maßnahme gescheitert ist.",
            "Er fasst die Ergebnisse schon am Anfang zusammen.",
            "Er entkräftet den wichtigsten Einwand sofort."
          ],
          "answer": 0,
          "transcript": "Bevor ich zum eigentlichen Thema komme, möchte ich eines vorwegnehmen, weil es erfahrungsgemäß sonst die ganze Diskussion bestimmt: Nein, ich halte die Maßnahme nicht für gescheitert. Was ich zeigen will, ist etwas anderes — nämlich dass die Zahlen, mit denen sie verteidigt wird, schlicht nicht das messen, was sie zu messen vorgeben. Ich gehe in drei Schritten vor: zuerst die Datenlage, dann zwei Einwände, die mir regelmäßig begegnen, und am Schluss ein kurzer Ausblick."
        },
        {
          "type": "listen",
          "label": "🎙️ Mitten im Vortrag",
          "q": "Wie bewertet der Redner das dänische Beispiel?",
          "options": [
            "Als nicht ohne Weiteres übertragbar, weil die Ausgangslage anders war.",
            "Als Beweis dafür, dass die Maßnahme funktioniert.",
            "Als unwichtig, weil es acht Jahre her ist.",
            "Als den stärksten Beleg für seine These."
          ],
          "answer": 0,
          "transcript": "An dieser Stelle ein kurzer Exkurs, der nicht direkt zum Thema gehört, aber das Bild vervollständigt: In Dänemark wurde dasselbe vor acht Jahren versucht, unter deutlich anderen Bedingungen allerdings, und ich warne davor, das eins zu eins zu übertragen. Ich sage das, weil die Zahl aus Kopenhagen in jeder zweiten Debatte auftaucht — meist ohne den Zusatz, dass dort die Ausgangslage eine völlig andere war. So, zurück zu unserem Punkt."
        },
        {
          "type": "listen",
          "label": "🎙️ Gegen Ende",
          "q": "Was sagt der Redner über den Einwand?",
          "options": [
            "Er kann ihn nicht vollständig entkräften und sagt das offen.",
            "Er hat ihn am Anfang bereits widerlegt.",
            "Er hält ihn für die stärkste Erklärung.",
            "Er geht nicht weiter darauf ein."
          ],
          "answer": 0,
          "transcript": "Ich komme damit auf den Einwand zurück, den ich am Anfang erwähnt und bewusst offengelassen habe: dass der Effekt sich auch durch den Konjunkturverlauf erklären ließe. Entkräften kann ich ihn nicht vollständig, und ich will das auch gar nicht behaupten. Was sich zeigen lässt, ist nur, dass der Effekt in den Regionen am stärksten ausfällt, in denen die Konjunktur am schwächsten war. Das spricht gegen die Erklärung, beweist aber nichts."
        },
        {
          "type": "listen",
          "label": "🎙️ Der Schluss",
          "q": "Was ist der Randbemerkung des Redners wichtig?",
          "options": [
            "Dass Einschränkungen in einer Studie kein Zeichen von Schwäche sind.",
            "Dass die Zeit für den Vortrag zu knapp war.",
            "Dass die Datenlage schlechter ist als behauptet.",
            "Dass weitreichende Schlüsse nötig sind."
          ],
          "answer": 0,
          "transcript": "Lassen Sie mich zusammenfassen, und ich halte mich kurz, weil die Zeit knapp ist. Erstens: Die Datenlage ist besser, als oft behauptet wird. Zweitens: Sie trägt die weitreichenden Schlüsse nicht, die daraus gezogen werden. Und drittens — das ist eher eine Randbemerkung, aber sie liegt mir am Herzen — wir sollten aufhören, jede Einschränkung als Schwäche zu lesen. Eine Studie, die ihre Grenzen nennt, ist die bessere Studie."
        },
        {
          "type": "choice",
          "audio": "die Gliederung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie ein Vortrag aufgebaut ist",
            "die Behauptung, die begründet werden soll",
            "ein Argument widerlegen",
            "was sich aus dem Gesagten ergibt"
          ],
          "answer": 0,
          "w": "die Gliederung",
          "explain": "die Gliederung = wie ein Vortrag aufgebaut ist."
        },
        {
          "type": "choice",
          "audio": "der Exkurs",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Abstecher weg vom eigentlichen Thema",
            "ein Zusatz, der die Aussage schwächer macht",
            "die Linie, die sich durch das Ganze zieht",
            "mit Belegen stützen"
          ],
          "answer": 0,
          "w": "der Exkurs",
          "explain": "der Exkurs = ein Abstecher weg vom eigentlichen Thema."
        },
        {
          "type": "choice",
          "audio": "der Rückbezug",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wenn jemand auf etwas Früheres zurückkommt",
            "etwas sagen, bevor es eigentlich dran ist",
            "vom Thema wegkommen",
            "eine Nebensache am Rande"
          ],
          "answer": 0,
          "w": "der Rückbezug",
          "explain": "der Rückbezug = wenn jemand auf etwas Früheres zurückkommt."
        },
        {
          "type": "choice",
          "audio": "die These",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Behauptung, die begründet werden soll",
            "ein Gegenargument",
            "das Wichtigste kurz wiederholen",
            "ein früheres Thema wieder aufgreifen"
          ],
          "answer": 0,
          "w": "die These",
          "explain": "die These = die Behauptung, die begründet werden soll."
        },
        {
          "type": "choice",
          "audio": "die Einschränkung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Zusatz, der die Aussage schwächer macht",
            "ein Argument widerlegen",
            "was sich aus dem Gesagten ergibt",
            "was danach noch kommt oder zu erwarten ist"
          ],
          "answer": 0,
          "w": "die Einschränkung",
          "explain": "die Einschränkung = ein Zusatz, der die Aussage schwächer macht."
        },
        {
          "type": "choice",
          "audio": "vorwegnehmen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "etwas sagen, bevor es eigentlich dran ist",
            "die Linie, die sich durch das Ganze zieht",
            "mit Belegen stützen",
            "wie ein Vortrag aufgebaut ist"
          ],
          "answer": 0,
          "w": "vorwegnehmen",
          "explain": "vorwegnehmen = etwas sagen, bevor es eigentlich dran ist."
        },
        {
          "type": "choice",
          "audio": "der Einwand",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Gegenargument",
            "vom Thema wegkommen",
            "eine Nebensache am Rande",
            "ein Abstecher weg vom eigentlichen Thema"
          ],
          "answer": 0,
          "w": "der Einwand",
          "explain": "der Einwand = ein Gegenargument."
        },
        {
          "type": "choice",
          "audio": "entkräften",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Argument widerlegen",
            "das Wichtigste kurz wiederholen",
            "ein früheres Thema wieder aufgreifen",
            "wenn jemand auf etwas Früheres zurückkommt"
          ],
          "answer": 0,
          "w": "entkräften",
          "explain": "entkräften = ein Argument widerlegen."
        },
        {
          "type": "choice",
          "audio": "der rote Faden",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Linie, die sich durch das Ganze zieht",
            "was sich aus dem Gesagten ergibt",
            "was danach noch kommt oder zu erwarten ist",
            "die Behauptung, die begründet werden soll"
          ],
          "answer": 0,
          "w": "der rote Faden",
          "explain": "der rote Faden = die Linie, die sich durch das Ganze zieht."
        },
        {
          "type": "choice",
          "audio": "abschweifen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "vom Thema wegkommen",
            "mit Belegen stützen",
            "wie ein Vortrag aufgebaut ist",
            "ein Zusatz, der die Aussage schwächer macht"
          ],
          "answer": 0,
          "w": "abschweifen",
          "explain": "abschweifen = vom Thema wegkommen."
        },
        {
          "type": "choice",
          "audio": "zusammenfassen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "das Wichtigste kurz wiederholen",
            "eine Nebensache am Rande",
            "ein Abstecher weg vom eigentlichen Thema",
            "etwas sagen, bevor es eigentlich dran ist"
          ],
          "answer": 0,
          "w": "zusammenfassen",
          "explain": "zusammenfassen = das Wichtigste kurz wiederholen."
        },
        {
          "type": "choice",
          "audio": "die Schlussfolgerung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was sich aus dem Gesagten ergibt",
            "ein früheres Thema wieder aufgreifen",
            "wenn jemand auf etwas Früheres zurückkommt",
            "ein Gegenargument"
          ],
          "answer": 0,
          "w": "die Schlussfolgerung",
          "explain": "die Schlussfolgerung = was sich aus dem Gesagten ergibt."
        },
        {
          "type": "choice",
          "audio": "untermauern",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "mit Belegen stützen",
            "was danach noch kommt oder zu erwarten ist",
            "die Behauptung, die begründet werden soll",
            "ein Argument widerlegen"
          ],
          "answer": 0,
          "w": "untermauern",
          "explain": "untermauern = mit Belegen stützen."
        },
        {
          "type": "choice",
          "audio": "die Randbemerkung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "eine Nebensache am Rande",
            "wie ein Vortrag aufgebaut ist",
            "ein Zusatz, der die Aussage schwächer macht",
            "die Linie, die sich durch das Ganze zieht"
          ],
          "answer": 0,
          "w": "die Randbemerkung",
          "explain": "die Randbemerkung = eine Nebensache am Rande."
        },
        {
          "type": "choice",
          "audio": "zurückkommen auf",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein früheres Thema wieder aufgreifen",
            "ein Abstecher weg vom eigentlichen Thema",
            "etwas sagen, bevor es eigentlich dran ist",
            "vom Thema wegkommen"
          ],
          "answer": 0,
          "w": "zurückkommen auf",
          "explain": "zurückkommen auf = ein früheres Thema wieder aufgreifen."
        },
        {
          "type": "choice",
          "audio": "der Ausblick",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was danach noch kommt oder zu erwarten ist",
            "wenn jemand auf etwas Früheres zurückkommt",
            "ein Gegenargument",
            "das Wichtigste kurz wiederholen"
          ],
          "answer": 0,
          "w": "der Ausblick",
          "explain": "der Ausblick = was danach noch kommt oder zu erwarten ist."
        }
      ]
    },
    {
      "id": "c1-bewerbungsgespraech",
      "title": "Im Vorstellungsgespräch: indirekte Fragen, Gehalt, Rückfragen",
      "level": "C1",
      "emoji": "🎧",
      "words": [
        {
          "de": "die Vorstellung",
          "info": "hier: was man sich an Gehalt wünscht",
          "emoji": "💭"
        },
        {
          "de": "der Spielraum",
          "info": "wie viel Verhandlung möglich ist",
          "emoji": "↔️"
        },
        {
          "de": "die Eingruppierung",
          "info": "in welche Gehaltsstufe eine Stelle fällt",
          "emoji": "📊"
        },
        {
          "de": "die Probezeit",
          "info": "die ersten Monate mit kurzer Kündigungsfrist",
          "emoji": "⏳"
        },
        {
          "de": "die Einarbeitung",
          "info": "die Zeit, in der man die Arbeit lernt",
          "emoji": "🧑‍🏫"
        },
        {
          "de": "die Befristung",
          "info": "wenn ein Vertrag ein Enddatum hat",
          "emoji": "📅"
        },
        {
          "de": "die Entwicklungsmöglichkeit",
          "info": "die Aussicht, weiterzukommen",
          "emoji": "📈"
        },
        {
          "de": "die Schnittstelle",
          "info": "die Stelle, an der zwei Bereiche zusammenarbeiten",
          "emoji": "🔗"
        },
        {
          "de": "belastbar",
          "info": "auch unter Druck leistungsfähig",
          "emoji": "💪"
        },
        {
          "de": "die Lücke",
          "info": "hier: eine Zeit ohne Beschäftigung im Lebenslauf",
          "emoji": "🕳️"
        },
        {
          "de": "hinterfragen",
          "info": "kritisch nachfragen, ob etwas stimmt",
          "emoji": "❓"
        },
        {
          "de": "die Rückfrage",
          "info": "die Frage, die man selbst stellt",
          "emoji": "🙋"
        },
        {
          "de": "nachvollziehbar",
          "info": "so, dass man es verstehen und mitdenken kann",
          "emoji": "🧩"
        },
        {
          "de": "sich einbringen",
          "info": "eigene Ideen und Arbeit beisteuern",
          "emoji": "🤲"
        },
        {
          "de": "die Zusage",
          "info": "die verbindliche Antwort, dass man genommen wird",
          "emoji": "✅"
        },
        {
          "de": "in Aussicht stellen",
          "info": "etwas für später versprechen, ohne es zuzusagen",
          "emoji": "🔮"
        }
      ],
      "exercises": [
        {
          "type": "listen",
          "label": "🗣️ Die Gehaltsfrage",
          "q": "Worauf hat der Personaler Einfluss?",
          "options": [
            "Auf die Stufe innerhalb der vorgegebenen Entgeltgruppe.",
            "Auf die Entgeltgruppe selbst.",
            "Auf die Dauer der Probezeit.",
            "Auf gar nichts, die Zahl steht fest."
          ],
          "answer": 0,
          "transcript": "Dann kommen wir zu dem Punkt, um den sich ohnehin alle herumdrücken. Was ich Ihnen sagen kann: Die Stelle ist bei uns in der Gruppe E11 eingruppiert, da ist die Spanne vorgegeben, großen Spielraum habe ich nicht. Was ich beeinflussen kann, ist die Stufe innerhalb der Gruppe, und da zählt einschlägige Berufserfahrung. Bevor ich Ihnen eine Zahl nenne — welche Vorstellung haben Sie denn? Und sagen Sie ruhig eine Zahl, nicht eine Spanne; mit Spannen hört man am Ende immer nur die untere."
        },
        {
          "type": "listen",
          "label": "🗣️ Die Frage nach der Lücke",
          "q": "Was will die Personalerin wissen?",
          "options": [
            "Ob die Bewerberin in dieser Zeit etwas gelernt hat, das hier nützt.",
            "Warum genau die Lücke entstanden ist.",
            "Ob die Bewerberin in dieser Zeit gearbeitet hat.",
            "Ob die Lücke im Lebenslauf richtig angegeben ist."
          ],
          "answer": 0,
          "transcript": "Mir ist aufgefallen, dass zwischen den beiden letzten Stationen gut ein Jahr liegt. Ich frage das nicht, um Sie in Verlegenheit zu bringen — es ist mir ehrlich gesagt gleich, ob Sie gereist sind, jemanden gepflegt haben oder gesucht haben. Was mich interessiert, ist etwas anderes: Würden Sie rückblickend sagen, dass Sie in dieser Zeit etwas gelernt haben, das Sie hier einbringen können? Wenn nicht, ist das auch eine Antwort."
        },
        {
          "type": "listen",
          "label": "🗣️ Die Rückfrage der Bewerberin",
          "q": "Was fragt die Bewerberin bei der zweiten Frage?",
          "options": [
            "Ob die Entwicklungsmöglichkeiten geregelt sind oder von der Person des Vorgesetzten abhängen.",
            "Ob sie befördert wird, wenn die Probezeit vorbei ist.",
            "Wer die Stelle vorher gemacht hat.",
            "Wie lange die Einarbeitung dauert."
          ],
          "answer": 0,
          "transcript": "Dann hätte ich noch zwei Rückfragen. Die erste betrifft die Einarbeitung: Sie haben vorhin gesagt, die Stelle sei neu geschaffen. Heißt das, es gibt niemanden, der die Aufgaben vorher gemacht hat — und wer entscheidet dann in den ersten Monaten, was Vorrang hat? Und die zweite: Sie haben Entwicklungsmöglichkeiten in Aussicht gestellt. Gibt es dafür einen festen Rahmen, oder hängt das am Ende vom Vorgesetzten ab?"
        },
        {
          "type": "listen",
          "label": "📞 Der Anruf danach",
          "q": "Was hat sich seit dem Gespräch geändert?",
          "options": [
            "Der Starttermin und die Befristung der Stelle.",
            "Das Gehalt und der Starttermin.",
            "Die Probezeit und die Eingruppierung.",
            "Nichts, der Anruf bestätigt nur das Gespräch."
          ],
          "answer": 0,
          "transcript": "Frau Aydin, schön, dass ich Sie erreiche. Ich will nicht lange drum herumreden: Wir würden Sie gern nehmen. Eine förmliche Zusage schicke ich Ihnen heute schriftlich, das hier ist nur der Anruf vorweg. Zwei Dinge haben sich gegenüber dem Gespräch geändert, und ich sage sie Ihnen lieber jetzt: Der Starttermin würde sich um zwei Wochen nach hinten verschieben, und die Stelle ist zunächst auf zwei Jahre befristet, mit der klaren Absicht, sie zu entfristen. Wenn das für Sie ein Problem ist, sagen Sie es bitte offen."
        },
        {
          "type": "choice",
          "audio": "die Vorstellung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "hier: was man sich an Gehalt wünscht",
            "die ersten Monate mit kurzer Kündigungsfrist",
            "die Stelle, an der zwei Bereiche zusammenarbeiten",
            "die Frage, die man selbst stellt"
          ],
          "answer": 0,
          "w": "die Vorstellung",
          "explain": "die Vorstellung = hier: was man sich an Gehalt wünscht."
        },
        {
          "type": "choice",
          "audio": "der Spielraum",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie viel Verhandlung möglich ist",
            "die Zeit, in der man die Arbeit lernt",
            "auch unter Druck leistungsfähig",
            "so, dass man es verstehen und mitdenken kann"
          ],
          "answer": 0,
          "w": "der Spielraum",
          "explain": "der Spielraum = wie viel Verhandlung möglich ist."
        },
        {
          "type": "choice",
          "audio": "die Eingruppierung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "in welche Gehaltsstufe eine Stelle fällt",
            "wenn ein Vertrag ein Enddatum hat",
            "hier: eine Zeit ohne Beschäftigung im Lebenslauf",
            "eigene Ideen und Arbeit beisteuern"
          ],
          "answer": 0,
          "w": "die Eingruppierung",
          "explain": "die Eingruppierung = in welche Gehaltsstufe eine Stelle fällt."
        },
        {
          "type": "choice",
          "audio": "die Probezeit",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die ersten Monate mit kurzer Kündigungsfrist",
            "die Aussicht, weiterzukommen",
            "kritisch nachfragen, ob etwas stimmt",
            "die verbindliche Antwort, dass man genommen wird"
          ],
          "answer": 0,
          "w": "die Probezeit",
          "explain": "die Probezeit = die ersten Monate mit kurzer Kündigungsfrist."
        },
        {
          "type": "choice",
          "audio": "die Einarbeitung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Zeit, in der man die Arbeit lernt",
            "die Stelle, an der zwei Bereiche zusammenarbeiten",
            "die Frage, die man selbst stellt",
            "etwas für später versprechen, ohne es zuzusagen"
          ],
          "answer": 0,
          "w": "die Einarbeitung",
          "explain": "die Einarbeitung = die Zeit, in der man die Arbeit lernt."
        },
        {
          "type": "choice",
          "audio": "die Befristung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wenn ein Vertrag ein Enddatum hat",
            "auch unter Druck leistungsfähig",
            "so, dass man es verstehen und mitdenken kann",
            "hier: was man sich an Gehalt wünscht"
          ],
          "answer": 0,
          "w": "die Befristung",
          "explain": "die Befristung = wenn ein Vertrag ein Enddatum hat."
        },
        {
          "type": "choice",
          "audio": "die Entwicklungsmöglichkeit",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Aussicht, weiterzukommen",
            "hier: eine Zeit ohne Beschäftigung im Lebenslauf",
            "eigene Ideen und Arbeit beisteuern",
            "wie viel Verhandlung möglich ist"
          ],
          "answer": 0,
          "w": "die Entwicklungsmöglichkeit",
          "explain": "die Entwicklungsmöglichkeit = die Aussicht, weiterzukommen."
        },
        {
          "type": "choice",
          "audio": "die Schnittstelle",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Stelle, an der zwei Bereiche zusammenarbeiten",
            "kritisch nachfragen, ob etwas stimmt",
            "die verbindliche Antwort, dass man genommen wird",
            "in welche Gehaltsstufe eine Stelle fällt"
          ],
          "answer": 0,
          "w": "die Schnittstelle",
          "explain": "die Schnittstelle = die Stelle, an der zwei Bereiche zusammenarbeiten."
        },
        {
          "type": "choice",
          "audio": "belastbar",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "auch unter Druck leistungsfähig",
            "die Frage, die man selbst stellt",
            "etwas für später versprechen, ohne es zuzusagen",
            "die ersten Monate mit kurzer Kündigungsfrist"
          ],
          "answer": 0,
          "w": "belastbar",
          "explain": "belastbar = auch unter Druck leistungsfähig."
        },
        {
          "type": "choice",
          "audio": "die Lücke",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "hier: eine Zeit ohne Beschäftigung im Lebenslauf",
            "so, dass man es verstehen und mitdenken kann",
            "hier: was man sich an Gehalt wünscht",
            "die Zeit, in der man die Arbeit lernt"
          ],
          "answer": 0,
          "w": "die Lücke",
          "explain": "die Lücke = hier: eine Zeit ohne Beschäftigung im Lebenslauf."
        },
        {
          "type": "choice",
          "audio": "hinterfragen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "kritisch nachfragen, ob etwas stimmt",
            "eigene Ideen und Arbeit beisteuern",
            "wie viel Verhandlung möglich ist",
            "wenn ein Vertrag ein Enddatum hat"
          ],
          "answer": 0,
          "w": "hinterfragen",
          "explain": "hinterfragen = kritisch nachfragen, ob etwas stimmt."
        },
        {
          "type": "choice",
          "audio": "die Rückfrage",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Frage, die man selbst stellt",
            "die verbindliche Antwort, dass man genommen wird",
            "in welche Gehaltsstufe eine Stelle fällt",
            "die Aussicht, weiterzukommen"
          ],
          "answer": 0,
          "w": "die Rückfrage",
          "explain": "die Rückfrage = die Frage, die man selbst stellt."
        },
        {
          "type": "choice",
          "audio": "nachvollziehbar",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "so, dass man es verstehen und mitdenken kann",
            "etwas für später versprechen, ohne es zuzusagen",
            "die ersten Monate mit kurzer Kündigungsfrist",
            "die Stelle, an der zwei Bereiche zusammenarbeiten"
          ],
          "answer": 0,
          "w": "nachvollziehbar",
          "explain": "nachvollziehbar = so, dass man es verstehen und mitdenken kann."
        },
        {
          "type": "choice",
          "audio": "sich einbringen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "eigene Ideen und Arbeit beisteuern",
            "hier: was man sich an Gehalt wünscht",
            "die Zeit, in der man die Arbeit lernt",
            "auch unter Druck leistungsfähig"
          ],
          "answer": 0,
          "w": "sich einbringen",
          "explain": "sich einbringen = eigene Ideen und Arbeit beisteuern."
        },
        {
          "type": "choice",
          "audio": "die Zusage",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die verbindliche Antwort, dass man genommen wird",
            "wie viel Verhandlung möglich ist",
            "wenn ein Vertrag ein Enddatum hat",
            "hier: eine Zeit ohne Beschäftigung im Lebenslauf"
          ],
          "answer": 0,
          "w": "die Zusage",
          "explain": "die Zusage = die verbindliche Antwort, dass man genommen wird."
        },
        {
          "type": "choice",
          "audio": "in Aussicht stellen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "etwas für später versprechen, ohne es zuzusagen",
            "in welche Gehaltsstufe eine Stelle fällt",
            "die Aussicht, weiterzukommen",
            "kritisch nachfragen, ob etwas stimmt"
          ],
          "answer": 0,
          "w": "in Aussicht stellen",
          "explain": "in Aussicht stellen = etwas für später versprechen, ohne es zuzusagen."
        }
      ]
    },
    {
      "id": "c1-telefonkonferenz",
      "title": "Telefonkonferenz: schlechte Leitung, viele Stimmen",
      "level": "C1",
      "emoji": "🎧",
      "words": [
        {
          "de": "die Leitung",
          "info": "die Verbindung beim Telefonieren",
          "emoji": "📶"
        },
        {
          "de": "stumm schalten",
          "info": "das eigene Mikrofon ausschalten",
          "emoji": "🔇"
        },
        {
          "de": "aussetzen",
          "info": "kurz ausfallen und wiederkommen",
          "emoji": "〰️"
        },
        {
          "de": "das Protokoll",
          "info": "die schriftliche Mitschrift einer Sitzung",
          "emoji": "📝"
        },
        {
          "de": "die Tagesordnung",
          "info": "die Liste der Punkte, die besprochen werden",
          "emoji": "📋"
        },
        {
          "de": "vertagen",
          "info": "auf einen späteren Termin verschieben",
          "emoji": "📆"
        },
        {
          "de": "der Zwischenruf",
          "info": "ein Einwurf, während jemand anders spricht",
          "emoji": "💬"
        },
        {
          "de": "sich melden",
          "info": "zeigen, dass man etwas sagen möchte",
          "emoji": "🙋"
        },
        {
          "de": "die Abstimmung",
          "info": "wenn alle sagen, wofür sie sind",
          "emoji": "🗳️"
        },
        {
          "de": "der Beschluss",
          "info": "was am Ende verbindlich entschieden wurde",
          "emoji": "⚖️"
        },
        {
          "de": "federführend",
          "info": "hauptverantwortlich für eine Sache",
          "emoji": "✒️"
        },
        {
          "de": "der Sachstand",
          "info": "wie weit etwas gerade ist",
          "emoji": "📍"
        },
        {
          "de": "das Nachfassen",
          "info": "später noch einmal nachhaken",
          "emoji": "🔁"
        },
        {
          "de": "der Umlauf",
          "info": "etwas geht nacheinander an alle",
          "emoji": "🔄"
        },
        {
          "de": "in Vertretung",
          "info": "anstelle von jemandem, der fehlt",
          "emoji": "🪑"
        },
        {
          "de": "abhaken",
          "info": "als erledigt ansehen",
          "emoji": "✔️"
        }
      ],
      "exercises": [
        {
          "type": "listen",
          "label": "💻 Beginn der Konferenz",
          "q": "Was passiert mit Punkt drei?",
          "options": [
            "Er wird auf nächste Woche vertagt, weil Zahlen fehlen.",
            "Er wird vorgezogen, weil Herr Brandt früher gehen muss.",
            "Er wird ohne die Zahlen besprochen.",
            "Er wird von Herrn Özdemir in Vertretung übernommen."
          ],
          "answer": 0,
          "transcript": "So, ich glaube, wir sind vollzählig. Frau Lemke ist heute nicht dabei, Herr Özdemir ist in ihrer Vertretung da. Bitte schalten Sie sich alle stumm, wenn Sie nicht sprechen — gestern hat uns das eine halbe Stunde gekostet. Zur Tagesordnung: Punkt drei nehme ich raus, dazu fehlen uns noch die Zahlen, den vertagen wir auf nächste Woche. Dafür schieben wir das Thema Lieferfristen vor, weil Herr Brandt um halb vier raus muss."
        },
        {
          "type": "listen",
          "label": "💻 Schlechte Verbindung",
          "q": "Wie geht die Moderatorin mit der schlechten Verbindung um?",
          "options": [
            "Sie wiederholt, was angekommen ist, und lässt es bestätigen.",
            "Sie bittet Herrn Brandt, alles noch einmal zu sagen.",
            "Sie vertagt den Punkt auf die nächste Sitzung.",
            "Sie lässt Herrn Brandt stumm schalten."
          ],
          "answer": 0,
          "transcript": "Entschuldigung, Herr Brandt, Sie setzen gerade aus — ich habe nur die Hälfte verstanden. Ich wiederhole mal, was bei mir angekommen ist, und Sie sagen mir, ob das stimmt: Die Lieferung kommt zwei Wochen später, der Kunde ist informiert, und die Frage ist jetzt, ob wir die Vertragsstrafe zahlen oder nachverhandeln. War das richtig? … Gut. Dann machen wir es so: Sie schreiben das kurz in den Chat, damit wir es fürs Protokoll sauber haben."
        },
        {
          "type": "listen",
          "label": "💻 Mitten in der Diskussion",
          "q": "Was ist das Problem, das die Moderatorin benennt?",
          "options": [
            "Es werden zwei verschiedene Themen gleichzeitig besprochen.",
            "Die Verbindung ist zu schlecht für eine Diskussion.",
            "Frau Sauer und Herr Novak sind unterschiedlicher Meinung.",
            "Die Tagesordnung wurde nicht eingehalten."
          ],
          "answer": 0,
          "transcript": "Moment, bevor wir weitermachen — wir reden hier gerade über zwei verschiedene Dinge. Frau Sauer spricht über den Sachstand im laufenden Projekt, Sie, Herr Novak, über die Planung fürs nächste Jahr. Beides ist wichtig, aber durcheinander kommen wir nicht weiter. Ich schlage vor: erst der Sachstand, zehn Minuten, dann die Planung. Und Zwischenrufe bitte über die Meldefunktion, nicht einfach rein — im Telefon hört man nämlich nicht, wer gerade Luft holt."
        },
        {
          "type": "listen",
          "label": "💻 Am Ende",
          "q": "Was gilt für das Angebot?",
          "options": [
            "Es geht im Umlauf an alle; Schweigen bis Mittwoch gilt als Zustimmung.",
            "Es wird in der nächsten Sitzung besprochen.",
            "Herr Brandt entscheidet darüber federführend.",
            "Es steht nächste Woche als Punkt drei auf der Tagesordnung."
          ],
          "answer": 0,
          "transcript": "Gut, dann halte ich fest: Die Lieferfristen klärt Herr Brandt federführend mit dem Kunden, Rückmeldung bis Freitag. Das Angebot geht nicht in die Sitzung, sondern im Umlauf an alle — wer bis Mittwoch nichts sagt, bei dem gehe ich von Zustimmung aus. Und Punkt drei steht nächste Woche wieder oben. Das Protokoll schicke ich heute Abend; bitte sagen Sie mir bis morgen Bescheid, wenn etwas falsch drinsteht, danach hake ich es ab."
        },
        {
          "type": "choice",
          "audio": "die Leitung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Verbindung beim Telefonieren",
            "die schriftliche Mitschrift einer Sitzung",
            "zeigen, dass man etwas sagen möchte",
            "wie weit etwas gerade ist"
          ],
          "answer": 0,
          "w": "die Leitung",
          "explain": "die Leitung = die Verbindung beim Telefonieren."
        },
        {
          "type": "choice",
          "audio": "stumm schalten",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "das eigene Mikrofon ausschalten",
            "die Liste der Punkte, die besprochen werden",
            "wenn alle sagen, wofür sie sind",
            "später noch einmal nachhaken"
          ],
          "answer": 0,
          "w": "stumm schalten",
          "explain": "stumm schalten = das eigene Mikrofon ausschalten."
        },
        {
          "type": "choice",
          "audio": "aussetzen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "kurz ausfallen und wiederkommen",
            "auf einen späteren Termin verschieben",
            "was am Ende verbindlich entschieden wurde",
            "etwas geht nacheinander an alle"
          ],
          "answer": 0,
          "w": "aussetzen",
          "explain": "aussetzen = kurz ausfallen und wiederkommen."
        },
        {
          "type": "choice",
          "audio": "das Protokoll",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die schriftliche Mitschrift einer Sitzung",
            "ein Einwurf, während jemand anders spricht",
            "hauptverantwortlich für eine Sache",
            "anstelle von jemandem, der fehlt"
          ],
          "answer": 0,
          "w": "das Protokoll",
          "explain": "das Protokoll = die schriftliche Mitschrift einer Sitzung."
        },
        {
          "type": "choice",
          "audio": "die Tagesordnung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "die Liste der Punkte, die besprochen werden",
            "zeigen, dass man etwas sagen möchte",
            "wie weit etwas gerade ist",
            "als erledigt ansehen"
          ],
          "answer": 0,
          "w": "die Tagesordnung",
          "explain": "die Tagesordnung = die Liste der Punkte, die besprochen werden."
        },
        {
          "type": "choice",
          "audio": "vertagen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "auf einen späteren Termin verschieben",
            "wenn alle sagen, wofür sie sind",
            "später noch einmal nachhaken",
            "die Verbindung beim Telefonieren"
          ],
          "answer": 0,
          "w": "vertagen",
          "explain": "vertagen = auf einen späteren Termin verschieben."
        },
        {
          "type": "choice",
          "audio": "der Zwischenruf",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "ein Einwurf, während jemand anders spricht",
            "was am Ende verbindlich entschieden wurde",
            "etwas geht nacheinander an alle",
            "das eigene Mikrofon ausschalten"
          ],
          "answer": 0,
          "w": "der Zwischenruf",
          "explain": "der Zwischenruf = ein Einwurf, während jemand anders spricht."
        },
        {
          "type": "choice",
          "audio": "sich melden",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "zeigen, dass man etwas sagen möchte",
            "hauptverantwortlich für eine Sache",
            "anstelle von jemandem, der fehlt",
            "kurz ausfallen und wiederkommen"
          ],
          "answer": 0,
          "w": "sich melden",
          "explain": "sich melden = zeigen, dass man etwas sagen möchte."
        },
        {
          "type": "choice",
          "audio": "die Abstimmung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wenn alle sagen, wofür sie sind",
            "wie weit etwas gerade ist",
            "als erledigt ansehen",
            "die schriftliche Mitschrift einer Sitzung"
          ],
          "answer": 0,
          "w": "die Abstimmung",
          "explain": "die Abstimmung = wenn alle sagen, wofür sie sind."
        },
        {
          "type": "choice",
          "audio": "der Beschluss",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "was am Ende verbindlich entschieden wurde",
            "später noch einmal nachhaken",
            "die Verbindung beim Telefonieren",
            "die Liste der Punkte, die besprochen werden"
          ],
          "answer": 0,
          "w": "der Beschluss",
          "explain": "der Beschluss = was am Ende verbindlich entschieden wurde."
        },
        {
          "type": "choice",
          "audio": "federführend",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "hauptverantwortlich für eine Sache",
            "etwas geht nacheinander an alle",
            "das eigene Mikrofon ausschalten",
            "auf einen späteren Termin verschieben"
          ],
          "answer": 0,
          "w": "federführend",
          "explain": "federführend = hauptverantwortlich für eine Sache."
        },
        {
          "type": "choice",
          "audio": "der Sachstand",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "wie weit etwas gerade ist",
            "anstelle von jemandem, der fehlt",
            "kurz ausfallen und wiederkommen",
            "ein Einwurf, während jemand anders spricht"
          ],
          "answer": 0,
          "w": "der Sachstand",
          "explain": "der Sachstand = wie weit etwas gerade ist."
        },
        {
          "type": "choice",
          "audio": "das Nachfassen",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "später noch einmal nachhaken",
            "als erledigt ansehen",
            "die schriftliche Mitschrift einer Sitzung",
            "zeigen, dass man etwas sagen möchte"
          ],
          "answer": 0,
          "w": "das Nachfassen",
          "explain": "das Nachfassen = später noch einmal nachhaken."
        },
        {
          "type": "choice",
          "audio": "der Umlauf",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "etwas geht nacheinander an alle",
            "die Verbindung beim Telefonieren",
            "die Liste der Punkte, die besprochen werden",
            "wenn alle sagen, wofür sie sind"
          ],
          "answer": 0,
          "w": "der Umlauf",
          "explain": "der Umlauf = etwas geht nacheinander an alle."
        },
        {
          "type": "choice",
          "audio": "in Vertretung",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "anstelle von jemandem, der fehlt",
            "das eigene Mikrofon ausschalten",
            "auf einen späteren Termin verschieben",
            "was am Ende verbindlich entschieden wurde"
          ],
          "answer": 0,
          "w": "in Vertretung",
          "explain": "in Vertretung = anstelle von jemandem, der fehlt."
        },
        {
          "type": "choice",
          "audio": "abhaken",
          "q": "🔊 Hör zu – was bedeutet das Wort?",
          "options": [
            "als erledigt ansehen",
            "kurz ausfallen und wiederkommen",
            "ein Einwurf, während jemand anders spricht",
            "hauptverantwortlich für eine Sache"
          ],
          "answer": 0,
          "w": "abhaken",
          "explain": "abhaken = als erledigt ansehen."
        }
      ]
    }
  ];

  sk.themes = (sk.themes || []).concat(THEMEN);

  /* Nach Niveau sortieren, damit die neuen nicht hinter C1 landen,
     wenn jemand B2 geöffnet hat. */
  var RANG = { 'A1':1, 'A2':2, 'B1':3, 'B2':4, 'C1':5, 'C2':6 };
  sk.themes.sort(function (a, b) {
    return (RANG[(a && a.level) || ''] || 9) - (RANG[(b && b.level) || ''] || 9);
  });
})();
