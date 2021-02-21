import React, { useEffect, useContext, useReducer } from 'react';

import {
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

import reducer from '../reducers/cart.reducer';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }

  return [];
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 35.12,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) =>
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, product }
    });

  const removeItem = id => dispatch({ type: REMOVE_CART_ITEM, payload: id });

  const toggleAmount = (id, type) =>
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, type } });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
