<template>
  <NuxtLink
    :to="href"
    :class="computedClasses"
    :target="newtab ? '_blank' : '_self'"
  >
    <i v-if="iconLeft" :class="iconLeft"></i>{{ label }} <i v-if="iconRight" :class="iconRight"></i>
  </NuxtLink>
</template>

<script>
import { defineComponent } from 'vue';
import { NuxtLink } from '#components';

export default defineComponent({
  name: 'CustomButton',
  components: {
    NuxtLink
  },
  props: {
    href: String,
    label: String,
    iconLeft: String,
    iconRight: String,
    newtab: Boolean,
    text: Boolean,
    primary: Boolean,
    secondary: Boolean,
    outlined: Boolean
  },
  computed: {
    computedClasses() {
      let commonClasses = 'w-full md:w-auto flex gap-2 justify-center text-white items-center relative font-primary items-center inline-flex text-center align-bottom justify-center leading-[normal] text-sm px-3 py-2 rounded-md border-transparent focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500 hover:bg-primary-500/20 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none';

      let outlinedClasses = 'border !border-primary-500/50 text-white bg-transparent';

      let primaryClasses = 'bg-primary-500 !text-support-500 border border-primary-500 hover:bg-primary-600 hover:text-white';

      let secondaryClasses = 'bg-white !text-secondary-500 border border-primary-500 hover:bg-white/75 hover:text-white';

      let textClasses = 'text-white';

      return [
        commonClasses,
        this.outlined ? outlinedClasses : '',
        this.text ? textClasses : '',
        this.primary ? primaryClasses : '',
        this.secondary ? secondaryClasses : ''
      ].join(' ');
    }
  }
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>