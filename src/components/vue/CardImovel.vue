<template>
	<a :href="props.link?.href" class="flex flex-col gap-4 rounded-lg group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
		<div class="group-hover:ring-4 group-hover:ring-primary-500 rounded-lg">
			<div class="overflow-hidden rounded-lg">
				<Button
					rounded
					label="Favoritar"
					size="small"
					icon="pi pi-heart"
					class="w-fit absolute bg-secondary border-none mt-2 ml-2 text-white z-10"
					@click.stop
					tabindex="-1"
					role="presentation"
				/>
				<img
					loading="lazy"
					alt="user header"
					:src="image.src"
					class="w-full h-48 object-cover rounded-lg group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-secondary group-hover:scale-105 transition-transform duration-300"
					role="presentation"
				/>
			</div>
		</div>
		
		<div class="flex flex-col gap-2">
			<h3 class="text-heading-2 text-primary-600" role="presentation">
				{{ props.transactionType }} R$ {{ props.price }}
			</h3>
			<div class="text-heading-1" role="presentation">
				{{ props.title }}
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<span class="text-body-1 text-surface-500" role="presentation">
				{{ props.subtitle }}
			</span>
			<ul class="m-0 p-0 flex gap-4" role="presentation">
				<li class="flex flex-col gap-2 p-2 text-center justify-center items-center max-w-20" role="presentation">
					<i class="pi pi-car text-surface-500 text-sm"></i>
					<span class="text-sm text-surface-500 font-medium leading-none">
						2 vagas
					</span>
				</li>
			</ul>
		</div>

		<hr class="border-surface-200"/>

		<div class="flex flex-row justify-between items-center">
			<div class="flex flex-col text-surface-500 text-sm font-medium">
				<span>Aluguel + Encargos</span>
				<span>Exclusivo</span>
			</div>

			<div class="p-button p-button-primary rounded-full font-medium text-sm">
				{{ props.link?.label }}
			</div>
		</div>
	</a>
</template>

<script setup>
	import Button from 'primevue/button'
	import LinkButton from '@components/vue/LinkButton.vue'

	const props = defineProps({
		transactionType: {
			type: String
		},
		title: {
			type: String
		},
		subtitle: {
			type: String
		},
		image: {
			type: Object
		},
		price: {
			type: Number
		},
		note: {
			type: String
		},
		link: {
			type: Object,
			default() {
				return {
					label: 'Ver imóvel',
					href: '#'
				}
			}
		},
		items: {
			type: Object
		}
	})
</script>
