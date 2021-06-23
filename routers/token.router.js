import express, { Router } from "express";

import { getUserByEmailAndRefresJWT } from "../models/clientuser/ClientUser.model.js";
import {
  createAccessJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
} from "../helpers/jwt.helper.js";

const router = express.Router();

router.all("*", (req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const { email } = await verifyRefreshJWT(authorization);
      if (email) {
        const user = await getUserByEmailAndRefresJWT({
          email,
          refreshJWT: authorization,
        });
        if (user._id) {
          const tokenExp = user.refreshJWT.addedAt;
          tokenExp.setDate(
            tokenExp.getDate() + +process.env.JWT_REFRESH_SECRET_EXP_DAY
          );

          const today = Date.now();

          if (tokenExp > today) {
            const accessJWT = await createAccessJWT(email, user._id);
            return res.json({
              status: "success",
              message: "Here is your new Aceess JWT",
              accessJWT,
            });
          }
        }
      }
      res.status(403).json({
        status: "error",
        message: " Unauthorized !",
      });
    }
  } catch (error) {
    res.status(403).json({
      status: "error",
      message: " Unauthorized !",
    });
  }
});

export default router;

