import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

import { banner } from './.stackbit/models/banner';
import { buttonLink } from './.stackbit/models/buttonLink';
import { hero } from './.stackbit/models/hero';
import { image } from './.stackbit/models/image';
import { imageHtml } from './.stackbit/models/imageHtml';
import { imageLightDark } from './.stackbit/models/imageLightDark';
import { page } from './.stackbit/models/page';
import { sidebarAutoLinkGroup } from './.stackbit/models/sidebarAutoLinkGroup';
import { sidebarAutoLinks } from './.stackbit/models/sidebarAutoLinks';
import { sidebarConfig } from './.stackbit/models/sidebarConfig';
import { sidebarInternalLink } from './.stackbit/models/sidebarInternalLink';
import { sidebarLink } from './.stackbit/models/sidebarLink';
import { sidebarLinkGroup } from './.stackbit/models/sidebarLinkGroup';

export default defineStackbitConfig({
	stackbitVersion: '~0.6.0',
	ssgName: 'custom',
	nodeVersion: '18',
	devCommand: 'node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1',
	experimental: {
		ssg: {
			name: 'Astro',
			logPatterns: {
				up: ['is ready', 'astro'],
			},
			directRoutes: {
				'socket.io': 'socket.io',
			},
			passthrough: ['/vite-hmr/**'],
		},
	},
	contentSources: [
		new GitContentSource({
			rootPath: __dirname,
			contentDirs: ['src/content/docs', 'src/data'],
			models: [
				banner,
				buttonLink,
				hero,
				image,
				imageHtml,
				imageLightDark,
				page,
				sidebarAutoLinkGroup,
				sidebarAutoLinks,
				sidebarConfig,
				sidebarInternalLink,
				sidebarLink,
				sidebarLinkGroup,
			],
			assetsConfig: {
				referenceType: 'static',
				staticDir: '/src/assets',
				publicPath: '/',
			},
		}),
	],
});
