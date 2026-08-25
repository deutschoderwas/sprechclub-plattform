/* ============================================================
   deutschoderwas club — Hoer-Aufnahmen

   Fertige Aufnahmen fuer die Hoertexte im Pruefungsbereich.
   Stimmen: Maya (Frau) und Mark (Mann), ElevenLabs.

   Schluessel = der Hoertext, klein geschrieben, Leerzeichen
   zusammengefasst. Wert = die fertige Datei.

   window.sagen() schaut zuerst hier nach. Findet es nichts,
   geht es wie bisher weiter: Vorlese-Dienst, dann Geraet.
   ============================================================ */
window.HOER_DATEIEN = {
"herr schneider wohnt im hotel adler, zimmer zweihundertfünfundvierzig.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_2fdccca1-2355-4f41-9c37-f71ccc9fa5e8.mp3",
"achtung am bahnsteig. der zug nach hamburg fährt heute von gleis dreißig ab.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_af998171-6dee-417c-995d-e7c94cf7d7f8.mp3",
"zum krankenhaus fährst du am besten mit der linie sechsundsiebzig.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_9986640f-bb65-4770-b600-b9dbc0a0d1c3.mp3",
"die praxis von doktor aydin ist in der bergstraße siebzehn, gleich neben der post.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_b6085b9a-20b3-483b-ba0f-08b875799033.mp3",
"die apotheke am markt hat die nummer neun acht sieben, sechs fünf vier.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_e28b9673-ea69-4240-8319-3bbb9a42302a.mp3",
"wir wohnen jetzt in bremen. die postleitzahl ist zwei acht zwei sieben fünf.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_e48ee064-2946-4c00-9f0a-9605a2e7cf91.mp3",
"die nummer hundertdreiundvierzig, bitte zum schalter kommen.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_73da2d2e-4e28-45fb-a331-c47686d90af6.mp3",
"ihr schließfach im schwimmbad ist die nummer neunundvierzig, hinten links.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_8257bd0d-f73a-48a1-b5fb-54e5aa07eef6.mp3",
"der deutschkurs ist heute in raum hundertsechs, im ersten stock.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_361e54b9-02b0-4b1c-857f-ad1a344ffd44.mp3",
"ihre kundennummer bei uns in der werkstatt ist achthundertfünfzehn. bitte notieren sie sich das.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_890f95e0-4eb3-4c49-ac19-f3cd797af755.mp3",
"familie yilmaz wohnt in wohnung vierundzwanzig, im zweiten stock.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_e082fb42-8d71-4117-8609-ecfd0791f6a5.mp3",
"die kita ist in der lindenstraße fünfundneunzig, direkt am park.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114511_048dcf59-d9c0-410d-a0f9-b67b6c36660d.mp3",
"meine nummer auf dem bibliotheksausweis ist dreihundertsiebzehn.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114813_791d050e-a059-4f24-9a6f-6fa104248c28.mp3",
"fahren sie mit der straßenbahn linie achtzehn bis zum marktplatz.": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260814_114813_d4d7b9de-f75c-4e92-bb05-18b2d532f5d5.mp3"
};
