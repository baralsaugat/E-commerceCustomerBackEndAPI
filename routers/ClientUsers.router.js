import express from "express";

const router = express.Router();
import { hashPassword } from "../helpers/bcrypt.helper.js";

import { createUser } from "../models/clientuser/ClientUser.model.js";

router.all("*", (req, res, next) => {
  next();
});

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;
    console.log(req.body);
    const hashPass = await hashPassword(password);

    const newUser = {
      ...req.body,
      password: hashPass,
    };

    const result = await createUser(newUser);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Congratulations, you have been added to our network",
        result,
      });
    }

    res.json({
      status: "error",
      message: "sorry, couldnot add to the network",
    });
  } catch (error) {
    if (error.message.includes("duplicate key error collection")) {
      return res.json({ status: "error", message: "This email already exist" });
    }
    throw new Error(error.message);
  }
});

export default router;
