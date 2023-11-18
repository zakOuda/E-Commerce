const { generateToken } = require("../config/jwtToken");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");
const couponModel = require("../models/couponModel");
const orderModel = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const { validateMongoDbID } = require("../utilis/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("./emailCtrl");
const crybto = require("crypto");
const uniqid = require("uniqid");

//User Register
const creatUser = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const findUser = await userModel.findOne({ email: email });
  if (!findUser) {
    // Creat New User
    const newUser = await userModel.create(req.body);
    res.json({
      newUser,
    });
  } else {
    // User Already Exists
    throw new Error("User Already Exists");
  }
});

//User login
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //check If user Exists or not
  const findUser = await userModel.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser.id);
    const updateUser = await userModel.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invailed Password Or UserName");
  }
});

//Admin Login
const adminLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  //check If user Exists or not
  const findAdmin = await userModel.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("Not Authorized");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin.id);
    const updateUser = await userModel.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
    });
  } else {
    throw new Error("Invailed Password Or UserName");
  }
});

//refreshToken generate
const handleRefershToken = asyncHandler(async (req, res, next) => {
  const cookie = req.cookies;
  if (!cookie.refreshToken) {
    throw new Error("No Refresh Token in Cookies");
  }
  const refreshToken = cookie.refreshToken;
  //console.log(refreshToken)
  const user = await userModel.findOne({ refreshToken });
  if (!user) {
    throw new Error("Refresh Token is Not Exists in db or not Matched");
  }
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decode) => {
    if (err || user.id !== decode.id) {
      throw new Error("There is somthing wrong with Refresh Token");
    }
    const accessToken = generateToken(user.id);
    res.json({ accessToken });
  });
});

//Log out A user
const logoutaUser = asyncHandler(async (req, res, next) => {
  const cookie = req.cookies;
  if (!cookie.refreshToken) {
    throw new Error("No Refresh Token in Cookies");
  }
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); //Forbidden
  }
  await userModel.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.sendStatus(204);
});

//Update A user
const updateaUser = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  validateMongoDbID(id);
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updateUser);
  } catch (error) {
    throw new Error(error);
  }
});

//Block a user
const blockUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const block = await userModel.findByIdAndUpdate(id, {
      isBlocked: true,
    });
    res.json({
      message: "User Blocked",
    });
  } catch (err) {
    throw new Error(err);
  }
});

//unBlock a user
const unBlockUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const block = await userModel.findByIdAndUpdate(id, {
      isBlocked: false,
    });
    res.json({
      message: "User UnBlocked",
    });
  } catch (err) {
    throw new Error(err);
  }
});

//Get All Users
const getAllUser = asyncHandler(async (req, res, next) => {
  try {
    const Users = await userModel.find();
    res.json(Users);
  } catch (error) {
    throw new Error(error);
  }
});

//Get a user
const getaUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const User = await userModel.findById(id);
    res.json({
      getauser: User,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Delete a user
const deleteaUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const User = await userModel.findByIdAndDelete(id);
    res.json(User);
  } catch (error) {
    throw new Error(error);
  }
});

//update Password
const updatePassword = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  const password = req.body;
  validateMongoDbID(_id);
  const user = await userModel.findById(_id);
  if (password) {
    if (await user.isPasswordMatched(password.password)) {
      console.log("password not modified");
      res.json(user);
    } else {
      console.log("update password");
      user.password = password.password;
      await user.createPasswordResetToken();
      const newPassword = await user.save();
      res.json(newPassword);
    }
  } else {
    res.json(user);
  }
});

//forget password
const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error("User Not Found");
  }
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password,
        this link is valid for 10 minutes from now
        <a href = 'http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forget Password Link",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

//reset password
const resetPassword = asyncHandler(async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crybto.createHash("sha256").update(token).digest("hex");
  const user = await userModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {
      $gt: Date.now(),
    },
  });
  if (!user) {
    throw new Error("Token Expired, Please Try Again later");
  }
  user.password = password;
  user.passwordResetExpires = undefined;
  user.passwordResetToken = undefined;
  await user.save();
  res.json(user);
});

//Get All WishLists
const getWishLists = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const findUser = await userModel.findById(_id).populate("wishList");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

//Save User Address
const saveUserAddress = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
      },
      {
        new: true,
      }
    );
    res.json(updateUser);
  } catch (error) {
    throw new Error(error);
  }
});

