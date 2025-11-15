import axios from "axios";

const API_KEY = "sk-pJPzyCCsQJUtT2EjeWpw791Bly3vO9mVaYYcIF3ZbtYzlFle";

interface GooseResponse {
  choices: { text: string }[];
}

export async function generateWithGoose(prompt: string): Promise<string> {
  try {
    const res = await axios.post<GooseResponse>(
      "https://api.goose.ai/v1/engines/gpt-neox-20b/completions",
      {
        prompt,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.choices[0].text.trim();
  } catch (e) {
    console.error("Goose.ai error:", e);
    return "Error contacting AI service.";
  }
}
