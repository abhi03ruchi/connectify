const mongoose=require("mongoose");
const hackathonSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    achievements:{
        type:String
    },
    teammates:{
        type:[String]
    }
})
module.exports=mongoose.model("Hackathon",hackathonSchema);