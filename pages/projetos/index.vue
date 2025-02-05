<template>
  <section class="flex w-full">
    <div class="w-full px-container flex flex-row gap-8 py-12 justify-between !overflow-hidden">
      <CustomBreadcrumb />
    </div>
  </section>
  <section class="flex w-full">
    <div class="w-full px-container flex flex-row gap-8 items-center justify-between !overflow-hidden">
      <div class="flex flex-col gap-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <ProjectCard
            v-for="project in projects"
            :key="project._id"
            :id="project._id"
            :thumbnail="project.thumbnail"
            :tag="project.tag"
            :projectName="project.projectName"
            :local="project.local"
            :short_description="project.short_description"
          />
        </div>
      </div>
    </div>
  </section>
  <CtaFinal />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import CustomBreadcrumb from '~/components/CustomBreadcrumb.vue';
import ProjectCard from '~/components/ProjectCard.vue';

const { $sanity } = useNuxtApp();
const projects = ref([]);

const fetchProjects = async () => {
  const query = `*[_type == "project"]{
    _id,
    projectName,
    tag,
    local,
    short_description,
    highlight,
    "thumbnail": images[0].asset->url
  }`;
  try {
    projects.value = await $sanity.fetch(query);
  } catch (error) {
  }
};

onMounted(() => {
  fetchProjects();
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>