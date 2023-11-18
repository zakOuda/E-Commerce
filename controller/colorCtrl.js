const colorModel = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const { validateMongoDbID } = require("../utilis/validateMongodbId");

const ColorCreate = asyncHandler(async (req, res, next) => {
  try {
    const createColor = await colorModel.create(req.body);
    res.json(createColor);
  } catch (error) {
    throw new Error(error);
  }
});

const ColorUpdate = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const updateColor = await colorModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateColor);
  } catch (error) {
    throw new Error(error);
  }
});

//delete Color
const ColorDelete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const deleteColor = await colorModel.findByIdAndRemove(id);
    res.json(deleteColor);
  } catch (error) {
    throw new Error(error);
  }
});

//get all Color
const ColorGetAll = asyncHandler(async (req, res, next) => {
  try {
    const getAllColor = await colorModel.find();
    res.json(getAllColor);
  } catch (error) {
    throw new Error(error);
  }
});

//get One Color
const ColorGetOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const getOneColor = await colorModel.findById(id);
    res.json(getOneColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  ColorCreate,
  ColorUpdate,
  ColorDelete,
  ColorGetAll,
  ColorGetOne,
};
