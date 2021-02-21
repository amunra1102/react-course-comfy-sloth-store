import React from 'react';

import aboutImg from '../../assets/hero-bcg.jpeg';

import { PageHero } from '../../components';

import Wrapper from './about.style';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ullam quos earum necessitatibus? Deleniti rerum iusto dolores consequatur nesciunt repellendus, quia at. Animi cupiditate accusamus ad rerum autem numquam esse iste? Tenetur cum culpa maxime magni beatae voluptates aspernatur harum voluptate earum, unde quibusdam possimus quod est, tempore quae facere.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
