// 打包的时候需要注释，增加webpack的提示
// import { Configuration } from 'webpack'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    })
  ],
  module: {
    rules: [
      {
        test: /\.cc$/,
        use: path.join(__dirname, './loaders/cc-loader.js')
      }
    ]
  }
}

module.exports = config