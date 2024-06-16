// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Home.css';
// import { useCart } from '../CartContext';
// import  { useEffect } from 'react';
// import { useState } from 'react';
// function Home() {
//   const { state } = useCart();
  
//   const [addedItemsCount, setAddedItemsCount] = useState(0);
//   const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  

//   // Callback function to handle the increment
  
//   const handleIncrementCount = () => {
//     setAddedItemsCount(addedItemsCount + 1);
//   };
//   const handleLogout = () => {
//     // Clear user data from localStorage
//     localStorage.removeItem('userdata_username');
//     // Update login status to false
//     setIsLoggedIn(false);
//     // Redirect to the login page
//     // Adjust the path accordingly based on your route configuration
//     window.location.href = '/login';
//   };

//   useEffect(() => {
//     // Check if there is a stored username
//     const storedUsername = localStorage.getItem('userdata_username');

//     if (storedUsername && !showWelcomeAlert) {
//       // Update login status to true
//       setIsLoggedIn(true);
//       alert(`Welcome, ${storedUsername}!`);
//       setShowWelcomeAlert(true);
//     }
//   }, [showWelcomeAlert]);

 
//   return (
//     <div className="header-container">
//       <header className="horizontal-header">
//         <div className="logo">
//           <img src="l1.jpg" alt="Logo" />
//           <span>Quick Crave</span>
//         </div>
//         <nav className="nav-links">
//           {/* Navigation links */}
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/contact">Contact</a></li>
//             <li><a href="/offers">Offers</a></li>
//             <li><a href="/Menu">Menu</a></li>
//             <li><a href="/restaurantlist">Restaurants</a></li>
//             <li><a href="/feedback">Feedback</a></li>
//             {isLoggedIn ? (
//               <li><a href="/logout" onClick={handleLogout}>Logout</a></li>
//             ) : (
//               <li><a href="/login">Login</a></li>
//             )}

//           </ul>
//         </nav>
//         {/* <div className="search-bar">
//           <input type="text" placeholder="Search" />
//           <button className="search-button">Search</button>
//         </div> */}
//         <div className="buttons">
//         {isLoggedIn ? (
//             <button onClick={handleLogout}>Logout</button>
//           ) : (
//             <button><a href="/login">Login</a></button>
//           )}
//           {/* <button><a href="/Login" className="login-button">Login</a></button> */}
//           {/* <button className="cart-button">Add to Cart</button> */}
         
//           {/* <button className="cart-button" onClick={handleAddToCart}>
          
//           Add to Cart ({state.items.length + addedItemsCount})
//         */}
//           <div>
//         {/* <h2>Cart</h2> */}
//         {/* <p>Total Items: {state.items.length}</p> */}
//         <ul>
//           {state.items.map((item, index) => (
//             <li key={index}>{item.title}</li>
//           ))}
//         </ul>
//       </div>
//           {/* </button> */}
          
//         </div> 
//       </header>

//       {/* Add an image sliding carousel here */}
//       <div className="carousel-container">
//         <video id="myvid" width="1550" height="860" autoPlay loop muted playsInline>
//         <source src="quickcravevideo.mp4" type="video/mp4"/>
//         Your browser does not support the video tag.
//     </video>

