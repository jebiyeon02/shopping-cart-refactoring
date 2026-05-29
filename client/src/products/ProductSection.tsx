import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";
import { useProducts } from "./useProducts";

export default function ProductSection() {
  const { products, addProduct, removeProduct } = useProducts();

  return (
    <div>
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} onDelete={removeProduct} />
    </div>
  );
}
