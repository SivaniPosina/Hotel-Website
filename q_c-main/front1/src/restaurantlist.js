import React, { Component } from 'react';
import './restaurantlist.css'; // Import a separate CSS file
import { Link } from 'react-router-dom';
//import Menu from './Menu';
import Header from './Components/Header';
class RestaurantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: [
                {
                    name: 'Restaurant 1',
                    cuisine: 'Italian',
                    location: '123 Main St',
                    rating: 4.5,
                    image: 'italian.jpg',
                },
                {
                    name: 'Restaurant 2',
                    cuisine: 'North Indian',
                    location: '456 Redwood St',
                    rating: 4.2,
                    image: 'ni.jpg',
                },
                
                {
                    name: 'Restaurant 3',
                    cuisine: 'Japanese',
                    location: '789 Oak St',
                    rating: 4.2,
                    image: 'j.jpg',
                },
                {
                    name: 'Restaurant 4',
                    cuisine: 'South Indian',
                    location: '101 Pine St',
                    rating: 4.7,
                    image: 'si.jpg',
                },
                {
                    name: 'Restaurant 5',
                    cuisine: 'Chinese',
                    location: '234 Cedar St',
                    rating: 4.3,
                    image: 'c.jpg',
                },
                {
                    name: 'Restaurant 6',
                    cuisine: 'Greek',
                    location: '567 Birch St',
                    rating: 4.1,
                    image: 'g.jpg',
                },
                {
                    name: 'Restaurant 7',
                    cuisine: 'Thai',
                    location: '890 Maple St',
                    rating: 4.4,
                    image: 't.jpg',
                },
                {
                    name: 'Restaurant 8',
                    cuisine: 'French',
                    location: '123 Willow St',
                    rating: 4.6,
                    image: 'f.jpg',
                },
                {
                    name: 'Restaurant 9',
                    cuisine: 'Mexican',
                    location: '456 Elm St',
                    rating: 4.0,
                    image: 'm.jpg',
                },
                {
                    name: 'Restaurant 10',
                    cuisine: 'Jamaican',
                    location: '789 Cedar St',
                    rating: 4.8,
                    image: 'jm.jpg',
                },
                {
                    name: 'Restaurant 11',
                    cuisine: 'Brazilian',
                    location: '56 Aspen St',
                    rating: 4.8,
                    image: 'b.jpg',
                },
                {
                    name: 'Restaurant 12',
                    cuisine: 'Arabian',
                    location: '486 Lamar St',
                    rating: 4.8,
                    image: 'a.jpg',
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1 className="page-title"></h1>
                <Header/>
                <ul className="restaurant-list">
                    {this.state.restaurants.map((restaurant, index) => (
                        <li key={index} className="restaurant-item">
                            <div className="restaurant-image">
                                <img src={restaurant.image} alt={restaurant.name} />
                            </div>
                            <div className="restaurant-details">
                                <h2>{restaurant.name}</h2>
                                <p>Cuisine: {restaurant.cuisine}</p>
                                <p>Location: {restaurant.location}</p>
                                <p>Rating: {restaurant.rating}</p>
                                {/* <button className="menu-button">Menu</button>  */}
                                <Link to="/Menu">
                                    <button className="menu-button">Menu</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RestaurantList;