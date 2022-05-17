import { useState } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'
import { fetchPromptedResponse } from './apiCall'

const App = () => {
  const [prompts, setPrompts] = useState('');
  const [responses, setResponse] = useState([]);
  const [searchPhrase, setSearchPhrase] =('');
  const [filteredPrompts, setfilteredPrompts] = ([]);
 
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

  const handleChange = (event) => {
    event.preventDefault();
    setSearchPhrase(event.target.value)
    searchPrompts()
  }

  const searchPrompts = (searchPhrase) => {
    const filteredPrompts= responses.filter(response => {
      const lowerCasePrompt = response.toLowerCase();
      return lowerCasePrompt.includes(searchPhrase.toLowerCase())
    })
    setfilteredPrompts({filteredPrompts})
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
      <div className='filter-div'>
          <input className='input-field' type='text' name='searchPhrase' value={searchPhrase} placeholder='Search Prompts' onChange={event => handleChange(event)}/>
          
        </div>
      <Response responses={responses} removePrompts={removePrompts}/>
    </>
  )
}
// onChange={event => setSearchPhrase(event.target.value)} />

export default App;
