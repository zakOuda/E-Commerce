const express = require('express')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const { createCoupon, getAllCoupon, updateCoupon, deleteCoupon } = require('../controller/couponCtrl')
const router = express.Router()

//Handle POST create Coupon 
router.post('/' ,authMiddleware , isAdmin , createCoupon)

//Handle GET All Coupons
router.get('/' ,authMiddleware , isAdmin , getAllCoupon)

//Handle PUT update a Coupon
router.put('/:id' ,authMiddleware , isAdmin , updateCoupon)

//Handle Delete a Coupon
router.delete('/:id' ,authMiddleware , isAdmin , deleteCoupon)

module.exports = router