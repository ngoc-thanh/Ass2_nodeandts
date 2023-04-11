// import cors from "cors"
///app
import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/products";
import categoryRouter from "./routes/category";
import authRouter from "./routes/user";
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
mongoose.connect("mongodb://127.0.0.1:27017/we17307")
export const viteNodeApp = app;