import jwt from "jsonwebtoken";

import { storeAccessJwt } from "../models/session/Session.model.js";
import { storeRefreshJWT } from "../models/clientuser/ClientUser.model.js";

export const createAccessJWT = (email, _id) => {
  return new Promise((resolve, reject) => {
    try {
      const accessJWT = jwt.sign({ email }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "15m",
      });
      console.log(accessJWT);

      if (accessJWT) {
        const newSession = {
          accessJWT,
          userId: _id,
        };
        storeAccessJwt(newSession);
      }
      resolve(accessJWT);
    } catch (error) {
      reject(error);
    }
  });
};
export const createRefreshJWT = (email, _id) => {
  return new Promise((resolve, reject) => {
    try {
      const refreshJWT = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "30d",
      });

      storeRefreshJWT(_id, refreshJWT);
      resolve(refreshJWT);
    } catch (error) {
      reject(error);
    }
  });
};

export const verifyAccessJWT = (accessJWT) => {
  try {
    const decoded = jwt.verify(accessJWT, process.env.JWT_ACCESS_SECRET);
    return Promise.resolve(decoded);
  } catch (error) {
    return Promise.resolve(false);
  }
};
export const verifyRefreshJWT = (refreshJWT) => {
  try {
    const decoded = jwt.verify(refreshJWT, process.env.JWT_REFRESH_SECRET);
    return Promise.resolve(decoded);
  } catch (error) {
    return Promise.resolve(false);
  }
};
