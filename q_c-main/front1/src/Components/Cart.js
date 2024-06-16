// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Cart.css';


// const Cart = ({ cart, removeFromCart }) => {
//   if (!cart || cart.length === 0) {
//     return <h3 className="emp">Your cart is empty.</h3>;
//   }

//   const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handlePlaceOrder = () => {
//     const totalAmount = getTotalPrice();
//     window.location.href = `/placeorder?total=${totalAmount}`;
//   };

//   const handleRemoveFromCart = (itemId) => {
//     removeFromCart(itemId);
//     // Optionally, you can update the localStorage or perform any other actions
//   };

//   return (
//     <div>
//       <span className="crt"><center><u>My Cart</u></center></span>
//       <ul className="cart-list">
//         {cart.map((item) => (
//           <li key={item.id} className="cart-item">
//             <img className="img1" src={storedProducts.find((product) => product.id === item.id)?.image} alt={item.title} />
//             <div className="cart-item-details">
//               <p>
//                 {item.title} - ₹{item.price}
//               </p>
//             </div>
//             <div className="cart-item-actions">
//               <button onClick={() => handleRemoveFromCart(item.id)}>
//                 Remove
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <span id="hi"><center>Total Price: ₹{getTotalPrice()}</center></span>
//       <br></br><br></br>
//       <center><button onClick={handlePlaceOrder} id="place">Place Order</button></center>
//     </div>
//   );
// };

// export default Cart;
import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart, updateQuantity }) => {
  if (!cart || cart.length === 0) {
    return <h3 className="emp">Your cart is empty.</h3>;
  }

  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

  const handlePlaceOrder = () => {
    const totalAmount = getTotalPrice();
    window.location.href = `/placeorder?total=${totalAmount}`;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="Cart">
      <span className="crt"><center><u>My Cart</u></center></span>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img
              className="img1"
              src={storedProducts.find(product => product.id === item.id)?.image}
              alt={item.title}
              style={{ width: '70px', marginRight: '10px' }}
            />
            <div className="cart-item-details">
              <p>
                {item.title} - ₹{item.price}
              </p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p id="hi" style={{ textAlign: 'center', color: 'yellow' }}>Total Price: ₹{getTotalPrice()}</p>
      <br></br><br></br>
      <center><button onClick={handlePlaceOrder} id="place">Place Order</button></center>
    </div>
  );
};

export default Cart;
