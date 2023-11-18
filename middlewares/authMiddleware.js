const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')


//Check Authorization Token Key
const authMiddleware = asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        try{
            if(token){
                const decode = jwt.verify(token,process.env.JWT_SECRET)
                //console.log(decode)
                const user = await User.findById(decode.id)
                req.user = user;
                next()
            }
        }catch{
            throw new Error('Not Authorized Token Expired, Please login again')
        }
    }else{
        throw new Error('There is no Token Attached to headers')
    }
})

//Check if Admin or Not
const isAdmin = asyncHandler(async(req,res,next)=>{
    const {email} = req.user
    const adminuser = await User.findOne({email})
    if(adminuser.role !== "admin"){
        throw new Error('You are not an Admin')
    }else{
        next()
    }
})

module.exports = {
    authMiddleware , isAdmin
}