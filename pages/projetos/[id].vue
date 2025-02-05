<template>
  <section class="flexI w-full">
    <div class="w-full px-container flex flex-row gap-8 py-12 justify-between !overflow-hidden">
      <CustomBreadcrumb :customItems="breadcrumbItems" />
    </div>
  </section>
  <section class="flex w-full min-h-[calc(100vh-90px)]">
    <div class="w-full px-container flex flex-row gap-8 py-0 lg:py-20 justify-between !overflow-hidden">
      <div class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 w-full pb-12" v-if="project">
        
        <!-- Project Infos -->
        <div class="flex w-full lg:w-2/4 flex-col gap-8">
          <div class="flex flex-wrap lg:flex-row w-full justify-between items-start lg:items-center gap-4 lg:gap-8">
            <h1 class="font-primary text-primary-500 text-4xl">{{ project.projectName }}</h1>
            <span class="bg-white text-xs text-secondary-500 font-primary px-2 py-1 rounded">{{ project.tag }}</span>
          </div>
          <div class="flex w-full flex-col gap-8">
            <p class="text-support">{{ project.local }}</p>
            <Divider class="!bg-primary-500" />
            <p class="text-support">{{ project.short_description }}</p>
            <p class="text-support">{{ project.description }}</p>
          </div>
        </div>

        <!-- Project Images -->
        <div class="w-3/4 lg:w-2/4 flex flex-col gap-3">
          <Image v-if="project.images.length" :src="project.images[0]" alt="Project Image" preview />
          <div class="w-full grid grid-cols-4 gap-3">
            <Image v-for="(image, index) in project.images" :key="index" :src="image" alt="Project Image" preview class="w-full h-auto" />
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="text-title">Project not found</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';
import CustomBreadcrumb from '~/components/CustomBreadcrumb.vue';

const route = useRoute();
const { $sanity } = useNuxtApp();
const project = ref(null);
const breadcrumbItems = ref([]);

const updateBreadcrumb = (project) => {
  if (project) {
    breadcrumbItems.value = [{ label: 'Projetos', route: '/projetos' }, { label: project.projectName }];
  } else {
    breadcrumbItems.value = [{ label: 'Projetos', route: '/projetos' }, { label: `Projeto ${route.params.id}` }];
  }
};

const fetchProject = async (id) => {
  const query = `*[_type == "project" && _id == $id][0]{
    _id,
    projectName,
    tag,
    local,
    short_description,
    description,
    "images": images[].asset->url
  }`;
  const params = { id };
  try {
    project.value = await $sanity.fetch(query, params);
    updateBreadcrumb(project.value);
  } catch (error) {
  }
};

onMounted(() => {
  const id = route.params.id;
  fetchProject(id);
});

watch(route, () => {
  const newId = route.params.id;
  fetchProject(newId);
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
