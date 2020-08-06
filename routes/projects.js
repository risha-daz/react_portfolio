const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Project = require("../models/Project");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// @route   GET ./api/projects/
// @desc    Get projects
// @access  private
router.get("/", auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.currentUser.id }).sort({
      date: -1,
    });
    res.json(projects);
  } catch (err) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

// @route   POST ./api/projects/
// @desc    add a project
// @access  private
router.post(
  "/",
  [auth, [check("title", "Please enter a title").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, author, genre, read, description, rating, cover } = req.body;
    try {
      const newProject = new Project({
        user: req.currentUser.id,
        title,
        author,
        genre,
        read,
        description,
        rating,
        cover,
      });

      const project = await newProject.save();
      res.json(project);
    } catch (err) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT ./api/projects/:id
// @desc    update a project
// @access  private
router.put("/:id", auth, async (req, res) => {
  const { title, author, genre, read, description, rating, cover } = req.body;
  console.log(req.body);
  let updates = {};
  if (title) updates.title = title;
  if (author) updates.author = author;
  if (genre) updates.genre = genre;
  if (description) updates.description = description;
  if (rating) updates.rating = rating;
  if (read.toString()) updates.read = read;
  if (cover) updates.cover = cover;

  try {
    let project = await Project.findById(req.params.id);

    if (!project)
      return res.status(404).json({ msg: "project does not exist" });

    if (req.currentUser.id !== project.user.toString()) {
      res.status(401).send("Not authorised");
    }

    project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true }
    );

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE ./api/projects/:id
// @desc    update a project
// @access  private
router.delete("/:id", auth, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project)
      return res.status(404).json({ msg: "project does not exist" });

    if (req.currentUser.id !== project.user.toString()) {
      res.status(401).send("Not authorised");
    }

    project = await Project.findByIdAndRemove(req.params.id);

    res.json({ msg: "project deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
