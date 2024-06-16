
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 },
]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;