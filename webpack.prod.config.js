var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  resolve: {
    modulesDirectories: ["web_modules", "node_modules", './src/common'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      loaders: [
          'file?name=[path][name].[ext]'
      ]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
};