import React from 'react';
import { Link } from 'react-router-dom';

import Error from '../error/error.component';
import Loading from '../loading/loading.component';
import Product from '../product/product.component';

import Wrapper from './featured-products.style';

import { useProductsContext } from '../../context/products.context';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map(product => <Product key={product.id} {...product}/>)}
      </div>
      <Link to='/products' className='btn'>all products</Link>
    </Wrapper>
  );
}

export default FeaturedProducts
