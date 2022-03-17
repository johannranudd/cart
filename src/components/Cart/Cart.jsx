import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { inCart } = useGlobalContext();
  const [newCart, setNewCart] = useState([]);

  // inCart.filter((item) => {
  //   if (!newCart.includes(item)) {
  //     setNewCart((prev) => {
  //       return [...prev, item];
  //     });
  //   }
  // });
  // console.log(newCart);

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
