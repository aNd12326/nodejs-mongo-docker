// src/controllers/product.controller.ts
import { Request, Response } from "express";
import {
  createProduct as createProductService,
  getAllProducts as getAllProductsService,
} from "../services/product.service"; // Update the import path

export async function createProduct(req: Request, res: Response) {
  const { name, price, description } = req.body;

  try {
    if (!name || !price || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Call the createProduct function from the ProductService
    const product = await createProductService(name, price, description);

    // Respond with the created product
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Error creating product" });
  }
}

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};
