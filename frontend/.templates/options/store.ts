import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

export default ((): IConfigItem => ({
	option: 'Create new store',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: '.templates/templates/store/',
	},
	stringReplacers: [
		{
			question: 'Your store name',
			slot: '__name__',
		},
	],
	output: {
		path: './src/store',
		overwrite: true,
	},
}))();
