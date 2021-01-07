const path = require('path')
const common = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../dist/js'),
    filename: '[name].[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
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
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: {
              loader: "file-loader",
              options: {
                // name: "../img/[name].[ext]",
                name: "../[path][name].[ext]",
              }
            }
          }
        }
      }
    ]
  },
  optimization:{
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins:[
    //CSS FILES OUTPUT
    new HtmlWebpackPlugin({
      title: 'Platzi Video',
      chunks: ['index'],
      template: path.resolve(__dirname, '../templates/index.html'),
      filename: '../../index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].[contentHash].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../../dist/js/*.dll.js'),
      // outputPath: 'js',
      publicPath: 'dist/js',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/index.**']
    })
  ]
})