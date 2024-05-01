const mongoose = require("mongoose");
require('dotenv').config();

console.log("MongoDB URI:", process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('connected to database');
    }).catch((err) => {
        console.log('Error connecting to database: ' + err);
    });