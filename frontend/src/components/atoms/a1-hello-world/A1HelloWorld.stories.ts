import type { Meta, StoryFn } from '@storybook/vue3';

import A1HelloWorld from './A1HelloWorld.vue';
import { A1HelloWorldDefaultMockData } from './A1HelloWorld.mocks';

export default {
	title: 'Atoms/A1HelloWorld',
	component: A1HelloWorld,
	argTypes: {},
} as Meta<typeof A1HelloWorld>;

const Story: StoryFn<typeof A1HelloWorld> = (args) => ({
	components: { A1HelloWorld },
	setup() {
		return { args };
	},
	template: '<A1HelloWorld v-bind=args />',
});

export const Default = Story.bind({});
Default.args = A1HelloWorldDefaultMockData;
