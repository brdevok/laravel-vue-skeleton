import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

export default ((): IConfigItem => ({
	option: 'Create view template',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: '.templates/templates/view/',
	},
	stringReplacers: [
		{
			question: 'Your view name ("View" suffix will be added automatically)',
			slot: '__name__',
		},
	],
	output: {
		path: './src/views',
		overwrite: true,
	},
}))();
