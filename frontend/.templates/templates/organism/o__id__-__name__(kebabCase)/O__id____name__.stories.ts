import type { Meta, StoryFn } from '@storybook/vue3';

import O__id____name__ from './O__id____name__.vue';
import { O__id____name__DefaultMockData } from './O__id____name__.mocks';

export default {
	title: 'Organisms/O__id____name__',
	component: O__id____name__,
	argTypes: {},
} as Meta<typeof O__id____name__>;

const Story: StoryFn<typeof O__id____name__> = (args) => ({
	components: { O__id____name__ },
	setup() {
		return { args };
	},
	template: '<O__id____name__ v-bind=args />',
});

export const Default = Story.bind({});
Default.args = O__id____name__DefaultMockData;
