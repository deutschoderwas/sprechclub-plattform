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

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=120, s-maxage=120');
  const eleven = !!process.env.ELEVENLABS_API_KEY;
  return res.status(200).json({
    schreiben: !!process.env.ANTHROPIC_API_KEY,
    hoeren:    !!process.env.OPENAI_API_KEY,
    vorlesen:  !!(eleven || process.env.OPENAI_API_KEY || process.env.GOOGLE_TTS_API_KEY),
    echteStimme: eleven,
    sprechen:  eleven && (await agentDa()),
  });
}
