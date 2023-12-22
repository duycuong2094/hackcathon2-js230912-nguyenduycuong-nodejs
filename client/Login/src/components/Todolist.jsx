import React, { useEffect, useState } from 'react'
import "./todo.css"
import { Button } from '@mui/material'
import publicAxios from '../config/publicAxios';
import privateAxios from '../config/privateAxios';
function Todolist() {
    const [listTodo,setListTodo]=useState([]);
    const [todo,setTodo]=useState("");
    const [status,setStatus]=useState(false)
 const getAllTodo=async()=>{
const res=await publicAxios.get("/todo");
setListTodo([res.data.todo])
}
useEffect(()=>{
getAllTodo()
},[status])
const getValue =(e)=>{
    setTodo(e.target.value)
}
const handleClickAdd=async()=>{
let a={
    todo:todo
}
      try{
        const res=await privateAxios.post("/todo",a);
      }  catch(err){
        alert(err.response.data.message)
      }   
setStatus(!status);
setTodo("")
}
const handleDelete= async(id)=>{
    try{
        const res=await privateAxios.delete(`/todo/${id}`);
      }  catch(err){
        alert(err.response.data.message)
      }   
      setStatus(!status)
}
  return (
    <body>
        <div className="container">
  <div className="todo-app">
    <div className="app-title">
      <h2>To-do app</h2>
      <i className="fa-solid fa-book-bookmark" />
    </div>
    <div className="row">
      <input type="text" id="input-box" placeholder="add your tasks" name='todo' value={todo} onChange={getValue} />
      <Button onClick={handleClickAdd}>Add</Button>
    </div>
    <ul id="list-container">
      {listTodo.length==0?"":listTodo[0].map((item,i)=>(
        <li key={i}> {item.todo} <Button onClick={()=>handleDelete(item.id)}>xóa</Button></li>
      ))}
    </ul>
  </div>
</div>
    </body>
  )
}

export default Todolist