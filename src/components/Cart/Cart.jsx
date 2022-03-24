import React from 'react';
import { useGlobalContext } from '../../context';
import { StyledDiv } from './Cart.style';
import Navbar from '../Navbar/Navbar';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, amount, paymentSuccess, continueShopping } = useGlobalContext();

  if (paymentSuccess)
    return (
      <>
        <Navbar />
        <div className='success-or-empty-cart'>
          <h1>Success</h1>
          <p>Thank you for your puchase</p>
          <Link to='/' onClick={continueShopping}>
            continue shopping
          </Link>
        </div>
      </>
    );

  if (amount === 0 && !paymentSuccess) {
    return (
      <>
        <Navbar />
        <div className='success-or-empty-cart'>
          <h1>No Items In Cart</h1>
          <Link to='/' onClick={continueShopping}>
            return to shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <StyledDiv>
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
                return <ItemPriceAndAmount key={item.id} {...item} />;
              }
            })}
            <PaymentForm />
          </div>
        </section>
      </StyledDiv>
    </>
  );
};

const PaymentForm = () => {
  const { total, amount, handleSubmit, value, setValue } = useGlobalContext();

  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <p>
          Total Items:<strong>{amount}</strong>
        </p>
        <p>
          Total:<strong> $ {total}</strong>
        </p>
        <div>
          <label htmlFor=''>Insert a visa cardnumber</label>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  );
};

const ItemPriceAndAmount = ({ price, qty, title }) => {
  return (
    <p>
      {title} ({qty}) <br />
      <strong>$ {parseFloat(price * qty).toFixed(2)}</strong>
    </p>
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
