<template>
  <div class="w-full px-container flex flex-col gap-10 py-8">
    <!-- Breadcrumb e Título -->
    <div class="flex flex-col gap-3">
      <Breadcrumb :current-page="currentPage" />
    </div>
    <div class="flex flex-row gap-10 md:gap-20">
      <!-- Coluna 1: Conteúdo do Post -->
        <div class="w-full flex flex-col gap-10">
            <h1 class="text-heading-4 text-surface-900">{{ post.title }}</h1>
            <div class="w-full flex flex-col gap-10 max-w-3xl">
                <div class="flex flex-row gap-4 text-sm text-surface-500">
                <div class="flex">
                    <span class="flex items-center gap-2"><i class="pi pi-calendar"></i>{{ post.date }}</span>
                </div>
                <div class="flex">
                    <span class="flex items-center gap-2"><i class="pi pi-eye"></i>{{ post.views }} visualizações</span>
                </div>
                </div>
                <div class="prose max-w-none" v-html="post.content"></div>
                <!-- Compartilhamento -->
                <div class="flex gap-3 items-center">
                <span>Compartilhe nas redes</span>
                <!-- Botões de compartilhamento -->
                <Button icon="pi pi-facebook" text />
                <Button icon="pi pi-linkedin" text />
                <Button icon="pi pi-whatsapp" text />
                <Button icon="pi pi-twitter" text />
                </div>
                <!-- Leia também -->
                <div>
                <h2 class="text-heading-3 mt-8 mb-4">Leia também</h2>
                <div class="flex gap-4">
                    <CardBlog v-for="related in relatedPosts" :key="related.title" v-bind="related" />
                </div>
                </div>
            </div>
        </div>
      <!-- Coluna 2: Sidebar -->
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
import Button from 'primevue/button'
import CardBlog from '@components/vue/CardBlog.vue'
import BlogSidebar from '@components/vue/BlogSidebar.vue'
import { ref } from 'vue'

// Simulação de dados do post (substitua pelo fetch real)
const post = {
  slug: '5-dicas-encontrar-imovel-orcamento',
  title: '5 dicas para encontrar um imóvel que caiba no seu orçamento',
  description: 'Neste artigo separamos 5 dicas para te ajudar a encontrar um imóvel dentro das suas demandas...',
  date: '05/01/2023',
  category: 'COMPRA DE IMÓVEL',
  image: { src: '/images/blog/imovel-orcamento.jpg' },
  views: 3182,
  content: `<p>Neste artigo separamos 5 dicas para te ajudar a encontrar um imóvel dentro das suas demandas e principalmente, do seu orçamento!</p>
<h2>Defina o seu orçamento</h2>
<p>...</p>`
}

// Simulação de posts relacionados
const relatedPosts = [
  // ...mesma estrutura do CardBlog
]

const currentPage = {
  label: post.title,
  url: '/blog/5-dicas-encontrar-imovel-orcamento'
}

// Dados para o sidebar
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
  { label: 'Ajuda imobiliária', url: '/blog/tag/ajuda-imobiliaria' }
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
</script>
