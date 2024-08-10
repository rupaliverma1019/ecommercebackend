const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authToken(req, res, next) {
    try {
        // Extract the token from the request headers or cookies
        const token = req.cookies.token || req.header('Authorization');
        if (!token) {

            // throw new Error('Authorization token is missing');
            return res.status(200).json({
                message: "Please Login..",
                error: true,
                success: false
            })
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded token data to the request for later use
        req.user = decoded;
        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // Handle errors
        res.status(401).json({
            message: 'Unauthorized',
            error: true,
            success: false
        });
    }
}

module.exports = authToken;