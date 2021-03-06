const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("config");
const User = require("../../models/User");

// @route   GET ./api/users/
// @desc    get club members
// @access  public
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).select("-password").sort({
      date: 1,
    });

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

// @route   POST ./api/users/
// @desc    register a user
// @access  public
router.post("/", async (req, res) => {
  const { username, email, password, linkedin, github } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "Username already exists" });
    }
    user = new User({
      username,
      email,
      password,
      linkedin,
      github,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      currentUser: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtsecret"),
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
