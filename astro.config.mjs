import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import cssnano from 'cssnano'

const productionBuild = import.meta.env.PROD

export default defineConfig({
  site: 'https://www.imobiliariariobranco.com.br/',
	compressHTML: productionBuild ? false : false,
	trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
    assets: '_astro',
  },
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    vue({ appEntrypoint: 'vue.config.js' })
  ],
  markdown: {},
  vite: {
    ssrBuild: true,
    server: {
      fs: {
        allow: ['..']
      }
    },
    plugins: [
      {
        name: 'cssnano',
        ...cssnano({
          preset: [
            'default', {
              discardComments: { removeAll: true },
              minifyFontValues: { removeQuotes: false }
            }
          ]
        })
      }
    ],
    ssr: {
      noExternal: ['@astrojs/vue'],
      external: ['vue']
    }
  }
})
