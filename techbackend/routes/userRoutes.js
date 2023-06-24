const express=require("express");
const { signup, sigin } = require("../controllers/userController");
const router=express.Router();
router.route("/signup").post(signup);
router.route("/signin").post(sigin);
module.exports=router;