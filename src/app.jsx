import React from 'react';
import ReactDOM from 'react-dom';

const domNode = document.getElementById('react');

const App = () => (
  <div>
    <header className="header">
      <div className="logo">LogoHere</div>
      <nav>
        <a className="learn-more">Learn More</a>
        <a className="sign-up">Sign-up</a>
      </nav>
    </header>

    [slideshow goes here]
  </div>
);

ReactDOM.render(<App />, domNode);
