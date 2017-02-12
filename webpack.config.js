const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'script-loader!jquery/dist/jquery.min.js',
    './src/app.js',
  ],
  output: {
    path: './public/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: '/.jsx?$/',
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel',
          options: {
            presets: [
              ['latest', { modules: false }],
              ['stage-1', { modules: false }],
            ],
          },
        }], // end use
      }, // end .jsx? rule
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=10000&name=fonts/[name].[ext]',
      }, // end ttf , eot and svg test
      {
        test: /\.(otf|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url-loader?name=fonts/[name].[ext]',
      }, // end otf woff and woff2 test
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
    ], // end rules Array
  }, // end module Object
};
