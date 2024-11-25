import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import highlight from './lib/rehype-familymarkup.mjs';

export default defineConfig({
	site: 'https://familymarkup.org',
	integrations: [mdx()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "uk", "ru"],
	},
	routing: {
		prefixDefaultLocale: false,
	},
	markdown: {
		rehypePlugins: [[highlight, {
			classMap: {
				'class.declaration.family_name': 'token class-name',
				'class.declaration.family_name.alias': 'token class-name italic',
				'class.family_name.ref': 'token class-name',
				'string.label': 'token string bold',
				'property.declaration.static.name.def.alias': 'token property italic',
			},
			classPrefix: 'token ',
			modifiers: false,
		}]],
		syntaxHighlight: false,
	},
});
