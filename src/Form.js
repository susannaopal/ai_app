import './CSS/Form.css'
import { useState } from 'react';


  
const Form = (props) => {
  const [prompt, setPrompt] = useState('')
  
  const submitPrompt = (event) => {
    event.preventDefault();
    const newPrompt = {
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