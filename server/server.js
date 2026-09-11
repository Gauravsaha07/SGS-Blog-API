const express = require('express')
const cors = require('cors')
const connectDB = require('./config/dbConfig')
require('dotenv').config()

const PORT = process.env.PORT || 5511

const app = express()

// CORS middleware right after app initialization
app.use(cors())

// JSON Body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Root route
app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO SGS BLOG-API 1.0..."
    })
})

// Health-check route
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }))

// Auth routes (mounted BEFORE blog routes)
app.use("/api/blog/auth", require("./routes/authRoutes"))

// Blog routes
app.use("/api/blog", require("./routes/blogRoutes"))

// Startup with error handling
const startServer = async () => {
    try {
        await connectDB()
        const server = app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING AT PORT : ${PORT}`)
        })
        server.on('error', (err) => {
            console.error("SERVER STARTUP ERROR:", err.message)
        })
    } catch (error) {
        console.error("FAILED TO CONNECT TO DB / START SERVER:", error.message)
    }
}

startServer()
