import express from "express";

const router = express.Router();

import slugify from "slugify";

import { getCategories } from "../models/category/Category.model.js";


router.all("*", (req, res, next) => {
  next();
});

router.get("/:id?", async (req, res) => {
  const { _id } = req.params;
  try {
    const result = _id ? await getProductsBySlugId() : await getCategories();
    res.json({
      status: "success",
      message: "Fetching categories",
      result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

export default router;
