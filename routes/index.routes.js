const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const authRoutes = require("./auth.routes");
const isLoggedOut = require("../middlewares/isLoggedOut");
const User = require("../models/User.model");
//const Habit = require("../models/Habit.model");
const bcryptjs = require("bcryptjs");
const uploader = require("../middlewares/cloudinary.config.js");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// const helpers = require('../utils/helpers.js');

/* GET home page */
router.get("/", (req, res, next) => {
  // const currentTime = getCurrentTime();
  // console.log(currentTime)
  if (req.session.user) {
    res.render("index", { user: req.session.user });
  } else {
    res.render("index");
  }
});

router.use("/auth", authRoutes);

router.get("/messages", isLoggedIn, async (req, res, next) => {
  try{
    const user = await User.findById(req.session.user.userId)
    res.send("Your recent messages" + user.username);
  }catch(err){
    console.log(err)
    next(err)
  }
 
});

router.get("/profile", isLoggedIn, async (req, res, next) => {
  try{
    const user = await User.findById(req.session.user.userId).populate("habit");
  
  
    res.render("profile", {
      userName: user.username,
      userImage: user.userImage,
      habits: user.habit,
    });
  }catch(err){
    console.log(err)
    next(err)
  }
  
  
});
router.get("/profile/settings", isLoggedIn, async (req, res) => {
  try {
    console.log(
      "this is the route that renders profile/settings. Edit it in order to update user!"
    );
    const user = await User.findOne({ username: req.session.user.username });
    res.render("settings", { user });
  } catch (err) {
    console.error("There was an error", err);
  }
});
router.post(
  "/accountEdit/:userId",
  isLoggedIn,
  uploader.single("userImage"),
  async (req, res) => {
    try {
      const userId = req.session.user.userId;
      const { username, email } = req.body;

      const userUpdated = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      /*const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hash(req.body.password, salt);*/
      const { password } = req.body;

      const passwordUpdate = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });

      const { userImage } = req.file.filename;
      const userImageUpdated = await User.findByIdAndUpdate(
        userId,
        req.file.filename,
        { new: true }
      );

      req.session.user = {
        userId: user
      };

      res.redirect("/profile");
    } catch (err) {
      console.error("There was an error", err);
    }
  }
);

router.get("/habits", (req, res, next) => {
  res.render("habits");
});

module.exports = router;
