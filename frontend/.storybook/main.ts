module.exports = {
	'stories': [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	staticDirs: [
		{ from: '../src/assets', to: '/assets' },
		{ from: '../src/locales', to: '/locales' },
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
	],
	'framework': '@storybook/vue3',
	'core': {
		'builder': '@storybook/builder-webpack5',
	},
};
