/* Beispielantworten zu den Sprechkarten &mdash; Bereiche: wohnen, essen, unterwegs.
   Reihenfolge = Kartenreihenfolge (Index 0..11) aus KARTEN in freie-sprechstunde-sprechkarten.html. */
window.BSP = window.BSP || {};
var BSP = window.BSP;

BSP.wohnen = {
einfach: [
 'Ich wohne in einer kleinen Zweizimmerwohnung. Mein Lieblingsplatz ist das Sofa am Fenster, weil dort morgens die Sonne scheint.',
 'Meine Nachbarn sind sehr nett. Frau M&uuml;ller von nebenan gie&szlig;t meine Blumen, wenn ich im Urlaub bin.',
 'Am liebsten r&auml;ume ich auf, aber Fenster putzen mag ich gar nicht. Das dauert mir einfach zu lange.',
 'Ich m&ouml;chte lieber in der Stadt wohnen. Dort ist mehr los, und ich kann vieles zu Fu&szlig; erreichen.',
 'Ich wohne lieber in einer Wohnung. Ein Haus mit Garten macht viel Arbeit, und das ist mir zu viel.',
 'Mein letzter Umzug war sehr anstrengend. Wir haben den ganzen Tag Kisten getragen, aber am Abend waren alle M&ouml;bel drin.',
 'Als Kind habe ich in einem kleinen Dorf gewohnt. Dort war es ruhig, und die frische Luft vermisse ich manchmal.',
 'Da stimme ich nicht ganz zu. Man muss die Nachbarn nicht gut kennen, aber ein freundliches &bdquo;Hallo&ldquo; im Treppenhaus ist sch&ouml;n.',
 'Das sehe ich anders. Bei mir darf es ruhig ein bisschen Chaos geben &mdash; Hauptsache, ich f&uuml;hle mich wohl.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Hallo, ich bin Lena, ich wohne jetzt nebenan in Nummer&nbsp;5. <b>B:</b> Herzlich willkommen! Sch&ouml;n, dass Sie da sind.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Guten Tag, Herr Weber, meine Heizung ist seit gestern kaputt. K&ouml;nnten Sie bitte jemanden schicken? <b>B:</b> Nat&uuml;rlich, ich k&uuml;mmere mich gleich morgen darum.</span>',
 'M&ouml;bel: der Schrank, das Regal, der Sessel, der Tisch, das Bett. Ich beschreibe eines: Man sitzt darauf, es ist weich und steht meistens im Wohnzimmer &mdash; es ist der Sessel.'
],
komplexer: [
 'Ein Zuhause ist f&uuml;r mich mehr als vier W&auml;nde &mdash; es ist der Ort, an dem ich mich fallen lassen kann. Entscheidend sind die Menschen und kleine Dinge, zum Beispiel die Fotos an der Wand. So f&uuml;hle ich mich &uuml;berall heimisch, wo diese Sachen sind.',
 'Eine gute Nachbarschaft ist mir sehr wichtig, weil man im Alltag oft aufeinander angewiesen ist. Als ich einmal meinen Schl&uuml;ssel vergessen hatte, konnte ich bei den Nachbarn warten. Dieser Zusammenhalt gibt mir ein sicheres Gef&uuml;hl.',
 'Ich w&uuml;rde raten, die Wohnung immer erst zu besichtigen und auf die Nebenkosten zu achten. In Deutschland braucht man au&szlig;erdem meist eine Kaution von drei Monatsmieten. Wer das vorher wei&szlig;, erlebt keine b&ouml;se &Uuml;berraschung.',
 'Ich w&uuml;rde lieber allein wohnen, weil ich dann auf niemanden R&uuml;cksicht nehmen muss. In einer WG spart man zwar Geld, aber mein R&uuml;ckzugsort ist mir wichtiger. Ruhe nach der Arbeit brauche ich einfach.',
 'Ich nehme lieber die kleine Wohnung im Zentrum. Dort bin ich schnell &uuml;berall und muss nicht lange pendeln. Die h&ouml;here Miete nehme ich daf&uuml;r in Kauf.',
 'Einmal habe ich in einer dunklen Erdgeschosswohnung gewohnt und mich dort nie wohlgef&uuml;hlt. Es kam kaum Licht herein, und das war wohl der Grund. Nach einem Jahr bin ich wieder ausgezogen.',
 'Mein alter Nachbar hat mir einmal sehr geholfen, als mein Keller unter Wasser stand. Er kam sofort mit einer Pumpe und hat sich die halbe Nacht gek&uuml;mmert. Daf&uuml;r bin ich ihm bis heute dankbar.',
 'Dem stimme ich nicht zu. Miete ist kein rausgeworfenes Geld, denn man bezahlt daf&uuml;r ein Dach &uuml;ber dem Kopf und bleibt flexibel. Nicht jeder will sich mit Eigentum ein Leben lang binden.',
 'Da stimme ich zu. Wer sp&auml;t noch laut feiert, sollte die Ruhezeiten einhalten und R&uuml;cksicht nehmen. Ein kurzer Hinweis vorher beim Nachbarn wirkt oft Wunder.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Hallo, es tut mir leid, aber die Musik war gestern bis zwei Uhr sehr laut. K&ouml;nnten wir ab zehn etwas leiser sein? <b>B:</b> Oh, das wusste ich gar nicht &mdash; nat&uuml;rlich, ich achte darauf.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Guten Tag, Sie haben die Miete erh&ouml;ht, aber ich bin damit nicht einverstanden. K&ouml;nnten Sie mir das bitte begr&uuml;nden? <b>B:</b> Die Erh&ouml;hung liegt an den gestiegenen Kosten, aber wir k&ouml;nnen gern dar&uuml;ber reden.</span>',
 'Die Miete ist der feste Betrag f&uuml;r die Wohnung selbst, also die sogenannte Kaltmiete. Die Nebenkosten kommen zus&auml;tzlich dazu, zum Beispiel f&uuml;r Wasser, M&uuml;ll und Heizung. Am Jahresende bekommt man dar&uuml;ber eine Abrechnung.'
],
schwierig: [
 'Diese Frage l&auml;sst sich nicht einseitig beantworten. Einerseits beleben Investitionen ein Viertel, andererseits verdr&auml;ngt Spekulation oft genau die Menschen, die es gepr&auml;gt haben. Meiner Ansicht nach sollte die Stadt vor allem denen geh&ouml;ren, die in ihr leben und arbeiten.',
 'Ein gewisses Ma&szlig; an Anonymit&auml;t halte ich f&uuml;r unverzichtbar, denn niemand m&ouml;chte st&auml;ndig beobachtet werden. Zugleich braucht es genug N&auml;he, damit im Notfall jemand da ist. Die Kunst liegt darin, eine Grenze zu finden, die beide Seiten respektiert.',
 'Grunds&auml;tzlich bin ich f&uuml;r eine st&auml;rkere Regulierung des Wohnraums, etwa durch die Mietpreisbremse. Allerdings darf man den Markt nicht so stark einengen, dass niemand mehr baut. Es kommt also auf ein kluges Gleichgewicht an.',
 'Hier muss man sorgf&auml;ltig abw&auml;gen. Ein gewachsenes Viertel tr&auml;gt Geschichte und Identit&auml;t, die man nicht leichtfertig aufgeben sollte. Zugleich brauchen wir Wohnraum, deshalb pl&auml;diere ich f&uuml;r behutsames Verdichten statt Abriss.',
 'F&uuml;r mich wiegt die gewonnene Lebenszeit schwerer als die h&ouml;here Miete. Langes Pendeln kostet jeden Tag Stunden, die mir am Ende fehlen. Deshalb w&uuml;rde ich die kurze Strecke w&auml;hlen, auch wenn sie teurer ist.',
 'Das Viertel meiner Kindheit ist heute kaum wiederzuerkennen. Wo fr&uuml;her kleine L&auml;den waren, stehen jetzt Caf&eacute;s und Neubauten. Einerseits wirkt es lebendiger, andererseits trauere ich dem alten Charakter nach.',
 'Mein Umzug nach dem Studium war weit mehr als ein Wohnungswechsel. Ich habe eine ganze Lebensphase zur&uuml;ckgelassen und musste mich v&ouml;llig neu orientieren. Im Nachhinein war es der Wendepunkt, der mich selbstst&auml;ndig gemacht hat.',
 'Der Satz &bdquo;Eigentum verpflichtet&ldquo; bedeutet f&uuml;r mich, dass Besitz nicht nur Rechte, sondern auch Verantwortung mit sich bringt. Wer etwa H&auml;user besitzt, tr&auml;gt Verantwortung gegen&uuml;ber der Allgemeinheit. Besitz allein um des Gewinns willen halte ich f&uuml;r zu kurz gedacht.',
 'Dem stimme ich weitgehend zu. Echte Nachbarschaft entsteht meist von selbst, aus zuf&auml;lligen Begegnungen und gemeinsamen Anl&auml;ssen. Man kann g&uuml;nstige Bedingungen schaffen, erzwingen l&auml;sst sie sich jedoch nicht.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich wei&szlig;, dass mein Vorschlag unpopul&auml;r ist, aber ich bitte Sie, die langfristigen Vorteile zu bedenken. <b>B:</b> Das klingt nachvollziehbar &mdash; erkl&auml;ren Sie uns bitte, wie Sie sich das genau vorstellen.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich w&uuml;rde den Vertrag gern unterschreiben, aber nur, wenn wir uns bei der Kaution entgegenkommen. <b>B:</b> Gut, machen wir ein Zugest&auml;ndnis: zwei Monatsmieten statt drei.</span>',
 'Gentrifizierung beschreibt den Wandel eines Viertels, wenn wohlhabendere Menschen zuziehen und sich die Umgebung dadurch ver&auml;ndert. Alteingesessene werden nach und nach verdr&auml;ngt, w&auml;hrend schicke L&auml;den und Caf&eacute;s entstehen. So wandelt sich der Charakter eines ganzen Stadtteils.'
]
};

