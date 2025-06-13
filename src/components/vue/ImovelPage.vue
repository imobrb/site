<template>
	<ImovelPageSkeleton v-if="!property?.dadosBasicos" />
	<div
		v-else
		class="px-container flex flex-col gap-8 py-8"
	>
		<Breadcrumb
			v-if="property?.dadosBasicos"
			:current-page="{
				label: `${property?.dadosBasicos?.tipoimovel} - ${property?.dadosBasicos?.endereco}`,
				url: `/imoveis/?imovel=${imovelID}`
			}"
		/>
		<div class="relative">
			<FavoriteButton
				class="mt-2 ml-2"
				:code="imovelID"
			/>

			<Galleria
				:value="images"
				:showThumbnails="false"
				:showIndicators="false"
				:circular="true"
				:showItemNavigators="true"
				@item-click="onImageClick"
			>
				<template #item="slotProps">
					<picture>
						<img
							:src="slotProps.item.src"
							alt="Imóvel"
						/>
					</picture>
				</template>
				<!-- do not working -->
				<template #thumbnail="slotProps">
					<img
						:src="slotProps.item.thumb"
						alt="Miniatura"
					/>
				</template>
			</Galleria>
			<!-- do not working -->
			<Dialog
				v-model:visible="displayImage"
				modal
				class="p-0"
				:closable="false"
			>
				<div class="relative">
					<img
						:src="selectedImage"
						alt="Imagem ampliada"
						class="w-full object-contain"
						style="max-height: 80vh"
					/>
					<Button
						icon="pi pi-times"
						class="absolute top-2 right-2 p-button-rounded p-button-danger"
						@click="displayImage = false"
					/>
				</div>
			</Dialog>
		</div>
		<div class="flex flex-col lg:flex-row w-full gap-8">
			<div class="flex flex-col gap-6 w-full">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-1">
						<h1 class="text-heading-2 text-surface-900">
							{{ property?.dadosBasicos?.tipoimovel }} - {{ property?.dadosBasicos?.endereco }}
						</h1>
						<p class="text-body-2 text-surface-700">
							{{ property?.dadosBasicos?.bairro }} | {{ property?.dadosBasicos?.cidade }} -
							{{ property?.dadosBasicos?.uf }}
						</p>
					</div>

					<div class="flex gap-4">
						<Button
							size="small"
							rounded
							outlined
							label="Atendimento via Whatsapp"
							icon="pi pi-whatsapp"
							class="bg-green-500 text-white border-none"
						/>
						<Button
							size="small"
							rounded
							outlined
							label="18 2104 6944"
							icon="pi pi-phone"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<h3 class="text-heading-1 text-surface-700">Descrição</h3>
					<div
						class="text-body-2 text-surface-700"
						v-html="
							property?.dadosBasicos?.descricaodoanunciolocacao ||
							property?.dadosBasicos?.descricaodoanunciovenda
						"
					></div>
				</div>

				<div>
					<p class="text-primary-600 text-body-2 font-medium">
						Todos os imóveis estão sujeitos a alteração de valor sem aviso prévio.
					</p>
				</div>

				<div class="flex flex-wrap gap-6">
					<template v-if="property?.comodos">
						<div
							class="flex items-start justify-center flex-col text-body-2"
							v-for="(comodo, index) in property.comodos"
							:key="index"
						>
							<span class="text-surface-700 font-medium text-body-3">
								{{ comodo.quantidade }}
							</span>
							<span class="text-surface-600">
								{{ comodo.nome }}
							</span>
						</div>
					</template>
					<div
						class="flex items-start justify-center flex-col text-body-2"
						v-if="property?.dadosBasicos?.areaterreno > 0"
					>
						<span class="text-surface-700 font-medium text-body-3">
							{{ property.dadosBasicos.areaterreno }}m²
						</span>
						<span class="text-surface-600"> Área do Terreno </span>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-1/3">
				<div class="rounded-xl p-6 border-1 border-surface-200 flex flex-col gap-4">
					<span class="text-heading-2 text-primary-700 font-medium mb-1">
						{{ transationType }}
						<br />
						{{ propertyValue }}
					</span>
					<div class="flex flex-col">
						<div class="flex flex-row gap-1">
							<span class="text-surface-700 font-medium text-body-3"> Código: </span>
							<span class="text-surface-700">{{ property?.dadosBasicos?.codigo }}</span>
						</div>
						<div
							v-if="transationType === 'Aluguel'"
							class="flex flex-row gap-1"
						>
							<span class="text-surface-700 font-medium text-body-3"> Mais encargos</span>
						</div>
						<div class="flex flex-row gap-1">
							<span class="text-surface-700 font-medium text-body-3"> Exclusivo: </span>
							<span class="text-surface-700">{{ isExclusive }}</span>
						</div>
						<div
							v-if="transationType === 'Venda'"
							class="flex flex-row gap-1"
						>
							<span class="text-surface-700 font-medium text-body-3"> Permuta: </span>
							<span class="text-surface-700">{{ permuta }}</span>
						</div>
						<div
							v-if="transationType === 'Venda'"
							class="flex flex-row gap-1"
						>
							<span class="text-surface-700 font-medium text-body-3"> Financiamento: </span>
							<span class="text-surface-700">{{ financiamento }}</span>
						</div>
					</div>
					<p class="text-body-2 font-medium text-surface-700">
						Faça uma visita presencial, basta combinar com o corretor quando ele entrar em contato.
					</p>
					<div class="flex flex-col gap-4">
						<Button
							rounded
							outlined
							label="Agendar Visita"
						/>
						<Button
							rounded
							label="Whatsapp"
							icon="pi pi-whatsapp"
							class="bg-green-500 text-white"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<h2 class="text-heading-2 text-surface-900 font-medium">Localização</h2>
			<div class="w-full h-96">
				<iframe
					width="100%"
					height="100%"
					frameborder="0"
					style="border: 0"
					:src="googleMapSrc"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted } from 'vue'

	import Galleria from 'primevue/galleria'
	import Dialog from 'primevue/dialog'
	import Button from 'primevue/button'

	import ImovelPageSkeleton from '@/components/vue/ImovelPageSkeleton.vue'
	import Breadcrumb from '@/components/vue/Breadcrumb.vue'
	import FavoriteButton from '@components/vue/FavoriteButton.vue'
	import ServiceImoveis from '@/services/Imoveis'
	import formatReal from '@/utils/formatReal'
	import { API_URL } from '@/consts'

	const property = ref({})

	// const displayImage = ref(false)
	const selectedImage = ref('')

	const makeImageUrl = (id, name) => {
		return `${API_URL}/img?id=${id}&tamanho=1280x720&imagem=${name}`
	}

	const makeImageThumbnailUrl = (id, name) => {
		return `${API_URL}/img?id=${id}&tamanho=80x60&imagem=${name}`
	}

	const googleMapSrc = computed(() => {
		const base = property.value?.dadosBasicos || {}
		const addressParts = [base.endereco, base.numero, base.bairro, base.cidade].filter(Boolean)
		const latitude = base.latitude
		const longitude = base.longitude

		if (!addressParts.length) return ''

		if (latitude && longitude) {
			return `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`
		} else if (addressParts.length) {
			const query = encodeURIComponent(addressParts.join(', '))
			return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`
		}
	})

	const imovelID = computed(() => {
		const p = getProperty()
		return p?.dadosBasicos?.codigo
	})

	const images = computed(() => {
		const p = getProperty()
		const imovelId = p?.dadosBasicos?.codigo
		const photos = p?.fotos

		if (!photos) return []

		const imgs = photos.map((photo) => {
			return {
				src: makeImageUrl(imovelId, photo.caminho),
				thumb: makeImageThumbnailUrl(imovelId, photo.caminho)
			}
		})

		return imgs
	})

	function onImageClick(e) {
		// do not working
		selectedImage.value = e.item.src
		displayImage.value = true
	}

	const isExclusive = computed(() => {
		const p = getProperty()
		return p?.valorLocacao?.exclusivo === 'S' || p?.valorVenda?.exclusivo === 'S' ? 'Sim' : 'Não'
	})

	const permuta = computed(() => {
		const p = getProperty()
		return p.dadosBasicos?.permuta === 'S' ? 'Sim' : 'Não'
	})

	const financiamento = computed(() => {
		const p = getProperty()
		return p.dadosBasicos?.financiamento === 'S' ? 'Sim' : 'Não'
	})

	const transationType = computed(() => {
		const p = getProperty()
		return p.valorLocacao?.valordoaluguelmaximo ? 'Aluguel' : 'Venda'
	})

	const propertyValue = computed(() => {
		const p = getProperty()
		const n = Number(
			p.valorLocacao?.valordoaluguelmaximo
				? p.valorLocacao?.valordoaluguelmaximo
				: p.valorVenda?.valordevendamaximo
		)
		return formatReal(n) || ''
	})

	const getProperty = () => {
		return property.value
	}

	const setProperty = (value) => {
		property.value = value
	}

	const getQueryString = () => {
		if (typeof window === 'undefined') return {}

		const params = new URLSearchParams(window.location.search)
		return Object.fromEntries(params.entries())
	}

	const fetchData = async (imovelID) => {
		const serviceImoveis = new ServiceImoveis()
		const property = await serviceImoveis.getProperty(imovelID)
		setProperty(property)
	}

	onMounted(async () => {
		const queryString = getQueryString()
		const imovelid = queryString.imovel

		if (!imovelid) {
			console.error('Invalid imovel search param value.')
			return
		}

		await fetchData(imovelid)
	})
</script>
