/* Beispielantworten  -  Bereiche: gesundheit, freizeit, meinungen
   Reihenfolge und Anzahl exakt wie in freie-sprechstunde-sprechkarten.html.
   Karte[0] = Frage; je Antwort passend zu Frage + Niveau. */
window.BSP = window.BSP || {};
var BSP = window.BSP;

BSP.gesundheit = {
einfach: [
 'Ich lege mich hin und trinke einen Tee. Meistens hilft mir Schlaf am besten.',
 'Ich bewege mich zweimal pro Woche. Einmal laufe ich, einmal fahre ich Fahrrad.',
 'Ich schlafe meistens gut. Abends lese ich kurz, dann werde ich m&uuml;de und gehe ins Bett.',
 'Mir ist Bewegung wichtiger. Ich f&uuml;hle mich einfach besser, wenn ich mich jeden Tag bewege.',
 'Ich warte lieber ein paar Tage ab. Erst wenn die Schmerzen bleiben, mache ich einen Termin.',
 'Letzte Woche hatte ich Fieber. Ich bin den ganzen Tag im Bett geblieben und habe viel geschlafen.',
 'Am besten entspanne ich mich bei einem Spaziergang. Die Ruhe drau&szlig;en tut mir richtig gut.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; Bewegung dem ganzen K&ouml;rper hilft. Wer sich regelm&auml;&szlig;ig bewegt, bleibt l&auml;nger gesund.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; viele abends zu lange am Handy sind. Ich merke selbst, dass mir die Zeit zum Schlafen oft fehlt.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Was fehlt Ihnen denn? <b>B:</b> Mein Hals tut seit gestern weh und ich habe Schmerzen beim Schlucken.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Hier ist mein Rezept. Wie muss ich das einnehmen? <b>B:</b> Dreimal am Tag, am besten nach dem Essen.</span>',
 'Kopf, Hand, Fu&szlig;, Auge, Ohr. Damit kann man greifen und festhalten &mdash; gemeint ist die Hand.'
],
komplexer: [
 'Ich versuche, gut vorzusorgen, aber im Alltag scheitert es oft an der Zeit. Zum Beispiel nehme ich mir Sport vor und schiebe ihn dann doch auf, weil die Arbeit dazwischenkommt.',
 'Bewegung ist mein wichtigster Ausgleich. Nach einem langen Tag am Schreibtisch gehe ich regelm&auml;&szlig;ig laufen, weil ich danach den Kopf wieder frei habe.',
 'Ich rede inzwischen ziemlich offen dar&uuml;ber, weil ich das Tabu falsch finde. Als ich einmal eine schwere Zeit hatte, hat es mir sehr geholfen, das anzusprechen.',
 'Ich bin eher f&uuml;r Vorsorge, auch ohne Beschwerden. Ein Beispiel ist der Zahnarzt: Wenn ich regelm&auml;&szlig;ig hingehe, erspare ich mir sp&auml;ter gr&ouml;&szlig;ere Probleme.',
 'Ich w&uuml;rde ein langes ruhiges Leben w&auml;hlen, weil mir Best&auml;ndigkeit wichtig ist. Trotzdem m&ouml;chte ich die Lebenszeit nicht nur absitzen, sondern auch genie&szlig;en.',
 'Nach einer stressigen Projektphase war ich v&ouml;llig ausgelaugt. Ich musste bewusst k&uuml;rzertreten und habe gelernt, besser auf mich zu achten.',
 'Jeden Morgen zehn Minuten spazieren zu gehen, hat mir sehr gutgetan. Weil ich drangeblieben bin, sp&uuml;re ich den Unterschied inzwischen deutlich.',
 '&bdquo;Ich sehe das anders, denn &hellip;&ldquo; nicht jeder hat die gleichen Umst&auml;nde. Wer wenig Geld oder Zeit hat, kann oft gar nicht so frei entscheiden, wie es klingt.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; Ersch&ouml;pfung genauso ernst zu nehmen ist. Das Tabu sorgt nur daf&uuml;r, dass Menschen zu lange durchhalten, statt sich Hilfe zu holen.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich habe seit einer Woche Kopfschmerzen, vor allem abends. Hat das Medikament Nebenwirkungen, und wie lange soll ich es nehmen? <b>B:</b> Keine Sorge, ich erkl&auml;re Ihnen beides genau.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Komm, lass uns zusammen laufen, dann h&auml;lt keiner von uns die Ausrede durch. <b>B:</b> Na gut, aber nur, wenn wir morgens gehen.</span>',
 'M&uuml;de bin ich abends ganz normal, und nach einer Nacht Schlaf ist es wieder vorbei. Ersch&ouml;pft ist mehr: Da reicht ein Wochenende nicht, um sich zu erholen.'
],
schwierig: [
 'Grunds&auml;tzlich finde ich Eigenverantwortung richtig, doch sie hat Grenzen. Wer unter schlechten Arbeitsbedingungen oder in Armut lebt, kann nicht allein verantwortlich gemacht werden; hier ist die Solidarit&auml;t der Gesellschaft gefragt. Insgesamt braucht es beides im richtigen Verh&auml;ltnis.',
 'Einerseits k&ouml;nnen ehrliche Beitr&auml;ge auch ermutigen. Andererseits erzeugt der st&auml;ndige Vergleich mit bearbeiteten Bildern einen Druck, dem kaum jemand standh&auml;lt. F&uuml;r mich &uuml;berwiegt die Gefahr, dass das eigene K&ouml;rperbild dadurch verzerrt wird.',
 'Ich sehe Vor- und Nachteile. Verpflichtende Vorsorge k&ouml;nnte Krankheiten fr&uuml;her erkennen, zugleich empfinde ich sie als Bevormundung. Am Ende halte ich freiwillige Angebote mit guten Anreizen f&uuml;r den kl&uuml;geren Weg.',
 'Das l&auml;sst sich nicht pauschal entscheiden. Reine Lebenszeit ohne Lebensqualit&auml;t w&auml;re mir zu wenig, doch solange ich am Leben teilhaben kann, z&auml;hlt jedes Jahr. Ich w&uuml;rde die Qualit&auml;t etwas h&ouml;her gewichten, ohne die Quantit&auml;t ganz aufzugeben.',
 'Beides hat seine Berechtigung. Vorschriften sch&uuml;tzen schnell und gleichm&auml;&szlig;ig, Vertrauen in die Vernunft achtet dagegen die Freiheit. Ich tendiere zu klaren Regeln dort, wo andere mitbetroffen sind, und zu Freiheit, wo es nur mich betrifft.',
 'Bei einem Wettlauf wollte ich durchhalten, doch mein K&ouml;rper hat mir eine klare Grenze gezeigt. R&uuml;ckblickend war das kein Scheitern, sondern ein wichtiges Signal, k&uuml;rzerzutreten und besser auf mich zu h&ouml;ren.',
 'Eine &auml;ltere Nachbarin ging mit ihrer Krankheit sehr gefasst um. Ihre Haltung hat mich beeindruckt, weil sie weder verdr&auml;ngt noch verzweifelt ist, sondern das Leben weiter angenommen hat. Davon habe ich viel gelernt.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; Wissen die eine Seite ist, doch zwischen Wissen und Handeln klafft oft eine L&uuml;cke. Ich kenne das selbst: Ich wei&szlig; genau, was gut w&auml;re, und tue es trotzdem nicht immer.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; K&ouml;rper und Seele eng zusammenh&auml;ngen und seelische Belastung sich oft k&ouml;rperlich zeigt. Allerdings w&uuml;rde ich nicht jede Krankheit psychologisch deuten &mdash; manches hat schlicht k&ouml;rperliche Ursachen.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Setz dich bitte einen Moment, ich muss dir etwas Schwieriges sagen &mdash; und ich bin f&uuml;r dich da, egal was kommt. <b>B:</b> Okay &hellip; sag es mir ruhig.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich verstehe Ihre Einsch&auml;tzung, trotzdem m&ouml;chte ich zu bedenken geben, dass ich es bei mir anders erlebe. <b>B:</b> Dann schildern Sie mir das bitte genauer.</span>',
 'Resilienz zeigt sich, wenn jemand nach einem R&uuml;ckschlag nicht liegen bleibt. Ein Beispiel: Man verliert die Arbeit, h&auml;lt den Schmerz aus und richtet sich nach einer Weile wieder auf. Es geht also darum, schwere Zeiten zu &uuml;berstehen, ohne daran zu zerbrechen.'
]};

