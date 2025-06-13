<template>
	<div class="flex flex-col md:flex-row w-full gap-4 md:gap-2">
		<Panel
			ref="panel"
			:toggleable="true"
			:collapsed="true"
			@toggle="onToggle"
			class="w-full"
			:pt="{
				root: {
					class: 'bg-white border-none rounded-[2rem] gap-2 flex flex-col'
				},
				header: {
					class: 'bg-transparent border-none px-3 pt-2'
				},
				headerActions: {
					class: 'hidden'
				},
				content: {
					class: 'pt-0 px-3.5 pb-3'
				}
			}"
		>
			<template #header>
				<div
					class="flex flex-col md:flex-row md:justify-between w-full items-center gap-2 py-1.5 md:py-0.5"
				>
					<div class="flex w-full">
						<Select
							optionLabel="name"
							optionValue="code"
							:options="businessTypes"
							class="w-fit hidden md:flex"
							v-model:model-value="selectedOption"
						/>
						<IconField class="w-full border-none shadow-none">
							<InputIcon class="pi pi-search" />
							<InputText
								placeholder="Busca por nome, código ou bairro... "
								class="w-full md:border-none shadow-none p-variant-secondary"
							/>
						</IconField>
					</div>
					<div class="flex items-center gap-2 md:w-fit w-full">
						<Button
							:icon="expanded ? 'pi pi-minus' : 'pi pi-plus'"
							:label="expanded ? 'Filtros' : 'Filtros'"
							class="rounded-full w-full md:w-fit"
							outlined
							@click.prevent="togglePanel"
						/>
					</div>
				</div>
			</template>
			<div class="flex flex-wrap gap-2">
				<Select
					placeholder="Tipo de Imóvel"
					:options="propertyTypes"
					optionLabel="name"
					optionValue="code"
					class="w-auto p-variant-secondary"
				/>
				<Select
					placeholder="Cidade"
					:options="cities"
					optionLabel="name"
					optionValue="code"
					class="w-auto p-variant-secondary"
				/>
				<Button
					:icon="showExtraDetails ? 'pi pi-minus' : 'pi pi-plus'"
					:label="showExtraDetails ? 'Detalhes' : 'Detalhes'"
					class="rounded-full w-full md:w-fit"
					outlined
					@click.prevent="showExtraDetails = !showExtraDetails"
				/>
				<div
					v-if="showExtraDetails"
					class="flex flex-wrap gap-4 w-full mt-2 px-2"
				>
					<div class="flex flex-col gap-2">
						<label>Dormitórios <span class="min-w-[24px] inline-block">{{ bedrooms }}</span></label>
						<Slider
							v-model="bedrooms"
							:min="0"
							:max="10"
							class="w-24 p-variant-secondary"
						/>
						<div class="flex justify-between text-xs text-surface-500">
							<span>0</span>
							<span>10</span>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<label>Vagas para carro <span class="min-w-[24px] inline-block">{{ parkingSpots }}</span></label>
						<Slider
							v-model="parkingSpots"
							:min="0"
							:max="6"
							class="p-variant-secondary"
						/>
						<div class="flex justify-between text-xs text-surface-500">
							<span>0</span>
							<span>6</span>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<label>Valor do imóvel <span class="min-w-[24px] inline-block">{{ priceRange }}</span></label>
						<Slider
							v-model="priceRange"
							:min="0"
							:max="maxValue"
							class="w-64 p-variant-secondary"
						/>
						<div class="flex justify-between text-xs text-surface-500">
							<span>0</span>
							<span>{{ maxValue }}</span>
						</div>
					</div>
				</div>
			</div>
		</Panel>

		<Button
			rounded
			as="a"
			:href="searchLink"
			label="Buscar"
			severity="secondary"
			icon="pi pi-search"
			rounded-full
			class="w-full md:w-[440px] h-16 md:h-auto"
		/>
	</div>
</template>

<script setup>
	import { ref, onMounted, computed, watch } from 'vue'
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button'
	import Panel from 'primevue/panel'
	import Select from 'primevue/select'
	import IconField from 'primevue/iconfield'
	import InputIcon from 'primevue/inputicon'
	import Slider from 'primevue/slider'
	import ServiceImoveis from '@services/Imoveis'
	import initialInfoMock from '@mock/get-info-inicial'

	const panel = ref(null)
	const expanded = ref(false)

	const selectedOption = ref('locacao')
	const businessTypes = ref([
		{ name: 'Locação', code: 'locacao' },
		{ name: 'Venda', code: 'venda' },
		{ name: 'Exclusivo Locação', code: 'exclusivo-locacao' },
		{ name: 'Exclusivo Venda', code: 'exclusivo-venda' }
	])
	const propertyTypes = ref([])
	const cities = ref([])

	const showExtraDetails = ref(false)
	const bedrooms = ref(0)
	const parkingSpots = ref(0)
	const priceRange = ref(0)

	const maxValue = computed(() => (selectedOption.value === 'venda' ? 2000000 : 15000))

	watch(selectedOption, () => {
		priceRange.value = 0
	})

	const service = new ServiceImoveis()

	const searchLink = computed(() => {
		const map = {
			locacao: '/alugar-imovel/',
			venda: '/comprar-imovel/',
			'exclusivo-locacao': '/exclusivo-locacao/',
			'exclusivo-venda': '/exclusivo-venda/'
		}

		return map[selectedOption.value] || '/busca'
	})

	const onToggle = (e) => {
		expanded.value = !expanded.value
	}

	const togglePanel = (event) => {
		event.stopPropagation()
		panel.value.toggle(event)
	}

	onMounted(async () => {
		let info = await service.initialInfo()
		
		if (!info) {
			info = initialInfoMock
		}

		propertyTypes.value = info.tipoDeImovel.map((item) => ({
			name: item.nome,
			code: item.id
		}))

		cities.value = info.cidades.map((item) => ({
			name: item.nome,
			code: item.id
		}))
	})
</script>
