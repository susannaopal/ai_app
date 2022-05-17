import './CSS/Card.css'

import React from 'react';

const Card = ({id, prompt, result, removePrompts}) => {
  return (
    <>
      <label htmlFor='prompt-tag'>PROMPT:</label>
        <h3>{prompt}</h3>
      <label htmlFor='result-tag'>Response:</label>
        <h4>{result}</h4>
      <button onClick={() => removePrompts(id)}>REMOVE</button>
    </>
  )
}

export default Card;