<template>
	<div class="w-full flex flex-col items-center bg-primary-800 py-10 custom-bg">
		<div class="px-container w-full">
			<Breadcrumb
				:current-page="currentPage"
				class="border-none p-0 !bg-transparent"
			/>
		</div>
		<div
			class="w-full px-container flex flex-col gap-4 md:gap-6 pt-8 pb-16 items-center justify-center"
		>
			<h1 class="text-heading-4 text-surface-0 text-center">Cadastre seu imóvel</h1>

			<div class="w-full rounded-2xl p-8 max-w-3xl border bg-white">
				<form
					@submit.prevent="submitForm"
					class="flex flex-col gap-4 md:gap-8"
				>
					<!-- Dados Pessoais -->
					<div class="flex flex-col gap-4">
						<h2 class="text-heading-1 text-surface-600">Dados Pessoais</h2>
						<Divider class="p-0 m-0 mb-4" />
						<div class="flex flex-col gap-4">
							<div class="flex flex-col gap-1.5">
								<label class="pl-2">Digite seu nome</label>
								<InputText
									v-model="formData.nome"
									class="w-full"
								/>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-0 m-0">
								<div class="flex flex-col gap-1.5">
									<label class="pl-2">Digite seu telefone</label>
									<InputText
										v-model="formData.telefone"
										class="w-full"
									/>
								</div>
								<div class="flex flex-col gap-1.5">
									<label class="pl-2">Digite seu email</label>
									<InputText
										v-model="formData.email"
										type="email"
										class="w-full"
									/>
								</div>
							</div>
						</div>
					</div>

					<!-- Dados do Imóvel -->
					<div class="flex flex-col gap-4">
						<h2 class="text-heading-1 text-surface-600">Dados do Imóvel</h2>
						<Divider class="p-0 m-0 mb-4" />
						<div class="flex flex-col gap-4">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-0 m-0">
								<div class="flex flex-col gap-1.5">
									<label class="pl-2">Escolha a finalidade</label>
									<Select
										v-model="formData.finalidade"
										:options="finalidades"
										class="w-full p-variant-secondary"
									/>
								</div>
								<div class="flex flex-col gap-1.5">
									<label class="pl-2">Escolha o tipo de imóvel</label>
									<Select
										v-model="formData.tipo"
										:options="tiposImovel"
										class="w-full p-variant-secondary"
									/>
								</div>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-0 m-0">
								<div class="flex flex-col gap-1.5">
									<label class="pl-2">Digite a cidade</label>
									<InputText
										v-model="formData.cidade"
										class="w-full"
									/>
								</div>
								<div class="flex flex-col gap-1.5">
									<label class="pl-2">Digite o bairro</label>
									<InputText
										v-model="formData.bairro"
										class="w-full"
									/>
								</div>
							</div>
							<div class="flex flex-col gap-1.5">
								<label class="pl-2">Digite o valor pretendido</label>
								<InputNumber
									v-model="formData.valor"
									mode="currency"
									currency="BRL"
									locale="pt-BR"
									class="w-full"
								/>
							</div>
							<div class="flex flex-col gap-1.5">
								<label class="pl-2">Digite sua mensagem</label>
								<Textarea
									v-model="formData.mensagem"
									rows="5"
									class="w-full"
								/>
							</div>
						</div>
					</div>

					<!-- Checkbox de Política -->
					<div class="align-items-center gap-2">
						<Checkbox
							v-model="formData.aceitaPolitica"
							binary
							inputId="acceptPrivacy"
						/>
						<label
							for="acceptPrivacy"
							class="ml-2 text-sm cursor-pointer"
						>
							Declaro estar ciente que a ação de envio deste formulário permite que seja contatado
							pela Imobiliária Rio Branco, assim como estar de acordo com o exposto na
							<a
								href="/politica-de-privacidade"
								class="text-primary-500 hover:underline"
								target="_blank"
								>política de cookies</a
							>.
						</label>
					</div>

					<!-- Botão de Envio -->
					<div class="flex justify-end w-full mt-4 md:mt-0">
						<Button
							type="submit"
							label="Cadastrar Imóvel"
							rounded="full"
							severity="primary"
							:disabled="!formData.aceitaPolitica"
							class="w-full md:w-fit"
						/>
					</div>
				</form>
			</div>

			<!-- Serviços Disponíveis -->
			<div class="w-full max-w-3xl flex flex-col gap-8 mt-12">
				<h2 class="text-heading-3 text-white text-center">Serviços disponíveis</h2>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
					<div
						v-for="(servico, index) in servicos"
						:key="index"
						class="flex flex-col items-center gap-2 p-4 bg-primary-500 rounded-lg text-white hover:bg-primary-600 cursor-pointer"
					>
						<i
							:class="servico.icon"
							class="text-2xl"
						></i>
						<span class="text-body-3 font-semibold text-center">{{ servico.nome }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import Button from 'primevue/button'
	import InputText from 'primevue/inputtext'
	import Select from 'primevue/select'
	import Textarea from 'primevue/textarea'
	import Checkbox from 'primevue/checkbox'
	import InputNumber from 'primevue/inputnumber'
	import Divider from 'primevue/divider'
	import Breadcrumb from '@/components/vue/Breadcrumb.vue'

	const currentPage = {
		label: 'Cadastre seu Imóvel',
		url: '/cadastre-seu-imovel'
	}

	const formData = ref({
		nome: '',
		telefone: '',
		email: '',
		finalidade: null,
		tipo: null,
		cidade: '',
		bairro: '',
		valor: null,
		mensagem: '',
		aceitaPolitica: false
	})

	const finalidades = [
		{ label: 'Venda', value: 'venda' },
		{ label: 'Aluguel', value: 'aluguel' },
		{ label: 'Temporada', value: 'temporada' }
	]

	const tiposImovel = [
		{ label: 'Casa', value: 'casa' },
		{ label: 'Apartamento', value: 'apartamento' },
		{ label: 'Terreno', value: 'terreno' },
		{ label: 'Comercial', value: 'comercial' },
		{ label: 'Rural', value: 'rural' }
	]

	const servicos = [
		{ nome: 'Financiamento', icon: 'pi pi-money-bill' },
		{ nome: 'Relocação imediata', icon: 'pi pi-home' },
		{ nome: 'Repasse direto', icon: 'pi pi-sync' },
		{ nome: 'Aluguel Garantido', icon: 'pi pi-shield' },
		{ nome: 'Assistência Jurídica', icon: 'pi pi-file' },
		{ nome: 'Área do cliente', icon: 'pi pi-user' }
	]

	const submitForm = () => {
		// Implementar lógica de envio do formulário
		console.log('Dados do formulário:', formData.value)
	}
</script>

<style scoped>
	.custom-bg {
		background-image: url(/public/chaves.png), url(/public/bg-cadastre-seu-imovel.svg);
		background-size:
			400px 400px,
			cover;
		background-repeat: no-repeat, no-repeat;
		background-position: 0% 23%;
	}
</style>
