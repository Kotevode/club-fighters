const path = require("path");
const autoprefixer = require("autoprefixer");
const fbFixes = require("postcss-flexbugs-fixes");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
};
const loaderStyle = {
	loader: "style-loader"
};
const loaderSass = {
	loader: "sass-loader"
};

module.exports = {
	entry: [
		"babel-polyfill",
		"./src/index.js",
		"webpack-hot-middleware/client",
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
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
		]
	},
	resolve: {
		modules: ["src", "node_modules"],
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: path.join(__dirname, "/public/js/"),
		publicPath: "/js/",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJsPlugin({ sourceMap: true }),
		new webpack.ProvidePlugin({
			React: "react",
			PropTypes: "prop-types"
		})
	]
};
