import '../CSS/Card.css';

const Card = ({prompt, response, id}) => {
  return (
    <div className='card'>
      <h3>{prompt}</h3>
      <p>{response}</p>
      <button>🗑</button>    
    </div>
  )
}
export default Card;