BSP.essen = {
einfach: [
 'Am liebsten esse ich Lasagne. Meistens kocht meine Mutter sie, und bei ihr schmeckt sie einfach am besten.',
 'Ich kaufe meistens im Supermarkt um die Ecke ein. Oft nehme ich Brot, Milch und frisches Obst mit.',
 'Zum Fr&uuml;hst&uuml;ck esse ich meistens ein Br&ouml;tchen mit K&auml;se. Dazu trinke ich einen gro&szlig;en Kaffee.',
 'Ich koche lieber selbst, weil es g&uuml;nstiger ist. Au&szlig;erdem wei&szlig; ich dann genau, was drin ist.',
 'Ich trinke lieber Kaffee, weil er mich am Morgen wach macht. Tee trinke ich eigentlich nur, wenn ich krank bin.',
 'In Italien habe ich zum ersten Mal echte Pizza probiert. Sie hat so gut geschmeckt, dass ich sie nie vergesse.',
 'Beim ersten Mal war alles fremd f&uuml;r mich. Ich habe lange die Kasse gesucht und musste meine Sachen selbst einpacken.',
 'Ja, das finde ich auch. Wer selbst kocht, isst meist ges&uuml;nder und spart dazu noch Geld.',
 'Ja, das sehe ich genauso. Mit frischen, g&uuml;nstigen Zutaten kann man ein tolles Essen kochen.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Guten Morgen, ich h&auml;tte gern zwei Br&ouml;tchen, ein Roggenbrot und ein St&uuml;ck Apfelkuchen, bitte. <b>B:</b> Gern, kommt sofort &mdash; sonst noch etwas?</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Entschuldigung, mein Essen ist leider kalt. K&ouml;nnten Sie es bitte noch einmal w&auml;rmen? <b>B:</b> Oh, das tut mir leid, ich bringe Ihnen sofort einen warmen Teller.</span>',
 'Lebensmittel: der Apfel, das Brot, der K&auml;se, die Milch, die Tomate. Ich beschreibe eines: Es ist rund, meistens rot und s&uuml;&szlig;, und es w&auml;chst am Baum &mdash; es ist der Apfel.'
],
komplexer: [
 'Seit ich in Deutschland lebe, esse ich mehr Brot und weniger Reis. Manche Zutaten aus meiner Heimat vermisse ich und finde sie hier nur schwer. Daf&uuml;r habe ich viele neue Gerichte kennengelernt.',
 'Gemeinsames Essen ist mir sehr wichtig, weil man am Tisch zusammenkommt und redet. Bei uns ist das Abendessen die Zeit, in der die ganze Familie zusammensitzt. Ohne dieses Ritual w&uuml;rde mir etwas fehlen.',
 'Ich achte schon auf die Herkunft und kaufe gern regional. Allerdings schaue ich auch auf den Preis, denn mein Budget ist begrenzt. Oft ist es ein Kompromiss zwischen beidem.',
 'Ich kaufe lieber im kleinen Laden, weil die Beratung dort pers&ouml;nlicher ist. Im gro&szlig;en Supermarkt ist zwar die Auswahl gr&ouml;&szlig;er, aber ich f&uuml;hle mich oft verloren. Qualit&auml;t ist mir wichtiger als eine riesige Auswahl.',
 'Unter der Woche koche ich meistens einmal vor, weil mir abends die Zeit fehlt. Am Wochenende dagegen koche ich gern frisch und in Ruhe. So verbinde ich beides.',
 'Ein typisches Gericht bei uns ist eine Gem&uuml;sesuppe. Zuerst br&auml;t man Zwiebeln an, danach gibt man Gem&uuml;se und Wasser dazu. Zum Schluss w&uuml;rzt man sie kr&auml;ftig &mdash; fertig.',
 'Einmal habe ich eine Suppe mit Obst gegessen, was mich sehr &uuml;berrascht hat. Der Geschmack war ungew&ouml;hnlich, aber am Ende richtig lecker. Seitdem bin ich offener f&uuml;r neue Gerichte.',
 'Im Grunde ja, denn jeder darf selbst entscheiden, was er isst. Trotzdem hat unser Konsum Folgen f&uuml;r die Umwelt. Deshalb ist es nicht nur reine Privatsache.',
 'Da ist etwas dran, denn die Preise in Restaurants sind stark gestiegen. F&uuml;r viele Familien ist Essen gehen heute kaum noch zu bezahlen. Es ist dadurch wirklich mehr zum Luxus geworden.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Entschuldigung, dieser Joghurt ist schon abgelaufen und riecht schlecht. K&ouml;nnte ich ihn bitte umtauschen? <b>B:</b> Nat&uuml;rlich, das tut mir leid &mdash; holen Sie sich gern einen neuen.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Ich lade dich am Samstag zum Essen ein. Es gibt selbst gemachte Lasagne &mdash; magst du die? <b>B:</b> Sehr gern, Lasagne liebe ich!</span>',
 '&bdquo;Satt&ldquo; bedeutet, dass man genug gegessen hat und kein Hunger mehr da ist. &bdquo;Voll&ldquo; sagt man, wenn der Magen fast &uuml;berf&uuml;llt ist und man zu viel gegessen hat. Satt ist also ein angenehmes, voll eher ein unangenehmes Gef&uuml;hl.'
],
schwierig: [
 'Der Einzelne tr&auml;gt durchaus Verantwortung, denn jede Kaufentscheidung hat Folgen. Allerdings darf man die Last nicht allein auf den Verbraucher abw&auml;lzen, solange die Politik keine klaren Rahmen setzt. Verantwortung ist hier eine geteilte Aufgabe.',
 'F&uuml;r viele Menschen ist Essen tats&auml;chlich zum Teil ihrer Identit&auml;t geworden. Man definiert sich &uuml;ber vegan, bio oder regional und zeigt damit eine Haltung. Die urspr&uuml;ngliche Funktion, satt zu werden, tritt dabei fast in den Hintergrund.',
 'Eine h&ouml;here Steuer k&ouml;nnte den Konsum tats&auml;chlich lenken, wie das Beispiel der Zuckersteuer zeigt. Andererseits empfinden viele das als Bevormundung des m&uuml;ndigen B&uuml;rgers. Ich w&auml;re f&uuml;r eine ma&szlig;volle Steuer, kombiniert mit besserer Aufkl&auml;rung.',
 'Grunds&auml;tzlich bevorzuge ich regionale Produkte, weil sie kurze Wege und Qualit&auml;t bedeuten. Zugleich muss ich ehrlich abw&auml;gen, denn nicht jeder kann sich das leisten. F&uuml;r mich wiegt die Region schwerer, solange mein Budget es zul&auml;sst.',
 'Ich halte beides f&uuml;r n&ouml;tig, denke aber, dass klare Vorschriften mehr bewirken. Ein m&uuml;ndiger Verbraucher kann nur entscheiden, wenn er ehrliche Informationen bekommt. Deshalb sollte der Staat zumindest Transparenz vorschreiben.',
 'Der Geruch von frischem Zimtgeb&auml;ck ist f&uuml;r mich eng mit Weihnachten verbunden. Meine Gro&szlig;mutter hat es jedes Jahr gebacken, und der Duft erf&uuml;llte das ganze Haus. Noch heute kehrt mit diesem Geschmack ihre ganze K&uuml;che zur&uuml;ck.',
 'Fr&uuml;her hat man bei uns fast immer zu Hause und gemeinsam gegessen. Heute greifen viele zu Fertigprodukten oder essen schnell unterwegs. Die Esskultur hat sich dadurch stark gewandelt, nicht nur zum Guten.',
 'Im Kern stimme ich zu, denn Verschwendung ist angesichts des Hungers in der Welt schwer zu rechtfertigen. Allerdings liegt nicht alle Verantwortung beim Einzelnen, auch Handel und Industrie werfen gewaltige Mengen weg. Unmoralisch wird es vor allem dort, wo Wegwerfen System hat.',
 'Der Satz hat einen wahren Kern, ist aber zu einfach. Ern&auml;hrung beeinflusst die Gesundheit, doch auch Gene, Bewegung und Lebensumst&auml;nde spielen eine Rolle. Ein einzelner Zusammenhang l&auml;sst sich daraus nicht zuverl&auml;ssig ableiten.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Wir essen heute kein Fleisch &mdash; das ist einfach unsere Entscheidung, aber greif gern bei allem anderen zu. <b>B:</b> Kein Problem, das sieht sowieso alles k&ouml;stlich aus.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Bei diesen Mengen w&uuml;rde ich gern &uuml;ber den Preis sprechen &mdash; k&ouml;nnen Sie mir entgegenkommen? <b>B:</b> Wenn Sie fest abnehmen, mache ich Ihnen ein Zugest&auml;ndnis beim Preis.</span>',
 'Nachhaltig kaufe ich ein, wenn ich Ressourcen schone und nur so viel nehme, wie ich wirklich brauche. Statt Reste wegzuwerfen, denke ich in einem Kreislauf und verwende sie weiter. So schone ich das, was uns allen zur Verf&uuml;gung steht.'
]
};

