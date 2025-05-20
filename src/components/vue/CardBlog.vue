<template>
	<a
		:href="props.link?.href"
		class="flex flex-col gap-4 rounded-2xl group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
	>
		<div class="group-hover:ring-4 group-hover:ring-primary-500 rounded-2xl">
			<div class="overflow-hidden rounded-2xl">
				<img
					loading="lazy"
					:alt="props.title"
					:src="image.src"
					class="w-full h-48 object-cover rounded-2xl group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-secondary group-hover:scale-105 transition-transform duration-300"
					role="presentation"
				/>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="flex items-center gap-2">
					<span class="text-surface-500 text-sm">{{ props.date }}</span>
					<span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
						{{ props.category }}
					</span>
				</div>
				<h3 class="text-heading-1 text-surface-900">{{ props.title }}</h3>
				<p class="text-body-1 text-surface-500 line-clamp-2">{{ props.description }}</p>
			</div>

			<div class="flex items-center gap-2 text-surface-500">
				<i class="pi pi-eye"></i>
				<span class="text-sm">{{ props.views }} visualizações</span>
			</div>

			<hr class="border-surface-200" />

			<div class="flex justify-start">
				<div class="p-button p-button-primary rounded-full font-medium text-sm">
					{{ props.link?.label || 'Continuar lendo' }}
				</div>
			</div>
		</div>
	</a>
</template>

<script setup>
	const props = defineProps({
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		image: {
			type: Object,
			required: true
		},
		views: {
			type: [Number, String],
			required: true
		},
		link: {
			type: Object,
			default() {
				return {
					label: 'Continuar lendo'
				}
			}
		}
	})
</script>
