import React from 'react';

const Footer = () => (
  <footer>
    <div className="logo">ROSS NEWKIRK</div>
    <div className="social-media">
      <div className="facebook">
        <a href="https://www.facebook.com/unsubscribebook" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/social-icons/fb.png"
            alt="facebook"
          />
        </a>
      </div>
      <div className="twitter">
        <a href="https://twitter.com/Ross_Newkirk" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/social-icons/twitter.png"
            alt="twitter"
          />
        </a>
      </div>
    </div>
    <div className="footer-amazon-link">
      <a href="https://www.amazon.com/UNSUBSCRIBE-Story-About-Profound-Discovery/dp/1940129605/ref=sr_1_sc_2?ie=UTF8&qid=1483495425&sr=8-2-spell&keywords=unsusbscribe&_encoding=UTF8&tag=unsubscribeco-20&linkCode=ur2&linkId=34b8339545cbc8fbf7c048ba77f7b346&camp=1789&creative=9325" target="_blank">
        <img
          src="/images/amazon-transparent.png"
          alt="amazon"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
