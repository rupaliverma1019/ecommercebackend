async function allUsers(req, res) {
    try {
        console.log("all user backend", req.user);
        res.json({
            message: "All User Details"
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