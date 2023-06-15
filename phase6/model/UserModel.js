const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: string,
  },
  email: {
    type: string,
  },
  age: {
    type: string,
  }, 
  phoneNum: {
    type: Number,
  },
  isFemale: {
    type: Boolean,
  },
  Address: {
    type: String,
  },
});

const UserModel = mongoose.model("Elections", userSchema);

module.exports = UserModel;
