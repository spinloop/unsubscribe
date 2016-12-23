import React from 'react';

const Hero = () => (
  <section className="hero">
    <img
      src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/hero.jpg"
      alt="hero"
    />
    <div className="hero-amazon-link">
      <a href="https://www.amazon.com/dp/1940129605/ref=sr_1_11?ie=UTF8&qid=1482080344&sr=8-11&keywords=unsubscribe" target="_blank">
        <img
          src="/images/amazon-white.png"
          alt="amazon"
        />
        <h2>Click here to purchase</h2>
      </a>
    </div>
  </section>
);

export default Hero;
