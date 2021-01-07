const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.config')
const merge = require('webpack-merge')
const path = require('path')
const devServerPort = 9000
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js',
    publicPath: `http://localhost:${devServerPort}/`,
  },
  devServer:{
    hot: true,
    open: true,
    port: devServerPort,
    contentBase: path.join(__dirname, '../../'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      //.MEDIA LOADERS
      {
        test: /\.jpg|jpeg|png|gif|jfif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: "../img/[name].[ext]",
            name: "../[path][name].[ext]",
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Platzi Video',
      chunks: ['index'],
      template: path.resolve(__dirname, '../templates/index.html'),
      filename: 'index.html',
      // filename: '../../index.html',
    }),
  ]
})