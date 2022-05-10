import './App.css';
import {useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import ResponsesContainer from './Components/ResponsesContainer';


// const API_KEY = process.env.REACT_APP_API_KEY  
// const API_URL = 

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <ResponsesContainer />
    </>
  )
}

export default App;
