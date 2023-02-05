const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const doctorsSchema = mongoose.Schema({
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
  dasignation: {
    type: String,
    required: [true, "Please designation"],
    trim: true,
    minLength: [3, "Dasignation must be at least 3 characters"],
    maxLength: [100, "Dasignation is too large"],
  },
  workPlace: {
    type: String,
    required: [true, "Please workPlace"],
    trim: true,
    minLength: [3, "workPlace must be at least 3 characters"],
    maxLength: [100, "workPlace is too large"],
  },
  speacilization: {
    type: String,
    required: [true, "speacilization workPlace"],
    trim: true,
    minLength: [3, "speacilization must be at least 3 characters"],
    maxLength: [100, "speacilization is too large"],
  },
  booking: [
    {
      name: String,
      email: String,
      _id: {
        type: ObjectId,
        ref: "Patient",
      },
    },
  ],
  experience: {
    type: Number,
  },
  role: {
    type: String,
    required: true,
  },
});

const Doctors = mongoose.model("User", doctorsSchema);

module.exports = Doctors;
