<template>
	<Button
		as="a"
		rounded
		icon="pi pi-heart"
		class="bg-white text-black"
		:class="[
			!favorites.length
				? 'opacity-50 pointer-events-none'
				: 'hover:bg-red-100 hover:text-red-600'
		]"
		:label="favorites.length ? String(favorites.length) : '0'"
		:href="favorites.length ? `/favoritos/?favoritos=[${favorites}]` : 'javascript:void(0)'"
	/>
</template>

<script setup>
	import { onMounted } from 'vue'

	import { useStore } from '@nanostores/vue'
	import Button from 'primevue/button'

	import { $favorites, storeSetFavorites, storeGetFavoriteById } from '@stores/favorite.js'
	import { storageGetFavorites } from '@storage/favorite.js'

	const favorites = useStore($favorites)

	onMounted(() => {
		storeSetFavorites(storageGetFavorites())
	})
</script>
