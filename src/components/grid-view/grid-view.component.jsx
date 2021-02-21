import React from 'react';

import Product from '../product/product.component';

import Wrapper from './grid-view.style';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map(product => <Product key={product.id} {...product}/>)}
      </div>
    </Wrapper>
  );
};

export default GridView;
