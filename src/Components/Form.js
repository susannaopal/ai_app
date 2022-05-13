import '../CSS/Form.css';
import { useState } from 'react';

const Form = (props) => {
  const [entry, setEntry] = useState('')

  //this function isn't working correctly
 const submitPrompt = event => {
    event.preventDefault();
    const addNewPrompt = {
      id: Date.now(),
      prompt
    }
    props.addPrompt(prompt);
    // clearInputs();
  }

  return (
    <form>
      <p>Enter prompt</p>
      <textarea
        type='text'
        name='entry'
        placeholder='Add prompt'
        value={entry}
        onChange={event => setEntry(event.target.value)}
      />
      <div>
        <button className='submit-btn' onClick={submitPrompt}>Submit</button>
      </div>
    </form>
  )
}



export default Form;