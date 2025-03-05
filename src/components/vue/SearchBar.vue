<template>
	<div class="flex flex-col md:flex-row w-full gap-2 md:gap-8">
		<div class="flex flex-row w-full bg-white rounded-full h-16 overflow-hidden p-1 gap-5">
			<Button
				rounded
				label="Locação"
				icon="pi pi-chevron-down"
				icon-pos="right"
				severity="primary"
				class="w-full md:w-56 h-full flex justify-between"
			/>
			<InputText
				placeholder="Buscar imóveis..."
				class="w-full bg-transparent text-black border-none p-0"
			/>
		</div>
		<Button
			rounded
			label="Buscar"
			severity="primary"
			icon="pi pi-search"
			class="w-full md:w-[440px] h-16 rounded-full bg-[#D95E3A] hover:bg-[#C24F32] active:bg-[#C24F32] text-white border-none px-6 py-3 font-bold cursor-pointer ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-900 ring-primary transition-all"
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button'

	const modes = ref([
		{ name: 'Locação', code: 'LO' },
		{ name: 'Compra', code: 'CA' }
	])

	const selectMode = ref('LO')
</script>
