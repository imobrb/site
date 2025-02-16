/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'src/**/*.{astro,html,md,mdx,js,vue}',
		'node_modules/**/*.{html,vue}'
	],
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addUtilities }) { },
	],
	important: true,
	// darkMode: 'class',
	theme: {
		extend: {}
	}
}
