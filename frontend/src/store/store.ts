import { createStore } from 'vuex';
import helloWorld from './hello-world/hello-world';

export default createStore({
	modules: {
		// Add your stores here
		helloWorld,
	},
});
