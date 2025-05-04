import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1", 
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY, 
  dangerouslyAllowBrowser: true,
});
export const fetchStudyExplanation = async (question, level) => {
  try {
    const response = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
  
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
    console.error("Ошибка получения ответа от OpenAI:", error);
    return "Произошла ошибка. Попробуйте ещё раз.";
  }
};
