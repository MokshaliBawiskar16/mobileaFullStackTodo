const { readEmployeeTodo, completeEmployeeTodo, readEmployeecompleteTodo } = require("../controllers/employee.controller")

const router=require("express").Router()

router
.get("/read/todos",readEmployeeTodo)
.put("/update/todo/:tid",completeEmployeeTodo)
.get("/read/completetodo",readEmployeecompleteTodo)



module.exports=router