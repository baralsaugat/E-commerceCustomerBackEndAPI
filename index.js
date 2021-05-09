import express from "express";
const app = express();

// dotenv
import dotenv from "dotenv";
dotenv.config();

// database
import mongoClient from "./config/db.js";
mongoClient();



const PORT = 8000;

// importing the routers
import categoryRouter from './routers/Category.router.js'



// use APIs
app.use("/api/v1/category", categoryRouter)



app.get("/", function (req, res) {
  res.send("Express is now working");
});



app.listen(PORT);
