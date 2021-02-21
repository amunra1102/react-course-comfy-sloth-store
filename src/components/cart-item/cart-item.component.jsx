import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { formatPrice } from '../../utils/helpers';

import { useCartContext } from '../../context/cart.context';

import AmountButtons from '../amount-button/amount-buttons.component';

import Wrapper from './cart-item.style';

const CartItem = ({id, name, image, price, color, amount}) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => toggleAmount(id, 'inc');

  const decrease = () => toggleAmount(id, 'dec');

  console.log(formatPrice(price));

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{background: color}}/>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash/>
      </button>
    </Wrapper>
  );
};

export default CartItem;
