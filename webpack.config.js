const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: ['./scripts/app.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.svg/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      attr: ''
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }, {
      test: /\.png$/,
      loader: 'file?name=[sha512:hash:base64:7].[ext]'
    }]
  },
  resolve: {
    root: [path.join(__dirname, 'bower_components')],
    alias: {
      modules: path.join(__dirname, 'app/scripts/modules'),
      assets: path.join(__dirname, 'app/assets')
    }
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ]
}
