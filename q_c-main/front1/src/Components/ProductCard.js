// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ProductCard.css';
// const ProductCard = ({ product, addToCart }) => {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(product);
//     // Redirect to the cart page
//     navigate('/Cart');
//   };

//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>₹{product.price}</p>
//       <img src={product.image} alt="Product" />
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductCard;
// ProductCard.js
// import React from 'react';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />
//       <div className="product-content">
//         <h3>{product.title}</h3>
//         <p>{product.text}</p>
//         <p>Price: ${product.price}</p>
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// ProductCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // Import the CSS file


const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    // Redirect to the cart page
    navigate('/cart');
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">₹{product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;