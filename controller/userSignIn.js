// const userModel = require("../model/userModel");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// async function userSignInController(req, res) {
//     try {
//         const { email, password } = req.body;
//         if (!email) {
//             throw new Error("Please Provide Email");
//         }
//         if (!password) {
//             throw new Error("Please provide Password");
//         }
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             throw new Error("User not found");
//         }
//         const checkPassword = await bcrypt.compareSync(password, user.password);
//         console.log(checkPassword);

//         if (checkPassword) {
//             const tokenData = {
//                 _id: user._id,
//                 email: user.email,
//             }

//             const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
//             // console.log(token)
//             const tokenOption = {
//                 httpOnly: true,
//                 secure: true
//             }

//             const cookie = await res.cookie("token", token, tokenOption).json({
//                 message: "User signed in successfully",

//                 error: false,
//                 success: true,
//             });
//             // console.log(cookie)
//         } else {
//             throw new Error("Please check Password")
//         }
//     } catch (error) {
//         res.status(400).json({
//             message: error.message,
//             error: true,
//             success: false,
//         });
//     }
// }

// module.exports = userSignInController;


const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;
        if (!email) {
            throw new Error("Please provide Email");
        }
        if (!password) {
            throw new Error("Please provide Password");
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }
        const checkPassword = await bcrypt.compareSync(password, user.password);
        console.log(checkPassword);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            }

            const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: 60 * 60 });

            // Fetch profile pic here
            const profilePic = user.profilepic;

            const tokenOption = {
                httpOnly: true,
                secure: true
            }

            const cookie = await res.cookie("token", token, tokenOption).json({
                message: "User signed in successfully",
                profilepic: profilePic, // Include profile picture in the response
                error: false,
                success: true,
            });
        } else {
            throw new Error("Please check Password")
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;