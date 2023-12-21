const mysql=require("mysql2");
const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"hackcathon"
});
const database=pool.promise();
module.exports=database;