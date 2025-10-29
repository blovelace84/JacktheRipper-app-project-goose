import { createAgent } from "@block/goose";

export const summarizeCase = createAgent({
  name: "caseSummarizer",
  description: "Summarizes historical case files for Hey Jack.",
  async run(input: { title: string; summary: string }) {
    // call LLM of your choice through Goose adapters
    const prompt = `Summarize the case of ${input.title} in 3 sentences.`;
    const result = await this.llm.complete(prompt);
    return result.text;
  },
});
