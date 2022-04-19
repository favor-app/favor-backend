const express = require("express");
const app = express();
const connectDB = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
// const  = require("./routes/");


app.use(cors({credentials: true, origin: "*"}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

connectDB();

// app.use('/', );

const portNumber = 4000;
app.listen(portNumber, function () {
  console.log("Example app listening on port " + portNumber);
});


