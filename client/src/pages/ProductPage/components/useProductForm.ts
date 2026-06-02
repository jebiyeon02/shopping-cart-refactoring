import {
  validateProductPrice,
  validateProductName,
} from "../../../domain/product/product.validator";
import { useState } from "react";

export const useProductForm = (
  addProduct: (name: string, price: string) => Promise<void>,
) => {
  // 요기는 클라이언트 상태
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async () => {
    try {
      validateProductName(name);
      validateProductPrice(price);

      await addProduct(name, price);
      setName("");
      setPrice("");
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const updateName = (name: string) => {
    setName(name);
  };

  const updatePrice = (price: string) => {
    setPrice(price);
  };

  return { name, price, error, handleAdd, updateName, updatePrice };
};
