const userModel = require("../../model/userModel");

async function updateUser(req, res) {
    try {
        const sessionUser = req.user_id
        const { UserId, email, username, role } = req.body
        const payload = {
            ...(email && { email: email }),
            ...(username && { username: username }),
            ...(role && { role: role }),
        }

        const user = await userModel.findById(sessionUser)

        const updateUser = await userModel.findByIdAndUpdate(UserId, payload)



        res.status(200).json({
            data: updateUser,
            message: "user Updated Successfully",
            success: true,
            error: false
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}
module.exports = updateUser