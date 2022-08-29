import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';

i18next.use(HttpApi).init({
	lng: 'en',
	fallbackLng: 'en',
	debug: process.env.NODE_ENV === 'development',
	backend: {
		loadPath: '/locales/{{lng}}/{{ns}}.json',
	},
});
