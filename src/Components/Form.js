import '../CSS/Form.css';

const Form = () => {
  return (
    <form>
      <p>Enter prompt</p>
      <textarea></textarea>
      <div>
        <button className='submit-btn'>Submit</button>
      </div>
    </form>
  )
}

export default Form;