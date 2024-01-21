"use server";

import { connectToDb } from "./connectToDb";
import { Products, Users } from "./model";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDb();
    const user = await Users.find({ username: { $regex: regex } });
    console.log("Connected to db");
    return user;
  } catch (error) {
    console.log("Failed to fetch UserData");
    throw new Error(error);
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDb();
    const user = await Users.findById(id);
    return user;
  } catch (error) {
    console.log("Failed to get user");
    throw new Error(error);
  }
};

export const fetchProducts = async () => {
  try {
    connectToDb();
    const product = await Products.find();
    return product;
  } catch (error) {
    console.log("Failed to get products");
    throw new Error(error);
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDb();
    const product = await Products.findById(id);
    return product;
  } catch (error) {
    console.log("Failed to get products");
    throw new Error(error);
  }
};
