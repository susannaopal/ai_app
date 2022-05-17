const API_KEY = process.env.REACT_APP_API_KEY


export const fetchPromptedResponse = (prompt) => {
  const data = {
 prompt: `${prompt}`,
 temperature: 0.9,
 max_tokens: 75,
 top_p: 1.0,
 frequency_penalty: 0.0,
 presence_penalty: 0.0,
};
 
return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${API_KEY}`,
 },
 body: JSON.stringify(data),
}) 
  
.then(response => response.json())
.then(data => console.log("are you working: datalog:", data))
};





// { result: completion.data.choices[0].text }

// .then(response => {
//   if (!response.ok) {
//     throw new Error("Sorry, that didn't quite work.")
//   } else {
//     return response.json()
//   }
// })