const jwt=require("jsonwebtoken");
const { getListUser } = require("./user.mysql");
async function login(req,res){
 const {userName,password}=req.body;
    const result=await getListUser(userName)
    if(!result){
        return res.status(404).json({
            message:"Ten dang nhap khong ton tai"
        })
    }
    if(result.password!=password){
        return res.status(400).json({
            message:"Sai mat khau"
        });
    }
    const token=jwt.sign(
        {id:result.id,role:result.role},
        "baomat"
    )
    res.status(200).json({
        message:"Dang nhap thanh cong",
        token
    })

}
module.exports={
    login
}