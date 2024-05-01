const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') // Corrected typo here
const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}))
app.use(cookieParser()) // Corrected the function name here

require('dotenv').config()
require('./db')

app.use(express.json())

const router = require('./routes/index')
app.use("/api", router)

const PORT = 8080 || process.env.PORT

app.listen(PORT, () => {
    console.log("server is running")
})