<template>
	<div class="flex flex-col gap-10 md:gap-20 px-container w-full py-8 md:pb-24 pb-12">
		<!-- Header Section -->
		<div class="flex flex-col gap-6">
			<Breadcrumb :current-page="currentPage" />
			<div class="flex justify-between items-start">
				<div class="max-w-2xl">
					<h1 class="text-heading-4 mb-4">Empresa</h1>
					<p class="text-body-3 text-surface-600 leading-relaxed">
						A Imobiliária Rio Branco é reconhecidamente, uma das empresas mais eficientes no mercado
						imobiliário regional e atua há 50 anos com dinamismo e profissionalismo na prestação de
						serviços.
					</p>
				</div>
			</div>
		</div>

		<!-- Quality Service Section -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<h2 class="text-heading-3 text-primary-600 mb-4">Qualidade no atendimento</h2>
				<p class="text-body-3 text-surface-600 leading-relaxed">
					Conquistou uma privilegiada posição através da qualidade no atendimento, seriedade e
					credibilidade, sendo referência para qualquer negócio imobiliário, seja compra, venda,
					locação ou administração de imóveis.
				</p>
			</div>
			<div>
				<h2 class="text-heading-3 text-primary-600 mb-4">Sempre de portas abertas</h2>
				<p class="text-body-3 text-surface-600 leading-relaxed">
					A Imobiliária Rio Branco investe em treinamento, tecnologia, em promoções mercadológicas e
					disponibiliza aos seus clientes recursos totalmente informatizados. Nossos negócios
					imobiliários são gerenciados de maneira eficaz.
				</p>
			</div>
		</div>

		<!-- Mission, Vision, Values Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			<Card class="border border-surface-200">
				<template #header>
					<div class="flex justify-center p-2 pt-8">
						<img
							src="/missao.png"
							alt="Missão"
							class="w-16 h-16 object-contain"
						/>
					</div>
				</template>
				<template #title>
					<h3 class="text-heading-2 text-center text-primary-600">Missão</h3>
				</template>
				<template #content>
					<p class="text-body-2 text-surface-600 text-center">
						Fomentar e viabilizar negócios imobiliários, diferenciando-se pela qualidade, resultados
						e agilidade no atendimento. Atuar com responsabilidade social e ambiental e gerar valor
						para os nossos clientes, colaboradores e parceiros.
					</p>
				</template>
			</Card>

			<Card class="border border-surface-200">
				<template #header>
					<div class="flex justify-center p-2 pt-8">
						<img
							src="/visao.png"
							alt="Visão"
							class="w-16 h-16 object-contain"
						/>
					</div>
				</template>
				<template #title>
					<h3 class="text-heading-2 text-center text-primary-600">Visão</h3>
				</template>
				<template #content>
					<p class="text-body-2 text-surface-600 text-center">
						Ser reconhecida como uma das melhores empresas de gestão e negócios imobiliários.
					</p>
				</template>
			</Card>

			<Card class="border border-surface-200">
				<template #header>
					<div class="flex justify-center p-2 pt-8">
						<img
							src="/valores.png"
							alt="Valores"
							class="w-16 h-16 object-contain"
						/>
					</div>
				</template>
				<template #title>
					<h3 class="text-heading-2 text-center text-primary-600">Valores</h3>
				</template>
				<template #content>
					<p class="text-body-2 text-surface-600 text-center">
						Honestidade, comprometimento, responsabilidade, transparência, relacionamento com
						colaboradores e acima de tudo manter a ética profissional.
					</p>
				</template>
			</Card>
		</div>

		<!-- Timeline Section -->
		<div class="flex flex-col items-center gap-4">
			<h2 class="text-heading-4 text-center">
				{{ new Date().getFullYear() - 1970 }} anos fazendo amigos
			</h2>
			<Timeline
				:value="timelineEvents"
				class="w-full max-w-3xl"
				layout="horizontal"
				align="bottom"
			>
				<template #content="slotProps">
					<span class="text-heading-1 text-primary-600">{{ slotProps.item.year }}</span>
				</template>
				<template #marker="slotProps">
					<Button
						:class="{
							'!text-secondary': selectedYear === slotProps.item.year,
							'!text-transparent': selectedYear !== slotProps.item.year
						}"
						class="!w-5 !h-5 !min-w-0 !border-[2px] !rounded-full !p-3 !border-primary-600"
						@click="selectedYear = slotProps.item.year"
					>
						<i class="pi pi-circle-fill text-xs"></i>
					</Button>
				</template>
			</Timeline>

			<div
				v-if="selectedYear"
				class="max-w-2xl flex flex-col text-center gap-4"
			>
				<h3 class="text-heading-4 text-primary-600">{{ selectedYear }}</h3>
				<p class="text-heading-3 text-primary-600">
					{{ timelineEvents.find((event) => event.year === selectedYear)?.title }}
				</p>
				<p class="text-body-3 text-surface-600">
					{{ timelineEvents.find((event) => event.year === selectedYear)?.description }}
				</p>
			</div>
		</div>

		<Divider class="p-0 m-0" />

		<!-- Awards Section -->
		<div class="flex flex-col items-center w-full">
			<div class="flex flex-col md:flex-row gap-8 items-center">
				<img
					src="/top_of_mind.png"
					alt="Top of Mind"
					class="w-32 h-32 md:w-64 md:h-64 object-contain"
				/>
				<div class="flex flex-col gap-4 items-start justify-start max-w-xl">
					<h2 class="text-heading-3">Somos a marca mais lembrada do setor imobiliário</h2>
					<p class="text-body-3 text-surface-600 p-0 m-0">
						É com grande honra que recebemos o prêmio Top Of Mind 2019 pelo segundo ano consecutivo
						na categoria imobiliária. Obrigado a todos os nossos clientes, parceiros e
						colaboradores, vocês fazem parte desta grande conquista.
					</p>
					<div class="flex gap-4 md:gap-8 flex-wrap">
						<span class="text-heading-3 text-primary-500 flex items-center gap-2">
							<i class="pi pi-circle-fill text-xs"></i>2010
						</span>
						<span class="text-heading-3 text-primary-500 flex items-center gap-2">
							<i class="pi pi-circle-fill text-xs"></i>2015
						</span>
						<span class="text-heading-3 text-primary-500 flex items-center gap-2">
							<i class="pi pi-circle-fill text-xs"></i>2018
						</span>
						<span class="text-heading-3 text-primary-500 flex items-center gap-2">
							<i class="pi pi-circle-fill text-xs"></i>2019
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Breadcrumb from '@components/vue/Breadcrumb.vue'
	import Timeline from 'primevue/timeline'
	import Card from 'primevue/card'
	import Button from 'primevue/button'
	import Divider from 'primevue/divider'

	import { ref } from 'vue'

	const currentPage = {
		label: 'Empresa',
		url: '/empresa'
	}

	const selectedYear = ref('1970')

	const timelineEvents = ref([
		{
			year: '1970',
			title: 'A década de 70 ficou marcada pelo "Milagre Econômico".',
			description:
				'Grandes obras foram iniciadas. O setor da construção civil e os mercados imobiliários experimentaram um crescimento jamais imaginado. Os conjuntos habitacionais surgiram. Presidente Prudente passou a ter o segundo maior do país. A paisagem urbana verticalizou-se e cresceu rapidamente.'
		},
		{
			year: '1973',
			title: 'Um homem teve a visão empreendedora para criar, em 1973, a Imobiliária Rio Branco.',
			description:
				'Hoje, é fácil fazer uma leitura daquele contexto sócio-econômico mas, na época, era necessário muita coragem e determinação para implantar novos negócios. Naquele cenário, um homem teve a visão empreendedora para criar, em 1973, a Imobiliária Rio Branco. Alfredo de Almeida Martins - mais um brasileiro que acreditou em sua capacidade e em seu país. Com coragem, determinação e alguns anos de experiência adquirida no mercado imobiliário da capital paulista, Alfredo Martins iniciou, naquele ano, as atividades do Escritório Imobiliário Rio Branco S/C Ltda, localizado à Rua Major Felício Tarabay, 638.'
		},
		{
			year: '1979',
			title: 'No ano de 1979, deu-se início à construção da nova e definitiva sede da Imobiliária.',
			description:
				'No ano de 1979, deu-se início à construção da nova e definitiva sede da Imobiliária. Aos 20 anos de existência, os negócios se ampliaram, a informatização foi implantada e a equipe, determinada e empenhada em vencer, fez com que o sonho se transformasse em realidade. A partir do anos 90, a imprescindível necessidade de modernização administrativa, faz com que a Imobiliária Rio Branco esteja em sintonia com a realidade do mercado, sempre pronta para atender bem.'
		},
		{
			year: '2003',
			title: 'O dia 19 de outubro de 2003 foi marcante para a "família" Rio Branco.',
			description:
				'O dia 19 de outubro de 2003 foi marcante para a "família" Rio Branco. Nesta data, somaram-se três décadas de atividades em Presidente Prudente. A data foi marcada com um evento comemorativo. Seus convidados foram recepcionados numa solenidade executiva, quando foram homenageados seus funcionários e alguns dos clientes mais antigos.'
		}
	])
</script>
