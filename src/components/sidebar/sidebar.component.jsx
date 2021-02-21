import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import logo from '../../assets/logo.svg';
import { links } from '../../utils/constants';

import CartButtons from '../cart-button/cart-button.component';

import { useUserContext } from '../../context/user.context';
import { useProductsContext } from '../../context/products.context';

import SidebarContainer from './sidebar.style';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} alt='comfy sloth' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({id, text, url}) => (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          ))}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
}

export default Sidebar;
