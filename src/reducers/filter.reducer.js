import {
  UPDATE_SORT,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const products = action.payload;
      const maxPrices = products.map(product => product.price);
      const maxPrice = Math.max(...maxPrices);

      return {
        ...state,
        all_products: [...products],
        filtered_products: [...products],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        }
      };
    case SET_LIST_VIEW:
      return { ...state, grid_view: false };
    case SET_GRID_VIEW:
      return { ...state, grid_view: true };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];

      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      else if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      else if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      else if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        }
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false
        }
      };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempProductsList = [...all_products];

      if (text) {
        tempProductsList = tempProductsList
          .filter(product => product.name.toLowerCase().startsWith(text));
      }

      if (category !== 'all') {
        tempProductsList = tempProductsList.filter(product => product.category === category);
      }

      if (company !== 'all') {
        tempProductsList = tempProductsList.filter(product => product.company === company);
      }

      if (color !== 'all') {
        tempProductsList = tempProductsList.filter(product => product.colors.includes(color));
      }

      return {
        ...state,
        filtered_products: tempProductsList
          .filter(product => product.shipping === shipping || product.price <= price)
      };
    default:
      return state;
  }
}

export default filter_reducer;
