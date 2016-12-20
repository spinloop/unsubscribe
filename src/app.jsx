import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Slideshow from './components/Slideshow.jsx';
import Form from './components/Form.jsx';
import Description from './components/Description.jsx';
import Hero from './components/Hero.jsx';
import Bio from './components/Bio.jsx';
import Inspiration from './components/Inspiration.jsx';

const domNode = document.getElementById('react');

const App = () => (
  <div>
    <Header />
    <div className="content">
      <Hero />
      <Description />
      <Slideshow />
      <Inspiration />
      <section id="form-section">
        <header className="section-header">
          <h2>Share how you have been Unsubscribing!</h2>
        </header>
        <div className="sub-header">
          <p>You will also receive updates on this and other upcoming books!</p>
        </div>
        <Form />
      </section>
      <Bio />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, domNode);
