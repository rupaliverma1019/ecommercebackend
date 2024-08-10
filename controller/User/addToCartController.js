const addToCartModel = require("../../model/cartProduct")

const addToCartController = async(req, res) => {
    try {
        const { productId } = req.body
        const currentUser = req.user

        const isProductAvailable = await addToCartModel.findOne({
            productId,
            userId: currentUser._id
        })

        if (isProductAvailable) {
            return res.json({
                message: "Already exits in Add to cart",
                success: true,
                error: false
            })
        }


        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()

        res.json({
            data: saveProduct,
            message: "Product Added",
            success: true,
            error: false
        })
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = addToCartController