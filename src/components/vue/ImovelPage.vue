<template>
  <div class="px-container flex flex-col gap-8 py-8">
    <!-- Breadcrumb inteligente -->
    <Breadcrumb :home="home" :model="breadcrumbItems" />

    <!-- Carrossel de Imagens com PrimeVue Galleria -->
    <Galleria
      :value="images"
      :showThumbnails="false"
      :showIndicators="false"
      :circular="true"
      :showItemNavigators="true"
      @item-click="onImageClick"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.src" alt="Imagem do imóvel" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.src" alt="Miniatura" />
      </template>
    </Galleria>

    <!-- Dialog para Ampliar a Imagem -->
    <Dialog
      v-model:visible="displayImage"
      modal
      class="p-0"
      :closable="false"
    >
      <div class="relative">
        <img
          :src="selectedImage"
          alt="Imagem ampliada"
          class="w-full object-contain"
          style="max-height: 80vh;"
        />
        <Button
          icon="pi pi-times"
          class="absolute top-2 right-2 p-button-rounded p-button-danger"
          @click="displayImage = false"
        />
      </div>
    </Dialog>

    <!-- Área com Duas Colunas: Detalhes e Card de Valor -->
    <div class="flex flex-col lg:flex-row w-full gap-8">
      <!-- Coluna Esquerda: Nome, Descrição, Detalhes e Botões -->
      <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <h1 class="text-heading-2 text-surface-900">{{ property.name }}</h1>
            <p class="text-body-2 text-surface-700">{{ property.local }}</p>
          </div>

          <div class="flex gap-4">
            <Button size="small" rounded outlined label="Atendimento via Whatsapp" icon="pi pi-whatsapp" class="bg-green-500 text-white border-none" />
            <Button size="small" rounded outlined label="18 2104 6944" icon="pi pi-phone" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-heading-1 text-surface-700">Descrição</h3>
          <!-- Use v-html se a descrição vier em HTML -->
          <div class="text-body-2 text-surface-700" v-html="property.description"></div>
        </div>

        <div>
          <p class="text-primary-600 text-body-2 font-medium">
            Todos os imóves estão sujeitos a alteração de valor sem aviso prévio.
          </p>
        </div>

        <!-- Aqui exibimos os detalhes, agora incluindo os dados dos comodos -->
        <div class="flex flex-wrap gap-6">
          <div
            class="flex items-start justify-center flex-col text-body-2"
            v-for="(detail, index) in property.details"
            :key="index"
          >
            <span class="text-surface-700 font-medium text-body-3">{{ detail.value }}</span>
            <span class="text-surface-600">{{ detail.label }}</span>
          </div>
        </div>
      </div>

      <!-- Coluna Direita: Card com Valor e Botão de Agendar Visita -->
      <div class="rounded-xl p-6 border-1 border-surface-200 flex flex-col gap-4 w-full lg:w-1/3">
        <span class="text-heading-2 text-primary-700 font-medium mb-1">
          {{ property.method }} {{ property.price }}
        </span>
        <div class="flex flex-col">
          <div
            class="flex flex-row gap-1"
            v-for="(spec, index) in property.specification"
            :key="index"
          >
            <span class="text-surface-700 font-medium text-body-3">
              {{ spec.label }}<span v-if="spec.value">:</span>
            </span>
            <span class="text-surface-700" v-if="spec.value">{{ spec.value }}</span>
          </div>
        </div>
        <p class="text-body-2 font-medium text-surface-700">
          Faça uma visita presencial, basta combinar com o corretor quando ele entrar em contato.
        </p>
        <div class="flex flex-col gap-4">
          <Button rounded outlined label="Agendar Visita" />
          <Button rounded label="Whatsapp" icon="pi pi-whatsapp" class="bg-green-500 text-white" />
        </div>
      </div>
    </div>

    <!-- Seção de Localização -->
    <div class="flex flex-col gap-4">
      <h2 class="text-heading-2 text-surface-900 font-medium">Localização</h2>
      <div class="w-full h-96">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          :src="googleMapSrc"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import Galleria from 'primevue/galleria'
import Breadcrumb from 'primevue/breadcrumb'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

// Importa os dados do mock (ou você pode receber esses dados via prop)
import exclusives from '../../mock/get-exclusives.js'

// Para este exemplo, escolhemos o primeiro imóvel da categoria "venda"
const rawProperty = exclusives.venda[0]

// Função de mapeamento atualizada
function mapPropertyData(raw) {
  return {
    name: `${raw.dadosBasicos.tipoimovel} - ${raw.dadosBasicos.endereco}`,
    local: `${raw.dadosBasicos.bairro} | ${raw.dadosBasicos.cidade} - ${raw.dadosBasicos.uf}`,
    description: raw.dadosBasicos.anunciolocacao,
    // Aqui incluímos "Área do Terreno", "Preço" e mapeamos os comodos para details
    details: [
      { label: 'Área do Terreno', value: raw.dadosBasicos.areaterreno },
      { label: 'Preço', value: raw.dadosBasicos.valorVenda || raw.dadosBasicos.valorLocacao },
      ...raw.comodos.map(c => ({
        label: c.nome,
        value: c.quantidade
      }))
    ],
    specification: [
      { label: 'Código', value: raw.dadosBasicos.codigo },
      { label: 'Mais encargos', value: '' },
      { label: 'Exclusivo', value: '' }
    ],
    method: raw.dadosBasicos.tiponegocio,
    price: raw.dadosBasicos.valorVenda || raw.dadosBasicos.valorLocacao,
    fotos: raw.fotos
  }
}

const property = mapPropertyData(rawProperty)

// Breadcrumb inteligente
const home = { label: 'Início', url: '/' }
const breadcrumbItems = computed(() => {
  const categoryLabel = property.method === 'VENDA' ? 'Venda' : 'Locação'
  const categoryUrl = property.method === 'VENDA' ? '/exclusivo-venda' : '/exclusivo-locacao'
  return [
    { label: categoryLabel, url: categoryUrl },
    { label: property.name }
  ]
})

// Cria a array de imagens para o carrossel usando a foto do imóvel
const baseImageUrl = 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem='
const images = [{ src: baseImageUrl + property.fotos }]

// Estado e handler para o dialog de imagem ampliada
const displayImage = ref(false)
const selectedImage = ref('')
function onImageClick(e) {
  selectedImage.value = e.item.src
  displayImage.value = true
}

// URL do Google Maps (substitua a API key conforme necessário)
const googleMapSrc = ref('https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=-22.1261823,-51.3890721')
</script>
