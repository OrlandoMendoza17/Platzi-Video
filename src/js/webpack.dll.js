const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry:{
    modules: [
      'react',
      'react-dom',
      //se puede poner react-router-dom
    ]
  },
  mode: 'production',
  output:{
    filename: '[name].[hash].dll.js',
    path: path.resolve(__dirname, '../../dist/js'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ]
}