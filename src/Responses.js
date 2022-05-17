import React from 'react';
import Card from './Card.js';
import './CSS/Responses.css'


const Responses = ({prompts, removePrompts}) => {
  const promptCard = prompts.map((prompt, index) => {
    return (
      <>
        <Card 
          key={index}
          id={prompt.id}
          prompt={prompt.prompt}
          Response={prompt.Response}
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