const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Provide a valid email address"],
    required: [true, "Email address is required"],
  },
  role:{
    type:String,
    required:true,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
