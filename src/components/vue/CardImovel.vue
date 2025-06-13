<template>
	<div class="relative flex">
		<FavoriteButton
			class="mt-2 ml-2"
			:code="code"
			@click="onFavorite"
		/>

		<a
			:href="props.link?.href"
			:class="[
				'flex rounded-2xl group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary relative w-full',
				listMode ? 'flex-row gap-6' : 'flex-col gap-4 min-h-[460px]'
			]"
		>
			<div
				:class="[
					'group-hover:ring-4 group-hover:ring-primary-500 rounded-2xl overflow-hidden transition-all duration-300',
					listMode ? 'w-1/3' : ''
				]"
			>
				<picture>
					<img
						loading="lazy"
						alt="user header"
						:src="image.src"
						:class="[
							'object-cover w-full h-full',
							'transition-transform duration-300 group-hover:scale-105'
						]"
						role="presentation"
					/>
				</picture>
			</div>

			<div :class="['flex flex-col', listMode ? 'w-2/3 justify-between' : 'gap-2']">
				<div class="flex flex-col gap-2">
					<h3
						class="text-heading-2 text-primary-600"
						role="presentation"
					>
						{{ props.transactionType }} {{ props.price }}
					</h3>
					<div
						class="text-heading-1"
						role="presentation"
					>
						{{ props.title }}
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<span
						class="text-body-1 text-surface-500"
						role="presentation"
					>
						{{ props.subtitle }}
					</span>
				</div>
			</div>

			<div class="absolute bottom-0 flex flex-col gap-2 w-full">
				<ul
					class="m-0 p-0 flex gap-4"
					role="presentation"
				>
					<li
						v-for="room in rooms.slice(0, 4)"
						class="flex flex-col gap-2 p-2 text-center  justify-center items-center max-w-20"
						role="presentation"
					>
						<i
							:class="[
								room.nome === 'DORMITÓRIO(S)' ? 'ii ii-bed-single' : 'pi pi-verified',
								room.nome === 'SUÍTE' ? 'ii ii-bed-double' : 'pi pi-verified',
								room.nome === 'GARAGEM' ? 'ii ii-car' : 'pi pi-verified',
								room.nome === 'COZINHA' ? 'ii ii-kitchen' : 'pi pi-verified',
								room.nome === 'BANHEIRO' ? 'ii ii-shower' : 'pi pi-verified',
								room.nome === 'LAVABO' ? 'ii ii-sink' : 'pi pi-verified',
								room.nome === 'SALA' ? 'ii ii-sofa' : 'pi pi-verified',
								room.nome === 'ÁREA DE SERVIÇO' ? 'ii ii-washer' : 'pi pi-verified'
							]"
							class="pi pi-verified text-surface-500 text-lg"
						>
						</i>
						<p class="text-xs text-surface-500 font-medium leading-none">
							{{ room.quantidade }} {{ replaceRoomsName(room.nome) }}
						</p>
					</li>
				</ul>

				<hr :class="['border-surface-200', listMode ? 'hidden' : '']" />

				<div class="flex flex-row justify-between items-center">
					<div class="flex flex-col text-surface-500 text-sm font-medium">
						<span>Aluguel + Encargos</span>
						<span>Exclusivo</span>
					</div>

					<div class="p-button p-button-primary rounded-full font-medium text-sm">
						{{ props.link?.label }}
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script setup>
	import FavoriteButton from '@components/vue/FavoriteButton.vue'

	const props = defineProps({
		code: {
			type: String
		},
		title: {
			type: String
		},
		subtitle: {
			type: String
		},
		image: {
			type: Object
		},
		transactionType: {
			type: String
		},
		price: {
			type: String
		},
		link: {
			type: Object,
			default() {
				return {
					label: 'Ver imóvel'
				}
			}
		},
		listMode: {
			type: Boolean,
			default: false
		},
		rooms: {
			type: Array,
			default: () => []
		}
	})

	const emit = defineEmits(['onFavorite'])

	const onFavorite = (data) => {
		emit('onFavorite', data)
	}

	function replaceRoomsName(name = '') {
		name = name.replace('ITÓRIO(S)', '.')
		name = name.replace('INHA', '.')
		name = name.replace('HEIRO', '.')
		name = name.replace('ENDÊNCIA', '.')
		name = name.replace('GARAGEM', 'VAGA(s)')

		return name.toLocaleLowerCase()
	}
</script>
