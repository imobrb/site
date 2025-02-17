<script setup>
    import Button from "primevue/button";
    import Card from "primevue/card";
    import Divider from "primevue/divider";
</script>

<template>
    <Card class="w-full max-w-lg">
        <template #header>
            <div>
                <Button
                    label="Favoritar"
                    rounded
                    icon="pi pi-heart"
                    class="w-fit absolute bg-[#D95E3A] border-none mt-4 ml-4 text-white"
                />
                <img alt="user header" src="https://riobranco.immobilissistemas.com.br/ws/lib/compress.php?id=3451&tamanho=1280x720&imagem=IMG_E8347.JPG" />
            </div>
        </template>
        <template #title>Aluguel R$480,00</template>
        <template #subtitle>
            <div>Apartamento - Cond Ed Antonina Maria</div>
        </template>
        <template #content>
            <span class="text-body-1 text-surface-600">Presidente Prudente | Jardim Vale do Sol Avenida João Antonio</span>
            <p class="m-0">
                <div class="flex flex-col gap-2 p-2 text-center justify-center items-center max-w-20">
                    <i class="pi pi-car text-surface-600 text-sm" />
                    <span class="text-base text-surface-600 font-medium leading-none">2 vagas</span>
                </div>
            </p>
            <Divider class="my-2"/>
        </template>
        <template #footer>
            <div class="flex flex-row justify-between">
                <div class="flex flex-col">
                    <span>Aluguel + Encargos</span>
                    <span>Exclusivo</span>
                </div>
                <Button
                    label="Ver imóvel"
                    severity="primary"
                    rounded
                />
            </div>
        </template>
    </Card>
</template>
