<template>
	<div class="2xl:-ml-[10%] 2xl:w-[120%] my-4 md:my-8">
		<Galleria
			:value="banners"
			:showThumbnails="false"
			:showIndicators="false"
			:circular="true"
			:transitionInterval="5000"
			:autoPlay="true"
			:showItemNavigators="true"
			:activeIndex="activeIndex"
			@update:activeIndex="onActiveIndexChange"
		>
			<template #item="slotProps">
				<picture>
					<img
						:src="slotProps.item.url"
						:alt="slotProps.item.alt"
						class="2xl:w-[120%]"
					/>
				</picture>
			</template>
		</Galleria>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import Galleria from 'primevue/galleria'

	const activeIndex = ref(0)

	const onActiveIndexChange = (index) => {
		activeIndex.value = index
	}

	const banners = ref([
		{
			url: '/assets/images/banners/imoveis_com_exclusividade.png',
			alt: 'Banner 1'
		},
		{
			url: '/assets/images/banners/acompanhe_o_contrato.png',
			alt: 'Banner 2'
		},
		{
			url: '/assets/images/banners/alo_universitario.png',
			alt: 'Banner 3'
		}
	])
</script>
