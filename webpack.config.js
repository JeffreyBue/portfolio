const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
		mode: 'development',
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			modules: [path.resolve(__dirname, 'react_application'), 'node_modules', path.resolve(__dirname, 'public')],
			symlinks: false,
			alias: {
				'react-dom': '@hot-loader/react-dom'
			}
		},
		entry: [
			'./public/javascripts/index.js'
		],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /(\.less$)|(\.css$)/,
					use: [
						'style-loader',						
						'css-loader',
						'less-loader'
					]
				}
			]
		},
		output: {
			path: path.join(__dirname, '/public'),
			publicPath: '/',
			filename: 'javascripts/bundle.js'
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
};