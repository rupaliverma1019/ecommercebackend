const productModel = require("../../model/productModel");

const getCategoryProductOne = async(req, res) => {
    try {
        // Get the distinct product categories
        const productCategory = await productModel.distinct("category");
        console.log("Category", productCategory);

        // Array to store one product from each category
        const productByCategory = [];

        // Iterate over each category to find one product per category
        for (const category of productCategory) {
            const product = await productModel.findOne({ category });
            if (product) {
                productByCategory.push(product);
            }
        }

        // Send the response with the collected products
        res.json({
            message: "category",
            data: productByCategory,
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

module.exports = getCategoryProductOne;