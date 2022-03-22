import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { data, cart, dispatch } = useGlobalContext();

  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h2>In Cart</h2>
          <ul>
            {cart.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </ul>
        </section>
      </StyledDiv>
    </>
  );
};

const Product = ({ id, title, price, amount, img, qty }) => {
  const { cart, dispatch } = useGlobalContext();

  if (qty > 0) {
    return (
      <li>
        <img src={img} alt='' />
        <p>{qty}</p>
        <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}>
          ++++
        </button>
        <button onClick={() => dispatch({ type: 'DECR', payload: id })}>
          -------
        </button>
      </li>
    );
  }
  return null;
};
export default Cart;
