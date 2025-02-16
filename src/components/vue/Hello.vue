<template>
	<p>Hello {{ props.name }}</p>
</template>

<script setup>
// import { string } from 'astro:schema';

const props = defineProps({
	name: {
		type: String,
		required: false,
		default: '.vue'
	}
})
</script>
