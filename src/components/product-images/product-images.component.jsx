import React, { useState } from 'react';

import Wrapper from './product-images.style';

const ProductImages = ({ images = [] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main?.url} alt='main' className='main'/>
      <div className='gallery'>
        {images.map((image, index) => (
          <img
            src={image.url}
            alt={image.filename}
            key={index}
            onClick={() => setMain(images[index])}
            className={`${image.url === main.url ? 'active' : null}`}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
