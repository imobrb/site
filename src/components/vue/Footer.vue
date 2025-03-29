<template>
	<div class="w-full flex flex-col bg-primary-500 text-white py-8">
		<div class="px-container w-full justify-center items-center flex flex-col gap-10">
			<div class="w-full flex items-center justify-center">
				<Button
					outline
					rounded
					size="small"
					label="Voltar ao topo"
					icon="pi pi-arrow-up"
					class="text-white border-white"
					@click="scrollToTop"
				/>
			</div>

			<Panel
		ref="panel"
		:toggleable="true"
		@toggle="onToggle"
		class="w-full"
		:pt="{
			root: { 
				class: 'bg-white border-none rounded-[2rem] gap-2 flex flex-col'
			},
			header: {
				class: 'bg-transparent border-none'
			},
			content: {
				class: 'pt-0'
			}
		}">
			<template #header>
				<div class="flex w-full items-center">
					<Button
						rounded
						:label="selectMode"
						icon="pi pi-chevron-down"
						icon-pos="right"
						severity="primary"
						class="h-12"
					/>
					<InputText
						placeholder="Buscar imóveis..."
						class="w-full bg-transparent text-black border-none px-4"
					/>
					<Button
						text
						rounded
						@click="togglePanel"
						class="flex items-center gap-1 px-4 h-12"
					>
						<span>Filtros</span>
						<i :class="['pi', isExpanded ? 'pi-chevron-up' : 'pi-chevron-down']"></i>
					</Button>
				</div>
			</template>
			<div class="flex flex-wrap gap-2">
				<Button
					outlined
					size="small"
					rounded="full"
					severity="secondary"
					label="Tipo de Negócio"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
				<Button
					outlined
					rounded="full"
					size="small"
					severity="secondary"
					label="Tipo de Imóvel"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
				<Button
					outlined
					rounded="full"
					size="small"
					severity="secondary"
					label="Cidade"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
				<Button
					outlined
					rounded="full"
					size="small"
					severity="secondary"
					label="Detalhes"
					icon="pi pi-chevron-down"
					icon-pos="right"
				/>
			</div>
		</Panel>

			<!-- Nav -->
			<div class="flex flex-wrap md:flex-row gap-4 justify-between w-full">
				<div class="flex flex-col gap-4">
					<h3 class="text-heading-2 text-left">Institucional</h3>
					<div class="flex flex-col gap-1 items-start">
						<Button
							as="a"
							href="/empresa"
							text
							label="Empresa"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/contato"
							text
							label="Contato"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/duvidas-frequentes"
							text
							label="Duvidas Frequentes"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/servicos-prestados"
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
							as="a"
							href="https://riobranco.immobilissistemas.com.br/immobilis/portal/login.php"
							target="_blank"
							text
							label="Área do cliente"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/cadastre-seu-imovel"
							text
							label="Cadastre seu imóvel"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/financiamento"
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
							as="a"
							href="/alugar-imovel/?tipo_imovel=3"
							text
							label="Apartamentos"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/alugar-imovel/?tipo_imovel=1"
							text
							label="Casas"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/alugar-imovel/?tipo_imovel=18"
							text
							label="Salões comerciais"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/alugar-imovel/?tipo_imovel=2"
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
							as="a"
							href="/comprar-imovel/?tipo_imovel=3"
							text
							label="Apartamentos"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/comprar-imovel/?tipo_imovel=1"
							text
							label="Casas"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/comprar-imovel/?tipo_imovel=18"
							text
							label="Salões comerciais"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/comprar-imovel/?tipo_imovel=2"
							text
							label="Sobrados"
							icon="pi pi-arrow-right"
							class="text-white"
							size="small"
						/>
						<Button
							as="a"
							href="/comprar-imovel/?tipo_imovel=7"
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
			<div
				class="w-full flex flex-col-reverse items-start md:flex-row gap-8 justify-between md:items-center"
			>
				<div class="flex gap-2">
					<img
						src="/logo-vertical-white.svg"
						alt="Logotipo Imobiliaria Rio Branco"
					/>
					<img
						src="/selo-unimob.png"
						alt="Selo Associada Unimob"
					/>
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

			<Divider class="m-0" />

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
					<span
						>Desenvolvido por
						<a
							href="https://uxduda.com"
							target="_blank"
							>uxduda</a
						>
						&
						<a
							href="https://robsonjunior.dev"
							target="_blank"
							>robsonjunior</a
						>.</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'

function scrollToTop() {
  const topElement = document.getElementById('app')
  if (topElement) {
    topElement.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Fallback, caso não encontre o elemento:
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
