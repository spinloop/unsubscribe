import React from 'react';

const Hero = () => (
  <section className="hero">
    <img
      src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/hero.jpg"
      alt="hero"
    />
    <div className="hero-amazon-link">
      <a href="https://www.amazon.com/UNSUBSCRIBE-Story-About-Profound-Discovery/dp/1940129605/ref=sr_1_sc_2?ie=UTF8&qid=1483495425&sr=8-2-spell&keywords=unsusbscribe&_encoding=UTF8&tag=unsubscribeco-20&linkCode=ur2&linkId=34b8339545cbc8fbf7c048ba77f7b346&camp=1789&creative=9325" target="_blank">
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
