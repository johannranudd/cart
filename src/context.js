import React, { useContext, useEffect, useReducer } from 'react';
import useFetch from './utils/useFetch';
import { reducer, initialState } from './utils/reducer';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const { data } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);

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
