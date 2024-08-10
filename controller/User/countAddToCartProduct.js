const addToCartModel = require("../../model/cartProduct");

const countAddToCartProduct = async(req, res) => {
    try {
        const userId = req.user
        const count = await addToCartModel.countDocuments({
            userId: userId
        })
        res.json({
            data: {
                count: count
            },
            message: "ok",
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

module.exports = countAddToCartProduct;