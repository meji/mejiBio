const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bioSchema = new Schema({
  name: {
    type: String,
    require: [true, { message: "name is required" }]
  },
  charge: {
    type: String,
    require: [true, { message: "description is required" }]
  },
  bio: {
    type: String,
    require: [true, { message: "school is required" }],
  }
});

const Bio = mongoose.model("Bio", bioSchema);

module.exports = Bio;
