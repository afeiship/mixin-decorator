import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const relativeFile = (inFile) => {
  return resolve(__dirname, inFile);
};

export default {
  entry: './test/index.js',
  plugins: [new HtmlWebpackPlugin({})]
};
