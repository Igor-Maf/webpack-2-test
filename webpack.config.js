const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
	entry: {
		app: './src/index.js'
        // vendor: ['moment', 'lodash']
	},
	output: {
		filename: '[name].bundle.js', // [name].[chunkhash].js
		// library: 'app',
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
						plugins: ['transform-runtime', 'lodash'],
						presets: [['es2015', {
							targets: {
								node: 4
							},
							modules: false
						}]]
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
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale/, /(en-gb|ru)/),
		new LodashModuleReplacementPlugin,
		// new webpack.EnvironmentPlugin({
		//   NODE_ENV: NODE_ENV, // use 'development' unless process.env.NODE_ENV is defined
		//   // DEBUG: true
		// }),
  		// new webpack.optimize.CommonsChunkPlugin({
	    //     name: 'vendor'
	    // }),
	 	// new webpack.LoaderOptionsPlugin({ // TODO: включить, когда появятся другие loader-ы, кроме babel
		//     minimize: true,
		//     debug: false
		// }),
        new webpack.optimize.UglifyJsPlugin({
        	sourceMap: NODE_ENV === 'development'
        }),
        new HtmlWebpackPlugin({
        	title: 'webpack 2 demo',
        	template: './src/index.ejs'
        })
  	]
};

module.exports = config;
