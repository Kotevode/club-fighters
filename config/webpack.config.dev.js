const { resolve } = require('path');
const autoprefixer = require("autoprefixer");
const fbFixes = require("postcss-flexbugs-fixes");
const webpack = require('webpack');

const loaderPostCss = {
    loader: "postcss-loader",
    options: {
        sourceMap: true,
        indent: "postcss",
        plugins: () => [
            fbFixes,
            autoprefixer({
                browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9" // React doesn"t support IE8 anyway
                ],
                flexbox: "no-2009"
            })
        ]
    }
}
const loaderStyle = {
    loader: "style-loader"
};
const loaderSass = {
    loader: "sass-loader"
};

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.js'
  ],
  module: {
    rules: [
      {
            test: /\.(js|jsx)$/,
            loaders: ["eslint-loader"],
            include: [resolve(__dirname, "src")],
            exclude: /(node_modules)/,
            enforce: "pre"
        },
        {
            test: /\.module.scss$/,
            use: [
                loaderStyle,
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2,
                        modules: true,
                        sourceMap: true,
                        camelCase: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    }
                },
                loaderPostCss,
                loaderSass
            ]
        },
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
