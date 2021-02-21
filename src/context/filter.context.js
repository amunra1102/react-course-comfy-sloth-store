import React, { useEffect, useContext, useReducer } from 'react';

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

import { useProductsContext } from './products.context';

import reducer from '../reducers/filter.reducer';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    shipping: false
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products = [] } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => dispatch({ type: SET_GRID_VIEW });

  const setListView = () => dispatch({ type: SET_LIST_VIEW });

  const updateSort = e => dispatch({ type: UPDATE_SORT, payload: e.target.value });

  const updateFilters = e => {
    let { name, value } = e.target;
    if (name === 'category') {
      value = e.target.textContent;
    }
    else if (name === 'color') {
      value = e.target.dataset.color;
    }
    else if (name === 'price') {
      value = Number(value);
    }
    else if (name === 'shipping') {
      value = e.target.checked;
    }

    dispatch({
    type: UPDATE_FILTERS,
    payload: { name, value }
  });
  };

  const clearFilters = () => dispatch({ type: CLEAR_FILTERS });

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
