<template>
    <Galleria
        :value="banners"
        :showThumbnails="false"
        :showIndicators="false"
        :circular="true"
        :transition-interval="5000"
        :auto-play="true"
        :showItemNavigators="true"
        :activeIndex="activeIndex"
        @update:activeIndex="onActiveIndexChange"
        :pt="{
            'root': '2xl:-ml-[10%] 2xl:w-[120%]'
        }"
    >
        <template #item="slotProps">
            <img :src="slotProps.item.url" :alt="slotProps.item.alt" class="2xl:w-[120%]">
        </template>
    </Galleria>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Galleria from 'primevue/galleria'

const activeIndex = ref(0)

const onActiveIndexChange = (index) => {
    activeIndex.value = index
}

const banners = ref([
    { url: 'https://www.imobiliariariobranco.com.br/wp-content/themes/imobiliariariobranco/assets/images/imoveis_com_exclusividade.png', alt: 'Banner 1' },
    { url: 'https://www.imobiliariariobranco.com.br/wp-content/themes/imobiliariariobranco/assets/images/acompanhe_o_contrato.png', alt: 'Banner 2' },
    { url: 'https://www.imobiliariariobranco.com.br/wp-content/themes/imobiliariariobranco/assets/images/alo_universitario.png', alt: 'Banner 3' }
])

onMounted(() => {
    console.log('Banners carregados:', banners.value)
})
</script>

