const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignIn')
const userDetails = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
router.post("/signup", userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetails);
router.get('/userLogout', userLogout)
module.exports = router