import type { StoreOptions } from 'vuex';
import { GET_MESSAGE } from './hello-world.namespace';
import type { HelloWorldState } from './hello-world.types';

export default ((): StoreOptions<HelloWorldState> => ({
	state() {
		return {
			message: 'Hello World!',
		};
	},
	getters: {
		[GET_MESSAGE](state) {
			return state.message;
		},
	},
	mutations: {
		// Create your mutations here or remove.
	},
	actions: {
		// Create your actions here or remove.
	},
}))();
