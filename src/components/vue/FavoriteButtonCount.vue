<template>
	<Button
		class="bg-white text-black"
		rounded
		as="a"
		icon="pi pi-heart"
		href="/favoritos/?favoritos=[]"
		:disabled="favorites.length"
		:label="favorites.length ? String(favorites.length) : '0'"
	/>
</template>

<script setup>
	import { useStore } from '@nanostores/vue'
	import Button from 'primevue/button'

	import { $favorites } from '@stores/favorite.js'
	const favorites = useStore($favorites)
</script>
