const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const authRoutes = require("./auth.routes");
const isLoggedOut = require("../middlewares/isLoggedOut");
const User = require("../models/User.model");
//const Habit = require("../models/Habit.model");
const bcryptjs = require("bcryptjs");
const uploader = require('../middlewares/cloudinary.config.js');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// const helpers = require('../utils/helpers.js');


/* GET home page */
router.get("/", (req, res, next) => {
  // const currentTime = getCurrentTime();
  // console.log(currentTime)
  if(req.session.user){
    res.render("index",{user: req.session.user});
  }else{
    res.render("index");
  }
});

router.use("/auth", authRoutes);

router.get("/messages", isLoggedIn, (req, res) => {
  res.send("Your recent messages" + req.session.user.username);
});



router.get("/profile", isLoggedIn, async(req, res) => {
  
  const user = await User.findOne({ username: req.session.user.username }).populate('habit');


    console.log("hello this is the user data", user)
   
  res.render("profile", { userName: req.session.user.username,   userImage: user.userImage, habits: user.habit});
  
});
router.get("/profile/settings", isLoggedIn, async(req,res) => {
  try{
    console.log("this is the route that renders profile/settings. Edit it in order to update user!")
    const user = await User.findOne({username: req.session.user.username})
  res.render("settings", {user});
  }catch(err){
    console.error("There was an error", err);
  }
});
router.post("/accountEdit/:userId", isLoggedIn,  async (req, res) => {
  try {
    const userId = req.params.userId;
    const {username, email} = req.body

    const userUpdated = await User.findByIdAndUpdate(userId, req.body,  {
      new: true,
    })
    req.session.user = {
      username: username,
      email: email
     
      
  }
    res.redirect("/profile")
  } catch (err) {
    console.error("There was an error", err);
  }
});

router.get("/habits", (req, res, next) => {
  res.render("habits");
});


module.exports = router;
