<!-- MenuComponent.vue -->
<template>
	<div class="w-full">
		<!-- Menubar fora do Drawer -->
		<MenubarCustom 
			:favoritesCount="favoritesCount" 
			:menuOpen="menuOpen" 
			@toggleMenu="toggleMenu" 
			@openFavorites="openFavorites" 
		/>

		<!-- Drawer para conteúdo do menu -->
		<Drawer
			v-model:visible="menuOpen"
			position="top"
			:baseZIndex="1000"
			modal
			:showCloseIcon="false"
			appendTo="body"
			class="w-full h-full"
			:pt="{ 
				header: { class: 'hidden' },
				content: { class: 'p-0' }
			}"
		>
			<div class="w-full flex justify-start h-full">
				<div class="absolute w-full flex items-center justify-center z-10 mt-6">
					<div class="w-full px-container">
						<MenubarCustom 
							:favoritesCount="favoritesCount" 
							:menuOpen="menuOpen" 
							@toggleMenu="toggleMenu" 
							@openFavorites="openFavorites"
						/>
					</div>
				</div>
				<div class="bg-secondary w-full h-full hidden lg:flex z-0">
					<div class="bg-[url('/bg-menu.jpg')] bg-cover bg-center opacity-25 grayscale w-full h-full"></div>
				</div>
				<div class="w-full mt-24 px-4">
					<div class="px-container w-full h-full">
						<div class="pt-8 md:pt-12 flex flex-col gap-4 md:gap-8 h-full w-full justify-start">
							<Button
								label="+55 18 99604-1075"
								icon="pi pi-whatsapp"
								class="w-fit text-white mb-2 flex md:hidden"
								severity="secondary"
								outlined
								as="a"
								rounded="full"
								size="small"
								target="_blank"
								href="https://wa.me/5518996041075"
							/>
							<!-- Seção 1: Links em destaque -->
							<div class="text-heading-2 flex flex-col">
								<a
									v-for="(item, index) in section1Items"
									:key="index"
									class="py-3 md:py-4 flex items-center hover:underline w-full"
									:href="item.href"
								>
									{{ item.label }}
								</a>
							</div>
							<!-- Seção 2: Links com ícone -->
							<div class="flex flex-col">
								<a
									v-for="(item, index) in section2Items"
									:key="index"
									:href="item.href"
									class="flex gap-2 py-2 items-center group w-full"
								>
									<i :class="item.icon" />
									<span class="group-hover:underline">{{ item.label }}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Drawer>
	</div>
</template>

<script>
import { ref, watch } from 'vue'
import MenubarCustom from '@/components/vue/MenubarCustom.vue'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'

export default {
	name: 'MenuComponent',
	components: {
		MenubarCustom,
		Button,
		Drawer
	},
	setup() {
		const menuOpen = ref(false)
		const favoritesCount = ref(12) // Exemplo de contador

		const toggleMenu = () => {
			menuOpen.value = !menuOpen.value
		}

		const openFavorites = () => {
			// lógica para abrir os favoritos
		}

		// Arrays com os links
		const section1Items = [
			{ label: 'Alugar Imóveis', href: '/alugar-imovel' },
			{ label: 'Comprar Imóveis', href: '/comprar-imovel' },
			{ label: 'Anunciar Imóveis', href: '/cadastre-seu-imovel' }
		]

		const section2Items = [
			{ label: 'Home', href: '/', icon: 'pi pi-arrow-right' },
			{ label: 'Área do Cliente', href: 'https://riobranco.immobilissistemas.com.br/immobilis/portal/login.php', icon: 'pi pi-arrow-right' },
			{ label: 'Contato', href: '/contato', icon: 'pi pi-arrow-right' },
			{ label: 'Blog', href: '/blog', icon: 'pi pi-arrow-right' },
			{ label: 'Empresa', href: '/empresa', icon: 'pi pi-arrow-right' }
		]

		// Watcher para adicionar ou remover a classe do body
		watch(menuOpen, (value) => {
			if (value) {
				document.body.classList.add('overflow-hidden')
			} else {
				document.body.classList.remove('overflow-hidden')
			}
		})

		return {
			menuOpen,
			favoritesCount,
			toggleMenu,
			openFavorites,
			section1Items,
			section2Items
		}
	}
}
</script>
