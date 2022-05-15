import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.food),
    temperature: 0.5,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(food) {
  const capitalizedFood =
    food[0].toUpperCase() + food.slice(1).toLowerCase();
  return `Suggest three restaurant names by cuisine type.

Food: Italian
Names: Pizza Planet, Pasta Palace, RomaDelish
Food: Mexican
Names: South of the Border, Burritos Delight, Mama's Tacos
Food: ${capitalizedFood}
Names:`;
}
