// ============================================================
//  Was kann Amanda gerade?
//
//  Gibt nur ja/nein zurueck — nie einen Schluessel, nie einen Teil
//  davon. Die Oberflaeche fragt einmal nach und richtet sich danach:
//  ohne Spracherkennung verschwindet das Mikrofon, ohne Stimme der
//  Vorlese-Schalter.
//
//  Vorher hat die Oberflaeche einfach alles angeboten. Wer dann ins
//  Mikrofon sprach, bekam "Das habe ich nicht verstanden" zu lesen —
//  ein Satz, der dem Lernenden die Schuld gibt fuer eine Einstellung,
//  die niemand gesetzt hat.
// ============================================================
/* Die Kennung von Amandas Sprech-Agent steht entweder in Vercel oder —
   wenn die Seite amanda-einrichten.html ihn angelegt hat — in der
   Tabelle einstellungen. Wer nur die Umgebungsvariable prueft, meldet
   "kann nicht sprechen", obwohl sie es laengst kann. */
async function agentDa() {
  if (process.env.ELEVEN_AGENT_ID) return true;
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return false;
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { data } = await sb.from('einstellungen').select('wert').eq('schluessel', 'amanda_agent_id').maybeSingle();
    return !!(data && data.wert);
  } catch (e) { return false; }
}

/* ------------------------------------------------------------
   Amanda spricht gerade nicht.

   Julia, 8.11.2026: "Nimm Amanda sprechen dann aus der Plattform
   raus (nur schreiben) Also blende sie aus."

   Hintergrund: Das Guthaben bei ElevenLabs ist aufgebraucht, und der
   Weg ueber Gemini wartet noch auf den Schluessel. Die Oberflaeche
   hat das Sprechen trotzdem angeboten — eine Schuelerin drueckte auf
   "Gespraech beginnen" und sah "Verbinde ..." bis sie aufgab. Lieber
   gar kein Knopf als ein Knopf, der nichts tut.

   WIEDER EINSCHALTEN: hier auf false setzen — und in konto.html
   window.AMANDA_SPRECHEN_AUS ebenfalls. Zwei Stellen, weil die eine
   im Server steht und die andere in der Seite; sie heissen absichtlich
   gleich, damit man beide findet.
   ------------------------------------------------------------ */
const SPRECHEN_AUS = true;

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=120, s-maxage=120');
  const eleven = !!process.env.ELEVENLABS_API_KEY;
  return res.status(200).json({
    schreiben: !!process.env.ANTHROPIC_API_KEY,
    hoeren:    !!process.env.OPENAI_API_KEY,
    vorlesen:  !!(eleven || process.env.OPENAI_API_KEY || process.env.GOOGLE_TTS_API_KEY),
    echteStimme: eleven,
    sprechen:  !SPRECHEN_AUS && eleven && (await agentDa()),
  });
}
