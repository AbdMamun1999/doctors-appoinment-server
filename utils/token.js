const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.generateToken = (userInfo) => {
  payload = {
    email: userInfo.email,
    role: userInfo.role,
  };
  const token = jwt.sign(payload, process.env.SECRETE_TOKEN, {
    expiresIn: "7days",
  });
  return token;
};
