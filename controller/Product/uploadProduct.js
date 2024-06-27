const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../model/productModel")

async function UploadProductController(req, res) {
    try {
        const sessionUserId = req.userId

        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }

        const uploadProduct = new productModel(req.body)
            // console.log("uploadProduct", uploadProduct)
        const saveProduct = await uploadProduct.save()
        console.log("saveProduct", saveProduct);

        res.status(201).json({
            message: "Product upload successfully",
            error: false,
            success: true,
            data: saveProduct
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = UploadProductController