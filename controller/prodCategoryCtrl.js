const prodcatergoryModel = require("../models/prodcatergoryModel");
const asyncHandler = require('express-async-handler');
const { validateMongoDbID } = require("../utilis/validateMongodbId");

const prodCategoryCreate = asyncHandler(async(req,res,next)=>{
  try{
    const createNewPCategory = await prodcatergoryModel.create(req.body)
    res.json(createNewPCategory)
  }catch(error){
    throw new Error(error)
  }
})

const prodCategoryUpdate = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const updatePCategory = await prodcatergoryModel.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.json(updatePCategory)
  }catch(error){
    throw new Error(error)
  }
})

//delete PCategory
const prodCategorydelete = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const deletePCategory = await prodcatergoryModel.findByIdAndRemove(id)
    res.json(deletePCategory)
  }catch(error){
    throw new Error(error)
  }
})

//get all PCategory
const prodCategoryGetAll = asyncHandler(async(req,res,next)=>{
  try{
    const allPCategory = await prodcatergoryModel.find()
    res.json(allPCategory)
  }catch(error){
    throw new Error(error)
  }
})


//get all PCategory
const prodCategoryGetOne = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const OnePCategory = await prodcatergoryModel.findById(id)
    res.json(OnePCategory)
  }catch(error){
    throw new Error(error)
  }
})

module.exports = {
  prodCategoryCreate , prodCategoryUpdate , prodCategorydelete , prodCategoryGetAll , prodCategoryGetOne
}