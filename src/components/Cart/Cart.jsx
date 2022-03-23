import React, { useEffect, useState, useRef } from 'react';
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
        {amount === 0 ? (
          <h2>No Items In Cart</h2>
        ) : (
          <>
            <h2>In Cart</h2>
            <section className='section-center'>
              <ul>
                {cart.map((item) => {
                  return <Product key={item.id} {...item} />;
                })}
              </ul>
              <div className='total-container'>
                <h3>Your Items</h3>
                {cart.map((item) => {
                  if (item.qty > 0) {
                    return (
                      <p key={item.id}>
                        {item.title} ({item.qty}) <br />
                        <strong>
                          $ {parseFloat(item.price * item.qty).toFixed(2)}
                        </strong>
                      </p>
                    );
                  }
                })}
                {/* parseFloat(total.toFixed(2)); */}
                <p>
                  Total Items:<strong> {amount}</strong>
                </p>
                <p>
                  Total:<strong> $ {total}</strong>
                </p>
                <button>Pay Now</button>
              </div>
            </section>
          </>
        )}
      </StyledDiv>
    </>
  );
};

const Product = ({ id, title, price, amount, img, qty }) => {
  const { cart, dispatch, handleAddToCart, handleDecr } = useGlobalContext();

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
          <button
            className='remove-all-items-btn'
            onClick={() => dispatch({ type: 'REMOVE_ALL_ITEMS', payload: id })}
          >
            remove
          </button>
        </div>
      </li>
    );
  }
  return null;
};
export default Cart;
