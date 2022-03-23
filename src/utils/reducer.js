export const initialState = {
  data: null,
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  loading: true,
  amount: 0,
  total: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      action.payload.map((item) => {
        item.qty = 0;
      });
      if (state.total > 0) {
        return {
          ...state,
          loading: false,
          data: action.payload,
          cart: localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : [],
        };
      } else {
        return {
          ...state,
          loading: false,
          data: action.payload,
          cart: action.payload,
        };
      }

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
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;

          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.amount += qty;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case 'REMOVE_ALL_ITEMS':
      const removedArray = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: 0 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(removedArray));
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
