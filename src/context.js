import React, { useContext, useEffect, useReducer, useState } from 'react';
import useFetch from './utils/useFetch';
import { reducer, initialState } from './utils/reducer';
import validator from 'validator';
import { handleSubmit, continueShopping } from './components/Cart/Cart.logic';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const { data } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isCreditCard(value)) {
      console.log('pass');
      setPaymentSuccess(true);
      dispatch({ type: 'RESET_CART', payload: data });
    } else {
      console.log('no pass');
      setPaymentSuccess(false);
    }
  };

  const continueShopping = () => {
    setPaymentSuccess(false);
  };

  useEffect(() => {
    if (data) {
      dispatch({ type: 'INITIAL', payload: data });
    }
  }, [data]);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        state,
        dispatch,
        handleSubmit,
        value,
        setValue,
        paymentSuccess,
        setPaymentSuccess,
        continueShopping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
