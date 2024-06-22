const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  name: String,
  age: String,
  phone: String,
});

const UserData = mongoose.model("crud", userDataSchema);

module.exports = UserData;
