<template>
  <div class="py-2 border-b-2 border-white bg-secondary-500 w-full z-10">
    <div class="flex flex-row w-full px-container justify-between">
      <div>
        <NuxtLink to="/" class="relative items-center inline-flex text-center align-bottom justify-center -ml-1 py-2 rounded-md bg-transparent border-transparent focus:outline-none focus:outline-offset-0 focus:ring-primary-500 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none">
          <Logo />
        </NuxtLink>
      </div>
      <div class="flex flex-row">
        <div class="flex-row gap-3 hidden md:flex items-center">
            <CustomButton href="/" label="Início" text class="hover:!bg-transparent hover:!text-primary-500" :class="isActive('/') ? '!text-primary-500' : '!text-white'" />
            <CustomButton href="/sobre" label="Sobre" text class="hover:!bg-transparent hover:!text-primary-500" :class="isActive('/sobre') ? '!text-primary-500' : '!text-white'" />
            <CustomButton href="/servicos" label="Serviços" text class="hover:!bg-transparent hover:!text-primary-500" :class="isActive('/servicos') ? '!text-primary-500' : '!text-white'" />
            <CustomButton href="/projetos" label="Projetos" text class="hover:!bg-transparent hover:!text-primary-500" :class="isActive('/projetos') ? '!text-primary-500' : '!text-white'" />
            <CustomButton href="https://api.whatsapp.com/send/?phone=5554996207665&type=phone_number&app_absent=0" class="ml-2" newtab label="Contato" primary icon-left="pi pi-whatsapp" />
        </div>
        <Button icon="pi pi-bars" text class="md:!hidden !flex hover:!bg-transparent" @click="visible = true" />
      </div>
    </div>
    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col gap-2 py-4">
        <CustomButton @click="closeSidebar" href="/" label="Início" text class="w-full text-xl py-3 px-4 rounded-md hover:!bg-transparent hover:!text-primary-500" :class="isActive('/') ? '!text-primary-500' : '!text-white'" />
        <CustomButton @click="closeSidebar" href="/sobre" label="Sobre" text class="w-full text-xl py-3 px-4 rounded-md hover:!bg-transparent hover:!text-primary-500" :class="isActive('/sobre') ? '!text-primary-500' : '!text-white'" />
        <CustomButton @click="closeSidebar" href="/servicos" label="Serviços" text class="w-full text-xl py-3 px-4 rounded-md hover:!bg-transparent hover:!text-primary-500" :class="isActive('/servicos') ? '!text-primary-500' : '!text-white'" />
        <CustomButton @click="closeSidebar" href="/projetos" label="Projetos" text class="w-full text-xl py-3 px-4 rounded-md hover:!bg-transparent hover:!text-primary-500" :class="isActive('/projetos') ? '!text-primary-500' : '!text-white'" />
        <CustomButton @click="closeSidebar" href="https://api.whatsapp.com/send/?phone=5554996207665&type=phone_number&app_absent=0" class="w-full text-xl py-3 px-4 rounded-md mt-2" newtab label="Contato" primary icon-left="pi pi-whatsapp" />
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { NuxtLink } from '#components'

const visible = ref(false)

const route = useRoute()

const closeSidebar = () => {
  visible.value = false;
}

const isActive = (routePath) => {
  return route.path === routePath;
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>