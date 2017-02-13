const path = require('path');
const webpack = require('webpack');

require('dotenv').load({ path: './.env' });

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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CORE_URL_BASE: JSON.stringify(process.env.CORE_URL_BASE || 'http://localhost:3000'),
      },
    }),
  ],
};
