// import { Configuration } from 'webpack'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @type {Configuration}
 */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[hash].js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于20kb的生成base64
            maxSize: 20 * 1024,
          }
        },
        generator: {
          filename: 'img/[name].[hash6].[ext]',
           publicPath: 'img/',
        },
      }
    ]
  }
  
}

module.exports = config