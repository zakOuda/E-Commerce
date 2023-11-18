const express = require('express')

const { authMiddleware , isAdmin } = require('../middlewares/authMiddleware');
const { brandCreate, brandUpdate, brandDelete, brandGetAll, brandGetOne } = require('../controller/brandCtrl');

const router = express.Router()


//Handle POST creat Brand
router.post('/', authMiddleware , isAdmin , brandCreate)

//Handle PUT update Brand
router.put('/:id', authMiddleware , isAdmin , brandUpdate)

//Handle delete a Brand
router.delete('/:id', authMiddleware , isAdmin , brandDelete)

//Handle Get All Brand
router.get('/', authMiddleware , isAdmin , brandGetAll)

//Handle Get One Brand
router.get('/:id', authMiddleware , isAdmin , brandGetOne)

module.exports = router