const Blog = require("../models/blogModels")


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200)
        res.json(blogs)
    } catch (error) {
        res.status(404)
        res.json({
            message: "SGS Blogs not found!"
        })
    }
}

const addBlog = async (req, res) => {
    try {

        const { title, description, author } = req.body

        if (!title || !description || !author) {
            res.status(409)
            res.json({
                message: "Please Fill All Details!"
            })

        }


        const blog = await Blog.create({ title, description, author })

        res.status(201).json(blog)


    } catch (error) {
        res.status(409)
        res.json({
            message: "SGS Blog Not Created"
        })
    }
}

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200)
        res.json(blog)
    } catch (error) {
        res.status(404)
        res.json({
            message: "SGS Blog not found!"
        })
    }
}

const updateBlog = async (req, res) => {
    
    try {
        const updateBlog = await Blog.findByIdAndUpdate(req.params.id , req.body , { new : true })
        res.status(200).json(updatedBlog)
    } catch (error) {
        res.status(404)
        res.json({
            message: "SGS Blog not Updated!"
        })
    }

}

const removeBlog = async (req, res) => {
    
    try {

        await Blog.findByIdAndDelete(req.params.id)
        req.status(200).json({
            _id : req.params.id,
            message : "SGS BLOG REMOVED SUCCESSFULLY"
        })
        
    } catch (error) {
        res.status(409)
        res.json({
            message: "SGS Blog not Removed!"
        })
    }

}


module.exports = { getBlogs, addBlog, getBlog, updateBlog, removeBlog }

