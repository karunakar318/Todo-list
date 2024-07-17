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
  const [Isempty,setIsempty]=useState("");
  return (
    <>
    <div className='container'>
      <div className="header">
        <h1 className="head">
          To-Do List
        </h1>
      </div>
      <div className='input'>
        
        <input type='text' placeholder='Enter Todo task' value={Todo} onChange={(e)=>{
          setTodo(e.target.value);
        }}/>
        <button className='button' onClick={()=>{
        if(Todo===""){
          setIsempty("Please enter a todo to get started")
          return ;
        }
        let arr=[...Todos,{"id":count,"task":Todo}];
        count++;
        setTodos(arr);
        setTodo("");
        setIsempty("")
        }}>Add Todo</button>

      </div>
      <div className='tasks'>
        {
          Todos.map((i)=>{
            return <div  className='task' key={i.id}><p>{i.task}</p><button className='button' onClick={()=>{
              setTodos(del(i.id,Todos))
            }} >Done</button></div>
          })
        }
        <p className='text-red-600'>{Isempty}</p>
      </div>
      </div>
    </>
  )
}

export default App
