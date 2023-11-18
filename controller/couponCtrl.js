const couponModel = require('../models/couponModel')
const asyncHandler = require('express-async-handler')
const { validateMongoDbID } = require('../utilis/validateMongodbId')

//Create A coupon 
const createCoupon = asyncHandler(async(req,res,next)=>{
  try{  
    const newCoupon = await couponModel.create(req.body)
    res.json(newCoupon)
  }catch(error){
    throw new Error(error)
  }
})

//Get All Coupon 
const getAllCoupon = asyncHandler(async(req,res,next)=>{
  try{  
    const coupons = await couponModel.find()
    res.json(coupons)
  }catch(error){
    throw new Error(error)
  }
})


//Update A Coupon 
const updateCoupon = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{  
    const updateCoupon = await couponModel.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.json(updateCoupon)
  }catch(error){
    throw new Error(error)
  }
})

//Delete A Coupon 
const deleteCoupon = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{  
    const deleteCoupon = await couponModel.findByIdAndRemove(id)
    res.json(deleteCoupon)
  }catch(error){
    throw new Error(error)
  }
})

module.exports = {
  createCoupon , getAllCoupon , updateCoupon , deleteCoupon
}