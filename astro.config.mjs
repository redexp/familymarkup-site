import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://familymarkup.org',
	integrations: [mdx()],
	i18n: {
		defaultLocale: "en",
		locales: ["en", "uk", "ru"],
	},
	routing: {
		prefixDefaultLocale: false,
	}
});
