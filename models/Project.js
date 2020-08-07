const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  postedby: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  team: {
    type: [String],
  },
  description: {
    type: String,
  },
  cover: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("project", ProjectSchema);
