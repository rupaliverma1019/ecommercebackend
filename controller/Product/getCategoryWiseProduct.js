const productModel = require("../../model/productModel")

const getCategoryWiseProduct = async(req, res) => {
    try {
        const { category } = req.body || req.query;
        const product = await productModel.find({ category });
        console.log("rupali prijvndfbjg", product)

        return res.json({
            data: product,
            message: "product",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = getCategoryWiseProduct