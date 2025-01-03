import i18n from '../i18n.yaml';

export default function lang(locale, text = '') {
	const index = i18n.locales.indexOf(locale || 'en');

	const __ = function (text) {
		return i18n[text] && i18n[text][index] || text;
	};

	if (text) {
		return __(text);
	}

	return __;
}

export function langFrom(url) {
	if (url instanceof URL) {
		url = url.pathname;
	}

	const match = /^\/(\w{2})\b/.exec(url);

	return match ? match[1] : 'en';
}