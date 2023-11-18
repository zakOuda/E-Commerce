const enquiryModel = require("../models/enqModel");
const asyncHandler = require("express-async-handler");
const { validateMongoDbID } = require("../utilis/validateMongodbId");

const EnquiryCreate = asyncHandler(async (req, res, next) => {
  try {
    const createEnquiry = await enquiryModel.create(req.body);
    res.json(createEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const EnquiryUpdate = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const updateEnquiry = await enquiryModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//delete Enquiry
const EnquiryDelete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const deleteEnquiry = await enquiryModel.findByIdAndRemove(id);
    res.json(deleteEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//get all Enquiry
const EnquiryGetAll = asyncHandler(async (req, res, next) => {
  try {
    const getAllEnquiry = await enquiryModel.find();
    res.json(getAllEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//get One Enquiry
const EnquiryGetOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const getOneEnquiry = await enquiryModel.findById(id);
    res.json(getOneEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  EnquiryCreate,
  EnquiryUpdate,
  EnquiryDelete,
  EnquiryGetAll,
  EnquiryGetOne,
};
