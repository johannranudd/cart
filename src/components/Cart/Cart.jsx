import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { inCart } = useGlobalContext();
  const [newCart, setNewCart] = useState([]);

  const redu = inCart.reduce((total, value) => {
    if (!total.includes(value.id)) {
      total.push(value.id);
    }
    return total;
  }, []);

  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h2>In Cart</h2>
          <ul>
            {/* {newCart.map((item, index) => {
              const { id, title, price, img } = item;
              return (
                <li key={id}>
                  <img src={img} alt={title} />
                </li>
              );
            })} */}
          </ul>
        </section>
      </StyledDiv>
    </>
  );
};

export default Cart;
