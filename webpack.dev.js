const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    contentBase: './dist',
    hot: true,
    publicPath: '/',
    historyApiFallback: true
  }

})