import type { CreateProductInput, Product } from "./types";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/products");
  return res.json();
}

export async function createProduct(
  input: CreateProductInput,
): Promise<Product> {
  const res = await fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return res.json();
}

export async function deleteProduct(id: number): Promise<void> {
  await fetch(`/products/${id}`, { method: "DELETE" });
}
