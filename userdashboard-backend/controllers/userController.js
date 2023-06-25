const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

exports.signup=catchAsyncErrors(async(req,res,next)=>{
    const{name,email,password}=req.body;
    const user=await User.create({
        name:name,
        email:email,
        password:password
    })
    sendToken(user,200,res);
})
exports.sigin=catchAsyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email:email});
    if(!user)
    {
        return next(new ErrorHandler("User Not Found",404));
    }
    const match=await user.comparePassword(password);
    if(!match)
    {
        return next(new ErrorHandler("Invalid Password",401));
    }
    sendToken(user,200,res);
})