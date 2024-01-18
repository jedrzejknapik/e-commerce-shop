import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";

const app = express();
dotenv.config({path: "backend/config/config.env"})

// Connecting to db
connectDatabase();

// Import all routes
import productRoutes from "./routes/products.js";
app.use("/api/v1", productRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT} is ${process.env.NODE_ENV} mode.`)
})