import HomeView from '@/views/home';
import type { RouteRecordRaw } from 'vue-router';

const routes: ReadonlyArray<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
];

export default routes;
