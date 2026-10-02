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
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=120, s-maxage=120');
  return res.status(200).json({
    schreiben: !!process.env.ANTHROPIC_API_KEY,
    hoeren:    !!process.env.OPENAI_API_KEY,
    vorlesen:  !!(process.env.ELEVENLABS_API_KEY || process.env.OPENAI_API_KEY || process.env.GOOGLE_TTS_API_KEY),
    echteStimme: !!process.env.ELEVENLABS_API_KEY,
    sprechen:  !!(process.env.ELEVENLABS_API_KEY && process.env.ELEVEN_AGENT_ID),
  });
}
