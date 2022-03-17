import React from 'react';
import { StyledDiv } from './Home.style';
// import useFetch from '../../utils/useFetch';
import { FiShoppingCart } from 'react-icons/fi';
import { useGlobalContext } from '../../context';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const { state, loading, error } = useGlobalContext();

  if (loading) return <h1>LOADING</h1>;

  if (error) return console.log(error);

  return (
    <>
      <Navbar />
      <StyledDiv>
        <section className='section-center'>
          <h1>Heading</h1>
          <ul>{state.data && <Product />}</ul>
        </section>
      </StyledDiv>
    </>
  );
};

const Product = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <>
      {state.data.map((item) => {
        const { id, title, price, img } = item;
        return (
          <li key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>
              <strong>$ {price}</strong>
            </p>
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}
            >
              <FiShoppingCart />
              add to cart
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Home;

// const Product = () => {
//   const { state } = useGlobalContext();

//   return (
//     <>
//       {state.data.map((item) => {
//         const { id, title, price, img } = item;
//         return (
//           <li key={id}>
//             <img src={img} alt={title} />
//             <p>{title}</p>
//             <p>
//               <strong>$ {price}</strong>
//             </p>
//             <button onClick={() => addToCart(id)}>
//               <FiShoppingCart />
//               add to cart
//             </button>
//           </li>
//         );
//       })}
//     </>
//   );
// };
