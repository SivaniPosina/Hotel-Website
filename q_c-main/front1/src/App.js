import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu'; // Import your Menu component
import NorIn from './Components/NorIn'; // Import your NorIn component
import SouIn from './Components/SouIn';
import Chinese from './Components/Chinese';
import Italian from './Components/Italian';
import Mex from './Components/Mex';
import Home from './Components/home';
import About from './about';
import Contact from './Contact';
import Offers from './Offers';
import RestaurantList from './restaurantlist';
import Feedback from './Feedback';
import Login from './Login';
import { CartProvider } from './CartContext';
import RegisterForm from './RegisterForm';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import { useState } from 'react';
import PlacedOrder from './Components/PlaceOrder';

function App() {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, { ...product, quantity: 1 }]);
  // };
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };



  return (
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Menu' element={<Menu/>}/>
        {/* <Route path="/NorIn" element={<NorIn />} /> */}
        <Route path="/SouIn" element={<SouIn addToCart={addToCart}/>} />
        <Route path="/Chinese" element={<Chinese addToCart={addToCart}/>} />
        <Route path="/Italian" element={<Italian addToCart={addToCart}/>} />
        <Route path="/Mex" element={<Mex addToCart={addToCart}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Offers" element={<Offers/>} />
        <Route path="/restaurantlist" element={<RestaurantList/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path='/NorIn' element={<NorIn addToCart={addToCart}/>}/>

        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/placeorder" element={<PlacedOrder/>} />

        
        
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;