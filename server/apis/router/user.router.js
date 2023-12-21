const {login}=require("../login/user.controller")
const usersRouter=(app)=>{
    app.post("/user/login",login)
}
module.exports={
    usersRouter
}