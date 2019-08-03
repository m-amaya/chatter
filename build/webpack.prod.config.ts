import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import { Configuration, EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common.config';

/**
 * Webpack Prod-Specific Configuration
 */
const config: Configuration = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ cache: true, parallel: true, sourceMap: true }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      /** Explicitly setting the node environment for clarity. */
      NODE_ENV: 'production',
    }),
  ],
});

export default config;
