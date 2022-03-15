import React from 'react';
import { StyledDiv } from './Navbar.style';
import { FaReact } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const { itemsInCart } = useGlobalContext();
  return (
    <StyledDiv>
      <a href='#' className='logo'>
        <FaReact />
      </a>
      <a href='#' className='cart'>
        <span>{itemsInCart}</span>
        <FiShoppingCart />
      </a>
    </StyledDiv>
  );
};

export default Navbar;
