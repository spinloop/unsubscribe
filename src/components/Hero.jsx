import React from 'react';

const Hero = () => (
  <section className="hero">
    <img
      src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/hero.jpg"
      alt="hero"
    />
    <div className="amazon-link">
      <a href="https://www.amazon.com/dp/1940129605/ref=sr_1_11?ie=UTF8&qid=1482080344&sr=8-11&keywords=unsubscribe" target="_blank">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-CF7F8CA8-7D61-4C45-AB6A-5B41877B24F7_en-US.jpg"
          alt="amazon"
        />
      </a>
    </div>
  </section>
);

export default Hero;
