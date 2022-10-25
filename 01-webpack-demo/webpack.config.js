// 打包的时候需要注释，增加webpack的提示
// import { Configuration } from 'webpack'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CCPlugin = require('./plugins/cc-plugin')
const webpack = require('webpack')
/**
 * @type { Configuration }
 */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.BannerPlugin({
      banner: '@版权所有 hucongcong'
    }),
    new CCPlugin({
      header: '头部',
      footer: '底部'
    })
  ],
  module: {
    rules: [
      {
        test: /\.cc$/,
        use: path.join(__dirname, './loaders/cc-loader.js')
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config