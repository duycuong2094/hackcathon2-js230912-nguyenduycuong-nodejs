const jwt = require("jsonwebtoken");
const veryfyToken = (req, res, next) => {
    // console.log("111111111111111");
  try {
    const token = req.headers.authorization?.split(" ")[1];
    //  console.log("111111",token);
    if (!token) {
      return res.status(401).json({
        message: "khong tim thay token",
      });
    }
    jwt.verify(token, "baomat", (err, data) => {
      if (err) {
        if (err.name == "TokenExpiredError") {
          return res.status(401).json({
            message: "token đã hết hạn",
          });
        } 
      }
      else {
        console.log("11111777",data);
        if (data.role != 1) {
            
            return res.status(403).json({
              message: "Bạn không có quyền làm việc này",
            });
          }
    }
     
      next();
    });
  } catch (err) {
    // console.log("888888888888");
    return res.status(500).json({message:"severError"})
  }
};
module.exports={veryfyToken}
