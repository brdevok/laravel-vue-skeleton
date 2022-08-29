import type { Meta, StoryFn } from '@storybook/vue3';

import M__id____name__ from './M__id____name__.vue';
import { M__id____name__DefaultMockData } from './M__id____name__.mocks';

export default {
	title: 'Molecules/M__id____name__',
	component: M__id____name__,
	argTypes: {},
} as Meta<typeof M__id____name__>;

const Story: StoryFn<typeof M__id____name__> = (args) => ({
	components: { M__id____name__ },
	setup() {
		return { args };
	},
	template: '<M__id____name__ v-bind=args />',
});

export const Default = Story.bind({});
Default.args = M__id____name__DefaultMockData;
