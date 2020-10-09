const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const colors = require("colors");
const path = require("path");

//link to the routes file in routes folder 
const users = require("./routes/users.js");

//link to the config file which handles DB connection
dotenv.config({path: './config/config.env'});
const connectDB = require("./config/db.js");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', users);

const PORT = process.env.PORT || 4000; 
app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} on port ${PORT}`));