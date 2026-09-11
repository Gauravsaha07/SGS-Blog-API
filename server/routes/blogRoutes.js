const express = require('express')
const { getBlogs, addBlog, getBlog, updateBlog, removeBlog } = require('../controllers/blogController')

const router = express.Router()


router.get("/", getBlogs)
router.post("/", addBlog)
router.get("/:id", getBlog)
router.put("/:id", updateBlog)
router.delete("/:id", removeBlog)


module.exports = router
