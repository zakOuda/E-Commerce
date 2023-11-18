const express = require('express')
const { prodCategoryCreate, prodCategoryUpdate, 
  prodCategorydelete, prodCategoryGetAll, prodCategoryGetOne } = require("../controller/prodCategoryCtrl");
const { authMiddleware , isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router()


//Handle POST creat PCatrgory
router.post('/', authMiddleware , isAdmin , prodCategoryCreate)

//Handle PUT update PCatrgory
router.put('/:id', authMiddleware , isAdmin , prodCategoryUpdate)

//Handle delete a PCatrgory
router.delete('/:id', authMiddleware , isAdmin , prodCategorydelete)

//Handle Get All PCatrgory
router.get('/', authMiddleware , isAdmin , prodCategoryGetAll)

//Handle Get One PCatrgory
router.get('/:id', authMiddleware , isAdmin , prodCategoryGetOne)

module.exports = router