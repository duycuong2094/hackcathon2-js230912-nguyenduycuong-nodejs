var express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser")
const {usersRouter}=require("./apis/router/user.router");
const { todoRouter } = require("./apis/router/todo.router");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
usersRouter(app)
todoRouter(app)
app.listen(8000,()=>{
    console.log("dang chay o 8000");
})
