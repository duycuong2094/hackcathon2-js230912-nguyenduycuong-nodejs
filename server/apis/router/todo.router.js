const { veryfyToken } = require("../../middlewares/veryfyToken")
const{getallTodo, addTodos, deleTodo}=require("../todo/todo.controller")
const { deleTodos } = require("../todo/todo.mysql")
const todoRouter=(app)=>{
    app.get("/todo",getallTodo)
    app.post("/todo",veryfyToken,addTodos)
    app.delete("/todo/:id",veryfyToken,deleTodo)

}
module.exports={todoRouter}