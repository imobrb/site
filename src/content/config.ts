import { defineCollection, z } from 'astro:content'

const base = z.object({
	title: z.string(),
	description: z.string(),
	draft: z.boolean().optional().default(false),
	noindex: z.boolean().optional().default(false)
})

const institutional = defineCollection({
	type: 'data',
	schema: base.extend({
		ogImage: z.string().default(''),
		slug: z.string().optional(),
		content: z.object({}).optional()
	})
})

export const collections = {
	institutional
}
