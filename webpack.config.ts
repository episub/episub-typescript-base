import * as ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as WebappWebpackPlugin from 'webapp-webpack-plugin';

const config = {
  devServer: {
    clientLogLevel: 'warning',
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          enforce: true,
          name: 'vendor',
          priority: 10,
          test: /node_modules/,
        },
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
    new WebappWebpackPlugin({
      favicons: {
        icons: {
          android: false, // Create Android homescreen icon. `boolean` or `{ offset, background, shadow }`
          appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background }`
          appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }`
          coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background }`
          favicons: true, // Create regular favicons. `boolean`
          firefox: false, // Create Firefox OS icons. `boolean` or `{ offset, background }`
          windows: false, // Create Windows 8 tile icons. `boolean` or `{ background }`
          yandex: false, // Create Yandex browser icon. `boolean` or `{ background }`
        },
      },
      logo: './src/wrench.svg',
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
    }),
    new ForkTsCheckerNotifierWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
