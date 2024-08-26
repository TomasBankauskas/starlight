import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sidebarConfig from './src/data/sidebarConfig.json';

const sidebarItems = removeKeys(sidebarConfig.items, ['type']);

function removeKeys(obj, keys) {
	if (Array.isArray(obj)) return obj.map((item) => removeKeys(item, keys));

	if (typeof obj === 'object' && obj !== null) {
		return Object.keys(obj).reduce((previousValue, key) => {
			return keys.includes(key)
				? previousValue
				: { ...previousValue, [key]: removeKeys(obj[key], keys) };
		}, {});
	}
	return obj;
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: sidebarItems,
		}),
	],
	server: {
		port: 3000,
	},
});
