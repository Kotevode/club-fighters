const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.js'
  ],
  module: {
    rules: [
      {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
      },
      {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader"
        }, {
            test: /\.gif$/,
            loader: "file-loader"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader"
        },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
