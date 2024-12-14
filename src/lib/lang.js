import i18n from '../content/i18n.yaml';

export default function lang(locale) {
	const index = i18n.locales.indexOf(locale || 'en');

	return function __(text) {
		return i18n[text][index] || text;
	};
}