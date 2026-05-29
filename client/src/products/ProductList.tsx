import { ProductItem } from "./ProductItem";
import type { Product } from "./types";

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

export function ProductList({ products, onDelete }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onDelete={onDelete} />
      ))}
    </ul>
  );
}
