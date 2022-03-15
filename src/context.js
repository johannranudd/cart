import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();
// const url = 'https://course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(0);

  return (
    <AppContext.Provider
      value={{
        itemsInCart,
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
