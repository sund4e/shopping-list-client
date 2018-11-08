const path = require('path');
const webpack = require('webpack');
const port = 8080;

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    hotOnly: true,
    port: port,
    publicPath: `http://localhost:${port}/dist/`
  },
  devtool: 'source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        include: path.join(__dirname, 'src'),
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};
