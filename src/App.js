import { useState, useEffect } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'
import { fetchPromptedResponse } from './apiCall'

const App = () => {
  const [prompts, setPrompts] = useState([]);
  const [ response, setResponse ] = useState([]);
 
  const addPrompt = (prompt) => {
    setPrompts([...prompts, prompt])
    fetchPromptedResponse(prompt)
    // .then(data => console.log(data))
     .then(data => setResponse([ 
       {
      prompt: prompt, 
      result: data.choices[0].text
      }, ...response
    ]))
  }


  const removePrompts = (id) => {
    const filteredPrompts = prompts.filter(prompt => prompt.id !== id)
    setPrompts(filteredPrompts)
  }

  return (
    <>
      <h1>Open ai</h1>
      {!prompts.length && <p>Please add a prompt!</p>}
      <Form addPrompt={addPrompt}/>
      <Response prompts={prompts} removePrompts={removePrompts}/>
    </>
  )
}


export default App;
