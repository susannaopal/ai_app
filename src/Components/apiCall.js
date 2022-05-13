import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body),
    temperature: 0.1,
  });
  console.log("did this run?1")
  res.status(200).json({ result: completion.data.choices[0].text });
  console.log("did this work?2")
}
