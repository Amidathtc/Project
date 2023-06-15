const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: string,
  },
  Title: {
    type: string,
  },
  Topic: {
    type: string,
  }, 
  Author: {
    type: String,
  },
});

const UserModel = mongoose.model("Blogs", userSchema);

module.exports = UserModel;
