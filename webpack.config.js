const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    filename: 'theme.js',
    library: 'theme',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map',
  externals: [
    /^@application\/*/,
    /^@library\/*/,
    /^single-spa$/,
    /^single-spa-react$/,
    /^react$/,
    /^react\/lib.*/,
    /^react-dom$/,
    /.*react-dom.*/,
  ],
}
