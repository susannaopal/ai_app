import { useState } from 'react';
import '../CSS/Form.css';

const Form = ({ addPrompt }) => {
  const [prompt, setPrompt] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addPrompt(prompt)
        setPrompt('');
      }}>
      <textarea className='text-area'
        type='text'
        name='prompt'
        placeholder='Enter your prompt...⬇'
        value={prompt}
        onChange={event => setPrompt(event.target.value)}
      />
      <div className='btn-div'>
        <button className='submit-btn'>Submit</button>
      </div>
    </form>
  )
}


     
export default Form;