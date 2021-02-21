import {
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find(c => c.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map(cartItem => {
          if (cartItem.id === id + color) {
            let newAmount = amount + cartItem.amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return {...cartItem, amount: newAmount};
          }
          return cartItem;
        });
        return {...state, cart: tempCart};
      }

      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter(item => item.id !== action.payload);
      return {...state, cart: tempCart};
    case CLEAR_CART:
      localStorage.removeItem('cart');
      return {...state, cart: []};
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: sku, type } = action.payload;
      const temp = state.cart.map(item => {
        if (item.id === sku) {
          if (type === 'inc') {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }

          let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
        }
        return item;
      });
      return {...state, cart: temp};
    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce((total, item) => {
        const { amount, price } = item;
        total.total_amount += amount * price;
        total.total_items += amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      });
      return {...state, total_items, total_amount};
    default:
      return state;
  }
};

export default cart_reducer;
