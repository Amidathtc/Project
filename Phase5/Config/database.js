const mongoose = require("mongoose");

const set07DB = "mongodb://0.0.0.0:27017/Set07Database";

const Database = async () => {
  try {
    const dbconnect = await mongoose.connect(set07DB);
    console.log("");
    console.log(`Database is connected to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An error occured in connecting database", error);
  }
};

module.exports = Database();
