const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
        productName: String,
        brandName: String,
        category: String,
        productImage: [],
        description: String,
        price: String,
        sellingPrice: String
    }, {
        timestamps: true

    }


)

const productModel = mongoose.model("product", productSchema)

module.exports = productModel