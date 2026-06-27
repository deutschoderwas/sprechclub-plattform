// ============================================
// ZENTRALE KONFIGURATION
// ============================================
window.SPRECHCLUB_CONFIG = {
  SUPABASE_URL: 'https://csadlwsuisbyawrgdrca.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_uY1pHLPyI89qxI25Lep8aA_vHgKugkB',
  WHATSAPP: 'https://wa.me/message/XBWZPNITRRUQK1',

  // Flexible Preise — Abo-Pässe mit 7 Tagen gratis testen & ein Einmalkauf.
  // Jedes Paket: 7 Tage kostenlos testen (mit Probestunde), in den 7 Tagen jederzeit
  // kostenlos kündbar, danach automatisch monatliches Abo. (trial = Tage Testphase)
  // Immer gratis dabei: Üben rund um die Uhr, Amanda (KI-Tutorin 24/7) & Community.
  PAKETE: [
    { id: 'testpass', typ: 'pass', abo: true, trial: 7, stunden: 4, preis: 79, label: 'Testpass',
      hinweis: 'pro Monat · 4 Stunden',
      benefits: ['4 LIVE-Stunden pro Monat', 'Alle Clubs & Niveaus', '🎮 Üben rund um die Uhr – gratis', '🎤 Amanda – deine KI-Tutorin 24/7', '💬 Community', '✅ 1 LIVE-Stunde gratis testen – innerhalb 7 Tagen, jederzeit kündbar'] },

    { id: 'gelegenheitspass', typ: 'pass', abo: true, trial: 7, stunden: 8, preis: 139, label: 'Gelegenheitspass',
      hinweis: 'pro Monat · 8 Stunden',
      benefits: ['8 LIVE-Stunden pro Monat', 'Alle Clubs & Niveaus', '🎮 Üben rund um die Uhr – gratis', '🎤 Amanda – deine KI-Tutorin 24/7', '💬 Community', '✅ 1 LIVE-Stunde gratis testen – innerhalb 7 Tagen, jederzeit kündbar'] },

    { id: 'allinclusive', typ: 'pass', abo: true, trial: 7, stunden: 12, preis: 189, label: 'Profi-Pass',
      hinweis: 'pro Monat · 12 Stunden', beliebt: true,
      benefits: ['12 LIVE-Klassen pro Monat', 'Alle Clubs & Niveaus', '🎮 Üben rund um die Uhr – gratis', '🎤 Amanda – deine KI-Tutorin 24/7', '💬 Community', '✅ 1 LIVE-Stunde gratis testen – innerhalb 7 Tagen, jederzeit kündbar'] },

    { id: 'sparpass', typ: 'paket', stunden: 30, preis: 399, label: 'Spar Pass',
      hinweis: 'einmalig · 30 Stunden',
      benefits: ['30 LIVE-Stunden', 'Bester Stundenpreis (13,30 €)', '🎮 Üben rund um die Uhr – gratis', '🎤 Amanda – deine KI-Tutorin 24/7', '💬 Community', 'Einmalkauf · kein Abo'] }
  ]
};
