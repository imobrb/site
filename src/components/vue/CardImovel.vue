<template>
	<Card class="w-full max-w-lg">
		<template #header>
			<div>
				<Button
					label="Favoritar"
					rounded
					size="small"
					icon="pi pi-heart"
					class="w-fit absolute bg-[#D95E3A] border-none mt-2 ml-2 text-white"
				/>
				<img
					alt="user header"
					src="https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=3451&tamanho=1280x720&imagem=IMG_E8347.JPG"
				/>
			</div>
		</template>
		<template #title> Aluguel R$480,00 </template>
		<template #subtitle>
			<div>Apartamento - Cond Ed Antonina Maria</div>
		</template>
		<template #content>
			<span class="text-body-1 text-surface-500">
				Presidente Prudente | Jardim Vale do Sol Avenida João Antonio
			</span>
			<ul class="m-0 p-0">
				<li class="flex flex-col gap-2 p-2 text-center justify-center items-center max-w-20">
					<i class="pi pi-car text-surface-500 text-sm" />
					<span class="text-sm text-surface-500 font-medium leading-none"> 2 vagas </span>
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

				<Button
					label="Ver imóvel"
					severity="primary"
					rounded
				/>
			</div>
		</template>
	</Card>
</template>

<script setup>
	import Button from 'primevue/button'
	import Card from 'primevue/card'
	import Divider from 'primevue/divider'

	const props = defineProps({
		title: {
			type: String
			// required: true
		},
		subtitle: {
			type: String
		},
		image: {
			type: String
			// required: true
		},
		price: {
			type: Number
		},
		note: {
			type: String
		},
		link: {
			type: Object, // text, href, title
			validator(value, props) {
				return value
			}
		}
	})
</script>
