const express = require("express");
const {
  creatProduct,
  findaProduct,
  findAllProducts,
  updateaProduct,
  deleteProduct,
  addToWishLists,
  ratingProd,
  uploadImgProduct,
  deleteImgProduct,
} = require("../controller/productsCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");
const router = express.Router();

//Handel POST creat Product
router.post("/", authMiddleware, isAdmin, creatProduct);

//Handel PUT creat Product
router.put(
  "/upload/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImgProduct
);

//Handel GET find a product
router.get("/get-product/:id", findaProduct);

//Handel GET find all product
router.get("/all-products/", findAllProducts);

//Handel PUT update a product
router.put("/update-product/:id", authMiddleware, isAdmin, updateaProduct);

//Handel DELETE delete a product
router.delete("/delete-product/:id", authMiddleware, isAdmin, deleteProduct);

//Handel DELETE delete a images od a product
router.delete("/delete-image/:id", authMiddleware, isAdmin, deleteImgProduct);

//Handel PUT addToWishLists a product
router.put("/addtowish", authMiddleware, addToWishLists);

//Handel PUT Rating a product
router.put("/rating", authMiddleware, ratingProd);

module.exports = router;
