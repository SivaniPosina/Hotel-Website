import React from 'react';
import './SouIn';
import { useState } from 'react';
import { useCart } from '../CartContext';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
// const cardsData = [
  const SouIn = ({ addToCart }) => {
    const [products] = useState([
      {
        id: 1,
        image: 's1.jpeg',
        title: 'Dosa',
        text: ' A thin, crispy pancake made from fermented rice and urad dal (black gram).',
        price:'70'
      },
      {
        id: 2,
        image: 's2.jpg',
        title: 'Idli',
        text: 'Soft, fluffy steamed rice cakes made from a fermented batter of rice and urad dal.',
        price:'50'
      },
      {
        id: 3,
        image: 's3.jpg',
        title: 'Vada',
        text: 'Savory fritters made from urad dal or a mixture of lentils.Often served with sambar or coconut chutney.',
        price:'100'
      },
      {
        id: 4,
        image: 's4.jpeg',
        title: 'Hyderabadi Biryani',
        text: 'It is  is a flavorful and aromatic Indian rice dish made with basmati rice, aromatic spices, and chicken.',
        price:'400'
      },
      {
        id: 5,
        image: 's5.jpg',
        title: 'Mysore PakMysore',
        text: 'It is known for its melt-in-the-mouth texture and its rich, sweet, and slightly grainy taste..',
        price:'150'
      },
      {
        id: 6,
        image: 's6.jpg',
        title: 'Uttapam',
        text: 'Uttapam is popular for its delicious taste, versatility, and cultural significance in South India.',
        price:'100'
      },
      {
        id: 7,
        image: 's7.jpg',
        title: 'Pongal',
        text: 'A South Indian rice dish made with rice and split yellow moong dal.It gives wonderful aroma and flavor.',
        price:'200'
      },
      {
        id: 8,
        image: 's8.jpg',
        title: 'Payasam',
        text: 'It is a traditional South Indian dessert, is a creamy and sweet dish and enjoyed on special occasions.',
        price:'160'
      },
      {
        id: 9,
        image: 's9.jpg',
        title: 'Puttu and Kadala Curry',
        text: 'Puttu and Kadala Curry is a classic South Indian breakfast, featuring steamed rice cakes (Puttu) served with a spiced black chickpea curry.',
        price:'100'
      },
      {
        id: 10,
        image: 's10.jpeg',
        title: 'Gutti Vankaya Kura',
        text: 'A spicy Andhra-style eggplant curry, where eggplants are stuffed with a flavorful spice mix. This dish is a favorite in South Indian cuisine.',
        price:'150'
      },
      {
        id: 11,
        image: 's11.jpg',
        title: 'Pesarattu',
        text: 'A green gram (moong dal) dosa that is popular in Andhra Pradesh and Telangana, often served with ginger chutney.',
        price:'70'
      },
      {
        id: 12,
        image: 's12.jpeg',
        title: 'Jalebi',
        text: 'Jalebi is a sweet treat made from deep-fried wheat flour batter and soaked in sugar syrup.It is a favorite dessert at South Indian festivals.',
        price:'100'
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
    setIsAdded(true);
    // You can perform additional actions here, such as sending the data to a cart or performing other logic.
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        {/* {isAdded ? (
          <button disabled>Added to Cart</button>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )} */}
      </div>
    </div>
  );
}

// function SouIn() {
//   // const { dispatch } = useCart();

//   // // const handleAddToCart = (item) => {
//   // //   dispatch({ type: 'ADD_TO_CART', payload: item });
//   // // };
//   // const [addedItemsCount, setAddedItemsCount] = useState(0);

//   // const handleAddToCart = (item) => {
//   //   dispatch({ type: 'ADD_TO_CART', payload: item });
//   //   // Call the callback function to increment the count
//   //   setAddedItemsCount(addedItemsCount + 1);
//   // };
//   // return (
//   //   <div className="App">
//   //       <center>
//   //       <h1>South Indian cuisine</h1>
//   //       <p id="a">"South Indian cuisine is renowned for its diverse and aromatic flavors, characterized by the liberal use of spices, rice offering a wide array of vegetarian and non-vegetarian delights."</p>
//   //     {cardsData.map((card) => (
//   //       <Card key={card.id} {...card} />
//   //     ))}
//   //     </center>
//   //   </div>
//   // );
//   const { dispatch } = useCart();

//   const handleAddToCart = (item) => {
//     dispatch({ type: 'ADD_TO_CART', payload: item });
//   };

//   return (
//     <div className="App">
//       <center>
//         <h1>South Indian cuisine</h1>
//         <p id="a">"South Indian cuisine is renowned for its diverse and aromatic flavors, characterized by the liberal use of spices, rice offering a wide array of vegetarian and non-vegetarian delights."</p>
//         {cardsData.map((card) => (
//           <Card key={card.id} {...card} />
//             // <button onClick={() => handleAddToCart(card)}>Add to Cart</button>
//         ))}
//       </center>
//     </div>
//   );
// }

export default SouIn;