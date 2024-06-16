import React from 'react';
import { useState } from 'react';
import './Chinese.css';
import { useCart } from '../CartContext';
// import { useState } from 'react';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
const Chinese = ({ addToCart }) => {
  const [products] = useState([
  {
    id: 1,
    image: 'c1.jpg',
    title: 'Fried rice',
    text: 'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables.',
    price:'200',
  },
  {
    id: 2,
    image: 'c2.jpeg',
    title: 'Kung Pao chicken',
    text: 'Kung Pao chicken, also transcribed Gong Bao or Kung Po, is a spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables and chili peppers.',
    price:'350',
  },
  {
    id: 3,
    image: 'c3.jpeg',
    title: 'Chow Mein',
    text: 'Chow mein is a Chinese dish made from stir-fried noodles with vegetables and sometimes meat or tofu.',
    price:'220',
  },
  {
    id: 4,
    image: 'c4.webp',
    title: 'Sweet Sour Pork',
    text: 'Sweet and sour pork – Pork dishes that are heavily spiced with wide variety of sweet and sour sauces. ',
    price:'400',
  },
  {
    id: 5,
    image: 'c5.webp',
    title: 'Wonton',
    text: 'A wonton is a type of Chinese dumpling commonly found across regional styles of Chinese cuisine.',
    price:'160',
  },
  {
    id: 6,
    image: 'c6.jpeg',
    title: 'Dumpling',
    text: 'Dumpling is a broad class of dishes that consist of pieces of cooked dough, often wrapped around a filling.',
    price:'150',
  },
  {
    id: 7,
    image: 'c7.jpg',
    title: 'Lo Mein',
    text: 'Lo mein is a Chinese dish with noodles. It often contains vegetables and some type of meat or seafood, usually beef, chicken, pork, or shrimp. ',
    price:'200',
  },
  {
    id: 8,
    image: 'c8.jpeg',
    title: 'Baozi',
    text: 'Baozi, or simply bao, is a type of yeast-leavened filled bun in various Chinese cuisines.',
    price:'120',
  },
  {
    id: 9,
    image: 'c9.jpg', 
    title: 'Char Siu',
    text: 'Char siu is a Cantonese–style of barbecued pork. Originating in Guangdong, it is eaten with rice.',
    price:'210',
  },
  {
    id: 10,
    image: 'c10.jpg',
    title: 'Jiaozi',
    text: 'Jiaozi are a type of Chinese dumpling. Jiaozi are folded to resemble Chinese sycee and have great cultural significance attached to them within China.',
    price:'170',
  },
  {
    id: 11,
    image: 'c11.jpg',
    title: 'Chop suey',
    text: 'Chop suey is a dish in American Chinese cuisine and other forms of overseas Chinese cuisine, consisting of meat and eggs.',
    price:'150',
  },
  {
    id: 12,
    image: 'c12.jpeg',
    title: 'Mapo tofu',
    text: 'Mapo tofu is a popular Chinese dish from Sichuan province. It consists of tofu set in a spicy sauce, typically a thin, oily, and bright red suspension.',
     price:'100',
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
    setIsAdded(true);
    // You can perform additional actions here, such as sending the data to a cart or performing other logic.
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

// function Chinese() {
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
//         <h1>Chinese cuisine</h1>
//         <p>"Chinese cuisine is celebrated for its intricate balance of flavors, encompassing sweet, sour, salty, and spicy elements, and its wide range of regional specialties, such as Sichuan's fiery dishes and Cantonese dim sum."</p>
//       {cardsData.map((card) => (
//         <Card key={card.id} {...card} />
//       ))}
//       </center>
//     </div>
//   );
// }
export default Chinese