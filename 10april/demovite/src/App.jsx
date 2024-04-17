import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputField = useRef(null);
  useEffect(() => inputField.current.focus())

  return (
    <>
      <input ref={inputField}/>
    </>
  )
}

export default App
