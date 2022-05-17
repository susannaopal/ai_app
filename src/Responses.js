import React from 'react';
import Card from './Card.js';
import './CSS/Responses.css'


const Responses = ({responses, removePrompts}) => {
  const promptCard = responses.map((response, index) => {
    return (
      <>
        <Card 
          key={index}
          id={response.id}
          prompt={response.prompt.prompt}
          result={response.result}
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