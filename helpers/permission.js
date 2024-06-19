// const userModel = require("../model/productModel")

// const uploadProductPermission = async(userId) => {
//     const user = await userModel.findById(userId)

//     if (user.role === 'ADMIN') {
//         return true
//     }

//     return false
// }


// module.exports = uploadProductPermission

const userModel = require("../model/userModel"); // Ensure the correct path and model name

const uploadProductPermission = async(userId) => {
    try {
        const user = await userModel.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        if (user.role === 'ADMIN') {
            return true;
        }

        return false;
    } catch (error) {
        console.error('Error checking upload product permission:', error.message);
        return false;
    }
}

module.exports = uploadProductPermission;