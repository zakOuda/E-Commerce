const express = require('express')
const { creatBlog, updateaBlog, getaBlog, getAllBlog, deleteBlog, likeBlog, dislikeBlog, uploadImgBlog,
 } = require('../controller/blogCtrl')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImages')
const router = express.Router()

//Handel POST creat Blog
router.post('/' , authMiddleware , isAdmin , creatBlog)

//Handel PUT upload image Blog
router.put('/upload/:id' , authMiddleware , isAdmin , uploadPhoto.array('images' , 2),
blogImgResize , uploadImgBlog)

//Handel POST update a Blog
router.put('/update-blog/:id' , authMiddleware , isAdmin , updateaBlog)

//Handel GET get A Blog
router.get('/get-blog/:id' , getaBlog)

//Handel GET get All Blog
router.get('/get-all-blogs' , getAllBlog)

//Handel DELETE delelte A Blog
router.delete('/delete-blog/:id', authMiddleware , isAdmin , deleteBlog)

//Handel PUT like A Blog
router.put('/likes', authMiddleware , isAdmin , likeBlog)

//Handel PUT disLike A Blog
router.put('/dislikes', authMiddleware , isAdmin , dislikeBlog)

module.exports = router