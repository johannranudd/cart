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
  // let numberOfThisItem = 0;
  switch (action.type) {
    case 'INITIAL':
      // console.log(state.cart);
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
      const plussArray = [...state.cart, newItem[0]];
      // const obj = [
      //   ...new Map(
      //     plussArray.map((item) => [JSON.stringify(item), item])
      //   ).values(),
      // ];
      // console.log(state.cart);
      return {
        ...state,
        cart: plussArray,
      };
    case 'REMOVE_FROM_CART':
      // console.log(action.payload);
      const itemToBeRemoved = state.data.filter((item) => {
        if (item.id !== action.payload.id) {
          // console.log(action.payload.allIds.length);
          // return action.payload.allIds - 1;
          console.log(action.payload.allIds.length - 1);
          // return action.payload.allIds.length - 1;
        }
      });
    // console.log(itemToBeRemoved);
    // // const minusArray = [...state.cart, itemToBeRemoved[0]];
    // return {
    //   ...state,
    //   cart: itemToBeRemoved,
    // };
    default:
      return state;
  }
};

const initialState = {
  data: null,
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  // cart: [],
  amountOfItems: 0,
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
