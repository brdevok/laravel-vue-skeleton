import { generateTemplateFiles } from 'generate-template-files';

import atom from './options/atom';
import molecule from './options/molecule';
import organism from './options/organism';
import block from './options/block';
import template from './options/template';
import view from './options/view';
import store from './options/store';

generateTemplateFiles([atom, molecule, organism, block, template, view, store]);
