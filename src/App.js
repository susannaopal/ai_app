import React, { useState, useEffect } from 'react';
import Response from './Responses.js';
import Form from './Form.js';
import './CSS/App.css'
// import { postIdea } from './apiCall';

const App = () => {
  const [prompts, setPrompts] = useState([]);

//  const getIdeas = async () => {
//     const url = 'http://localhost:3001/ideas'
//     // setError('')

//     try {
//       const response = await fetch(url)
//       const ideas = await response.json()
//       setIdeas(ideas)
//     } catch(error) {
//       console.log('something went wrong', error)
//       // setError(error.message)
//     }
//   }

  // useEffect(() => {
  //   getIdeas()
  // }, [])

  const addPrompt = (newPrompt) => {
    setPrompts([...prompts, newPrompt])
    // postPrompt(newPrompt)
  }

  const removePrompts = (id) => {
    const filteredPrompts = prompts.filter(prompt => prompt.id !== id)
    
    setPrompts(filteredPrompts)
  }

  return (
    <>
      <h1></h1>
      <Form addPrompt={addPrompt}/>
      <Response prompts={prompts} removePrompts={removePrompts}/>
    </>
  )
}


export default App;
