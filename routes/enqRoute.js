const express = require("express");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  EnquiryCreate,
  EnquiryUpdate,
  EnquiryDelete,
  EnquiryGetAll,
  EnquiryGetOne,
} = require("../controller/enqCtrl");

const router = express.Router();

//Handle POST creat Enquiry
router.post("/", EnquiryCreate);

//Handle PUT update Enquiry
router.put("/:id", authMiddleware, isAdmin, EnquiryUpdate);

//Handle delete a Enquiry
router.delete("/:id", authMiddleware, isAdmin, EnquiryDelete);

//Handle Get All Enquiry
router.get("/", EnquiryGetAll);

//Handle Get One Enquiry
router.get("/:id", EnquiryGetOne);

module.exports = router;
