import React from 'react';

class Bio extends React.Component {
  renderText() {
    return (
      <div>
        <p>
          <b>Ross Newkirk</b> has worked as a personal assistant and property manager for a 13x New York Times bestselling author whom has sold over 50 million copies of his books.
        </p>
        <p>
          Aside from that Ross has done a wide spectrum of things from raising South American ostriches to creating companies such as RNventions which sold aftermarket accessories for Jeeps.
        </p>
        <p>
          In his free time Ross enjoys kayaking, hiking and meditation.
        </p>
      </div>
    );
  }

  render() {
    return (
      <section className="bio-section">
        <header className="section-header">
          <h2>About the Author</h2>
        </header>
        <div className="section-content">
          <div className="portrait">[insert portrait]</div>
          <div className="text">{this.renderText()}</div>
        </div>
      </section>
    );
  }
}

export default Bio;
