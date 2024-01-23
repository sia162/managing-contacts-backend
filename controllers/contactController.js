//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContact = async (req,res)=>{
    res.status(200).json({message:"get all contacts"})
};

//@desc Create new a contact
//@route POST /api/contacts
//@access public
const createContact = async (req,res)=>{
    console.log("body data:", req.body);
    const {name,email} = req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("all fields needed")
    }
    res.status(200).json({message:"create contact"})
};


//@desc Get a contact for id
//@route GET /api/contacts/:id
//@access public
const getContact = async (req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`})
}

//@desc update a contact for id
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`})
}

//@desc delete a contact for id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async (req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`})
}


module.exports = {getAllContact,getContact,createContact,deleteContact,updateContact}