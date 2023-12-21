import { getTodo } from "./todo.mysql";

async function getallTodo(req,res){
    const result= await getTodo();
    res.status(200).json({
        messager:"lấy thành công",
        todo:result
    })
}
module.exports={
    getallTodo
}