import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Slideshow from './components/Slideshow.jsx';
import FormContainer from './components/FormContainer.jsx';
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
      <FormContainer />
      <Bio />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, domNode);
