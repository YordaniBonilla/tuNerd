const HtmlWebPackPllugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        /* For every file with a js or jsx extension Webpack pipes the code through babel-loader for transforming ES6 down to ES5. */
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html(png|woff(2)?|eot|ttf|svg)?([a-z0-9=.]+)$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPllugin({
      template: './client/src/index.html',
      filename: './index.html',
    }),
  ],
};
