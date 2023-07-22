// src/index.ts
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connect } from "mongoose";
import { createProduct, getAllProducts } from "./controllers/ProductController"; // Add this line

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connection
const MONGODB_URI = "mongodb://mongo:27017/my-db"; // Docker Compose service name 'mongo' will resolve to the MongoDB container
connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, API!");
});

app.get("/allProducts", getAllProducts);

app.post("/products", createProduct); // Add this line for the POST method

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
