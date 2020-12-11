const common = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
})