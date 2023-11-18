const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    /*category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },*/
    brand: {
      type: String,
      required: true,
    },
    /*brand:{
        type:String,
        enum:["Apple","Samsung","Lenovo"]
    },*/
    quantity: {
      type: Number,
      require: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: [],
    color: [],
    tags: [],
    /*color:{
        type:String,
        enum:["Balck","Brown","Red"]
    },*/
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    totalRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
