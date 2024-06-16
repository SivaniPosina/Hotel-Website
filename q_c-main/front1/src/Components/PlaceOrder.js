import React from 'react';
import { useLocation } from 'react-router-dom';
import './PlaceOrder.css';
const PlacedOrder = () => {
  const location = useLocation();
  const totalAmount = new URLSearchParams(location.search).get('total');

  return (
    <div className="hlo">
      <h1 id="ord"><center>Order Placed Successfully!</center></h1>
      <span id="i"><center>Thank you for ordering. <br></br>Your total amount is ₹{totalAmount}</center></span>
    </div>
  );
};

export default PlacedOrder;