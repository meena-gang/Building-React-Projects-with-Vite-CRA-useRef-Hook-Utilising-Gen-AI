import { useRef, useState } from 'react';
import './App.css';
import FormValidation from './FormValidation';
import CustomSubmitForm from './CustomSubmitForm';

function App() {
  
  const name = useRef(null);
  const email = useRef(null);
  
  
  
  return (
    <>
      <input  placeholder='Enter your name' ref={name} />
      <input  placeholder='Enter your email' ref={email} />
      <button onClick={() => name.current.focus()}>Focus input 1</button>
      <button onClick={() => email.current.focus()}>Focus input 2</button>
      <br/>
      <br/>
      <FormValidation></FormValidation>
      <CustomSubmitForm></CustomSubmitForm>
    </>
  )
}

export default App;
