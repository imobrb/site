<template>
    <PrimeBreadcrumb :home="home" :model="breadcrumbItems">
        <template #separator> / </template>
    </PrimeBreadcrumb>
</template> 

<script setup lang="ts">
import PrimeBreadcrumb from 'primevue/breadcrumb'
import { useBreadcrumb } from '@/composables/useBreadcrumb'

interface PropertyData {
  dadosBasicos?: {
    tiponegocio?: string
    tipoimovel?: string
    endereco?: string
  }
}

interface CurrentPage {
  label: string
  url?: string
}

const props = defineProps<{
  property?: PropertyData
  currentPage?: CurrentPage
}>()

const { home, breadcrumbItems } = useBreadcrumb(props.property, props.currentPage)
</script>