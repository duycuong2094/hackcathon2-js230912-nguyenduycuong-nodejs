const {getTodo, addTodo, deleTodos}=require("./todo.mysql")

async function getallTodo(req,res){
    const result= await getTodo();
    res.status(200).json({
        messager:"lấy thành công",
        todo:result
    })
}
async function addTodos(req,res){
    console.log("123",req.body);
    const result=await addTodo(req.body)
    res.status(200).json({
        messager:"Thêm thành công"
    })
}
async function deleTodo(req,res){
    const result=await deleTodos(req.params.id)
    res.status(200).json({
        messager:"Thêm thành công"
    })
}
module.exports={
    getallTodo,
    addTodos,deleTodo
}