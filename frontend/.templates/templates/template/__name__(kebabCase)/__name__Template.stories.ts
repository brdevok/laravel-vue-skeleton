import type { Meta, StoryFn } from '@storybook/vue3';

import __name__Template from './__name__Template.vue';
import { __name__TemplateDefaultMockData } from './__name__Template.mocks';

export default {
	title: 'Templates/__name__Template',
	component: __name__Template,
	argTypes: {},
} as Meta<typeof __name__Template>;

const Story: StoryFn<typeof __name__Template> = (args) => ({
	components: { __name__Template },
	setup() {
		return { args };
	},
	template: '<__name__Template v-bind=args />',
});

export const Default = Story.bind({});
Default.args = __name__TemplateDefaultMockData;
