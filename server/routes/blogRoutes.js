const express = require('express')
const { getBlogs, addBlog, getBlog, updateBlog, removeBlog } = require('../controllers/blogController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.get("/", getBlogs)
router.post("/", protect, addBlog)
router.get("/:id", getBlog)
router.put("/:id", protect, updateBlog)
router.delete("/:id", protect, removeBlog)

module.exports = router
