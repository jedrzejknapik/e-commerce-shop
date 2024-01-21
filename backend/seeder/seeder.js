import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/e-commerce-store";

const seedProducts = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    // Delete products
    await Product.deleteMany();
    console.log("Products have ben deleted");
    // Insert new products
    await Product.insertMany(products);
    console.log("New products have been inserted");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
