import { Product } from "../models/product.model";

export async function createProduct(
  name: string,
  price: number,
  description: string
) {
  try {
    const product = await Product.create({ name, price, description });
    return product;
  } catch (error) {
    throw error;
  }
}

export async function getAllProducts() {
  return await Product.find({});
}
