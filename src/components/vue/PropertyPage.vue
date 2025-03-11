<template>
    <div class="px-container flex flex-col gap-8 py-8">
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
            <img 
            :src="slotProps.item.src" 
            alt="Imagem do imóvel" 
            />
        </template>
        <template #thumbnail="slotProps">
            <img 
            :src="slotProps.item.src" 
            alt="Miniatura" 
            />
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
                    <Button 
                        rounded
                        outlined
                        label="Atendimento via Whatsapp"
                        icon="pi pi-whatsapp" 
                    />
                    <Button
                        rounded
                        outlined
                        label="18 2104 6944" 
                        icon="pi pi-phone"
                    />
                </div>
            </div>
        
            <div class="flex flex-col gap-2">
                <h3 class="text-heading-1 text-surface-700">Descrição</h3>
                <p class="text-body-2 text-surface-700">{{ property.description }}</p>
            </div>

            <div>
                <p class="text-primary-600 text-body-2 font-medium">Todos os imóves estão sujeitos a alteração de valor sem aviso prévio.</p>
            </div>

            <div class="flex flex-wrap gap-6">
            <div class="flex items-start justify-center flex-col text-body-2" v-for="(detail, index) in property.details" :key="index">
                <span class="text-surface-700 font-medium text-body-3">{{ detail.value }}</span>
                <span class="text-surface-600">{{ detail.label }}</span>
            </div>
            </div>
        </div>
        <!-- Coluna Direita: Card com Valor e Botão de Agendar Visita -->
        <div class="rounded-xl p-6 border-1 border-surface-200 flex flex-col gap-4 w-full lg:w-1/3">
            <span class="text-heading-2 text-primary-700 font-medium mb-1">{{ property.method }} {{ property.price }}</span>
            <div class="flex flex-col">
                <div class="flex flex-row gap-1" v-for="(specification, index) in property.specification" :key="index">
                    <span class="text-surface-700 font-medium text-body-3">
                        {{ specification.label }}<span v-if="specification.value">:</span>
                    </span>
                    <span class="text-surface-700" v-if="specification.value">{{ specification.value }}</span>
                </div>
            </div>
            <p class="text-body-2 font-medium text-surface-700">Faça uma visita presencial, basta combinar com o corretor quando ele entrar em contato.</p>
            <div class="flex flex-col gap-4">
            <Button
                rounded
                outlined
                label="Agendar Visita" 
            />
            <Button 
                rounded
                outlined
                label="Whatsapp"
                icon="pi pi-whatsapp" 
            />
            </div>
        </div>
    </div>

    <!-- Seção de Localização -->
    <div class="flex flex-col gap-4">
        <h2 class="text-heading-2 text-surface-900 font-medium">Localização</h2>
        <div class="w-full h-96">
        <!-- Exemplo com iframe para Google Maps; insira sua API Key e parâmetros desejados -->
        <iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            style="border:0"
            :src="googleMapSrc" 
            allowfullscreen>
        </iframe>
        </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Galleria from 'primevue/galleria'
  import Dialog from 'primevue/dialog'
  import Button from 'primevue/button'
  
  // Dados de exemplo para o carrossel
  const images = [
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3719.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3720.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3721.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3722.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3723.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3724.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3725.JPG' },
    { src: 'https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=1535&tamanho=1280x720&imagem=IMG_3726.JPG' }
  ]
  
  // Variáveis para o dialog de imagem ampliada
  const displayImage = ref(false)
  const selectedImage = ref('')
  
  // Handler para quando clicar em uma imagem do carrossel
  function onImageClick(e) {
    selectedImage.value = e.item.src
    displayImage.value = true
  }
  
  // Dados MOCK do imóvel
  const property = {
    name: 'Barracão / Salão Comercial - Centro',
    local: 'Comercial | Rua Joaquim Nabuco, Presidente Prudente - SP',
    description: 'Salao Comercial (alvenaria - laje) contendo area construida de 40 ms2, banheior, porta em vidro temperado.',
    details: [
      { label: 'Area do Terreno', value: '40 m²' },
      { label: 'Area Construida', value: '40 m²' },
      { label: 'Banh.', value: '1' }
    ],
    specification: [
      { label: 'Código', value: '40 m²' },
      { label: 'Mais encargos', value: '' },
      { label: 'Exclusivo', value: '' }
    ],
    method: 'Aluguel',
    price: 'R$ 1.200,00'
  }
  
  // URL do Google Maps embutido
  const googleMapSrc = ref(
    'https://www.google.com/maps/embed/v1/place?key=AIzaSyCTi5bp6JVey7njh6StconItjRhzBFCgw4&q=-22.1261823,-51.3890721'
  )
  </script>
  