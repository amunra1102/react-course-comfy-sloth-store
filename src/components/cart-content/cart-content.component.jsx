import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../context/cart.context';

import CartColumns from '../cart-columns/cart-columns.component';
import CartItem from '../cart-item/cart-item.component';
import CartTotals from '../cart-totals/cart-totals.component';

import Wrapper from './cart-content.style';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map(item => (<CartItem key={item.id} {...item} />))}
      <hr />
      <div className='link-container'>
        <Link
          to='/products'
          className='link-btn'
        >continue shopping</Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >clear shopping cart</button>
      </div>
      <CartTotals/>
    </Wrapper>
  );
};

export default CartContent;
