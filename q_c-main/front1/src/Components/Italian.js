import React from 'react';
import './Italian';
import { useState } from 'react';
import { useCart } from '../CartContext';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
const Italian = ({ addToCart }) => {
  const [products] = useState([
  {
    id: 1,
    image: 'i1.jpeg',
    title: 'Pizza Margherita',
    text: 'A classic Neapolitan pizza topped with tomato sauce, basil leaves, and a drizzle of olive oil.',
    price:'300',
  },
  {
    id: 2,
    image: 'i2.jpg',
    title: 'Pasta Carbonara',
    text: 'A Roman pasta dish  is an creamy and delicious made with eggs, Pecorino Romano cheese.',
    price:'350',
  },
  {
    id: 3,
    image: 'i3.webp',
    title: 'Lasagna',
    text: 'Layers of pasta, ricotta cheese, mozzarella, and a rich meat sauce, often baked to perfection.',
    price:'250',
  },
  {
    id: 4,
    image: 'i4.jpg',
    title: 'Risotto',
    text: 'Creamy rice dish cooked with various ingredients like saffron, mushrooms, or seafood.',
    price:'220',
  },
  {
    id: 5,
    image: 'i5.webp',
    title: 'Tiramisu',
    text: 'A famous Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa.',
    price:'190',
  },
  {
    id: 6,
    image: 'i6.jpeg',
    title: 'Osso Buco',
    text: 'A Milanese specialty made with braised veal shanks cooked in white wine , often served with gremolata.',
    price:'200',
  },
  {
    id: 7,
    image: 'i7.jpg',
    title: 'Gnocchi',
    text: 'Soft potato or ricotta dumplings served with various sauces like pesto, tomato, or butter and sage.',
    price:'220',
  },
  {
    id: 8,
    image: 'i8.jpg',
    title: 'Caprese Salad',
    text: 'A simple salad made with fresh tomatoes, basil leaves, olive oil, and balsamic vinegar.',
    price:'170',
  },
  {
    id: 9,
    image: 'i9.webp',
    title: 'Minestrone Soup',
    text: ' It is a popular Italian vegetable soup known for its hearty and nutritious ingredients. ',
    price:'170',
  },
  {
    id: 10,
    image: 'i10.jpg',
    title: 'Cannoli',
    text: 'A Sicilian pastry made of tube-shaped fried pastry dough and often adorned with  chocolate chips.',
    price:'170',
  },
  {
    id: 11,
    image: 'i11.jpg',
    title: 'Ossobuco alla Milanese',
    text: 'Braised veal shanks cooked with white wine, broth, and saffron, served with a flavorful gremolata.',
    price:'170',
  },
  {
    id: 12,
    image: 'i12.jpg',
    title: 'Arancini',
    text: 'Deep-fried rice balls, often filled with ragu, mozzarella, and peas, and coated in breadcrumbs.',
    price:'170',
  },
  // Add more cards as needed
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
        <p>Price: {props.price}</p>
        {isAdded ? (
          <button disabled>Added to Cart</button>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

// function Italian() {
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
//       <center>
//         <h1>Italian cuisine</h1>
//         <p>"Italian cuisine is celebrated for its simplicity, fresh ingredients, and bold flavors, and regional specialties that have made it a global culinary favorite."</p>
//         {cardsData.map((card) => (
//           <Card key={card.id} {...card} handleAddToCart={handleAddToCart} />
//         ))}
//       </center>
//     </div>
//   );
// }

export default Italian;