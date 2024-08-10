const { default: mongoose } = require("mongoose");
const addToCartModel = require("../../model/cartProduct")

const addToCartViewProduct = async(req, res) => {
    try {
        const currentUser = req.user

        const allProduct = await addToCartModel.find({
            userId: currentUser._id
        }).populate([{ path: 'productId', strictPopulate: false }]);
        res.json({
            data: allProduct,
            success: true,
            error: false
        });
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = addToCartViewProduct