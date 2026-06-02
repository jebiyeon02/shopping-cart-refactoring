import type { Product } from "../../../domain/product/Product";

type ProductItemProps = {
  item: Product;
  deleteProduct: (id: number) => Promise<void>;
};

const ProductItem = ({ item, deleteProduct }: ProductItemProps) => {
  return (
    <li>
      {item.name} — {item.price.toLocaleString()}원
      <button onClick={() => deleteProduct(item.id)}>삭제</button>
    </li>
  );
};

export default ProductItem;
