const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { validateMongoDbID } = require("../utilis/validateMongodbId");
const { cloudinaryUpload } = require("../utilis/cloudinary");
const fs = require("fs");

//Creat A Blog
const creatBlog = asyncHandler(async (req, res, next) => {
  try {
    const newBlog = await blogModel.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//update a blog
const updateaBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const updateaBlog = await blogModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateaBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//get a blog
const getaBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const getaBlog = await blogModel.findById(id);
    await blogModel.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json(getaBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//get All Blog
const getAllBlog = asyncHandler(async (req, res, next) => {
  try {
    const getAllBlog = await blogModel.find();
    res.json(getAllBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a blog
const deleteBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbID(id);
  try {
    const deleteBlog = await blogModel.findByIdAndRemove(id);
    if (!deleteBlog) {
      throw new Error("There is No Blog or Not Mathced");
    }
    res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//like a Blog
const likeBlog = asyncHandler(async (req, res, next) => {
  const { blogID } = req.body;
  validateMongoDbID(blogID);

  //find the blog which ypu want to be liked
  const blog = await blogModel.findById(blogID);
  if (!blog) {
    throw new Error("There is No Blog or Not Mathced");
  }
  // find the user ID
  const loginUserID = req.user._id;

  // find if the user has liked the post
  const isLiked = blog.isLiked;

  const alreadyDisliked = blog.disLikes.find(
    (userID) => userID.toString() === loginUserID.toString()
  );
  if (alreadyDisliked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogID,
      {
        $pull: { disLikes: loginUserID },
        isDisliked: false,
        $push: { likes: loginUserID },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else if (isLiked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogID,
      {
        $pull: { likes: loginUserID },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await blogModel.findByIdAndUpdate(
      blogID,
      {
        $push: { likes: loginUserID },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

//dislike a Blog
const dislikeBlog = asyncHandler(async (req, res, next) => {
  const { blogID } = req.body;
  validateMongoDbID(blogID);

  //find the blog which ypu want to be liked
  const blog = await blogModel.findById(blogID);
  if (!blog) {
    throw new Error("There is No Blog or Not Mathced");
  }
  // find the user ID
  const loginUserID = req.user._id;

  // find if the user has liked the post
  const isDisLiked = blog.isDisliked;
  //console.log(isDisLiked)

  const alreadyliked = blog.likes.find(
    (userID) => userID.toString() === loginUserID.toString()
  );
  if (alreadyliked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogID,
      {
        $pull: { likes: loginUserID },
        isLiked: false,
        $push: { disLikes: loginUserID },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else if (isDisLiked) {
    const blog = await blogModel.findByIdAndUpdate(
      blogID,
      {
        $pull: { disLikes: loginUserID },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await blogModel.findByIdAndUpdate(
      blogID,
      {
        $push: { disLikes: loginUserID },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

//upload Images
const uploadImgBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.files);
  validateMongoDbID(id);
  try {
    const uploadBlogCloud = (path) => cloudinaryUpload(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploadBlogCloud(path);
      console.log("NewPath : ", newPath);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const updateImgBlog = await blogModel.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      {
        new: true,
      }
    );
    /*files.map((file)=>{
            console.log('images delete unnecessary');
            fs.unlinkSync(`public/images/${file.filename}`)
        })*/
    res.json(updateImgBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  creatBlog,
  updateaBlog,
  getaBlog,
  getAllBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImgBlog,
};
