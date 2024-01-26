const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()

connectDb()
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()) //bodyparser middleware
app.use('/api/contacts',require("./routes/contactRoutes")) //routes middleware
app.use(errorHandler) //error handling middleware

//server listenings
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})  