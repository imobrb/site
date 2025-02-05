<template>
    <div class="w-full h-full flex items-center justify-center group cursor-pointer" @click="showModal = true">
        <div class="absolute flex flex-col items-center gap-4 scale-[40%] md:scale-[60%] lg:scale-[100%]">
            <div class="transition-all opacity-75 group-hover:opacity-100 lg:mt-12 group-hover:mt-4">
                <svg width="42" height="51" viewBox="0 0 42 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.450073 44.6554V6.0482C0.450073 1.4892 5.48843 -1.26989 9.33279 1.18068L39.128 20.1735C42.6585 22.424 42.6991 27.5682 39.2015 29.8697L9.39949 49.4796C5.5595 52.0064 0.450073 49.2521 0.450073 44.6554Z" fill="white"/>
                </svg>
            </div>
            <div class="transition-all hidden lg:flex duration-500 text-center font-primary text-xs leading-normal opacity-100 lg:opacity-0 group-hover:opacity-100 text-white">reproduzir <br>video completo</div>
        </div>
        <video
            src="/video-home.mp4"
            autoplay
            loop
            muted
            playsinline
            class="max-w-[140%] opacity-70 transition duration-600 ease-in-out group-hover:scale-[120%] hover:opacity-100"
            :style="{
                WebkitMaskImage: 'url(/mask.svg)',
                maskImage: 'url(/mask.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
            }"
        ></video>
        <Dialog v-model:visible="showModal" modal class="w-full lg:w-4/6" :closable="true" :dismissableMask="true">
            <video
                src="/video-complete.mp4"
                controls
                autoplay
                class="w-full"
            ></video>
        </Dialog>
    </div>
</template>

<script setup>
import { root } from 'postcss';
import { ref } from 'vue'

const showModal = ref(false)
</script>