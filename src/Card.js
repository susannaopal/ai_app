import './CSS/Card.css'

import React from 'react';

const Card = ({id, prompt, response, removePrompts}) => {
  return (
    <>
      <h1>{prompt}</h1>
      <h2>{response}</h2>
      <button onClick={() => removePrompts(id)}>REMOVE</button>
    </>
  )
}

export default Card;