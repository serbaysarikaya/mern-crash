import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoustes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // JSON verilerini işlemek için

app.use("/api/products", productRoustes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