//         <div className="additional-content">
//         <center>
//           <h2>Welcome to Quick Crave!</h2>
//           <p className='p1'>
//             Founded in 2005 we bring the taste of authentic food to your doorstep. Get your food in just one click.
//             Freshness, originality, and quality are only a small part of our priorities. Easy-to-navigate pre-order options and amazing
//             options for corporate parties! Get your phone, and you're just one click away from ordering your cravings. We excel at 
//             delivering the food with just the exact freshness you need.
//           </p>
//           {/* <button className="explore-button">Explore More</button> */}
//         </center>
//       </div>
//       </div>
//       <br></br>
//       <br></br>
//       <div className="image-gallery">
//   {/* <img src="g1.jpeg" alt="Gallery Image 1" className="gallery-image" /> */}
//   <img src="myim1.png" alt="Gallery Image 1" className="gallery-image" style={{paddingLeft: "100px"}} />
//   {/* <img src="g2.avif" alt="Gallery Image 2" className="gallery-image" /> */}
//   <img src="myim9.jpg" alt="Gallery Image 1" className="gallery-image" />
//   <img src="myim15.jpeg" alt="Gallery Image 3" className="gallery-image" />
//   {/* Add more images as needed */}
// </div>
// <div className="additional-services">
//   <center>
//         <h2>Our Services</h2>
//         <p className='p1'> We provide services across all states - various foods and
//         drinks, you choose! What makes us special is our teams of
//         professionals with extensive knowledge of managing to retain the freshness of the food.
//       </p>
//         <div className="service-cards">
          
//           <div className="service-card">
//             <img src="order2.jpg" alt="Service 1" className="service-image" />
//             <h3>Online Ordering</h3>
//             <p>Order your favorite food online and get it delivered to your doorstep.</p>
//           </div>
//           <div className="service-card">
//             <img src="se2.jpg" alt="Service 2" className="service-image" />
//             <h3>Takeout & Dine-In</h3>
//             <p>Visit our restaurant and enjoy your meal in a cozy dine-in setting or order for takeout.</p>
//           </div>
//           <div className="service-card">
//             <img src="se3.jpg" alt="Service 3" className="service-image" />
//             <h3>Catering Services</h3>
//             <p>We offer catering services for special events, parties, and gatherings.</p>
//           </div>
//         </div>
//         </center>
//       </div>

//       {/* footer */}
      
//   <footer className="footer">
//   <div className="footer-content">
//     <div className="footer-section">
//       <h3>Contact Us</h3>
//       <p>Email: contact@quickcrave.com</p>
//       <p>Phone: +1-123-456-7890</p>
//       <p>Address: 123 Main St, City, Country</p>
//     </div>
//     <div className="footer-section">
//       <h3>Quick Links</h3>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/menu">Menu</a></li>
//         <li><a href="/about">About Us</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </div>
//     <div className="footer-section">
//       <h3>Follow Us</h3>
//       <p>Stay connected on social media:</p>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
//       <div className="social-icons">
//         <a href="#"><i className="fab fa-facebook"></i></a>
//         <a href="#"><i className="fab fa-twitter"></i></a>
//         <a href="#"><i className="fab fa-instagram"></i></a>
//       </div>
//     </div>
//   </div>
//   <div className="footer-bottom">
//     <p>&copy; 2023 Quick Crave</p>
//   </div>
// </footer>



//   </div>
    
//   );
// }

