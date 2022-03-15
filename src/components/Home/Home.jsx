import React from 'react';
import { StyledDiv } from './Home.style';
import useFetch from '../../utils/useFetch';

const url = 'https://course-api.com/react-useReducer-cart-project';

const Home = () => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

  return (
    <StyledDiv>
      <section className='section-center'>
        <h1>Heading</h1>
        <ul>
          {data &&
            data.map((item) => {
              const { id, title, price, img } = item;
              return (
                <li key={id}>
                  <img src={img} alt={title} />
                  <p>{title}</p>
                </li>
              );
            })}
        </ul>
      </section>
    </StyledDiv>
  );
};

export default Home;
