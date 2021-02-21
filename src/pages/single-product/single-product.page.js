
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { single_product_url as url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../../components';

import { useProductsContext } from '../../context/products.context';

import Wrapper from './single-product.style';

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct
  } = useProductsContext();

    useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>back to products</Link>
        <div className='product-center'>
          <ProductImages images={images}/>
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product}/>}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProductPage;
