<template>
	<Button
		rounded
		tabindex="-1"
		size="small"
		role="presentation"
		class="w-fit absolute border-none mt-2 ml-2 z-10"
		:class="[isFavorite ? 'bg-white text-secondary' : 'bg-secondary text-white']"
		:icon="icon"
		:label="label"
		@click.stop
		@click="click"
	/>
</template>

<script setup>
	import { onMounted, ref } from 'vue'
	import Button from 'primevue/button'
	import { storeGetFavoriteById, storeToggleFavorite } from '@stores/favorite'
	import { storageToggleFavorite } from '@storage/favorite'

	const props = defineProps({
		code: {
			type: String
		},
		label: {
			type: String,
			default: () => 'Favoritar'
		},
		icon: {
			type: String,
			default: () => 'pi pi-heart'
		}
	})

	const isFavorite = ref(false)

	const getCode = () => {
		return props.code
	}

	const onFavorite = (code) => {
		storeToggleFavorite(code)
		storageToggleFavorite(code)
		validation(code)
	}

	const validation = (code) => {
		isFavorite.value = storeGetFavoriteById(code)
	}

	const click = () => {
		onFavorite(getCode())
	}

	onMounted(() => {
		validation(getCode())
	})
</script>
