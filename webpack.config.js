const { resolve } = require('path');

const webpack = require('webpack');

const dotenv = require('dotenv');

const envKeys = dotenv.config().parsed;
const config = {
  // https://github.com/motdotla/dotenv/issues/233
  node: {
    fs: 'empty'
  },
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: resolve(__dirname, 'dist/public/assets'),
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      envKeys: JSON.stringify(envKeys)
    })
  ]
};

module.exports = config;
