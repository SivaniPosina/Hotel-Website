import React from 'react';
import './about.css'; // Create a CSS file for styling
import Header from './Components/Header';

function About() {
  return (
   
    <div className="about-container">
      <Header/>
       <br />
       <br />
       <h1 id="abc">About Us</h1>
    <div className="about-content">

    <div className="content-wrapper">
      {/* <div className="about-image">
        <img src="about-banner.jpg" alt="Restaurant Interior" />
      </div> */}
      <div className="paragraph">
      <br />
        <p>Welcome to Quick Crave, where every dish tells a story, and every meal
           is a journey of flavors.At Quick Crave, we are more than just a place to eat.
            we are a culinary destination that celebrates the art of food. With a passion for cooking 
            and an unwavering commitment to quality, we invite you to explore our world of delectable 
            cuisines.</p>
            <br />
        <h2>Our Story</h2>
        <br />
        <p>Quick Crave was founded in 1995 by WEB-ZEN. It all began with a simple idea: to create a place where 
          people could savor exceptional food in a warm and inviting atmosphere. Our journey is a testament to our 
          dedication to creating a place where people can savor exceptional food in a warm and inviting atmosphere. Over the years, we have
           remained dedicated to this vision, continuously refining our menu and service to exceed your 
           expectations.Over the years, we have remained dedicated to this vision, continuously refining our 
           menu and service to exceed your expectations.</p>
           <br />
        <h2>Our Food</h2>
        <br />
        <p>Our chefs are culinary artists, each dish they create a masterpiece. We source the finest, locally-sourced ingredients to craft our diverse menu. From the sizzling
           steaks to the vibrant vegetarian dishes, each plate is a reflection of our commitment to excellence. From sizzling steaks that melt in your mouth to vibrant vegetarian dishes bursting with flavor,
            each plate is a reflection of our unwavering commitment to culinary excellence.Our menu is a journey through tastes and textures, offering a diverse range of dishes that cater to every palate. </p>
           <br />
        <h2>Farm-to-Table Philosophy</h2>
        <br />
        <p>We believe in the power of fresh, locally-sourced ingredients. Our dedication to using seasonal, locally-sourced produce ensures that every dish bursts with flavors that are as
           authentic as they are delicious. This not only supports local farmers and suppliers but also reduces our
           environmental footprint.We are committed to sustainability and responsible sourcing. Our farm-to-table approach not only benefits
            your taste buds but also contributes to a healthier planet.</p>
           <br />
           <h2>Join Us</h2>
           <br />
          <p>We invite you to join us and be a part of our culinary journey. Experience the passion and dedication that go into every dish we serve.
             Come share in our love for food, flavor, and community.
             At Quick Cave, we create more than just meals; we create memories. Share in our love for food, flavor, and community. We offer a warm
              and welcoming ambiance where friends and family come together to celebrate life over exceptional food.
             Thank you for choosing Quick Cave as your dining destination. We look forward to serving you and making every meal with us a memorable one.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="about-image">
    <center>
        <img src="about-banner.jpg" style={{height:400, width:800}} alt="Restaurant Interior" />
       </center>
      </div>
      <br></br>
    <center>
      <img src="about-abs-image.jpg" style={{height:200, width:300}} id="an" alt="Restaurant Interior 1" />
      <img src="image4.webp" style={{height:200}} id="an" alt="Restaurant Interior 2" />
      <img src="image5.jpg" style={{height:200}} id="an" alt="Restaurant Interior 3" />
      </center>
      
</div>

  );
}

export default About;