BSP.unterwegs = {
einfach: [
 'Jeden Morgen fahre ich mit dem Bus zur Arbeit. Die Fahrt dauert etwa zwanzig Minuten.',
 'Ich m&ouml;chte einmal nach Japan reisen. Das Land und das Essen interessieren mich schon lange.',
 'In den Urlaub nehme ich immer meine Kamera mit. Sie ist f&uuml;r mich das Wichtigste im Koffer.',
 'Ich fahre lieber ans Meer, weil ich gern schwimme. In den Bergen ist mir das Wandern oft zu anstrengend.',
 'Ich reise lieber mit dem Zug. Dort kann ich aus dem Fenster schauen und muss nicht so fr&uuml;h am Flughafen sein.',
 'Letzten Sommer bin ich ans Meer gefahren. Ich habe viel gebadet und in der Sonne gelegen &mdash; es war wunderbar.',
 'Meine erste Reise ganz allein ging in eine gro&szlig;e Stadt. Ich war sehr aufgeregt, aber am Ende richtig stolz auf mich.',
 'Nicht ganz. Ein bisschen Planung finde ich gut, aber ich lasse auch gern Platz f&uuml;r spontane Ideen.',
 'Ja, das sehe ich auch so. In der Stadt fahre ich mit Bus und Bahn, und einen Parkplatz muss ich auch nicht suchen.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Entschuldigung, wie komme ich zum Bahnhof? <b>B:</b> Gehen Sie hier geradeaus und dann die zweite Stra&szlig;e links, es sind nur f&uuml;nf Minuten.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Guten Tag, ich h&auml;tte gern eine Fahrkarte nach K&ouml;ln. Muss ich umsteigen? <b>B:</b> Ja, einmal in Frankfurt &mdash; die Verbindung dauert etwa drei Stunden.</span>',
 'Koffer: die Zahnb&uuml;rste, die Jacke, der Pass, die Socken, das Ladeger&auml;t. Ich beschreibe eines: Man braucht es, um ins Ausland zu reisen, und zeigt es an der Grenze &mdash; es ist der Pass.'
],
komplexer: [
 'F&uuml;r mich bedeutet Urlaub vor allem Erholung, zum Beispiel am Strand liegen. Reisen hei&szlig;t dagegen, etwas Neues zu entdecken und fremde Kulturen kennenzulernen. Beim Reisen komme ich ver&auml;ndert zur&uuml;ck, aus dem Urlaub nur ausgeruht.',
 'Ich plane meistens nur grob und lege die wichtigsten Punkte fest. Den Rest &uuml;berlasse ich gern dem Zufall, denn so erlebe ich oft die sch&ouml;nsten Momente. Zu viel Planung nimmt mir die Spontaneit&auml;t.',
 'Ich w&uuml;rde zuerst die Altstadt zeigen, weil sie sehr typisch ist. Danach w&uuml;rde ich in ein kleines Lokal gehen, denn dort lernt man das echte Leben kennen. Solche Orte lohnen sich mehr als jede Sehensw&uuml;rdigkeit.',
 'Ich fahre lieber jedes Mal woandershin, weil ich gern Neues entdecke. Ein vertrauter Ort hat zwar seinen Reiz, aber die Abwechslung ist mir wichtiger. So wird mir das Reisen nie langweilig.',
 'Ich reise meistens lieber allein, weil ich dann frei entscheiden kann. In einer Gruppe muss man st&auml;ndig R&uuml;cksicht nehmen, daf&uuml;r ist man nie einsam. F&uuml;r l&auml;ngere Reisen bevorzuge ich die Freiheit.',
 'Einmal ist unser Flug ausgefallen, und wir mussten alles umplanen. Zuerst war ich entt&auml;uscht, aber dann haben wir eine sch&ouml;ne Stadt entdeckt. Zum Gl&uuml;ck ist am Ende alles gut gegangen.',
 'Im Zug habe ich einmal eine &auml;ltere Frau getroffen, mit der ich mich stundenlang unterhalten habe. Ausgerechnet eine Fremde hat mir einen wichtigen Rat gegeben. An diese Begegnung denke ich bis heute.',
 'Da ist viel Wahres dran, denn eigene Erfahrungen pr&auml;gen oft st&auml;rker als B&uuml;cher. Beim Reisen erweitert man wirklich seinen Horizont. Trotzdem w&uuml;rde ich B&uuml;cher nicht gering sch&auml;tzen, denn beides erg&auml;nzt sich.',
 'Aus Sicht der Umwelt spricht einiges daf&uuml;r, das Fliegen teurer zu machen. Allerdings w&uuml;rde das vor allem &auml;rmere Menschen treffen, w&auml;hrend Reiche es sich weiter leisten k&ouml;nnten. Deshalb w&auml;re ich f&uuml;r eine sozial gerechte L&ouml;sung.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Mein Zug ist gerade ausgefallen. Gibt es eine Alternative, oder k&ouml;nnen Sie mir das Ticket erstatten? <b>B:</b> Sie k&ouml;nnen den n&auml;chsten Zug um 14 Uhr nehmen, der Platz ist inklusive.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Entschuldigung, das Zimmer entspricht nicht dem, was ich gebucht habe &mdash; ich wollte Meerblick. K&ouml;nnten Sie eine L&ouml;sung finden? <b>B:</b> Das tut mir leid, ich schaue sofort, ob noch ein anderes Zimmer frei ist.</span>',
 '&bdquo;Schwarzfahren&ldquo; bedeutet, ohne g&uuml;ltigen Fahrschein Bus oder Bahn zu benutzen. Wird man bei einer Kontrolle erwischt, muss man eine Strafe zahlen. Das Wort kommt wohl daher, dass man heimlich, also gewisserma&szlig;en &bdquo;im Dunkeln&ldquo; f&auml;hrt.'
],
schwierig: [
 'F&uuml;r viele in den wohlhabenden L&auml;ndern ist Reisen zur Selbstverst&auml;ndlichkeit geworden. Blickt man jedoch weltweit, bleibt es ein gro&szlig;es Privileg, das sich l&auml;ngst nicht alle leisten k&ouml;nnen. Ich finde, man sollte sich diesen Luxus bewusster machen.',
 'Tourismus bringt den Orten Einnahmen, hat aber auch eine deutliche Kehrseite. Beliebte St&auml;dte leiden unter der Belastung, und Einheimische werden teils verdr&auml;ngt. Entscheidend ist, wie behutsam der Tourismus gesteuert wird.',
 'In zwei Wochen gewinnt man h&ouml;chstens einen ersten Eindruck. Um wirklich einzutauchen, braucht man Zeit, Sprache und Kontakt zu den Menschen. Vieles bleibt deshalb notgedrungen oberfl&auml;chlich.',
 'Hier muss ich ehrlich abw&auml;gen. Oft spart das Flugzeug viel Zeit, doch die Umweltbilanz der Bahn ist deutlich besser. Bei k&uuml;rzeren Strecken entscheide ich mich bewusst f&uuml;r die Bahn, auch wenn es l&auml;nger dauert.',
 'Ich sch&auml;tze die Freiz&uuml;gigkeit offener Grenzen sehr, denn sie verbindet Menschen und M&auml;rkte. Zugleich verstehe ich das Bed&uuml;rfnis nach Sicherheit und Kontrolle. Ein kluger Mittelweg scheint mir am sinnvollsten.',
 'An einen bestimmten Urlaubsort kehre ich bewusst nicht zur&uuml;ck. Der Grund ist, dass dort eine sch&ouml;ne Erinnerung h&auml;ngt, die ich nicht &uuml;berschreiben m&ouml;chte. Manche Orte bewahrt man besser in der Erinnerung.',
 'In einem Land war es v&ouml;llig normal, beim Essen laut zu schmatzen. Zuerst hat mich das irritiert, weil es gegen meine Norm verstie&szlig;. Mit der Zeit konnte ich es nachvollziehen und habe meine eigene Sicht hinterfragt.',
 'Der Satz klingt plausibel, trifft aber nicht immer zu. Wer sich auf fremde Kulturen einl&auml;sst, wird durch die Begegnung tats&auml;chlich offener. Doch mancher reist viel und best&auml;tigt unterwegs nur seine alten Annahmen.',
 'Teils ist der Vorwurf berechtigt, denn der Verzicht Einzelner &auml;ndert global wenig. Dennoch halte ich den Beitrag nicht f&uuml;r wertlos, weil er ein Bewusstsein schafft. Wirksam wird er allerdings erst, wenn die Politik nachzieht.',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Danke f&uuml;r Ihren Standpunkt. Ich erteile jetzt der Gegenseite das Wort und fasse danach beide Argumente kurz zusammen. <b>B:</b> Gern, dann lege ich dar, warum g&uuml;nstige Fl&uuml;ge auch Chancen bieten.</span>',
 'So k&ouml;nntest du es sagen: <span class="dlg"><b>A:</b> Die Reise entsprach in mehreren Punkten nicht dem Prospekt. Ich erwarte deshalb eine angemessene Minderung des Preises. <b>B:</b> Ich verstehe Ihren &Auml;rger &mdash; schildern Sie mir bitte die M&auml;ngel im Einzelnen.</span>',
 '&bdquo;Unbekannt&ldquo; ist etwas einfach, das man noch nicht kennt, zum Beispiel ein Name oder eine Stra&szlig;e. &bdquo;Fremd&ldquo; dagegen enth&auml;lt ein Gef&uuml;hl von Distanz: Etwas wirkt ungewohnt und nicht vertraut. Eine Stadt kann mir unbekannt sein, ohne mir fremd zu sein.'
]
};
