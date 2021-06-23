import SessionSchema from "./Session.schema.js";

export const storeAccessJwt = async (newSession) => {
  try {
    const result = await SessionSchema(newSession).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAccessJwtByToken = async (accessJWT) => {
  try {
    const result = await SessionSchema.findOne({ accessJWT });
    return Promise.resolve(result);
  } catch (error) {
    return Promise.resolve(false);
  }
};
