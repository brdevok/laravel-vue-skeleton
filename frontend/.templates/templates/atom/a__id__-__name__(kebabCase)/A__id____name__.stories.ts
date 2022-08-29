import type { Meta, StoryFn } from '@storybook/vue3';

import A__id____name__ from './A__id____name__.vue';
import { A__id____name__DefaultMockData } from './A__id____name__.mocks';

export default {
	title: 'Atoms/A__id____name__',
	component: A__id____name__,
	argTypes: {},
} as Meta<typeof A__id____name__>;

const Story: StoryFn<typeof A__id____name__> = (args) => ({
	components: { A__id____name__ },
	setup() {
		return { args };
	},
	template: '<A__id____name__ v-bind=args />',
});

export const Default = Story.bind({});
Default.args = A__id____name__DefaultMockData;
