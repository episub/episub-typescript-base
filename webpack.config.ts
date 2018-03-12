import * as htmlWebPackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

export default config;