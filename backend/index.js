import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
});

console.log("API Key:", process.env.OPENAI_API_KEY);
console.log("Organization:", process.env.OPENAI_ORGANIZATION);

async function gerarHaiku() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Write a haiku about AI" }],
    });

    console.log(
      "Resposta da IA:",
      completion.choices[0].message.content.trim()
    );
  } catch (error) {
    console.error("Erro na API OpenAI:", error.response?.data || error.message);
  }
}

gerarHaiku();
