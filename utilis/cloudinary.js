const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dgc7bblbp",
  api_key: "811749423221559",
  api_secret: "MjhAvupIqcXpTMT9B2g2LC52sxY",
});

const cloudinaryUpload = async (fileToUpload) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUpload, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

const cloudinaryDelete = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};
module.exports = {
  cloudinaryUpload,
  cloudinaryDelete,
};
//SSID:MobileWiFi-2656
//40267393
