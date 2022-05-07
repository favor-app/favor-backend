const express = require("express");
const app = express();
const connectDB = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
require('dotenv').config();
// Import Routes 
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const favorsRoute = require('./routes/favors');
const tradesRoute = require('./routes/trades');

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
connectDB();


// Route Middlewares 
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/favors', favorsRoute);
app.use('/trades', tradesRoute);

const portNumber = process.env.PORT || 3000;
app.listen(portNumber, function () {
  console.log("FavorApp listening on port " + portNumber);
});


