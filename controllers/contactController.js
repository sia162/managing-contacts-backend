//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContact = (req,res)=>{
    res.status(200).json({message:"get all contacts"})
};


//@desc Create new a contact
//@route POST /api/contacts
//@access public
const createContact = (req,res)=>{
    res.status(200).json({message:"create contact"})
};


//@desc Get a contact for id
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`})
}

//@desc update a contact for id
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`})
}

//@desc delete a contact for id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`})
}


module.exports = {getAllContact,getContact,createContact,deleteContact,updateContact}