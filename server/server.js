const express = require('express')
const connectDB = require('./config/dbConfig')
const { connection } = require('mongoose')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5511

const app = express()


// Body-parser
app.use(express.json())
app.use(express.urlencoded())

// DB connection
connectDB()

app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO SGS BLOG-API 1.0..."
    })
})


app.use("/api/blog" , require("./routes/blogRoutes"))

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`))
