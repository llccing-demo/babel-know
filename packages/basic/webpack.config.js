const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  }, 
  output: {
    filename: 'core-js@3/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ],
  }
}