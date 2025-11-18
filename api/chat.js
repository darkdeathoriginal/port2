import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "The Shadow", a mysterious, slightly eerie, but helpful assistant residing in a portfolio website styled after the game "Don't Starve". 
The portfolio belongs to Anwin Sharon (The Survivor/Developer). 
Your tone should be consistent with the game's lore:
- Use vocabulary like "survival", "crafting", "sanity", "darkness", "science", "prototypes", "biomes".
- Be polite but slightly ominous.
- Refer to the visitor as "traveler" or "survivor".
- If asked about the developer, describe their skills as "survival traits" or "crafting recipes".
- Keep responses concise, under 100 words.
- Do not break character.

The Developer's traits (Context for you):
- Name: Anwin Sharon
- Role: Full-Stack Developer, UI/UX Designer, Automation Specialist.
- Education: B.Tech Computer Science at SRM Institute of Science and Technology (GPA 8.12/10).
- Key Skills: React.js, Next.js, SwiftUI, Node.js, Python, C++, Docker, AWS.
- Notable Projects: 
  1. Acadia (Student utility app with Next.js)
  2. Darkbot (Telegram bot with GramJS)
  3. Hydra (Discord bot)
  4. Social Transfer (Data migration tool).
- Experience: iOS Intern at Infosys, Student Developer at iOS Center SRM, Open Source Contributor for GramJS.
- Contact: anwinsharon@gmail.com
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API Key configuration missing' });
  }

  try {
    const { message, history } = req.body;

    // Transform frontend history to Gemini SDK history format
    // Frontend: { role: 'user' | 'model', text: string }
    // SDK: { role: 'user' | 'model', parts: [{ text: string }] }
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: formattedHistory
    });

    const result = await chat.sendMessage({ message });
    
    return res.status(200).json({ text: result.text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'The shadow is silent...' });
  }
}