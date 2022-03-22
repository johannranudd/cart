import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import useFetch from './utils/useFetch';
import { reducer } from './utils/reducer';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

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
    dispatch({ type: 'GET_TOTALS' });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        state,
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
