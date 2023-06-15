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
  Age: {
    type: Number,
  },
});

const UserModel = mongoose.model("Set07", userSchema);

module.exports = UserModel;
