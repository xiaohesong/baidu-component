const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, args) => {

  return {
    entry: {
      main: './index.tsx'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          // Enable file caching
          cache: true,
        }),
      ]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [{
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          }, ],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            "presets": [
              // https://babeljs.io/docs/en/babel-preset-react
              "@babel/preset-react",
              // es2015 to env https://babeljs.io/docs/en/env
              "@babel/preset-env",
              // https://babeljs.io/docs/en/babel-preset-typescript
              "@babel/preset-typescript",

              // https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets
            ]
          },
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg|bmp)$/,
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        }
      ]
    },
    // if need to show bundle package size, add bundleView to plugins
    plugins: [
    ].filter(Boolean),

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }
  }
};