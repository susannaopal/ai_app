import './CSS/Form.css'
import { useState } from 'react';
import { fetchPromptedResponse } from './apiCall'

  
const Form = (props) => {
  const [prompt, setPrompt] = useState('')

  const submitPrompt = (event) => {
    event.preventDefault();
    console.log("are you working?")
    const newPrompt = {
    id: Date.now(),
    prompt
    }
    props.addPrompt(newPrompt); 
    clearInputs(); 
    }
    
   const clearInputs = () => {
    setPrompt('')
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