const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: path.resolve(__dirname, 'src/index.html')
  })],
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open: true
  }
}
