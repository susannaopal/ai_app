import { useState } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'
import { fetchPromptedResponse } from './apiCall'

const App = () => {
  const [prompts, setPrompts] = useState('');
  const [ responses, setResponse ] = useState([]);
 
  const addPrompt = (prompt) => {
    setPrompts(prompt)
    fetchPromptedResponse(prompts)
    .then(data => setResponse([...responses, 
      {
        prompt: prompt, 
        result: data.choices[0].text
      }
    ]))
  }

  const removePrompts = (id) => {
    const filteredPrompts = responses.filter(response => response.id !== id)
    setResponse(filteredPrompts)
  }

  return (
    <>
      <h1>Open ai</h1>
      {!responses.length && <p>Please add a prompt!</p>}
      <Form addPrompt={addPrompt}/>
      <Response responses={responses} removePrompts={removePrompts}/>
    </>
  )
}

export default App;
