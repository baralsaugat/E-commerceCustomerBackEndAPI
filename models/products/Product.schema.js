import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      defualt: "",
    },
    slug: {
      type: String,
      require: true,
      default: "",
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    salePrice: {
      type: Number,
    },
    saleEndDate: {
      type: Date,
      default: null,
    },
    qty: {
      type: Number,
      require: true,
      default: 0,
    },
    thumbNail: {
      type: String,
    },
    images: {
      type: Array,
    },
    categories: {
      type: Array,
    },
  },
  {
    timestamp: true,
  }
);
const ProdSchema = mongoose.model("Product", ProductSchema);

export default ProdSchema;
