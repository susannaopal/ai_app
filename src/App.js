import React, { useState, useEffect } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'

const App = () => {
  const [prompts, setPrompts] = useState([]);


  const addPrompt = (newPrompt) => {
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
