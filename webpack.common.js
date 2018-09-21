const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
            options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]'
            }
        }, {
          loader: 'sass-loader'
        }],
       },
       {
        test: /\.svg$/,
        use : [{loader: 'svg-inline-loader'}]
   	  }
       
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

}
//filename: '[name].[hash].js',
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   template: 'index.html'
    // }),