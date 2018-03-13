import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as htmlWebPackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {transpileOnly: true},
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
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
      template: './src/index.html',
      filename: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
