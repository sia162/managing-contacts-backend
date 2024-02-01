const asyncHandler = require("express-async-handler");

//@desc Register user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    res.json({message: "user registered"})
});

//@desc Login user
//@route POST /api/users
//@access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: "user login"})
});

//@desc Current user info
//@route GET /api/users
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json({message: "current user information"})
});

module.exports = {registerUser,loginUser,currentUser}