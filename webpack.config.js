const path = require('path');

module.exports = {
  entry: [
    // 'babel-polyfill',
    'script-loader!jquery/dist/jquery.min.js',
    './src/app.js',
  ],
  output: {
    path: './public',
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
        test: /\.otf|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
      }, // end otf, woff and woff2 test
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=10000&name=assets/fonts/[name].[ext]',
      }, // end ttf , eot and svg test
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      }, // end scss loader
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loaders: [
          'file-loader?limit=1024&name=assets/images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ], // end rules Array
  }, // end module Object
};
