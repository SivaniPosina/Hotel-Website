import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Header from './Header';

function Menu() {
  
  return (

   
    











    <div className="menu-container">
      <Header/>
      <h1>MENU</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="/SouIn">SOUTH INDIAN CUISINE</a></td>
          </tr>
          <tr>
            <td><Link to="/NorIn">NORTH INDIAN CUISINE</Link></td>
          </tr>
          <tr>
            <td><a href="/Mex">MEXICAN CUISINE</a></td>
          </tr>
          <tr>
            <td><a href="/Chinese">CHINESE CUISINE</a></td>
          </tr>
          <tr>
            <td><a href="/Italian">ITALIAN CUISINE</a></td>
          </tr>
        </tbody>
      </table>

      




    </div>
    
  );
}

export default Menu;
