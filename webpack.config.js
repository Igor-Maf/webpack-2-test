const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
	entry: {
		main: './app/index.js',
        // vendor: 'moment'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	    rules: [
	      {
	      	test: /\.js$/,
	      	exclude: /node_modules/,
	      	use: {
	      		loader: 'babel-loader',
		        options: {
		          presets: ['env']
		        }
	      	}
	      }
	    ]
  	},
  	plugins: [
  		// new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
  		// new webpack.optimize.CommonsChunkPlugin({
    // 	   name: 'vendor'
    // 	}),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './app/index.html'})
  	]
};

module.exports = config;
