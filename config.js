// ============================================
// ZENTRALE KONFIGURATION
// ============================================
window.SPRECHCLUB_CONFIG = {
  SUPABASE_URL: 'https://csadlwsuisbyawrgdrca.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_uY1pHLPyI89qxI25Lep8aA_vHgKugkB',
  WHATSAPP: 'https://wa.me/message/XBWZPNITRRUQK1',

  // Stripe – veröffentlichbarer Schlüssel (öffentlich, gehört ins Frontend). Für eingebettete Bezahlung.
  STRIPE_PK: 'pk_live_51PSvrbFGUsccpNS8F2KLIUnponenkTZTVS6plNaMyhIgcqpzs4CdLMGkvCpiEyOUeZ0hJekqg219Gf11ufNtnFdD00ZmZWuqzQ',

  // Flexible Preise — Abo-Pässe mit 7 Tagen gratis testen & ein Einmalkauf.
  // Jedes Paket: 7 Tage kostenlos testen (mit Probestunde), in den 7 Tagen jederzeit
  // kostenlos kündbar, danach automatisch monatliches Abo. (trial = Tage Testphase)
  // Immer gratis dabei: Üben rund um die Uhr, Amanda (KI-Tutorin 24/7) & Community.
  PAKETE: [
    { id: 'testpass', typ: 'pass', abo: true, trial: 7, stunden: 4, preis: 79, label: 'Ab und zu Pass',
      hinweis: 'pro Monat · 4 Stunden',
      benefits: ['<b>4 LIVE-Stunden/Monat mit echter Lehrkraft</b> · kleine Gruppen', 'Alle Clubs & Niveaus (A2–C1)', '📚 Lernplattform A2–C1 – üben rund um die Uhr', '🤖 Amanda – deine KI-Tutorin rund um die Uhr', '👥 Lern-Community – Austausch & Motivation', '✅ 1 LIVE-Stunde gratis testen – innerhalb 7 Tagen, jederzeit kündbar'] },

    { id: 'gelegenheitspass', typ: 'pass', abo: true, trial: 7, stunden: 8, preis: 139, label: 'Gelegenheitspass',
      hinweis: 'pro Monat · 8 Stunden',
      benefits: ['<b>8 LIVE-Stunden/Monat mit echter Lehrkraft</b> · kleine Gruppen', 'Alle Clubs & Niveaus (A2–C1)', '📚 Lernplattform A2–C1 – üben rund um die Uhr', '🤖 Amanda – deine KI-Tutorin rund um die Uhr', '👥 Lern-Community – Austausch & Motivation', '✅ 1 LIVE-Stunde gratis testen – innerhalb 7 Tagen, jederzeit kündbar'] },

    { id: 'allinclusive', typ: 'pass', abo: true, trial: 7, stunden: 12, preis: 189, label: 'Profi-Pass',
      hinweis: 'pro Monat · 12 Stunden', beliebt: true,
      benefits: ['<b>12 LIVE-Stunden/Monat mit echter Lehrkraft</b> · kleine Gruppen', 'Alle Clubs & Niveaus (A2–C1)', '📚 Lernplattform A2–C1 – üben rund um die Uhr', '🤖 Amanda – deine KI-Tutorin rund um die Uhr', '👥 Lern-Community – Austausch & Motivation', '✅ 1 LIVE-Stunde gratis testen – innerhalb 7 Tagen, jederzeit kündbar'] },

    { id: 'sparpass', typ: 'paket', stunden: 30, preis: 399, label: 'Spar Pass',
      hinweis: 'einmalig · 30 Stunden',
      benefits: ['<b>30 LIVE-Stunden mit echter Lehrkraft</b> · flexibel einlösbar', 'Bester Stundenpreis (13,30 €)', '📚 Lernplattform A2–C1 – üben rund um die Uhr', '🤖 Amanda – deine KI-Tutorin rund um die Uhr', '👥 Lern-Community – Austausch & Motivation', 'Einmalkauf · kein Abo'],
      fussnote: '* Die 30 Stunden müssen innerhalb von 4 Monaten ab Kauf eingelöst werden, danach verfallen sie.' }
  ]
};
