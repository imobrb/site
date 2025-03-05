import { defineCollection, z } from 'astro:content'

const base = z.object({
	title: z.string(),
	description: z.string(),
	draft: z.boolean().optional().default(false),
	noindex: z.boolean().optional().default(false),
	image: z.string().default('')
})

const institutional = defineCollection({
	type: 'data',
	schema: base.extend({
		content: z.object({}).optional()
	})
})

export const collections = {
	institutional
}