// export default Home;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import { useCart } from '../CartContext';
import  { useEffect } from 'react';
import { useState } from 'react';
function Home() {
  const { state } = useCart();
  
  const [addedItemsCount, setAddedItemsCount] = useState(0);
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Callback function to handle the increment
  
  const handleIncrementCount = () => {
    setAddedItemsCount(addedItemsCount + 1);
  };
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userdata_username');
    // Update login status to false
    setIsLoggedIn(false);
    // Redirect to the login page
    // Adjust the path accordingly based on your route configuration
    window.location.href = '/login';
  };

  useEffect(() => {
    // Check if there is a stored username
    const storedUsername = localStorage.getItem('userdata_username');

    if (storedUsername && !showWelcomeAlert) {
      // Update login status to true
      setIsLoggedIn(true);
      // Set the username for display
      setUsername(storedUsername);
      alert(`Welcome, ${storedUsername}!`);
      setShowWelcomeAlert(true);
    }
  }, [showWelcomeAlert]);

 
  return (
    <div className="header-container">
      <header className="horizontal-header">
        <div className="logo">
          <img src="l1.jpg" alt="Logo" />
          <span>Quick Crave</span>
        </div>
        <nav className="nav-links">
          {/* Navigation links */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/restaurantlist">Restaurants</a></li>
            <li><a href="/feedback">Feedback</a></li>
            {/* {isLoggedIn ? (
              <li><a href="/logout" onClick={handleLogout}>Logout</a></li>
            ) : (
              <li><a href="/login">Login</a></li>
            )} */}

          </ul>
        </nav>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">Search</button>
        </div> */}
        <div className="buttons">
          {isLoggedIn ? (
            <div>
              <ul>
                 <li style={{fontSize:"15px"}}>Welcome, {username}!&nbsp;
                <button onClick={handleLogout}>Logout</button></li>
              </ul>
        </div>
        ) : (
          <button>
            <a href="/login">Login</a>
          </button>
        )}
          {/* <button><a href="/Login" className="login-button">Login</a></button> */}
          {/* <button className="cart-button">Add to Cart</button> */}
         
          {/* <button className="cart-button" onClick={handleAddToCart}>
          
          Add to Cart ({state.items.length + addedItemsCount})
        */}
          <div>
        {/* <h2>Cart</h2> */}
        {/* <p>Total Items: {state.items.length}</p> */}
        <ul>
          {state.items.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
          {/* </button> */}
          
        </div> 
      </header>

      {/* Add an image sliding carousel here */}
      <div className="carousel-container">
        <video id="myvid" width="1550" height="860" autoPlay loop muted playsInline>
        <source src="quickcravevideo.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>

        <div className="additional-content">
        <center>
          <h2>Welcome to Quick Crave!</h2>
          <p className='p1'>
            Founded in 2005 we bring the taste of authentic food to your doorstep. Get your food in just one click.
            Freshness, originality, and quality are only a small part of our priorities. Easy-to-navigate pre-order options and amazing
            options for corporate parties! Get your phone, and you're just one click away from ordering your cravings. We excel at 
            delivering the food with just the exact freshness you need.
          </p>
          {/* <button className="explore-button">Explore More</button> */}
        </center>
      </div>
      </div>
      <br></br>
      <br></br>
      <div className="image-gallery">
  {/* <img src="g1.jpeg" alt="Gallery Image 1" className="gallery-image" /> */}
  <img src="myim1.png" alt="Gallery Image 1" className="gallery-image" style={{paddingLeft: "100px"}} />
  {/* <img src="g2.avif" alt="Gallery Image 2" className="gallery-image" /> */}
  <img src="myim9.jpg" alt="Gallery Image 1" className="gallery-image" />
  <img src="myim15.jpeg" alt="Gallery Image 3" className="gallery-image" />
  {/* Add more images as needed */}
</div>
<div className="additional-services">
  <center>
        <h2>Our Services</h2>
        <p className='p1'> We provide services across all states - various foods and
        drinks, you choose! What makes us special is our teams of
        professionals with extensive knowledge of managing to retain the freshness of the food.
      </p>
        <div className="service-cards">
          
          <div className="service-card">
            <img src="order2.jpg" alt="Service 1" className="service-image" />
            <h3>Online Ordering</h3>
            <p>Order your favorite food online and get it delivered to your doorstep.</p>
          </div>
          <div className="service-card">
            <img src="se2.jpg" alt="Service 2" className="service-image" />
            <h3>Takeout & Dine-In</h3>
            <p>Visit our restaurant and enjoy your meal in a cozy dine-in setting or order for takeout.</p>
          </div>
          <div className="service-card">
            <img src="se3.jpg" alt="Service 3" className="service-image" />
            <h3>Catering Services</h3>
            <p>We offer catering services for special events, parties, and gatherings.</p>
          </div>
        </div>
        </center>
      </div>

      {/* footer */}
      
  <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Email: contact@quickcrave.com</p>
      <p>Phone: +1-123-456-7890</p>
      <p>Address: 123 Main St, City, Country</p>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Follow Us</h3>
      <p>Stay connected on social media:</p>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2023 Quick Crave</p>
  </div>
</footer>



  </div>
    
  );
}

export default Home;