BSP.freizeit = {
einfach: [
 'Am liebsten h&ouml;re ich Musik und treffe Freunde. Meistens mache ich das am Wochenende.',
 'Wir haben uns damals in der Schule kennengelernt. Seitdem machen wir fast alles zusammen.',
 'Am Samstag schlafe ich lange, danach gehe ich einkaufen. Abends treffe ich oft Freunde.',
 'Ich lese lieber ein Buch, weil ich mir dabei alles selbst vorstellen kann. Spannende Geschichten mag ich besonders.',
 'Ich feiere lieber zu Hause, weil es dort gem&uuml;tlich ist. Auf einer gro&szlig;en Party sind mir zu viele Leute.',
 'Letztes Wochenende waren wir zusammen im Park. Wir haben viel gelacht &mdash; es war ein richtig sch&ouml;ner Tag.',
 'Fr&uuml;her habe ich Gitarre gespielt. Es hat mir Spa&szlig; gemacht, aber irgendwann habe ich aufgeh&ouml;rt.',
 '&bdquo;Ich sehe das anders, denn &hellip;&ldquo; am Abend kann man sich damit gut entspannen. Ich finde, ein bisschen Fernsehen ist keine verlorene Zeit.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; man sich auf gute Freunde verlassen kann. Geld hilft, aber in schweren Zeiten sind Freunde wichtiger.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Kommt ihr am Samstag zu mir? Es gibt Pizza und Salat. <b>B:</b> Klar, wann sollen wir da sein?</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Tut mir leid, ich kann heute doch nicht kommen. <b>B:</b> Schade, aber kein Problem &mdash; dann machen wir es ein andermal.</span>',
 'Lesen, Kochen, Fu&szlig;ball, Malen, G&auml;rtnern. Man macht es drau&szlig;en mit den H&auml;nden, meistens jede Woche &mdash; gemeint ist G&auml;rtnern.'
],
komplexer: [
 'Ich brauche mindestens einen ganzen freien Tag, um richtig abzuschalten. Ein Beispiel: Nach nur einem kurzen Abend f&uuml;hle ich mich montags noch nicht erholt.',
 'Wir bleiben vor allem &uuml;ber Videoanrufe in Kontakt. Trotz der Entfernung telefonieren wir jede Woche, und einmal im Jahr besuchen wir uns.',
 'Ein guter Freund ist f&uuml;r mich jemand, auf den ich mich verlassen kann. Er ist ehrlich und h&ouml;rt zu, auch wenn ich mal schlechte Laune habe.',
 'Ich brauche beides, aber meistens bin ich lieber aktiv. Sport ist f&uuml;r mich der beste Ausgleich zur ruhigen B&uuml;roarbeit.',
 'Mir sind wenige enge Freunde lieber, weil mir die Tiefe wichtig ist. Mit zwei, drei Menschen kann ich &uuml;ber alles reden, und das z&auml;hlt f&uuml;r mich mehr als viele Kontakte.',
 'Eine enge Freundschaft ist zerbrochen, weil wir uns mit der Zeit entfernt haben. Daraus habe ich gelernt, dass man sich auch aktiv melden muss, wenn einem jemand wichtig ist.',
 'Beim T&ouml;pfern habe ich gemerkt, wie wenig Geduld ich am Anfang hatte. Weil ich drangeblieben bin, habe ich gelernt, ruhiger zu werden.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; der st&auml;ndige Vergleich oft einsam macht. Die Kontakte bleiben oberfl&auml;chlich, und ein Like ersetzt kein echtes Gespr&auml;ch.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; man auch seine Grenzen achten muss. Die Erwartung, immer dabei zu sein, kostet sonst zu viel Kraft; manchmal ist ein Nein einfach ges&uuml;nder.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Mir ist aufgefallen, dass du dich lange nicht gemeldet hast, und das hat mich ein bisschen verletzt. <b>B:</b> Oh, das wollte ich nicht &mdash; erz&auml;hl mir, wie es dir geht.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Lasst uns kurz beide Seiten anh&ouml;ren, vielleicht finden wir einen Kompromiss. <b>B:</b> Gut, von mir aus fange ich an.</span>',
 'Einen Bekannten gr&uuml;&szlig;e ich und rede kurz, mehr nicht. Ein Freund dagegen steht mir nah, und ihm vertraue ich auch pers&ouml;nliche Dinge an.'
],
schwierig: [
 'In Teilen schon. Viele optimieren auch ihre freie Zeit und setzen sich dabei selbst unter Druck. Andererseits kann man bewusst gegensteuern; f&uuml;r mich ist echte Freizeit gerade das, was keiner Leistung dient.',
 'Vor allem die Bereitschaft, sich gemeinsam zu ver&auml;ndern. Menschen entwickeln sich, und eine Freundschaft h&auml;lt nur, wenn man das zul&auml;sst. Dazu kommt eine gewisse Treue, auch durch Phasen, in denen man sich seltener sieht.',
 'Sie wird oft stiller, aber nicht unbedingt schw&auml;cher. Wenn der eine Kinder hat und der andere viel reist, verschieben sich die Lebensphasen. Entscheidend ist, ob die Verbundenheit bleibt, auch wenn der Alltag sich trennt.',
 'Ich brauche beides und w&uuml;rde es nicht gegeneinander ausspielen. Alleinsein ist f&uuml;r mich kein Mangel, sondern Erholung, w&auml;hrend Einsamkeit etwas anderes ist. Die Balance zwischen beidem macht den Unterschied.',
 'Beides hat seinen Reiz. Ein Hobby in der Tiefe gibt mir echtes K&ouml;nnen und Zufriedenheit, viele Hobbys bringen dagegen Abwechslung. Ich neige zur Tiefe, lasse mir aber Raum, Neues auszuprobieren.',
 'Ich bewundere einen fr&uuml;heren Lehrer, der auch unter Druck aufrecht geblieben ist. Seine Haltung hat mich gepr&auml;gt, weil er fest zu seinen Werten stand, ohne andere abzuwerten.',
 'Einmal sa&szlig; ich fr&uuml;h am Morgen allein am See. F&uuml;r einen Augenblick bin ich v&ouml;llig zur Ruhe gekommen, und dieses Gef&uuml;hl von Stille ist mir bis heute geblieben.',
 '&bdquo;Ich sehe das anders, denn &hellip;&ldquo; Schweigen nicht nur Zustimmung ist, sondern auch R&uuml;cksicht oder Unsicherheit bedeuten kann. Unter Freunden finde ich es wichtiger, offen zu widersprechen, statt aus H&ouml;flichkeit zu schweigen.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; eine starke Freundschaft auch Streit aush&auml;lt, solange der Respekt bleibt. Wird jedoch eine Grund&uuml;berzeugung verletzt, kann selbst eine lange Freundschaft daran zerbrechen.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich sage dir das, weil du mir wichtig bist, auch wenn es unbequem ist: Ich glaube, du tust dir damit gerade keinen Gefallen. <b>B:</b> Danke, dass du ehrlich bist &mdash; erz&auml;hl mir mehr.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Im Namen aller m&ouml;chte ich dir danken &mdash; du bist seit Jahren ein Freund, auf den man sich verlassen kann. <b>B:</b> Das r&uuml;hrt mich wirklich.</span>',
 'Vertrauen hei&szlig;t, sich auf jemanden verlassen zu k&ouml;nnen, ohne ihn st&auml;ndig zu kontrollieren. Ein Beispiel: Ich erz&auml;hle einem Freund etwas Pers&ouml;nliches und wei&szlig;, dass es bei ihm bleibt. Es beruht also auf Verl&auml;sslichkeit &uuml;ber die Zeit.'
]};

