// const mongoose = require("mongoose")
// const dotenv = require("dotenv").config()
// const connectDB = require("../config/dbConfig")
// const Blog = require("../models/blogModels")

// const seedBlogs = [
//     {
//         title: "Getting Started with Node.js",
//         description: "A beginner-friendly introduction to Node.js, covering the event loop, modules, and how to build your first server.",
//         author: "Gaurav Saha",
//         isPublished: true
//     },
//     {
//         title: "Understanding REST APIs",
//         description: "Learn what REST APIs are, why they matter, and how to design clean, predictable endpoints for your applications.",
//         author: "Gaurav Saha",
//         isPublished: true
//     },
//     {
//         title: "MongoDB & Mongoose Basics",
//         description: "An overview of MongoDB as a NoSQL database and how Mongoose helps you model your data in Node.js apps.",
//         author: "Priya Sharma",
//         isPublished: true
//     },
//     {
//         title: "Authentication with JWT",
//         description: "A practical guide to securing your Express APIs using JSON Web Tokens for stateless authentication.",
//         author: "Priya Sharma",
//         isPublished: false
//     },
//     {
//         title: "Error Handling in Express",
//         description: "Best practices for centralized error handling and writing middleware that keeps your Express app robust.",
//         author: "Rahul Verma",
//         isPublished: true
//     },
//     {
//         title: "Deploying Your Node App",
//         description: "Step-by-step notes on preparing a Node.js and MongoDB backend for production deployment.",
//         author: "Rahul Verma",
//         isPublished: false
//     }
// ]

// const importData = async () => {
//     try {
//         await connectDB()

//         await Blog.deleteMany()
//         console.log("SGS EXISTING BLOG DATA CLEARED")

//         await Blog.insertMany(seedBlogs)
//         console.log(`SGS SEED DATA IMPORTED SUCCESSFULLY : ${seedBlogs.length} blogs added`)

//         process.exit()
//     } catch (error) {
//         console.log("SGS SEED IMPORT FAILED : ", error.message)
//         process.exit(1)
//     }
// }

// const destroyData = async () => {
//     try {
//         await connectDB()

//         await Blog.deleteMany()
//         console.log("SGS ALL BLOG DATA DESTROYED")

//         process.exit()
//     } catch (error) {
//         console.log("SGS SEED DESTROY FAILED : ", error.message)
//         process.exit(1)
//     }
// }

// if (process.argv[2] === "-d") {
//     destroyData()
// } else {
//     importData()
// }

const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const connectDB = require("./server/config/dbConfig")
const Blog = require("./server/models/blogModels")

