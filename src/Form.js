import './CSS/Form.css'
import { useState } from 'react';
  
const Form = (props) => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

    //  const submitPrompt = async (event) => {
    //   event.preventDefault();
    //   const result = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': "application/json",
    //     },
    //     body: JSON.stringify({food: prompt}),
    //   });
    //   const data = await response.json();
    //   setResponse(data.result);
    //   setPrompt('')
    // }

  return (
    <form>
      <input 
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