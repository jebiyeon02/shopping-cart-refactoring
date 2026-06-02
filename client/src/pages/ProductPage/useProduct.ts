import { useState, useEffect } from "react";
import type { Product } from "../../domain/product/Product";
import {
  requestGetProducts,
  requestDeleteProduct,
  requestPostProduct,
} from "../../domain/product/product.api";

export const useProduct = () => {
  // 여기에 서버 상태 (products) 변화시키는 로직들을 싹 모아서 응집도를 높인다.
  // 사실상 이번 리팩토링의 핵심 *매우 중요한 훅
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await requestGetProducts();
      setProducts(products);
    }

    fetchProducts();
  }, []);

  const addProduct = async (name: string, price: string) => {
    const product = await requestPostProduct({
      name: name,
      price: Number(price),
    });
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = async (id: number) => {
    await requestDeleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return { products, addProduct, deleteProduct };
};
