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
      <a href="https://www.amazon.com/dp/1940129605/ref=sr_1_11?ie=UTF8&qid=1482080344&sr=8-11&keywords=unsubscribe" target="_blank">
        <img
          src="/images/amazon-transparent.png"
          alt="amazon"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
