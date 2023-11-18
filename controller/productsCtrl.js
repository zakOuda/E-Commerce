const productModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const userModel = require("../models/userModel");
const { validateMongoDbID } = require("../utilis/validateMongodbId");
const { cloudinaryUpload, cloudinaryDelete } = require("../utilis/cloudinary");
const fs = require("fs");

//creat Product
const creatProduct = asyncHandler(async (req, res, next) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await productModel.create(req.body);
    res.json({
      newProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//find A Product
const findaProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const findProdust = await productModel.findById(id);
    res.json(findProdust);
  } catch (error) {
    throw new Error(error);
  }
});

//find all products and filtering
const findAllProducts = asyncHandler(async (req, res, next) => {
  try {
    //Fieltering
    const queryOb = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => {
      delete queryOb[el];
    });

    let queryStr = JSON.stringify(queryOb);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = productModel.find(JSON.parse(queryStr));

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Limitings
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    //console.log('skip: ' , skip)
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const ProductCount = await productModel.countDocuments();
      //console.log('ProductCount: ' , ProductCount)
      if (skip >= ProductCount) {
        throw new Error("This page dose not Exists");
      }
    }

    const allProducts = await query;
    res.json(allProducts);
  } catch (error) {
    throw new Error(error);
  }
});

//update a product
const updateaProduct = asyncHandler(async (req, res, next) => {
  /*const _id = req.params.id
    console.log({_id})
    try{
        if(req.body.title){
            req.body.slug = slugify(req.body.title)
            console.log(req.body.slug)
        }
        const updateProduct = await productModel.findOneAndUpdate({_id}, req.body , {
            new:true
        })
        console.log(updateProduct)
        res.json(updateProduct)
    }catch(error){
        throw new Error(error)
    }*/
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a product
const deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const deleteProduct = await productModel.findByIdAndRemove(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Add to WishLists
const addToWishLists = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  //console.log(_id)
  const { prodId } = req.body;
  //console.log(prodId)
  try {
    const user = await userModel.findById(_id);
    const alreadyAdded = user.wishList.find(
      (id) => id.toString() === prodId.toString()
    );
    //console.log(alreadyAdded)
    if (alreadyAdded) {
      let user = await userModel.findByIdAndUpdate(
        _id,
        {
          $pull: { wishList: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await userModel.findByIdAndUpdate(
        _id,
        {
          $push: { wishList: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//Rating
const ratingProd = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbID(_id);
  const { star, comment, prodId } = req.body;
  const product = await productModel.findById(prodId);
  try {
    const alreadyRated = product.ratings.find(
      (userID) => userID.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await productModel.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
      const product = await productModel.findById(prodId);
      let sumStars = 0;
      const totalLength = product.ratings.length;
      product.ratings.map((item) => {
        sumStars = sumStars + item.star;
      });
      const totalRating = (100 * Math.round(sumStars / totalLength)) / 5;
      const updateProduct = await productModel.findByIdAndUpdate(
        prodId,
        {
          totalRating: totalRating,
        },
        {
          new: true,
        }
      );
      res.json(updateProduct);
    } else {
      const rateProduct = await productModel.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: [
              {
                star: star,
                comment: comment,
                postedby: _id,
              },
            ],
          },
        },
        {
          new: true,
        }
      );
      let sumStars = 0;
      const totalLength = rateProduct.ratings.length;
      rateProduct.ratings.map((item) => {
        sumStars = sumStars + item.star;
      });
      const totalRating = (100 * Math.round(sumStars / totalLength)) / 5;
      const updateProduct = await productModel.findByIdAndUpdate(
        prodId,
        {
          totalRating: totalRating,
        },
        {
          new: true,
        }
      );
      res.json(updateProduct);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//upload Images
const uploadImgProduct = asyncHandler(async (req, res, next) => {
  try {
    const uploadProdCloud = (path) => cloudinaryUpload(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploadProdCloud(path);
      console.log("NewPath : ", newPath);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete uploaded Images
const deleteImgProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const uploadProdCloud = cloudinaryDelete(id, "images");
    res.json({
      message: "Deleted",
    });
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  creatProduct,
  findaProduct,
  findAllProducts,
  updateaProduct,
  deleteProduct,
  addToWishLists,
  ratingProd,
  uploadImgProduct,
  deleteImgProduct,
};
