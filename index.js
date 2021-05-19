import express from "express";
const app = express();

// dotenv
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
app.use(cors());
// database
import mongoClient from "./config/db.js";
mongoClient();

const PORT = 8000;

// importing the routers
import categoryRouter from "./routers/Category.router.js";
import productRouter from './routers/Product.router.js'

// use APIs
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter)

app.get("/", function (req, res) {
  res.send("Express is now working");
});

app.listen(PORT);
