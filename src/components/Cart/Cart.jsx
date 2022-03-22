import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const Cart = () => {
  const { state, data, cart, dispatch, total, qty, amount } =
    useGlobalContext();
  return (
    <>
      <Navbar />
      <StyledDiv>
        <h2>In Cart</h2>
        <section className='section-center'>
          <ul>
            {cart.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </ul>
          <div className='total-container'>
            <h3>Your Items</h3>
            <p>
              Total Items:<strong> {amount}</strong>
            </p>
            <p>
              Total:<strong> $ {total}</strong>
            </p>
            <button>Pay Now</button>
          </div>
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
        <div>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}
          >
            <BsChevronCompactUp />
          </button>
          <p>{qty}</p>
          <button onClick={() => dispatch({ type: 'DECR', payload: id })}>
            <BsChevronCompactDown />
          </button>
        </div>
      </li>
    );
  }
  return null;
};
export default Cart;
