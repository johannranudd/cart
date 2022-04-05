import React, { useRef } from 'react';
import { StyledDiv } from './Home.style';
import { useGlobalContext } from '../../context';
import Navbar from '../Navbar/Navbar';
import { FiShoppingCart } from 'react-icons/fi';

const Home = () => {
  const { data, loading, error } = useGlobalContext();

  if (loading) return <h1 className='loading'>LOADING...</h1>;
  if (error) return <h1>An Error Occured</h1>;

  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h1>Products</h1>
          <ul>
            {data.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </ul>
        </section>
      </StyledDiv>
    </>
  );
};

const Product = ({ id, title, price, img }) => {
  const { dispatch } = useGlobalContext();
  const btnRef = useRef();
  return (
    <li>
      <img src={img} alt='' />
      <p>{title}</p>
      <strong>$ {price}</strong>
      <button
        ref={btnRef}
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}
      >
        Add to cart
        <FiShoppingCart className='cart-icon' />
      </button>
    </li>
  );
};

export default Home;
