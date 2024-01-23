"use server";

import { Products, Users } from "./model";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDb();
    const count = await Users.find({ username: { $regex: regex } }).count();
    const users = await Users.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    console.log("Connected to db");
    return { count, users };
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

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDb();
    const count = await Products.find({ title: { $regex: regex } }).count();
    const products = await Products.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    console.log("Connected to db");
    return { count, products };
  } catch (error) {
    console.log("Failed to fetch UserData");
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
