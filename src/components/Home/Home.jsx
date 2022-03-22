import React from 'react';
import { StyledDiv } from './Home.style';
// import useFetch from '../../utils/useFetch';
import { FiShoppingCart } from 'react-icons/fi';
import { useGlobalContext } from '../../context';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const { cart, data, loading, error } = useGlobalContext();

  if (loading) return <h1>LOADING</h1>;

  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h1>Heading</h1>
          <ul>
            {data.map((item, index) => {
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
  return (
    <li>
      <img src={img} alt='' />
      <p>{title}</p>
      <strong>$ {price}</strong>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}>
        Add to cart
      </button>
    </li>
  );
};

export default Home;
