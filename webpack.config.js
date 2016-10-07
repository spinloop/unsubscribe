const path = require('path');

const PATHS = {
  app: path.resolve('src'),
  build: path.resolve('build'),
};

module.exports = {
  entry: {
    app: `${PATHS.app}/app.jsx`,
  },

  output: {
    path: PATHS.build,
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app,
      },
    ],
  },
};
