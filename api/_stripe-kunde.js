// ============================================================
//  api/_stripe-kunde.js — den Stripe-Kunden zu einer E-Mail finden
//
//  Dilnoza Utaeva, 27./29.10.2026: Sie hat ein laufendes Abo, und der
//  naechtliche Abgleich meldete sie trotzdem als "ohne Stripe-Kunde".
//
//  Zwei Dinge kamen zusammen:
//
//  1. Sie hat gekauft, BEVOR sie ein Konto hatte. Der Kauf lief ueber
//     invoice.paid, landete in pending_purchases und wurde bei der
//     Registrierung eingeloest. Diesen Weg entlang schreibt niemand
//     die Kundennummer ins Profil — anders als beim Weg ueber
//     checkout.session.completed, wo saveCustomer() das erledigt.
//
//  2. Das Netz darunter, die Suche ueber die E-Mail, greift nicht
//     zuverlaessig: stripe.customers.list({ email }) vergleicht die
//     Adresse ZEICHENGENAU. Steht bei Stripe
//     "Dilnoza.Utaeva1992@gmail.com" und bei uns dieselbe Adresse
//     klein geschrieben, kommt eine leere Liste zurueck.
//
//  Deshalb hier drei Wege nacheinander, vom billigsten zum sichersten:
//
//     1. customers.list  — wie bisher, trifft in den meisten Faellen.
//     2. customers.search — Stripes Such-Schnittstelle, der die
//        Gross- und Kleinschreibung egal ist.
//     3. die geparkte Kaufzeile in pending_purchases. Dort steht die
//        Rechnung ("inv_in_...") oder die Kasse ("cs_cs_..."), und aus
//        beiden laesst sich der Kunde direkt holen — ganz ohne
//        Adressvergleich. Das ist der Weg, der Dilnoza findet.
//
//  Jeder Weg ist einzeln abgesichert: faellt einer aus, geht es mit
//  dem naechsten weiter, und am Ende steht hoechstens null — nie ein
//  Fehler, der den Aufrufer umwirft.
// ============================================================

/**
 * @param stripe  eine fertige Stripe-Instanz
 * @param email   die Adresse aus unserem Profil
 * @param sb      optional: Supabase mit Service-Rolle, fuer Weg 3
 * @returns {Promise<{id:string, weg:string}|null>}
 */
export async function kundeSuchen(stripe, email, sb) {
  const adresse = String(email || '').trim();
  if (!adresse) return null;

  try {
    const treffer = await stripe.customers.list({ email: adresse, limit: 3 });
    if (treffer.data && treffer.data.length) return { id: treffer.data[0].id, weg: 'E-Mail' };
  } catch (e) { /* weiter zum naechsten Weg */ }

  /* Ein Apostroph wuerde die Suchabfrage zerreissen. Solche Adressen
     gibt es praktisch nicht — wir ueberspringen den Weg lieber, als
     zu basteln. */
  if (!adresse.includes("'")) {
    try {
      const such = await stripe.customers.search({ query: "email:'" + adresse + "'", limit: 3 });
      if (such.data && such.data.length) return { id: such.data[0].id, weg: 'Suche' };
    } catch (e) { /* Suche kann im Konto abgeschaltet sein */ }
  }

  if (!sb) return null;
  try {
    const { data: kaeufe } = await sb.from('pending_purchases')
      .select('stripe_ref,created_at')
      .ilike('email', adresse)
      .not('stripe_ref', 'is', null)
      .order('created_at', { ascending: false })
      .limit(5);

    for (const k of (kaeufe || [])) {
      const ref = String((k && k.stripe_ref) || '');
      try {
        if (ref.startsWith('inv_in_')) {
          // 'inv_' + inv.id  (api/stripe-webhook.js)
          const rechnung = await stripe.invoices.retrieve(ref.slice(4));
          const kd = rechnung && rechnung.customer;
          if (kd) return { id: (typeof kd === 'string' ? kd : kd.id), weg: 'Rechnung' };
        } else if (ref.startsWith('cs_') || ref.startsWith('trial_cs_')) {
          // 'cs_' + s.id bzw. 'trial_' + s.id — s.id faengt selbst mit cs_ an
          let sid = ref.replace(/^trial_/, '');
          if (sid.startsWith('cs_cs_')) sid = sid.slice(3);
          const sitzung = await stripe.checkout.sessions.retrieve(sid);
          const kd = sitzung && sitzung.customer;
          if (kd) return { id: (typeof kd === 'string' ? kd : kd.id), weg: 'Kasse' };
        }
      } catch (e) { /* eine kaputte Nummer darf den Rest nicht stoppen */ }
    }
  } catch (e) { /* ohne geparkte Kaeufe geht es eben nicht */ }

  return null;
}
