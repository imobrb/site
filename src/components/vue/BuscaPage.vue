<template>
    <div class="flex flex-col gap-8">
        <SearchHeader />
        <div class="px-container w-full py-8 min-h-full md:gap-8 gap-4 flex flex-col">
            <Breadcrumb
                :current-page="currentPage"
            />
            <div class="w-full flex flex-col gap-4">
                <div class="flex flex-row md:justify-between">
                <div class="flex gap-2">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText placeholder="Busca por nome, código ou bairro... " class="md:w-96" />
                    </IconField>
                    <Button 
                        :icon="showFilters ? 'pi pi-minus' : 'pi pi-plus'" 
                        :label="showFilters ? 'Filtros' : 'Filtros'" 
                        class="rounded-full" 
                        outlined 
                        @click="showFilters = !showFilters"
                    />
                </div>

                <Select :options="ordem" optionLabel="name" optionValue="code" placeholder="Ordenar por" class="rounded-full md:w-56 p-variant-secondary" />
                    
                </div><!-- Filtros -->
                <Transition
                    enter-active-class="transition-all duration-300 ease-in-out"
                    enter-from-class="opacity-0 max-h-0 translate-y-2"
                    enter-to-class="opacity-100 max-h-[1000px] translate-y-0"
                    leave-active-class="transition-all duration-300 ease-in-out"
                    leave-from-class="opacity-100 max-h-[1000px] translate-y-0"
                    leave-to-class="opacity-0 max-h-0 translate-y-2"
                >
                    <div v-if="showFilters" class="flex flex-wrap gap-2 w-full">
                        <Select
                            placeholder="Tipo de Negócio"
                            :options="[]"
                            class="w-auto p-variant-secondary"
                        />
                        <Select
                            placeholder="Tipo de Imóvel"
                            :options="[]"
                            class="w-auto p-variant-secondary"
                        />
                        <Select
                            placeholder="Cidade"
                            :options="[]"
                            class="w-auto p-variant-secondary"
                        />
                        <Select
                            placeholder="Detalhes"
                            :options="[]"
                            class="w-auto p-variant-secondary"
                        />
                    </div>
                </Transition>
            </div>

            <div class="grid m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-14 md:gap-y-20 mb-16">
                <CardImovel 
                    v-for="imovel in imoveis" 
                    :key="imovel.id"
                    :transaction-type="imovel.transactionType"
                    :title="imovel.title"
                    :subtitle="imovel.subtitle"
                    :image="imovel.image"
                    :price="imovel.price"
                    :link="imovel.link"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '@components/vue/Breadcrumb.vue'
import SearchHeader from '@components/vue/SearchHeader.vue'
import CardImovel from '@components/vue/CardImovel.vue'
import Select from 'primevue/select'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

import { ref } from 'vue'
import { json as highlightsData } from '../../mock/get-highlights.js'

const showFilters = ref(false)
const currentPage = {
    label: 'Busca de Imóveis',
    url: '/busca'
}

const imoveis = ref(highlightsData.venda.map(imovel => ({
    id: imovel.dadosBasicos.codigo,
    title: `${imovel.dadosBasicos.tipoimovel} - ${imovel.dadosBasicos.bairro}`,
    subtitle: `${imovel.dadosBasicos.endereco}, ${imovel.dadosBasicos.numero} - ${imovel.dadosBasicos.cidade}`,
    price: parseFloat(imovel.valorVenda),
    transactionType: imovel.dadosBasicos.tiponegocio,
    image: {
        src: 'https://picsum.photos/400/300'
    },
    link: {
        href: `/imovel/${imovel.dadosBasicos.codigo}`,
        label: 'Ver imóvel'
    }
})))

const imoveisLocacao = ref(highlightsData.locacao.map(imovel => ({
    id: imovel.dadosBasicos.codigo,
    title: `${imovel.dadosBasicos.tipoimovel} - ${imovel.dadosBasicos.bairro}`,
    subtitle: `${imovel.dadosBasicos.endereco}, ${imovel.dadosBasicos.numero} - ${imovel.dadosBasicos.cidade}`,
    price: parseFloat(imovel.valorLocacao),
    transactionType: imovel.dadosBasicos.tiponegocio,
    image: {
        src: 'https://picsum.photos/400/300'
    },
    link: {
        href: `/imovel/${imovel.dadosBasicos.codigo}`,
        label: 'Ver imóvel'
    }
})))

const ordem = [
    { name: 'Recém cadastrados', code: 'recentes' },
    { name: 'Valores crescentes', code: 'valor_crescente' },
    { name: 'Valores decrescentes', code: 'valor_decrescente' }
]

const featuredProperties = ref({
    locacao: [] // This should be populated with your actual data
})
</script>
