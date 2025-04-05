<template>
    <div class="w-full px-container flex flex-col gap-4 md:gap-6 pt-8 pb-16">
        <Breadcrumb
            :current-page="currentPage"
        />
        
        <!-- Location and Map Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 bg-primary-500 rounded-3xl">
            <div class="flex flex-col p-8 md:p-12 gap-8 justify-center">
                <h3 class="text-heading-4 font-bold text-white">Onde estamos</h3>

                <div class="flex flex-col gap-8">
                    <div class="flex items-center gap-2">
                        <i class="pi pi-map-marker text-white text-2xl"></i>
                        <p class="text-white text-heading-1">Casemiro Dias, 415 Vila Nova - Pres. Prudente SP</p>
                    </div>

                    <div class="flex flex-col gap-3 w-fit">
                        <Button
                            as="a"
                            href="tel:1821046944"
                            text
                            class="bg-white text-surface-900 w-fit"
                            icon="pi pi-phone"
                            label="(18) 2104-6944"
                            rounded="full"
                        />
                        
                        <Button
                            as="a" 
                            href="https://api.whatsapp.com/send?phone=5518996041075&text=*Olá, gostaria de mais informações sobre esse imóvel*"
                            target="_blank"
                            rounded="full"
                            class="text-white w-fit"
                            severity="success"
                            icon="pi pi-whatsapp"
                            label="+55 18 99604-1075"
                        />
                    </div>
                </div>
            </div>

            <div class="w-full h-[480px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.991280531618!2d-51.391207685580405!3d-22.126304016047538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f5b2b4aa9991%3A0xb1bb0c020d7b2451!2sImobili%C3%A1ria%20Rio%20Branco!5e0!3m2!1spt-BR!2sbr!4v1615470446207!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>

        <!-- Contact Form Section -->
        <div class="flex flex-col gap-8">
            <h2 class="text-heading-3 text-surface-900 mb-0 md:mb-4">Vamos Conversar?</h2>
            
            <form class="flex flex-col gap-4">
                <div class="flex flex-col md:flex-row gap-6 w-full">
                    <div class="flex flex-col gap-4 w-full md:w-3/5">
                        <div class="flex flex-col gap-1.5">
                            <label class="pl-2">Digite seu nome</label>
                            <InputText v-model="form.name" class="w-full" />
                        </div>
                        
                        <div class="flex flex-col gap-1.5">
                            <label class="pl-2">Digite seu email</label>
                            <InputText v-model="form.email" class="w-full" />
                        </div>

                        <div class="align-items-center gap-2 mt-2 hidden md:flex">
                            <Checkbox v-model="form.acceptPrivacy" binary inputId="acceptPrivacy" />
                            <label for="acceptPrivacy" class="ml-2 text-sm cursor-pointer">
                                Declaro estar ciente que a ação de envio deste formulário permite que seja contatado pela Imobiliária Rio Branco, assim como estar de acordo como o exposto na <a href="/politica-de-privacidade" class="text-primary-500 hover:underline" target="_blank">política de cookies.</a>
                            </label>
                        </div>
                    </div>
                
                    <div class="flex flex-col w-full gap-4">
                        <div class="flex flex-col gap-1.5">
                            <label class="pl-2">Assunto</label>
                            <InputText v-model="form.subject" class="w-full" />
                        </div>
                        <div class="flex flex-col gap-1.5 w-full">
                            <label class="pl-2">Digite sua mensagem</label>
                            <Textarea v-model="form.message" class="w-full" rows="5" />
                        </div>
                    </div>

                    <div class="align-items-center gap-2 mt-2 flex md:hidden ">
                        <Checkbox v-model="form.acceptPrivacy" binary inputId="acceptPrivacy" />
                        <label for="acceptPrivacy" class="ml-2 text-sm cursor-pointer">
                            Declaro estar ciente que a ação de envio deste formulário permite que seja contatado pela Imobiliária Rio Branco, assim como estar de acordo como o exposto na <a href="/politica-de-privacidade" class="text-primary-500 hover:underline" target="_blank">política de cookies.</a>
                        </label>
                    </div>
                </div>


                <div class="flex justify-end w-full mt-4 md:mt-0">
                    <Button label="Entrar em contato" class="w-full md:w-fit" rounded="full" severity="primary" :disabled="!form.acceptPrivacy" />
                </div>
            </form>
        </div>

        <!-- Social Media Section -->
        <Divider class="my-12" />

        <div class="flex flex-col gap-8 items-center">
        
            <h2 class="text-heading-3 text-surface-900 text-center">Entre em contato pelas redes</h2>
            
            <div class="flex items-center gap-8">
                <a href="https://www.facebook.com/imobiliariariobranco/" target="_blank" class="flex justify-center">
                    <div class="w-14 h-14 rounded-full bg-[#1976D2] flex items-center justify-center">
                        <i class="pi pi-facebook text-white text-2xl"></i>
                    </div>
                </a>
                
                <a href="https://www.youtube.com/user/imoRioBranco" target="_blank" class="flex justify-center">
                    <div class="w-14 h-14 rounded-full bg-[#FF2D2D] flex items-center justify-center">
                        <i class="pi pi-youtube text-white text-2xl"></i>
                    </div>
                </a>
                
                <a href="https://www.instagram.com/imobiliariariobranco/" target="_blank" class="flex justify-center">
                    <div class="w-14 h-14 rounded-full bg-gradient-to-r from-[#F99B4A] to-[#DA5CA1] flex items-center justify-center">
                        <i class="pi pi-instagram text-white text-2xl"></i>
                    </div>
                </a>
                
                <a href="https://api.whatsapp.com/send?phone=5518996041075" target="_blank" class="flex justify-center">
                    <div class="w-14 h-14 rounded-full bg-[#3EB959] flex items-center justify-center">
                        <i class="pi pi-whatsapp text-white text-2xl"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from '@components/vue/Breadcrumb.vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const currentPage = {
    label: 'Contato',
    url: '/contato'
}

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
    acceptPrivacy: false
})
</script>