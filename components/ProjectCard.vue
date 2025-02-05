<template>
  <NuxtLink :to="`/projetos/${id}`">
    <Card class="cursor-pointer group">
      <template #header>
        <div class="relative overflow-hidden border-b-2 border-primary-500 rounded-t-md">
          <img :src="thumbnail" alt="Project Image" class="w-full h-48 transition duration-500 object-cover group-hover:scale-125 rounded-t-md" />
          <span class="absolute top-3 right-3 bg-secondary-500 text-xs text-white px-2 py-1 rounded">{{ tag }}</span>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-1 rounded-b-md">
          <h3 class="text-md font-primary text-white leading-normal">{{ projectName }}</h3>
          <p class="text-support !text-xs">{{ local }}</p>
          <p class="text-support !text-xs">{{ short_description }}</p>
        </div>
      </template>
    </Card>
  </NuxtLink>
</template>

<script>
import { defineComponent } from 'vue';
import Card from 'primevue/card';

export default defineComponent({
  name: 'ProjectCard',
  components: {
    Card
  },
  props: {
    id: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    local: {
      type: String,
      required: true
    },
    short_description: {
      type: String,
      required: true
    }
  },
  mounted() {
  }
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>