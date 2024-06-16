import React, { useState ,useEffect } from 'react';
import { useCart } from '../CartContext';
import ProductCard from './ProductCard';

const NorIn = ({ addToCart }) => {
  const [products] = useState([
    // { id: 1, title: 'Product 1', price: 20 },
    // { id: 2, title: 'Product 2', price: 30 },
    // { id: 3, title: 'Product 3', price: 25 },
    {
      id: 1,
      image: '1.webp',
      title: 'Mutter Paneer',
      text: 'Delicately flavored paneer  is teamed with peas, in a tangy gravy and it is a delicious curry.',
      price:'110'
    },
    {
      id: 2,
      image: '2.jpg',
      title: 'Raima Chawal',
      text: 'Red Kidney Bean curry (rajma dal) with plain boiled rice and in north they eat it with chapathi.',
      price:'100'
    },
    {
      id: 3,
      image: '3.webp',
      title: 'Chole Bhature',
      text: 'Mouth-watering meal straight from the Punjabi kitchen and it is a delicious one.',
      price:'150'
    },
    {
      id: 4,
      image: '4.webp',
      title: 'Keer',
      text: 'This creamy rice pudding is delicately flavored with cardamom and is full of nuts.',
      price:'200'
    },
    {
      id: 5,
      image: '5.webp',
      title: 'Paneer Butter Masala',
      text: 'This Paneer Butter Masala recipe is a rich and creamy dish of paneer (Indian cottage cheese) .',
      price:'150'
    },
    {
      id: 6,
      image: '6.jpg',
      title: 'Gajar Ka Halwa',
      text: 'The popular Indian dessert known as Carrot Halwa (a.k.a. Gajar Ka Halwa in Hindi or Gajrela in Punjabi.',
      price:'300'
    },
    {
      id: 7,
      image: '7.jpg',
      title: 'Chana Masala',
      text: 'Chana Masala is a popular Indian dish of white chickpeas in a spicy and tangy gravy.',
      price:'150'
    },
    {
      id: 8,
      image: '8.webp',
      title: 'Dal Makhani',
      text: 'The Dal Makhani recipe is a restaurant style version with subtle smoky flavors and creaminess of the lentils.',
      price:'100'
    },
    {
      id: 9,
      image: '9.webp',
      title: 'Besan Ladoo',
      text: 'Besan Ladoo is a popular Indian sweet made from gram flour a.k.a besan.',
      price:'300'
    },
    {
      id: 10,
      image: '10.jpg',
      title: 'Malai Kofta',
      text: 'Malai’ means cream and ‘Kofta’ are fried balls of various ingredients, but also in Middle Eastern.',
      price:'150'
    },
    {
      id: 11,
      image: '11.webp',
      title: 'Bhindi Masala',
      text: 'If there’s one classic bhindi (okra) dish with North Indian flavors, it is the Bhindi Masala.',
      price:'150'
    },
    {
      id: 12,
      image: '12.jpg',
      title: 'Garlic Naan',
      text: 'This Garlic Naan bread is light, soft, fresh, and filled with flavor and delicious.',
      price:'200'
    },
  ]);

  // const handleAddToCart = (item) => {
  //   dispatch({ type: 'ADD_TO_CART', payload: item });
  //   setAddedItemsCount(addedItemsCount + 1);
  // };
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

export default NorIn;