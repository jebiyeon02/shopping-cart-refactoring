// api 요청 책임(Infrastructure)

import type { Product } from "./ProductPage";

export async function requestGetProducts(): Promise<Product[]> {
  const response = await fetch("/products");
  return await response.json();
}

export async function requestPostProduct({
  name,
  price,
}: {
  name: string;
  price: number;
}): Promise<Product> {
  const response = await fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price: Number(price) }),
  });

  return (await response.json()) as Promise<Product>;
}

export async function requestDeleteProduct(id: number) {
  await fetch(`/products/${id}`, { method: "DELETE" });
}
