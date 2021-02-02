const { resolve } = require('path');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: resolve(__dirname, 'dist/client/assets'),
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
  }
};

module.exports = config;
