import { useProductForm } from "./useProductForm";

const ProductInput = ({
  addProduct,
}: {
  addProduct: (name: string, price: string) => Promise<void>;
}) => {
  const { name, price, error, handleAdd, updateName, updatePrice } =
    useProductForm(addProduct);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="상품명"
      />
      <input
        value={price}
        onChange={(e) => updatePrice(e.target.value)}
        placeholder="가격"
        type="number"
      />
      <button onClick={handleAdd}>추가</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProductInput;
