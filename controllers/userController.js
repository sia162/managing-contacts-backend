const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//@desc Register user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //haspassword
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`user created successfully! ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data not valid");
  }
});

//@desc Login user
//@route POST /api/users
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields mandatory");
  }

  const user = await User.findOne({ email });

  //compare password with hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    //provide access token in response
    const accessToken = jwt.sign(
      //payload
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      //access token secret
      process.env.ACCESS_TOKEN_SECRET,
      //expiration time of token
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Wrong Email or Password");
  }
});

//@desc Current user info
//@route GET /api/users
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user); //after authentication we stored user details in req.user
});

module.exports = { registerUser, loginUser, currentUser };
