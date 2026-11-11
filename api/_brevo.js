// ============================================================
//  api/_brevo.js — eine Adresse nach Brevo bringen
//
//  Bisher stand dieser Aufruf an drei Stellen im Code, jedes Mal
//  leicht anders, und keine davon hat festgehalten, ob er geklappt
//  hat. Wenn Brevo einmal nicht antwortete, blieb die Adresse nur
//  bei uns in der Tabelle leads liegen — vorhanden, aber von keinem
//  Newsletter erreichbar, und niemand hat es je erfahren.
//
//  Darum hier an einer Stelle, mit einer klaren Antwort: true heisst,
//  Brevo hat den Kontakt. Wer true bekommt, schreibt leads.brevo_at.
//  Wer false bekommt, laesst brevo_at leer — dann holt
//  api/leads-nach-brevo.js die Adresse spaeter nach.
//
//  Brevo-Listen (Stand 11.11.2026):
//    14  Sprechclub Interessenten   — alles von der Webseite
//    10  Newsletter
// ============================================================

export const LISTE_WEBSEITE   = 14;
export const LISTE_NEWSLETTER = 10;

/* Welche Liste passt zu welcher Herkunft? Eine Stelle, damit
   Warteliste, Freebie und das Nachholen dieselbe Antwort geben. */
export function listeFuer(quelle) {
  const q = String(quelle || '').toLowerCase();
  if (q.includes('newsletter')) return Number(process.env.BREVO_NEWSLETTER_LIST_ID || LISTE_NEWSLETTER);
  return Number(process.env.BREVO_WAITLIST_LIST_ID || process.env.BREVO_LIST_ID || LISTE_WEBSEITE);
}

export async function leadNachBrevo({ email, name, vorname, quelle, listen, attribute }) {
  if (!process.env.BREVO_API_KEY) return false;
  const adresse = String(email || '').trim();
  if (!adresse || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(adresse)) return false;

  const vor = (vorname || String(name || '').split(/\s+/)[0] || adresse.split('@')[0] || '').trim();
  const liste = (Array.isArray(listen) && listen.length ? listen : [listeFuer(quelle)])
    .map(Number).filter(n => n > 0);

  try {
    const r = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adresse,
        updateEnabled: true,
        attributes: Object.assign({ VORNAME: vor, NAME: name || vor, QUELLE: quelle || '' }, attribute || {}),
        listIds: liste.length ? liste : undefined,
      }),
    });
    /* 201 angelegt, 204 aktualisiert. 400 heisst meistens: die Adresse
       ist kaputt (Leerzeichen, fehlendes .de). Die holt auch ein
       zweiter Versuch nicht — sie bleibt offen und faellt im Bericht auf. */
    return r.ok || r.status === 204;
  } catch (e) {
    return false;
  }
}
