<template>
	<Button
		as="a"
		rounded
		icon="pi pi-heart"
		class="bg-white text-black"
		:class="{ 'opacity-50 pointer-events-none': favorites.length === 0 }"
		:label="favorites.length ? String(favorites.length) : '0'"
		:href="favorites.length ? `/favoritos/?favoritos=[${favorites}]` : 'javascript:void(0)'"
	/>
</template>

<script setup>
	import { useStore } from '@nanostores/vue'
	import Button from 'primevue/button'

	import { $favorites } from '@stores/favorite.js'
	const favorites = useStore($favorites)
</script>
