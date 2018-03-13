import * as ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as htmlWebPackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  devServer: {
    https: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {transpileOnly: true},
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.js(x?)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
    }),
    new ForkTsCheckerNotifierWebpackPlugin({alwaysNotify: true}),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
