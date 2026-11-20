// KI-Korrektur einer eingereichten Hausaufgabe (nur Lehrer/Admin).
// Erstellt einen Korrektur-VORSCHLAG (speichert NICHT) — der Lehrer prüft ihn,
// kann ihn anpassen und schickt ihn dann über hausaufgabe-korrektur-senden.js ab.
// POST { class_id, user_id } + Authorization: Bearer <Lehrer/Admin-Token>
// Antwort: { ok:true, korrektur:"<html>" } oder { ok:false, error }
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ ok: false, error: 'anthropic_key_missing' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id, user_id } = req.body || {};
  if (!token || !class_id || !user_id) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: { user: caller }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ ok: false, error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', caller.id).maybeSingle();
  if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_teacher' });

  const [{ data: ha }, { data: ab }, { data: cls }] = await Promise.all([
    sb.from('hausaufgaben').select('aufgabe').eq('class_id', class_id).maybeSingle(),
    sb.from('hausaufgaben_abgaben').select('text').eq('class_id', class_id).eq('user_id', user_id).maybeSingle(),
    sb.from('classes').select('title,topic,level').eq('id', class_id).maybeSingle(),
  ]);
  const text = (ab && ab.text || '').trim();
  if (!text) return res.status(404).json({ ok: false, error: 'keine_abgabe' });

  const aufgabe = (ha && ha.aufgabe) || '';
  const niveau = (cls && cls.level) || 'A2–C1';
  const thema = (cls && (cls.topic || cls.title)) || '';

  const prompt = `Du bist Julia, eine herzliche, ermutigende Deutschlehrerin. Korrigiere die Hausaufgabe eines Deutschlerners (Niveau ${niveau}). Antworte NUR mit gültigem, einfachem HTML (keine <html>/<body>-Tags, kein Markdown, keine Code-Fences), freundlich und auf Deutsch, in genau dieser Struktur:

<p><b>✅ Deine korrigierte Version</b></p>
<p>… der Text des Schülers, sauber korrigiert. Verbesserte/geänderte Stellen mit &lt;mark&gt;…&lt;/mark&gt; markieren. Stil des Schülers beibehalten, nicht komplett umschreiben. …</p>
<p><b>📝 Das ist dir aufgefallen</b></p>
<ul>
<li>2–4 kurze, konkrete Hinweise zu den wichtigsten Fehlern (Grammatik/Wortwahl), je mit Beispiel „❌ falsch → ✅ richtig". Freundlich und klar.</li>
</ul>
<p><b>💛 Ermutigung</b></p>
<p>… 1–2 warme, persönliche Sätze. Lobe, was gut war. …</p>

Wichtig: keine Accents in Dateinamen, nur Umlaute im Text. Halte dich kurz und hilfreich.

AUFGABE: ${aufgabe}
THEMA: ${thema}

ABGABE DES SCHÜLERS:
"""${text}"""`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODEL, max_tokens: 2000, messages: [{ role: 'user', content: prompt }] }),
    });
    const j = await r.json();
    if (!r.ok) return res.status(502).json({ ok: false, error: 'anthropic_error', detail: (j && j.error && j.error.message) || ('HTTP ' + r.status) });
    let out = (j && j.content && j.content[0] && j.content[0].text) || '';
    out = out.replace(/^```html\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    if (!out) return res.status(502).json({ ok: false, error: 'leer' });
    return res.status(200).json({ ok: true, korrektur: out });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'anthropic_fetch', detail: e.message });
  }
}
