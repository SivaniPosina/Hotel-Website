import React, { Component } from 'react';
import './offers.css';
import Header from './Components/Header';

class Offers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantOffers: [
                {
                    restaurant: 'Restaurant 1',
                    offers: ['Free dessert with any main course', '10% off on all orders over $50'],
                },
                {
                    restaurant: 'Restaurant 2',
                    offers: ['Buy one, get one free on selected items', 'Happy hour discounts from 4 PM to 6 PM'],
                },
                {
                    restaurant: 'Restaurant 3',
                    offers: ['20% off on your first order', 'Free delivery on orders over $30'],
                },
                {
                    restaurant: 'Restaurant 4',
                    offers: ['Family combo meal at $40', 'Student discount: 15% off with ID'],
                },
                {
                    restaurant: 'Restaurant 5',
                    offers: ['Kids eat free on Sundays', 'Loyalty program: Get a free meal after 5 visits'],
                },
                {
                    restaurant: 'Restaurant 6',
                    offers: ['Happy hour: 50% off drinks', '10% discount for seniors'],
                },
            ],
            bankOffers: [
                {
                    bank: 'Bank A',
                    offers: ['Get 5% cashback on all transactions', 'Exclusive discounts for cardholders'],
                },
                {
                    bank: 'Bank B',
                    offers: ['Double reward points on dining expenses', 'Zero processing fees for EMI transactions'],
                },
            ],
        };
    }

    render() {
        return (
            <div className="offers-page">
                <Header/>
                <h1 className="page-title">Restaurant and Bank Offers</h1>
                <h2 className="section-title">Restaurant Offers</h2>
                <ul className="offers-list">
                    {this.state.restaurantOffers.map((offer, index) => (
                        <li key={index} className="offer-item">
                            <h2>{offer.restaurant}</h2>
                            <ul className="offer-details">
                                {offer.offers.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <h2 className="section-title">Bank Offers</h2>
                <ul className="offers-list">
                    {this.state.bankOffers.map((offer, index) => (
                        <li key={index} className="offer-item">
                            <h2>{offer.bank}</h2>
                            <ul className="offer-details">
                                {offer.offers.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Offers;