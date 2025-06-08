<template>
	<div class="w-full px-container flex flex-col gap-10 py-8">
		<div class="flex flex-col gap-3">
			<Breadcrumb :current-page="currentPage" />
			<h1 class="text-heading-4 text-surface-900">Blog</h1>
		</div>
		<div class="flex flex-row gap-10 md:gap-20">
			<!-- Coluna 1 -->
			<div class="w-full flex flex-col gap-10">
				<div class="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
					<Select
						:options="ordem"
						optionLabel="name"
						optionValue="code"
						placeholder="Ordenar por"
						class="rounded-full md:w-56 p-variant-secondary"
					/>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:gap-y-16 p-0 m-0">
					<CardBlog
						v-for="post in paginatedPosts"
						:key="post.title"
						v-bind="post"
					/>
				</div>

				<Paginator
					:totalRecords="blogPosts.length"
					:rows="6"
					:first="first"
					@page="onPageChange"
				/>
			</div>

			<!-- Coluna 2 -->
			<BlogSidebar
				:categories="categories"
				:tags="tags"
				:most-accessed-posts="mostAccessedPosts"
			/>
		</div>
	</div>
</template>

<script setup>
	import Breadcrumb from '@components/vue/Breadcrumb.vue'
	import IconField from 'primevue/iconfield'
	import InputIcon from 'primevue/inputicon'
	import InputText from 'primevue/inputtext'
	import Select from 'primevue/select'
	import Button from 'primevue/button'
	import CardBlog from '@components/vue/CardBlog.vue'
	import Paginator from 'primevue/paginator'
	import BlogSidebar from '@components/vue/BlogSidebar.vue'
	import { ref, computed } from 'vue'

	// Este mock deve ser usado também como base para o mock do BlogPostPage.vue

	const currentPage = {
		label: 'Blog',
		url: '/blog'
	}

	const first = ref(0)
	const rows = ref(8)

	const categories = [
		{ label: 'Aluguel', url: '/blog/category/aluguel' },
		{ label: 'Bairros', url: '/blog/category/bairros' },
		{ label: 'Compra e venda', url: '/blog/category/compra-e-venda' },
		{ label: 'Condomínio Fechado', url: '/blog/category/condominio-fechado' },
		{ label: 'Dicas', url: '/blog/category/dicas' },
		{ label: 'Gestão Imobiliária', url: '/blog/category/gestao-imobiliaria' },
		{ label: 'Mercado Imobiliário', url: '/blog/category/mercado-imobiliario' },
		{ label: 'Sem categoria', url: '/blog/category/sem-categoria' }
	]

	const tags = [
		{ label: '2022', url: '/blog/tag/2022' },
		{ label: 'Ação de despejo', url: '/blog/tag/acao-de-despejo' },
		{ label: 'Ações locatícias', url: '/blog/tag/acoes-locaticias' },
		{ label: 'Água de banho', url: '/blog/tag/agua-de-banho' },
		{ label: 'Ajuda imobiliária', url: '/blog/tag/ajuda-imobiliaria' },
		{ label: 'Ajuda na compra de imóvel', url: '/blog/tag/ajuda-na-compra-de-imovel' },
		{ label: 'Alexa', url: '/blog/tag/alexa' },
		{ label: 'Alugar apartamento', url: '/blog/tag/alugar-apartamento' },
		{ label: 'Alugar imóvel', url: '/blog/tag/alugar-imovel' },
		{
			label: 'Alugar imóvel em presidente prudente',
			url: '/blog/tag/alugar-imovel-em-presidente-prudente'
		},
		{ label: 'Alugar imovel sem fiador', url: '/blog/tag/alugar-imovel-sem-fiador' },
		{ label: 'Alugar um apartamento', url: '/blog/tag/alugar-um-apartamento' },
		{ label: 'Alugar um imóvel', url: '/blog/tag/alugar-um-imovel' },
		{ label: 'Alugue seu imóvel', url: '/blog/tag/alugue-seu-imovel' },
		{ label: 'Aluguel', url: '/blog/tag/aluguel' },
		{ label: 'Aluguel com fiador', url: '/blog/tag/aluguel-com-fiador' },
		{ label: 'Aluguel de casa sem fiador', url: '/blog/tag/aluguel-de-casa-sem-fiador' },
		{ label: 'Aluguel de imóveis', url: '/blog/tag/aluguel-de-imoveis' },
		{ label: 'Aluguel de imóvel', url: '/blog/tag/aluguel-de-imovel' },
		{ label: 'Aluguel em presidente prudente', url: '/blog/tag/aluguel-em-presidente-prudente' },
		{ label: 'Aluguel imobiliário', url: '/blog/tag/aluguel-imobiliario' }
	]

	const ordem = [
		{ name: 'Mais recentes', code: 'recentes' },
		{ name: 'Mais antigos', code: 'antigos' }
	]

	const blogPosts = [
		{
			title: '5 dicas para encontrar um imóvel que caiba no seu orçamento',
			description:
				'Neste artigo separamos 5 dicas para te ajudar a encontrar um imóvel dentro das suas demandas...',
			date: '05/01/2023',
			category: 'COMPRA DE IMÓVEL',
			image: { src: '/images/blog/imovel-orcamento.jpg' },
			views: 3182,
			link: { href: '/blog/5-dicas-encontrar-imovel-orcamento' }
		},
		{
			title: 'Como escolher o melhor bairro para morar',
			description:
				'Descubra os principais fatores a considerar na hora de escolher o bairro ideal para sua nova casa...',
			date: '03/01/2023',
			category: 'DICAS',
			image: { src: '/images/blog/escolher-bairro.jpg' },
			views: 2547,
			link: { href: '/blog/como-escolher-melhor-bairro' }
		},
		{
			title: 'Financiamento imobiliário: tudo o que você precisa saber',
			description:
				'Um guia completo sobre como funciona o financiamento imobiliário e quais são as melhores opções...',
			date: '01/01/2023',
			category: 'FINANCIAMENTO',
			image: { src: '/images/blog/financiamento.jpg' },
			views: 4123,
			link: { href: '/blog/guia-financiamento-imobiliario' }
		},
		{
			title: 'Como escolher o melhor bairro para morar',
			description:
				'Descubra os principais fatores a considerar na hora de escolher o bairro ideal para sua nova casa...',
			date: '03/01/2023',
			category: 'DICAS',
			image: { src: '/images/blog/escolher-bairro.jpg' },
			views: 2547,
			link: { href: '/blog/como-escolher-melhor-bairro' }
		},
		{
			title: '5 dicas para encontrar um imóvel que caiba no seu orçamento',
			description:
				'Neste artigo separamos 5 dicas para te ajudar a encontrar um imóvel dentro das suas demandas...',
			date: '05/01/2023',
			category: 'COMPRA DE IMÓVEL',
			image: { src: '/images/blog/imovel-orcamento.jpg' },
			views: 3182,
			link: { href: '/blog/5-dicas-encontrar-imovel-orcamento' }
		},
		{
			title: 'Como escolher o melhor bairro para morar',
			description:
				'Descubra os principais fatores a considerar na hora de escolher o bairro ideal para sua nova casa...',
			date: '03/01/2023',
			category: 'DICAS',
			image: { src: '/images/blog/escolher-bairro.jpg' },
			views: 2547,
			link: { href: '/blog/como-escolher-melhor-bairro' }
		},
		{
			title: 'Financiamento imobiliário: tudo o que você precisa saber',
			description:
				'Um guia completo sobre como funciona o financiamento imobiliário e quais são as melhores opções...',
			date: '01/01/2023',
			category: 'FINANCIAMENTO',
			image: { src: '/images/blog/financiamento.jpg' },
			views: 4123,
			link: { href: '/blog/guia-financiamento-imobiliario' }
		}
	]

	const mostAccessedPosts = [
		{
			position: 1,
			title: 'Construir uma Kitnet barata é mais fácil que imagina',
			image: { src: '/images/blog/kitnet.jpg' },
			url: '/blog/construir-kitnet-barata'
		},
		{
			position: 2,
			title: 'Estudante, more perto das Universidades de Presidente Prudente',
			image: { src: '/images/blog/universidades.jpg' },
			url: '/blog/more-perto-universidades'
		},
		{
			position: 3,
			title: '4 Tipos de locação do Mercado Imobiliário',
			image: { src: '/images/blog/tipos-locacao.jpg' },
			url: '/blog/tipos-locacao-mercado-imobiliario'
		}
	]

	const paginatedPosts = computed(() => {
		const start = first.value
		const end = Math.min(start + 8, blogPosts.length)
		return blogPosts.slice(start, end)
	})

	const onPageChange = (event) => {
		first.value = event.first
	}
</script>
