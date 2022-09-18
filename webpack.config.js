const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

module.exports = {
  devServer: {
    port: 3000,
    watchFiles: ["script.js"],
    historyApiFallback: true,
  },
  mode: process.env.MODE,
  entry: "./script.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new UglifyJsPlugin()],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "images", to: "images" }],
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./images/favicon.png",
      template: "index.html",
    }),
    new HTMLInlineCSSWebpackPlugin(),
  ],
};
