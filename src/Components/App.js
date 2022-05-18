import { useState } from 'react';
import { fetchPromptedResponse } from '../apiCall';
import Responses from './Responses';
import Form from './Form';
import '../CSS/App.css';

const App = () => {
  const [prompts, setPrompts] = useState('');
  const [responses, setResponse] = useState([]);
 
  const addPrompt = (prompt) => {
    setPrompts(prompt)
    fetchPromptedResponse(prompts)
    .then(data => setResponse([ 
      {
        id: data.id,
        prompt: prompt, 
        result: data.choices[0].text
      }, ...responses]))
  }

  const removePrompts = (id) => {
    const filteredPrompts = responses.filter(response => response.id !== id)
    setResponse(filteredPrompts)
  }

  return (
    <div className='App'>
      <h1 className='title'>✨Fun with AI✨</h1>
      <div className='add-prompt-div'>
      </div>
      <Form addPrompt={addPrompt}/>
        {!responses.length && <p className='add-p-tag'>No prompts yet -- add one!</p>}
      <h2>Responses:</h2>
      <Responses responses={responses} removePrompts={removePrompts}/>
    </div>
  )
}

export default App;
