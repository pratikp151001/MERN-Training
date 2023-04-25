import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: String
  });

  export default customerSchema;