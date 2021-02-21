import React from 'react';
import { Link } from 'react-router-dom';

import { PageHero, StripeCheckout } from '../../components';

import { useCartContext } from '../../context/cart.context'

import Wrapper from './checkout.style';

const CheckoutPage = () => {
  const { cart = [] } = useCartContext();
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1
          ? (
            <div className='empty'>
              <h2>your cart is empty</h2>
              <Link to='/products' className='btn'>fill it</Link>
            </div>
          )
            : (
              <StripeCheckout/>
          )
        }
      </Wrapper>
    </main>
  );
}

export default CheckoutPage;
