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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: "postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  // require('cssnano'),
                  require('autoprefixer')({
                    flexbox: true,
                    grid: false,
                  })
                ]
              }
            }
          },
          'sass-loader',
        ]
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
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].[contentHash].css',
      chunkFilename: 'css/[id].css'
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