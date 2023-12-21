const{getallTodo}=require("../todo/todo.controller")
const todoRouter=(app)=>{
    app.get("/todo",getallTodo)
}
module.exports={todoRouter}