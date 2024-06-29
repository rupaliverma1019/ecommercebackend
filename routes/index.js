const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/User/userSignup")
const userSignInController = require('../controller/User/userSignIn')
const userDetails = require('../controller/User/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/User/userLogout')
const allUsers = require('../controller/User/allUsers')
const updateUser = require('../controller/User/updateUser');
const UploadProductController = require('../controller/Product/uploadProduct')
const getProductController = require('../controller/Product/getProduct')
const updateProductController = require('../controller/Product/updateProduct')
const getCategoryProductOne = require("../controller/Product/getCategoryProductOne")
const getCategoryWiseProduct = require("../controller/Product/getCategoryWiseProduct")
const getProductDetails = require('../controller/Product/getProductDetails')

//User
router.post("/signup", userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetails);
router.get('/userLogout', userLogout)

// admin panel

router.get("/all-user", authToken, allUsers)
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
router.put("/update-product", authToken, updateProductController)
router.get("/get-categoryProduct", getCategoryProductOne)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)

module.exports = router