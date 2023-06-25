const { templateSettings } = require("lodash");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Hackathon=require("../models/hackathonModel");
const User=require("../models/userModel");

exports.addHack=catchAsyncErrors(async(req,res,next)=>{
    const{date,title}=req.body;
    const hack=await Hackathon.create({
        user:req.user._id,
        date:date,
        title:title
    });
    console.log(hack._id);
    const user=await User.findByIdAndUpdate({_id:req.user._id},{$push:{hackathons:hack._id}},{new:true})
    user.save();
console.log(user);


    res.status(200).json({
        result:hack,
        success:true
    })
})
exports.addTeam=catchAsyncErrors(async(req,res,next)=>{
    const {arr}=req.body;
    const hackathon=await Hackathon.findByIdAndUpdate(req.params.id,{$push:{teammates:arr}},{new:true})
    hackathon.save();
    res.status(200).json({
        hack:hackathon,
        result:true
    })
})
exports.displayhacks=catchAsyncErrors(async(req,res,next)=>{
    const hacks=await Hackathon.find({user:req.user._id});
    res.status(200).json({
        hacks:hacks,
        success:true
    })
})

exports.addachievements=catchAsyncErrors(async(req,res,next)=>{
    const{achievement}=req.body;
    const hack=await Hackathon.findByIdAndUpdate(req.params.id,{achievements:achievement},{new:true});
    hack.save();
    console.log(hack);
    res.status(200).json({
        hack:hack,
        success:true
    })

})