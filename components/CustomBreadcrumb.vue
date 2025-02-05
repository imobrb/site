<template>
  <div class="card flex justify-content-center -ml-1.5">
    <Breadcrumb :model="breadcrumbItems">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']"></span>
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url || '#'" v-bind="props.action" @click="handleItemClick(item)">
          <span :class="[item.icon, 'text-color']"></span>
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  customItems: {
    type: Array,
    default: () => []
  }
});

const router = useRouter();

const breadcrumbItems = computed(() => {
  const currentRoute = router.currentRoute.value;
  const matchedRoutes = currentRoute.matched;
  const items = [];

  // Adiciona manualmente a rota "Home" no início do breadcrumb
  items.push({ label: 'Início', route: '/' });

  matchedRoutes.forEach(route => {
    if (route.path === '/') return; // Ignore root route

    const segments = route.path.split('/').filter(segment => segment);
    segments.forEach((segment, index) => {
      const routePath = '/' + segments.slice(0, index + 1).join('/');
      const matchedRoute = matchedRoutes.find(r => r.path === routePath);
      if (matchedRoute && !items.find(item => item.route === routePath)) {
        items.push({ label: matchedRoute.meta?.breadcrumb || segment, route: routePath });
      }
    });
  });

  // Adiciona itens personalizados
  if (props.customItems.length > 0) {
    items.push(...props.customItems);
  }

  // Remove duplicatas e itens com label ":id()"
  const uniqueItems = items.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.route === item.route && t.label === item.label
    )) && item.label !== ':id()'
  );

  return uniqueItems;
});
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>