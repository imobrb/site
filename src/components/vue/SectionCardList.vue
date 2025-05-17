<template>
	<section class="flex flex-col gap-8 md:gap-16 w-full">
		<div class="flex flex-col md:flex-row gap-3 w-full justify-between h-fit">
			<h3 class="text-heading-3 font-bold">
				{{ props.title }}
			</h3>

			<template v-if="props.link && props.link.href">
				<LinkButton
					rounded
					outlined
					:label="props.link.label"
					:href="props.link.href"
					:icon="
						props.link.icon && props.link.icon.name ? props.link.icon.name : 'pi pi-arrow-right'
					"
					:icon-pos="props.icon && props.icon.position ? props.icon.position : 'right'"
					size="small"
				/>
			</template>
		</div>

		<template v-if="hasError()">
			<p>{{ getError() }}</p>
		</template>
		<template v-else>
			<div
				class="w-full !m-0 !p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-14 md:gap-y-20"
			>	
				<template v-if="getLoadStatus()">
					<SectionCardListSkeleton />
				</template>
				<template v-else>
					<template v-for="card in items">
						<div class="w-full">
							<CardImovel
								:title="`${card.dadosBasicos.tipoimovel} ${card.dadosBasicos.condominioresidencialedificio ? `- ` + card.dadosBasicos.condominioresidencialedificio : ''}`"
								:subtitle="`${card.dadosBasicos.cidade} - ${card.dadosBasicos.bairro} ${card.valorLocacao ? ` - ` + card.dadosBasicos.endereco : ''}`"
								:price="Number(card.valorLocacao ? card.valorLocacao : card.valorVenda)"
								:transactionType="card.valorLocacao ? 'Aluguel' : (card.valorVenda ? 'Venda' : '')"
								:image="{
									alt:`${card.dadosBasicos.tipoimovel} ${card.dadosBasicos.condominioresidencialedificio ? `- ` + card.dadosBasicos.condominioresidencialedificio : ''}`,
									src: `${API_URL}/img?id=${card.dadosBasicos.codigo}&tamanho=347x196&imagem=${card.fotos}`
								}"
								:link="{
									label: 'Ver imóvel',
									href: `/imoveis/${card.dadosBasicos.codigo}`
								}"
								:rooms="card.comodos || []"
							/>
						</div>
					</template>
				</template>
			</div>
		</template>
		
	</section>
</template>

<script setup>
	import { ref, onMounted } from 'vue'

	import SectionCardListSkeleton from '@components/vue/SectionCardListSkeleton.vue'
	import CardImovel from '@components/vue/CardImovel.vue'
	import LinkButton from '@components/vue/LinkButton.vue'
	
	import ServiceImoveis from '@services/Imoveis'
	import { API_URL } from '@/consts'

	const props = defineProps({
		title: {
			type: String,
			required: true
		},
		link: {
			type: Object
		},
		type: {
			type: String,
			required: true,
			options: [
				'exclusiveRented',
				'exclusiveSale',
				'rentedFeatured',
				'featuredSale'
			]
		}
	})
	const items = ref([])
	const error = ref('')
	const loading = ref(true)

	const serviceImoveis = new ServiceImoveis()
	const mapType = {
		exclusiveRented: async (limit=6, order=2) => {
			return await serviceImoveis.exclusiveRentedProperties(limit, order)
		},
		exclusiveSale: async (limit=6, order=2) => {
			return await serviceImoveis.exclusiveSaleProperties(limit, order)
		},
		rentedFeatured: async (limit=6, order=2) => {
			return await serviceImoveis.rentedFeaturedProperties(limit, order)
		},
		featuredSale: async (limit=6, order=2) => {
			return await serviceImoveis.featuredSaleProperties(limit, order)
		}
	}

	const getError = () => error.value

	const setError = (errorMessage='') => {
		error.value = errorMessage
		return getError()
	}

	const hasError = () => getError() && getError().length

	const getLoadStatus = () => loading.value

	const setLoadStatus = (status=true) => {
		loading.value = status
		return getLoadStatus()
	}

	const load = async () => {
		setLoadStatus(true)

		const data = await mapType[props.type]()
		items.value = data

		setLoadStatus(false)
	}
 
	const isValidType = () => typeof mapType[props.type] !== 'function'
	
	onMounted(async () => {
		if( isValidType() ) {
			setLoadStatus(false)

			console.error(
				`[SectionCardList.vue] Invalid "type" prop: "${props.type}". Expected one of: ${Object.keys(mapType).join(', ')}.`
			)
			setError('Não foi possível carregar as informações dos imóveis')
			
			return
		}

		load()
	})
</script>