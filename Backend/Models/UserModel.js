const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
    required: true,
  },
  studentClass: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
