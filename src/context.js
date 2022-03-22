import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import useFetch from './utils/useFetch';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      action.payload.map((item) => {
        item.qty = 0;
      });
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'ADD_TO_CART':
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(tempCart));
      return {
        ...state,
        cart: localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          : [],
      };

    case 'DECR':
      const decCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(decCart));
      return {
        ...state,
        cart: localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          : [],
      };

    default:
      return state;
  }
};

const initialState = {
  data: null,
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  loading: true,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const { data, loading, error } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'INITIAL', payload: data });
    }
  }, [data]);

  useEffect(() => {
    console.log(state.cart);
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
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
