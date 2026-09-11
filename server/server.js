const express = require('express')
const cors = require('cors')
const connectDB = require('./config/dbConfig')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5511

const app = express()

// CORS middleware right after app initialization
app.use(cors())

// Body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// DB connection
connectDB()

app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO SGS BLOG-API 1.0..."
    })
})

// Auth routes (mounted BEFORE blog routes)
app.use("/api/blog/auth", require("./routes/authRoutes"))

// Blog routes
app.use("/api/blog", require("./routes/blogRoutes"))

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`))
