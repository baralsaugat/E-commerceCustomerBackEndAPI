import CatSchema from "./Category.schema.js";

export const getCategories = (catObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await CatSchema.find();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

