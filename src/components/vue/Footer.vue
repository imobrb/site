<template>
    <div class="w-full flex flex-col bg-primary-500 text-white py-8">
       <div class="px-container w-full justify-center items-center flex flex-col gap-10">

        <div class="w-full flex items-center justify-center">
            <Button
                outline
                rounded
                label="Voltar ao topo"
                icon="pi pi-arrow-up"
                class="text-white border-white"
            />
        </div>

        <!-- Nav -->
        <div class="flex flex-wrap md:flex-row gap-4 justify-between w-full">
            <div class="flex flex-col gap-4">
                <h3 class="text-heading-2 text-left">Institucional</h3>
                <div class="flex flex-col gap-1 items-start">
                    <Button
                        text
                        label="Empresa"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Contato"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Duvidas Frequentes"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Serviços prestados"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h3 class="text-heading-2 text-left">Ferramentas</h3>
                <div class="flex flex-col gap-1 items-start">
                    <Button
                        text
                        label="Área do cliente"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Cadastre seu imóvel"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Financiamento"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h3 class="text-heading-2 text-left">Aluguel</h3>
                <div class="flex flex-col gap-1 items-start">
                    <Button
                        text
                        label="Apartamentos"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Casas"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Salões comerciais"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Sobrados"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h3 class="text-heading-2 text-left">Vendas</h3>
                <div class="flex flex-col gap-1 items-start">
                    <Button
                        text
                        label="Apartamentos"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Casas"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Salões comerciais"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Sobrados"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                    <Button
                        text
                        label="Terrenos"
                        icon="pi pi-arrow-right"
                        class="text-white"
                        size="small"
                    />
                </div>
            </div>
        </div>

        <!-- Logo & Social -->
        <div class="w-full flex flex-col-reverse items-start md:flex-row gap-8 justify-between md:items-center">
            <div class="flex gap-2">
                <img src="/logo-vertical-white.svg" alt="Logotipo Imobiliaria Rio Branco">
                <img src="/selo-unimob.png" alt="Selo Associada Unimob">
            </div>
            <div class="w-auto flex gap-2">
                <Button
                    outline
                    rounded
                    size="small"
                    label="+55 18 99604-1075"
                    icon="pi pi-whatsapp"
                    class="text-white border-white h-10"
                />
                <Button
                    outline
                    rounded
                    size="small"
                    icon="pi pi-facebook"
                    class="text-white border-white w-10"
                />
                <Button
                    outline
                    rounded
                    size="small"
                    icon="pi pi-instagram"
                    class="text-white border-white w-10"
                />
                <Button
                    outline
                    rounded
                    size="small"
                    icon="pi pi-linkedin"
                    class="text-white border-white w-10"
                />
            </div>
        </div>

        <Divider class="m-0"/>

        <div class="text-xs justify-between w-full flex flex-col md:flex-row items-start gap-4">
            <Button
                outline
                text
                label="Política de Privacidade"
                icon="pi pi-arrow-right"
                class="text-white px-0"
                size="small"
            />
            <div class="flex flex-col gap-2 md:flex-row">
                <span>Todos os direitos reservados © 2025. Creci 1056 J | Imobiliária Rio Branco</span>
                <span>Desenvolvido por <a href="https://uxduda.com" target="_blank">uxduda</a> & <a href="https://robsonjunior.dev" target="_blank">robsonjunior</a>.</span>
            </div>
        </div>

       </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>