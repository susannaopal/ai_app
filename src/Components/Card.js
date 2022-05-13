import '../CSS/Card.css';

const Card = ({prompt, response, id}) => {
  return (
    //Everything on card currently bold, need to sort that so the response ISN'T!
    <div className='card'>
      <p className='p-tag'>Prompt: {prompt}</p>
      <p className='p-tag'>Resonse: {response}</p>
      <button>🗑</button>    
    </div>
  )
}
export default Card;
