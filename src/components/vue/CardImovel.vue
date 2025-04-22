<template>
	<div class="relative flex">
		<Button
			rounded
			label="Favoritar"
			size="small"
			icon="pi pi-heart"
			class="w-fit absolute bg-secondary border-none mt-2 ml-2 text-white z-10"
			@click.stop
			tabindex="-1"
			role="presentation"
		/>

		<a
			:href="props.link?.href"
			:class="[
				'flex rounded-2xl group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary relative h-full min-h-[460px]',
				listMode ? 'flex-row gap-6' : 'flex-col gap-4'
			]"
		>
			<div :class="[
				'group-hover:ring-4 group-hover:ring-primary-500 rounded-2xl',
				listMode ? 'w-1/3' : ''
			]">
				<picture class="overflow-hidden rounded-2xl">
					<img
						loading="lazy"
						alt="user header"
						:src="image.src"
						:class="[
							'object-cover rounded-2xl group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-secondary group-hover:scale-105 transition-transform duration-300',
							listMode ? 'w-full h-full' : 'w-full h-48'
						]"
						role="presentation"
					/>
				</picture>
			</div>
			
			<div
				:class="[
					'flex flex-col',
					listMode ? 'w-2/3 justify-between' : 'gap-2'
				]"
			>
				<div class="flex flex-col gap-2">
					<h3 class="text-heading-2 text-primary-600" role="presentation">
						{{ props.transactionType }} R$ {{ props.price }}
					</h3>
					<div class="text-heading-1" role="presentation">
						{{ props.title }}
					</div>
				</div>
	
				<div class="flex flex-col gap-2">
					<span class="text-body-1 text-surface-500" role="presentation">
						{{ props.subtitle }}
					</span>
				</div>

				
			</div>
			<div class="absolute bottom-0 flex flex-col gap-2 w-full">
				<ul class="m-0 p-0 flex gap-4" role="presentation">
					<li
							v-for="room in rooms.slice(0,4)"
						class="flex flex-col gap-2 p-2 text-center justify-center items-center max-w-20" role="presentation"
					>
						<i
							:class="[
								room.nome === 'DORMITÓRIO(S)' ? 'pi pi-users' : 'pi pi-verified',
								room.nome === 'SUÍTE' ? 'pi pi-users' : 'pi pi-verified',
								room.nome === 'GARAGEM' ? 'pi pi-car' : 'pi pi-verified',
								room.nome === 'COZINHA' ? 'pi pi-clock' : 'pi pi-verified',
								room.nome === 'BANHEIRO' ? 'pi pi-cog' : 'pi pi-verified',
								room.nome === 'LAVABO' ? 'pi pi-cog' : 'pi pi-verified',
								room.nome === 'SALA' ? 'pi pi-desktop' : 'pi pi-verified'
							]"
							class="pi pi-verified text-surface-500 text-sm"
						>
						</i>
						<p class="text-xs text-surface-500 font-medium leading-none">
							{{ room.quantidade }} {{ replaceRoomsName(room.nome) }}
						</p>
					</li>
				</ul>
	
				<hr :class="['border-surface-200', listMode ? 'hidden' : '']"/>
	
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
	import Button from 'primevue/button'

	const props = defineProps({
		transactionType: {
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
		price: {
			type: Number
		},
		link: {
			type: Object,
			default() {
				return {
					label: 'Ver imóvel',
				}
			}
		},
		listMode: {
			type: Boolean,
			default: false
		},
		rooms: {
			type: Array,
			default : () => []
		}
	})

	function replaceRoomsName (name='')  {
		name = name.replace('ITÓRIO(S)', '.')
		// name = name.replace('INHA', '.')
		name = name.replace('HEIRO', '.')
		name = name.replace('HEIRO', '.')
		name = name.replace('ENDÊNCIA', '.')
		name = name.replace('GARAGEM', 'VAGA(s)')

		return name.toLocaleLowerCase()
	}
</script>
