const User = require("../models/User");

exports.signupService = async (data) => {
  const result = User.create(data);
  return result;
};
