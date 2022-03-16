import React, { useContext, useState, useRef, useEffect } from 'react';
import useFetch from './utils/useFetch';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const { data, loading, error } = useFetch(url);
  const [inCart, setInCart] = useState(() => {
    return localStorage.getItem('myCart')
      ? JSON.parse(localStorage.getItem('myCart'))
      : [];
  });

  const addToCart = (id) => {
    const filteredItem = data.filter((item) => {
      return item.id === id;
    });
    setInCart((prev) => {
      const newArray = [...prev, filteredItem[0]];
      return newArray;
    });
  };

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(inCart));
  }, [inCart]);

  return (
    <AppContext.Provider
      value={{
        inCart,
        addToCart,
        data,
        loading,
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
