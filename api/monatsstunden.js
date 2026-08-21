// Monatliche LIVE-Stunden für Jahres-Mitgliedschaften (Premium jährlich).
// Beim Monatsabo kommen die Stunden über invoice.paid — beim Jahresabo zahlt
// die Person aber nur einmal. Dieser Job legt deshalb jeden Monat 8 Stunden nach.
//
// Läuft über den täglichen Sammel-Cron (api/daily.js). Mehrfaches Aufrufen am
// selben Tag ist harmlos: pro Person und Kalendermonat wird nur einmal gebucht
// (Schlüssel im credit_log: monat:<userId>:<JJJJ-MM>).
import { createClient } from '@supabase/supabase-js';

const STUNDEN_PRO_MONAT = 8;
const GUELTIG_TAGE = 31;

export default async function handler(req, res) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, skipped: 'supabase fehlt' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const jetzt = new Date();
  const monat = jetzt.toISOString().slice(0, 7);            // JJJJ-MM
  const vorEinemJahr = new Date(jetzt.getTime() - 372 * 86400000).toISOString();

  // Wer hat im letzten Jahr ein Jahres-Premium bezahlt?
  const { data: jahres } = await sb.from('credit_log')
    .select('user_id, created_at')
    .eq('reason', 'abo:premium_year')
    .gte('created_at', vorEinemJahr);

  const kandidaten = [...new Set((jahres || []).map(z => z.user_id).filter(Boolean))];
  const gebucht = [];
  const uebersprungen = [];

  for (const userId of kandidaten) {
    const key = 'monat:' + userId + ':' + monat;
    try {
      const { data: schon } = await sb.from('credit_log')
        .select('id').eq('stripe_session_id', key).maybeSingle();
      if (schon) { uebersprungen.push('schon:' + userId); continue; }

      const { data: p } = await sb.from('profiles')
        .select('credits, pass_until, tier, tier_ab, status').eq('id', userId).maybeSingle();
      if (!p || p.tier !== 'premium') { uebersprungen.push('kein premium:' + userId); continue; }
      if (p.status === 'beendet' || p.status === 'archiv') { uebersprungen.push('beendet:' + userId); continue; }
      // Vorverkauf: vor dem Starttag gibt es noch nichts
      if (p.tier_ab && new Date(String(p.tier_ab).slice(0, 10) + 'T00:00:00+02:00') > jetzt) {
        uebersprungen.push('startet später:' + userId); continue;
      }

      await sb.from('credit_log').insert({
        user_id: userId, change: STUNDEN_PRO_MONAT,
        reason: 'abo:premium_year', stripe_session_id: key,
      });
      const basis = (p.pass_until && new Date(p.pass_until) > jetzt) ? new Date(p.pass_until) : new Date();
      basis.setDate(basis.getDate() + GUELTIG_TAGE);
      await sb.from('profiles').update({
        credits: (p.credits || 0) + STUNDEN_PRO_MONAT,
        pass_until: basis.toISOString(),
      }).eq('id', userId);
      gebucht.push(userId);
    } catch (e) {
      uebersprungen.push('fehler:' + userId + ':' + String(e.message || e));
    }
  }

  return res.status(200).json({ ok: true, monat, gebucht: gebucht.length, geprueft: kandidaten.length, uebersprungen });
}
