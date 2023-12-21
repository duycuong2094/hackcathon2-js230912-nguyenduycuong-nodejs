const db = require("../../apis/config")
async function getTodo(){
    const [result] = await db.execute("select * from todo");
    return result;
}
async function addTodo(nameTodo){
        const [result]=await db.execute("insert into ")
}
module.exports={
    getTodo
}