const userModel = require("../../model/userModel");

async function allUsers(req, res) {
    try {
        const allUsers = await userModel.find()

        res.json({
            message: "All User Details",
            data: allUsers,
            success: true,
            error: false

        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}

module.exports = allUsers