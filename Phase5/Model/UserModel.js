const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Title: {
    type: string,
  },
  email: {
    type: string,
  },
  Time: {
    type: Number,
  }, 
  phoneNum: {
    type: Number,
  },
  Date: {
    type: string,
  },
});

const UserModel = mongoose.model("Students", userSchema);

module.exports = UserModel;
