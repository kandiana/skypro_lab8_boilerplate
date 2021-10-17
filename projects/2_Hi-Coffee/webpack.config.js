const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.coffee',
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: [
          // Creates 'style' nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into ComonJS
          'css-loader',
          // Compiles stylus to CSS
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'inline-svgo-loader',
        options: {
          svgo: {},
          limit: 4 * 1024,
          fallback: {
            loader: 'file-loader',
            options: { name: '[name].svg' }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.coffee', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'blocking',
      inject: 'body'
    })
  ]
};
