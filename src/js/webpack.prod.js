const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
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
                  require('cssnano'),
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
  plugins:[
    //CSS FILES OUTPUT
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      // chunkFilename: 'css/[id].css'
    }),
  ]
})