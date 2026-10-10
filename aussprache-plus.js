/* ============================================================
   aussprache-plus.js — Aussprache auf B1, B2 und C1 auffuellen

   Gemessen am 10.10.2026: Aussprache hatte auf A1 sieben Themen
   mit 227 Aufgaben und auf A2 sieben mit 202. Ab B1 standen nur
   noch vier Themen mit je 93 Aufgaben. Wer ueber A2 hinauskommt,
   fand also ploetzlich halb so viel Material — und das in dem
   Bereich, der fuer den Sprechclub am meisten traegt.

   Diese Datei haengt neun Themen an, drei pro Niveau:

     B1  pausen-b1        Wo man Luft holt — Atemgruppen im Satz
     B1  rueckfrage-b1    Nachfragen, ohne unhoeflich zu klingen
     B1  ng-nk-b1         Zeitung, Uebung, Bank — der ng-Laut

     B2  endsilben-b2     -tion, -taet, -ur, -ik: der Ton am Ende
     B2  sprechtempo-b2   Wo man langsamer wird: Zahlen, Namen
     B2  ch-ks-b2         Wenn ch zu ks wird: sechs, wachsen, Lachs

     C1  register-c1      Amt oder Freundeskreis — dieselbe Stimme
     C1  ironie-c1        Distanz und Ironie in der Melodie
     C1  varianten-c1     Wien, Zuerich, Hamburg — was anders klingt

   Formen wie in den bestehenden Themen: karte, choice, gap,
   fehler, speak, shadow, schreiben. Ohne audioUrl — dann liest
   die Stimme des Geraets vor, wie bei den Themen aus
   wortschatz-plus.js auch.
   ============================================================ */
