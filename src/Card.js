import './CSS/Card.css'

import React from 'react';

const Card = ({id, prompt, removePrompts}) => {
  return (
    <>
      <h1>{prompt}</h1>
      <button onClick={() => removePrompts(id)}>REMOVE</button>
    </>
  )
}

export default Card;