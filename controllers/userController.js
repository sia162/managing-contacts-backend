//@desc Register user
//@route POST /api/users
//@access public
const registerUser = (req,res)=>{
    res.json({message: "user registered"})
}

//@desc Login user
//@route POST /api/users
//@access public
const loginUser = (req,res) => {
    res.json({message: "user login"})
}

//@desc Current user
//@route GET /api/users
//@access public
const currentUser = (req,res) => {
    res.json({message: "current user information"})
}


module.exports = {registerUser,loginUser,currentUser}