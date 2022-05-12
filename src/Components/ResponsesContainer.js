import '../CSS/ResponsesContainer.css';
import Card from './Card'

const ResponsesContainer = ( {prompts} ) => {
  const responseCards = prompts.map((prompt, index) => {
    return (
      <Card 
        prompt={prompt.prompt}
        response={prompt.response}
        key={index}
        id={prompt.id}
      />
    )
  })
  return (
    <>
      <h2>Responses</h2>
      <div className='responses-container'>
        {responseCards}
      </div>
    </>
  )
}

export default ResponsesContainer;