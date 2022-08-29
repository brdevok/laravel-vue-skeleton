import { app } from '@storybook/vue3';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';

import store from '../src/store/store';

import '../src/i18next/i18next';
import '../src/styles/main.scss';

app.use(I18NextVue, { i18next });
app.use(store);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
