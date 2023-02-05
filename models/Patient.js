const mongoose = require("mongoose");
const validator = require("validator");

const patientSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a firstname"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [100, "Name is too large"],
  },

  lastName: {
    type: String,
    required: [true, "Please provide a first name"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters."],
    maxLength: [100, "Name is too large"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Provide a valid email address"],
    required: [true, "Email address is required"],
  },
  role: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("User", patientSchema);

module.exports = Patient;
