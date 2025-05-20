<template>
	<div class="flex flex-col gap-10 md:gap-20 px-container w-full py-8 md:pb-24 pb-12">
		<!-- Header Section -->
		<div class="flex flex-col gap-6">
			<Breadcrumb :current-page="currentPage" />
			<div class="flex justify-between items-start">
				<div class="flex flex-col gap-4">
					<h1 class="text-heading-4 mb-4">Financiamento</h1>
					<p class="text-body-3 text-surface-600 leading-relaxed mb-8">
						Clique nos links abaixo para acessar a página de simulação dos principais bancos
					</p>
					<div class="flex flex-wrap gap-5 items-center justify-center text-center w-full">
						<a
							v-for="bank in banks"
							:key="bank.name"
							:href="bank.url"
							target="_blank"
							class="text-primary-600 hover:text-primary-700"
						>
							<div
								class="w-44 md:min-w-80 flex flex-col gap-4 items-center justify-center p-8 border border-surface-200 rounded-2xl hover:border-primary-200 transition-colors"
							>
								<div>
									<img
										:src="bank.logo"
										:alt="bank.name"
									/>
								</div>
								<div>
									<span class="text-heading-2 text-primary-600">{{ bank.name }}</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Breadcrumb from '@components/vue/Breadcrumb.vue'

	const currentPage = {
		label: 'Financiamento',
		url: '/financiamento'
	}

	const banks = [
		{
			name: 'Banco do Brasil',
			url: 'https://www.bb.com.br/site/pra-voce/consorcios/consorcio-de-imoveis/',
			logo: '/bb.png'
		},
		{
			name: 'Santander',
			url: 'https://www.santander.com.br/hotsite/credito-financiamento-imobiliario/?ic=homepf-cardsprod-creditoimobiliario#/home',
			logo: '/santander.png'
		},
		{
			name: 'Itaú',
			url: 'https://credito-imobiliario.itau.com.br/',
			logo: '/itau.png'
		},
		{
			name: 'Caixa Econômica',
			url: 'https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso',
			logo: '/caixa.png'
		},
		{
			name: 'Bradesco',
			url: 'https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm',
			logo: '/bradesco.png'
		}
	]
</script>
