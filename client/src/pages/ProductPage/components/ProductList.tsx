import ProductItem from "./ProductItem";
import type { Product } from "../../../domain/product/Product";

type ProductListProps = {
  products: Product[];
  deleteProduct: (id: number) => Promise<void>;
};

const ProductList = ({ products, deleteProduct }: ProductListProps) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            item={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
