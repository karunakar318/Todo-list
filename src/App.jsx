import { useState } from 'react'

import './App.css'

function App() {
  const [Todo,setTodo]=useState("");
  const [Todos,setTodos]=useState([])

  return (
    <>
      <div>
        
        <input className='' type='text' placeholder='Enter Todo task' value={Todo} onChange={(e)=>{
          setTodo(e.target.value);
          console.log(Todo);
        }}/>
        <button className='bg-[#1da1f2]' onClick={()=>{
        if(Todo===""){
          return;
        }
        let arr=[...Todos,Todo];
        setTodos(arr);
        console.log(Todos+","+Todo)
        setTodo("");

        }}>Add Todo</button>
      </div>
      <div>
        {
          Todos.map((i)=>{
            return <h1>{i}</h1>
          })
        }
      </div>
      
    </>
  )
}

export default App
