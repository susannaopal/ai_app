import { useState } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'
import { fetchPromptedResponse } from './apiCall'

const App = () => {
  const [prompts, setPrompts] = useState('');
  const [responses, setResponse] = useState([]);
 
  const addPrompt = (prompt) => {
    setPrompts(prompt)
    fetchPromptedResponse(prompts)
    .then(data => setResponse([ 
      {
        prompt: prompt, 
        result: data.choices[0].text
      }, ...responses
    ]))
  }

  const removePrompts = (id) => {
    const filteredPrompts = responses.filter(response => response.id !== id)
    setResponse(filteredPrompts)
  }

  return (
    <div className='App'>
      <h1 className='title'>✨Fun with AI✨</h1>
      <div className='add-prompt-div'>
        {!responses.length && <p>Please add a prompt to get started...</p>}
      </div>
      <Form addPrompt={addPrompt}/>
      <Response responses={responses} removePrompts={removePrompts}/>
    </div>
  )
}

export default App;
