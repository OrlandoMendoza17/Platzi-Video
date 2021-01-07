const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname,'entries/index.js'),
  },
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
        use: 'babel-loader'
      },
    ]
  },
  // plugins: [
  // ],
}