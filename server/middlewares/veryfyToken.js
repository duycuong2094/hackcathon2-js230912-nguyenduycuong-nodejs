const jwt = require("jsonwebtoken");
const veryfyToken = (res, req, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
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
        } else {
          return res.status(403).json({ message: "token khong hop le" });
        }
      }
      if (data.role != 1) {
        return res.status(403).json({
          message: "Bạn không có quyền làm việc này",
        });
      }
      next();
    });
  } catch (err) {
    return res.status(500).json({message:"severError"})
  }
};
module.exports={veryfyToken}
