import type { Meta, StoryFn } from '@storybook/vue3';

import __name__View from './__name__View.vue';
import { __name__ViewDefaultMockData } from './__name__View.mocks';

export default {
	title: 'Views/__name__View',
	component: __name__View,
	argTypes: {},
} as Meta<typeof __name__View>;

const Story: StoryFn<typeof __name__View> = (args) => ({
	components: { __name__View },
	setup() {
		return { args };
	},
	View: '<__name__View v-bind=args />',
});

export const Default = Story.bind({});
Default.args = __name__ViewDefaultMockData;
