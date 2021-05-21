const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, './../', 'src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, './../', 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        include: [path.join(__dirname, './../', 'src')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.join(__dirname, './../', 'src/assets/scss'),
                ],
              },
            },
          },
        ],
        sideEffects: true,
      },
    ],
  },
  resolve: {
    alias: {
      src: path.join(__dirname, './../', 'src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'build/tpl/index.html',
    }),
  ],
};
