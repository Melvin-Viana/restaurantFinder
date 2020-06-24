const path = require('path');
module.exports = {
  entry: ["@babel/polyfill",'./src/App.js'],
  output: {
    path: path.resolve(__dirname, 'client/assets'),
    filename: 'build.js'
  },
  module: {
  rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};