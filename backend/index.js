const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

//Database connection with MongoDB

// mongoose.connect("cluster URL");

//API creation
app.get("/", (req, res, next) => {
    res.send("Express app is running");
});


app.listen(port, (error) => {
    if(!error){
        console.log("server running on port " + port);
    }else{
        console.log("Error: " + error);
    }
})


