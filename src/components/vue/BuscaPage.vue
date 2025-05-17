<template>
	<div class="w-full px-container flex flex-col gap-4 md:gap-6 p-8">
		<Breadcrumb :current-page="currentPage" />
		
		<div class="w-full flex flex-col gap-4">
			<div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
				<div class="flex md:flex-row flex-col gap-2">
					<IconField>
						<InputIcon class="pi pi-search" />
						<InputText
							placeholder="Busca por nome, código ou bairro... "
							class="md:w-96 w-full"
						/>
					</IconField>
					
					<Button
						:icon="showFilters ? 'pi pi-minus' : 'pi pi-plus'"
						:label="showFilters ? 'Filtros' : 'Filtros'"
						class="rounded-full"
						outlined
						@click="showFilters = !showFilters"
					/>
				</div>

				<span class="text-body-1 text-surface-500 md:flex hidden">
					271 Imóveis encontrados nessa região. (desktop)
				</span>
			</div>

			<!-- Filtros -->
			<Transition
				enter-active-class="transition-all duration-300 ease-in-out"
				enter-from-class="opacity-0 max-h-0 translate-y-2"
				enter-to-class="opacity-100 max-h-[1000px] translate-y-0"
				leave-active-class="transition-all duration-300 ease-in-out"
				leave-from-class="opacity-100 max-h-[1000px] translate-y-0"
				leave-to-class="opacity-0 max-h-0 translate-y-2"
			>
				<div
					v-if="showFilters"
					class="flex flex-wrap gap-2 w-full"
				>
					<Select
						placeholder="Tipo de Negócio"
						:options="[]"
						class="w-auto p-variant-secondary"
					/>
					<Select
						placeholder="Tipo de Imóvel"
						:options="[]"
						class="w-auto p-variant-secondary"
					/>
					<Select
						placeholder="Cidade"
						:options="[]"
						class="w-auto p-variant-secondary"
					/>
					<Select
						placeholder="Detalhes"
						:options="[]"
						class="w-auto p-variant-secondary"
					/>
				</div>
			</Transition>
		</div>
	</div>

	<Divider class="m-0 p-0" />
	
	<div class="flex flex-col gap-8">
		<div class="px-container w-full py-8 min-h-full md:gap-8 gap-4 flex flex-col">
			<div class="flex md:flex-row flex-col gap-4 md:justify-between md:items-end">
				<div class="flex flex-col gap-1">
					<span class="text-body-3 text-surface-600">
						Imóveis para comprar em
					</span>
					<h1 class="text-heading-3 text-surface-800">
						Rio Branco
					</h1>
				</div>
				<span class="text-body-1 text-surface-500 md:hidden flex">
					271 Imóveis encontrados nessa região. (mobile)
				</span>

				<div class="flex gap-2 items-center">
					<div class="flex border rounded-full p-1 gap-1">
						<Button
							icon="pi pi-list"
							:class="[
								'rounded-full w-8 h-8',
								isListMode ? 'p-button-primary' : 'p-button-text'
							]"
							@click="isListMode = true"
						/>
						<Button
							icon="pi pi-th-large"
							:class="[
								'rounded-full w-8 h-8',
								!isListMode ? 'p-button-primary' : 'p-button-text'
							]"
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
					:listMode="isListMode"
					:title="imovel.title"
					:subtitle="imovel.subtitle"
					:price="Number(imovel.price)"
					:transactionType="imovel.transactionType"
					:image="imovel.image"
					:link="imovel.link"
					:rooms="imovel.rooms || []"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	import Breadcrumb from '@components/vue/Breadcrumb.vue'
	import CardImovel from '@components/vue/CardImovel.vue'
	import Divider from 'primevue/divider'
	import Select from 'primevue/select'
	import Button from 'primevue/button'
	import InputText from 'primevue/inputtext'
	import IconField from 'primevue/iconfield'
	import InputIcon from 'primevue/inputicon'

	import { json as highlightsData } from '../../mock/get-highlights.js'

	// const imoveis = ref([])
	const showFilters = ref(false)
	const isListMode = ref(true)
	const currentPage = {
		label: 'Busca de Imóveis',
		url: '/busca'
	}

	const imoveis = ref(highlightsData.venda.map(imovel => {
		return {
			id: imovel.dadosBasicos.codigo,
			title: `${imovel.dadosBasicos.tipoimovel} - ${imovel.dadosBasicos.bairro}`,
			subtitle: `${imovel.dadosBasicos.endereco}, ${imovel.dadosBasicos.numero} - ${imovel.dadosBasicos.cidade}`,
			price: imovel.valorVenda,
			transactionType: imovel.dadosBasicos.tiponegocio,
			image: {
				src: 'https://o2u4kwbklg.map.azionedge.net/img?id=4182&tamanho=347x196&imagem=010517-002.jpg'
			},
			link: {
				href: `/imovel/${imovel.dadosBasicos.codigo}`,
				label: 'Ver imóvel'
			},
			rooms: imovel.comodos
		}
	}))

	const ordem = [
		{ name: 'Recém cadastrados', code: 'recentes' },
		{ name: 'Valores crescentes', code: 'valor_crescente' },
		{ name: 'Valores decrescentes', code: 'valor_decrescente' }
	]
</script>
