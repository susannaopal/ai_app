import React from 'react';
import Card from './Card.js';
import './CSS/Responses.css'


const Responses = ({prompts, removePrompts}) => {
  const promptCard = prompts.map((prompt, index) => {
    return (
      <>
        <Card 
          id={prompt.id}
          key={index}
          prompt={prompt.prompt}
          removePrompts={removePrompts}
        />
      </>
    )
  })
  return (
    <>
      {promptCard}
    </>
  )
}

export default Responses;