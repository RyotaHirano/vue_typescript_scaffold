const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const plugins = [
  new HtmlWebpackPlugin({
    template: `src/html/index.pug`,
  }),
  new VueLoaderPlugin()
]

module.exports = {
  entry: './src/js/main.ts',
  output: {
    path: path.resolve(__dirname, './../build'),
    publicPath: './',
    filename: 'assets/js/[name].js'
  },
  devtool: 'cheap-eval-source-map',
  externals: {
    //
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    },
    extensions: ['.vue', '.tsx', '.ts', '.js', '.scss', '.sass'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        oneOf: [
          // this applies to pug imports inside JavaScript
          {
            exclude: /\.vue$/,
            use: ['raw-loader', 'pug-plain-loader']
          },
          // this applies to <template lang="pug"> in Vue components
          {
            use: ['pug-plain-loader']
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }]
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: 'css-loader', options: {importLoaders: 2}},
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath : path => {
                return `assets${path.replace('src', '')}`
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            }
          }
        ]
      }
    ]
  }
}
