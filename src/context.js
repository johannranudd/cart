import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import useFetch from './utils/useFetch';
// import axios from 'axios';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'ADD_TO_CART':
      const newItem = state.data.filter((item) => {
        if (item.id === action.payload) {
          return item;
        }
      });
      return {
        ...state,
        cart: [...state.cart, newItem[0]],
      };
    case 'REMOVE_FROM_CART':
      const nn = state.cart.find((item) => {
        if (item.id === action.payload) {
          return true;
        }
      });
      state.cart.shift(nn);

      return {
        ...state,
        cart: [...state.cart],
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
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state]);

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
