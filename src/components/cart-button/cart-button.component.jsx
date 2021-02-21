import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';

import { useCartContext } from '../../context/cart.context';
import { useUserContext } from '../../context/user.context';
import { useProductsContext } from '../../context/products.context';

import Wrapper from './cart-button.style';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser
        ? (
          <button
            className='auth-btn'
            type='button'
            onClick={() => {
              clearCart();
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout <FaUserMinus />
          </button>
        )
        : (
          <button
            className='auth-btn'
            type='button'
            onClick={loginWithRedirect}
          >
            Login <FaUserPlus />
          </button>
        )}
    </Wrapper>
  );
};

export default CartButtons;
