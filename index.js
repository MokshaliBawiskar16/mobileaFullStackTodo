const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const cookiparser=require("cookie-parser")
const { adminProtected } = require("./middleware/protected.middleware")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cookiparser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",require("./routes/auth.route"))
app.use("/api/admin",adminProtected,require("./routes/admin.route"))
app.use("/api/employee",require("./routes/employee.route"))
app.use("*",(req,res)=>{
    res.status(404).json({message:"resourse not found"})
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",()=>{
    console.log("monfo connect");
    app.listen(process.env.PORT,console.log("server running"))
    
})