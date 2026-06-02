// src/ProductPage.tsx  — 모든 게 여기 있다
import ProductInput from "./components/ProductInput";
import ProductList from "./components/ProductList";
import { useProduct } from "./useProduct";

export default function ProductPage() {
  const { products, addProduct, deleteProduct } = useProduct();

  return (
    <div>
      <ProductInput addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}
