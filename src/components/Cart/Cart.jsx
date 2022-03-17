import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { state } = useGlobalContext();
  // const [newCart, setNewCart] = useState([]);
  const uniqueIds = [];
  const sameIds = [];

  const unique = state.cart.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);
      return true;
    } else {
      sameIds.push(element.id);
      return false;
    }
  });

  // console.log(unique);
  // console.log(sameIds.length);
  // console.log(uniqueIds);
  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h2>In Cart</h2>
          <ul>
            {unique.map((item, index) => {
              return <Test key={item.id} item={item} sameIds={sameIds} />;
            })}
          </ul>
        </section>
      </StyledDiv>
    </>
  );
};

const Test = ({ item, sameIds }) => {
  const { dispatch } = useGlobalContext();
  const { id, title, price, img, amount } = item;
  const allIds = sameIds.filter((item) => {
    return item === id;
  });
  // console.log(allIds.length);
  // console.log(sameIds);
  return (
    <li>
      <img src={img} alt={title} />
      <span>{allIds.length > 0 ? allIds.length + 1 : 1}</span>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}>
        ++++++
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { id: id, allIds: allIds },
          })
        }
      >
        -------
      </button>
    </li>
  );
};

export default Cart;
