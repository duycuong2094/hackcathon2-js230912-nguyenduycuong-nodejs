import React, { useState } from 'react'
import "./todo.css"
import { Button } from '@mui/material'
import publicAxios from '../config/publicAxios';
function Todolist() {
    const [listTodo,setListTodo]=useState([]);
    const [todo,setTodo]=useState("");
 async function getAllTodo(){
const res=await publicAxios.get("/todo")
setTodo(res.data.todo)
}
console.log(todo);
  return (
    <body>
        <div className="container">
  <div className="todo-app">
    <div className="app-title">
      <h2>To-do app</h2>
      <i className="fa-solid fa-book-bookmark" />
    </div>
    <div className="row">
      <input type="text" id="input-box" placeholder="add your tasks" name='todo' value={todo} />
      <Button>Add</Button>
    </div>
    <ul id="list-container">
        <li>jaa<Button>Sửa</Button> <Button>Xóa</Button></li>
        <li>jaa<Button>Sửa</Button> <Button>Xóa</Button></li>
    </ul>
  </div>
</div>
    </body>
  )
}

export default Todolist