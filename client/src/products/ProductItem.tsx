import type { Product } from "./types";

interface ProductItemProps {
  product: Product;
  onDelete: (id: number) => void;
}

export function ProductItem({ product, onDelete }: ProductItemProps) {
  return (
    <li>
      {product.name} — {product.price.toLocaleString()}원
      <button type="button" onClick={() => onDelete(product.id)}>
        삭제
      </button>
    </li>
  );
}
