import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import type { Configuration } from 'webpack';

export const plugins = [
	new VueLoaderPlugin(),
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		inject: 'body',
	}),
	new CopyPlugin({
		patterns: [
			{
				from: path.resolve(__dirname, 'src', 'assets'),
				to: path.resolve(__dirname, 'dist', 'assets'),
				filter: async (resourcePath) => {
					const name = resourcePath.split('/').at(-1) as string;

					if (/^(\.gitkeep)/.test(name)) {
						return false;
					}
					return true;
				},
			},
			{
				from: path.resolve(__dirname, 'src', 'locales'),
				to: path.resolve(__dirname, 'dist', 'locales'),
			},
		],
	}),
];

export default {
	entry: {
		main: path.resolve(__dirname, 'src', 'main.ts'),
	},
	output: {
		assetModuleFilename: (pathData) => {
			return pathData.filename?.replace(/src\//, '');
		},
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.ts', '.vue', '.js', 'json'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				loader: 'import-glob-loader',
				enforce: 'pre',
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false,
						},
					},
					'css-loader',
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					'vue-loader',
					'vue-svg-loader',
				],
			},
			{
				test: /(assets|locales)/,
				type: 'asset/resource',
				generator: {
					emit: false,
				},
			},
		],
	},
	plugins,
} as Configuration;
