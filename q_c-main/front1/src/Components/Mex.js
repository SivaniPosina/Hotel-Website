import React from 'react';
import './Mex.css';
import { useState } from 'react';
import { useCart } from '../CartContext';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
const Mex = ({ addToCart }) => {
  const [products] = useState([
  {
    id: 1,
    image: 'm1.jpeg',
    title: 'Tacos',
    text: 'A taco is a traditional Mexican food consisting of a small hand-sized corn- or wheat-based tortilla topped with a filling.',
    price: 143,
  },
  {
    id: 2,
    image: 'm2.jpeg',
    title: 'Enchilada',
    text: 'An enchilada is a Mexican dish consisting of a corn tortilla rolled around a filling and covered with a savory sauce. ',
    price: 143,
  },
  {
    id: 3,
    image: 'm3.webp',
    title: 'Burritos',
    text: 'Burritos are a popular Mexican dish consisting of a large flour tortilla filled with various ingredients.',
    price: 143,
  },
  {
    id: 4,
    image: 'm4.webp',
    title: 'Quesadilla',
    text: 'A quesadilla is a Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings.',
    price: 143,
  },
  {
    id: 5,
    image: 'm5.jpeg',
    title: 'Chilaquiles',
    text: 'Chilaquiles are a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.',
    price: 143,
  },
  {
    id: 6,
    image: 'm6.jpeg',
    title: 'Barbacoa',
    text: 'Historically, barbacoa references the style of barbecue by the Taino people of the Caribbean.',
    price: 143,
  },
  {
    id: 7,
    image: 'm7.webp',
    title: 'Chile relleno',
    text: 'Originating from Puebla, in this dish a green chili pepper is stuffed with diced pork, nuts, and raisins.',
    price: 143,
  },
  {
    id: 8,
    image: 'm8.webp',
    title: 'Carnitas',
    text: 'Carnitas are made by braising or simmering pork in oil or preferably lard until tender.',
    price: 143,
  },
  {
    id: 9,
    image: 'm9.webp',
    title: 'Churro',
    text: 'A churro is a type of fried dough from Spanish and Portuguese cuisine, made with choux pastry dough piped.',
    price: 143,
  },
  {
    id: 10,
    image: 'm10.jpeg',
    title: 'Birria',
    text: 'Birria is a meat stew or soup made from goat, beef, lamb, mutton, or chicken.',
    price: 143,
  },
  {
    id: 11,
    image: 'm11.jpg',
    title: 'Concha',
    text: 'Concha, plural conchas, is a traditional Mexican sweet bread roll. Conchas get their name from their round shape.',
    price: 143,
  },
  {
    id: 12,
    image: 'm12.jpeg',
    title: 'Aguachile',
    text: 'Aguachile is a Mexican dish made of shrimp, submerged in liquid seasoned with chiltepin peppers, lime juice, salt, slices of cucumber and slices of onion.',
    price: 143,
  },
]);
  // Add more cards as needed
  useEffect(() => {
    // Store products in localStorage
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  
  
  
  return (
    <div className="App">
      <center>
      <h2>Products</h2>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
      </center>
    </div>
  );
  };


function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    props.handleAddToCart(props); // Call the parent's addToCart function
    setIsAdded(true); // Update the state to indicate that the item has been added
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        {isAdded ? (
          <button disabled>Added to Cart</button>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}
// function Mex() {
//   const { dispatch } = useCart();

//   // const handleAddToCart = (item) => {
//   //   dispatch({ type: 'ADD_TO_CART', payload: item });
//   // };
//   const [addedItemsCount, setAddedItemsCount] = useState(0);

//   const handleAddToCart = (item) => {
//     dispatch({ type: 'ADD_TO_CART', payload: item });
//     // Call the callback function to increment the count
//     setAddedItemsCount(addedItemsCount + 1);
//   };
//   return (
//     <div className="App">
//         <center>
//         <h1>Mexican cuisine</h1>
//         <p>"Mexican cuisine is renowned for its bold flavors, vibrant spices, and diverse array of dishes, from sizzling street tacos to rich mole sauces."</p>
//       {cardsData.map((card) => (
//         <Card key={card.id} {...card} />
//       ))}
//       </center>
//     </div>
//   );
// }

export default Mex;