const express = require("express");
const dotenv = require("dotenv").config()

const app = express();

const port = process.env.PORT || 5000;


//server listening
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
}) 