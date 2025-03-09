<template>
	<section class="flex flex-col gap-8 md:gap-16 w-full">
		<div class="flex w-full justify-between h-fit">
			<h3 class="text-heading-3 font-bold">
				{{ props.title }}
			</h3>

			<template v-if="props.link && props.link.href">
				<LinkButton
					rounded
					outlined
					:label="props.link.label"
					:href="props.link.href"
					:icon="props.link.icon &&  props.link.icon.name ? props.link.icon.name : 'pi pi-arrow-right'"
					:icon-pos="props.icon && props.icon.position ? props.icon.position : 'right'"
					size="small"
				/>
			</template>
		</div>

		<div class="w-full !m-0 !p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-14 md:gap-y-20">
			<CardImovel />
			<CardImovel />
			<CardImovel />
			<CardImovel />
			<CardImovel />
			<CardImovel />
		</div>
	</section>
</template>
<script setup>
	import CardImovel from '@components/vue/CardImovel.vue'
	import LinkButton from '@components/vue/LinkButton.vue'

	const props = defineProps({
		title: {
			type: String,
			// required: true
		},
		link: {
			type: Object
		},
		items: {
			type: Array,
			default(rawProps) {
				return []
			}
			// required: true
		},
	})
</script>
