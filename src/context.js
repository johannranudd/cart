import React, { useContext, useEffect, useReducer, useState } from 'react';
import useFetch from './utils/useFetch';
import { reducer, initialState } from './utils/reducer';
import validator from 'validator';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const { data, error } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isCreditCard(value)) {
      setPaymentSuccess(true);
      dispatch({ type: 'RESET_CART', payload: data });
    } else {
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
        continueShopping,
        error,
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
