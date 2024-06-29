const productModel = require("../../model/productModel")

const getProductDetails = async(req, res) => {
    try {

        const { _id } = req.body

        const product = await productModel.findById(_id)

        res.json({
            message: " Product",
            success: true,
            error: false,
            data: product
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = getProductDetails