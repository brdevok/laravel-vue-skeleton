import type { Meta, StoryFn } from '@storybook/vue3';

import B__id____name__ from './B__id____name__.vue';
import { B__id____name__DefaultMockData } from './B__id____name__.mocks';

export default {
	title: 'Blocks/B__id____name__',
	component: B__id____name__,
	argTypes: {},
} as Meta<typeof B__id____name__>;

const Story: StoryFn<typeof B__id____name__> = (args) => ({
	components: { B__id____name__ },
	setup() {
		return { args };
	},
	template: '<B__id____name__ v-bind=args />',
});

export const Default = Story.bind({});
Default.args = B__id____name__DefaultMockData;
