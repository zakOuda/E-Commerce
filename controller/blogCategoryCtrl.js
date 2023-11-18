const blogcatergoryModel = require("../models/blogCategoryModel");
const asyncHandler = require('express-async-handler');
const { validateMongoDbID } = require("../utilis/validateMongodbId");

const blogCategoryCreate = asyncHandler(async(req,res,next)=>{
  try{
    const createNewBCategory = await blogcatergoryModel.create(req.body)
    res.json(createNewBCategory)
  }catch(error){
    throw new Error(error)
  }
})

const blogCategoryUpdate = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const updateBCategory = await blogcatergoryModel.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.json(updateBCategory)
  }catch(error){
    throw new Error(error)
  }
})

//delete BCategory
const blogCategorydelete = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const deleteBCategory = await blogcatergoryModel.findByIdAndRemove(id)
    res.json(deleteBCategory)
  }catch(error){
    throw new Error(error)
  }
})

//get all PCategory
const blogCategoryGetAll = asyncHandler(async(req,res,next)=>{
  try{
    const allBCategory = await blogcatergoryModel.find()
    res.json(allBCategory)
  }catch(error){
    throw new Error(error)
  }
})


//get all PCategory
const blogCategoryGetOne = asyncHandler(async(req,res,next)=>{
  const {id} = req.params
  validateMongoDbID(id)
  try{
    const OneBCategory = await blogcatergoryModel.findById(id)
    res.json(OneBCategory)
  }catch(error){
    throw new Error(error)
  }
})

module.exports = {
  blogCategoryCreate , blogCategoryUpdate , blogCategorydelete , blogCategoryGetAll , blogCategoryGetOne
}