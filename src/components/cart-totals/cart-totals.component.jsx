import React from 'react';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../utils/helpers';

import { useCartContext } from '../../context/cart.context';
import { useUserContext } from '../../context/user.context';

import Wrapper from './cart-totals.style';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>subtotal : <span>{formatPrice(total_amount)}</span></h5>
          <p>shipping fee : <span>{formatPrice(shipping_fee)}</span></p>
          <hr/>
          <h4>
            order total : {' '} : <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser
          ? (<Link to='/checkout' className='btn'>proceed to checkout</Link>)
          : (<button className='btn' onClick={loginWithRedirect}>login</button>)
        }
      </div>
    </Wrapper>
  );
};

export default CartTotals
