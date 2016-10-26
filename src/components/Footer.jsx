import React from 'react';

const Footer = () => (
  <footer>
    <div className="logo">ROSS NEWKIRK</div>
    <div className="social-media">
      <div className="facebook">
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/social-icons/fb.png"
            alt="facebook"
          />
        </a>
      </div>
      <div className="twitter">
        <a href="https://twitter.com/" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/social-icons/twitter.png"
            alt="twitter"
          />
        </a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/social-icons/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
