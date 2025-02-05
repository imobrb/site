import { createClient } from '@sanity/client'

export default defineNuxtPlugin(() => {
  const config = {
    projectId: 'isd7d0e4',
    dataset: process.env.SANITY_DATASET || 'production',
    useCdn: process.env.SANITY_USE_CDN || false,
    apiVersion: '2023-10-01',
    token: process.env.SANITY_API_TOKEN
  }

  const client = createClient(config)

  return {
    provide: {
      sanity: client
    }
  }
})