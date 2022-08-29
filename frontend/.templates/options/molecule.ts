import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

export default ((): IConfigItem => ({
	option: 'Create molecule component',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: '.templates/templates/molecule',
	},
	stringReplacers: [
		{
			question: 'Component id (number)',
			slot: '__id__',
		},
		{
			question: 'Component name',
			slot: '__name__',
		},
	],
	output: {
		path: './src/components/molecules',
		overwrite: true,
	},
}))();
