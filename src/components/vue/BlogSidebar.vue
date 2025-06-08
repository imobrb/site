<template>
  <div class="w-full flex flex-col gap-10 max-w-40 md:max-w-80">
    <!-- Busca -->
    <div class="flex md:flex-row flex-col gap-2">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          placeholder="Busca no blog... "
          class="w-full"
        />
      </IconField>
    </div>

    <!-- Assuntos -->
    <div class="flex flex-col gap-6 items-start">
      <h3 class="text-heading-2 text-surface-900">Assuntos</h3>
      <div class="flex flex-col gap-2">
        <Button
          v-for="category in categories"
          :key="category.url"
          :as="'a'"
          :href="category.url"
          :label="category.label"
          text
          class="p-0 group flex justify-start gap-2 w-full text-primary-500"
        >
          <i class="pi pi-angle-right"></i>
          <span class="group-hover:underline font-semibold">{{ category.label }}</span>
        </Button>
      </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-col gap-6 items-start">
      <h3 class="text-heading-2 text-surface-900">Tags</h3>
      <div class="flex flex-wrap gap-1">
        <Button
          v-for="tag in tags"
          :key="tag.url"
          :as="'a'"
          :href="tag.url"
          :label="tag.label"
          severity="primary"
          class="px-2.5 text-xs"
          size="small"
          rounded="full"
        />
      </div>
    </div>

    <!-- Receba novidades por e-mail -->
    <div class="flex flex-col gap-5 items-start">
      <h3 class="text-heading-2 text-surface-900">Receba novidades por e-mail</h3>
      <form class="flex flex-col gap-3 w-full">
        <InputText
          placeholder="Seu e-mail"
          class="w-full py-4 px-4"
        />
        <InputText
          placeholder="Seu nome"
          class="w-full py-4 px-4"
        />
        <Button
          label="Receber novidades"
          severity="secondary"
          class="w-full h-14"
          rounded="full"
        />
      </form>
    </div>

    <!-- Posts mais acessados -->
    <div class="flex flex-col gap-6 items-start">
      <h3 class="text-heading-2 text-surface-900">Posts mais acessados</h3>
      <div class="flex flex-col gap-8">
        <a
          v-for="post in mostAccessedPosts"
          :key="post.position"
          :href="post.url"
          class="flex flex-col md:flex-row gap-4 group hover:opacity-80 transition-opacity"
        >
          <div class="relative min-w-[60px] h-[60px] rounded-lg">
            <div
              class="absolute top-0 left-3 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold -translate-y-1/2 -translate-x-1/2"
            >
              {{ post.position }}º
            </div>
            <img
              :src="post.image.src"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h4
            class="text-surface-900 font-medium group-hover:text-primary-500 transition-colors"
          >
            {{ post.title }}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

defineProps({
  categories: {
    type: Array,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  mostAccessedPosts: {
    type: Array,
    required: true
  }
})
</script> 