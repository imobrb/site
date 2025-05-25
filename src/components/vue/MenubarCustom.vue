<template>
	<Menubar class="bg-transparent border-none w-full">		
		<template #start>
			<img
				src="/logo-white.svg"
				alt="Logo Imobiliaria Rio Branco"
				class="h-14 cursor-pointer -ml-4"
				@click="handleLogoClick"
			/>
		</template>

		<template #end>
			<div class="flex gap-2 -mr-4">
				<Button
					class="font-bold text-white md:flex hidden"
					label="+55 18 99604-1075"
					icon="pi pi-whatsapp"
					as="a"
					target="_blank"
					href="https://wa.me/5518996041075"
					text
				/>
				<div class="flex gap-1 bg-black p-2 w-fit rounded-full">
					<Button
						class="bg-white text-black"
						rounded
						as="a"
						icon="pi pi-heart"
						href="/favoritos/?favoritos=[]"
						:disabled="favorites.length"
						:label="favorites.length ? String(favorites.length) : '0'"
					/>

					<Button
						class="text-white"
						label="Menu"
						text
						rounded
						:icon="menuOpen ? 'pi pi-times' : 'pi pi-bars'"
						@click="$emit('toggleMenu')"
					/>
				</div>
			</div>
		</template>
	</Menubar>
</template>

<script setup>
	import { useStore } from '@nanostores/vue'

	import Menubar from 'primevue/menubar'
	import Button from 'primevue/button'

	import { $favorites } from '@stores/favorite.js'
	import { defineProps, defineEmits } from 'vue'

	const props = defineProps({
		menuOpen: {
			type: Boolean,
			default: false
		}
	})

	const emit = defineEmits(['toggleMenu'])

	const favorites = useStore($favorites)

	function handleLogoClick() {
		if (props.menuOpen) {
			emit('toggleMenu')
		}

		window.location.href = '/'
	}
</script>
