export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-01-06',
  app: {
      head: {
          title: 'Placeholder - Placehoder',
          htmlAttrs: {
           lang: 'pt-br'
          },
      }
  },

  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/sanity",
    'nuxt-gtag',
  ],

  tailwindcss: {
    configPath: './tailwind.config.js'
  },

  gtag: {
    id: '',
    enabled: false
  },

  runtimeConfig: {
    public: {
      gtag: {
        id: ''
      }
    }
  },

  css: [
      '~/assets/css/main.css',
      'primeicons/primeicons.css',
  ],

  plugins: [
      '~/plugins/sanity.js',
      '~/plugins/global-components.js',
  ],

  primevue: {
      options: {
        unstyled: true
      },
      importPT: { from: './assets/theme/' }   
    },

    sanity: {
      projectId: process.env.SANITY_PROJECT_ID || 'isd7d0e4',
      dataset: process.env.SANITY_DATASET || 'production',
      apiVersion: '2023-10-01',
      token: process.env.SANITY_API_TOKEN
    }
})