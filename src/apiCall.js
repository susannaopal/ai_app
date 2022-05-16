// const OPENAI_API_KEY=process.env.REACT_APP_API_KEY

export const fetchPromptedResponse = (newPrompt) => {
  const data = {
 prompt: `${newPrompt}`,
 temperature: 0.5,
 max_tokens: 65,
 top_p: 1.0,
 frequency_penalty: 0.0,
 presence_penalty: 0.0,
};
 
return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
 },
 body: JSON.stringify(data),
}).then(response => response.json())
.then(data => console.log(data))
};

// .then(response => {
//   if (!response.ok) {
//     throw new Error("Sorry, that didn't quite work.")
//   } else {
//     return response.json()
//   }
// })