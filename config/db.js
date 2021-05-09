import mongoose from "mongoose";

const mongoClient = async () => {
  const conn = await mongoose.connect("mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  if (conn) {
    console.log("Mongo Database is connected");
  }
};

export default mongoClient;
