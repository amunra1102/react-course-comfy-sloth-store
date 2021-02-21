import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { getUniqueValues, formatPrice } from '../../utils/helpers';

import { useFilterContext } from '../../context/filter.context';

import Wrapper from './filters.style';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={e => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='Search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  type='button'
                  name='category'
                  className={`${category === c.toLowerCase() ? 'active' : null}`}
                  onClick={updateFilters}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              id='company'
              className='company'
              value={company}
              onChange={updateFilters}
            >
              {companies.map((c, index) => (
                <option key={index} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((c, index) => c === 'all'
                ? (
                  <button
                    key={index}
                    name='color'
                    data-color='all'
                    className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}
                    onClick={updateFilters}
                  >all</button>
                )
                : (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${color === c ? 'color-btn active' : 'color-btn'}`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {c === color ? <FaCheck /> : null}
                  </button>
              ))}
            </div>
          </div>
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control'>
            <button
              type='button'
              className='clear-btn btn'
              onClick={clearFilters}
            >clear filters</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default Filters;
