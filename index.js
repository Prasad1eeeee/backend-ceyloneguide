const express = require('express');
const app = express();
const DbConnection = require('./Database');

// const path = require("path");
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const SignUpController = require("./Controllers/SignUpController");
app.use('/', SignUpController);

require('dotenv').config();

// Database connection
DbConnection();

// Controller
app.use('/', require("./Controllers/SignUpController"));
app.use('/api',require('./Controllers/DriverController'));
app.use('/api',require('./Controllers/GuideController'));
app.use('/api',require('./Controllers/EqupmentController'));
app.use('/api',require('./Controllers/HotelController'));

app.get('/*', (req,res)=>{
    res.status(404).send(`<h1>404 Error<h1>`);
});

// Start the server
const port = process.env.PORT || 2000 ;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