BSP.meinungen = {
einfach: [
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; das Handy beim Essen nur st&ouml;rt. Wir reden viel mehr miteinander, wenn es in der Tasche bleibt.',
 '&bdquo;Ich sehe das anders, denn &hellip;&ldquo; Trinkgeld freiwillig bleiben sollte. Bei gutem Service gebe ich gern etwas, aber ein Zwang w&auml;re falsch.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; es in der Stadt gute Busse und Bahnen gibt. Ein eigenes Auto kostet viel, und einen Parkplatz findet man kaum.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; ich oft viel zu lange am Handy scrolle. Am Ende ist viel Zeit weg, und ich habe nichts davon.',
 'Ich finde, man sollte sonntags nicht arbeiten m&uuml;ssen. Der Sonntag sollte ein freier Tag f&uuml;r Ruhe und Familie bleiben.',
 '&bdquo;Da stimme ich eher zu, weil &hellip;&ldquo; ich zu Hause ruhiger arbeiten kann. Im B&uuml;ro st&ouml;rt mich oft der L&auml;rm, und zu Hause spare ich den Weg.',
 'Ich finde Sushi &uuml;berbewertet. Es sieht sch&ouml;n aus und ist teuer, aber mir schmeckt es ehrlich gesagt nicht besonders.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; eine Fremdsprache im Beruf und auf Reisen sehr wichtig ist. Man lernt dabei auch andere Kulturen besser kennen.',
 'Mich nervt es am meisten, wenn Leute zu sp&auml;t kommen. Das st&ouml;rt jeden Tag und zeigt wenig Respekt vor meiner Zeit.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich verstehe deinen Punkt, aber ich sehe das anders. <b>B:</b> Wieso denn? <b>A:</b> Trotzdem glaube ich, dass es auch anders geht.</span>',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; ich mich am Abend damit gut entspanne. Nach einem langen Tag will ich einfach nur abschalten.',
 'Jeder sollte h&ouml;flich sein, M&uuml;ll richtig trennen und ab und zu anderen helfen. Ich finde, diese drei Dinge machen das Zusammenleben leichter.'
],
komplexer: [
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; das Handy die Aufmerksamkeit komplett zieht. Wenn beim Essen st&auml;ndig jemand auf den Bildschirm schaut, kommt kein richtiges Gespr&auml;ch zustande; das merke ich bei uns zu Hause deutlich.',
 'Ich halte ein Verbot grunds&auml;tzlich f&uuml;r sinnvoll, weil die Luft in den St&auml;dten besser werden muss. Allerdings m&uuml;ssen Handwerker und Lieferdienste Ausnahmen bekommen, sonst ist es &uuml;bertrieben.',
 'Ich sehe Trinkgeld eher kritisch, weil es die Verantwortung auf die G&auml;ste abschiebt. Ein fairer Lohn sollte vom Arbeitgeber kommen; Trinkgeld darf nur ein nettes Extra sein.',
 'Fr&uuml;her dachte ich, dass nur viel Arbeit z&auml;hlt. Inzwischen habe ich umgedacht, weil ich gemerkt habe, dass Pausen genauso wichtig sind.',
 'Ich mag lange Zugfahrten, obwohl die meisten sie anstrengend finden. Der Grund ist, dass ich die Zeit zum Lesen und Nachdenken genie&szlig;e, w&auml;hrend andere nur das Ziel sehen.',
 '&bdquo;Da stimme ich eher zu, weil &hellip;&ldquo; ich abw&auml;gen muss: Es n&uuml;tzt, weil man in Kontakt bleibt und sich informiert; es schadet jedoch durch den st&auml;ndigen Vergleich. Unterm Strich &uuml;berwiegt f&uuml;r mich der Schaden.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich verstehe, warum du das so siehst, dennoch bin ich anderer Meinung. <b>B:</b> Und warum? <b>A:</b> Weil ich dabei einen wichtigen Punkt vermisse.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> &Uuml;berleg mal: Wenn wir es so machen, haben wir beide einen Vorteil. Was h&auml;ltst du davon? <b>B:</b> Klingt interessant, erkl&auml;r mir das genauer.</span>',
 'Einmal habe ich mit einem Kollegen &uuml;ber Homeoffice gestritten. Erst war ich dagegen, doch durch seine Argumente habe ich eingesehen, dass es auch Vorteile hat.',
 '&bdquo;Ich sehe das anders, denn &hellip;&ldquo; niemand kann sich &uuml;berall auskennen. Bei vielen Themen finde ich es ehrlicher zu sagen, dass ich mich noch nicht festgelegt habe, statt eine Meinung zu erfinden.',
 'Streit lohnt sich f&uuml;r mich, wenn es um eine echte &Uuml;berzeugung geht. Bei Kleinigkeiten gebe ich schnell nach, aber wenn jemand unfair wird, nehme ich den Streit bewusst in Kauf.',
 'Eine Tatsache l&auml;sst sich belegen, zum Beispiel, dass Wasser bei hundert Grad kocht. Eine Meinung ist dagegen meine pers&ouml;nliche Bewertung, die andere auch anders sehen d&uuml;rfen.'
],
schwierig: [
 'Eine Gesellschaft lebt geradezu vom Widerspruch, solange ein gemeinsamer Rahmen bleibt. Gef&auml;hrlich wird es erst, wenn man die andere Seite nicht mehr als legitim ansieht. Ausgehalten werden muss viel, aber der Respekt vor dem Gegen&uuml;ber ist die Grenze.',
 'Grunds&auml;tzlich bin ich f&uuml;r gr&ouml;&szlig;tm&ouml;gliche Meinungsfreiheit. Ihre Grenze sehe ich aber dort, wo eine Meinung anderen die W&uuml;rde oder die Freiheit abspricht. Solche Positionen muss eine offene Gesellschaft gerade nicht tolerieren.',
 'Das kommt auf den Umgang damit an. Eine starke Meinung zeigt Klarheit, solange man f&uuml;r Argumente offen bleibt. Wer dagegen nichts mehr gelten l&auml;sst, rutscht in Sturheit ab; der Unterschied liegt in der Bereitschaft, dazuzulernen.',
 'Teilweise schon, vor allem durch die eigene Blase in den Medien. Wir h&ouml;ren immer seltener echte Gegenargumente und reden mehr &uuml;bereinander als miteinander. Verloren ist die F&auml;higkeit aber nicht, wenn wir uns bewusst darum bem&uuml;hen.',
 'Unbedingt. Seine Meinung aufgrund neuer Argumente zu &auml;ndern, ist kein Zeichen von Schw&auml;che, sondern von Einsicht und Mut. Unglaubw&uuml;rdig wird man eher, wenn man gegen bessere Argumente stur an einer Position festh&auml;lt.',
 'Ich spreche offen an, wenn in einer Gruppe jemand ausgeschlossen wird, auch wenn das unbequem ist. Den Preis daf&uuml;r, manchmal anzuecken, nehme ich in Kauf, weil ich sonst zu meinen Werten nicht mehr stehen k&ouml;nnte.',
 'In einer hitzigen Diskussion wollte ich schon kontern, habe mich aber zur&uuml;ckgehalten. R&uuml;ckblickend war das Schweigen kl&uuml;ger, weil meine Worte die Lage nur versch&auml;rft h&auml;tten.',
 '&bdquo;Da stimme ich zu, weil &hellip;&ldquo; Verst&auml;ndnis f&uuml;r viele Seiten eine St&auml;rke ist; problematisch wird es nur, wenn man dar&uuml;ber jede eigene Haltung verliert. Verstehen und trotzdem Position beziehen &mdash; das halte ich f&uuml;r das Ziel.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich wei&szlig;, das klingt erst mal unpopul&auml;r, aber h&ouml;rt mir kurz zu: Vielleicht liegt der Vorteil genau da, wo wir ihn nicht vermuten. <b>B:</b> Gut, erkl&auml;r das mal.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich sehe, dass die meisten hier anders denken, und respektiere das. Trotzdem m&ouml;chte ich einen anderen Blickwinkel anbieten. <b>B:</b> Nur zu, wir h&ouml;ren dir zu.</span>',
 'Das Recht, anderer Meinung zu sein, ist das Herz einer freien Gesellschaft. Nur wenn Widerspruch erlaubt ist, k&ouml;nnen wir Fehler erkennen und besser werden. Deshalb pl&auml;diere ich daf&uuml;r, abweichende Stimmen nicht zu verdr&auml;ngen, sondern sie mit Respekt auszuhalten.',
 'Ein Kompromiss entsteht, wenn beide Seiten etwas nachgeben, um eine gemeinsame L&ouml;sung zu finden. Jeder macht ein Zugest&auml;ndnis, sodass am Ende niemand alles bekommt, aber auch niemand leer ausgeht.'
]};
