import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

export default ((): IConfigItem => ({
	option: 'Create atom component',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: '.templates/templates/atom',
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
		path: './src/components/atoms',
		overwrite: true,
	},
}))();
