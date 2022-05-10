import './App.css';
import {useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import ResponsesContainer from './Components/ResponsesContainer';


// const API_KEY = process.env.REACT_APP_API_KEY  
// const API_URL = 
const App = () => {
  const [prompts, setResponse] = useState([{prompt: 'this is the prompt', response: 'this is my response'}])
  
 const useEffect = (() => {
  //  setResponse()
 }, [])

  return (
    <>
      <Header />
      <Form />
      <ResponsesContainer prompts={prompts}/>
    </>
  )
}

export default App;
