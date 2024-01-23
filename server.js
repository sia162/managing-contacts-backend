const express = require("express");
const dotenv = require("dotenv").config()

const app = express();

const port = process.env.PORT || 5000;

//routes middleware
app.use('/api/contacts',require("./routes/contactRoutes"))

//server listening
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
}) 