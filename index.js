const express = require("express");
const dbConnect = require("./config/dbConnect");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const PCategoryRoute = require("./routes/prodCategoryRoute");
const BCategoryRoute = require("./routes/blogCategoryRoute");
const brandRoute = require("./routes/brandRoute");
const couponRoute = require("./routes/couponRoute");
const colorRoute = require("./routes/colorRoute");
const enquiryRoute = require("./routes/enqRoute");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

/*cookieParser */
app.use(cookieParser());

/*body-praser for APIs */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*Morgan for requsets */
app.use(morgan("dev"));

/* Mongodb Establised Connection*/
dbConnect();

/*APIs Handling */
app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/pcategory", PCategoryRoute);
app.use("/api/bcategory", BCategoryRoute);
app.use("/api/brands", brandRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/color", colorRoute);
app.use("/api/enquiry", enquiryRoute);

/*Errors Handlers */
app.use(notFound);
app.use(errorHandler);

/*Start Server listening */
app.listen(PORT, () => {
  console.log("SERVER is running at port ", PORT);
});
