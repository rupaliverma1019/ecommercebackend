const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {}).catch((err) => {});