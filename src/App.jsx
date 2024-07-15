import { useEffect, useState } from 'react'

import './App.css'
function del(id,todos){
  let arr=[...todos]
  arr=arr.filter((i)=> i.id!=id);
  return arr;
}
let count=0;
function App() {
  const [Todo,setTodo]=useState("");
  const [Todos,setTodos]=useState([]);
  
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
        let arr=[...Todos,{"id":count,"task":Todo}];
        count++;
        setTodos(arr);
        console.log(count)
        setTodo("");

        }}>Add Todo</button>
      </div>
      <div>
        {
          Todos.map((i)=>{
            return <h1  onClick={()=>{
              setTodos(del(i.id,Todos))
            }}>{i.task}</h1>
          })
        }
      </div>
      
    </>
  )
}

export default App
