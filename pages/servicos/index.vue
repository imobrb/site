<template>
  <section class="flex w-full">
    <div class="w-full px-container flex items-start py-12 !overflow-hidden">
      <div class="w-full flex flex-col lg:flex-row gap-8 items-start">
        <div class="flex flex-col gap-8 w-full">
          <CustomBreadcrumb :customItems="breadcrumbItems" />
          <h2 class="text-titlebig">Soluções <span class="text-primary-500">inteligentes</span></h2>
          <p class="text-support">
            Na Sunnyside, cada projeto é tratado com comprometimento absoluto,
            unindo tecnologia de ponta e expertise técnica para entregar resultados
            que superam expectativas. 
            <br><br>
            Buscamos sempre a segurança dos nossos clientes e das
            nossas equipes de instalação, realizamos estudos de
            reforços estruturais e adequações de padrões de energia.
          </p>
          <Accordion :activeIndex="null" class="border-none py-8 gap-8">
            <AccordionTab v-for="service in services" :key="service._id" :header="service.title">
              <div class="flex flex-row gap-4 px-4 py-4">
                <p class="w-full">{{ service.description }}</p>
                <div class="w-full grid grid-cols-1 gap-4">
                  <img v-for="(image, index) in service.images" :key="index" :src="image" alt="Service Image" class="w-full h-auto object-cover rounded-md" />
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
        <div class="w-full overflow-hidden rounded-md opacity-65 hidden lg:flex">
          <img src="/image-service.jpg" alt="Imagem ilustrativa dos serviços" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const { $sanity } = useNuxtApp();
const services = ref([]);

const fetchServices = async () => {
  const query = `*[_type == "service"]{
    _id,
    title,
    description,
    "images": images[].asset->url
  }`;
  try {
    services.value = await $sanity.fetch(query);
  } catch (error) {
  }
};

onMounted(() => {
  fetchServices();
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>