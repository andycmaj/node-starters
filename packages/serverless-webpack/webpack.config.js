// Version if the local Node.js version supports async/await
// webpack.config.js

const webpack = require('webpack');
const slsw = require('serverless-webpack');

module.exports = (async () => {
  const accountId = await slsw.lib.serverless.providers.aws.getAccountId();
  return {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',

    devtool: 'nosources-source-map',
    optimization: {
      // We no not want to minimize our code.
      minimize: false,
    },

    entry: slsw.lib.entries,
    target: 'node',
    plugins: [
      new webpack.DefinePlugin({
        AWS_ACCOUNT_ID: `${accountId}`,
      }),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  };
})();
