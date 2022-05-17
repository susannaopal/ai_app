import './CSS/Card.css'

import React from 'react';

const Card = ({id, prompt, result, removePrompts}) => {
  return (
    <>
      <h3>Prompt: {prompt}</h3>
      <h4>Response: {result}</h4>
      <button onClick={() => removePrompts(id)}>REMOVE</button>
    </>
  )
}

export default Card;