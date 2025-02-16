/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'src/**/*.{astro,html,md,mdx,js,vue}',
		'node_modules/**/*.{html,vue}'
	],
	plugins: [
		// require('@tailwindcss/typography'),
		function ({ addUtilities }) { },
	],
	important: true,
	// darkMode: 'class',
	theme: {
		extend: {}
	}
}


// export default {\
// https://github.com/imobrb/site/blob/main/tailwind.config.js
//   content: [
//     './assets/theme/**/*.{js,vue,ts}'
// ],
//   theme: {
//     extend: {
//       fontFamily: {
//         primary: ['Roboto', 'sans-serif'],
//         secondary: ['Roboto', 'sans-serif'],
//         tertiary: ['Gruppo', 'cursive'],
//       },
//       colors: {
//         'primary-500': 'rgb(255, 255, 255)',
//         'primary-600': 'rgb(230, 230, 230)',
//         'secondary-500': 'rgb(10, 10, 10)',
//         'support-500': 'rgb(46, 53, 69)',
//         'surface-0': 'rgb(255, 255, 255)',
//         'surface-50': 'rgb(250, 250, 250)',
//         'surface-100': 'rgb(244, 244, 245)',
//         'surface-200': 'rgb(228, 228, 231)',
//         'surface-300': 'rgb(212, 212, 216)',
//         'surface-400': 'rgb(161, 161, 170)',
//         'surface-500': 'rgb(113, 113, 122)',
//         'surface-600': 'rgb(82, 82, 91)',
//         'surface-700': 'rgb(63, 63, 70)',
//         'surface-800': 'rgb(39, 39, 42)',
//         'surface-900': 'rgb(24, 24, 27)',
//         'surface-950': 'rgb(9, 9, 11)',
//       }
//     }
//   },
//   plugins: [
//     function ({ addUtilities, variants }) {
//       const newUtilities = {};
      
//       newUtilities['.px-container'] = {
//         maxWidth: '1366px',
//         margin: '0 auto',
//         paddingLeft: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem);',
//         paddingRight: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem);',
//       };

//       newUtilities['@media (min-width: 768px)'] = {
//         '.px-container': {
//           paddingLeft: '2rem',
//           paddingRight: '2rem',
//         }
//       };

//       newUtilities['@media (min-width: 1024px)'] = {
//         '.px-container': {
//           paddingLeft: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem);',
//           paddingRight: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem);',
//         }
//       };
  
//       addUtilities(newUtilities, ['responsive', 'hover']);
//     },
//   ]
// }
