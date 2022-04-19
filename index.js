const express = require("express");
const app = express();
// const connectDB = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
// const  = require("./routes/");


app.use(cors({credentials: true, origin: "*"}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.DB_CONNECTION;

mongoose.connect(URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection ERROR: "));
db.once("open", function () {
console.log("Connected successfully");
});


// Import Routes 
const authRoute = require('./routes/auth');
const userHome = require('./routes/userHome');

// Middlewares
app.use(express.json());

// Route Middlewares 
app.use('/api/auth', authRoute);
app.use('/api/userHome', userHome);

const portNumber = 3000;
app.listen(portNumber, function () {
  console.log("FavorApp listening on port " + portNumber);
});


