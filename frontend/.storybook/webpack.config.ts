import path from 'path';

module.exports = ({ config }) => {
	const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
	fileLoaderRule.exclude = /\.svg$/;

	config.module.rules.push({
		test: /\.scss$/,
		loader: 'import-glob-loader',
		enforce: 'pre',
	});
	
	config.module.rules.push({
		test: /\.svg$/,
		use: [
			'vue-loader',
			'vue-svg-loader',
		],
	});

	config.resolve.alias = {
		'@': path.resolve(__dirname, '..', 'src'),
	};

	return config;
};
