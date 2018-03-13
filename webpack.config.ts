import * as ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as htmlWebPackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

import * as packageJson from './package.json';
const vendorDependencies = Object.keys(packageJson['dependencies']);

const config: webpack.Configuration = {
  devServer: {
    https: true,
  },
  devtool: 'source-map',
  entry: {
    main: './src/index.tsx',
    vendor: vendorDependencies
  },
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
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};

export default config;
