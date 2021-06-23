import express from "express";

import { comparePassword } from "../helpers/bcrypt.helper.js";
import { getUserByEmail } from "../models/clientuser/ClientUser.model.js";
import { createAccessJWT, createRefreshJWT } from "../helpers/jwt.helper.js";
const router = express.Router();

router.all("*", (req, res, next) => {
  next();
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user?._id) {
      return res
        .status(403)
        .json({ status: "error", message: "This email is not in the system" });
    }

    const dbHashPass = user.password;

    const result = await comparePassword(password, dbHashPass);

    if (!result) {
      return res.json({ status: "error", message: "Invalid Login Details" });
    }
    const accessJWT = await createAccessJWT(user.email, user._id);
    const refreshJWT = await createRefreshJWT(user.email, user._id);

    user.password = undefined;
    res.json({
      status: "success",
      message: "Login Success",
      user,
      accessJWT,
      refreshJWT,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

export default router;
