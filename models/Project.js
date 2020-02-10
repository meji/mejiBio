const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    require: [true, { message: "name is required" }]
  },
  charge: {
    type: String,
    require: [true, { message: "description is required" }]
  },
  client: {
    type: String,
    require: [true, { message: "school is required" }],
  },
  date: {
    type: String,
  },
  description: {
    type: String,
    require: [true, { message: "school is required" }],
  },
  img: {
    type: String,
    require: [true, { message: "school is required" }],
  },
  featured: {
    type: Boolean,
    default: false
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
