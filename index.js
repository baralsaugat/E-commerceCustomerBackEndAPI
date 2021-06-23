import express from "express";
const app = express();

// dotenv
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// database
import mongoClient from "./config/db.js";
mongoClient();

const PORT = 8000;

// importing the routers
import categoryRouter from "./routers/Category.router.js";
import productRouter from "./routers/Product.router.js";
import clientUserRouter from "./routers/ClientUsers.router.js";
import loginRouter from "./routers/Login.router.js";
import tokenRouter from "./routers/token.router.js";

// use APIs
app.use("/api/v1/clientuser", clientUserRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/token", tokenRouter);

app.get("/", function (req, res) {
  res.send("Express is now working");
});

app.listen(PORT);
