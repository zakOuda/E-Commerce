const express = require("express");
const {
  creatUser,
  loginUser,
  getAllUser,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unBlockUser,
  handleRefershToken,
  logoutaUser,
  updatePassword,
  forgotPassword,
  resetPassword,
  adminLogin,
  getWishLists,
  saveUserAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getUserOrder,
  updateOrderStatus,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

//Handel POST forget password user
router.post("/forget-password", forgotPassword);

//Handel PUT reset password user
router.put("/reset-password/:token", resetPassword);

//Handel POST creat user
router.post("/register", creatUser);

//Handel POST login user
router.post("/login", loginUser);

//Handel POST login Admin
router.post("/admin-login", adminLogin);

//Handel GET refreshToken
router.get("/refresh", handleRefershToken);

//Handel GET logout a user
router.get("/logout", logoutaUser);

//Handel PUT Update a user
router.put("/update", authMiddleware, updateaUser);

//Handel PUT Blocked a user
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

//Handel PUT unBlocked a user
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

//Handel GET all-users
router.get("/all-users", getAllUser);

//Handel GET A-user
router.get("/a-user/:id", authMiddleware, isAdmin, getaUser);

//Handel Delete A-user
router.delete("/delete-user/:id", deleteaUser);

//Handel PUT update password A-user
router.put("/update-password", authMiddleware, updatePassword);

//Handle GET Wish Lists
router.get("/wishlists", authMiddleware, getWishLists);

//Handle PUT save User Address
router.put("/address", authMiddleware, saveUserAddress);

//Handle POST User Cart
router.post("/cart", authMiddleware, userCart);

//Handle GET user Carts
router.get("/cart", authMiddleware, getUserCart);

//Handle DELETE empty Carts
router.delete("/empty-cart", authMiddleware, emptyCart);

//Handle POST apply coupon
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);

//Handle POST Create User Order
router.post("/cart/create-order", authMiddleware, createOrder);

//Handle GET User Order
router.get("/cart/order", authMiddleware, getUserOrder);

//Handle PUT Update User Order Status
router.put(
  "/cart/update-order/:orderID",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

module.exports = router;
