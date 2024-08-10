const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: { type: String, required: true },
    profilepic: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, {
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;