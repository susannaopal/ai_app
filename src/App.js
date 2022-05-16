import { useState, useEffect } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'
import { fetchPromptedResponse } from './apiCall'

const App = () => {
  const [prompts, setPrompts] = useState([]);
  //error state
  //loader

  // useEffect((newPrompt) => {
  //   fetchPromptedResponse(newPrompt)
  //   .then(data => console.log(data))
  //   // .then(data => setPrompts(data))
  // }, [])

  const addPrompt = (newPrompt) => {
    fetchPromptedResponse(newPrompt)
   setPrompts([...prompts, newPrompt])
  }

  const removePrompts = (id) => {
    const filteredPrompts = prompts.filter(prompt => prompt.id !== id)
    setPrompts(filteredPrompts)
  }

  return (
    <>
      <h1>Open ai</h1>
      <Form addPrompt={addPrompt}/>
      <Response prompts={prompts} removePrompts={removePrompts}/>
    </>
  )
}


export default App;
