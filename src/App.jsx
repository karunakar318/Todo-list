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
    <div className='w-1/2 border-4 border-indigo-500/75'>
      <div>
        <p>To -Do list</p>
      </div>
      <div className='flex flex-row justify-between '>
        
        <input className='w-1/4' type='text' placeholder='Enter Todo task' value={Todo} onChange={(e)=>{
          setTodo(e.target.value);
        }}/>
        <button className='bg-[#1da1f2]' onClick={()=>{
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
      <div >
        {
          Todos.map((i)=>{
            return <div className='flex flex-row justify-between ' key={i.id}><p>{i.task}</p><button className='bg-[#1e293b] ' onClick={()=>{
              setTodos(del(i.id,Todos))
            }}>Done</button></div>
          })
        }
        <p className='text-red-600'>{Isempty}</p>
      </div>
      </div>
    </>
  )
}

export default App