(function () {
  'use strict';

  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var sk = null;
  for (var i = 0; i < U.skills.length; i++) {
    if (U.skills[i] && U.skills[i].id === 'aussprache') { sk = U.skills[i]; break; }
  }
  if (!sk) return;
  if (sk.__plusGeladen) return;
  sk.__plusGeladen = true;

  var THEMEN = [
  /* ---------------- B1: Pausen und Atemgruppen ---------------- */
  { id:'pausen-b1', title:'Wo man Luft holt — Atemgruppen im Satz', level:'B1', emoji:'🌬️', words:[
    { de:'die Atemgruppe', info:'das Stück Satz, das du in einem Atem sprichst', emoji:'🌬️' },
    { de:'die Pause', info:'der kurze Stopp, der dem Zuhörer Zeit gibt', emoji:'⏸️' },
    { de:'die Sinngruppe', info:'Wörter, die zusammengehören und zusammen gesprochen werden', emoji:'🔗' },
    { de:'stocken', info:'mitten im Wort stehenbleiben, weil die Luft fehlt', emoji:'😮‍💨' },
    { de:'durchatmen', info:'vor dem Satz Luft holen, nicht danach', emoji:'🫁' },
    { de:'der Einschub', info:'der Teil zwischen zwei Kommas, der leiser bleibt', emoji:'📎' }
  ], exercises:[
    { type:'karte', w:'Wo man Luft holt — Atemgruppen im Satz', info:'Auf B1 werden die Sätze länger, und genau da geht vielen die Luft aus. Das Problem sind selten die Laute, sondern die Stellen, an denen man Pause macht. Deutsch pausiert nicht beim Komma, sondern zwischen Sinngruppen: nach einer Zeitangabe, vor einem Nebensatz, nach dem Subjekt, wenn es lang ist. Wer mitten in einer Sinngruppe Luft holt, klingt unsicher, auch wenn jedes Wort richtig ist. Beim Nachsprechen liest die Stimme deines Geräts vor — sie setzt die Pausen gleichmäßiger als ein Mensch. Hör auf dich selbst.', emoji:'🌬️', regel:true },

    { type:'choice', q:'Wo macht man in „Am Montag habe ich einen Termin beim Arzt“ am besten eine kleine Pause?', options:['Nach „Am Montag“.','Nach „habe“.','Nach „einen“.','Gar nicht, der Satz ist zu kurz.'], answer:0, explain:'Die Zeitangabe am Satzanfang ist eine eigene Sinngruppe. Nach ihr darf die Stimme kurz stehen bleiben — das gibt dem Rest Platz. Nach „habe“ oder „einen“ zu pausieren reißt zusammen, was zusammengehört.' },
    { type:'choice', q:'Woran erkennt man eine gute Pausenstelle?', options:['An jedem Komma im Text.','Dort, wo Wörter inhaltlich zusammengehören und die Gruppe endet.','Immer nach fünf Wörtern.','Nach jedem Verb.'], answer:1, explain:'Pausen folgen dem Sinn, nicht der Zeichensetzung. „Der Mann mit dem blauen Mantel“ ist eine Gruppe — da wird nicht hineingeschnitten, auch wenn sie lang ist.' },
    { type:'choice', q:'„Ich wollte fragen, ob der Termin noch steht.“ Wo gehört die Pause hin?', options:['Nach „ich“.','Nach „der“.','Nach „fragen“, also vor dem Nebensatz.','Nach „noch“.'], answer:2, explain:'Vor einem Nebensatz mit ob, dass oder weil steht fast immer eine Pausenstelle. Dort steht im Deutschen auch das Komma — hier passen Schrift und Stimme zusammen.' },
    { type:'choice', q:'Was passiert, wenn du erst nach dem Satz Luft holst?', options:['Nichts, das ist die normale Art.','Die letzten Wörter werden leise und gepresst.','Der Satz klingt besonders höflich.','Die Melodie steigt am Ende.'], answer:1, explain:'Wer mit halber Lunge in einen langen Satz geht, spart die Luft für die Mitte und hat am Ende keine mehr. Genau am Satzende steht aber meist die wichtigste Information. Luft holen gehört vor den Satz.' },
    { type:'choice', q:'„Der Antrag, den ich im Mai gestellt habe, ist noch nicht bearbeitet.“ Wie klingt der Einschub?', options:['Lauter als der Rest, er ist ja wichtig.','Leiser und flacher, zwischen zwei kleinen Pausen.','Mit steigender Melodie am Ende.','Besonders langsam Wort für Wort.'], answer:1, explain:'Der Einschub zwischen den Kommas tritt zurück. Zwei kleine Pausen rahmen ihn, die Stimme bleibt in der Mitte flach und nimmt danach die Hauptlinie wieder auf — „Der Antrag … ist noch nicht bearbeitet“.' },
    { type:'choice', q:'Du sprichst eine Aufzählung: „Brot, Milch, Butter und Eier“. Was macht die Stimme?', options:['Nach jedem Wort absinken.','Nach jedem Wort oben bleiben, erst nach „Eier“ absinken.','Alles ohne Pause in einem Atem.','Nach „Brot“ absinken, der Rest egal.'], answer:1, explain:'Die schwebende Melodie sagt: Es kommt noch etwas. Erst das letzte Glied der Aufzählung fällt. Wer zwischendurch absinkt, klingt, als wäre die Liste schon fertig.' },
    { type:'choice', q:'Wie viele Wörter passen ungefähr in eine Atemgruppe beim ruhigen Sprechen?', options:['Zwei bis drei.','Etwa fünf bis zehn.','Mindestens zwanzig.','Das ist bei jedem gleich festgelegt.'], answer:1, explain:'Fünf bis zehn Wörter sind eine bequeme Gruppe. Darunter klingt es gehackt, darüber wird die Luft knapp. Bei Aufregung werden die Gruppen kürzer — das ist normal, dann darf man auch öfter atmen.' },
    { type:'choice', q:'Was hilft, wenn du in einem langen Satz regelmäßig stockst?', options:['Schneller sprechen, dann ist man früher fertig.','Den Satz vorher in Gruppen teilen und die Stellen markieren.','Leiser sprechen.','Den Satz auswendig lernen.'], answer:1, explain:'Mit dem Stift zwei Striche in den Satz setzen und genau dort atmen. Nach drei, vier Durchgängen sitzen die Stellen, und der Satz trägt sich selbst.' },
    { type:'choice', q:'„Wenn du Zeit hast, können wir morgen telefonieren.“ Wie viele Atemgruppen sind sinnvoll?', options:['Eine.','Zwei: vor und nach dem Komma.','Vier.','So viele wie Wörter.'], answer:1, explain:'Der vorangestellte Nebensatz ist eine Gruppe, der Hauptsatz die zweite. Die Stimme bleibt nach „hast“ oben — das Signal, dass der Satz weitergeht.' },

    { type:'gap', text:'Deutsch macht Pausen zwischen ___, nicht bei jedem Komma.', answer:'Sinngruppen', alts:['Sinngruppen','sinngruppen','Atemgruppen'], explain:'Sinngruppe und Atemgruppe meinen dasselbe von zwei Seiten: was inhaltlich zusammengehört, wird in einem Atem gesprochen.' },
    { type:'gap', text:'Luft holt man ___ dem langen Satz, nicht danach.', answer:'vor', alts:['vor'], explain:'Wer vorher atmet, hat am Satzende noch Stimme. Und das Satzende trägt im Deutschen meist die neue Information.' },
    { type:'gap', text:'Bei einer Aufzählung bleibt die Stimme oben und sinkt erst beim ___ Glied.', answer:'letzten', alts:['letzten','letzte'], explain:'Brot, Milch, Butter und Eier ↘. Das Absinken ist das Zeichen: Jetzt ist die Liste zu Ende.' },
    { type:'gap', text:'Der Einschub zwischen zwei Kommas wird ___ gesprochen.', answer:'leiser', alts:['leiser','leise','flacher'], explain:'Er ist eine Nebenbemerkung, und die Stimme zeigt das. Danach nimmt sie die Hauptlinie wieder auf, als wäre nichts gewesen.' },

    { type:'fehler', satz:'Ich habe gestern | mit meinem Chef über das neue | Projekt gesprochen.', falsch:'über das neue | Projekt', richtig:'Ich habe gestern | mit meinem Chef | über das neue Projekt gesprochen.', explain:'„das neue Projekt“ ist eine Gruppe — zwischen Adjektiv und Nomen wird nicht geatmet. Die Pause gehört vor die Präpositionalgruppe, nicht in sie hinein.' },
    { type:'fehler', satz:'Der Kollege, | der das macht | ist heute krank.', falsch:'der das macht | ist', richtig:'Der Kollege, | der das macht, | ist heute krank.', explain:'Ein Einschub braucht zwei Pausen, nicht eine. Fällt die zweite weg, klebt der Relativsatz am Hauptsatz und der Zuhörer verliert den Faden.' },
    { type:'fehler', satz:'Ich möchte | einen Termin | am Dienstag | um | zehn Uhr.', falsch:'um | zehn Uhr', richtig:'Ich möchte einen Termin | am Dienstag um zehn Uhr.', explain:'Fünf Pausen in einem kurzen Satz klingen wie ein Telegramm. Präposition und Zeit gehören zusammen: „um zehn Uhr“ ist eine Gruppe.' },

    { type:'speak', word:'Am Montag habe ich einen Termin beim Arzt.', tip:'Nach „Am Montag“ kurz stehen bleiben, dann den Rest in einem Zug.' },
    { type:'speak', word:'Ich wollte fragen, ob der Termin noch steht.', tip:'Nach „fragen“ atmen. Die Stimme bleibt dort oben — es kommt ja noch etwas.' },
    { type:'speak', word:'Der Antrag, den ich im Mai gestellt habe, ist noch nicht bearbeitet.', tip:'Der Einschub leiser und flach. Danach zurück auf die Hauptlinie.' },
    { type:'speak', word:'Wenn du Zeit hast, können wir morgen telefonieren.', tip:'Zwei Gruppen, eine Pause. Nach „hast“ nicht absinken.' },
    { type:'speak', word:'Ich brauche Brot, Milch, Butter und Eier.', tip:'Alle Glieder oben halten, erst „Eier“ fällt.' },
    { type:'speak', word:'Nach dem Gespräch mit der Kollegin war mir die Sache viel klarer.', tip:'Nach „Kollegin“ atmen. Der Vorderteil ist lang — gib ihm seine eigene Gruppe.' },
    { type:'speak', word:'Entschuldigung, ich habe das leider nicht ganz verstanden.', tip:'Nach „Entschuldigung“ eine kleine Pause. Sie wirkt freundlich, nicht unsicher.' },
    { type:'speak', word:'Weil der Bus Verspätung hatte, bin ich zu spät gekommen.', tip:'Nebensatz zuerst, Stimme oben halten, dann der Hauptsatz nach unten.' },
    { type:'speak', word:'Mein Name ist Julia Karackov, und ich rufe wegen des Termins an.', tip:'Nach dem Namen Luft holen. Der Name darf stehen bleiben, damit er ankommt.' },
    { type:'speak', word:'Ich würde gern wissen, wie lange das Verfahren ungefähr dauert.', tip:'Pause nach „wissen“. Danach ruhig weiter, ohne Tempo zuzulegen.' },

    { type:'shadow', level:'B1', text:'Wenn es Ihnen recht ist, schicke ich die Unterlagen heute noch per Mail.', tip:'Zwei Gruppen: die Bedingung oben halten, dann ruhig absinken.' },
    { type:'shadow', level:'B1', text:'Der Termin, den wir letzte Woche vereinbart haben, passt mir leider nicht mehr.', tip:'Einschub leiser, zwei kleine Pausen, Hauptlinie danach wieder aufnehmen.' },

    { type:'schreiben', auftrag:'Nimm drei lange Sätze, die du im Alltag wirklich sagst — am Telefon, beim Arzt, im Kurs. Setze mit dem Stift einen senkrechten Strich an jede Stelle, an der du Luft holen willst. Sprich jeden Satz dann zweimal laut: einmal mit deinen Strichen, einmal absichtlich falsch (Pause mitten in einer Gruppe). Höre den Unterschied.', tipp:'Wenn du bei deiner eigenen Markierung stockst, sitzt der Strich an der falschen Stelle. Verschiebe ihn und versuche es noch einmal.', muster:'Ich wollte fragen, | ob der Termin am Dienstag | noch steht.' }
  ]},

  /* ---------------- B1: Nachfragen ---------------- */
  { id:'rueckfrage-b1', title:'Wie bitte? — nachfragen, ohne unhöflich zu klingen', level:'B1', emoji:'❓', words:[
    { de:'die Rückfrage', info:'die Frage, mit der du etwas klären willst', emoji:'❓' },
    { de:'nachfragen', info:'noch einmal fragen, weil etwas unklar war', emoji:'🔄' },
    { de:'die Melodie', info:'das Steigen und Fallen der Stimme', emoji:'🎵' },
    { de:'schroff', info:'kurz und hart, oft unfreundlich gemeint', emoji:'🧱' },
    { de:'die Echofrage', info:'du wiederholst ein Wort fragend: Morgen?', emoji:'🔊' },
    { de:'bestätigen', info:'sagen, dass etwas richtig verstanden wurde', emoji:'✅' }
  ], exercises:[
    { type:'karte', w:'Wie bitte? — nachfragen, ohne unhöflich zu klingen', info:'Nachfragen ist die wichtigste Fähigkeit im Gespräch, und sie scheitert fast nie am Wortschatz. „Wie bitte?“ mit fallender Stimme klingt gereizt. Dasselbe Wort mit steigender Stimme klingt freundlich und interessiert. Im Deutschen trägt die Melodie die Höflichkeit — mehr als jedes zusätzliche „bitte“. Wer das einmal gehört hat, kann es sofort benutzen. Beim Nachsprechen liest die Stimme deines Geräts vor; sie übertreibt die Melodie weniger als ein Mensch. Übertreibe du lieber etwas.', emoji:'❓', regel:true },

    { type:'choice', q:'„Wie bitte?“ — wie klingt es freundlich?', options:['Mit fallender Stimme am Ende.','Mit steigender Stimme am Ende.','Besonders laut.','Besonders langsam.'], answer:1, explain:'Steigend ↗ heißt: Ich bin interessiert, sag es noch einmal. Fallend ↘ klingt wie ein Vorwurf — so fragt man, wenn man sich über etwas ärgert.' },
    { type:'choice', q:'Welche Rückfrage ist im Gespräch mit Fremden am freundlichsten?', options:['Was?','Hä?','Entschuldigung, könnten Sie das noch einmal sagen?','Noch mal.'], answer:2, explain:'„Was?“ und „Hä?“ sind unter Freunden normal, gegenüber Fremden wirken sie schroff. Die lange Form kostet drei Sekunden und öffnet jede Tür.' },
    { type:'choice', q:'Du hast nur ein Wort nicht verstanden. Was ist die klügste Rückfrage?', options:['Alles noch einmal, bitte.','Ich habe nichts verstanden.','Entschuldigung, was heißt „Bescheid“?','Ich spreche schlecht Deutsch.'], answer:2, explain:'Frage genau das Wort, das fehlt. Dann musst du nicht den ganzen Satz noch einmal hören und zeigst, dass du den Rest verstanden hast.' },
    { type:'choice', q:'Eine Echofrage ist …', options:['… wenn du das wichtige Wort fragend wiederholst: „Am Dienstag?“','… wenn du laut sprichst.','… wenn du eine Frage zweimal stellst.','… wenn du die Antwort schon kennst.'], answer:0, explain:'Eine Echofrage ist kurz und präzise. Die Stimme steigt auf dem wiederholten Wort — „Am DIENSTAG?“ — und der andere weiß sofort, was du wissen willst.' },
    { type:'choice', q:'Wo liegt der Ton bei „Sie meinen also, dass der Antrag abgelehnt wurde?“', options:['Auf „Sie“.','Auf „also“.','Auf „abgelehnt“ — das ist der Punkt.','Gleichmäßig auf allen Wörtern.'], answer:2, explain:'Betont wird, worum es geht. Damit zeigst du, welchen Teil du geklärt haben willst. Der Rest des Satzes bleibt leise.' },
    { type:'choice', q:'Du willst bestätigen, dass du richtig verstanden hast. Welcher Satz passt?', options:['Ich habe verstanden.','Also noch einmal: Der Termin ist am Freitag um zehn?','Ja, ja.','Okay, egal.'], answer:1, explain:'Zusammenfassen und fragend enden ist die sicherste Technik: Du zeigst, was du verstanden hast, und der andere kann genau an der Stelle korrigieren, an der es nötig ist.' },
    { type:'choice', q:'Was macht die Stimme bei einer W-Frage wie „Wann kommen Sie?“ normalerweise?', options:['Sie steigt am Ende.','Sie fällt am Ende.','Sie bleibt flach.','Sie steigt zweimal.'], answer:1, explain:'W-Fragen sinken ab — das ist der Normalfall. Nur wenn du besonders freundlich oder vorsichtig klingen willst, lässt du sie leicht steigen.' },
    { type:'choice', q:'„Könnten Sie bitte etwas langsamer sprechen?“ — warum funktioniert dieser Satz so gut?', options:['Weil er lang ist.','Weil er im Konjunktiv steht und das Problem beim Tempo liegt, nicht beim anderen.','Weil er eine W-Frage ist.','Weil er das Wort „bitte“ enthält.'], answer:1, explain:'„Könnten Sie“ ist eine Bitte, keine Forderung. Und das Tempo ist etwas Neutrales — niemand fühlt sich angegriffen. Deshalb ist dieser Satz im Kurs und am Telefon so brauchbar.' },
    { type:'choice', q:'Jemand spricht sehr schnell. Was ist besser, als nur zu nicken?', options:['Nichts sagen und hoffen.','Einmal kurz unterbrechen und nachfragen.','Am Ende sagen, dass man alles verstanden hat.','Lauter werden.'], answer:1, explain:'Eine Rückfrage nach zwei Sätzen ist leichter als zehn ungeklärte Sätze am Ende. Unterbrechen ist hier nicht unhöflich, sondern hilfreich — auch für den anderen.' },

    { type:'gap', text:'„Wie bitte?“ klingt freundlich, wenn die Stimme am Ende ___.', answer:'steigt', alts:['steigt','ansteigt','hochgeht'], explain:'Steigend heißt offen und interessiert. Fallend heißt: Was erlauben Sie sich. Derselbe Wortlaut, zwei Wirkungen.' },
    { type:'gap', text:'Bei einer Echofrage betont man das ___ Wort.', answer:'wiederholte', alts:['wiederholte','wichtige'], explain:'„Am DIENSTAG?“ — nur das eine Wort trägt den Ton und die steigende Melodie. Alles andere kann weg.' },
    { type:'gap', text:'W-Fragen wie „Wann kommen Sie?“ ___ am Ende normalerweise ab.', answer:'sinken', alts:['sinken','fallen'], explain:'Das Fragewort steht schon vorn, die Melodie muss die Frage nicht mehr anzeigen. Deshalb darf sie fallen.' },
    { type:'gap', text:'Für eine höfliche Bitte nimmst du „___ Sie bitte …“.', answer:'Könnten', alts:['Könnten','könnten','Könnten','könnten'], explain:'Der Konjunktiv macht aus der Forderung eine Bitte. „Können Sie“ ist schon höflich, „könnten Sie“ noch etwas weicher.' },

    { type:'fehler', satz:'Was? Sagen Sie das noch mal.', falsch:'Was? Sagen Sie das noch mal.', richtig:'Entschuldigung, könnten Sie das noch einmal sagen?', explain:'Grammatisch ist beides richtig. Aber „Was?“ plus Imperativ klingt wie eine Anweisung. Mit Entschuldigung und Konjunktiv wird daraus eine Bitte.' },
    { type:'fehler', satz:'Ich verstehe nicht. Sprechen Sie langsam!', falsch:'Sprechen Sie langsam!', richtig:'Könnten Sie bitte etwas langsamer sprechen?', explain:'Der Imperativ mit Ausrufezeichen befiehlt. Und „langsam“ klingt absolut — „etwas langsamer“ ist eine kleine Bitte, die jeder gern erfüllt.' },
    { type:'fehler', satz:'Sie meinen also dass der Termin abgesagt ist.', falsch:'ist.', richtig:'Sie meinen also, dass der Termin abgesagt ist?', explain:'Als Aussage mit Punkt legst du dem anderen Worte in den Mund. Mit Fragezeichen und steigender Stimme lässt du ihm die Möglichkeit, dich zu korrigieren.' },

    { type:'speak', word:'Wie bitte?', tip:'Deutlich steigend. Übertreib die Melodie beim Üben — im Gespräch wird sie von allein kleiner.' },
    { type:'speak', word:'Entschuldigung, könnten Sie das noch einmal sagen?', tip:'Ruhig und ohne Eile. Nach „Entschuldigung“ eine kleine Pause.' },
    { type:'speak', word:'Am Dienstag?', tip:'Nur dieses Wort, steigend. Kurz ist hier freundlicher als lang.' },
    { type:'speak', word:'Was heißt „Bescheid“ genau?', tip:'Das gefragte Wort betonen, der Rest leise. Die Stimme fällt am Ende — es ist eine W-Frage.' },
    { type:'speak', word:'Sie meinen also, dass der Antrag abgelehnt wurde?', tip:'Ton auf „abgelehnt“, Stimme am Ende steigend.' },
    { type:'speak', word:'Könnten Sie bitte etwas langsamer sprechen?', tip:'„langsamer“ betonen — und selbst langsam sprechen, das hilft doppelt.' },
    { type:'speak', word:'Habe ich das richtig verstanden: Ich soll das Formular mitbringen?', tip:'Nach dem Doppelpunkt eine kleine Pause, dann steigend enden.' },
    { type:'speak', word:'Entschuldigung, ich bin mir nicht sicher, ob ich das verstanden habe.', tip:'Ruhig und freundlich. Dieser Satz kauft dir Zeit, ohne dass es auffällt.' },
    { type:'speak', word:'Moment, darf ich kurz nachfragen?', tip:'„Moment“ mit kleiner Pause danach. So unterbrichst du, ohne zu stören.' },
    { type:'speak', word:'Das habe ich jetzt verstanden, danke.', tip:'Fallende Stimme — hier ist die Sache wirklich geklärt.' },

    { type:'shadow', level:'B1', text:'Entschuldigung, ich habe den letzten Teil nicht ganz mitbekommen — könnten Sie das wiederholen?', tip:'Zwei Gruppen. Der erste Teil erklärt, der zweite bittet und steigt.' },
    { type:'shadow', level:'B1', text:'Also, wenn ich Sie richtig verstehe, brauche ich noch eine Bescheinigung vom Arbeitgeber?', tip:'Oben halten bis zum Ende, dann steigend. Der ganze Satz ist eine Frage.' },

    { type:'schreiben', auftrag:'Schreibe fünf Rückfragen auf, die du in deinem Alltag wirklich brauchst — im Kurs, beim Amt, im Supermarkt, am Telefon, bei der Arbeit. Markiere hinter jeder mit einem Pfeil, ob die Stimme steigt ↗ oder fällt ↘. Sprich jede zweimal: einmal mit dem richtigen Pfeil, einmal mit dem falschen.', tipp:'Nimm dich mit dem Handy auf. Beim Abhören erkennst du sofort, welche Variante freundlich klingt — besser als jede Erklärung.', muster:'Entschuldigung, wie war die Hausnummer? ↘   /   Hausnummer vierzehn? ↗' }
  ]},

  /* ---------------- B1: ng und nk ---------------- */
  { id:'ng-nk-b1', title:'Zeitung, Übung, Bank — der ng-Laut ohne g', level:'B1', emoji:'🔔', words:[
    { de:'der Nasal', info:'ein Laut, der durch die Nase klingt: m, n, ng', emoji:'👃' },
    { de:'die Endung -ung', info:'Zeitung, Übung, Wohnung — sehr häufig im Deutschen', emoji:'📰' },
    { de:'der Gaumen', info:'das Dach im Mund, dort entsteht ng', emoji:'🏠' },
    { de:'anhängen', info:'hier: ein k oder g hinten dranhängen, das nicht hingehört', emoji:'➕' },
    { de:'summen', info:'mit geschlossenem Mund einen Ton halten', emoji:'🎶' },
    { de:'das Minimalpaar', info:'zwei Wörter, die sich nur in einem Laut unterscheiden', emoji:'👯' }
  ], exercises:[
    { type:'karte', w:'Zeitung, Übung, Bank — der ng-Laut ohne g', info:'„ng“ ist im Deutschen ein einziger Laut, kein n plus g. Die Zunge geht hinten an den Gaumen und bleibt dort — wie beim englischen „sing“. Wer „Zeitun-g“ mit hörbarem g am Ende sagt, klingt sofort fremd, und das betrifft die häufigste Endung der Sprache: -ung. Dieselbe Zungenstellung gilt für „nk“, nur dass dort wirklich ein k folgt: Bank, Dank, denken. Der Unterschied zwischen „Engel“ und „Enkel“ liegt genau hier. Beim Nachsprechen liest die Stimme deines Geräts vor — der ng-Laut gelingt ihr gut, hör genau hin.', emoji:'🔔', regel:true },

    { type:'choice', q:'Wie spricht man „Zeitung“ am Ende?', options:['Mit deutlichem g: Zeitun-g.','Als einen Nasallaut ohne g: Zeitunnng.','Mit k: Zeitunk.','Mit n: Zeitun.'], answer:1, explain:'ng ist ein Laut. Die Zunge liegt hinten am Gaumen, die Luft geht durch die Nase, und dann hört es einfach auf — ohne Klick, ohne g.' },
    { type:'choice', q:'Welches Wort hat ein echtes k nach dem Nasal?', options:['die Übung','der Dank','die Wohnung','der Finger'], answer:1, explain:'In „Dank“, „Bank“, „denken“ folgt wirklich ein k. In den -ung-Wörtern nicht. Darin liegt der ganze Unterschied.' },
    { type:'choice', q:'„Engel“ und „Enkel“ — was unterscheidet sie?', options:['Nur die Schreibweise.','In „Enkel“ folgt ein k, in „Engel“ nicht.','Der Vokal.','Die Betonung.'], answer:1, explain:'Beide haben denselben Nasal hinten am Gaumen. In „Enkel“ kommt danach ein deutliches k, in „Engel“ geht es direkt zum l. Ein klassisches Minimalpaar.' },
    { type:'choice', q:'Wie findest du die richtige Zungenstellung für ng?', options:['Zungenspitze an die Zähne.','Mund weit auf, Zunge flach.','„Singen“ sagen und mitten im Nasal stehen bleiben.','Lippen schließen.'], answer:2, explain:'Halte den Nasal in „singen“ wie einen Summton. Was du dann spürst — Zungenrücken hinten oben, Luft durch die Nase — ist die Stellung. Von dort kommt kein g mehr.' },
    { type:'choice', q:'„Ich denke“ — wie klingt das Wort?', options:['den-ke, mit n wie in „nein“.','dengke, mit dem ng-Nasal vor dem k.','denn-ke.','deng-e, ohne k.'], answer:1, explain:'Vor k und g wird n automatisch zum hinteren Nasal: denken, danken, Anker, Finger. Du musst nichts Besonderes tun — nur das k danach nicht verschlucken.' },
    { type:'choice', q:'Welche Reihe hat überall denselben Endlaut?', options:['Übung, Wohnung, Meinung, Rechnung','Bank, Dank, Schrank, Punkt','Finger, Hunger, Sänger, Angel','Engel, Enkel, Onkel, Winkel'], answer:0, explain:'Alle vier enden auf -ung, also auf den reinen Nasal. Die zweite Reihe endet auf k, die dritte und vierte sind gemischt.' },
    { type:'choice', q:'Warum ist dieser Laut so wichtig?', options:['Weil er selten ist.','Weil -ung die häufigste Nachsilbe für Nomen ist.','Weil er nur in Fremdwörtern vorkommt.','Weil er den Satzakzent trägt.'], answer:1, explain:'Zeitung, Wohnung, Rechnung, Prüfung, Übung, Meinung, Ausbildung — die Endung kommt in fast jedem Gespräch dutzendfach vor. Ein falsches g daran hört man den ganzen Tag.' },
    { type:'choice', q:'Wie spricht man „Finger“?', options:['Fin-ger, mit deutlichem g.','Mit dem Nasal plus g: Fing-ger.','Mit k: Finker.','Ohne Nasal: Finner.'], answer:1, explain:'„Finger“, „Hunger“, „Ungarn“ gehören zur kleinen Gruppe, in der nach dem Nasal wirklich ein g folgt. „Sänger“ und „Sanger“ dagegen nicht — da endet der Stamm auf ng.' },
    { type:'choice', q:'Was passiert, wenn du am Ende von „Wohnung“ ein k sprichst?', options:['Nichts, das ist regional normal.','Es klingt hart und fällt sofort auf.','Es wird höflicher.','Es ändert die Bedeutung.'], answer:1, explain:'Ein k am Ende von -ung ist einer der auffälligsten Aussprachefehler überhaupt. Die Endung ist weich und läuft aus — sie wird nicht abgeschnitten.' },

    { type:'gap', text:'In „Zeitung“ ist ng ___ Laut, nicht zwei.', answer:'ein', alts:['ein','einer','ein einziger'], explain:'Die Schreibung hat zwei Buchstaben, der Mund macht eine Bewegung. Das ist der ganze Trick.' },
    { type:'gap', text:'Bei ng liegt der Zungenrücken hinten am ___.', answer:'Gaumen', alts:['Gaumen','gaumen'], explain:'Dieselbe Stelle wie bei k und g. Nur geht die Luft hier durch die Nase statt durch den Mund.' },
    { type:'gap', text:'In „Bank“ und „Dank“ folgt nach dem Nasal ein echtes ___.', answer:'k', alts:['k','K'], explain:'Deshalb enden diese Wörter hart, die -ung-Wörter weich. Gleiche Zungenstellung, anderes Ende.' },
    { type:'gap', text:'„Engel“ hat kein k, „___“ hat eins.', answer:'Enkel', alts:['Enkel','enkel'], explain:'Engel ↔ Enkel, Angel ↔ Anker, Sänger ↔ Senker. An diesen Paaren hörst du, ob du den Laut sauber trennst.' },

    { type:'fehler', satz:'Ich habe die Wohnunk gefunden.', falsch:'Wohnunk', richtig:'Ich habe die Wohnung gefunden.', explain:'Kein k am Ende von -ung. Der Nasal läuft aus, der Mund bleibt offen. Wer hier abschneidet, hört sich selbst sofort.' },
    { type:'fehler', satz:'Wir machen morgen eine Uebun-ge.', falsch:'Uebun-ge', richtig:'Wir machen morgen eine Übung.', explain:'Auch kein g hinterher. Die Endung ist -ung, ein Laut, und danach kommt nichts mehr.' },
    { type:'fehler', satz:'Ich denne, das geht.', falsch:'denne', richtig:'Ich denke, das geht.', explain:'Das k in „denken“ gehört dazu und muss hörbar sein. Nasal hinten am Gaumen, dann ein klares k: den-k-e.' },

    { type:'speak', word:'die Zeitung', tip:'Am Ende weich auslaufen lassen. Kein g, kein k — der Nasal hört einfach auf.' },
    { type:'speak', word:'die Übung, die Wohnung, die Rechnung', tip:'Drei gleiche Endungen hintereinander. Höre, ob sie wirklich gleich klingen.' },
    { type:'speak', word:'Engel — Enkel', tip:'Beim ersten nichts nach dem Nasal, beim zweiten ein deutliches k. Langsam im Wechsel.' },
    { type:'speak', word:'die Bank, der Dank, der Schrank', tip:'Hier gehört das k dazu. Nasal hinten, dann k — fest, aber nicht übertrieben.' },
    { type:'speak', word:'Ich denke oft an die Prüfung.', tip:'Zwei verschiedene Enden in einem Satz: denke mit k, Prüfung ohne.' },
    { type:'speak', word:'der Finger, der Hunger, der Sänger', tip:'Finger und Hunger mit g, Sänger ohne. Eine kleine Gruppe, die man sich merkt.' },
    { type:'speak', word:'Meine Meinung zu dieser Rechnung ist eindeutig.', tip:'Drei Nasale im Satz. Alle weich auslaufen lassen.' },
    { type:'speak', word:'Vielen Dank für die Einladung!', tip:'Dank mit k, Einladung ohne. Genau der Kontrast, auf den es ankommt.' },
    { type:'speak', word:'singen, sangen, gesungen', tip:'Dreimal derselbe Nasal, drei Vokale davor. Der Laut bleibt gleich.' },
    { type:'speak', word:'die Ausbildung, die Prüfung, die Bewerbung', tip:'Drei Wörter, die du oft brauchst. Alle enden weich.' },

    { type:'shadow', level:'B1', text:'Die Rechnung für die Wohnung kam heute mit der Zeitung zusammen.', tip:'Drei -ung in einem Satz. Jedes weich enden lassen, ohne Tempo zu verlieren.' },
    { type:'shadow', level:'B1', text:'Vielen Dank für die Einladung — ich denke, ich kann kommen.', tip:'Dank und denke mit k, Einladung ohne. Der Satz übt beides.' },

    { type:'schreiben', auftrag:'Sammle zwölf Wörter mit -ung, die in deinem Alltag vorkommen, und fünf mit -nk oder -nke. Schreibe sie in zwei Spalten. Sprich dann abwechselnd eins von links und eins von rechts — Wohnung, Bank, Prüfung, Dank — und spüre, wie dein Zungenrücken an derselben Stelle bleibt, aber das Ende anders ist.', tipp:'Lege eine Hand leicht an den Hals. Beim Nasal spürst du die Vibration, beim k eine kleine Unterbrechung. Das ist der Unterschied, den du hören willst.', muster:'Wohnung · Zeitung · Rechnung   |   Bank · Dank · denken' }
  ]},
  /* ---------------- B2: Endsilben in Fachwörtern ---------------- */
  { id:'endsilben-b2', title:'Nation, Qualität, Kultur — der Ton sitzt am Ende', level:'B2', emoji:'🏛️', words:[
    { de:'die Endsilbe', info:'die letzte Silbe eines Wortes', emoji:'🔚' },
    { de:'die Nachsilbe', info:'der angehängte Teil: -tion, -tät, -ur, -ik', emoji:'🧩' },
    { de:'der Wortakzent', info:'die Silbe, die den Ton trägt', emoji:'🎯' },
    { de:'das Lehnwort', info:'ein Wort, das aus einer anderen Sprache kommt', emoji:'🌍' },
    { de:'die Silbe', info:'ein Sprechstück mit einem Vokal', emoji:'🧱' },
    { de:'verschieben', info:'hier: der Ton wandert an eine andere Stelle', emoji:'↔️' }
  ], exercises:[
    { type:'karte', w:'Nation, Qualität, Kultur — der Ton sitzt am Ende', info:'Im deutschen Erbwort liegt der Ton fast immer vorn: ÁRbeit, FÉNSter, ÚRlaub. Bei Wörtern aus dem Lateinischen und Französischen gilt das Gegenteil, und zwar nach Regeln, die man lernen kann. Die Nachsilben -tion, -tät, -ur, -ie, -ik, -ismus, -ent, -ant ziehen den Ton auf sich oder direkt davor. Wer QUÁlität statt QualitÄT sagt, wird verstanden, klingt aber auf B2 unter seinem Niveau — und genau diese Wörter braucht man im Beruf jeden Tag. Beim Nachsprechen liest die Stimme deines Geräts vor; die Betonung trifft sie zuverlässig.', emoji:'🏛️', regel:true },

    { type:'choice', q:'Wo liegt der Ton bei „Nation“?', options:['NÁtion','natiÓN','Na-TI-on mit drei gleichen Silben','Das ist regional verschieden.'], answer:1, explain:'Die Nachsilbe -tion trägt immer den Ton, und sie klingt wie „tsjon“ in einer Silbe: NatiÓN, SituatiÓN, InformatiÓN, PräsentatiÓN. Keine Ausnahme.' },
    { type:'choice', q:'„Qualität“ — welche Silbe ist betont?', options:['QUA','li','TÄT','alle gleich'], answer:2, explain:'-tät zieht den Ton auf sich: QualitÄT, UniversitÄT, AktivitÄT, IdentitÄT. Dasselbe Muster wie bei -tion.' },
    { type:'choice', q:'Wo liegt der Ton bei „Kultur“?', options:['KÚLtur','kulTÚR','Beides geht.','Auf keiner Silbe besonders.'], answer:1, explain:'-ur ist betont: KultÚR, NatÚR, StruktÚR, TemperatÚR. Wer vorn betont, klingt nach Lehrbuch von vor hundert Jahren.' },
    { type:'choice', q:'Was passiert bei „Politik“ und „politisch“?', options:['Der Ton bleibt an derselben Stelle.','Der Ton verschiebt sich: politÍK, aber polÍtisch.','Beide Wörter sind vorn betont.','Beide sind hinten betont.'], answer:1, explain:'Das ist die wichtigste Beobachtung dieses Themas: Die Nachsilbe entscheidet, nicht der Stamm. -ik ist betont, -isch nicht. Deshalb wandert der Ton, wenn du das Wort umbaust.' },
    { type:'choice', q:'Welches Wort ist auf der letzten Silbe betont?', options:['der Student','das Fenster','die Arbeit','der Urlaub'], answer:0, explain:'StudÉNT — die Nachsilbe -ent trägt den Ton. Die anderen drei sind deutsche Erbwörter und vorn betont.' },
    { type:'choice', q:'„Industrie“, „Melodie“, „Fantasie“ — wo liegt der Ton?', options:['Auf der ersten Silbe.','Auf der zweiten.','Auf -ie am Ende.','Wechselnd.'], answer:2, explain:'-ie am Wortende ist betont und wird lang gesprochen: IndustrÍE. Nur in „Familie“ und „Linie“ ist -ie unbetont und kurz — dort hörst du zwei Silben: Fa-MÍ-li-e.' },
    { type:'choice', q:'Wie betont man „Kapitalismus“?', options:['KApitalismus','kapiTAlismus','kapitalÍSmus','kapitalisMÚS'], answer:2, explain:'Bei -ismus liegt der Ton auf der Silbe davor: kapitalÍSmus, TourÍSmus, OptimÍSmus. Nicht auf -mus selbst.' },
    { type:'choice', q:'Welche Regel stimmt?', options:['Deutsche Erbwörter betonen hinten, Lehnwörter vorn.','Deutsche Erbwörter betonen vorn, viele Lehnwörter hinten.','Alle Wörter betonen die erste Silbe.','Die Betonung ist frei wählbar.'], answer:1, explain:'ÁRbeitsplatz, aber ArbeitsmarktsituatiÓN. Sobald eine der lateinischen Nachsilben dranhängt, gilt ihre Regel — egal wie deutsch der Rest aussieht.' },
    { type:'choice', q:'„Der Termin wurde storniert.“ Wo liegt der Ton in „storniert“?', options:['STÓRniert','storNÍERT','Gleichmäßig.','Auf dem Präfix.'], answer:1, explain:'Verben auf -ieren betonen immer -IER-: stornÍEren, telefonÍEren, reparÍEren, funktionÍEren. Eine der verlässlichsten Regeln überhaupt.' },

    { type:'gap', text:'Die Nachsilbe -tion ist immer ___.', answer:'betont', alts:['betont'], explain:'Und sie ist eine Silbe, nicht zwei: Nati-ON klingt wie „tsjon“. Das spart Zeit und klingt richtig.' },
    { type:'gap', text:'Bei „politisch“ liegt der Ton auf der ___ Silbe.', answer:'zweiten', alts:['zweiten','zweite','ersten'], explain:'po-LÍ-tisch. Die Nachsilbe -isch trägt keinen Ton, also rutscht er auf die Silbe davor — anders als bei politÍK.' },
    { type:'gap', text:'Verben auf -ieren betonen die Silbe ___.', answer:'ier', alts:['ier','-ier','IER','ieren'], explain:'telefonÍEren, funktionÍEren, diskutÍEren. Egal wie lang das Wort ist, der Ton sitzt dort.' },
    { type:'gap', text:'Bei „Tourismus“ liegt der Ton auf der Silbe ___ -mus.', answer:'vor', alts:['vor','davor'], explain:'tourÍSmus. Die Nachsilbe -ismus schiebt den Ton nach vorn, direkt vor sich selbst.' },

    { type:'fehler', satz:'Wir brauchen mehr INformation über die SItuation.', falsch:'INformation … SItuation', richtig:'Wir brauchen mehr InformatiÓN über die SituatiÓN.', explain:'Beide Wörter enden auf -tion, beide betonen die letzte Silbe. Vorn betont klingen sie wie aus dem Englischen übernommen.' },
    { type:'fehler', satz:'Ich muss das Gerät noch REparieren.', falsch:'REparieren', richtig:'Ich muss das Gerät noch reparÍEren.', explain:'-ieren zieht den Ton auf sich. Das gilt für hunderte Verben, die du täglich brauchst.' },
    { type:'fehler', satz:'Sie hat an der UNiversität studiert.', falsch:'UNiversität', richtig:'Sie hat an der UniversitÄT studiert.', explain:'-tät ist betont. Und „studiert“ ebenfalls hinten: stu-DÍERT.' },

    { type:'speak', word:'die Information, die Situation, die Präsentation', tip:'Alle drei enden gleich und alle drei betonen das Ende. Eine Silbe: tsjon.' },
    { type:'speak', word:'die Qualität, die Universität, die Aktivität', tip:'Der Ton fällt jedes Mal auf -tät. Lass die Silben davor leicht durchlaufen.' },
    { type:'speak', word:'die Kultur, die Natur, die Struktur', tip:'Kurz anlaufen, dann der Ton auf -ur. Das u ist lang.' },
    { type:'speak', word:'die Politik — politisch', tip:'Der Ton wandert. Sprich beide direkt hintereinander, damit du die Verschiebung hörst.' },
    { type:'speak', word:'Ich muss noch telefonieren und das Formular ausfüllen.', tip:'telefonÍEren mit dem Ton in der Mitte, FormulÁR hinten.' },
    { type:'speak', word:'Der Tourismus ist für die Region wichtig.', tip:'tourÍSmus und RegiÓN — zwei Lehnwörter, beide nicht vorn betont.' },
    { type:'speak', word:'Die Diskussion war sehr konstruktiv.', tip:'DiskussiÓN hinten, konstruktÍV ebenfalls hinten.' },
    { type:'speak', word:'Er arbeitet als Ingenieur in der Industrie.', tip:'IngeniÖR und IndustrÍE — beide am Ende betont und am Ende lang.' },
    { type:'speak', word:'Die Reparatur hat leider nicht funktioniert.', tip:'ReparatÚR und funktionÍERT. Zwei Töne weit hinten, ruhig sprechen.' },
    { type:'speak', word:'Wir haben die Dokumentation komplett aktualisiert.', tip:'DokumentatiÓN und aktualisÍERT. Der längste Satz dieses Themas — in zwei Gruppen.' },

    { type:'shadow', level:'B2', text:'Nach der Präsentation hatten wir eine lange Diskussion über die Qualität der Dokumentation.', tip:'Vier Lehnwörter, vier Töne am Ende. Nicht schneller werden.' },
    { type:'shadow', level:'B2', text:'Die Universität organisiert jedes Jahr eine Konferenz zum Thema Migration und Integration.', tip:'organisÍERT, KonferÉNZ, MigratiÓN, IntegratiÓN — alles hinten.' },

    { type:'schreiben', auftrag:'Schreibe aus deinem Beruf oder deinem Fachgebiet fünfzehn Wörter mit diesen Nachsilben heraus: -tion, -tät, -ur, -ie, -ik, -ismus, -ent, -ieren. Setze über die betonte Silbe einen Akzent. Sprich die Liste dann zweimal: einmal mit deinen Akzenten, einmal absichtlich alle vorn betont — damit du den Unterschied selbst hörst.', tipp:'Wenn du bei einem Wort unsicher bist, bilde die verwandten Formen: Politik – politisch – Politiker. Die Nachsilbe sagt dir jedes Mal, wo der Ton hingehört.', muster:'die SituatiÓN · die KapazitÄT · die TemperatÚR · analysÍEren' }
  ]},

  /* ---------------- B2: Sprechtempo ---------------- */
  { id:'sprechtempo-b2', title:'Langsamer werden: Zahlen, Namen, Termine', level:'B2', emoji:'🐢', words:[
    { de:'das Sprechtempo', info:'wie schnell du sprichst', emoji:'⏱️' },
    { de:'buchstabieren', info:'ein Wort Buchstabe für Buchstabe sagen', emoji:'🔤' },
    { de:'die Ziffer', info:'eine einzelne Zahl: 0 bis 9', emoji:'🔢' },
    { de:'deutlich', info:'so, dass man jedes Wort versteht', emoji:'🔍' },
    { de:'nuscheln', info:'undeutlich sprechen, Wörter verschlucken', emoji:'😶‍🌫️' },
    { de:'die Dehnung', info:'ein Laut wird länger gehalten', emoji:'➖' }
  ], exercises:[
    { type:'karte', w:'Langsamer werden: Zahlen, Namen, Termine', info:'Auf B2 sprechen die meisten schon flüssig — und genau das wird am Telefon zum Problem. Deutsche Muttersprachler wechseln beim Sprechen das Tempo: Zahlen, Namen, Adressen und Uhrzeiten sprechen sie deutlich langsamer als den Rest, mit kleinen Pausen zwischen den Blöcken. Wer alles im gleichen Tempo sagt, muss jede Telefonnummer zweimal wiederholen. Das Mittel ist nicht, insgesamt langsamer zu werden, sondern an den richtigen Stellen. Beim Nachsprechen liest die Stimme deines Geräts vor — ihr Tempo ist gleichmäßiger als ein Mensch, achte selbst auf die Blöcke.', emoji:'🐢', regel:true },

    { type:'choice', q:'Wie gibt man eine Telefonnummer am besten durch?', options:['So schnell wie möglich, in einem Zug.','In Zweier- oder Dreierblöcken mit kleinen Pausen.','Jede Ziffer einzeln, sehr langsam.','Als eine große Zahl: dreihundertvierundzwanzigtausend…'], answer:1, explain:'Blöcke mit Pausen: null-eins-sieben – drei-vier – acht-neun. Das Ohr kann zwei bis drei Ziffern auf einmal behalten, mehr nicht. Deshalb pausiert man.' },
    { type:'choice', q:'Wann wird ein deutscher Muttersprachler von sich aus langsamer?', options:['Am Satzanfang.','Bei Zahlen, Namen und Adressen.','Bei Verben.','Nie, das Tempo bleibt gleich.'], answer:1, explain:'Zahlen und Namen kann man nicht erraten. Alles andere ergänzt das Ohr aus dem Zusammenhang — deshalb darf es schneller laufen.' },
    { type:'choice', q:'Du nennst deinen Namen am Telefon. Was hilft am meisten?', options:['Lauter sprechen.','Den Namen langsam sagen und gleich buchstabieren.','Den Namen dreimal wiederholen.','Den Namen weglassen.'], answer:1, explain:'„Karackov — ich buchstabiere: K wie Kaufmann, A wie Anton …“ Das kostet zehn Sekunden und erspart drei Rückfragen.' },
    { type:'choice', q:'Wie sagt man eine Uhrzeit deutlich?', options:['„vierzehnuhrdreißig“ in einem Wort.','„vierzehn Uhr – dreißig“ mit kleiner Pause.','Nur die Zahl: „vierzehndreißig“.','Mit steigender Stimme.'], answer:1, explain:'Die Pause trennt Stunde und Minute. Ohne sie verschmelzen die Zahlen und der andere hört „vierzehn“ und dann irgendetwas.' },
    { type:'choice', q:'Was ist beim Sprechen von Hausnummern typisch deutsch?', options:['Man sagt die Ziffern einzeln.','Man sagt die Zahl als Ganzes: „Nummer vierzehn“.','Man lässt sie weg.','Man schreibt sie nur.'], answer:1, explain:'Hausnummern und Postleitzahlen werden unterschiedlich behandelt: die Hausnummer als Zahl („vierzehn“), die Postleitzahl meist in Ziffern („fünf-acht-eins-eins-neun“).' },
    { type:'choice', q:'Ein Wort ist sehr wichtig. Wie hebst du es hervor, ohne laut zu werden?', options:['Schneller sprechen.','Eine kleine Pause davor und das Wort etwas länger.','Das Wort wiederholen.','Die Stimme heben.'], answer:1, explain:'Die Pause vor dem Wort ist das stärkste Mittel der Sprache. „Wir brauchen die Unterlagen – morgen.“ Das wirkt mehr als jede Lautstärke.' },
    { type:'choice', q:'Warum klingt zu schnelles Sprechen oft unsicher?', options:['Weil es falsch ist.','Weil es wirkt, als wollte man schnell fertig werden.','Weil es zu laut ist.','Weil die Grammatik leidet.'], answer:1, explain:'Tempo liest der Zuhörer als Nervosität. Ruhiges Tempo an den wichtigen Stellen wirkt kompetent — unabhängig davon, wie gut dein Deutsch sonst ist.' },
    { type:'choice', q:'Du buchstabierst „Müller“. Was sagst du?', options:['M-ü-l-l-e-r, sehr schnell.','M wie Martha, U-Umlaut, L wie Ludwig, L wie Ludwig, E wie Emil, R wie Richard.','Nur: Müller mit ü.','M, dann der Rest wie gesprochen.'], answer:1, explain:'Das Buchstabieralphabet ist am Telefon Standard. Und „U-Umlaut“ ist der übliche Weg für ü — nicht „u mit zwei Punkten“.' },
    { type:'choice', q:'Was ist bei „zwei“ und „drei“ am Telefon üblich?', options:['Man sagt beide normal.','Man sagt „zwo“ statt „zwei“.','Man buchstabiert sie.','Man sagt sie zweimal.'], answer:1, explain:'„Zwo“ hat sich am Telefon durchgesetzt, weil „zwei“ und „drei“ sich zu ähnlich anhören. Das macht dich nicht altmodisch, sondern verständlich.' },

    { type:'gap', text:'Telefonnummern spricht man in ___ mit kleinen Pausen.', answer:'Blöcken', alts:['Blöcken','Blocken','blöcken','Gruppen'], explain:'Zwei bis drei Ziffern pro Block. Das entspricht genau dem, was ein Ohr auf einmal aufnehmen kann.' },
    { type:'gap', text:'Am Telefon sagt man oft „___“ statt „zwei“.', answer:'zwo', alts:['zwo','Zwo'], explain:'Damit es sich nicht mit „drei“ verwechselt. Eine kleine Konvention, die sofort professionell klingt.' },
    { type:'gap', text:'Das stärkste Mittel zur Hervorhebung ist die ___ vor dem wichtigen Wort.', answer:'Pause', alts:['Pause','kleine Pause'], explain:'Sie macht Platz. Der Zuhörer merkt, dass jetzt etwas kommt, und hört genauer hin.' },
    { type:'gap', text:'Beim Buchstabieren sagt man für ü: „U-___“.', answer:'Umlaut', alts:['Umlaut','umlaut'], explain:'Ebenso A-Umlaut und O-Umlaut. Für ß sagt man „Eszett“ oder „scharfes S“.' },

    { type:'fehler', satz:'Meine Nummer ist null eins sieben drei vier acht neun zwei eins.', falsch:'ohne Blöcke', richtig:'Meine Nummer ist null-eins-sieben – drei-vier – acht-neun – zwo-eins.', explain:'Dieselben Ziffern, aber in Blöcken. Grammatisch ändert sich nichts, verständlich wird es erst so.' },
    { type:'fehler', satz:'Ich heiße Karackov, also weiter im Text.', falsch:'also weiter im Text', richtig:'Ich heiße Karackov – ich buchstabiere: K wie Kaufmann, A wie Anton …', explain:'Einen fremden Namen hört niemand beim ersten Mal. Gleich buchstabieren ist freundlich, nicht übergenau.' },
    { type:'fehler', satz:'Der Termin ist am vierzehntenzehntenzweitausendsechsundzwanzig.', falsch:'ohne Pausen', richtig:'Der Termin ist am vierzehnten – Zehnten – zweitausendsechsundzwanzig.', explain:'Datum in drei Blöcken: Tag, Monat, Jahr. Jeder Block bekommt seine kleine Pause.' },

    { type:'speak', word:'Meine Nummer ist null-eins-sieben – drei-vier – acht-neun – zwo-eins.', tip:'Nach jedem Block kurz anhalten. Nicht schneller werden, wenn es flüssig läuft.' },
    { type:'speak', word:'Ich heiße Karackov: K wie Kaufmann, A wie Anton, R wie Richard.', tip:'Ruhig und gleichmäßig. Jeder Buchstabe bekommt dieselbe Zeit.' },
    { type:'speak', word:'Der Termin ist am Dienstag – um vierzehn Uhr – dreißig.', tip:'Drei Blöcke, zwei kleine Pausen. So kann der andere mitschreiben.' },
    { type:'speak', word:'Die Postleitzahl ist fünf-acht – eins-eins-neun.', tip:'Zwei Blöcke. Ziffern einzeln, nicht als Zahl.' },
    { type:'speak', word:'Wir brauchen die Unterlagen – morgen.', tip:'Die Pause vor „morgen“ ist die ganze Botschaft. Halte sie aus.' },
    { type:'speak', word:'Meine Adresse: Wiesenstraße – vierzehn – in Hagen.', tip:'Straße, Nummer, Stadt — drei Blöcke. Die Hausnummer als Zahl.' },
    { type:'speak', word:'Könnten Sie mir das bitte bestätigen – schriftlich?', tip:'Pause vor dem letzten Wort. Es trägt den ganzen Satz.' },
    { type:'speak', word:'Das kostet neunundneunzig Euro – fünfzig.', tip:'Euro und Cent getrennt. So hört man den Betrag beim ersten Mal.' },
    { type:'speak', word:'Mein Geburtsdatum: der dritte – März – neunzehnhundertneunzig.', tip:'Tag, Monat, Jahr. Das Jahr am Ende ruhig und ganz.' },
    { type:'speak', word:'Ich rufe wegen der Rechnung Nummer zwo-vier-sieben an.', tip:'Die Nummer langsamer als den Rest des Satzes. Genau das ist die Technik.' },

    { type:'shadow', level:'B2', text:'Guten Tag, mein Name ist Karackov – ich rufe wegen des Termins am Dienstag an.', tip:'Der Name langsam, der Rest normal. Zwei Tempi in einem Satz.' },
    { type:'shadow', level:'B2', text:'Sie erreichen mich unter null-eins-sieben – drei-vier – acht-neun – zwo-eins, am besten vormittags.', tip:'Die Nummer in Blöcken, der Nachsatz wieder im normalen Tempo.' },

    { type:'schreiben', auftrag:'Schreibe deine eigene Telefonnummer, deine Adresse, dein Geburtsdatum und deinen Namen so auf, wie du sie am Telefon sagen würdest — mit Gedankenstrichen an jeder Pausenstelle und dem Buchstabieralphabet für den Namen. Sprich das Ganze dann einmal ins Handy und höre es ab: Könntest du selbst mitschreiben?', tipp:'Wenn du beim Abhören etwas nicht mitschreiben könntest, fehlt dort eine Pause. Setze einen Strich mehr und nimm es noch einmal auf.', muster:'Karackov: K wie Kaufmann – A wie Anton – R wie Richard – A wie Anton – C wie Cäsar – K wie Kaufmann – O wie Otto – V wie Viktor' }
  ]},

  /* ---------------- B2: ch als ks ---------------- */
  { id:'ch-ks-b2', title:'Wenn ch zu ks wird: sechs, wachsen, Lachs', level:'B2', emoji:'🔀', words:[
    { de:'der Laut', info:'das, was man hört — nicht der Buchstabe', emoji:'🔊' },
    { de:'die Schreibung', info:'wie ein Wort geschrieben wird', emoji:'✍️' },
    { de:'die Ausnahme', info:'ein Fall, der der Regel nicht folgt', emoji:'⚠️' },
    { de:'der Reibelaut', info:'ch in „ich“ und „ach“ — die Luft reibt sich', emoji:'💨' },
    { de:'der Stamm', info:'der Kern des Wortes ohne Endungen', emoji:'🌳' },
    { de:'verwechseln', info:'zwei Dinge für dasselbe halten', emoji:'🔁' }
  ], exercises:[
    { type:'karte', w:'Wenn ch zu ks wird: sechs, wachsen, Lachs', info:'„chs“ wird im Deutschen meistens wie „ks“ gesprochen: sechs klingt wie „seks“, wachsen wie „waksen“, Lachs wie „Laks“. Das steht in keinem Anfängerkurs, trifft aber Wörter, die man täglich sagt — sechs, Fuchs, wechseln, Erwachsene. Und es gibt die Gegengruppe: Wenn das ch zum Stamm gehört und das s nur eine Endung ist, bleibt der Reibelaut. „du machst“ ist nicht „maks“, sondern mach-st. Dieselben drei Buchstaben, zwei Aussprachen — und die Grammatik entscheidet. Beim Nachsprechen liest die Stimme deines Geräts vor; hier lohnt genaues Hinhören.', emoji:'🔀', regel:true },

    { type:'choice', q:'Wie spricht man „sechs“?', options:['seCHs mit Reibelaut','seks','sechts','sex-s'], answer:1, explain:'„seks“. Dasselbe gilt für „sechzehn“? Nein — dort ist es wieder der Reibelaut: „sech-zehn“. Nur „sechs“ und „sechste“ haben das ks.' },
    { type:'choice', q:'Welches Wort hat den ks-Laut?', options:['du machst','ich suche','der Fuchs','die Nacht'], answer:2, explain:'Fuchs = „Fuks“. Bei „du machst“ gehört ch zum Stamm (machen) und das st ist die Endung — deshalb bleibt der Reibelaut.' },
    { type:'choice', q:'Warum bleibt in „du machst“ der Reibelaut?', options:['Weil es ein Verb ist.','Weil das ch zum Stamm gehört und -st nur die Endung ist.','Weil es kurz ist.','Weil ein Vokal folgt.'], answer:1, explain:'Die Silbengrenze liegt zwischen ch und st: mach|st. Nur wenn chs im Stamm selbst steht — Fuchs, Lachs, wachsen — verschmilzt es zu ks.' },
    { type:'choice', q:'Wie spricht man „wechseln“?', options:['wech-seln mit Reibelaut','wekseln','wesseln','wechs-eln mit hartem ch'], answer:1, explain:'„wekseln“. Auch „Wechsel“, „abwechselnd“ und „Wechselpräposition“ — das ks zieht sich durch die ganze Familie.' },
    { type:'choice', q:'Welche Reihe hat überall ks?', options:['sechs, Fuchs, Lachs, wachsen','machst, suchst, brauchst, riechst','ich, mich, dich, nicht','Nacht, acht, Macht, Schlacht'], answer:0, explain:'In der ersten Reihe gehört chs zum Stamm. Die zweite Reihe sind Verbformen mit Endung -st, die dritte und vierte haben gar kein s.' },
    { type:'choice', q:'„Die Erwachsenen“ — wie klingt die Mitte?', options:['-wach-se-','-wak-se-','-wachs-e-','-wasch-e-'], answer:1, explain:'Erwaksene. Ein Wort, das im Alltag ständig vorkommt und mit Reibelaut sofort auffällt.' },
    { type:'choice', q:'Was ist mit „höchste“ und „nächste“?', options:['Beide mit ks.','Beide mit Reibelaut, denn das s gehört zur Endung -ste.','Das erste mit ks, das zweite mit Reibelaut.','Regional verschieden.'], answer:1, explain:'höch-ste, näch-ste. Die Superlativendung -ste ist eine Endung, kein Stamm-s. Dieselbe Logik wie bei „du machst“.' },
    { type:'choice', q:'Woran erkennst du, welche Aussprache gilt?', options:['An der Wortlänge.','An der Frage, ob das s zum Stamm gehört oder eine Endung ist.','An der Betonung.','Am Artikel.'], answer:1, explain:'Eine einzige Frage, und du hast die Antwort: Kann ich das s weglassen und es bleibt ein Wort? „mach“ ja, also Endung. „Fuch“ nein, also Stamm — und damit ks.' },
    { type:'choice', q:'Wie spricht man „Weihnachtsmarkt“?', options:['Mit ks in der Mitte.','Mit Reibelaut: Weihnacht-s-markt.','Ohne s.','Mit sch.'], answer:1, explain:'Hier ist das s ein Fugen-s zwischen zwei Wörtern: Weihnacht + s + Markt. Es gehört nicht zum chs, also bleibt der Reibelaut.' },

    { type:'gap', text:'„sechs“ spricht man wie „___“.', answer:'seks', alts:['seks','sex'], explain:'Und „sechzehn“ wieder mit Reibelaut. Zwei Zahlen, zwei Aussprachen — deshalb fällt es auf.' },
    { type:'gap', text:'In „du machst“ bleibt der Reibelaut, weil -st eine ___ ist.', answer:'Endung', alts:['Endung','endung'], explain:'Die Silbengrenze trennt ch und st. Kein Verschmelzen, kein ks.' },
    { type:'gap', text:'„wachsen“ klingt wie „___“.', answer:'waksen', alts:['waksen'], explain:'Das chs gehört zum Stamm wachs-. Deshalb verschmilzt es.' },
    { type:'gap', text:'Die Testfrage: Gehört das s zum ___ oder ist es eine Endung?', answer:'Stamm', alts:['Stamm','stamm'], explain:'Zum Stamm heißt ks. Endung heißt Reibelaut. Eine Frage, zwei Antworten, fertig.' },

    { type:'fehler', satz:'Wir treffen uns um sech-Uhr.', falsch:'sech', richtig:'Wir treffen uns um sechs Uhr.', explain:'Das s gehört dazu und wird zusammen mit dem ch zu ks gesprochen: „seks Uhr“. Weglassen geht nicht.' },
    { type:'fehler', satz:'Was machs du am Wochenende?', falsch:'machs', richtig:'Was machst du am Wochenende?', explain:'Die Endung ist -st, nicht -s. Und sie bleibt hörbar getrennt: mach-st, nicht „maks“.' },
    { type:'fehler', satz:'Die erwachsene Kinder brauchen keine Hilfe.', falsch:'erwachsene Kinder', richtig:'Die erwachsenen Kinder brauchen keine Hilfe.', explain:'Nach „die“ im Plural steht -en. Und beim Sprechen: erwaksenen, mit ks in der Mitte.' },

    { type:'speak', word:'sechs — sechzehn', tip:'Erst ks, dann Reibelaut. Direkt hintereinander, damit der Unterschied sitzt.' },
    { type:'speak', word:'der Fuchs, der Lachs, das Wachs', tip:'Dreimal ks am Ende. Kurz und fest, kein Reibelaut.' },
    { type:'speak', word:'Ich möchte den Termin wechseln.', tip:'„wekseln“ — ein Wort, das du oft brauchst.' },
    { type:'speak', word:'du machst — du suchst — du brauchst', tip:'Hier bleibt der Reibelaut. Hörbar getrennt: mach-st.' },
    { type:'speak', word:'Die Erwachsenen warten draußen.', tip:'Erwaksenen. Lass das ks in der Mitte wirklich zu.' },
    { type:'speak', word:'Das ist die höchste Stufe und der nächste Schritt.', tip:'höch-ste und näch-ste mit Reibelaut. Die Endung bleibt eigenständig.' },
    { type:'speak', word:'Mein Sohn wächst schnell.', tip:'wächst = wäkst. Stamm wachs-, also ks, und dann noch das t.' },
    { type:'speak', word:'Wir gehen über den Weihnachtsmarkt.', tip:'Weihnacht-s-markt mit Reibelaut. Das Fugen-s zählt nicht zum chs.' },
    { type:'speak', word:'Sechs Wochen, sechzehn Tage, der sechste Mai.', tip:'ks – Reibelaut – ks. Alle drei Varianten in einem Satz.' },
    { type:'speak', word:'Was brauchst du, damit es wächst?', tip:'brauchst mit Reibelaut, wächst mit ks. Der Satz stellt beide nebeneinander.' },

    { type:'shadow', level:'B2', text:'Sechs Erwachsene und sechzehn Kinder warten am nächsten Eingang.', tip:'Sechs mit ks, sechzehn und nächsten mit Reibelaut. Nicht hetzen.' },
    { type:'shadow', level:'B2', text:'Wenn du den Termin wechseln möchtest, brauchst du nur anzurufen.', tip:'wekseln mit ks, brauchst mit Reibelaut. Zwei Gruppen, eine Pause.' },

    { type:'schreiben', auftrag:'Teile ein Blatt in zwei Spalten: links „chs = ks“, rechts „ch + Endung“. Sortiere diese Wörter ein und ergänze je fünf eigene: sechs, machst, Fuchs, suchst, wachsen, höchste, Lachs, nächste, wechseln, brauchst, Erwachsene, riechst. Sprich am Ende jede Spalte laut von oben nach unten.', tipp:'Nutze die Testfrage: Kann ich das s weglassen und es bleibt ein Wort? Wenn ja, ist es eine Endung — rechte Spalte.', muster:'ks: sechs · Fuchs · Lachs · wachsen   |   ch+st: machst · suchst · höchste · nächste' }
  ]},
  /* ---------------- C1: Register ---------------- */
  { id:'register-c1', title:'Amt oder Freundeskreis — eine Stimme, zwei Register', level:'C1', emoji:'🎭', words:[
    { de:'das Register', info:'die Sprechweise, die zur Situation passt', emoji:'🎭' },
    { de:'die Artikulation', info:'wie deutlich die Laute gebildet werden', emoji:'👄' },
    { de:'förmlich', info:'offiziell, mit Abstand — wie beim Amt', emoji:'🏛️' },
    { de:'salopp', info:'locker, lässig, unter Freunden', emoji:'🧢' },
    { de:'die Endsilbe', info:'hier: -en, -er, -e am Wortende', emoji:'🔚' },
    { de:'angemessen', info:'passend für die Situation', emoji:'⚖️' }
  ], exercises:[
    { type:'karte', w:'Amt oder Freundeskreis — eine Stimme, zwei Register', info:'Auf C1 sind die Laute meistens da. Was fehlt, ist das Umschalten. Muttersprachler sprechen im Amt und am Küchentisch unterschiedlich — nicht nur mit anderen Wörtern, sondern mit anderer Artikulation, anderem Tempo und anderen Endsilben. Förmlich heißt: Endungen vollständig, Tempo ruhig, Pausen länger, kein Verschlucken. Locker heißt: haben wird zu „ham“, eine zu „ne“, ist es zu „issas“. Wer immer förmlich spricht, klingt steif; wer immer locker spricht, wirkt im Amt unvorbereitet. Beide Register beherrschen heißt, zwischen ihnen wählen zu können. Beim Nachsprechen liest die Stimme deines Geräts vor — sie kennt nur ein Register, achte auf deines.', emoji:'🎭', regel:true },

    { type:'choice', q:'Was unterscheidet förmliches von lockerem Sprechen am deutlichsten?', options:['Die Lautstärke.','Die Vollständigkeit der Endungen und das Tempo.','Die Satzlänge.','Die Stimmhöhe.'], answer:1, explain:'Im förmlichen Register spricht man „haben wir“ vollständig aus; locker wird daraus „ham wa“. Das ist kein Fehler, sondern eine andere Ebene — und sie muss zur Situation passen.' },
    { type:'choice', q:'Du bist beim Amt. Welche Form passt?', options:['Ham Sie das Formular?','Haben Sie das Formular?','Hamse das Formular?','Formular da?'], answer:1, explain:'Vollständige Endung, ruhiges Tempo. „Hamse“ ist im Alltag völlig normal, beim Amt wirkt es leichtfertig — besonders, wenn man etwas möchte.' },
    { type:'choice', q:'Welche Aussprache ist typisch für den Freundeskreis?', options:['„Wir haben es nicht gesehen.“','„Wir ham’s nich gesehn.“','Beide gleich häufig.','Keine von beiden.'], answer:1, explain:'Zusammenziehen, Endungen kürzen, das t in „nicht“ weglassen. Wer so unter Freunden spricht, klingt natürlich. Wer es nie tut, wirkt distanziert.' },
    { type:'choice', q:'Was passiert mit der Endung -en im förmlichen Register?', options:['Sie wird zu -n verkürzt.','Sie wird vollständig als eigene Silbe gesprochen.','Sie verschwindet.','Sie wird betont.'], answer:1, explain:'„geh-en“, „hab-en“, „komm-en“ mit hörbarer zweiter Silbe. Locker wird daraus ein einziges n: „gehn“, „ham“, „komm’n“.' },
    { type:'choice', q:'Wie wirkt sehr deutliche Artikulation im privaten Gespräch?', options:['Besonders freundlich.','Steif, manchmal belehrend.','Unverständlich.','Genau richtig.'], answer:1, explain:'Wer beim Kaffee jedes Wort wie im Diktat spricht, baut Abstand auf. Deutlichkeit ist ein Werkzeug, kein Dauerzustand.' },
    { type:'choice', q:'In welcher Situation ist das förmliche Register wirklich nötig?', options:['Beim Smalltalk mit Nachbarn.','Im Bewerbungsgespräch und bei Behörden.','Beim Einkaufen.','Nie, es ist veraltet.'], answer:1, explain:'Bewerbung, Amt, Vortrag, Beschwerde, erster Kundenkontakt. Überall dort hört der andere auch auf das Wie, nicht nur auf das Was.' },
    { type:'choice', q:'Wie schaltet man im Gespräch nach oben, wenn es plötzlich offiziell wird?', options:['Lauter werden.','Tempo zurücknehmen, Endungen vollständig, Pausen länger.','Mehr Fremdwörter benutzen.','Die Stimme heben.'], answer:1, explain:'Drei Regler: Tempo, Endungen, Pausen. Mit ihnen klingt derselbe Satz in zwei Welten. Fremdwörter machen das Register nicht förmlich, nur umständlich.' },
    { type:'choice', q:'„Ich würde vorschlagen, dass wir das noch einmal prüfen.“ In welches Register gehört der Satz?', options:['Locker.','Förmlich bis neutral.','Nur schriftlich.','Salopp.'], answer:1, explain:'Konjunktiv, vollständige Formen, ruhiger Bau. Das ist der Satz für eine Besprechung — unter Freunden würde man sagen: „Lass uns das nochmal angucken.“' },
    { type:'choice', q:'Was ist der häufigste Registerfehler auf C1?', options:['Zu viele Fremdwörter.','Dauerhaft ein Register, egal mit wem.','Zu laute Stimme.','Falsche Betonung.'], answer:1, explain:'Nicht die Wahl eines Registers ist das Problem, sondern das Fehlen der Wahl. Wer umschalten kann, wirkt überall passend.' },

    { type:'gap', text:'Im förmlichen Register spricht man die Endung -en als eigene ___.', answer:'Silbe', alts:['Silbe','silbe'], explain:'hab-en, geh-en, komm-en. Locker verschmilzt sie zu einem n.' },
    { type:'gap', text:'„Haben Sie“ wird im lockeren Register zu „___“.', answer:'Hamse', alts:['Hamse','hamse','Ham Sie','hamSe'], explain:'Eine der häufigsten Zusammenziehungen überhaupt. Verstehen muss man sie, benutzen darf man sie — an der richtigen Stelle.' },
    { type:'gap', text:'Die drei Regler des Registers sind Tempo, Endungen und ___.', answer:'Pausen', alts:['Pausen','pausen'], explain:'Mehr braucht es nicht. Mit diesen drei klingt derselbe Wortlaut förmlich oder locker.' },
    { type:'gap', text:'Wer immer sehr deutlich artikuliert, wirkt im Privaten ___.', answer:'steif', alts:['steif','distanziert','förmlich'], explain:'Deutlichkeit ist ein Werkzeug für bestimmte Situationen — kein Zeichen von besserem Deutsch.' },

    { type:'fehler', satz:'Guten Tag, ham Sie meinen Antrag schon bearbeitet?', falsch:'ham Sie', richtig:'Guten Tag, haben Sie meinen Antrag schon bearbeitet?', explain:'Grammatisch ist „ham“ nichts Falsches, es ist gesprochene Umgangssprache. Beim Amt passt es nicht — dort gehört die vollständige Form hin.' },
    { type:'fehler', satz:'Hey Mama, ich würde dich bitten, mir das Brot zu reichen.', falsch:'ich würde dich bitten', richtig:'Hey Mama, gibst du mir mal das Brot?', explain:'Hier stimmt das Register in die andere Richtung nicht. Der Konjunktiv am Küchentisch klingt ironisch oder gekränkt — beides war nicht gemeint.' },
    { type:'fehler', satz:'In meinem Bewerbungsgespräch hab ich gesagt, dass ich das schon mal gemacht hab.', falsch:'hab … hab', richtig:'Im Bewerbungsgespräch habe ich gesagt, dass ich das bereits gemacht habe.', explain:'Zweimal „hab“ ohne Endung, dazu „schon mal“ — alles locker. Im Gespräch selbst kostet das Punkte, die nichts mit Sprachniveau zu tun haben.' },

    { type:'speak', word:'Haben Sie die Unterlagen bereits erhalten?', tip:'Alle Endungen vollständig, Tempo ruhig. Das ist das förmliche Register.' },
    { type:'speak', word:'Habt ihr die Sachen schon bekommen?', tip:'Derselbe Inhalt, locker. Kürzer, schneller, wärmer.' },
    { type:'speak', word:'Ich würde vorschlagen, dass wir das noch einmal prüfen.', tip:'Konjunktiv und Pause nach „vorschlagen“. Ruhig bis zum Ende.' },
    { type:'speak', word:'Lass uns das nochmal angucken.', tip:'Dasselbe Anliegen im anderen Register. Spürst du den Unterschied im Mund?' },
    { type:'speak', word:'Vielen Dank für Ihre Rückmeldung.', tip:'Förmlich und vollständig. Jede Endung hörbar.' },
    { type:'speak', word:'Danke dir fürs Zurückschreiben!', tip:'Locker, mit Verschmelzung bei „fürs“. Leichter Ton.' },
    { type:'speak', word:'Könnten Sie mir bitte sagen, an wen ich mich wenden muss?', tip:'Langer förmlicher Satz. Zwei Gruppen, Endungen nicht kürzen.' },
    { type:'speak', word:'Weißt du, wen ich da fragen muss?', tip:'Dieselbe Frage, drei Wörter kürzer. Das ist Register, nicht Nachlässigkeit.' },
    { type:'speak', word:'Ich melde mich, sobald mir die Information vorliegt.', tip:'Förmlich. „vorliegt“ ist das Signalwort — ruhig und klar ans Ende.' },
    { type:'speak', word:'Ich sag dir Bescheid, wenn ich’s weiß.', tip:'Locker, mit Verschmelzung bei „ich’s“. Schnell, aber nicht gehetzt.' },

    { type:'shadow', level:'C1', text:'Sehr geehrte Frau Weber, ich beziehe mich auf unser Telefongespräch vom vergangenen Dienstag.', tip:'Förmlich bis zum Schluss. Endungen vollständig, Tempo gleichmäßig ruhig.' },
    { type:'shadow', level:'C1', text:'Also hör zu, ich hab mit ihr telefoniert, und sie meinte, das geht klar.', tip:'Locker, mit gekürzten Endungen. Dasselbe Ereignis, anderes Register.' },

    { type:'schreiben', auftrag:'Nimm drei Anliegen aus deinem Leben — eine Bitte, eine Beschwerde, eine Absage. Schreibe jedes zweimal: einmal für ein Amt oder einen Vorgesetzten, einmal für einen Freund. Sprich dann alle sechs Fassungen laut und achte nur auf Tempo, Endungen und Pausen, nicht auf die Wörter.', tipp:'Nimm beide Fassungen eines Anliegens direkt hintereinander auf. Beim Abhören hörst du, ob dein Umschalten tatsächlich zu hören ist oder nur im Wortlaut liegt.', muster:'Könnten Sie mir bitte Bescheid geben, sobald der Termin feststeht?   /   Sagst du mir, wenn der Termin steht?' }
  ]},

  /* ---------------- C1: Distanz und Ironie ---------------- */
  { id:'ironie-c1', title:'Angeblich — Distanz und Ironie in der Stimme', level:'C1', emoji:'🙃', words:[
    { de:'die Distanzierung', info:'zeigen, dass man selbst anderer Meinung ist', emoji:'↔️' },
    { de:'die Ironie', info:'das Gegenteil sagen und es hörbar machen', emoji:'🙃' },
    { de:'zitieren', info:'wiedergeben, was jemand anderes gesagt hat', emoji:'💬' },
    { de:'angeblich', info:'so wird behauptet — aber ich glaube es nicht', emoji:'🤨' },
    { de:'der Unterton', info:'die Bedeutung, die mitklingt', emoji:'🎚️' },
    { de:'gedehnt', info:'in die Länge gezogen', emoji:'➖' }
  ], exercises:[
    { type:'karte', w:'Angeblich — Distanz und Ironie in der Stimme', info:'Deutsch kann mit der Stimme Anführungszeichen setzen. „Er ist angeblich krank“ ist nur dann wirklich distanziert, wenn „angeblich“ den Ton bekommt und etwas gedehnt wird. Ironie entsteht durch das Gegenteil von dem, was der Satz sagt: eine fallende, flache Melodie bei einer positiven Aussage — „Toll.“ Mit steigender, offener Melodie ist dasselbe Wort echte Begeisterung. Auf C1 ist das wichtig in beide Richtungen: um es zu erzeugen und um es zu erkennen, bevor man auf eine Ironie ernst antwortet. Beim Nachsprechen liest die Stimme deines Geräts vor — Ironie bringt sie nicht zustande. Hier musst du dich selbst hören.', emoji:'🙃', regel:true },

    { type:'choice', q:'„Er ist angeblich krank.“ Wie zeigst du, dass du es nicht glaubst?', options:['Den ganzen Satz schneller sprechen.','„angeblich“ betonen und leicht dehnen.','„krank“ betonen.','Leiser werden.'], answer:1, explain:'Das Wort trägt die Distanz nur, wenn es den Ton bekommt. Unbetont geht „angeblich“ im Satz unter und wirkt wie eine neutrale Angabe.' },
    { type:'choice', q:'Wie klingt ein ironisches „Toll.“?', options:['Steigend und offen.','Flach und fallend, oft etwas gedehnt.','Sehr laut.','Sehr schnell.'], answer:1, explain:'Die Melodie widerspricht dem Wort. Genau dieser Widerspruch ist die Ironie — ein Wort allein kann sie nicht tragen.' },
    { type:'choice', q:'Was bedeutet es, mit der Stimme Anführungszeichen zu setzen?', options:['Lauter sprechen.','Ein Wort betonen und so zeigen, dass es von jemand anderem kommt.','Langsamer sprechen.','Das Wort wiederholen.'], answer:1, explain:'„Das war dann wohl eine Lösung.“ Mit Ton auf „Lösung“ hörst du: Der Sprecher würde es nicht so nennen. Das Wort gehört jemand anderem.' },
    { type:'choice', q:'Welches Wort signalisiert Distanz, wenn es betont wird?', options:['vielleicht','angeblich','morgen','bitte'], answer:1, explain:'angeblich, vermeintlich, sogenannt, wohl — alle vier sind Distanzwörter. Betont zeigen sie Zweifel, unbetont sind sie fast unsichtbar.' },
    { type:'choice', q:'„Das soll er gesagt haben.“ Was drückt „soll“ hier aus?', options:['Eine Pflicht.','Eine fremde Behauptung, die der Sprecher nicht übernimmt.','Eine Bitte.','Eine Zukunft.'], answer:1, explain:'Das subjektive „sollen“ ist die Grammatik der Distanz. Mit Ton auf „soll“ wird aus der Information eine deutliche Zurückhaltung.' },
    { type:'choice', q:'Warum ist Ironie für Lernende riskant?', options:['Sie ist grammatisch schwer.','Sie wird leicht nicht erkannt — und wörtlich beantwortet.','Sie ist unhöflich.','Sie kommt selten vor.'], answer:1, explain:'Gefährlicher als Ironie nicht erzeugen zu können ist, sie nicht zu hören. Wenn die Melodie dem Wortlaut widerspricht, gilt die Melodie.' },
    { type:'choice', q:'„Na super.“ Wann ist das positiv gemeint?', options:['Immer.','Nie.','Wenn die Stimme steigt und offen bleibt.','Wenn es leise gesagt wird.'], answer:2, explain:'„Na super!“ steigend ist echte Freude. „Na super.“ flach und fallend heißt: Jetzt ist es kaputt. Derselbe Wortlaut, zwei Welten.' },
    { type:'choice', q:'Wie klingt ein sogenannter Experte, wenn man „sogenannt“ betont?', options:['Besonders angesehen.','Zweifelhaft — der Sprecher nimmt ihm den Titel.','Neutral.','Freundlich.'], answer:1, explain:'„Der sogenannte Experte“ mit Ton auf „sogenannte“ ist ein Angriff. Unbetont ist es nur ein Hinweis auf eine Bezeichnung.' },
    { type:'choice', q:'Du willst distanziert, aber nicht ironisch klingen. Was tust du?', options:['Melodie fallend und flach.','Distanzwort betonen, Melodie aber sachlich halten.','Das Wort dehnen und lachen.','Gar nichts betonen.'], answer:1, explain:'Distanz ohne Spott: „angeblich“ bekommt den Ton, der Rest bleibt neutral. Erst die flache, fallende Melodie macht daraus Spott.' },

    { type:'gap', text:'„angeblich“ zeigt nur dann Zweifel, wenn es ___ wird.', answer:'betont', alts:['betont'], explain:'Ohne Ton ist es ein unauffälliges Füllwort. Der Akzent macht die Bedeutung.' },
    { type:'gap', text:'Ironie entsteht, wenn die Melodie dem ___ widerspricht.', answer:'Wortlaut', alts:['Wortlaut','Inhalt','Wort'], explain:'„Toll“ mit fallender flacher Stimme. Das Ohr glaubt der Melodie, nicht dem Wort.' },
    { type:'gap', text:'Das subjektive „sollen“ gibt eine fremde ___ wieder.', answer:'Behauptung', alts:['Behauptung','Aussage'], explain:'„Das soll er gesagt haben“ — ich berichte, ich übernehme nicht. Grammatik und Betonung arbeiten hier zusammen.' },
    { type:'gap', text:'Wenn Melodie und Wortlaut sich widersprechen, gilt die ___.', answer:'Melodie', alts:['Melodie','melodie'], explain:'Das ist die wichtigste Hörregel dieses Themas — und sie bewahrt dich davor, auf Ironie ernst zu antworten.' },

    { type:'fehler', satz:'A: „Na super.“ (flach, fallend) — B: „Ja, ich freue mich auch!“', falsch:'Ich freue mich auch', richtig:'B: „Was ist passiert?“', explain:'A hat sich geärgert. Die flache, fallende Melodie widerspricht dem Wort „super“. Wer wörtlich antwortet, verfehlt das Gespräch.' },
    { type:'fehler', satz:'Er ist ANGEBLICH krank, aber ich glaube ihm voll und ganz.', falsch:'ich glaube ihm voll und ganz', richtig:'Er ist angeblich krank — ich glaube ihm voll und ganz.', explain:'Betontes „angeblich“ und voller Glaube passen nicht zusammen. Wenn du ihm glaubst, lass das Distanzwort unbetont oder weg.' },
    { type:'fehler', satz:'Das war dann wohl eine LÖSUNG, und alle waren damit sehr zufrieden.', falsch:'alle waren damit sehr zufrieden', richtig:'Das war dann wohl eine Lösung — immerhin waren alle zufrieden.', explain:'Der Ton auf „Lösung“ setzt Anführungszeichen und nimmt dem Wort die Geltung. Danach kann keine ungebrochene Zustimmung folgen.' },

    { type:'speak', word:'Er ist angeblich krank.', tip:'„angeblich“ betonen und leicht dehnen. Hör, ob der Zweifel ankommt.' },
    { type:'speak', word:'Toll.', tip:'Zweimal: einmal flach und fallend, einmal steigend und offen. Ein Wort, zwei Bedeutungen.' },
    { type:'speak', word:'Na super.', tip:'Erst ironisch, dann echt begeistert. Der Unterschied liegt allein in der Melodie.' },
    { type:'speak', word:'Das soll er gesagt haben.', tip:'Ton auf „soll“. Sachlich bleiben — Distanz, nicht Spott.' },
    { type:'speak', word:'Der sogenannte Experte hat sich dann doch geirrt.', tip:'„sogenannte“ betonen. Der Rest ruhig, das genügt.' },
    { type:'speak', word:'Das war dann wohl eine Lösung.', tip:'Ton auf „Lösung“, leicht gedehnt. Die Anführungszeichen sind hörbar.' },
    { type:'speak', word:'Vielen Dank auch.', tip:'Flach und fallend klingt das bitter. Steigend ist es echter Dank.' },
    { type:'speak', word:'Sie hat vermeintlich alles geprüft.', tip:'„vermeintlich“ betonen. Ein förmliches Distanzwort — kein Spott.' },
    { type:'speak', word:'Natürlich hat niemand davon gewusst.', tip:'„Natürlich“ gedehnt und fallend — dann heißt es das Gegenteil.' },
    { type:'speak', word:'Ich bin begeistert.', tip:'Zweimal: echt, mit Wärme und Steigung. Und ironisch, flach und müde.' },

    { type:'shadow', level:'C1', text:'Der Termin wurde angeblich verschoben — davon wusste natürlich wieder niemand.', tip:'Zwei Distanzwörter in einem Satz. Beide betont, Melodie fallend.' },
    { type:'shadow', level:'C1', text:'Ich habe mich sehr über die Rückmeldung gefreut, das meine ich ganz ernst.', tip:'Hier keine Ironie. Steigend und warm, sonst kippt der Satz ins Gegenteil.' },

    { type:'schreiben', auftrag:'Schreibe fünf Sätze, die zweimal gesprochen werden können: einmal ernst, einmal ironisch. Markiere hinter jeder Fassung die Melodie mit einem Pfeil und das betonte Wort in Großbuchstaben. Nimm beide Fassungen auf und lass eine andere Person raten, welche welche ist.', tipp:'Wenn die andere Person es nicht erkennt, fehlt entweder die Dehnung oder die Melodie ist noch zu ähnlich. Übertreibe beim Üben stärker als nötig.', muster:'Das hat ja prima funktioniert. ↘ flach (ironisch)   /   Das hat ja PRIMA funktioniert! ↗ (ernst)' }
  ]},

  /* ---------------- C1: Varianten ---------------- */
  { id:'varianten-c1', title:'Wien, Zürich, Hamburg — was anders klingt', level:'C1', emoji:'🗺️', words:[
    { de:'die Standardvariante', info:'das Hochdeutsch eines ganzen Landes', emoji:'🗺️' },
    { de:'der Dialekt', info:'die Sprache einer Region, oft stark abweichend', emoji:'🏘️' },
    { de:'die Färbung', info:'der regionale Klang, der mitschwingt', emoji:'🎨' },
    { de:'der Vokal', info:'a, e, i, o, u und die Umlaute', emoji:'🅰️' },
    { de:'die Endung', info:'der letzte Teil des Wortes', emoji:'🔚' },
    { de:'umschalten', info:'sich auf eine andere Sprechweise einstellen', emoji:'🔀' }
  ], exercises:[
    { type:'karte', w:'Wien, Zürich, Hamburg — was anders klingt', info:'Deutsch hat drei Standardvarianten: die deutsche, die österreichische und die schweizerische. Alle drei sind korrektes Hochdeutsch, nur klingen sie anders — und auf C1 begegnen sie dir in Nachrichten, in Vorträgen und bei Kollegen. Die wichtigsten Unterschiede sind hörbar und wenige: das ch nach a, die Endung -ig, das r, die Länge der Vokale und der Satzrhythmus. Dazu kommen Wörter, die nur in einem Land gelten. Du musst nichts davon selbst sprechen. Du solltest es nur erkennen, damit du beim Hören nicht aussteigst. Beim Nachsprechen liest die Stimme deines Geräts vor — sie spricht deutsches Standarddeutsch, mehr nicht.', emoji:'🗺️', regel:true },

    { type:'choice', q:'Wie wird die Endung -ig in Deutschland standardmäßig gesprochen?', options:['Wie -ik: König klingt wie Könik.','Wie -ich: König klingt wie Könich.','Wie -ig mit deutlichem g.','Ohne Endung.'], answer:1, explain:'Standard in Deutschland ist „Könich“, „wenich“, „fertich“. In Österreich und im Süden hört man häufiger „Könik“ — beides ist verständlich, nur die Norm unterscheidet sich.' },
    { type:'choice', q:'Was fällt am schweizerischen Hochdeutsch zuerst auf?', options:['Es wird schneller gesprochen.','Das ch ist kräftiger und die Melodie steigt am Satzende öfter.','Es hat keine Umlaute.','Die Verben stehen anders.'], answer:1, explain:'Das kräftige ch und ein eigener Satzrhythmus, der auf deutsche Ohren singender wirkt. Dazu: In der Schweiz gibt es kein ß — dort steht immer ss.' },
    { type:'choice', q:'Welches Wort gilt in Österreich statt „Tüte“?', options:['Sackerl','Beutel','Tasche','Korb'], answer:0, explain:'Sackerl, Semmel statt Brötchen, Jänner statt Januar, Erdapfel statt Kartoffel. Das sind keine Dialektwörter, sondern österreichischer Standard.' },
    { type:'choice', q:'„Jänner“ — was bedeutet das?', options:['Januar','Juni','Jahr','Januar und Februar'], answer:0, explain:'Der erste Monat, österreichischer Standard. In amtlichen Texten aus Wien steht genau dieses Wort.' },
    { type:'choice', q:'Wie klingt das r am Wortende im Norden Deutschlands?', options:['Deutlich gerollt.','Fast wie ein a: Vater klingt wie Vata.','Wie ein k.','Es fällt ganz weg.'], answer:1, explain:'Das ist Standard und kein Dialekt. Im Süden und in Österreich hört man das r häufiger deutlich — beides ist richtiges Deutsch.' },
    { type:'choice', q:'Wofür steht das schweizerische „Velo“?', options:['Auto','Fahrrad','Zug','Roller'], answer:1, explain:'Velo für Fahrrad, Billett für Fahrkarte, parkieren für parken. Schweizer Standard, kein Dialekt — in Zeitungen und Durchsagen völlig normal.' },
    { type:'choice', q:'Was solltest du auf C1 mit den Varianten können?', options:['Alle drei selbst sprechen.','Sie erkennen und verstehen, selbst aber bei einer bleiben.','Sie vermeiden.','Nur die deutsche kennen.'], answer:1, explain:'Umschalten muss niemand. Aber wer in einer Besprechung mit Wienern und Zürchern sitzt, sollte nicht an „Sackerl“ oder „Billett“ hängen bleiben.' },
    { type:'choice', q:'„Das Spital“ — wo sagt man das?', options:['Nur in Deutschland.','In Österreich und der Schweiz für Krankenhaus.','Nirgends mehr.','Nur in der Medizin.'], answer:1, explain:'Spital ist dort der normale Ausdruck. In Deutschland klingt es alt oder literarisch — dort heißt es Krankenhaus oder Klinik.' },
    { type:'choice', q:'Wie unterscheidet sich die Begrüßung regional?', options:['Gar nicht.','Grüß Gott im Süden und in Österreich, Moin im Norden, Grüezi in der Schweiz.','Überall Guten Tag.','Nur in der Schriftsprache.'], answer:1, explain:'„Guten Tag“ funktioniert überall. Aber wenn dich jemand mit „Grüezi“ oder „Moin“ begrüßt, ist eine passende Antwort ein kleines Geschenk.' },

    { type:'gap', text:'In Deutschland spricht man „König“ standardmäßig als „___“.', answer:'Könich', alts:['Könich','Koenich','könich'], explain:'Die Endung -ig klingt wie -ich. In Österreich hört man häufiger -ik — beides ist verständlich.' },
    { type:'gap', text:'In der Schweiz gibt es kein ß, dort schreibt man immer ___.', answer:'ss', alts:['ss','SS','Doppel-s'], explain:'Strasse, grüssen, heissen. Eine Rechtschreibregel, die beim Lesen sofort verrät, woher ein Text kommt.' },
    { type:'gap', text:'Österreichisch für Januar ist ___.', answer:'Jänner', alts:['Jänner','Jaenner','jänner'], explain:'Und Februar heißt dort oft Feber. Beide stehen in amtlichen Texten.' },
    { type:'gap', text:'„Velo“ ist schweizerisch für ___.', answer:'Fahrrad', alts:['Fahrrad','das Fahrrad','Rad'], explain:'Aus dem Französischen. Wie Billett, Trottoir und Coiffeur — der französische Einfluss ist dort stark.' },

    { type:'fehler', satz:'In der Schweiz sagt man Straße mit ß.', falsch:'mit ß', richtig:'In der Schweiz schreibt man Strasse mit ss.', explain:'Das ß kommt in der Schweizer Rechtschreibung nicht vor. Gesprochen klingt es gleich — geschrieben ist es ein sicheres Erkennungszeichen.' },
    { type:'fehler', satz:'„Sackerl“ ist ein österreichischer Dialekt und daher falsch.', falsch:'und daher falsch', richtig:'„Sackerl“ ist österreichischer Standard und völlig korrekt.', explain:'Standardvariante heißt: offizielles, korrektes Hochdeutsch dieses Landes. Es gibt nicht ein richtiges Deutsch und drei Abweichungen.' },
    { type:'fehler', satz:'Er geht ins Spital, also ist er in Deutschland.', falsch:'in Deutschland', richtig:'Er geht ins Spital — das sagt man in Österreich und der Schweiz.', explain:'In Deutschland wäre es das Krankenhaus. Solche Wörter sagen dir, mit welcher Variante du es zu tun hast.' },

    { type:'speak', word:'der König, wenig, fertig, richtig', tip:'Deutscher Standard: alle vier mit -ich am Ende.' },
    { type:'speak', word:'Grüß Gott — Moin — Grüezi — Guten Tag', tip:'Vier Begrüßungen, vier Regionen. Die letzte passt überall.' },
    { type:'speak', word:'Ich hätte gern ein Sackerl, bitte.', tip:'Österreichisch. Sprich es so selbstverständlich wie „Tüte“.' },
    { type:'speak', word:'Der Termin ist im Jänner, nicht im Feber.', tip:'Zwei österreichische Monatsnamen in einem Satz.' },
    { type:'speak', word:'Ich fahre mit dem Velo und brauche noch ein Billett.', tip:'Schweizer Standard. Beide Wörter aus dem Französischen, auf der letzten Silbe betont.' },
    { type:'speak', word:'Vater, Mutter, Bruder, Schwester', tip:'Das r am Ende fast wie ein a. Nördlicher Standard.' },
    { type:'speak', word:'Sie liegt im Spital, aber es geht ihr schon besser.', tip:'Spital ruhig und selbstverständlich — es ist dort das normale Wort.' },
    { type:'speak', word:'Auf der Strasse war wenig Verkehr.', tip:'Schweizer Schreibung, gleiche Aussprache wie mit ß. Das s bleibt scharf.' },
    { type:'speak', word:'Zwei Semmeln und ein Kaffee, bitte.', tip:'Semmel statt Brötchen. In Wien die normale Bestellung.' },
    { type:'speak', word:'Könnten wir das Auto hier parkieren?', tip:'Schweizerisch für parken. Ton auf -IER-, wie bei allen -ieren-Verben.' },

    { type:'shadow', level:'C1', text:'Im Jänner war in Wien wenig los, aber das Sackerl mit den Semmeln hatte ich trotzdem dabei.', tip:'Drei österreichische Wörter. Ruhig sprechen, ohne sie zu betonen — sie sind dort normal.' },
    { type:'shadow', level:'C1', text:'Ich habe das Billett gekauft und bin mit dem Velo zum Bahnhof an der Hauptstrasse gefahren.', tip:'Schweizer Variante. BillÉTT und VÉlo — beide französisch gefärbt.' },

    { type:'schreiben', auftrag:'Suche dir eine Nachrichtensendung aus Österreich und eine aus der Schweiz, höre von jeder drei Minuten und notiere fünf Dinge, die anders klingen oder andere Wörter sind. Schreibe daneben, wie es in Deutschland heißen würde. Sprich beide Fassungen laut.', tipp:'Nimm die Nachrichten, nicht Unterhaltung — dort wird die Standardvariante gesprochen, nicht Dialekt. Dialekt zu verstehen ist eine andere Aufgabe und gehört nicht auf diese Liste.', muster:'Jänner → Januar · Sackerl → Tüte · Spital → Krankenhaus · Billett → Fahrkarte · parkieren → parken' }
  ]}
  ];

  sk.themes = (sk.themes || []).concat(THEMEN);

  /* Themen nach Niveau sortieren, damit die neuen nicht hinten
     hinter C1 landen, wenn jemand A1 geoeffnet hat. */
  var RANG = { 'A1':1, 'A2':2, 'B1':3, 'B2':4, 'C1':5, 'C2':6 };
  sk.themes.sort(function (a, b) {
    return (RANG[(a && a.level) || ''] || 9) - (RANG[(b && b.level) || ''] || 9);
  });
})();
