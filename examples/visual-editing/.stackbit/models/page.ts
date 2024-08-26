import { type PageModel } from '@stackbit/types';

export const page: PageModel = {
	name: 'page',
	type: 'page',
	urlPath: '/{slug}',
	filePath: 'src/content/docs/{slug}.md',
	fieldGroups: [{ name: 'settings', label: 'Settings', icon: 'gear' }],
	fields: [
		{ name: 'title', type: 'string', required: true },
		{ name: 'description', type: 'string' },
		{ name: 'hero', type: 'model', models: ['hero'] },
		{ name: 'banner', type: 'model', models: ['banner'] },
		{ name: 'lastUpdated', type: 'date' },
		{
			name: 'template',
			type: 'enum',
			controlType: 'button-group',
			options: ['doc', 'splash'],
			group: 'settings',
		},
		{ name: 'pagefind', type: 'boolean', group: 'settings' },
		{ name: 'draft', type: 'boolean', group: 'settings' },
	],
};
