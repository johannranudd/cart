import React from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { inCart } = useGlobalContext();
  console.log(inCart);
  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h2>In Cart</h2>
          <ul>
            {inCart.map((item, index) => {
              const { id, title, price, img } = item;
              return (
                <li key={index}>
                  <img src={img} alt={title} />
                </li>
              );
            })}
          </ul>
        </section>
      </StyledDiv>
    </>
  );
};

export default Cart;
