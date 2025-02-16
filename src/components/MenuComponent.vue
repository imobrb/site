<template>
  <div class="w-full">
    <!-- Cabeçalho com Menubar -->
    <Menubar class="bg-transparent border-none w-full" client:load>
      <!-- Lado esquerdo: Logo da empresa -->
      <template #start>
        <img src="/logo-white.svg" alt="Logo Imobiliaria Rio Branco" class="h-10" />
      </template>

      <!-- Lado direito: Botões -->
      <template #end>
        <div class="flex gap-2">
          <!-- Botão do WhatsApp -->
          <Button
            class="font-bold text-white"
            label="+55 18 99604-1075"
            icon="pi pi-whatsapp"
            @click="openWhatsapp"
            text
          />
          <div class="flex gap-1 bg-black p-2 w-fit rounded-full">
            <!-- Botão de favoritos com contador -->
            <Button
              class="bg-white text-black"
              rounded
              icon="pi pi-heart"
              :label="favoritesCount"
              @click="openFavorites"
            />
            <!-- Botão de menu que alterna o ícone -->
            <Button
              class="text-white"
              label="Menu"
              text
              rounded
              :icon="menuOpen ? 'pi pi-times' : 'pi pi-bars'"
              @click="toggleMenu"
            />
          </div>
        </div>
      </template>
      </Menubar>

      <!-- Drawer para conteúdo do menu -->
      <Drawer
      client:load
        v-model:visible="menuOpen"
        position="right"
        :baseZIndex="1000"
        modal
        :showCloseIcon="false"
        appendTo="body"
      >
        <template #header>
          <div class="p-d-flex p-ai-center p-jc-between">
            <h3 class="m-0">Menu</h3>
            <Button icon="pi pi-times" class="p-button-text" @click="toggleMenu" />
          </div>
        </template>
        <!-- Conteúdo do menu -->
        <div class="p-mt-3">
          <ul class="p-0" style="list-style: none;">
            <li class="p-my-2"><a href="#item1">Item 1</a></li>
            <li class="p-my-2"><a href="#item2">Item 2</a></li>
            <li class="p-my-2"><a href="#item3">Item 3</a></li>
          </ul>
        </div>
      </Drawer>
    </div>
</template>

<script>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';

export default {
  name: 'MenuComponent',
  components: {
    Menubar,
    Button,
    Drawer,
  },
  setup() {
    const menuOpen = ref(false);
    const favoritesCount = ref(12); // Exemplo de contador

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
      console.log("toggleMenu executed, menuOpen:", menuOpen.value);
    };

    const openWhatsapp = () => {
      console.log("openWhatsapp executed");
      window.open('https://wa.me/5518999999999', '_blank');
    };

    const openFavorites = () => {
      console.log("openFavorites executed");
    };

    return {
      menuOpen,
      favoritesCount,
      toggleMenu,
      openWhatsapp,
      openFavorites,
    };
  },
};
</script>

<style scoped>
/* Força o Menubar a ocupar 100% da largura */
.p-menubar {
  width: 100% !important;
}
</style>
