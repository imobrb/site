/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'src/**/*.{astro,html,md,mdx,js,vue}',
    'node_modules/**/*.{html,vue}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        secondary: '#D95E3A'
      }
    }
  },
  plugins: [
	require('tailwindcss-primeui'),
    // Plugin para os componentes de texto (headings, body e overline)
    plugin(function ({ addComponents, theme }) {
      addComponents({
        /* Headings */
        '.text-heading-1': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '115%',
          '@screen sm': {
            fontSize: theme('fontSize.base'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.lg'),
          },
        },
        '.text-heading-2': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '115%',
          '@screen sm': {
            fontSize: theme('fontSize.xl'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.2xl'),
          },
        },
        '.text-heading-3': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '115%',
          '@screen sm': {
            fontSize: theme('fontSize.2xl'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.3xl'),
          },
        },
        '.text-heading-4': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '115%',
          '@screen sm': {
            fontSize: theme('fontSize.3xl'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.4xl'),
          },
        },
        '.text-heading-5': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '115%',
          '@screen sm': {
            fontSize: theme('fontSize.4xl'),
          },
          '@screen lg': {
            fontSize: theme('fontSize.5xl'),
          },
        },

        /* Body's */
        '.text-body-1': {
          fontSize: theme('fontSize.xs'),
          lineHeight: '150%',
          '@screen sm': {
            fontSize: theme('fontSize.xs'),
            lineHeight: '150%',
          },
        },
        '.text-body-2': {
          fontSize: theme('fontSize.xs'),
          lineHeight: '150%',
          '@screen sm': {
            fontSize: theme('fontSize.sm'),
            lineHeight: '150%',
          },
        },
        '.text-body-3': {
          fontSize: theme('fontSize.sm'),
          lineHeight: '150%',
          '@screen sm': {
            fontSize: theme('fontSize.base'),
            lineHeight: '150%',
          },
        },
        '.text-body-4': {
          fontSize: theme('fontSize.base'),
          lineHeight: '150%',
          '@screen sm': {
            fontSize: theme('fontSize.lg'),
            lineHeight: '150%',
          },
        },
        '.text-body-5': {
          fontSize: theme('fontSize.lg'),
          lineHeight: '150%',
          '@screen sm': {
            fontSize: theme('fontSize.xl'),
            lineHeight: '150%',
          },
        },

        /* Others */
        '.text-overline': {
          fontSize: '.625rem',
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.widest'),
          '@screen sm': {
            fontSize: theme('fontSize.xs'),
          },
        },
      })
    }),
    // Plugin para a utility do container responsivo (.px-container)
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.px-container': {
          maxWidth: '1366px',
          margin: '0 auto',
          paddingLeft: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem)',
          paddingRight: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem)',
        },
        '@media (min-width: 768px)': {
          '.px-container': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
        },
        '@media (min-width: 1024px)': {
          '.px-container': {
            paddingLeft: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem)',
            paddingRight: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem)',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
