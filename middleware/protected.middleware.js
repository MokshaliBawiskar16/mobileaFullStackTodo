const asyncHandler=require("express-async-handler") // to avoid try catch
const jwt=require("jsonwebtoken")
exports.adminProtected=asyncHandler(async(req,res,next)=>{
    const token= req.cookies["todo-admin"]
    if (!token) {
        res.status(401).json({message:"no cookie found"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if (err) {
            console.log(err);
            res.status(401).json({message:"invalid token"})
        }
        req.admin=decode._id
        next()
    })
})
exports.employeeProtected=asyncHandler(async(req,res,next)=>{
    const token= req.cookies["todo-employee"]
    if (!token) {
        res.status(401).json({message:"no cookie found"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
                                                //👆 jo jwt crete kartana id oathwla to decode madhe yaile
        if (err) {
            console.log(err);
            res.status(401).json({message:"invalid token"})
        }
        req.employee=decode._id
        next()
    })
})