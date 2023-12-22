const db = require("../../apis/config")
async function getTodo(){
    const [result] = await db.execute("select * from todolist");
    return result;
}
async function addTodo(todo){
    const [result]=await db.execute("insert into todolist(todo) values(?)",[todo.todo])
}
async function deleTodos(id){
    const [result]=await db.execute("DELETE FROM todolist WHERE id = ?",[id])
}
module.exports={
    getTodo,
    addTodo,deleTodos
}