import { GET_MESSAGE } from '@/store/hello-world/hello-world.namespace';
import { computed, defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import TestIcon from './icon-test/icon.svg';

export default defineComponent({
	name: 'A1HelloWorld',
	components: { TestIcon },
	data() {
		return {
			i18nMessage: computed(() => this.$t('messages.i18nMessage')),
			icon: TestIcon,
		};
	},
	computed: {
		...mapGetters({
			titleFromStore: GET_MESSAGE,
		}),
	},
});
