import React from 'react';

const items = [
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide1.jpg',
    description: '"This was an eye opener for me!"',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide2.jpg',
    description: '"I have a list of people I will be buying this for."',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide3.jpg',
    description: '"This book will help a lot of people."',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide4.jpg',
    description: '"I love the idea of Unsubscribing. I think about it all the time now."',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide5.jpg',
    description: '"This book has made a huge difference in my life."',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide6.jpg',
    description: '"Thank you. It was a delight!"',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide7.jpg',
    description: '"Fantastic book. Easy to read in one sitting."',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide8.jpg',
    description: '"Woke up the next morning thinking about what to Unsubscribe to!"',
  },
  {
    original: 'https://s3-us-west-2.amazonaws.com/unsubscribe-book/slides/slide9.jpg',
    description: '"BRILLIANT!"',
  },
];

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (this.state.index === items.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  itemClassName(index) {
    return this.state.index === index ? 'crossfade-item selected' : 'crossfade-item';
  }

  render() {
    return (
      <section className="slideshow">
        <div className="crossfade">
          {
            items.map((item, index) => (
              <div className={this.itemClassName(index)} key={index}>
                <div className="image" style={{ backgroundImage: `url(${item.original})` }} />
                <div className="screen" />
                <span className="crossfade-caption">{item.description}</span>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Slideshow;
