<template>
    <NuxtLayout>
        <SpeedInsights />
        <CookiesBanner />
        <CustomMenuBar />
        <NuxtPage />
        <CustomFooter />
    </NuxtLayout>
</template>

<script setup lang="ts">
import CookiesBanner from '@/components/CookiesBanner.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>