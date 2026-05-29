import { useState } from "react";
import type { CreateProductInput } from "./types";
import { validateProductName } from "./validate";
import { validateProductPrice } from "./validate";

interface ProductFormProps {
  onAdd: (input: CreateProductInput) => Promise<void>;
}

export function ProductForm({ onAdd }: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async () => {
    const validationError =
      validateProductName(name) ?? validateProductPrice(price);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    await onAdd({ name, price: Number(price) });
    setName("");
    setPrice("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="상품명"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="가격"
        type="number"
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
