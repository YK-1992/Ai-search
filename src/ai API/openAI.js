import { OpenAI } from "openai";

const openai = new OpenAI({

  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "https://light-ai-search.netlify.app/", // или http://localhost:5173
    "X-Title": "AI Study Buddy",
  },
});

export const fetchStudyExplanation = async (question, level) => {
  try {
    const response = await openai.chat.completions.create({
      // model: "openai/gpt-4o",
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "Ты — помощник, который всегда отвечает на том же языке, на котором задан вопрос. Отвечай просто, без перевода.",
        },
        {
          role: "user",
          content: `Объясни тему: "${question}". Формат объяснения: ${level}.`,
        },
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Ошибка получения ответа от OpenRouter:", error.response?.data || error.message);
    return "Произошла ошибка. Попробуйте ещё раз.";
  }
};
