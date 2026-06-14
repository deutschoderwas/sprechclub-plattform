// ============================================================
// ZENTRALE KONFIGURATION
// ============================================================
window.SPRECHCLUB_CONFIG = {
  SUPABASE_URL: 'https://csadlwsuisbyawrgdrca.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_uY1pHLPyI89qxI25Lep8aA_vHgKugkB',
  WHATSAPP: 'https://wa.me/message/XBWZPNITRRUQK1',

  // Flexible Preise — Einzelstunde, Pässe & All-Inclusive-Abo
  PAKETE: [
    { id: 'einzelstunde', typ: 'einzel', stunden: 1,  preis: 25,  label: 'Einzelstunde',
      hinweis: 'ganz ohne Bindung', benefits: ['1 LIVE-Stunde nach Wahl', 'Sofort buchbar', 'Keine Laufzeit'] },

    { id: 'testpass', typ: 'paket', stunden: 4, preis: 79, label: 'Testpass',
      hinweis: '4 Stunden zum Reinschnuppern', benefits: ['4 LIVE-Stunden', 'Alle Clubs & Niveaus', 'Guthaben bleibt erhalten'] },

    { id: 'allinclusive', typ: 'pass', abo: true, stunden: 12, preis: 189, label: 'All-Inclusive-Pass',
      hinweis: 'pro Monat', beliebt: true,
      benefits: ['12 LIVE-Klassen pro Monat', 'Alle digitalen Kurse inklusive', 'Community-Zugang', 'Monatlich kündbar'] },

    { id: 'sparpass', typ: 'paket', stunden: 30, preis: 399, label: 'Spar Pass',
      hinweis: 'einmalig · längeres Lernen', benefits: ['30 LIVE-Stunden', 'Bester Stundenpreis (13,30 €)', 'Keine Laufzeit', 'Guthaben bleibt erhalten'] }
  ]
};
