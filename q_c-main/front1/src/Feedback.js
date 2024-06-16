import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Feedback.css';
import axios from "axios";
import { useState } from 'react';
import Header from './Components/Header';

const Feedback = () => {
  const [formdata, setFormdata] = useState({
    "name": '',
    "foodItem": '',
    "specialRequest": '',

  });


  const handlesubmit = (e) => {
    e.preventDefault();

    // const inputfileds = new FormData();
    // inputfileds.append('name', formdata.name);
    // inputfileds.append('email', formdata.email);
    // inputfileds.append('number', formdata.number);

    axios.post('http://localhost:5000/addfeedback', {formdata})
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
      <div className='feedback-container'>
        <Header/>
       
       
        
        
        <h1 className="feedback-header">Feedback</h1>

          <form action="" onSubmit={handlesubmit}>
            <div className="form-section">
            <div className="input-box">
            <label className="feedback-label" htmlFor="name">
              Your Name:
            </label>
            <input type="text" placeholder="name" name="name" onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}  required
              className="feedback-input" />
            </div>
            </div>
            <div className="form-section">
            <div className="input-box">
            <label className="feedback-label" htmlFor="foodItem">
              Your FoodItem:
            </label>
            <input type="text" placeholder="foodItem" name="foodItem" onChange={(e) => setFormdata({ ...formdata, foodItem: e.target.value })}  required
              className="feedback-input" />
            </div>
            </div>
            <div className="form-section">
            <div className="input-box">
            <label className="feedback-label" htmlFor="specialRequest">
              Your SpecialRequest:
            </label>
            <input type="text" placeholder="specialRequest" name="specialRequest" onChange={(e) => setFormdata({ ...formdata, specialRequest: e.target.value })}  required
              className="feedback-input" />
            </div>
            </div>
            {/* <div className="form-section">
            <input type="text" placeholder="message" name="message" onChange={(e) => setFormdata({ ...formdata, message: e.target.value })} />
            </div> */}
           <button type="submit" className="submit-button">
          Submit Feedback
        </button>

          </form>
       
      </div>
    );
}
export default Feedback;