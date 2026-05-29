import { useEffect, useState } from "react";
import { createProduct, deleteProduct, fetchProducts } from "./productsApi";
import type { CreateProductInput, Product } from "./types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const addProduct = async (input: CreateProductInput) => {
    const product = await createProduct(input);
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = async (id: number) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, addProduct, removeProduct };
}
