const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname,'entries/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../dist/js'),
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      //.HTML LOADERS
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader'
        }
      },
      //.JSS LOADERS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react",
            ],
            "plugins": [
              [
                "@babel/plugin-proposal-class-properties",
                {
                  "loose": true
                }
              ]
            ]
          }
        }
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
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: `../../index.html`,
      template: path.resolve(__dirname, `../templates/index.html`),
      chunks: ['index']
    })
  ],
}