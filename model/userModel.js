const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        reuired: true
    },
    password: String,
    profilepic: String
}, {
    timestamps: true

})


const userModel = mongoose.model("user", userScheme)
module.exports = userModel