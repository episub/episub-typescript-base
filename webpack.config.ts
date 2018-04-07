import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as WebappWebpackPlugin from 'webapp-webpack-plugin';
import * as webpack from 'webpack';

const babelConfig = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
};

const config: webpack.Configuration = {
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
          babelConfig,
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.js(x?)$/,
        use: [babelConfig],
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
      template: './src/assets/index.html',
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
      logo: './src/assets/wrench.svg',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
