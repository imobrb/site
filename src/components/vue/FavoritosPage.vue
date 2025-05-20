<template>
	<div class="flex flex-col gap-8">
		<div class="px-container w-full py-8 min-h-full md:gap-8 gap-4 flex flex-col">
			<div class="flex md:flex-row flex-col gap-4 md:justify-between md:items-end">
				<div class="flex flex-col gap-2">
					<Breadcrumb :current-page="currentPage" />
					<h1 class="text-heading-3 text-surface-800">Meus Favoritos</h1>
				</div>
				<span class="text-body-1 text-surface-500 md:hidden flex"
					>271 Imóveis encontrados nessa região.</span
				>
				<div class="flex gap-2 items-center">
					<div class="flex border rounded-full p-1 gap-1">
						<Button
							icon="pi pi-list"
							:class="['rounded-full w-8 h-8', isListMode ? 'p-button-primary' : 'p-button-text']"
							@click="isListMode = true"
						/>
						<Button
							icon="pi pi-th-large"
							:class="['rounded-full w-8 h-8', !isListMode ? 'p-button-primary' : 'p-button-text']"
							@click="isListMode = false"
						/>
					</div>
					<Select
						:options="ordem"
						optionLabel="name"
						optionValue="code"
						placeholder="Ordenar por"
						class="rounded-full md:w-56 p-variant-secondary"
					/>
				</div>
			</div>

			<div
				:class="[
					'm-0 mb-16',
					isListMode
						? 'flex flex-col gap-4 md:gap-y-12'
						: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-14 md:gap-y-20'
				]"
			>
				<CardImovel
					v-for="imovel in imoveis"
					:key="imovel.id"
					:transaction-type="imovel.transactionType"
					:title="imovel.title"
					:subtitle="imovel.subtitle"
					:image="imovel.image"
					:price="imovel.price"
					:link="imovel.link"
					:list-mode="isListMode"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Breadcrumb from '@components/vue/Breadcrumb.vue'
	import CardImovel from '@components/vue/CardImovel.vue'
	import Select from 'primevue/select'
	import Button from 'primevue/button'

	import { ref } from 'vue'
	import { json as highlightsData } from '../../mock/get-highlights.js'

	const isListMode = ref(true)
	const currentPage = {
		label: 'Favoritos',
		url: '/favoritos'
	}

	const imoveis = ref(
		highlightsData.venda.map((imovel) => ({
			id: imovel.dadosBasicos.codigo,
			title: `${imovel.dadosBasicos.tipoimovel} - ${imovel.dadosBasicos.bairro}`,
			subtitle: `${imovel.dadosBasicos.endereco}, ${imovel.dadosBasicos.numero} - ${imovel.dadosBasicos.cidade}`,
			price: parseFloat(imovel.valorVenda),
			transactionType: imovel.dadosBasicos.tiponegocio,
			image: {
				src: 'https://picsum.photos/400/300'
			},
			link: {
				href: `/imovel/${imovel.dadosBasicos.codigo}`,
				label: 'Ver imóvel'
			}
		}))
	)

	const imoveisLocacao = ref(
		highlightsData.locacao.map((imovel) => ({
			id: imovel.dadosBasicos.codigo,
			title: `${imovel.dadosBasicos.tipoimovel} - ${imovel.dadosBasicos.bairro}`,
			subtitle: `${imovel.dadosBasicos.endereco}, ${imovel.dadosBasicos.numero} - ${imovel.dadosBasicos.cidade}`,
			price: parseFloat(imovel.valorLocacao),
			transactionType: imovel.dadosBasicos.tiponegocio,
			image: {
				src: 'https://picsum.photos/400/300'
			},
			link: {
				href: `/imovel/${imovel.dadosBasicos.codigo}`,
				label: 'Ver imóvel'
			}
		}))
	)

	const ordem = [
		{ name: 'Recém cadastrados', code: 'recentes' },
		{ name: 'Valores crescentes', code: 'valor_crescente' },
		{ name: 'Valores decrescentes', code: 'valor_decrescente' }
	]

	const featuredProperties = ref({
		locacao: [] // This should be populated with your actual data
	})
</script>
