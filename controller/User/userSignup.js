const userModel = require("../../model/userModel");
const bcrypt = require('bcryptjs');

async function userSignUpController(req, res) {
    try {
        const { email, password, username, profilepic } = req.body;

        console.log("req body ", req.body);
        if (!email) {
            throw new Error("please Provide Email");
        }
        if (!password) {
            throw new Error("please Provide Password");
        }
        if (!username) {
            throw new Error("Please Provide Username");
        }

        const user = await userModel.findOne({ email });
        if (user) {
            throw new Error("User already exists");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = await bcrypt.hashSync(password, salt);
            if (!hashPassword) {
                throw new Error("Something went wrong while encrypting password");
            }

            const payload = {
                email,
                password: hashPassword,
                username,
                profilepic, // Include profilepic in the payload
                role: "General"
            };

            const userData = new userModel(payload);
            const saveUser = await userData.save();
            console.log("saveUser", saveUser);
            res.status(201).json({
                data: saveUser,
                success: true,
                error: false,
                message: "User created successfully"
            });
        }
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignUpController;