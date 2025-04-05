<template>
    <div>
        <Galleria
            :value="banners"
            :showThumbnails="false"
            :showIndicators="false"
            :circular="true"
            :transitionInterval="5000"
            :autoPlay="true"
            :showItemNavigators="true"
            :activeIndex="activeIndex"
            @update:activeIndex="onActiveIndexChange"
            :pt="{
                'root': '2xl:-ml-[10%] 2xl:w-[120%] my-4 md:my-8',
                'itemNavigators': {
                    class: 'bg-white/50 hover:bg-white/80 text-black p-2 rounded-full'
                }
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.url" :alt="slotProps.item.alt" class="2xl:w-[120%]">
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref } from 'vue'
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
</script>

