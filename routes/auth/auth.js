const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("config");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

// @route   GET ./api/auth/
// @desc    get the logged in user
// @access  private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.currentUser.id).select("id username");
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST ./api/users/
// @desc    user is logging in
// @access  public
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ msg: "User does not exist" });
    }
    isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ msg: "Incorrect password" });
    }
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
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
