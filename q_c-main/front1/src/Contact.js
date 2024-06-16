import React from "react";
import './Contact.css';
import axios from "axios";
import { useState } from 'react';
import Header from "./Components/Header";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    "name": '',
    "email": '',
    "number": ''
  });

  // let backend_api = "";

  const handlesubmit = (e) => {
    e.preventDefault();

    // const inputfileds = new FormData();
    // inputfileds.append('name', formdata.name);
    // inputfileds.append('email', formdata.email);
    // inputfileds.append('number', formdata.number);

    axios.post('http://localhost:5000/addcontact', {formdata})
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log(error.response.data); // Log the response data for more details
        }
      });
  };

  return (
    <>
      <section className="contact" id="contact">
        <Header/>
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <form action="" onSubmit={handlesubmit}>
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="name" name="name" onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} />

            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="email" name="email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />

            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="number" name="number" onChange={(e) => setFormdata({ ...formdata, number: e.target.value })} />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
