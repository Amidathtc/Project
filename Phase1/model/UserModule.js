const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: string,
  },
  email: {
    type: string,
  },
  password: {
    type: string,
  }, 
  phoneNum: {
    type: Number,
  },
  isFemale: {
    type: Boolean,
  },
});

const userModel = mongoose.model("Students", userSchema);

module.exports = userModel;
