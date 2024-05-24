import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowTodo from '../components/ShowTodo'

function App() {
  const [todo, setTodo] = useState([])

  function addTodo(){
    
    setTodo([...todo,{todo:document.getElementById("todoinput").value}]);
    console.log(todo);
    document.getElementById("todoinput").value = "";

  }


  return (
    <>
      <input id='todoinput' placeholder='Enter Todo'/>
      <button onClick={addTodo}>Add</button>
      <ShowTodo todolist={todo} />
    </>
  )
}

export default App
