const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const connectDB = require("../config/dbConfig")
const Blog = require("../models/blogModels")

const seedBlogs = [
    {
        title: "Getting Started with Node.js",
        description: "A beginner-friendly introduction to Node.js, covering the event loop, modules, and how to build your first server.",
        author: "Gaurav Saha",
        isPublished: true
    },
    {
        title: "Understanding REST APIs",
        description: "Learn what REST APIs are, why they matter, and how to design clean, predictable endpoints for your applications.",
        author: "Gaurav Saha",
        isPublished: true
    },
    {
        title: "MongoDB & Mongoose Basics",
        description: "An overview of MongoDB as a NoSQL database and how Mongoose helps you model your data in Node.js apps.",
        author: "Priya Sharma",
        isPublished: true
    },
    {
        title: "Authentication with JWT",
        description: "A practical guide to securing your Express APIs using JSON Web Tokens for stateless authentication.",
        author: "Priya Sharma",
        isPublished: false
    },
    {
        title: "Error Handling in Express",
        description: "Best practices for centralized error handling and writing middleware that keeps your Express app robust.",
        author: "Rahul Verma",
        isPublished: true
    },
    {
        title: "Deploying Your Node App",
        description: "Step-by-step notes on preparing a Node.js and MongoDB backend for production deployment.",
        author: "Rahul Verma",
        isPublished: false
    }
]

const importData = async () => {
    try {
        await connectDB()

        await Blog.deleteMany()
        console.log("SGS EXISTING BLOG DATA CLEARED")

        await Blog.insertMany(seedBlogs)
        console.log(`SGS SEED DATA IMPORTED SUCCESSFULLY : ${seedBlogs.length} blogs added`)

        process.exit()
    } catch (error) {
        console.log("SGS SEED IMPORT FAILED : ", error.message)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await connectDB()

        await Blog.deleteMany()
        console.log("SGS ALL BLOG DATA DESTROYED")

        process.exit()
    } catch (error) {
        console.log("SGS SEED DESTROY FAILED : ", error.message)
        process.exit(1)
    }
}

if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}