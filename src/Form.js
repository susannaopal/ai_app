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
      setPrompt('')
    }

  return (
    <form>
      <textarea className='text-area'
        type='text'
        name='prompt'
        placeholder='Enter your prompt...⬇'
        value={prompt}
        onChange={event => setPrompt(event.target.value)}
      />
      <div className='btn-div'>
         <button className='submit-btn' onClick={submitPrompt}>SUBMIT</button>
      </div>
    </form>
  )
}


export default Form;