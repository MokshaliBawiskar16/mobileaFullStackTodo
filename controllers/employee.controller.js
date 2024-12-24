const asyncHandler=require("express-async-handler") // to avoid try catch
const Todo = require("../models/Todo")

exports.readEmployeeTodo=asyncHandler(async(req,res)=>{
                                            //👇 middle ware se aaya konsa login hai wo uska id 
    const result=await Todo.find({employee:req.employee})
                                // 👆table me ki key
    res.json({message:"todo fetch success",result})
})
exports.completeEmployeeTodo=asyncHandler(async(req,res)=>{
  await Todo.findByIdAndUpdate(req.params.tid,{isComplete:true})
  res.json({message:"todo complete success"})

})