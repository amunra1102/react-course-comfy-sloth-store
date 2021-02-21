import React from 'react';

import { useFilterContext } from '../../context/filter.context';

import GridView from '../grid-view/grid-view.component';
import ListView from '../list-view/list-view.component';

const ProductList = () => {
  const { filtered_products: products = [], grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{textTransform: 'none'}}>
        Sorry, No products matched your search...
      </h5>
    );
  }

  return grid_view
    ? <GridView products={products} />
    : <ListView products={products} />;
};

export default ProductList;
