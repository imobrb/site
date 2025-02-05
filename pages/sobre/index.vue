<template>
  <section class="flex w-full">
    <div class="w-full px-container flex items-start py-12 !overflow-hidden">
      <div class="w-full flex flex-col lg:flex-row gap-8 items-start">
        <div class="flex flex-col gap-8 w-full">
          <CustomBreadcrumb />
          <div class="w-full flex flex-col items-center gap-16 py-10">
            <div class="max-w-2xl flex flex-col gap-8 items-center">
              <h3 class="text-overline">Sobre a Sunnyside</h3>
              <h2 class="text-titlebig">Título do <span class="text-primary-500">texto sobre</span></h2>
              <p class="text-support text-justify-center" style="text-align-last: center;">
                {{ about.content1 }}
              </p>
            </div>
            
            <img :src="about.imageUrl" alt="Imagem ilustrativa dos serviços" class="h-60 object-cover w-full opacity-80 rounded" />
            
            <div class="w-full flex flex-col items-center">
              <div class="max-w-2xl flex flex-col gap-8 items-center">
                <p class="text-support text-justify-center" style="text-align-last: center;">
                  {{ about.content2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $sanity } = useNuxtApp();
const about = ref({
  content1: '',
  content2: '',
  imageUrl: ''
});

const fetchAbout = async () => {
  const query = `*[_type == "about"][0]{
    content1,
    content2,
    "imageUrl": image.asset->url
  }`;
  try {
    const data = await $sanity.fetch(query);
    about.value = data;
  } catch (error) {
    console.error('Error fetching about data:', error);
  }
};

const updateMetaTags = () => {
  useHead({
    title: about.value.title,
    meta: [
      { name: 'description', content: about.value.content1 },
      { property: 'og:title', content: about.value.title },
      { property: 'og:description', content: about.value.content1 },
      { property: 'og:image', content: about.value.imageUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: about.value.title },
      { name: 'twitter:description', content: about.value.content1 },
      { name: 'twitter:image', content: about.value.imageUrl },
    ],
  });
};

watch(about, updateMetaTags);

onMounted(() => {
  fetchAbout();
});
</script>