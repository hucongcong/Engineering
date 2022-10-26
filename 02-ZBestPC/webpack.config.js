// import { Configuration } from 'webpack'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
/**
 * @type {Configuration}
 */
const config = {
  // 多入口配置
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  // devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html',
      chunks: ['login']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于20kb的生成base64
            maxSize: 4 * 1024
          }
        },
        generator: {
          filename: 'img/[name].[hash].[ext]'
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}

module.exports = config
