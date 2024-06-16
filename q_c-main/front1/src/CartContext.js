import React, { createContext, useReducer, useContext } from 'react';

// Define the initial cart state
const initialState = {
  items: [],
};

// Define the actions
const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
};

// Reducer function to update the cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      // Add the item to the cart
      return {
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

// Create the cart context
const CartContext = createContext();

// Custom hook for using the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
