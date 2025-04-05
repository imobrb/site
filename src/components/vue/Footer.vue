<template>
	<footer class="w-full flex flex-col bg-primary-500 text-white py-8">
		<div class="px-container w-full justify-center items-center flex flex-col gap-10">
			<div class="w-full flex items-center justify-center">
				<Button
					outline
					rounded
					size="small"
					label="Voltar ao topo"
					icon="pi pi-arrow-up"
					class="text-white border-white"
					@click="scrollToTop"
					aria-label="Voltar ao topo da página"
				/>
			</div>

			<!-- Nav -->
			<nav class="flex flex-wrap md:flex-row gap-4 justify-between w-full" aria-label="Navegação do site">
				<div v-for="section in navigationSections" :key="section.title" class="flex flex-col gap-4">
					<h3 class="text-heading-2 text-left">{{ section.title }}</h3>
					<div class="flex flex-col gap-1 items-start">
						<Button
							v-for="link in section.links"
							:key="link.href"
							as="a"
							:href="link.href"
							:text="true"
							:label="link.label"
							:icon="link.icon"
							:target="link.target"
							class="text-white hover:bg-primary-800/50 rounded-full pr-4"
							size="small"
							:aria-label="link.label"
						/>
					</div>
				</div>
			</nav>

			<!-- Logo & Social -->
			<div
				class="w-full flex flex-col-reverse items-start md:flex-row gap-8 justify-between md:items-center"
			>
				<div class="flex gap-2">
					<img
						src="/logo-vertical-white.svg"
						alt="Logotipo Imobiliaria Rio Branco"
						width="150"
						height="50"
					/>
					<img
						src="/selo-unimob.png"
						alt="Selo Associada Unimob"
					/>
				</div>
				<div class="w-auto flex gap-2">
					<Button
						v-for="social in socialLinks"
						:key="social.icon"
						outline
						rounded
						size="small"
						:label="social.label"
						:icon="social.icon"
						:as="social.as"
						:href="social.href"
						:target="social.target"
						class="text-white border-white hover:bg-primary-800/50"
						:class="social.class"
						:aria-label="social.ariaLabel"
					/>
				</div>
			</div>

			<Divider class="m-0" />

			<div class="text-xs justify-between w-full flex flex-col md:flex-row items-start gap-4">
				<Button
					outline
					text
					label="Política de Privacidade"
					icon="pi pi-arrow-right"
					class="text-white px-0"
					size="small"
					aria-label="Política de Privacidade"
				/>
				<div class="flex flex-col gap-2 md:flex-row">
					<span>Todos os direitos reservados © {{ currentYear }}. Creci 1056 J | Imobiliária Rio Branco</span>
					<span>
						Desenvolvido por
						<a
							href="https://uxduda.com"
							target="_blank"
							rel="noopener noreferrer"
							>uxduda</a
						>
						&
						<a
							href="https://robsonjunior.dev"
							target="_blank"
							rel="noopener noreferrer"
							>robsonjunior</a
						>.
					</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import { computed, ref } from 'vue'

interface NavigationLink {
	href: string
	label: string
	icon: string
	target?: string
}

interface NavigationSection {
	title: string
	links: NavigationLink[]
}

interface SocialLink {
	icon: string
	label?: string
	href?: string
	target?: string
	as?: string
	class?: string
	ariaLabel: string
}

const navigationSections = ref<NavigationSection[]>([
	{
		title: 'Institucional',
		links: [
			{ href: '/empresa', label: 'Empresa', icon: 'pi pi-arrow-right' },
			{ href: '/contato', label: 'Contato', icon: 'pi pi-arrow-right' },
			{ href: '/duvidas-frequentes', label: 'Duvidas Frequentes', icon: 'pi pi-arrow-right' },
			{ href: '/servicos-prestados', label: 'Serviços prestados', icon: 'pi pi-arrow-right' },
		],
	},
	{
		title: 'Ferramentas',
		links: [
			{
				href: 'https://riobranco.immobilissistemas.com.br/immobilis/portal/login.php',
				label: 'Área do cliente',
				icon: 'pi pi-arrow-right',
				target: '_blank',
			},
			{ href: '/cadastre-seu-imovel', label: 'Cadastre seu imóvel', icon: 'pi pi-arrow-right' },
			{ href: '/financiamento', label: 'Financiamento', icon: 'pi pi-arrow-right' },
		],
	},
	{
		title: 'Aluguel',
		links: [
			{ href: '/alugar-imovel/?tipo_imovel=3', label: 'Apartamentos', icon: 'pi pi-arrow-right' },
			{ href: '/alugar-imovel/?tipo_imovel=1', label: 'Casas', icon: 'pi pi-arrow-right' },
			{ href: '/alugar-imovel/?tipo_imovel=18', label: 'Salões comerciais', icon: 'pi pi-arrow-right' },
			{ href: '/alugar-imovel/?tipo_imovel=2', label: 'Sobrados', icon: 'pi pi-arrow-right' },
		],
	},
	{
		title: 'Vendas',
		links: [
			{ href: '/comprar-imovel/?tipo_imovel=3', label: 'Apartamentos', icon: 'pi pi-arrow-right' },
			{ href: '/comprar-imovel/?tipo_imovel=1', label: 'Casas', icon: 'pi pi-arrow-right' },
			{ href: '/comprar-imovel/?tipo_imovel=18', label: 'Salões comerciais', icon: 'pi pi-arrow-right' },
			{ href: '/comprar-imovel/?tipo_imovel=2', label: 'Sobrados', icon: 'pi pi-arrow-right' },
			{ href: '/comprar-imovel/?tipo_imovel=7', label: 'Terrenos', icon: 'pi pi-arrow-right' },
		],
	},
])

const socialLinks = ref<SocialLink[]>([
	{
		icon: 'pi pi-whatsapp',
		label: '+55 18 99604-1075',
		href: 'https://wa.me/5518996041075',
		target: '_blank',
		as: 'a',
		class: 'h-10',
		ariaLabel: 'WhatsApp',
	},
	{
		icon: 'pi pi-facebook',
		class: 'w-10',
		ariaLabel: 'Facebook',
	},
	{
		icon: 'pi pi-instagram',
		class: 'w-10',
		ariaLabel: 'Instagram',
	},
	{
		icon: 'pi pi-linkedin',
		class: 'w-10',
		ariaLabel: 'LinkedIn',
	},
])

const currentYear = computed(() => new Date().getFullYear())

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
</script>
