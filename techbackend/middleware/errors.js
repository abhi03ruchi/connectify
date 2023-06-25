module.exports=(err,req,res,next)=>{
    err.message=err.message||"Internal Server Error";
    err.statusCode=err.statusCode||500;
    res.status(err.statusCode).json({
        success:false,
        err:err.message
    })
}