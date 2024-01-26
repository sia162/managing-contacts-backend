const asyncHandler = require("express-async-handler")

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get all contacts"})
});

//@desc Create new a contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res)=>{
    console.log("body data:", req.body);
    const {name,email} = req.body;

    if(!name || !email){
        res.status(400);
        throw new Error("all fields mandatory, give both name and email!")
    }
    res.status(200).json({message:"create contact"})
});


//@desc Get a contact for id
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`})
});

//@desc update a contact for id
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`})
});

//@desc delete a contact for id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`})
});


module.exports = {getAllContact,getContact,createContact,deleteContact,updateContact}