const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
     Brand: {
        type: String,
     },
      color: {
        type: String,
      },
       PlateNum: {
        type: Number,
       },
        countryMade: {
            type: String,
        } ,
});

const UserModel = mongoose.model("CARS",userSchema);

module.exports = UserModel;