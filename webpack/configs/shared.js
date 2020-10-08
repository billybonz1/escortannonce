const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const paths = require('../utils/paths');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
// const WebPWebpackPlugin = require("webp-webpack-plugin");

module.exports = env => ({
  mode: env.mode,
  context: paths.SRC_DIR,
  entry: {
    index: './index.js',
    profile: './profile.js',
    login: './login.js',
    add_profile: './add_profile.js',
    edit_profile: './edit_profile.js',
    manage_profile: './manage_profile.js',
    settings: './settings.js',
    support: './support.js',
    dashboard: './dashboard.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.SRC_DIR,
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|ico|webp|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192,
              esModule: false,
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/Favicon',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBar(),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    // new WebPWebpackPlugin({
    //     match: /(jpe?g|png)$/,
    //     webp: {
    //         quality: 80,
    //         inject: true, // inject the default runtime code
    //         injectCode: '' // inject your code
    //     }
    // })
  ],
});
