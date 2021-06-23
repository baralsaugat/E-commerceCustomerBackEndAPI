import express from "express";
const router = express.Router();

import slugify from "slugify";

import {
  getProducts,
  getProductsById,
  getProductsByCatId
} from "../models/products/Product.model.js";

router.all("*", (req, res, next) => {
  next();
});

router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    const result = _id ? await getProductsById(_id) : await getProducts();
    res.json({
      status: "success",
      message: "products have been loaded",
      result,
    });
  } catch (error) {
    throw error;
  }
});
router.get("/catProd/:catId?", async (req, res) => {
  const { catId } = req.params;
  console.log(catId);
  try {
    const result = await getProductsByCatId(catId);
    res.json({
      status: "success",
      message: "products have been loaded",
      result,
    });
  } catch (error) {
    throw error;
  }
});

export default router;
