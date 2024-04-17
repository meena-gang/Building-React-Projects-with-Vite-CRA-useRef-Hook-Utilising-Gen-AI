import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[todos, setTodos] = useState([]);
        function addTodoHandler(e){
            e.preventDefault();
            setTodos([...todos, e.target[0].value ]);
            e.target[0].value = '';

        }
        
        function deleteHandler(i){
          console.log('xyz');
          const newTodos = [...todos];
          newTodos.splice(i,1);
          setTodos(newTodos);
        }
        

  return (
    <>
      <form onSubmit={addTodoHandler}  style={{textAlign : "center"}}>
                    <input type="text" placeholder = "Add new todo"/>
                    <input type="submit"/>
      </form>
      <ul style={{listStyle : "none"}}>
                {todos.map((item,i) =>
                          <li key = {i}>{item} 
                            <input type = "checkbox" style = {{width:"15px", height:"15px"}}/> 
                            <button onClick={() => deleteHandler(i)}>Delete</button></li>
                          )}
      </ul>
    </>
  )
}

export default App
// Vite is a modern, fast build tool for web projects, including React applications. It serves as an alternative to older tools like Webpack. 
// The main advantage of Vite is its speed, primarily because it leverages modern JavaScript features and avoids unnecessary work during development.