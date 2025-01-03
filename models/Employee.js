const mongoose=require("mongoose")

const employeeSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isactive:{type:Boolean,default:true},
},{timestamps:true})

module.exports=mongoose.model("Employee",employeeSchema)