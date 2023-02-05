const { signupService } = require("../services/user.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
   /*  if (!req.body.email) {
      return res.status(201).json({ error: "Provide an email address" });
    } */

    const user = await signupService(req.body);

    const token = generateToken(user)
    // console.log(user)
    // console.log(token)

    res.status(200).json({
      status: "success",
      message: "Successfully registered",
      user,
      token
    });
  } catch (error) {
    res.status(201).json({
      status: "fail",
      error: error.message,
    });
  }
};
