import axios from 'axios';

const GOOSE_API_KEY = 'sk-pJPzyCCsQJUtT...'; // Replace with your actual API key

export const gooseClient = axios.create({
  baseURL: 'https://api.goose.ai/v1/engines/gpt-5-mini/completions',
  headers: {
    'Authorization': `Bearer ${GOOSE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const getGooseResponse = async (command: string) => {
  try {
    const response = await gooseClient.post('', {
      prompt: `You are a Jack the Ripper game assistant. Respond briefly to player commands.\nPlayer: ${command}\nGame:`,
      max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching response from GooseAI:', error);
    return 'Sorry, I couldn\'t process that request.';
  }
};
