const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const auth = require("../middleware/auth");

// @route   GET ./api/projects/
// @desc    Get projects
// @access  public
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({}).sort({
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
router.post("/", auth, async (req, res) => {
  const { name, description, completed, link, postedby, team } = req.body;
  try {
    const newProject = new Project({
      name,
      description,
      completed,
      postedby,
      team,
      link,
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT ./api/projects/:id
// @desc    update a project
// @access  private
router.put("/:id", auth, async (req, res) => {
  const { name, link, postedby, completed, description } = req.body;
  console.log(req.body);
  let updates = {};
  if (name) updates.name = name;
  if (link) updates.link = link;
  if (postedby) updates.postedby = postedby;
  if (description) updates.description = description;

  if (completed.toString()) updates.completed = completed;
  if (team) updates.team = team;

  try {
    let project = await Project.findById(req.params.id);

    if (!project)
      return res.status(404).json({ msg: "project does not exist" });

    if (!req.currentUser) {
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

    if (!req.currentUser) {
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
