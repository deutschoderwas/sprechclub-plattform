// ============================================================
// ZENTRALE KONFIGURATION — hier Supabase-Daten eintragen,
// sobald Julias Supabase-Projekt existiert.
// ============================================================
window.SPRECHCLUB_CONFIG = {
  SUPABASE_URL: 'https://csadlwsuisbyawrgdrca.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_uY1pHLPyI89qxI25Lep8aA_vHgKugkB',
  WHATSAPP: 'https://wa.me/message/XBWZPNITRRUQK1',
  PAKETE: [
    { id: 'paket-4',  stunden: 4,  preis: 79,  label: '4 Stunden',  hinweis: 'pro Monat' },
    { id: 'paket-8',  stunden: 8,  preis: 139, label: '8 Stunden',  hinweis: 'pro Monat', beliebt: true },
    { id: 'paket-12', stunden: 12, preis: 189, label: '12 Stunden', hinweis: 'pro Monat' },
    { id: 'paket-30', stunden: 30, preis: 399, label: 'fleißig',          hinweis: '3 Monate · 24 + 6 Stunden gratis' },
    { id: 'paket-60', stunden: 60, preis: 699, label: 'am fleißigsten',   hinweis: '6 Monate · 48 + 12 Stunden gratis' }
  ]
};
