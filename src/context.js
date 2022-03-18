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
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        // cart: action.payload,
        // cart: [],
        loading: false,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
      };
    // const test = state.cart.map((item) => {
    //   if (item.id === action.payload) {
    //     return { ...item, amount: item.amount + 1 };
    //   }
    //   return item;
    // });
    // // console.log(test);
    // return {
    //   ...state,
    //   cart: test,
    // };

    // const unique = cart.filter((item) => {
    //   const isDuplicat = uniqueIds.includes(item.id);

    //   if (!isDuplicat) {
    //     uniqueIds.push(item.id);
    //     return true;
    //   } else {
    //     notUniqueIds.push(item.id);
    //     return false;
    //   }
    // });
    // console.log(unique);

    // case 'ADD_TO_CART':
    //   const newItem = state.data.filter((item) => {
    //     if (item.id === action.payload) {
    //       return item;
    //     }
    //   });
    //   return {
    //     ...state,
    //     cart: [...state.cart, newItem[0]],
    //   };

    case 'REMOVE_FROM_CART':
    // const nn = state.cart.find((item) => {
    //   if (item.id === action.payload) {
    //     return true;
    //   }
    // });
    // // nn.shift(1);

    // return {
    //   ...state,
    //   cart: [...state.cart],
    // };
    // !test
    case 'GET_TOTALS':
      // let { total, amount } = 10;

      let { total, amount } = state.cart.reduce(
        (cartTotal, cartValue) => {
          const { price, amount } = cartValue;
          const itemTotalPrice = price * amount;

          cartTotal.total += itemTotalPrice;
          cartTotal.amount += amount;

          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    // !test

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
    // localStorage.setItem('cart', JSON.stringify(state.cart));
    // console.log(state.cart);
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
