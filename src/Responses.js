import React from 'react';
import Card from './Card.js';
import './CSS/Responses.css'


const Responses = ({responses, removePrompts}) => {
  const promptCard = responses.map((response, index) => {
    return (
      <div className='responses-container'>
        <Card 
          key={index}
          id={response.id}
          prompt={response.prompt.prompt}
          result={response.result}
          removePrompts={removePrompts}
        />
      </div>
    )
  })
  return (
    <>
      {promptCard}
    </>
  )
}

export default Responses;