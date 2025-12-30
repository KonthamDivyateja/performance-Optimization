 import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product);
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}