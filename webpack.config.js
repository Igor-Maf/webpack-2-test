const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
	entry: {
		main: './app/index.js'
        // vendor: 'moment'
	},
	output: {
		filename: '[name].js', // [name].[chunkhash].js
		library: 'app',
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
  	devtool: NODE_ENV === 'development' ? 'source-map' : null, // cheap-module-inline-
  	watch: NODE_ENV === 'development',
  	plugins: [
  		new webpack.DefinePlugin({
		  NODE_ENV: JSON.stringify(NODE_ENV),
		  LANG: "'ru'",
		  // 'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
		}),
		// new webpack.EnvironmentPlugin({
		//   NODE_ENV: NODE_ENV, // use 'development' unless process.env.NODE_ENV is defined
		//   // DEBUG: true
		// }),
  		// new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
  		// new webpack.optimize.CommonsChunkPlugin({
	    //     name: 'vendor'
	    // }),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './app/index.html'})
  	]
};

module.exports = config;
