import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import AmountButtons from '../amount-button/amount-buttons.component';

import { useCartContext } from '../../context/cart.context';

import Wrapper from './add-to-cart.style';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock = 0, colors = [] } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => setAmount(amount >= stock ? stock : amount + 1);
  const decrease = () => setAmount(amount > 1 ? amount - 1 : 1);

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
              style={{ background: color }}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck/> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
}

export default AddToCart;
