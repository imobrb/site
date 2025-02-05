import CustomButton from '~/components/CustomButton.vue';
import CustomMenuBar from '~/components/CustomMenuBar.vue';
import CustomFooter from '~/components/CustomFooter.vue';
import CustomBreadcrumb from '~/components/CustomBreadcrumb.vue';
import Logo from '~/components/Logo.vue';
import VideoMask from '~/components/VideoMask.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import CtaFinal from '~/components/CtaFinal.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('CustomButton', CustomButton);
  nuxtApp.vueApp.component('CustomMenuBar', CustomMenuBar);
  nuxtApp.vueApp.component('CustomFooter', CustomFooter);
  nuxtApp.vueApp.component('CustomBreadcrumb', CustomBreadcrumb);
  nuxtApp.vueApp.component('Logo', Logo);
  nuxtApp.vueApp.component('VideoMask', VideoMask);
  nuxtApp.vueApp.component('ProjectCard', ProjectCard);
  nuxtApp.vueApp.component('CtaFinal', CtaFinal);
});
