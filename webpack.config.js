const path = require ('path');
const webpack = require ('webpack');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require ('html-webpack-plugin');

const devPORT = 3000;
const publicFile = 'public';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve (__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${devPORT}`,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!popper.js/dist/umd/popper.min.js',
    'script-loader!bootstrap/dist/js/bootstrap.min.js',
    './ClientApp.jsx',
  ],
  output: {
    path: path.resolve (__dirname, publicFile),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve (__dirname, 'src/components'),
      path.resolve (__dirname, 'src/containers'),
      path.resolve (__dirname, 'src/redux/reducers'),
      path.resolve (__dirname, 'src/tests'),
    ],
    alias: {
      routes: path.resolve (__dirname, 'src/routes/routes.jsx'),
      actions: path.resolve (__dirname, 'src/redux/actions/actions.js'),
      configureStore: path.resolve (
        __dirname,
        'src/redux/store/configureStore.js'
      ),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: 'last 2 versions',
                    },
                    modules: false,
                    loose: true,
                  },
                ],
                'flow',
                'stage-0',
                'react',
              ],
            },
          },
        ], // end use
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
        loader: ExtractTextPlugin.extract ({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve (__dirname, './node_modules/font-awesome/scss'),
                  path.resolve (__dirname, './node_modules/bootstrap/scss'),
                ],
                sourceMap: true,
              },
            },
          ],
        }),
      }, // end scss loader
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?limit=1024&name=assets/images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ], // end rules Array
  }, // end module Object
  plugins: [
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NamedModulesPlugin (), // which component is changing when hmr
    new ExtractTextPlugin ('style.css'),
    new HTMLWebpackPlugin ({
      title: 'New Project',
      template: 'index.html',
    }),
    new webpack.optimize.UglifyJsPlugin ({
      compressor: {
        warnings: false,
      },
      sourceMap: false,
    }),
    new webpack.DefinePlugin ({
      'process.env': {
        NODE_ENV: JSON.stringify (process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    contentBase: path.join (__dirname, publicFile),
    compress: true,
    hot: true,
    port: devPORT,
    clientLogLevel: 'none',
    historyApiFallback: true,
    open: true,
    openPage: '', // Avoid /undefined bug
  },
  devtool: process.env.NODE_ENV === 'production'
    ? undefined
    : 'cheap-module-eval-source-map',
};
console.log (`!----YOU ARE IN ${process.env.NODE_ENV.toUpperCase ()}----!`);
