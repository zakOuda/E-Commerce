const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

let counter = 1;
const multerStorage = multer.diskStorage({
  destination: function (req, file, cd) {
    //console.log('multerStorage file name : ' + path.join(__dirname,'../public/images/'))
    cd(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cd) {
    const uniqueSuffix = Date.now() + "+" + Math.round(Math.random() * 129);
    //console.log('file name is : ' , file.originalname)
    //console.log('request files is : ' , req.params.id)
    cd(null, req.params.id + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cd) => {
  if (file.mimetype.startsWith("image")) {
    cd(null, true);
  } else {
    cd(
      {
        message: "Unsupported file Format",
      },
      false
    );
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: {
    fileSize: 2000000,
  },
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 80 })
        .toFile(`public/images/products/${file.filename}`);
      fs.unlinkSync(`public/images/products/${file.filename}`);
    })
  );
  next();
};

const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 80 })
        .toFile(`public/images/blogs/${file.filename}`);
      fs.unlinkSync(`public/images/blogs/${file.filename}`);
    })
  );
  next();
};

module.exports = {
  uploadPhoto,
  productImgResize,
  blogImgResize,
};
