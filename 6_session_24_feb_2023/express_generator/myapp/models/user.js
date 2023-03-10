const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  userType: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
