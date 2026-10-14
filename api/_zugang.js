// ============================================================
//  api/_zugang.js — eine Regel, drei Stellen
//
//  Wer darf auf die Lernplattform? Dieselbe Frage beantworten
//  bisher drei Stellen getrennt:
//
//    has_full_access()   in der Datenbank (RLS)
//    isActive()          in konto.html (die Oberflaeche)
//    darfSprechen()      in api/amanda-stimme.js
//
//  Die dritte war zu weit: Sie fragte nur nach status === 'aktiv'.
//  Ein Altschueler ohne Guthaben hat diesen Status weiterhin — und
//  konnte deshalb mit Amanda sprechen, obwohl er auf der Plattform
//  sonst nichts mehr darf. api/amanda-chat.js fragte ueberhaupt
//  nicht, dort genuegte ein gueltiger Login.
//
//  Amanda kostet pro Minute und pro Nachricht echtes Geld. Deshalb
//  steht die Regel jetzt hier, einmal, und beide Amanda-Wege rufen
//  sie auf.
//
//  Julias Regel (12.10.2026): Altschueler ohne Guthaben behalten
//  die Materialien und das Material der Stunden, die sie gebucht
//  hatten. Sonst nichts — kein Lernbereich, keine Amanda. Das
//  "sonst nichts" ist genau das, was diese Datei durchsetzt; die
//  beiden Ausnahmen haengen an der Buchung und laufen ueber RLS.
//
//  Aendert sich die Regel, muessen alle drei Stellen mit.
// ============================================================

/* Diese Status sind zu, egal wie viel Guthaben noch dasteht. */
const GESPERRT = ['beendet', 'archiv', 'inaktiv', 'geloescht', 'registriert', 'probeschuler', 'gekuendigt'];
const ZUGANG_TIER = ['community', 'premium', 'premiumplus', 'premium_plus'];
const ZUGANG_STATUS = ['aktiv', 'urlaub', 'pause'];

/* Die Spalten, die hatVollzugang braucht. Wer diese Funktion
   benutzt, holt sie mit — sonst faellt die Antwort falsch aus,
   ohne dass es auffaellt. */
export const ZUGANG_SPALTEN = 'status, tier, credits, pass_until, is_admin, is_teacher';

/**
 * @param admin  Supabase-Client mit Service-Rolle
 * @param uid    die user_id
 * @param prof   das Profil, falls schon geladen (spart eine Abfrage)
 * @returns {Promise<boolean>}
 */
export async function hatVollzugang(admin, uid, prof) {
  let p = prof;
  if (!p) {
    const { data } = await admin
      .from('profiles').select(ZUGANG_SPALTEN).eq('id', uid).maybeSingle();
    p = data;
  }
  if (!p) return false;
  if (p.is_admin || p.is_teacher) return true;

  const status = String(p.status || '');
  if (GESPERRT.includes(status)) return false;

  if (ZUGANG_TIER.includes(String(p.tier || '')) && ZUGANG_STATUS.includes(status || 'aktiv')) return true;
  if (Number(p.credits || 0) > 0) return true;
  if (p.pass_until && new Date(p.pass_until) > new Date()) return true;

  /* Eine noch bevorstehende Stunde oeffnet die Tuer ebenfalls — wer
     naechste Woche im Sprechclub sitzt, soll sich vorbereiten
     koennen. Dieselbe Zeile steht in has_full_access(). */
  const { data: b } = await admin
    .from('bookings')
    .select('class_id, classes!inner(starts_at)')
    .eq('user_id', uid)
    .eq('status', 'booked')
    .gt('classes.starts_at', new Date().toISOString())
    .limit(1);
  if (b && b.length) return true;

  /* 14.10.2026 — diese Zeile hat gefehlt, und das war ein echter Schaden.
     Am 13.10. hat Julia die Regel zurueckgenommen: "wenn ALTE Schueler
     guthaben auf 0 haben bitte nicht den Zugang blockieren, erst wenn sie
     im Archiv sind und NICHT aktiv". Nachgezogen wurden damals
     has_full_access() in der Datenbank und isActive() in konto.html —
     diese Datei nicht. Folge: ein alter Schueler mit 0 Guthaben und
     Status 'aktiv' kam ueberall hin, nur bei Amanda bekam er
     'kein_zugang'. Fuer ihn sah das aus wie "Amanda ist kaputt".
     Dieselbe Zeile steht in has_full_access() und in isActive(). */
  return ZUGANG_STATUS.includes(status);
}
