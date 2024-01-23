import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max: 30,
      min: 10,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      max: 20,
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);
export const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);
