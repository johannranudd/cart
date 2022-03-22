import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { reducer } from '../context';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;

// !test
// case 'GET_TOTALS':
//   let { total, amount } = state.cart.reduce(
//     (cartTotal, cartValue) => {
//       const { price, amount } = cartValue;
//       const itemTotalPrice = price * amount;

//       cartTotal.total += itemTotalPrice;
//       cartTotal.amount += amount;

//       return cartTotal;
//     },
//     { total: 0, amount: 0 }
//   );
//   total = parseFloat(total.toFixed(2));

//   return { ...state, total, amount };
// !test
