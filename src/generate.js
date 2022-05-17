const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

const openai = new OpenAI(REACT_APP_API_KEY);

(async () => {
  const gptResponse = await openai.complete({
      engine: 'text-curie-001',
      prompt: `${prompt}`,
      maxTokens: 30,
      temperature: 0.9,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ['\n', "testing"]
  });

  console.log(gptResponse.data);
})();



// {
//   id: 'some-long-id',
//   object: 'text_completion',
//   created: 1616791508,
//   model: 'davinci:2020-05-03',
//   choices: [
//       {
//         text: " predicted text...",
//         index: 0,
//         logprobs: null,
//         finish_reason: 'length'
//       }
//   ]
// }



// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export default async function (req, res) {
//   const completion = await openai.createCompletion("text-curie-001", {
//     prompt: generatePrompt(req.body.food),
//     temperature: 0.5,
//   });
//   res.status(200).json({ result: completion.data.choices[0].text });
// }

// function generatePrompt(food) {
//   const capitalizedFood =
//     food[0].toUpperCase() + food.slice(1).toLowerCase();
//   return `Suggest three restaurant names by cuisine type.

// Food: Italian
// Names: Pizza Planet, Pasta Palace, RomaDelish
// Food: Mexican
// Names: South of the Border, Burritos Delight, Mama's Tacos
// Food: ${capitalizedFood}
// Names:`;
// }
