<template>
	<Button
		rounded
		size="small"
		class="w-fit absolute bg-secondary border-none mt-2 ml-2 text-white z-10"
		tabindex="-1"
		role="presentation"
		:icon="icon"
		:label="label"
		@click.stop
		@click="click"
	/>
</template>

<script setup>
	import Button from 'primevue/button'

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

	const getCode = () => {
		return props.code
	}

	const emit = defineEmits(['click'])

	const click = (e) => {
		emit('click', {
			code: getCode(),
			event: e
		})
	}
</script>
