const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  name: {
    type: String,
    require: [true, { message: "name is required" }]
  },
  description: {
    type: String,
    require: [true, { message: "description is required" }]
  },
  company: {
    type: String,
    require: [true, { message: "school is required" }],
  },
  dateInit: {
    type: Date,
    default: Date.now
  },
  dateEnd:{
      type: Date,
      default: Date.now
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
