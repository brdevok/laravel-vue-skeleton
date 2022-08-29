import path from 'path';
import config from './webpack.config';
import type { Configuration } from 'webpack';
import type { Configuration as DevServer } from 'webpack-dev-server';

export default {
	...config,
	mode: 'development',
	devServer: {
		static: [
			{
				directory: path.resolve(__dirname, 'src', 'assets'),
				publicPath: '/assets',
			},
			{
				directory: path.resolve(__dirname, 'src', 'locales'),
				publicPath: '/locales',
			},
		],
		watchFiles: {
			paths: ['src/**/*'],
		},
		compress: true,
		port: 9000,
		open: true,
	} as DevServer,
} as Configuration;
