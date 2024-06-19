const uploadProductPermission = require("../helpers/permission")
const productModel = require("../model/productModel")

async function updateProductController(req, res) {
    try {

        if (!uploadProductPermission(req.user)) {
            throw new Error("Permission denied")
        }
        const { _id } = req.user;
        const payLoad = req.body

        // const updateProduct = await productModel.findByIdAndUpdate(_id, { payLoad })
        const updateProduct = await productModel.findByIdAndUpdate(payLoad.productId, payLoad, { new: true });

        res.json({
            message: "Product update successfully",
            data: updateProduct,
            success: true,
            error: false
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = updateProductController