<template>
  <!-- Video Background -->
  <video
    src="/video-home.mp4"
    autoplay
    loop
    muted
    playsinline
    class="object-cover w-full h-[calc(100vh-90px)] absolute opacity-10 pointer-events-none overflow-hidden"
  ></video>
  <!-- Hero Home -->
  <div class="w-full flex flex-col gap-20 lg:gap-40">
    <section class="flex w-full min-h-[calc(100vh-90px)] border-b-2 border-white bg-secondary-500">
      <div class="w-full px-container flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 justify-start items-start lg:items-center lg:justify-between !overflow-hidden lg:py-8 py-4 pb-16">
        <div class="flex flex-col gap-8 z-10">
          <div class="flex flex-col gap-5 max-w-4xl w-full">
            <h1 class="text-titlebig">Lorem ipsum dolor sit amet, <span class="text-primary-500">consectetur adipiscing elit.</span></h1>
            <p class="text-support">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="flex w-full gap-2.5">
            <CustomButton secondary iconLeft="pi pi-arrow-circle-down" label="Go Down" @click="scrollToSection('servicos')" />
            <CustomButton outlined iconLeft="pi pi-whatsapp" label="Whatsapp Button" href="https://api.whatsapp.com/send/?phone=5554996207665&type=phone_number&app_absent=0" newtab />
          </div>
        </div>
        <VideoMask />
      </div>
    </section>
    <section class="flex w-full">
      <div class="w-full px-container flex flex-row gap-8 items-center justify-between !overflow-hidden">
        <div class="flex flex-col gap-8 w-full">
          <h3 class="text-overline">Projetos atuados</h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <ProjectCard
              v-for="project in displayedProjects"
              :key="project._id"
              :id="project._id"
              :thumbnail="project.thumbnail"
              :tag="project.tag"
              :projectName="project.projectName"
              :local="project.local"
              :short_description="project.short_description"
            />
          </div>
          <CustomButton href="/projetos" iconLeft="pi pi-arrow-circle-right" outlined :label="`Ver todos os ${totalProjects} projetos`" class="!w-fit" />
        </div>
      </div>
    </section>
    <section class="flex w-full" id="servicos">
      <div class="w-full px-container flex flex-col-reverse lg:flex-row gap-8 items-start justify-between !overflow-hidden">
        <div class="flex flex-col gap-8 w-full">
          <h3 class="text-overline">Overline placeholder</h3>
          <h2 class="text-titlebig">Title placeholder</h2>
          <p class="text-support">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget orci ultrices, rutrum quam euismod, feugiat odio. In quis sem a sapien feugiat vulputate pellentesque sed est. Pellentesque vulputate metus eget sem blandit, vitae ullamcorper ante iaculis. Nunc tristique, velit vel sodales elementum, sapien metus eleifend risus, ac placerat quam nulla vitae risus. 
            <br><br>
            Vestibulum faucibus ante at volutpat blandit. Ut eget nibh lacus. Aliquam sed cursus nisi. Suspendisse urna diam, gravida vitae egestas nec, lacinia vel metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet sit amet purus at pharetra. Nunc luctus lacus at sapien ullamcorper finibus.
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
        <div class="w-full overflow-hidden rounded-md opacity-65">
          <img src="/image-service.jpg" alt="Imagem ilustrativa dos serviços" />
        </div>
      </div>
    </section>
    <section class="flex w-full">
      <div class="w-full px-container flex flex-row gap-8 items-center justify-between !overflow-hidden">
        <div class="flex flex-col gap-8 w-full">
          <h3 class="text-overline">Nossos parceiros</h3>
          <p class="text-support">Esteja ao lado de quem te oferece boas energias.</p>
          <div class="carousel py-4 bg-white rounded-md">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * (100 / logosPerSlide)}%)` }">
              <div class="carousel-slide" v-for="logo in clientLogos" :key="logo._id">
                <img :src="logo.logoUrl" :alt="logo.name" class="client-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="-mt-10">
      <CtaFinal />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import CustomButton from '~/components/CustomButton.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import VideoMask from '~/components/VideoMask.vue';

const { $sanity } = useNuxtApp();
const projects = ref([]);
const clientLogos = ref([]);
const services = ref([]);
const currentSlide = ref(0);
const logosPerSlide = ref(4); // Use ref to dynamically change the value

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

const fetchClientLogos = async () => {
  const query = `*[_type == "clientLogo"]{
    _id,
    name,
    "logoUrl": logo.asset->url
  }`;
  try {
    clientLogos.value = await $sanity.fetch(query);
  } catch (error) {
  }
};

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

const scrollToSection = (sectionId) => {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    const offset = 100; // Ajuste o valor do deslocamento conforme necessário
    const bodyRect = document.body.getBoundingClientRect().top;
    const sectionRect = section.getBoundingClientRect().top;
    const sectionPosition = sectionRect - bodyRect;
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  fetchProjects();
  fetchClientLogos();
  fetchServices();
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % Math.ceil(clientLogos.value.length / logosPerSlide.value);
  }, 3000); // Muda o slide a cada 3 segundos

  // Adjust logosPerSlide based on screen size
  const updateLogosPerSlide = () => {
    if (window.innerWidth < 768) {
      logosPerSlide.value = 2;
    } else {
      logosPerSlide.value = 5;
    }
  };

  window.addEventListener('resize', updateLogosPerSlide);
  updateLogosPerSlide(); // Initial check
});

const displayedProjects = computed(() => {
  const highlightedProjects = projects.value.filter(project => project.highlight);
  if (highlightedProjects.length >= 3) {
    return highlightedProjects.slice(0, 3);
  } else {
    const remainingProjects = projects.value.filter(project => !project.highlight);
    return highlightedProjects.concat(remainingProjects.slice(0, 3 - highlightedProjects.length));
  }
});

useSeoMeta({
  description: 'Conheça os projetos e serviços da Sunnyside! Especialistas em energia renovável, realizamos estudos de viabilidade de usinas fotovoltaicas residenciais, industriais e rurais. Oferecemos soluções inovadoras com o uso de tecnologias avançadas e o conceito BIM, garantindo máxima eficiência e integração entre disciplinas. Descubra como podemos ajudar seu projeto a ser sustentável e eficiente.',
  ogTitle: 'Sunnyside - Projeto sustentáveis',
  ogDescription: 'Conheça os projetos e serviços da Sunnyside! Especialistas em energia renovável, realizamos estudos de viabilidade de usinas fotovoltaicas residenciais, industriais e rurais. Oferecemos soluções inovadoras com o uso de tecnologias avançadas e o conceito BIM, garantindo máxima eficiência e integração entre disciplinas. Descubra como podemos ajudar seu projeto a ser sustentável e eficiente.',
  ogImage: 'https://sunnysidebrasil.com.br/og.png',
  ogUrl: 'https://sunnysidebrasil.com.br/og.png',
  twitterTitle: 'Sunnyside - Projeto sustentáveis',
  twitterDescription: 'Conheça os projetos e serviços da Sunnyside! Especialistas em energia renovável, realizamos estudos de viabilidade de usinas fotovoltaicas residenciais, industriais e rurais. Oferecemos soluções inovadoras com o uso de tecnologias avançadas e o conceito BIM, garantindo máxima eficiência e integração entre disciplinas. Descubra como podemos ajudar seu projeto a ser sustentável e eficiente.',
  twitterImage: 'https://sunnysidebrasil.com.br/twitter.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'pt-br'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})

const totalProjects = computed(() => projects.value.length);
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
.carousel {
  overflow: hidden;
  width: 100%;
  background-color: white;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: calc(100% / 4); /* Exibir 5 logos por vez */
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .carousel-slide {
    min-width: calc(100% / 2); /* Exibir 2 logos por vez em telas menores */
  }
}

.client-logo {
  max-width: 150px;
  max-height: 100px;
  object-fit: contain;
}
</style>