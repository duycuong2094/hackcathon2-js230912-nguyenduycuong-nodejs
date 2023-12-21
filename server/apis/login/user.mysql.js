const db=require("../../apis/config");
async function getListUser(userName){
    const [users]=await db.execute("select*from users where userName = ?",
    [userName]);
    return users[0]
}
module.exports={
    getListUser,
}