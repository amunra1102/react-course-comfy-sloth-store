import React from 'react';

import { services } from '../../utils/constants';

import Wrapper from './services.style';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>custom furniture<br />built only for you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam impedit voluptates molestias. Consectetur aliquid temporibus iure obcaecati quae maxime!
          </p>
        </article>
        <div className='services-center'>
          {services.map(({ id, icon, title, text }) => (
            <article className='service' key={id}>
              <span className='icon'>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
