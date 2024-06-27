const userModel = require("../../model/userModel");

async function userDetails(req, res) {
    try {
        // Assuming you are using the authToken middleware to attach user data to the request object
        const user = req.user;
        console.log(user)
            // Fetch user details from the database using the user ID
        const userDetails = await userModel.findById(user._id);
        console.log(userDetails)
        if (!userDetails) {
            throw new Error("User details not found");
        }

        // Return user details in the response
        res.status(200).json({
            data: userDetails,
            success: true,
            error: false
        });
    } catch (error) {
        // Handle errors
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userDetails;