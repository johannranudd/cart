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
      };
    case 'ADD_TO_CART':
      const newItem = state.data.filter((item) => {
        if (item.id === action.payload) {
          return item;
        }
      });
      const newArray = [...state.cart, newItem[0]];
      return {
        ...state,
        cart: newArray,
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
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const { data, loading, error } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.cart);

  useEffect(() => {
    dispatch({ type: 'INITIAL', payload: data });
  }, [data]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        state,
        loading,
        error,
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

// const [inCart, setInCart] = useState(() => {
//   return localStorage.getItem('myCart')
//     ? JSON.parse(localStorage.getItem('myCart'))
//     : [];
// });

// const addToCart = (id) => {
//   const filteredItem = data.filter((item) => {
//     return item.id === id;
//   });
//   setInCart((prev) => {
//     const newArray = [...prev, filteredItem[0]];
//     return newArray;
//   });
// };

// useEffect(() => {
//   localStorage.setItem('myCart', JSON.stringify(inCart));
// }, [inCart]);