const seedBlogs = [
    {
        title: "Getting Started with Web Development",
        description:
            "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. This guide will help beginners build their first website and start their coding journey.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "Why React Is Popular in Modern Web Development",
        description:
            "React is a powerful JavaScript library for building interactive user interfaces. Discover its key features, reusable components, and why developers use it to create modern web applications.",
        author: "Rahul Sharma",
        isPublished: true,
    },
    {
        title: "Understanding Node.js and Express.js",
        description:
            "Explore how Node.js allows JavaScript to run on the server and how Express.js simplifies backend development. Learn how these technologies work together to build REST APIs.",
        author: "Aman Verma",
        isPublished: true,
    },
    {
        title: "MongoDB for Beginners",
        description:
            "Discover the basics of MongoDB, a popular NoSQL database. Learn about collections, documents, CRUD operations, and how to store application data efficiently.",
        author: "Priya Singh",
        isPublished: true,
    },
    {
        title: "The Future of Artificial Intelligence",
        description:
            "Artificial intelligence is transforming industries through automation, intelligent assistants, and data-driven decisions. Explore its applications, benefits, challenges, and future possibilities.",
        author: "Neha Patel",
        isPublished: true,
    },
    {
        title: "10 Tips to Become a Better Programmer",
        description:
            "Improve your programming skills by practicing consistently, solving coding problems, reading documentation, writing clean code, and building real-world projects.",
        author: "Vikash Kumar",
        isPublished: true,
    },
    {
        title: "How to Build Your First Full Stack Project",
        description:
            "Learn how to plan and develop a full stack application using React, Node.js, Express.js, and MongoDB. Understand frontend-backend communication, API integration, and database management.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "Why Every Developer Should Learn Git and GitHub",
        description:
            "Git and GitHub help developers manage code changes, collaborate with teams, and maintain project history. Discover essential Git commands and learn how to publish your projects online.",
        author: "Ankit Jain",
        isPublished: true,
    },
    {
        title: "The Importance of Responsive Web Design",
        description:
            "Responsive web design ensures that websites work smoothly across mobile phones, tablets, and desktops. Learn about flexible layouts, CSS media queries, and mobile-first development.",
        author: "Sneha Gupta",
        isPublished: true,
    },
    {
        title: "How AI Is Changing the Life of Developers",
        description:
            "AI-powered coding assistants can help developers generate code, debug errors, write tests, and improve productivity. Explore how to use AI tools effectively while strengthening your own programming fundamentals.",
        author: "Gaurav Saha",
        isPublished: true,
    },
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
    },
    {
        title: "JavaScript ES6 Features Every Developer Should Know",
        description:
            "Explore modern JavaScript features such as arrow functions, destructuring, template literals, spread operators, promises, and modules to write cleaner and more maintainable code.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "Understanding REST APIs",
        description:
            "Learn how REST APIs allow frontend and backend applications to communicate. Understand HTTP methods, status codes, request bodies, response formats, and API endpoint design.",
        author: "Rahul Sharma",
        isPublished: true,
    },
    {
        title: "Authentication and Authorization Explained",
        description:
            "Discover the difference between authentication and authorization. Learn how passwords, JWT tokens, sessions, and role-based access control help protect modern web applications.",
        author: "Aman Verma",
        isPublished: true,
    },
    {
        title: "How to Secure Your Node.js Application",
        description:
            "Learn essential backend security practices, including input validation, secure password hashing, environment variables, rate limiting, and protection against common web vulnerabilities.",
        author: "Priya Singh",
        isPublished: true,
    },
    {
        title: "CSS Flexbox vs CSS Grid",
        description:
            "Understand the differences between Flexbox and CSS Grid and learn when to use each layout system. Discover practical techniques for building responsive and well-structured web pages.",
        author: "Neha Patel",
        isPublished: true,
    },
    {
        title: "Building a REST API with Express.js",
        description:
            "Follow the fundamentals of creating an Express.js REST API, including routing, middleware, controllers, error handling, and connecting your backend to a database.",
        author: "Vikash Kumar",
        isPublished: true,
    },
    {
        title: "Introduction to TypeScript for JavaScript Developers",
        description:
            "TypeScript adds static typing to JavaScript and helps developers catch errors earlier. Learn about types, interfaces, functions, generics, and how TypeScript improves code maintainability.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "Next.js: A Complete Beginner's Introduction",
        description:
            "Discover how Next.js extends React with features such as file-based routing, server rendering, static generation, and server-side capabilities for building modern web applications.",
        author: "Ankit Jain",
        isPublished: true,
    },
    {
        title: "Understanding MongoDB Aggregation",
        description:
            "Learn how MongoDB aggregation pipelines process and transform documents. Explore stages such as match, group, sort, project, and lookup to perform advanced database queries.",
        author: "Sneha Gupta",
        isPublished: true,
    },
    {
        title: "How to Deploy a Full Stack Application",
        description:
            "Learn the essential steps for deploying a full stack application, including configuring environment variables, hosting the frontend, deploying the backend, and connecting a cloud database.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "Understanding Asynchronous JavaScript",
        description:
            "Explore the JavaScript event loop, callbacks, promises, and async/await. Understand how asynchronous operations work and how to handle errors when working with APIs.",
        author: "Rahul Sharma",
        isPublished: true,
    },
    {
        title: "What Is Docker and Why Do Developers Use It?",
        description:
            "Discover how Docker containers package applications with their dependencies. Learn about images, containers, Dockerfiles, and how containerization improves development and deployment workflows.",
        author: "Aman Verma",
        isPublished: true,
    },
    {
        title: "Getting Started with Data Structures and Algorithms",
        description:
            "Build a strong programming foundation by learning arrays, strings, linked lists, stacks, queues, searching, sorting, and basic algorithmic problem-solving techniques.",
        author: "Priya Singh",
        isPublished: true,
    },
    {
        title: "How to Write Clean and Maintainable Code",
        description:
            "Discover practical coding principles such as meaningful naming, small functions, reusable components, consistent formatting, and avoiding unnecessary complexity in software projects.",
        author: "Neha Patel",
        isPublished: true,
    },
    {
        title: "Artificial Intelligence vs Machine Learning",
        description:
            "Understand the relationship between artificial intelligence and machine learning. Explore their differences, real-world applications, common techniques, and how they are used to solve problems.",
        author: "Vikash Kumar",
        isPublished: true,
    },
    {
        title: "Building AI-Powered Web Applications",
        description:
            "Learn how to integrate AI APIs into web applications to create intelligent features such as chatbots, content generators, recommendation systems, and automated assistants.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "Why Website Performance Matters",
        description:
            "Discover how page speed affects user experience and search visibility. Learn practical optimization techniques such as image compression, lazy loading, caching, and reducing unnecessary JavaScript.",
        author: "Ankit Jain",
        isPublished: true,
    },
    {
        title: "Introduction to WebSockets and Real-Time Applications",
        description:
            "Explore how WebSockets enable continuous two-way communication between clients and servers. Learn how this technology powers live chats, notifications, multiplayer games, and collaborative tools.",
        author: "Sneha Gupta",
        isPublished: true,
    },
    {
        title: "How to Prepare for a Full Stack Developer Interview",
        description:
            "Prepare for full stack developer interviews by reviewing JavaScript fundamentals, React, backend development, databases, REST APIs, data structures, and practical coding exercises.",
        author: "Gaurav Saha",
        isPublished: true,
    },
    {
        title: "The Benefits of Open Source Software",
        description:
            "Discover how open source projects encourage collaboration, transparency, and innovation. Learn how developers can contribute to public repositories, improve their skills, and build a professional portfolio.",
        author: "Rahul Sharma",
        isPublished: true,
    },
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

importData()