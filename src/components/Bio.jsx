import React from 'react';

class Bio extends React.Component {
  renderText() {
    return (
      <div>
        <p>
          <b>Ross Newkirk</b> is an entrepreneur, inventor, and designer who has created products that make people’s lives easier, and developed companies like RNventions, which sold aftermarket accessories for Jeeps. He earned a degree in Agricultural Sciences from Penn State and has fostered South American ostriches, emus, and bees. An advocate for raising human consciousness, Ross enjoys meditation, kayaking, and hiking, and lives in New Hampshire.
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
          <div className="portrait">
            <img src="https://s3-us-west-2.amazonaws.com/unsubscribe-book/portrait.jpg" alt="portrait" />
          </div>
          <div className="text">{this.renderText()}</div>
        </div>
      </section>
    );
  }
}

export default Bio;
