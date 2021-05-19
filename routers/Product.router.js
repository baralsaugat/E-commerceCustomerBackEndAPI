import express from "express";
const router = express.Router();

import slugify from "slugify";

import {
  getProducts,
  getProductsById,
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

export default router;
