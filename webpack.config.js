const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
      publicPath: "/dist/"
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [
          { test: /\.tsx?$/, exclude: /(node_modules)/, loader: "awesome-typescript-loader" },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
      ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};