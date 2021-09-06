const User = require("../models/user");

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });

    const token = user.getJwtToken();

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  //check if email and password are empty value
  //console.log("post body in controller:", email, password);
  if (!email || !password) {
    return res.status(400).json({
      message: "Please enter email and password",
    });
  }

  //Find user in database

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  //check if password is valid
  const validPassword = await user.comparePassword(password);

  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const token = user.getJwtToken();

  res.status(200).json({
    success: true,
    user,
    token,
  });
};
