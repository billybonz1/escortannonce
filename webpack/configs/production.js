const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;



module.exports = env => ({
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    moduleIds: 'hashed',
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       // chunks: 'all',
    //     },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['index'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './profile.html',
      chunks: ['profile'],
      filename: 'profile.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './login.html',
      chunks: ['login'],
      filename: 'login.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './add_profile.html',
      chunks: ['add_profile'],
      filename: 'add_profile.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './edit_profile.html',
      chunks: ['edit_profile'],
      filename: 'edit_profile.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './manage_profile.html',
      chunks: ['manage_profile'],
      filename: 'manage_profile.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './settings.html',
      chunks: ['settings'],
      filename: 'settings.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './support.html',
      chunks: ['support'],
      filename: 'support.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './dashboard.html',
      chunks: ['dashboard'],
      filename: 'dashboard.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[id].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({}),
    new HTMLInlineCSSWebpackPlugin()
  ],
});
