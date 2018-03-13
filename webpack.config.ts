import * as htmlWebPackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader"
          }
        ]
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
  ],
  resolve: {
    extensions: [".ts", ".tsx"]
  }
};

export default config;
