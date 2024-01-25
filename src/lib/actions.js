"use server";

import { signIn, signOut } from "@/lib/auth";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Products, Users } from "./model";
import { connectToDb } from "./utils";

export const addProduct = async (formdata) => {
  const { title, price, desc, image, stock, color, size } =
    Object.fromEntries(formdata);
  try {
    connectToDb();
    const newProduct = new Products({
      title,
      price,
      desc,
      image,
      stock,
      color,
      size,
    });
    await newProduct.save();
    console.log("Product successfuly added");
  } catch (error) {
    throw new Error("addProduct failed");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addUser = async (formdata) => {
  const {
    username,
    password,
    email,
    image,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formdata);
  try {
    connectToDb();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Users({
      username,
      password: hashedPassword,
      email,
      image,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
    console.log("User successfuly added");
  } catch (error) {
    throw new Error("Faild to add user", error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Users.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("failed to delete the User");
  }
  revalidatePath("dashboard");
};

export const deleteProducts = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Products.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Delete products failed");
  }
  revalidatePath("/dashboard/products");
};

export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    image,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);
  try {
    connectToDb();

    const updateFields = {
      id,
      username,
      email,
      password,
      image,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Users.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("Update user failed", error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProducts = async (formData) => {
  const { id, title, price, desc, image, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const updateProduct = {
      id,
      title,
      price,
      desc,
      image,
      stock,
      color,
      size,
    };

    Object.keys(updateProduct).forEach(
      (key) => updateProduct[key] === "" || undefined
    ) && delete updateProduct[key];

    await Products.findByIdAndUpdate(id, updateProduct);
  } catch (error) {
    throw new Error("Update products failed");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenTicate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
  }
};

export const Logout = async () => {
  await signOut();
};
