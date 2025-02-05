<template>
  <div
    v-if="!consentGiven"
    class="fixed bottom-0 left-0 right-0 bg-secondary-500 text-white p-4 flex justify-between items-center z-50 border-t border-white"
  >
    <div class="text-support">
      Este site utiliza cookies para melhorar sua experiência. Saiba mais na nossa
      <NuxtLink to="/privacy-policy" class="underline">Política de Privacidade</NuxtLink>.
    </div>
    <div class="flex gap-2">
        <Button text @click="declineCookies" label="Recusar" />
        <Button @click="acceptCookies" label="Aceitar" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app';

const consentGiven = ref(false);
const runtimeConfig = useRuntimeConfig();

// Verifica o consentimento ao carregar o componente (apenas no cliente)
const checkConsent = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    consentGiven.value = localStorage.getItem('cookie_consent') === 'true';
  }
};

// Aceitar cookies e ativar Google Analytics
const acceptCookies = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem('cookie_consent', 'true');
    consentGiven.value = true;
    enableGoogleAnalytics();
  }
};

// Recusar cookies
const declineCookies = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem('cookie_consent', 'false');
    consentGiven.value = true;
  }
};

// Ativar Google Analytics usando nuxt-gtag
const enableGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && typeof window.$gtag !== 'undefined') {
    window.$gtag.enable(); // Ativa o gtag dinamicamente
  }
};

// Executa a verificação apenas no lado do cliente
onMounted(() => {
  checkConsent();
});
</script>
