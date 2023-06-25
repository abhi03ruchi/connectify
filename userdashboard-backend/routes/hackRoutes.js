const express=require("express");
const { addHack, addTeam, displayhacks, addachievements } = require("../controllers/hackathonController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/addhack").post(isAuthenticated,addHack);
router.route("/displayhacks").get(isAuthenticated,displayhacks);
router.route("/addachievement/:id").put(isAuthenticated,addachievements);
router.route("/addteam/:id").put(isAuthenticated,addTeam);
module.exports=router;