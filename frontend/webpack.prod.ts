import config from './webpack.config';
import type { Configuration } from 'webpack';

export default {
	...config,
	mode: 'production',
} as Configuration;
