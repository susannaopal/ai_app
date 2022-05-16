import './CSS/Form.css'
import { useState } from 'react';
import Card from './Card';
import { fetchPromptedResponse } from './apiCall';


  
const Form = (props) => {
  const [prompt, setPrompt] = useState('')
  // const [response, setResponse] = useState('')

//need error handling
//need to display more recent first? 

  const submitPrompt = (event) => {
    event.preventDefault();
  
    const newPrompt = {
    id: Date.now(),
    prompt
    // ,
    // response
    }
    props.addPrompt(newPrompt); 
    // console.log(newPrompt, "is this working?")
    clearInputs(); 
    }
    
   const clearInputs = () => {
    setPrompt('')
    // setResponse('')
  }

  return (
    <form>
      <textarea 
        type='text'
        name='prompt'
        placeholder='prompt'
        value={prompt}
        onChange={event => setPrompt(event.target.value)}
      />
      <button onClick={submitPrompt}>SUBMIT</button>
    </form>
  )
}


export default Form;