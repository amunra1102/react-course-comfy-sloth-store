import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { links } from '../../utils/constants';

import CartButtons from '../cart-button/cart-button.component';

import { useUserContext } from '../../context/user.context';
import { useProductsContext } from '../../context/products.context';

import NavContainer from './navbar.style';

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          <button className='nav-toggle' type='button' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map(link => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
          {myUser &&
            (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;
