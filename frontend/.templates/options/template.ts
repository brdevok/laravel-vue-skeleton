import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

export default ((): IConfigItem => ({
	option: 'Create template component',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: '.templates/templates/template/',
	},
	stringReplacers: [
		{
			question: 'Your template name ("Template" suffix will be added automatically)',
			slot: '__name__',
		},
	],
	output: {
		path: './src/components/templates',
		overwrite: true,
	},
}))();
