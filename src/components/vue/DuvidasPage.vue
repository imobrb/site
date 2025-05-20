<template>
	<div class="flex flex-col gap-10 md:gap-20 px-container w-full py-8 md:pb-24 pb-12">
		<!-- Header Section -->
		<div class="flex flex-col gap-6">
			<Breadcrumb :current-page="currentPage" />
			<div class="flex justify-between items-start">
				<div class="w-full flex flex-col gap-6">
					<div class="flex flex-col gap-6 md:flex-row md:justify-between md:items-end">
						<div class="flex flex-col max-w-2xl">
							<h1 class="text-heading-4 mb-4">Duvidas Frequentes</h1>
							<p class="text-body-3 text-surface-600 leading-relaxed">
								Nosso processo de locação foi feito para facilitar ao máximo sua jornada. Mas a
								gente entende que em alguns momentos possam surgir algumas dúvidas.
							</p>
						</div>
						<Button
							as="a"
							href="/riobranco-manual-do-locatario.pdf"
							target="_blank"
							icon="pi pi-download"
							rounded="full"
							outlined
							label="Manual do locatário"
						/>
					</div>
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
	import Button from 'primevue/button'
	import { ref } from 'vue'

	const currentPage = {
		label: 'Duvidas Frequentes',
		url: '/duvidas-frequentes'
	}

	const tabs = ref([
		{
			title: 'Como devo proceder na desocupação do imóvel?',
			content:
				'Em caso de prazo indeterminado, o locatário deve encaminhar para a imobiliária, com antecedência de 30 dias, um aviso por escrito informando a desocupação do imóvel. Em caso de contrato vigente, deve se entrar em contato com o Departamento Administrativo da Locação para receber instruções específicas.',
			value: '0'
		},
		{
			title: 'Como funciona a Locação Comercial?',
			content:
				'Em caso de locação de imóveis para uso comercial, o locatário é responsável pela obtenção de alvará junto à Prefeitura Municipal, isentando a administradora de qualquer responsabilidade. Fachadas externas e demais benfeitorias, tais como colocação de luminosos, placas, banners, divisórias, entre outros, deverão ser removidas antes da entrega do imóvel.',
			value: '1'
		},
		{
			title: 'Como funciona a vistoria da entrega de imóvel?',
			content:
				'A mesma precisa ser agendada com 72 horas de antecedência junto ao Departamento Administrativo de Locação. Imovél precisa estar limpo, organizado e com pintura adequada (condições em conformidade estipulada com a vistoria inicial). Locatário, ou seu representante, devem estar acompanhando a vistoria de entrega, tendo em vista tolerância máxima de 15 minutos após horário agendado. Em caso de divergencias na entrega (sendo elas reparos necessários no imovel) os encargos sendo eles: tarifas de água e luz, taxa de condomínio e IPTU, continuam sob a responsabilidade do locatário até regularização e entrega do imóvel.',
			value: '2'
		},
		{
			title: 'Como funciona em caso de incêndio e vendaval?',
			content:
				'Conforme o Contrato de Locação, o locatário ficará responsavel pela contratação do seguro. O encargo poderá ser cobrado em recibo de aluguel.',
			value: '3'
		},
		{
			title: 'Como funciona o meio de cobrança dos condominios?',
			content:
				'Cada condomínio tem seu próprio meio de cobrança, geralmente via boleto. É importante que o locatário apresente-se ao síndico e busque informações sobre como proceder para efetuar o pagamento, bem como informar-se sobre qual empresa é responsável pela administração do condomínio. Caso o boleto não seja cargo de responsabilidade do locatário, deverá ser entregue na imoniliária.',
			value: '4'
		},
		{
			title: 'Como funciona o reajuste?',
			content:
				'O aluguel sofrerá reajuste anualmente como consta em contrato de locação. Este reajuste está previsto no art.º28 da lei 9.069/95. O indice mais utilizado para reajuste dos contratos de locação é o IGPM.',
			value: '5'
		},
		{
			title: 'Consigo solicitar e emitir 2ª via do boleto?',
			content:
				'Para solicitar a emissão de segunda via, o locatário poderá acessar o site da imobiliária www.imobiliariariobranco.com.br (área do cliente) ou realizar a retirada diretamente em nosso escritório. Obs: em caso de boleto vencido, será acrescentada taxa de multa conforme consta em contrato de locação.',
			value: '6'
		},
		{
			title: 'É possivel solicitar mudança na data do meu aluguel?',
			content:
				'Sim, é possivel solicitar a mudança no dia de vencimento do pagamento com a Imobiliária. No entanto, caso a locação seja na modalidade "seguro fiança" como garantia, não será possivel altera-lo.',
			value: '7'
		},
		{
			title: 'Em caso de Imposto de Renda?',
			content:
				'Sendo o Locatário Pessoa Jurídica, deve ser apresentado o DARF quitados. Lembrando que, em caso de não pagamento do imposto de renda retido em fonte, o mesmo constitui apropriação indébita de erário público, sejeitando-se às penalidades cabíveis.',
			value: '8'
		},
		{
			title: 'IPTU pode ser pago à vista?',
			content:
				'Sim, para isso é preciso solicitar o pagamento 30 dias antes do vencimento da cota única.',
			value: '9'
		},
		{
			title: 'O que é contestação de vistoria?',
			content:
				'Contestação de vistoria nada mais é que um documento feito pelo locatário que relata todas as divergências durante a vistoria realizada com a imobiliária. Essa contestação pode ser feita atráves do email: vistoria@imobiliariariobranco.com.br ou pessoalmente na imobiliária.',
			value: '10'
		},
		{
			title: 'O que é fundo de reserva?',
			content:
				'O fundo de reserva é o meio mais tradicional de arrecadação extra, previsto na convenção do condomínio. É responsabilidade do proprietário do imóvel, no entanto, deverá ser pago pelo futuro morador. O locatário deve encaminhar os comprovantes pagos à imobiliária o mais breve possível, para que possam ser descontados do aluguel do mês corrente.',
			value: '11'
		},
		{
			title: 'Posso realizar transferência de Inquilino/ Venda de Ponto?',
			content:
				'É expressamente proibido ao locatário ceder, transferir ou passar a locação ceder, transferir ou passar a locação para terceiros, sob risco de quebra contratual grave e aplicação de multa contratual prevista, além de medidas jurídicas.',
			value: '12'
		}
	])
</script>
