const express = require('express')

const { authMiddleware , isAdmin } = require('../middlewares/authMiddleware');
const { blogCategoryCreate, blogCategoryUpdate, blogCategorydelete, blogCategoryGetAll, blogCategoryGetOne } = require('../controller/blogCategoryCtrl');
const router = express.Router()


//Handle POST creat BCatrgory
router.post('/', authMiddleware , isAdmin , blogCategoryCreate)

//Handle PUT update BCatrgory
router.put('/:id', authMiddleware , isAdmin , blogCategoryUpdate)

//Handle delete a BCatrgory
router.delete('/:id', authMiddleware , isAdmin , blogCategorydelete)

//Handle Get All PCatrgory
router.get('/', authMiddleware , isAdmin , blogCategoryGetAll)

//Handle Get One PCatrgory
router.get('/:id', authMiddleware , isAdmin , blogCategoryGetOne)

module.exports = router