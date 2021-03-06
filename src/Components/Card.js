import '../CSS/Card.css'

const Card = ({id, prompt, result, removePrompts}) => {
  return (
    <div className='card'>
      <h3>Prompt: {prompt}</h3>
      <h4>Response: {result}</h4>
      <button onClick={() => removePrompts(id)}>🆇</button>
    </div>
  )
};

export default Card;