import '../CSS/App.css';
import {useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import ResponsesContainer from './ResponsesContainer';
// import { Configuration, OpenAIApi } from "openai";

// import { fetchPrompt } from './apiCall'

// const API_KEY = process.env.REACT_APP_API_KEY  
// const API_URL = process.env.REACT_APP_API_KEY 

const App = () => {
  const [prompts, setResponse] = useState([])


  //MAIN ISSUE: accessing API data correctly and ensuring that both the prompt and the response will be returned
  //note: when 
  
// const useEffect = (() => {
//    fetchPrompt()
//  }, [])

  const addPrompt = (newPrompt) => {
    setResponse([...prompts, newPrompt])
    addPrompt(newPrompt)
  }

  return (
    <>
      <Header />
      <Form addPrompt={addPrompt}/>
      <ResponsesContainer prompts={prompts}/>
    </>
  )
}

export default App;


