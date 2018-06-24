const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.config.js')

const plugins = [
  new ExtractTextPlugin({
    filename: 'assets/css/style.[hash].css',
    allChunks: true
  }),
  new UglifyJSPlugin({
    uglifyOptions: {
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      mangle: false
    },
    sourceMap: true,
    parallel: true
  })
]

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins
})
