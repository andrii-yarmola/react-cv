var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
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
  resolve: {
    modulesDirectories: ["web_modules", "node_modules", './src/common'],
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-inline-module-source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' }
    ]),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ]
};