//User Cart Creation
const userCart = asyncHandler(async (req, res, next) => {
  const { cart } = req.body;
  // console.log(cart.length);
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    let products = [];
    const user = await userModel.findById(_id);
    //check if user already have product in cart
    const alreadyExistCart = await cartModel.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      // alreadyExistCart.remove();
      const remove = await cartModel.findOneAndRemove({ orderby: user._id });
      res.json(remove);
    } else {
      for (let i = 0; i < cart.length; i++) {
        let object = {};
        object.product = cart[i].id;
        object.count = cart[i].count;
        object.color = cart[i].color;
        // object.price = cart[i].price;
        let getPrice = await productModel
          .findById(cart[i].id)
          .select("price")
          .exec();
        // console.log("price from products : ", getPrice.price);
        object.price = getPrice.price;
        products.push(object);
      }
      // console.log(products);
      let cartTotal = 0;
      for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price * products[i].count;
      }
      // console.log(products, cartTotal);
      let newCart = await new cartModel({
        products,
        cartTotal,
        orderby: user._id,
      }).save();
      res.json(newCart);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//Handle get all user Cart
const getUserCart = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const cart = await cartModel
      .findOne({ orderby: _id })
      .populate("products.product");
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

//Handle Empty Cart
const emptyCart = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const user = await userModel.findOne({ _id });
    const cart = await cartModel.findOneAndRemove({ orderby: _id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

//Handle Apply Coupon
const applyCoupon = asyncHandler(async (req, res, next) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const findCoupon = await couponModel.findOne({ name: coupon });
    // console.log(findCoupon);
    if (findCoupon === null) {
      throw new Error("Invalid Coupon");
    }
    const user = await userModel.findOne({ _id });
    let cart = await cartModel.findOne({ orderby: _id });
    // console.log(cart);
    let cartTotal = cart.cartTotal;
    let products = await cartModel
      .findOne({ orderby: _id })
      .populate("products.product");
    products = products.products;
    // console.log("cartTotal", cartTotal);
    // console.log("products.product :", products);
    let cartTotalAfterDiscount =
      cartTotal - cartTotal * (findCoupon.discount / 100);
    // console.log("cartTotalAfterDiscount", cartTotalAfterDiscount);
    const newCart = await cartModel
      .findOneAndUpdate(
        { orderby: _id },
        {
          cartTotalAfterDiscount,
        },
        {
          new: true,
        }
      )
      .populate("products.product");
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

//Handle Create Order for User
const createOrder = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  const { COD, couponApplied } = req.body;
  try {
    if (!COD) {
      throw new Error("Create Cash Order Failed");
    }
    const user = await userModel.findById(_id);
    let userCart = await cartModel
      .findOne({ orderby: _id })
      .populate("products.product");
    let finalAmount = 0;
    if (couponApplied && userCart.cartTotalAfterDiscount) {
      finalAmount = userCart.cartTotalAfterDiscount * 100;
    } else {
      finalAmount = userCart.cartTotal * 100;
    }
    let newOrder = await new orderModel({
      products: userCart.products,
      orderby: user._id,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        finalAmount: finalAmount,
        status: "Cash on Delivery",
        currency: "usd",
        CreatedAt: Date.now(),
      },
      orderStatus: "Cash on Delivery",
    }).save();
    // console.log("newOrder : ", newOrder);
    //Decrease Amount of Products in DB
    let updateQuaForProducts = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    // console.log("updateQuaForProducts:", updateQuaForProducts);
    const updatedProducts = await productModel.bulkWrite(
      updateQuaForProducts,
      {}
    );
    // console.log(updatedProducts);
    res.json({
      message: "success",
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Get A user Order
const getUserOrder = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  try {
    const findOrder = await orderModel
      .findOne({ orderby: _id })
      .populate("products.product");
    res.json(findOrder);
  } catch (error) {
    throw new Error(error);
  }
});

//Update User Order Status
const updateOrderStatus = asyncHandler(async (req, res, next) => {
  const { status } = req.body;
  const { orderID } = req.params;
  validateMongoDbID(orderID);
  try {
    const updateOrderStatus = await orderModel.findByIdAndUpdate(
      orderID,
      {
        orderStatus: status,
      },
      {
        new: true,
      }
    );
    let paymentUpdate = updateOrderStatus.paymentIntent;
    paymentUpdate.status = status;
    const updateOrderStatus2 = await orderModel.findByIdAndUpdate(
      orderID,
      {
        paymentIntent: paymentUpdate,
      },
      {
        new: true,
      }
    );
    res.json(updateOrderStatus2);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  creatUser,
  loginUser,
  adminLogin,
  handleRefershToken,
  getAllUser,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unBlockUser,
  logoutaUser,
  updatePassword,
  forgotPassword,
  resetPassword,
  getWishLists,
  saveUserAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getUserOrder,
  updateOrderStatus,
};
