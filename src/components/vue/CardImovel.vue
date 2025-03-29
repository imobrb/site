<template>
	<a :href="props.link?.href" class="block">
		<Card class="w-full">
			<template #header>
				<div>
					<Button
						rounded
						label="Favoritar"
						size="small"
						icon="pi pi-heart"
						class="w-fit absolute bg-[#D95E3A] border-none mt-2 ml-2 text-white"
						@click.stop
					/>
					<img
						loading="lazy"
						alt="user header"
						:src="image.src"
					/>
				</div>
			</template>
			<template #title>
				{{ props.transactionType }} R$ {{ props.price }}
			</template>
			<template #subtitle>
				<div>
					{{ props.title }}
				</div>
			</template>

			<template #content>
				<span class="text-body-1 text-surface-500">
					{{ props.subtitle }}
				</span>
				<ul class="m-0 p-0">
					<li class="flex flex-col gap-2 p-2 text-center justify-center items-center max-w-20">
						<i class="pi pi-car text-surface-500 text-sm"></i>
						<span class="text-sm text-surface-500 font-medium leading-none">
							2 vagas
						</span>
					</li>
				</ul>
				<Divider class="my-2" />
			</template>

			<template #footer>
				<div class="flex flex-row justify-between">
					<div class="flex flex-col text-surface-500 text-sm font-medium">
						<span>Aluguel + Encargos</span>
						<span>Exclusivo</span>
					</div>

					<LinkButton
						:label="props.link?.label"
						:href="props.link?.href"
						severity="primary"
						rounded
					/>
				</div>
			</template>
		</Card>
	</a>
</template>

<script setup>
	import Button from 'primevue/button'
	import Card from 'primevue/card'
	import Divider from 'primevue/divider'
	import LinkButton from '@components/vue/LinkButton.vue'

	const props = defineProps({
		transactionType: {
			type: String
			// required: true
		},
		title: {
			type: String
			// required: true
		},
		subtitle: {
			type: String
		},
		image: {
			type: Object
			// required: true
		},
		price: {
			type: Number
		},
		note: {
			type: String
		},
		link: {
			type: Object, // label, href, title
			default() {
				return {
					label: 'Ver imóvel',
					href: '#'
				}
			}
		},
		items: {
			type: Object // quarto, garagem, tamanho, banheiro, suite
		}
	})
</script>
