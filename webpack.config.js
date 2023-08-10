const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new DotenvWebpackPlugin()
  ]
};