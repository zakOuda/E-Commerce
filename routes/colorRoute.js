const express = require("express");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  ColorCreate,
  ColorUpdate,
  ColorDelete,
  ColorGetAll,
  ColorGetOne,
} = require("../controller/colorCtrl");

const router = express.Router();

//Handle POST creat Color
router.post("/", authMiddleware, isAdmin, ColorCreate);

//Handle PUT update Color
router.put("/:id", authMiddleware, isAdmin, ColorUpdate);

//Handle delete a Color
router.delete("/:id", authMiddleware, isAdmin, ColorDelete);

//Handle Get All Color
router.get("/", authMiddleware, isAdmin, ColorGetAll);

//Handle Get One Color
router.get("/:id", authMiddleware, isAdmin, ColorGetOne);

module.exports = router;
