<template>
	<div class="w-full px-container flex flex-col gap-4 md:gap-6 p-8">
		<Breadcrumb
			:current-page="{
				label: 'Busca de Imóveis',
				url: '/busca/'
			}"
		/>

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
					{{ imoveis.length }} Imóveis encontrados nessa região.
				</span>
			</div>

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
					<!--
					<span class="text-body-3 text-surface-600">
						Imóveis para comprar em
					</span>
					-->
					<h1 class="text-heading-3 text-surface-800">
						{{ title }}
					</h1>
				</div>
				<span class="text-body-1 text-surface-500 md:hidden flex">
					{{ imoveis.length }} Imóveis encontrados nessa região.
				</span>

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
						:modelValue="selectedOrder"
						@update:modelValue="handleChange"
						:options="[
							{ name: 'Recém cadastrados', code: '1' }, // ?ordenacao=1&pagina=1
							{ name: 'Valores crescentes', code: '2' }, // ?ordenacao=2&pagina=1
							{ name: 'Valores decrescentes', code: '3' } // ?ordenacao=3&pagina=1
						]"
						optionLabel="name"
						optionValue="code"
						placeholder="Ordenar por"
						class="rounded-full md:w-56 p-variant-secondary"
					/>
				</div>
			</div>

			<template v-if="hasError()">
				<p>{{ getError() }}</p>
			</template>
			<template v-if="getLoadStatus()">
				<div
					:class="[
						'm-0 mb-16',
						isListMode
							? 'flex flex-col gap-4 md:gap-y-12'
							: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-14 md:gap-y-20'
					]"
				>
					<SectionCardListSkeleton :limit="12" />
				</div>
			</template>
			<template v-else>
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
						:key="imovel.dadosBasicos.codigo"
						:listMode="isListMode"
						@onFavorite="onFavorite"
						v-bind="parserCardImovelData(imovel)"
					/>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref } from 'vue'

	import Breadcrumb from '@components/vue/Breadcrumb.vue'
	import CardImovel from '@components/vue/CardImovel.vue'
	import Divider from 'primevue/divider'
	import Select from 'primevue/select'
	import Button from 'primevue/button'
	import InputText from 'primevue/inputtext'
	import IconField from 'primevue/iconfield'
	import InputIcon from 'primevue/inputicon'
	import SectionCardListSkeleton from '@components/vue/SectionCardListSkeleton.vue'

	import ServiceImoveis from '@services/Imoveis'
	import parserCardImovelData from '@utils/parserCardImovelData'

	const props = defineProps({
		title: {
			type: String
		},
		type: {
			type: String,
			required: true,
			options: ['exclusiveRented', 'exclusiveSale', 'rentedFeatured', 'featuredSale', 'favorite']
		}
	})

	const selectedOrder = ref()
	const imoveis = ref([])
	const showFilters = ref(false)
	const isListMode = ref(false)

	const error = ref('')
	const loading = ref(true)

	const serviceImoveis = new ServiceImoveis()
	const mapType = {
		exclusiveRented: async (limit = 9999, order = 2) => {
			return await serviceImoveis.exclusiveRentedProperties(limit, order)
		},
		exclusiveSale: async (limit = 9999, order = 2) => {
			return await serviceImoveis.exclusiveSaleProperties(limit, order)
		},
		rentedFeatured: async (limit = 9999, order = 2) => {
			return await serviceImoveis.rentedFeaturedProperties(limit, order)
		},
		featuredSale: async (limit = 9999, order = 2) => {
			return await serviceImoveis.featuredSaleProperties(limit, order)
		},
		favorite: async () => {
			const querystring = getQueryString()
			const imovelList = JSON.parse(querystring.imoveis)

			return await serviceImoveis.favoriteProperties(imovelList)
		}
	}

	const getError = () => error.value

	const setError = (errorMessage = '') => {
		error.value = errorMessage
		return getError()
	}

	const hasError = () => getError() && getError().length

	const getLoadStatus = () => loading.value

	const setLoadStatus = (status = true) => {
		loading.value = status
	}

	const setImoveis = (data) => {
		imoveis.value = data
	}

	const fetchData = async (limit, order) => {
		const requestData = await mapType[props.type](limit, order)
		return requestData
	}

	const load = async (limit, order) => {
		setLoadStatus(true)
		selectedOrder.value = order

		const data = await fetchData(limit, order)

		setImoveis(data)
		setLoadStatus(false)
	}

	const isValidType = () => typeof mapType[props.type] !== 'function'

	const handleChange = async (code) => {
		setQueryString('ordenacao', code)
		load(undefined, code)
	}

	const getQueryString = () => {
		if (typeof window === 'undefined') return {}

		const params = new URLSearchParams(window.location.search)
		return Object.fromEntries(params.entries())
	}

	const setQueryString = (param, value) => {
		let searchParams = new URLSearchParams(window.location.search)
		searchParams.set(param, value)
		window.location.search = searchParams.toString()

		windowHistoryReplaceState()
	}

	const windowHistoryReplaceState = () => {
		const url = new URL(window.location.href)
		window.history.replaceState({}, '', `${url.pathname}${url.search}`)
	}

	onMounted(async () => {
		if (isValidType()) {
			setLoadStatus(false)

			console.error(
				`[BuscaPage.vue] Invalid "type" prop: "${props.type}". Expected one of: ${Object.keys(mapType).join(', ')}.`
			)
			setError('Não foi possível carregar as informações dos imóveis')

			return
		}

		const params = getQueryString()
		load(undefined, params.ordenacao)
	})
</script>
