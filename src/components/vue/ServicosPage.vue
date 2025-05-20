<template>
	<div class="flex flex-col gap-10 md:gap-20 px-container w-full py-8 md:pb-24 pb-12">
		<!-- Header Section -->
		<div class="flex flex-col gap-6">
			<Breadcrumb :current-page="currentPage" />
			<div class="flex justify-between items-start">
				<div class="max-w-2xl">
					<h1 class="text-heading-4 mb-4">Serviços prestados</h1>
					<p class="text-body-3 text-surface-600 leading-relaxed">
						A Imobiliária Rio Branco proporciona aos seus clientes o melhor em segurança e
						comodidade, confira alguns dos nossos serviços:
					</p>
					<div class="flex flex-col gap-4 mt-3 md:mt-6">
						<Accordion value="0">
							<AccordionPanel
								v-for="tab in tabs"
								:key="tab.title"
								:value="tab.value"
							>
								<AccordionHeader>{{ tab.title }}</AccordionHeader>
								<AccordionContent>
									<p class="m-0">{{ tab.content }}</p>
								</AccordionContent>
							</AccordionPanel>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Breadcrumb from '@components/vue/Breadcrumb.vue'
	import Accordion from 'primevue/accordion'
	import AccordionPanel from 'primevue/accordionpanel'
	import AccordionHeader from 'primevue/accordionheader'
	import AccordionContent from 'primevue/accordioncontent'
	import { ref } from 'vue'

	const currentPage = {
		label: 'Serviços Prestados',
		url: '/servicos-prestados'
	}

	const tabs = ref([
		{
			title: 'Aluguel garantido',
			content:
				'Pensando na segurança de seus clientes, a Imobiliária Rio Branco oferece a garantia do depósito bancário do aluguel rigorosamente em dia, mesmo no caso do inquilino atrasar o pagamento. A Imobiliária Rio Branco garante ao locador o recebimento do aluguel independentemente do pagamento do locatário, pelo período de dois meses ou até o início da ação de despejo por falta de pagamento, a uma taxa de administração de 10% (dez por cento).',
			value: '0'
		},
		{
			title: 'Área do cliente',
			content:
				'Pensando na segurança de seus clientes, a Imobiliária Rio Branco oferece a garantia do depósito bancário do aluguel rigorosamente em dia, mesmo no caso do inquilino atrasar o pagamento.',
			value: '1'
		},
		{
			title: 'Assistência jurídica',
			content:
				'A Imobiliária Rio Branco oferece assistência jurídica de alto nível para tratar dos eventuais transtornos que possam ocorrer, assumindo a responsabilidade sobre honorários e custos processuais. A Imobiliária Rio Branco conta com uma equipe de advogados especializada em consultoria imobiliária, dirigida pelo advogado Dr. Luiz Antonio Galiani. Endereço do escritório: Rua Tenente Nicolau Maffei, 757 - Centro, Fone: 3222-9577 E-mail galiani@advimobgaliani.adv.br Todos nossos clientes têm total liberdade e reportarem à esses advogados em casos de dúvidas e acompanhamento de processo.',
			value: '2'
		},
		{
			title: 'Relocação imediata',
			content:
				'A Imobiliária Rio Branco compromete-se em empregar todos os seus esforços para que o seu imóvel seja realugado o mais breve possível, expondo-o e inserindo anúncio tanto nos jornais locais como no próprio site da imobiliária. Atuar no mercado imobiliário de forma criativa e inovadora proporcionando a seus clientes plena satisfação e encantamento para que se tornem clientes para sempre. Com essa missão trabalhamos no sentido de realugar o seu imóvel o mais breve possível.',
			value: '3'
		},
		{
			title: 'Repasse direto',
			content:
				'O aluguel, além de ser o retorno sobre um investimento, muitas vezes também faz parte do orçamento familiar. A Imobiliária Rio Branco proporciona toda a segurança de uma empresa que atua no ramo há mais de 30 anos, garantindo o repasse imediato do aluguel recebido. A proposta da Imobiliária Rio Branco é fazer com que o aluguel chegue nas mãos do locador o mais breve possível, pois sabemos que é de suma importância o retorno do investimento.',
			value: '4'
		}
	])
</script>
