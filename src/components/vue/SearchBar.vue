<template>
	<div class="flex flex-col md:flex-row w-full gap-2">
		<Panel
		ref="panel"
		:toggleable="true"
		@toggle="onToggle"
		class="w-full"
		:pt="{
			root: { 
				class: 'bg-white border-none rounded-[2rem] gap-2 flex flex-col'
			},
			header: {
				class: 'bg-transparent border-none px-3 pt-2'
			},
			headerActions: {
				class: 'hidden'
			},
			content: {
				class: 'pt-0 px-3.5 pb-3'
			}
		}">
			<template #header>
				<div class="flex w-full items-center">
					<Button
						rounded
						:label="selectMode"
						icon="pi pi-chevron-down"
						icon-pos="right"
						severity="primary"
						class="h-12"
					/>
					<InputText
						placeholder="Buscar imóveis..."
						class="w-full bg-transparent text-black border-none px-4"
					/>
					<Button
						text
						rounded
						@click.prevent="togglePanel"
						class="flex items-center gap-2 px-4 h-12"
					>
						<i :class="['pi', expanded ? 'pi-minus' : 'pi-plus']"></i>
						<span>Filtros</span>
					</Button>
				</div>
			</template>
			<div class="flex flex-wrap gap-2">
				<Button
					outlined
					size="small"
					rounded="full"
					severity="secondary"
					label="Tipo de Negócio"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
				<Button
					outlined
					rounded="full"
					size="small"
					severity="secondary"
					label="Tipo de Imóvel"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
				<Button
					outlined
					rounded="full"
					size="small"
					severity="secondary"
					label="Cidade"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
				<Button
					outlined
					rounded="full"
					size="small"
					severity="secondary"
					label="Detalhes"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
			</div>
		</Panel>

		<Button
			rounded
			label="Buscar"
			severity="primary"
			icon="pi pi-search"
			class="w-full md:w-[440px] h-16 rounded-full bg-[#D95E3A] hover:bg-[#C24F32] active:bg-[#C24F32] text-white border-none px-6 py-3 font-bold cursor-pointer ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-900 ring-primary transition-all"		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button'
	import Panel from 'primevue/panel'

	const panel = ref(null)
	const selectMode = ref('Locação')
	const expanded = ref(false)

	const onToggle = (e) => {
		expanded.value = !expanded.value
	}

	const togglePanel = (event) => {
		event.stopPropagation()
		panel.value.toggle(event)
	}
</script>
