const brandModel = require("../models/brandModel");
const asyncHandler = require('express-async-handler');
const { validateMongoDbID } = require("../utilis/validateMongodbId");

const brandCreate = asyncHandler(async(req,res,next)=>{
  try{
    const createBrand = await brandModel.create(req.body)
    res.json(createBrand)
  }catch(error){
    throw new Error(error)
  }
})

const brandUpdate = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const updateBrand = await brandModel.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.json(updateBrand)
  }catch(error){
    throw new Error(error)
  }
})

//delete Brand
const brandDelete = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const deleteBrand = await brandModel.findByIdAndRemove(id)
    res.json(deleteBrand)
  }catch(error){
    throw new Error(error)
  }
})

//get all Brand
const brandGetAll = asyncHandler(async(req,res,next)=>{
  try{
    const getAllBrand = await brandModel.find()
    res.json(getAllBrand)
  }catch(error){
    throw new Error(error)
  }
})


//get One Brand
const brandGetOne = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const getOneBrand = await brandModel.findById(id)
    res.json(getOneBrand)
  }catch(error){
    throw new Error(error)
  }
})

module.exports = {
  brandCreate , brandUpdate , brandDelete , brandGetAll , brandGetOne
}