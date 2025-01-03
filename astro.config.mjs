import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import yml from '@rollup/plugin-yaml';
import highlight, {defaultParams} from './lib/rehype-familymarkup.mjs';

export default defineConfig({
	site: 'https://familymarkup.site',
	integrations: [mdx()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "uk", "ru"],
	},
	routing: {
		prefixDefaultLocale: false,
	},
	markdown: {
		rehypePlugins: [[highlight, defaultParams]],
		syntaxHighlight: false,
	},
	vite: {
		plugins: [yml()]
	},
});
