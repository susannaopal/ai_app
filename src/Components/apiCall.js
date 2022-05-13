// export const postNewItem = (addedItem) => {
//     return fetch('http://localhost:3001/api/v1/inventory', {
//       method: 'POST',
//       body:  JSON.stringify({
//         name: addedItem.name,
//         type: addedItem.type,
//         price: addedItem.price,
//         numberAvailable: addedItem.price
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }
export const fetchPrompt = () => {
  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions')
  .then(response => response.json())
  .then(data => console.log(data))
}

// const data = {
//  prompt: "Write a poem about a dog wearing skis",
//  temperature: 0.5,
//  max_tokens: 64,
//  top_p: 1.0,
//  frequency_penalty: 0.0,
//  presence_penalty: 0.0,
// };
 
// fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
//  method: "POST",
//  headers: {
//    "Content-Type": "application/json",
//    Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
//  },
//  body: JSON.stringify(data),
// });

