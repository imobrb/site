<!-- MenuBarCustom.vue -->
<template>
	<Menubar class="bg-transparent border-none w-full">
		<!-- Lado esquerdo: Logo da empresa -->
		<template #start>
			<img
				src="/logo-white.svg"
				alt="Logo Imobiliaria Rio Branco"
				class="h-14 cursor-pointer"
				@click="handleLogoClick"
			/>
		</template>

		<!-- Lado direito: Botões -->
		<template #end>
			<div class="flex gap-2">
				<!-- Botão do WhatsApp -->
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
					<!-- Botão de favoritos com contador -->
					<Button
						class="bg-white text-black"
						rounded
						as="a"
						href="/favoritos"
						icon="pi pi-heart"
						:label="favoritesCount"
					/>
					<!-- Botão de menu que alterna o ícone -->
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

<script>
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

export default {
	name: 'MenubarCustom',
	components: {
		Menubar,
		Button
	},
	props: {
		favoritesCount: {
			type: Number,
			default: 0
		},
		menuOpen: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleLogoClick() {
			// Se o drawer estiver aberto, emite o evento para fechá-lo
			if (this.menuOpen) {
				this.$emit('toggleMenu')
			}
			// Redireciona para a página inicial
			window.location.href = '/'
		}
	}
}
</script>
