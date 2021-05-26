import mongoose from "mongoose";

const ClientUserSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      require: true,
      default: "",
    },
    lName: {
      type: String,
      require: true,
      defualt: "",
    },
    email: {
      type: String,
      require: true,
      default: "",
    },
    password: {
      type: String,
      require: true,
      defualt: "",
    },
  },
  { timestamp: true }
);

const ClientUsersSchema = mongoose.model("ClientUser", ClientUserSchema);
export default ClientUsersSchema;
