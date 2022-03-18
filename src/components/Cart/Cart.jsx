import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { cart, dispatch } = useGlobalContext();
  const uniqueIds = [];
  const notUniqueIds = [];

  const unique = cart.filter((item) => {
    const isDuplicat = uniqueIds.includes(item.id);

    if (!isDuplicat) {
      uniqueIds.push(item.id);
      return true;
    } else {
      notUniqueIds.push(item.id);
      return false;
    }
  });
  console.log(unique);
  // console.log(notUniqueIds.length);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, []);

  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h2>In Cart</h2>
          <ul>
            {unique.map((item) => {
              return (
                <UniqueItem
                  key={item.id}
                  {...item}
                  notUniqueIds={notUniqueIds}
                />
              );
            })}
          </ul>
        </section>
      </StyledDiv>
    </>
  );
};

const UniqueItem = ({ id, title, price, img, notUniqueIds }) => {
  const { dispatch } = useGlobalContext();
  const allIds = notUniqueIds.filter((item) => {
    return item === id;
  });
  // console.log(allIds);

  return (
    <li>
      <img src={img} alt='' />
      <p>{title}</p>
      <span>{allIds.length > 0 ? allIds.length + 1 : 1}</span>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}>
        +++
      </button>
      <button
        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: id })}
      >
        ---
      </button>
    </li>
  );
};

export default Cart;
