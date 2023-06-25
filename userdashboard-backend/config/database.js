const mongoose=require("mongoose");
const connectDb=()=>{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log("functional db");
    })
}
module.exports=connectDb;