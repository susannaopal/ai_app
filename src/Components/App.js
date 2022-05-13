import '../CSS/App.css';
import {useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import ResponsesContainer from './ResponsesContainer';
// import { fetchPrompt } from './apiCall'

// const API_KEY = process.env.REACT_APP_API_KEY  
// const API_URL = 
const App = () => {
  const [prompts, setResponse] = useState([{id: 1, prompt: 'this is the prompt', response: 'this is my response'}, {id: 2, prompt: 'gideon steals cat food', response: 'because he is a fatty'}])
  
//  const useEffect = (() => {
//   // fetchPrompt()
//  }, [])

  return (
    <>
      <Header />
      <Form />
      <ResponsesContainer prompts={prompts}/>
    </>
  )
}

export default App;
