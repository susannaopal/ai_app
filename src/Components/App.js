import '../CSS/App.css';
import {useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import ResponsesContainer from './ResponsesContainer';
import { fetchPrompt } from './apiCall'

const API_KEY = process.env.REACT_APP_API_KEY  
const API_URL = process.env.REACT_APP_API_KEY  

const App = () => {
  const [prompts, setResponse] = useState([])
  
 const useEffect = (() => {
  fetchPrompt()
   .then(data => console.log(data))
   .then(data => setResponse(data))
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
