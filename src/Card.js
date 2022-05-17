import './CSS/Card.css'

import React from 'react';

const Card = ({id, prompt, result, removePrompts}) => {
  return (
    <>
      <h1>{prompt}</h1>
      <h2>{result}</h2>
      <button onClick={() => removePrompts(id)}>REMOVE</button>
    </>
  )
}

export default Card;