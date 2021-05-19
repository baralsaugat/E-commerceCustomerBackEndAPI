import { resolve } from "path";
import ProdSchema from "./Product.schema.js";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    try {
      const result = ProdSchema.find();
      resolve(result);
      
    } catch (error) {
      reject(error);
    }
  });
};
export const getProductsById = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      const result = ProdSchema.findById(_id);
      resolve(result);
      
    } catch (error) {
      reject(error);
    }
  });
};