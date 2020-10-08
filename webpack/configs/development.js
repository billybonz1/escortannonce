const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'profile.html',
      chunks: ['profile'],
      filename: 'profile.html'
    }),
    new HtmlWebpackPlugin({
      template: 'login.html',
      chunks: ['login'],
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: 'add_profile.html',
      chunks: ['add_profile'],
      filename: 'add_profile.html'
    }),
    new HtmlWebpackPlugin({
      template: 'edit_profile.html',
      chunks: ['edit_profile'],
      filename: 'edit_profile.html'
    }),
    new HtmlWebpackPlugin({
      template: 'manage_profile.html',
      chunks: ['manage_profile'],
      filename: 'manage_profile.html'
    }),
    new HtmlWebpackPlugin({
      template: 'settings.html',
      chunks: ['settings'],
      filename: 'settings.html'
    }),
    new HtmlWebpackPlugin({
      template: 'support.html',
      chunks: ['support'],
      filename: 'support.html'
    }),
    new HtmlWebpackPlugin({
      template: 'dashboard.html',
      chunks: ['dashboard'],
      filename: 'dashboard.html'
    })
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 8080,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
