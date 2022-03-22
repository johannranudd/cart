import React from 'react';
import { StyledDiv } from './Navbar.style';
import { FaReact } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useGlobalContext();

  return (
    <StyledDiv>
      <Link to='/' className='logo'>
        <FaReact />
      </Link>
      <Link to='/cart' className='cart'>
        <span>{cart.length}</span>
        <FiShoppingCart />
      </Link>
    </StyledDiv>
  );
};

export default Navbar;
