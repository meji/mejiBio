const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  firstname: {
    type: String,
    require: [true, { message: "firstname is required" }]
  },
  lastname: {
    type: String,
    require: [true, { message: "lastname is required" }]
  },
  telnum: {
    type: String,
    require: [true, { message: "telnum is required" }],
  },
  email: {
    type: String,
    require: [true, { message: "email is required" }],
  },
  agree: {
    type: Boolean,
    required: [true, { message: "agree is required" }],
  },
  contactType: {
    type: String,
  },
  messageText: {
    type: String,
    required: [true, { message: "Message is required" }],
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

