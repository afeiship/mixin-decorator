import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './__tests__/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, 'test'),
          resolve(__dirname, './index')
        ]
      }
    ]
  },
  resolve: {
    alias: {
      mixins: resolve(__dirname, 'test/mixins')
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      mixin: resolve(__dirname, './index.js')
    })
  ]
};
