import React from 'react';

import Wrapper from './contact.style';

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint repellendus nobis tempora, atque voluptates vero suscipit esse soluta, molestias exercitationem consequatur sed assumenda. Libero commodi ipsam quisquam molestiae consequatur.
          </p>
          <form className='contact-form' action="https://formspree.io/f/mleokoqy" method="POST">
            <input type='email' className='form-input' placeholder='enter email' name="_replyto" />
            <button type='submit' className='submit-btn'>subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
