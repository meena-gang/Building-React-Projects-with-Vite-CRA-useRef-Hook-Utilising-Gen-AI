import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Input.jsx'
import Input from './Input.jsx'
import Comp from './Comp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Input />
    <Comp />
  </React.StrictMode>,
)
